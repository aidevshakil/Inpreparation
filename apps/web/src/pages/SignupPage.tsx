import React from 'react';
import { AuthNavbar } from '../components/auth/AuthNavbar';
import { SignupFormCard } from '../components/auth/SignupFormCard';
import { SignupJourneyPreview } from '../components/auth/SignupJourneyPreview';
import { AuthFooter } from '../components/auth/AuthFooter';

interface SignupPageProps {
  onNavigateToHome: () => void;
  onNavigateToFeatures: () => void;
  onNavigateToHowItWorks: () => void;
  onNavigateToSimulations: () => void;
  onNavigateToPricing: () => void;
  onNavigateToFaq: () => void;
  onNavigateToLogin: () => void;
  onSignupSuccess?: () => void;
}

export const SignupPage: React.FC<SignupPageProps> = ({
  onNavigateToHome,
  onNavigateToFeatures,
  onNavigateToHowItWorks,
  onNavigateToSimulations,
  onNavigateToPricing,
  onNavigateToFaq,
  onNavigateToLogin,
  onSignupSuccess
}) => {
  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', background: '#07090e', color: '#f8fafc' }}>
      {/* 1. Candidate Studio Navbar */}
      <AuthNavbar
        onNavigateHome={onNavigateToHome}
        onNavigateFeatures={onNavigateToFeatures}
        onNavigateHowItWorks={onNavigateToHowItWorks}
        onNavigateSimulations={onNavigateToSimulations}
        onNavigateCategories={onNavigateToSimulations}
        onNavigatePricing={onNavigateToPricing}
        onNavigateFaq={onNavigateToFaq}
        onNavigateSignUp={onNavigateToLogin}
      />

      {/* 3. Main Two-Column Registration Experience */}
      <main style={{
        flex: 1,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '50px 24px',
        position: 'relative'
      }}>
        {/* Ambient Glow */}
        <div style={{
          position: 'absolute',
          top: '15%',
          left: '50%',
          transform: 'translateX(-50%)',
          width: '750px',
          height: '420px',
          background: 'radial-gradient(ellipse, rgba(124, 58, 237, 0.1) 0%, transparent 70%)',
          filter: 'blur(90px)',
          pointerEvents: 'none',
          zIndex: 0
        }} />

        <div className="container" style={{
          maxWidth: '1240px',
          margin: '0 auto',
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(360px, 1fr))',
          gap: '50px',
          alignItems: 'center',
          position: 'relative',
          zIndex: 1
        }}>
          
          {/* Left Column: Registration Card */}
          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <SignupFormCard
              mode="default"
              onSignupSuccess={() => {
                if (onSignupSuccess) {
                  onSignupSuccess();
                } else {
                  onNavigateToSimulations();
                }
              }}
              onNavigateLogin={onNavigateToLogin}
            />
          </div>

          {/* Right Column: Candidate Journey & Pillars */}
          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <SignupJourneyPreview />
          </div>

        </div>
      </main>

      {/* 4. Bottom Footer */}
      <AuthFooter
        onNavigateFeatures={onNavigateToFeatures}
        onNavigateCategories={onNavigateToSimulations}
        onNavigatePricing={onNavigateToPricing}
        onNavigateFaq={onNavigateToFaq}
        onNavigateContact={onNavigateToHome}
      />

    </div>
  );
};
