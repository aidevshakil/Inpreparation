import React from 'react';
import { LogIn } from 'lucide-react';
import { AuthNavbar } from '../components/auth/AuthNavbar';
import { ForgotPasswordCard } from '../components/auth/ForgotPasswordCard';
import { ForgotReadinessPreview } from '../components/auth/ForgotReadinessPreview';
import { AuthFooter } from '../components/auth/AuthFooter';

interface ForgotPasswordPageProps {
  onNavigateToHome: () => void;
  onNavigateToFeatures: () => void;
  onNavigateToHowItWorks: () => void;
  onNavigateToSimulations: () => void;
  onNavigateToPricing: () => void;
  onNavigateToFaq: () => void;
  onNavigateToLogin: () => void;
  onNavigateToSignup: () => void;
  onNavigateToReset?: () => void;
}

export const ForgotPasswordPage: React.FC<ForgotPasswordPageProps> = ({
  onNavigateToHome,
  onNavigateToFeatures,
  onNavigateToHowItWorks,
  onNavigateToSimulations,
  onNavigateToPricing,
  onNavigateToFaq,
  onNavigateToLogin,
  onNavigateToSignup,
  onNavigateToReset
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
        ctaPrompt="Remember your password?"
        ctaLabel="Log In"
        ctaIcon={<LogIn size={15} />}
        onNavigateCta={onNavigateToLogin}
      />

      {/* 3. Main Two-Column Password Recovery Experience */}
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
          top: '20%',
          left: '50%',
          transform: 'translateX(-50%)',
          width: '720px',
          height: '400px',
          background: 'radial-gradient(ellipse, rgba(99, 102, 241, 0.1) 0%, transparent 70%)',
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
          
          {/* Left Column: Password Recovery Card */}
          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <ForgotPasswordCard
              mode="default"
              onNavigateLogin={onNavigateToLogin}
              onNavigateSignup={onNavigateToSignup}
              onNavigateReset={onNavigateToReset}
            />
          </div>

          {/* Right Column: Readiness & Motivation */}
          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <ForgotReadinessPreview />
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
