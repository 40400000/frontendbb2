'use server';

import { Resend } from 'resend';

interface FormState {
  message: string;
  type: 'success' | 'error' | '';
}

export async function sendContactEmail(
  prevState: FormState,
  formData: FormData
): Promise<FormState> {
  console.log('[Server Action] Received form data:');
  const email = formData.get('email') as string;
  const question = formData.get('question') as string;
  const foundVia = formData.get('foundVia') as string;
  const infoEmail = 'info@bolbaas.nl';
  console.log('  Email:', email);
  console.log('  Question:', question);
  console.log('  FoundVia:', foundVia);

  // Basic validation
  if (!email || !question) {
    console.warn('[Server Action] Validation failed: Email or question missing.');
    return {
      message: 'E-mailadres en vraag zijn verplicht.',
      type: 'error',
    };
  }

  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    console.error('[Server Action] RESEND_API_KEY is not set.');
    return {
      message: 'Server configuratiefout. Kan e-mail niet verzenden.',
      type: 'error',
    };
  }
  console.log('[Server Action] RESEND_API_KEY is present.');

  const resend = new Resend(apiKey);

  try {
    console.log('[Server Action] Attempting to send email via Resend...');
    const { data, error } = await resend.emails.send({
      from: 'Bolbaas contact form <contactform@bolbaas.nl>', // Replace with your verified Resend domain/email
      to: infoEmail,
      subject: 'Nieuwe contactformulier inzending',
      replyTo: infoEmail,
      html: `
        <p><strong>Verzonden op:</strong> ${new Date().toLocaleString('nl-NL', { dateStyle: 'full', timeStyle: 'long' })}</p>
        <p><strong>E-mail/Telefoon:</strong> ${email}</p>
        <p><strong>Vraag:</strong></p>
        <p>${question.replace(/\n/g, '<br>')}</p>
        <p><strong>Hoe Bolbaas gevonden:</strong> ${foundVia || 'Niet opgegeven'}</p>
      `,
    });

    if (error) {
      console.error('[Server Action] Resend API Error:', error);
      return {
        message: `Fout bij het verzenden van e-mail: ${error.message}`,
        type: 'error',
      };
    }

    console.log('[Server Action] Email sent successfully! Response:', data);
    return {
      message: 'Bedankt voor je bericht! We nemen zo snel mogelijk contact met je op.',
      type: 'success',
    };
  } catch (e: any) {
    console.error('[Server Action] Catch block error sending email:', e);
    return {
      message: e.message || 'Er is een onbekende fout opgetreden bij het verzenden van je bericht.',
      type: 'error',
    };
  }
} 