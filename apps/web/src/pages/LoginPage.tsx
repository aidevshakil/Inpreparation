import React from 'react';
import { AuthNavbar } from '../components/auth/AuthNavbar';
import { LoginFormCard } from '../components/auth/LoginFormCard';
import { AuthReadinessPreview } from '../components/auth/AuthReadinessPreview';
import { AuthFooter } from '../components/auth/AuthFooter';

interface LoginPageProps {
  onNavigateToHome: () => void;
  onNavigateToFeatures: () => void;
  onNavigateToHowItWorks: () => void;
  onNavigateToSimulations: () => void;
  onNavigateToPricing: () => void;
  onNavigateToFaq: () => void;
  onNavigateToAbout?: () => void;
  onNavigateToAi?: () => void;
  onNavigateToSignup?: () => void;
  onNavigateToForgot?: () => void;
  onLoginSuccess?: () => void;
}

export const LoginPage: React.FC<LoginPageProps> = ({
  onNavigateToHome,
  onNavigateToFeatures,
  onNavigateToHowItWorks,
  onNavigateToSimulations,
  onNavigateToPricing,
  onNavigateToFaq,
  onNavigateToSignup,
  onNavigateToForgot,
  onLoginSuccess
}) => {
  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', background: 'var(--bg-main)', color: 'var(--text-main)' }}>
      {/* 1. Candidate Studio Navbar */}
      <AuthNavbar
        onNavigateHome={onNavigateToHome}
        onNavigateFeatures={onNavigateToFeatures}
        onNavigateHowItWorks={onNavigateToHowItWorks}
        onNavigateSimulations={onNavigateToSimulations}
        onNavigateCategories={onNavigateToSimulations}
        onNavigatePricing={onNavigateToPricing}
        onNavigateFaq={onNavigateToFaq}
        onNavigateSignUp={onNavigateToSignup || onNavigateToHome}
      />

      {/* 3. Main Two-Column Auth Experience */}
      <main style={{
        flex: 1,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '50px 24px',
        position: 'relative'
      }}>
        {/* Subtle Background Glow */}
        <div style={{
          position: 'absolute',
          top: '20%',
          left: '50%',
          transform: 'translateX(-50%)',
          width: '700px',
          height: '400px',
          background: 'radial-gradient(ellipse, rgba(99, 102, 241, 0.1) 0%, transparent 70%)',
          filter: 'blur(80px)',
          pointerEvents: 'none',
          zIndex: 0
        }} />

        <div className="container" style={{
          maxWidth: '1200px',
          margin: '0 auto',
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(360px, 1fr))',
          gap: '50px',
          alignItems: 'center',
          position: 'relative',
          zIndex: 1
        }}>
          
          {/* Left Column: Login Card */}
          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <LoginFormCard
              mode="default"
              onLoginSuccess={() => {
                if (onLoginSuccess) {
                  onLoginSuccess();
                } else {
                  onNavigateToSimulations();
                }
              }}
              onNavigateRegister={onNavigateToSignup || onNavigateToHome}
              onNavigateForgot={onNavigateToForgot}
            />
          </div>

          {/* Right Column: Practice Smarter / Live HUD Readiness */}
          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <AuthReadinessPreview />
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
