import { useState, useEffect } from 'react';
import { HomePage } from './pages/HomePage';
import { FeaturesPage } from './pages/FeaturesPage';
import { HowItWorksPage } from './pages/HowItWorksPage';
import { SimulationsPage } from './pages/SimulationsPage';
import { PricingPage } from './pages/PricingPage';
import { FaqPage } from './pages/FaqPage';
import { AboutPage } from './pages/AboutPage';
import { AiChatPage } from './pages/AiChatPage';
import { LoginPage } from './pages/LoginPage';
import { SignupPage } from './pages/SignupPage';
import { ForgotPasswordPage } from './pages/ForgotPasswordPage';
import { EmailVerificationPage } from './pages/EmailVerificationPage';
import { ResetPasswordPage } from './pages/ResetPasswordPage';
import { CandidateDashboardPage } from './pages/CandidateDashboardPage';
import { MyProfilePage } from './pages/MyProfilePage';
import { MyCvPage } from './pages/MyCvPage';
import { UploadCvPage } from './pages/UploadCvPage';
import { AiCvAnalysisPage } from './pages/AiCvAnalysisPage';
import { CvBuilderPage } from './pages/CvBuilderPage';
import { DiagnosticIntakePage } from './pages/DiagnosticIntakePage';
import { DeviceReadinessPage } from './pages/DeviceReadinessPage';
import { IntroRoomPage } from './pages/IntroRoomPage';
import { PipelineDiagnosticPage } from './pages/PipelineDiagnosticPage';

export type AppPage =
  | 'home'
  | 'dashboard'
  | 'profile'
  | 'cv'
  | 'upload-cv'
  | 'ai-cv-analysis'
  | 'cv-builder'
  | 'diagnostic-intake'
  | 'device-readiness'
  | 'intro-room'
  | 'pipeline-diagnostic'
  | 'features'
  | 'how-it-works'
  | 'simulations'
  | 'pricing'
  | 'faq'
  | 'about'
  | 'chat'
  | 'login'
  | 'signup'
  | 'forgot'
  | 'verify-email'
  | 'reset-password';

export function App() {
  const [currentPage, setCurrentPage] = useState<AppPage>('pipeline-diagnostic');

  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace('#', '') as AppPage;
      if (hash && ['home', 'dashboard', 'profile', 'cv', 'upload-cv', 'ai-cv-analysis', 'cv-builder', 'diagnostic-intake', 'device-readiness', 'intro-room', 'pipeline-diagnostic', 'features', 'how-it-works', 'simulations', 'pricing', 'faq', 'about', 'chat', 'login', 'signup', 'forgot', 'verify-email', 'reset-password'].includes(hash)) {
        setCurrentPage(hash);
      }
    };

    if (window.location.hash) {
      handleHashChange();
    }
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const navigateTo = (page: AppPage) => {
    setCurrentPage(page);
    window.location.hash = page;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <main>
      {currentPage === 'pipeline-diagnostic' && (
        <PipelineDiagnosticPage
          onNavigateToHome={() => navigateTo('home')}
          onNavigateToDashboard={() => navigateTo('dashboard')}
          onNavigateToProfile={() => navigateTo('profile')}
          onNavigateToCv={() => navigateTo('cv')}
          onNavigateToCvAnalysis={() => navigateTo('ai-cv-analysis')}
          onNavigateToCvBuilder={() => navigateTo('cv-builder')}
          onNavigateToDiagnosticIntake={() => navigateTo('diagnostic-intake')}
          onNavigateToDeviceReadiness={() => navigateTo('device-readiness')}
          onNavigateToIntroRoom={() => navigateTo('intro-room')}
          onNavigateToSimulations={() => navigateTo('simulations')}
          onNavigateToAi={() => navigateTo('chat')}
        />
      )}

      {currentPage === 'intro-room' && (
        <IntroRoomPage
          onNavigateToHome={() => navigateTo('home')}
          onNavigateToDashboard={() => navigateTo('dashboard')}
          onNavigateToProfile={() => navigateTo('profile')}
          onNavigateToCv={() => navigateTo('cv')}
          onNavigateToCvAnalysis={() => navigateTo('ai-cv-analysis')}
          onNavigateToCvBuilder={() => navigateTo('cv-builder')}
          onNavigateToDiagnosticIntake={() => navigateTo('diagnostic-intake')}
          onNavigateToDeviceReadiness={() => navigateTo('device-readiness')}
          onNavigateToPipelineDiagnostic={() => navigateTo('pipeline-diagnostic')}
          onNavigateToSimulations={() => navigateTo('simulations')}
          onNavigateToAi={() => navigateTo('chat')}
        />
      )}

      {currentPage === 'device-readiness' && (
        <DeviceReadinessPage
          onNavigateToHome={() => navigateTo('home')}
          onNavigateToDashboard={() => navigateTo('dashboard')}
          onNavigateToProfile={() => navigateTo('profile')}
          onNavigateToCv={() => navigateTo('cv')}
          onNavigateToCvAnalysis={() => navigateTo('ai-cv-analysis')}
          onNavigateToCvBuilder={() => navigateTo('cv-builder')}
          onNavigateToDiagnosticIntake={() => navigateTo('diagnostic-intake')}
          onNavigateToDeviceReadiness={() => navigateTo('device-readiness')}
          onNavigateToIntroRoom={() => navigateTo('intro-room')}
          onNavigateToSimulations={() => navigateTo('simulations')}
          onNavigateToAi={() => navigateTo('chat')}
        />
      )}

      {currentPage === 'diagnostic-intake' && (
        <DiagnosticIntakePage
          onNavigateToHome={() => navigateTo('home')}
          onNavigateToDashboard={() => navigateTo('dashboard')}
          onNavigateToProfile={() => navigateTo('profile')}
          onNavigateToCv={() => navigateTo('cv')}
          onNavigateToCvAnalysis={() => navigateTo('ai-cv-analysis')}
          onNavigateToCvBuilder={() => navigateTo('cv-builder')}
          onNavigateToSimulations={() => navigateTo('device-readiness')}
          onNavigateToAi={() => navigateTo('chat')}
        />
      )}

      {currentPage === 'cv-builder' && (
        <CvBuilderPage
          onNavigateToHome={() => navigateTo('home')}
          onNavigateToDashboard={() => navigateTo('dashboard')}
          onNavigateToProfile={() => navigateTo('profile')}
          onNavigateToCv={() => navigateTo('cv')}
          onNavigateToCvAnalysis={() => navigateTo('ai-cv-analysis')}
          onNavigateToUploadCv={() => navigateTo('upload-cv')}
          onNavigateToSimulations={() => navigateTo('diagnostic-intake')}
          onNavigateToAi={() => navigateTo('chat')}
        />
      )}
      {currentPage === 'ai-cv-analysis' && (
        <AiCvAnalysisPage
          onNavigateToHome={() => navigateTo('home')}
          onNavigateToDashboard={() => navigateTo('dashboard')}
          onNavigateToProfile={() => navigateTo('profile')}
          onNavigateToCv={() => navigateTo('cv')}
          onNavigateToCvBuilder={() => navigateTo('cv-builder')}
          onNavigateToUploadCv={() => navigateTo('upload-cv')}
          onNavigateToSimulations={() => navigateTo('simulations')}
          onNavigateToAi={() => navigateTo('chat')}
        />
      )}

      {currentPage === 'upload-cv' && (
        <UploadCvPage
          onNavigateToHome={() => navigateTo('home')}
          onNavigateToDashboard={() => navigateTo('dashboard')}
          onNavigateToProfile={() => navigateTo('profile')}
          onNavigateToCv={() => navigateTo('cv')}
          onNavigateToCvAnalysis={() => navigateTo('ai-cv-analysis')}
          onNavigateToCvBuilder={() => navigateTo('cv-builder')}
          onNavigateToSimulations={() => navigateTo('simulations')}
          onNavigateToAi={() => navigateTo('chat')}
        />
      )}

      {currentPage === 'cv' && (
        <MyCvPage
          onNavigateToHome={() => navigateTo('home')}
          onNavigateToDashboard={() => navigateTo('dashboard')}
          onNavigateToProfile={() => navigateTo('profile')}
          onNavigateToUploadCv={() => navigateTo('upload-cv')}
          onNavigateToCvAnalysis={() => navigateTo('ai-cv-analysis')}
          onNavigateToCvBuilder={() => navigateTo('cv-builder')}
          onNavigateToSimulations={() => navigateTo('simulations')}
          onNavigateToAi={() => navigateTo('chat')}
        />
      )}

      {currentPage === 'profile' && (
        <MyProfilePage
          onNavigateToHome={() => navigateTo('home')}
          onNavigateToDashboard={() => navigateTo('dashboard')}
          onNavigateToCv={() => navigateTo('cv')}
          onNavigateToSimulations={() => navigateTo('simulations')}
          onNavigateToAi={() => navigateTo('chat')}
        />
      )}

      {currentPage === 'dashboard' && (
        <CandidateDashboardPage
          onNavigateToHome={() => navigateTo('home')}
          onNavigateToProfile={() => navigateTo('profile')}
          onNavigateToCv={() => navigateTo('cv')}
          onNavigateToSimulations={() => navigateTo('simulations')}
          onNavigateToAi={() => navigateTo('chat')}
          onNavigateToPricing={() => navigateTo('pricing')}
        />
      )}

      {currentPage === 'home' && (
        <HomePage
          onNavigateToAi={() => navigateTo('chat')}
          onNavigateToFeatures={() => navigateTo('features')}
          onNavigateToHowItWorks={() => navigateTo('how-it-works')}
          onNavigateToSimulations={() => navigateTo('simulations')}
          onNavigateToPricing={() => navigateTo('pricing')}
          onNavigateToFaq={() => navigateTo('faq')}
          onNavigateToAbout={() => navigateTo('about')}
        />
      )}

      {currentPage === 'features' && (
        <FeaturesPage
          onNavigateToHome={() => navigateTo('home')}
          onNavigateToHowItWorks={() => navigateTo('how-it-works')}
          onNavigateToSimulations={() => navigateTo('simulations')}
          onNavigateToPricing={() => navigateTo('pricing')}
          onNavigateToFaq={() => navigateTo('faq')}
          onNavigateToAi={() => navigateTo('chat')}
        />
      )}

      {currentPage === 'how-it-works' && (
        <HowItWorksPage
          onNavigateToHome={() => navigateTo('home')}
          onNavigateToFeatures={() => navigateTo('features')}
          onNavigateToSimulations={() => navigateTo('simulations')}
          onNavigateToPricing={() => navigateTo('pricing')}
          onNavigateToFaq={() => navigateTo('faq')}
          onNavigateToAi={() => navigateTo('chat')}
        />
      )}

      {currentPage === 'simulations' && (
        <SimulationsPage
          onNavigateToHome={() => navigateTo('home')}
          onNavigateToFeatures={() => navigateTo('features')}
          onNavigateToHowItWorks={() => navigateTo('how-it-works')}
          onNavigateToPricing={() => navigateTo('pricing')}
          onNavigateToFaq={() => navigateTo('faq')}
          onNavigateToAi={() => navigateTo('chat')}
        />
      )}

      {currentPage === 'pricing' && (
        <PricingPage
          onNavigateToHome={() => navigateTo('home')}
          onNavigateToFeatures={() => navigateTo('features')}
          onNavigateToHowItWorks={() => navigateTo('how-it-works')}
          onNavigateToSimulations={() => navigateTo('simulations')}
          onNavigateToFaq={() => navigateTo('faq')}
          onNavigateToAi={() => navigateTo('chat')}
        />
      )}

      {currentPage === 'faq' && (
        <FaqPage
          onNavigateToHome={() => navigateTo('home')}
          onNavigateToFeatures={() => navigateTo('features')}
          onNavigateToHowItWorks={() => navigateTo('how-it-works')}
          onNavigateToSimulations={() => navigateTo('simulations')}
          onNavigateToPricing={() => navigateTo('pricing')}
          onNavigateToAbout={() => navigateTo('about')}
          onNavigateToAi={() => navigateTo('chat')}
        />
      )}

      {currentPage === 'about' && (
        <AboutPage
          onNavigateToHome={() => navigateTo('home')}
          onNavigateToFeatures={() => navigateTo('features')}
          onNavigateToHowItWorks={() => navigateTo('how-it-works')}
          onNavigateToSimulations={() => navigateTo('simulations')}
          onNavigateToPricing={() => navigateTo('pricing')}
          onNavigateToFaq={() => navigateTo('faq')}
          onNavigateToAi={() => navigateTo('chat')}
        />
      )}

      {currentPage === 'chat' && (
        <AiChatPage onBack={() => navigateTo('home')} />
      )}

      {currentPage === 'login' && (
        <LoginPage
          onNavigateToHome={() => navigateTo('home')}
          onNavigateToFeatures={() => navigateTo('features')}
          onNavigateToHowItWorks={() => navigateTo('how-it-works')}
          onNavigateToSimulations={() => navigateTo('simulations')}
          onNavigateToPricing={() => navigateTo('pricing')}
          onNavigateToFaq={() => navigateTo('faq')}
          onNavigateToAbout={() => navigateTo('about')}
          onNavigateToAi={() => navigateTo('chat')}
          onNavigateToSignup={() => navigateTo('signup')}
          onNavigateToForgot={() => navigateTo('forgot')}
          onLoginSuccess={() => navigateTo('dashboard')}
        />
      )}

      {currentPage === 'signup' && (
        <SignupPage
          onNavigateToHome={() => navigateTo('home')}
          onNavigateToFeatures={() => navigateTo('features')}
          onNavigateToHowItWorks={() => navigateTo('how-it-works')}
          onNavigateToSimulations={() => navigateTo('simulations')}
          onNavigateToPricing={() => navigateTo('pricing')}
          onNavigateToFaq={() => navigateTo('faq')}
          onNavigateToLogin={() => navigateTo('login')}
          onSignupSuccess={() => navigateTo('verify-email')}
        />
      )}

      {currentPage === 'forgot' && (
        <ForgotPasswordPage
          onNavigateToHome={() => navigateTo('home')}
          onNavigateToFeatures={() => navigateTo('features')}
          onNavigateToHowItWorks={() => navigateTo('how-it-works')}
          onNavigateToSimulations={() => navigateTo('simulations')}
          onNavigateToPricing={() => navigateTo('pricing')}
          onNavigateToFaq={() => navigateTo('faq')}
          onNavigateToLogin={() => navigateTo('login')}
          onNavigateToSignup={() => navigateTo('signup')}
          onNavigateToReset={() => navigateTo('reset-password')}
        />
      )}

      {currentPage === 'verify-email' && (
        <EmailVerificationPage
          onNavigateToHome={() => navigateTo('home')}
          onNavigateToFeatures={() => navigateTo('features')}
          onNavigateToHowItWorks={() => navigateTo('how-it-works')}
          onNavigateToSimulations={() => navigateTo('simulations')}
          onNavigateToPricing={() => navigateTo('pricing')}
          onNavigateToFaq={() => navigateTo('faq')}
          onNavigateToLogin={() => navigateTo('login')}
          onNavigateToSignup={() => navigateTo('signup')}
          onVerificationSuccess={() => navigateTo('dashboard')}
        />
      )}

      {currentPage === 'reset-password' && (
        <ResetPasswordPage
          onNavigateToHome={() => navigateTo('home')}
          onNavigateToFeatures={() => navigateTo('features')}
          onNavigateToHowItWorks={() => navigateTo('how-it-works')}
          onNavigateToSimulations={() => navigateTo('simulations')}
          onNavigateToPricing={() => navigateTo('pricing')}
          onNavigateToFaq={() => navigateTo('faq')}
          onNavigateToLogin={() => navigateTo('login')}
          onNavigateToForgot={() => navigateTo('forgot')}
          onResetSuccess={() => navigateTo('login')}
        />
      )}
    </main>
  );
}

export default App;
