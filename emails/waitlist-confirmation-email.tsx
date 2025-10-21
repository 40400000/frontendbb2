import * as React from 'react';

interface WaitlistConfirmationEmailProps {
  email: string;
  companyName?: string;
  phoneNumber?: string;
  logoUrl?: string;
  baseUrl?: string;
}

export const WaitlistConfirmationEmail: React.FC<WaitlistConfirmationEmailProps> = ({
  email,
  companyName,
  phoneNumber,
  logoUrl = 'https://vhtnlfbnq3ecybmn.public.blob.vercel-storage.com/frontend/logo_header-O7Epfsu5gL4zaFcx8blDKh5D3imCG0.png',
  baseUrl = process.env.NEXT_PUBLIC_APP_URL || 'http://www.baasy.nl'
}) => {
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
            <h1 style={{ fontSize: '24px', fontWeight: 'bold', marginBottom: '24px' }}>Je staat op de wachtlijst!</h1>

            <p style={{ color: '#D1D5DB', marginBottom: '32px', lineHeight: '1.6' }}>Beste toekomstige Baasy,</p>

            <p style={{ color: '#D1D5DB', marginBottom: '24px', lineHeight: '1.6' }}>
              Bedankt voor je interesse. We hebben je aanmelding voor de wachtlijst ontvangen met de volgende gegevens:
            </p>

            <ul style={{ color: '#D1D5DB', marginBottom: '24px', paddingLeft: '20px', listStyleType: 'disc' }}>
              <li><strong>E-mail:</strong> {email}</li>
              {companyName && <li><strong>Bedrijfsnaam:</strong> {companyName}</li>}
              {phoneNumber && <li><strong>Telefoonnummer:</strong> {phoneNumber}</li>}
            </ul>

            <p style={{ color: '#D1D5DB', marginBottom: '24px', lineHeight: '1.6' }}>
              We nemen zo snel mogelijk contact met je op.
            </p>

            {/* Closing */}
            <div style={{ color: '#D1D5DB', marginBottom: '32px' }}>
              <p style={{ marginBottom: '16px' }}>
                Heb je nog vragen? Stuur gerust een e-mail naar <a href="mailto:info@baasy.nl" style={{ color: '#ffffff', textDecoration:'underline' }}>info@baasy.nl</a>.
              </p>
              <p style={{ marginBottom: '4px' }}>Met vriendelijke groet,</p>
              <p style={{ color: '#ffffff', fontWeight: '500' }}>Thijmen Dreef</p>
              <p style={{ color: '#ffffff', fontWeight: '500' }}>Namens het team van Baasy</p>
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

export default WaitlistConfirmationEmail; 