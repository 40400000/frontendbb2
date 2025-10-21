'use server';

import { Resend } from 'resend';

interface FormState {
  message: string;
  type: 'success' | 'error' | '';
}

export async function sendAffiliateEmail(
  prevState: FormState,
  formData: FormData
): Promise<FormState> {
  console.log('[Server Action] Received affiliate form data:');
  const firstName = formData.get('firstName') as string;
  const lastName = formData.get('lastName') as string;
  const email = formData.get('email') as string;
  const type = formData.get('type') as string;
  const experience = formData.get('experience') as string;
  const audience = formData.get('audience') as string;
  const message = formData.get('message') as string;
  const infoEmail = 'info@baasy.nl';
  
  console.log('  FirstName:', firstName);
  console.log('  LastName:', lastName);
  console.log('  Email:', email);
  console.log('  Type:', type);
  console.log('  Experience:', experience);
  console.log('  Audience:', audience);
  console.log('  Message:', message);

  // Basic validation
  if (!firstName || !lastName || !email || !type || !experience || !audience) {
    console.warn('[Server Action] Validation failed: Required fields missing.');
    return {
      message: 'Alle verplichte velden moeten worden ingevuld.',
      type: 'error',
    };
  }

  // Email validation
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    console.warn('[Server Action] Invalid email format.');
    return {
      message: 'Voer een geldig e-mailadres in.',
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

  // Map values to readable labels
  const typeLabels = {
    coach: 'Bol coach',
    community: 'Community manager',
    influencer: 'Bol influencer',
    other: 'Anders'
  };

  const experienceLabels = {
    beginner: 'Beginner (0-1 jaar)',
    intermediate: 'Gemiddeld (1-3 jaar)',
    advanced: 'Gevorderd (3+ jaar)',
    expert: 'Expert (5+ jaar)'
  };

  const audienceLabels = {
    small: '0-1.000',
    medium: '1.000-10.000',
    large: '10.000-50.000',
    xlarge: '50.000+'
  };

  try {
    console.log('[Server Action] Attempting to send affiliate email via Resend...');
    const { data, error } = await resend.emails.send({
      from: 'Baasy affiliate form <affiliate@baasy.nl>',
      to: infoEmail,
      subject: 'Nieuwe affiliate partner aanvraag',
      replyTo: email,
      html: `
        <h2>Nieuwe affiliate partner aanvraag</h2>
        <p><strong>Verzonden op:</strong> ${new Date().toLocaleString('nl-NL', { dateStyle: 'full', timeStyle: 'long' })}</p>
        
        <h3>Persoonlijke informatie</h3>
        <p><strong>Naam:</strong> ${firstName} ${lastName}</p>
        <p><strong>E-mail:</strong> ${email}</p>
        
        <h3>Professionele informatie</h3>
        <p><strong>Type:</strong> ${typeLabels[type as keyof typeof typeLabels] || type}</p>
        <p><strong>Ervaring met Bol:</strong> ${experienceLabels[experience as keyof typeof experienceLabels] || experience}</p>
        <p><strong>Grootte publiek/community:</strong> ${audienceLabels[audience as keyof typeof audienceLabels] || audience}</p>
        
        <h3>Bericht</h3>
        <p>${message ? message.replace(/\n/g, '<br>') : 'Geen bericht opgegeven'}</p>
        
        <hr>
        <p><em>Deze aanvraag is verzonden via het affiliate partner formulier op baasy.nl</em></p>
      `,
    });

    if (error) {
      console.error('[Server Action] Resend API Error:', error);
      return {
        message: `Fout bij het verzenden van e-mail: ${error.message}`,
        type: 'error',
      };
    }

    console.log('[Server Action] Affiliate email sent successfully! Response:', data);
    return {
      message: 'Bedankt voor je aanvraag! We nemen binnen 24 uur contact met je op om je affiliate partnerschap te bespreken.',
      type: 'success',
    };
  } catch (e: any) {
    console.error('[Server Action] Catch block error sending affiliate email:', e);
    return {
      message: e.message || 'Er is een onbekende fout opgetreden bij het verzenden van je aanvraag.',
      type: 'error',
    };
  }
}
