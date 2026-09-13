import React from 'react';
import { LogIn } from 'lucide-react';
import { AuthNavbar } from '../components/auth/AuthNavbar';
import { ResetPasswordCard } from '../components/auth/ResetPasswordCard';
import { ResetSecurityPreview } from '../components/auth/ResetSecurityPreview';
import { AuthFooter } from '../components/auth/AuthFooter';

interface ResetPasswordPageProps {
  onNavigateToHome: () => void;
  onNavigateToFeatures: () => void;
  onNavigateToHowItWorks: () => void;
  onNavigateToSimulations: () => void;
  onNavigateToPricing: () => void;
  onNavigateToFaq: () => void;
  onNavigateToLogin: () => void;
  onNavigateToForgot: () => void;
  onResetSuccess?: () => void;
}

export const ResetPasswordPage: React.FC<ResetPasswordPageProps> = ({
  onNavigateToHome,
  onNavigateToFeatures,
  onNavigateToHowItWorks,
  onNavigateToSimulations,
  onNavigateToPricing,
  onNavigateToFaq,
  onNavigateToLogin,
  onNavigateToForgot,
  onResetSuccess
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
        ctaPrompt="Remember your password?"
        ctaLabel="Log In"
        ctaIcon={<LogIn size={15} />}
        onNavigateCta={onNavigateToLogin}
      />

      {/* 3. Main Two-Column Reset Password Experience */}
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
          {/* Left Column: Reset Password Card */}
          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <ResetPasswordCard
              mode="default"
              onNavigateLogin={onNavigateToLogin}
              onNavigateForgot={onNavigateToForgot}
              onResetSuccess={onResetSuccess || onNavigateToLogin}
            />
          </div>

          {/* Right Column: Credential Integrity & Telemetry Defense */}
          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <ResetSecurityPreview />
          </div>
        </div>
      </main>

      {/* 4. Bottom Footer */}
      <AuthFooter
        gatewayLabel="Inprep AI Authentication Gateway"
        screenLabel="Web Screen #13 (Reset Password)"
        onNavigateFeatures={onNavigateToFeatures}
        onNavigateCategories={onNavigateToSimulations}
        onNavigatePricing={onNavigateToPricing}
        onNavigateFaq={onNavigateToFaq}
        onNavigateContact={onNavigateToHome}
      />
    </div>
  );
};
