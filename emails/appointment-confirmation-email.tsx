import * as React from 'react';

interface AppointmentConfirmationEmailProps {
  name: string;
  appointmentDate: Date;
  appointmentTime: string;
  appointmentId: string;
  logoUrl?: string;
  baseUrl?: string;
}

const formatDate = (date: Date): string => {
  return date.toLocaleDateString('nl-NL', {
    weekday: 'long', 
    year: 'numeric', 
    month: 'long', 
    day: 'numeric' 
  });
};

export const AppointmentConfirmationEmail: React.FC<AppointmentConfirmationEmailProps> = ({
  name,
  appointmentDate,
  appointmentTime,
  appointmentId,
  logoUrl = 'https://vhtnlfbnq3ecybmn.public.blob.vercel-storage.com/frontend/logo_header-O7Epfsu5gL4zaFcx8blDKh5D3imCG0.png',
  baseUrl = process.env.NEXT_PUBLIC_APP_URL || 'http://www.baasy.nl'
}) => {
  const formattedDate = formatDate(appointmentDate);
  const timeParts = appointmentTime.split(':').map(Number);
  let endTime = '';
  if (timeParts.length === 2) {
    const endDate = new Date();
    endDate.setHours(timeParts[0], timeParts[1] + 30); // Add 30 minutes for end time
    endTime = endDate.toLocaleTimeString('nl-NL', { hour: '2-digit', minute: '2-digit' });
  }

  const calendarLink = `${baseUrl}/api/calendar/ics/${appointmentId}`;

  return (
    <div style={{ minHeight: '100vh', backgroundColor: '#111827', padding: '32px', fontFamily: 'sans-serif' }}>
      <div style={{ maxWidth: '576px', margin: '0 auto' }}>
        {/* Email Container */}
        <div style={{ backgroundColor: '#000000', border: '1px solid #374151' }}>
          {/* Header */}
          <div style={{ backgroundColor: '#000000', padding: '24px', borderBottom: '1px solid #374151' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
              {logoUrl && <img src={logoUrl} alt="Baasy Logo" style={{ height: '32px', width: 'auto' }} />}
            </div>
          </div>

          {/* Main Content */}
          <div style={{ padding: '32px', color: '#ffffff' }}>
            <h1 style={{ fontSize: '24px', fontWeight: 'bold', marginBottom: '24px' }}>Afspraak bevestigd ✓</h1>

            <p style={{ color: '#D1D5DB', marginBottom: '32px', lineHeight: '1.6' }}>Beste {name},</p>

            <p style={{ color: '#D1D5DB', marginBottom: '24px', lineHeight: '1.6' }}>
              Bedankt voor het inplannen van je afspraak. We kijken ernaar uit om met je te praten over hoe Baasy jouw
              bedrijf naar het volgende niveau kan brengen.
            </p>

            {/* Appointment Details */}
            <div style={{ marginBottom: '32px' }}>
              <h2 style={{ fontSize: '18px', fontWeight: '600', marginBottom: '16px', color: '#ffffff' }}>Afspraak details</h2>
              <div style={{ borderLeft: '2px solid #374151', paddingLeft: '16px' }}>
                <div style={{ marginBottom: '16px' }}>
                  <p style={{ color: '#ffffff' }}>{formattedDate}</p>
                  <p style={{ color: '#9CA3AF' }}>{appointmentTime} {endTime ? `- ${endTime}` : ''}</p>
                </div>
                <div>
                  <p style={{ color: '#ffffff' }}>Online gesprek met Thijmen Dreef</p>
                  <p style={{ color: '#9CA3AF' }}>Teams link volgt voor het gesprek</p>
                </div>
              </div>
            </div>

            {/* Action Button */}
            <div style={{ marginBottom: '32px' }}>
              <a 
                href={calendarLink}
                style={{
                  backgroundColor: '#ffffff', 
                  color: '#000000', 
                  padding: '12px 24px', 
                  fontWeight: '500', 
                  textDecoration: 'none', 
                  display: 'inline-block' 
                }}
              >
                Toevoegen aan agenda
              </a>
            </div>

            {/* Closing */}
            <div style={{ color: '#D1D5DB', marginBottom: '32px' }}>
              <p style={{ marginBottom: '16px' }}>
                Heb je nog vragen? Stuur gerust een e-mail naar <a href="mailto:info@baasy.nl" style={{ color: '#ffffff', textDecoration:'underline' }}>info@baasy.nl</a>.
              </p>
              <p style={{ marginBottom: '4px' }}>Met vriendelijke groet,</p>
              <p style={{ color: '#ffffff', fontWeight: '500' }}>Thijmen Dreef</p>
              <p style={{ color: '#9CA3AF' }}>Baasy</p>
            </div>
          </div>

          {/* Footer */}
          <div style={{ backgroundColor: '#000000', borderTop: '1px solid #374151', padding: '24px', textAlign: 'center' }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '12px' }}>
              {logoUrl && <img src={logoUrl} alt="Baasy Logo" style={{ height: '20px', width: 'auto', opacity: 0.6 }} />}
              <span style={{ color: '#6B7280', fontSize: '14px' }}>© {new Date().getFullYear()} Baasy</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppointmentConfirmationEmail; 