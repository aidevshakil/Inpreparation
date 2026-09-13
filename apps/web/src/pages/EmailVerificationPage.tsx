import React from 'react';
import { LogIn } from 'lucide-react';
import { AuthNavbar } from '../components/auth/AuthNavbar';
import { EmailVerificationCard } from '../components/auth/EmailVerificationCard';
import { EmailVerificationJourneyPreview } from '../components/auth/EmailVerificationJourneyPreview';
import { AuthFooter } from '../components/auth/AuthFooter';

interface EmailVerificationPageProps {
  onNavigateToHome: () => void;
  onNavigateToFeatures: () => void;
  onNavigateToHowItWorks: () => void;
  onNavigateToSimulations: () => void;
  onNavigateToPricing: () => void;
  onNavigateToFaq: () => void;
  onNavigateToLogin: () => void;
  onNavigateToSignup: () => void;
  onVerificationSuccess?: () => void;
}

export const EmailVerificationPage: React.FC<EmailVerificationPageProps> = ({
  onNavigateToHome,
  onNavigateToFeatures,
  onNavigateToHowItWorks,
  onNavigateToSimulations,
  onNavigateToPricing,
  onNavigateToFaq,
  onNavigateToLogin,
  onNavigateToSignup,
  onVerificationSuccess
}) => {
  return (
    <div style={{
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
      background: '#07090e',
      color: '#f8fafc'
    }}>
      {/* 1. Candidate Studio Navbar */}
      <AuthNavbar
        onNavigateHome={onNavigateToHome}
        onNavigateFeatures={onNavigateToFeatures}
        onNavigateHowItWorks={onNavigateToHowItWorks}
        onNavigateSimulations={onNavigateToSimulations}
        onNavigateCategories={onNavigateToSimulations}
        onNavigatePricing={onNavigateToPricing}
        onNavigateFaq={onNavigateToFaq}
        ctaPrompt="Already verified?"
        ctaLabel="Log In"
        ctaIcon={<LogIn size={15} />}
        onNavigateCta={onNavigateToLogin}
      />

      {/* 3. Main Two-Column Email Verification Experience */}
      <main style={{
        flex: 1,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '50px 24px',
        position: 'relative'
      }}>
        {/* Subtle Background Glows */}
        <div style={{
          position: 'absolute',
          top: '20%',
          left: '35%',
          transform: 'translateX(-50%)',
          width: '600px',
          height: '400px',
          background: 'radial-gradient(ellipse, rgba(99, 102, 241, 0.08) 0%, transparent 70%)',
          filter: 'blur(90px)',
          pointerEvents: 'none',
          zIndex: 0
        }} />

        <div style={{
          position: 'absolute',
          bottom: '15%',
          right: '25%',
          width: '500px',
          height: '350px',
          background: 'radial-gradient(ellipse, rgba(79, 70, 229, 0.07) 0%, transparent 70%)',
          filter: 'blur(80px)',
          pointerEvents: 'none',
          zIndex: 0
        }} />

        <div className="container" style={{
          maxWidth: '1220px',
          margin: '0 auto',
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(360px, 1fr))',
          gap: '50px',
          alignItems: 'center',
          position: 'relative',
          zIndex: 1
        }}>
          {/* Left Column: Email Verification Card */}
          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <EmailVerificationCard
              mode="default"
              emailAddress="s•••••@example.com"
              onNavigateHome={onNavigateToHome}
              onNavigateLogin={onNavigateToLogin}
              onNavigateSignup={onNavigateToSignup}
              onVerificationSuccess={onVerificationSuccess || onNavigateToSimulations}
            />
          </div>

          {/* Right Column: Candidate Acceleration Journey */}
          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <EmailVerificationJourneyPreview />
          </div>
        </div>
      </main>

      {/* 4. Bottom Footer */}
      <AuthFooter
        gatewayLabel="Inprep AI Verification Gateway"
        screenLabel="Web Screen #12 (Email Verification)"
        onNavigateFeatures={onNavigateToFeatures}
        onNavigateCategories={onNavigateToSimulations}
        onNavigatePricing={onNavigateToPricing}
        onNavigateFaq={onNavigateToFaq}
        onNavigateContact={onNavigateToHome}
      />
    </div>
  );
};
