'use server';

import { z } from 'zod';
import { db, schema } from '../src/db'; // Corrected path
import { revalidatePath } from 'next/cache';
import { Resend } from 'resend';
import { AppointmentConfirmationEmail } from '../emails/appointment-confirmation-email'; // Adjust path if necessary
import { WaitlistConfirmationEmail } from '../emails/waitlist-confirmation-email';

// Zod schema for server-side validation
const appointmentSchema = z.object({
  name: z.string().min(1, { message: "Naam is verplicht." }),
  contactInfo: z.string().min(1, { message: "E-mail of telefoonnummer is verplicht." })
    .refine(value => {
      const emailCheck = z.string().email().safeParse(value);
      if (emailCheck.success) return true;
      const phoneRegex = /^(0|\+)[0-9 \(\)-]{6,20}$/;
      const digitCount = (value.match(/\d/g) || []).length;
      return phoneRegex.test(value) && digitCount >= 7;
    }, { message: "Voer een geldig e-mailadres of telefoonnummer in." }),
  appointmentDate: z.coerce.date({ // coerce transforms string from FormData to Date
    required_error: "Afspraakdatum is verplicht.",
    invalid_type_error: "Ongeldige datum.",
  }),
  appointmentTime: z.string().min(1, { message: "Afspraaktijd is verplicht." }),
  notes: z.string().optional(),
});

const waitlistSchema = z.object({
  email: z.string().email({ message: "Voer een geldig e-mailadres in." }),
});

export interface CreateAppointmentResponse {
  success: boolean;
  message?: string;
  errors?: z.ZodIssue[];
  appointmentId?: string;
  emailSent?: boolean;
  emailError?: string;
}

export interface AddToWaitlistResponse {
  success: boolean;
  message: string;
  errors?: z.ZodIssue[];
}

const resend = new Resend(process.env.RESEND_API_KEY);

const isValidEmail = (email: string): boolean => {
  return z.string().email().safeParse(email).success;
};

export async function createAppointment(
  prevState: CreateAppointmentResponse | null, 
  formData: FormData
): Promise<CreateAppointmentResponse> {
  const rawData = {
    name: formData.get('name'),
    contactInfo: formData.get('email'), // maps to 'email' field name from your form
    appointmentDate: formData.get('appointmentDate'),
    appointmentTime: formData.get('appointmentTime'),
    notes: formData.get('notes'),
  };

  const validationResult = appointmentSchema.safeParse(rawData);

  if (!validationResult.success) {
    return {
      success: false,
      message: "Validatiefout. Controleer de ingevoerde gegevens.",
      errors: validationResult.error.issues,
    };
  }

  const data = validationResult.data;
  let newAppointmentId: string | undefined = undefined;

  try {
    const [insertedAppointment] = await db
      .insert(schema.appointments)
      .values({
        name: data.name,
        contactInfo: data.contactInfo,
        appointmentDate: data.appointmentDate.toISOString().split('T')[0], // Format Date to YYYY-MM-DD string
        appointmentTime: data.appointmentTime,
        notes: data.notes,
        // id, createdAt, updatedAt are handled by the database/Drizzle defaults
      })
      .returning({ id: schema.appointments.id });
    
    newAppointmentId = insertedAppointment.id;

    // Revalidate a path if you want to update a list of appointments displayed elsewhere
    // revalidatePath('/admin/appointments'); 

  } catch (dbError) {
    console.error("Database error creating appointment:", dbError);
    return {
      success: false,
      message: "Er is een fout opgetreden bij het opslaan van de afspraak. Probeer het later opnieuw.",
    };
  }

  // Send confirmation email if contactInfo is a valid email
  if (newAppointmentId && isValidEmail(data.contactInfo)) {
    console.log(`Attempting to send appointment confirmation email to: ${data.contactInfo} for appointment ID: ${newAppointmentId}`);
    try {
      const { data: emailData, error: emailErrorResponse } = await resend.emails.send({
        from: 'Bolbaas <afspraak@bolbaas.nl>',
        to: [data.contactInfo],
        bcc: ['thijmendreef@icloud.com'],
        subject: 'Afspraak bevestigd ✓',
        react: AppointmentConfirmationEmail({
          name: data.name,
          appointmentDate: data.appointmentDate, // Pass Date object
          appointmentTime: data.appointmentTime,
          appointmentId: newAppointmentId, // Pass the appointment ID
        }) as React.ReactElement,
      });

      if (emailErrorResponse) {
        console.error("Error sending confirmation email (Resend response error):", emailErrorResponse);
        return {
          success: true, // Appointment was created
          message: "Afspraak gepland, maar de bevestigingsmail kon niet worden verzonden.",
          appointmentId: newAppointmentId,
          emailSent: false,
          emailError: "Versturen van e-mail mislukt (server).", 
        };
      }

      console.log(`Successfully sent confirmation email. ID: ${emailData?.id}, To: ${data.contactInfo}`);
      return {
        success: true,
        message: "Afspraak succesvol gepland! Er is een bevestiging gestuurd.",
        appointmentId: newAppointmentId,
        emailSent: true,
      };
    } catch (emailCatchError) { // Catch any other unexpected errors during email sending
      console.error("Unexpected error during email sending process:", emailCatchError);
      return {
        success: true, // Appointment was created
        message: "Afspraak gepland, maar de bevestigingsmail kon niet worden verzonden (onverwachte fout).",
        appointmentId: newAppointmentId,
        emailSent: false,
        emailError: "Versturen van e-mail mislukt (onverwacht).",
      };
    }
  } else if (newAppointmentId) {
    // Appointment created, but contactInfo was not an email (e.g., phone number)
    return {
      success: true,
      message: "Afspraak succesvol gepland!",
      appointmentId: newAppointmentId,
      emailSent: false, // No email sent as it wasn't an email address
    };
  }

  // Fallback, should not be reached if db insert was successful
  return {
    success: false,
    message: "Er is een onbekende fout opgetreden."
  };
}

export async function addToWaitlist(
  prevState: AddToWaitlistResponse | null,
  formData: FormData
): Promise<AddToWaitlistResponse> {
  const rawData = {
    email: formData.get('email'),
  };

  const validationResult = waitlistSchema.safeParse(rawData);

  if (!validationResult.success) {
    return {
      success: false,
      message: "Validatiefout.",
      errors: validationResult.error.issues,
    };
  }

  const { email } = validationResult.data;

  try {
    // Check if email already exists
    const existingEntry = await db.query.waitlist.findFirst({
      where: (waitlist, { eq }) => eq(waitlist.email, email),
    });

    if (existingEntry) {
      return {
        success: false,
        message: "Dit e-mailadres staat al op de wachtlijst.",
      };
    }

    await db.insert(schema.waitlist).values({ email });

  } catch (dbError) {
    console.error("Database error adding to waitlist:", dbError);
    return {
      success: false,
      message: "Er is een fout opgetreden. Probeer het later opnieuw.",
    };
  }

  try {
    await resend.emails.send({
      from: 'Bolbaas <info@bolbaas.nl>',
      to: [email],
      subject: 'Je staat op de wachtlijst voor Bolbaas!',
      react: WaitlistConfirmationEmail({ email }) as React.ReactElement,
    });
  } catch (emailError) {
    console.error("Error sending waitlist confirmation email:", emailError);
    // The user is on the list, but the email failed.
    // We can still return success, but maybe with a different message
    // For simplicity here, we'll just log it and return full success.
  }

  return {
    success: true,
    message: "Bedankt! We hebben je op de wachtlijst gezet.",
  };
}

export async function getAppointments() {
  try {
    const appointments = await db.select().from(schema.appointments).orderBy(schema.appointments.appointmentDate, schema.appointments.appointmentTime);
    return {
      success: true,
      data: appointments,
    };
  } catch (error) {
    console.error("Error fetching appointments:", error);
    return {
      success: false,
      message: "Kon afspraken niet ophalen.",
    };
  }
} 