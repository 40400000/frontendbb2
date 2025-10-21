import { NextResponse } from 'next/server';
import { db } from '@/src/db'; // Corrected alias path
import { appointments as appointmentsSchema, type SelectAppointment } from '@/src/db/schema'; // Corrected alias path and import type
import { eq } from 'drizzle-orm';
import * as ics from 'ics';

// Helper to convert DB date and time string to ics date array
function createIcsDateTimeArray(dateStr: string, timeStr: string): ics.DateArray {
  const date = new Date(`${dateStr}T${timeStr}:00`); // Combine date and time
  return [
    date.getFullYear(),
    date.getMonth() + 1, // ics months are 1-indexed
    date.getDate(),
    date.getHours(),
    date.getMinutes(),
  ];
}

export async function GET(
  request: Request,
  { params }: { params: Promise<{ appointmentId: string }> }
) {
  const { appointmentId } = await params;

  if (!appointmentId) {
    return NextResponse.json({ error: 'Appointment ID is required' }, { status: 400 });
  }

  try {
    const appointmentArray = await db
      .select()
      .from(appointmentsSchema)
      .where(eq(appointmentsSchema.id, appointmentId))
      .limit(1);
    
    const appointment: SelectAppointment | undefined = appointmentArray[0];

    if (!appointment) {
      return NextResponse.json({ error: 'Appointment not found' }, { status: 404 });
    }

    // Ensure appointmentDate is treated as a string if it comes from DB as Date object
    const appointmentDateString = typeof appointment.appointmentDate === 'string' 
      ? appointment.appointmentDate 
      : (appointment.appointmentDate as Date).toISOString().split('T')[0];

    const startDateTime = createIcsDateTimeArray(appointmentDateString, appointment.appointmentTime);
    
    // Calculate end time (assuming 30 minutes duration)
    const startDate = new Date(`${appointmentDateString}T${appointment.appointmentTime}:00`);
    const endDateCal = new Date(startDate.getTime() + 30 * 60000); // Add 30 minutes
    const endDateTime: ics.DateArray = [
        endDateCal.getFullYear(), 
        endDateCal.getMonth() + 1, 
        endDateCal.getDate(), 
        endDateCal.getHours(), 
        endDateCal.getMinutes()
    ];

    const event: ics.EventAttributes = {
      start: startDateTime,
      end: endDateTime,
      title: `Afspraak Baasy met ${appointment.name}`,
      description: `Online gesprek met Thijmen Dreef. ${appointment.notes ? `Notities: ${appointment.notes}` : ''} Teams link volgt voor het gesprek.`,
      location: 'Microsoft Teams',
      organizer: { name: 'Thijmen Dreef', email: 'afspraak@baasy.nl' },
      attendees: [
        { name: appointment.name, email: isValidEmail(appointment.contactInfo) ? appointment.contactInfo : undefined, rsvp: true, partstat: 'NEEDS-ACTION', role: 'REQ-PARTICIPANT' },
        { name: 'Thijmen Dreef', email: 'afspraak@baasy.nl', rsvp: true, partstat: 'ACCEPTED', role: 'CHAIR' }
      ],
      status: 'CONFIRMED',
      busyStatus: 'BUSY',
      alarms: [
        { action: 'display', description: 'Reminder', trigger: { hours: 1, before: true } },
        { action: 'audio', trigger: { minutes: 15, before: true } }
      ]
    };

    const { error, value } = ics.createEvent(event);

    if (error) {
      console.error('Error creating ICS file:', error);
      return NextResponse.json({ error: 'Failed to generate calendar file' }, { status: 500 });
    }

    return new NextResponse(value, {
      status: 200,
      headers: {
        'Content-Type': 'text/calendar; charset=utf-8',
        'Content-Disposition': `attachment; filename="baasy_afspraak_${appointmentId.substring(0,8)}.ics"`,
      },
    });

  } catch (err) {
    console.error('Server error generating ICS file:', err);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}

// Helper to check if contactInfo is an email
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
function isValidEmail(contactInfo: string | null | undefined): boolean {
  if (!contactInfo) return false;
  return emailRegex.test(contactInfo);
} 