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
import { InterviewResultPage } from './pages/InterviewResultPage';
import { PerformanceDashboardPage } from './pages/PerformanceDashboardPage';
import { ProfileAnalysisPage } from './pages/ProfileAnalysisPage';
import { RecommendedInterviewsPage } from './pages/RecommendedInterviewsPage';
import { InterviewCategoriesPage } from './pages/InterviewCategoriesPage';
import { SearchFilterPage } from './pages/SearchFilterPage';
import { SimulationDetailsPage } from './pages/SimulationDetailsPage';
import { InterviewHistoryPage } from './pages/InterviewHistoryPage';
import { SkillAnalyticsPage } from './pages/SkillAnalyticsPage';
import { CommunicationAnalyticsPage } from './pages/CommunicationAnalyticsPage';
import { SpeechAnalyticsPage } from './pages/SpeechAnalyticsPage';
import { PresentationAnalyticsPage } from './pages/PresentationAnalyticsPage';
import { QuestionPerformancePage } from './pages/QuestionPerformancePage';
import { AiImprovementPlanPage } from './pages/AiImprovementPlanPage';

export type AppPage =
  | 'home'
  | 'dashboard'
  | 'profile'
  | 'cv'
  | 'history'
  | 'skill-analytics'
  | 'communication-analytics'
  | 'speech-analytics'
  | 'presentation-analytics'
  | 'question-performance'
  | 'improvement'
  | 'ai-plan'
  | 'upload-cv'
  | 'ai-cv-analysis'
  | 'cv-builder'
  | 'diagnostic-intake'
  | 'device-readiness'
  | 'intro-room'
  | 'pipeline-diagnostic'
  | 'intro-result'
  | 'interview-result'
  | 'performance'
  | 'profile-analysis'
  | 'recommended-interviews'
  | 'categories'
  | 'search'
  | 'simulation-details'
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

import { useAuth } from './context/AuthContext';

export function App() {
  const [currentPage, setCurrentPage] = useState<AppPage>('home');
  const { isAuthenticated } = useAuth();

  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace('#', '') as AppPage;
      if (
        hash &&
        [
          'home',
          'dashboard',
          'profile',
          'cv',
          'upload-cv',
          'ai-cv-analysis',
          'cv-builder',
          'diagnostic-intake',
          'device-readiness',
          'intro-room',
          'pipeline-diagnostic',
          'intro-result',
          'interview-result',
          'performance',
          'skill-analytics',
          'communication-analytics',
          'speech-analytics',
          'presentation-analytics',
          'question-performance',
          'improvement',
          'ai-plan',
          'history',
          'profile-analysis',
          'recommended-interviews',
          'categories',
          'search',
          'simulation-details',
          'features',
          'how-it-works',
          'simulations',
          'pricing',
          'faq',
          'about',
          'chat',
          'login',
          'signup',
          'forgot',
          'verify-email',
          'reset-password',
        ].includes(hash)
      ) {
        setCurrentPage(hash);
      } else if (!window.location.hash) {
        setCurrentPage('home');
      }
    };

    if (window.location.hash) {
      handleHashChange();
    }
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  useEffect(() => {
    // Auto login & redirect logic: 
    // If the website is opened at root (no hash) or explicitly at #home,
    // and the user is authenticated, we show the landing page briefly, 
    // then auto redirect to the dashboard.
    if ((currentPage === 'home' && (!window.location.hash || window.location.hash === '#home')) && isAuthenticated) {
      const timer = setTimeout(() => {
        navigateTo('dashboard');
      }, 1500);
      return () => clearTimeout(timer);
    }
  }, [currentPage, isAuthenticated]);

  const navigateTo = (page: AppPage) => {
    setCurrentPage(page);
    window.location.hash = page;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <main>
      {currentPage === 'categories' && (
        <InterviewCategoriesPage
          onNavigateToHome={() => navigateTo('home')}
          onNavigateToDashboard={() => navigateTo('dashboard')}
          onNavigateToProfile={() => navigateTo('profile')}
          onNavigateToCv={() => navigateTo('cv')}
          onNavigateToCvAnalysis={() => navigateTo('ai-cv-analysis')}
          onNavigateToCvBuilder={() => navigateTo('cv-builder')}
          onNavigateToDiagnosticIntake={() => navigateTo('diagnostic-intake')}
          onNavigateToDeviceReadiness={() => navigateTo('device-readiness')}
          onNavigateToIntroRoom={() => navigateTo('intro-room')}
          onNavigateToPipelineDiagnostic={() => navigateTo('pipeline-diagnostic')}
          onNavigateToIntroResult={() => navigateTo('intro-result')}
          onNavigateToProfileAnalysis={() => navigateTo('profile-analysis')}
          onNavigateToRecommendedInterviews={() => navigateTo('recommended-interviews')}
          onNavigateToSimulations={() => navigateTo('simulations')}
          onNavigateToAi={() => navigateTo('chat')}
        />
      )}

      {currentPage === 'recommended-interviews' && (
        <RecommendedInterviewsPage
          onNavigateToHome={() => navigateTo('home')}
          onNavigateToDashboard={() => navigateTo('dashboard')}
          onNavigateToProfile={() => navigateTo('profile')}
          onNavigateToCv={() => navigateTo('cv')}
          onNavigateToCvAnalysis={() => navigateTo('ai-cv-analysis')}
          onNavigateToCvBuilder={() => navigateTo('cv-builder')}
          onNavigateToDiagnosticIntake={() => navigateTo('diagnostic-intake')}
          onNavigateToDeviceReadiness={() => navigateTo('device-readiness')}
          onNavigateToIntroRoom={() => navigateTo('intro-room')}
          onNavigateToPipelineDiagnostic={() => navigateTo('pipeline-diagnostic')}
          onNavigateToIntroResult={() => navigateTo('intro-result')}
          onNavigateToProfileAnalysis={() => navigateTo('profile-analysis')}
          onNavigateToSimulations={() => navigateTo('simulations')}
          onNavigateToAi={() => navigateTo('chat')}
        />
      )}

      {currentPage === 'profile-analysis' && (
        <ProfileAnalysisPage
          onNavigateToHome={() => navigateTo('home')}
          onNavigateToDashboard={() => navigateTo('dashboard')}
          onNavigateToProfile={() => navigateTo('profile')}
          onNavigateToCv={() => navigateTo('cv')}
          onNavigateToCvAnalysis={() => navigateTo('ai-cv-analysis')}
          onNavigateToCvBuilder={() => navigateTo('cv-builder')}
          onNavigateToDiagnosticIntake={() => navigateTo('diagnostic-intake')}
          onNavigateToDeviceReadiness={() => navigateTo('device-readiness')}
          onNavigateToIntroRoom={() => navigateTo('intro-room')}
          onNavigateToPipelineDiagnostic={() => navigateTo('pipeline-diagnostic')}
          onNavigateToIntroResult={() => navigateTo('intro-result')}
          onNavigateToRecommendedInterviews={() => navigateTo('recommended-interviews')}
          onNavigateToSimulations={() => navigateTo('simulations')}
          onNavigateToAi={() => navigateTo('chat')}
        />
      )}

      {currentPage === 'history' && (
        <InterviewHistoryPage
          onNavigateToDashboard={() => navigateTo('dashboard')}
          onNavigateToProfile={() => navigateTo('profile')}
          onNavigateToCv={() => navigateTo('cv')}
          onNavigateToSimulations={() => navigateTo('simulations')}
          onNavigateToCategories={() => navigateTo('categories')}
          onNavigateToSearch={() => navigateTo('search')}
          onNavigateToAi={() => navigateTo('chat')}
          onNavigateToAssessment={() => navigateTo('diagnostic-intake')}
          onNavigateToPerformance={() => navigateTo('performance')}
          onNavigateToResult={() => navigateTo('interview-result')}
        />
      )}

      {currentPage === 'performance' && (
        <PerformanceDashboardPage
          onNavigateToHome={() => navigateTo('home')}
          onNavigateToDashboard={() => navigateTo('dashboard')}
          onNavigateToProfile={() => navigateTo('profile')}
          onNavigateToCv={() => navigateTo('cv')}
          onNavigateToSimulations={() => navigateTo('simulations')}
          onNavigateToCategories={() => navigateTo('categories')}
          onNavigateToSearch={() => navigateTo('search')}
          onNavigateToAi={() => navigateTo('chat')}
          onNavigateToAssessment={() => navigateTo('diagnostic-intake')}
          onNavigateToResult={() => navigateTo('interview-result')}
          onNavigateToHistory={() => navigateTo('history')}
          onNavigateToSkillAnalytics={() => navigateTo('skill-analytics')}
        />
      )}

      {currentPage === 'skill-analytics' && (
        <SkillAnalyticsPage
          onNavigateToDashboard={() => navigateTo('dashboard')}
          onNavigateToProfile={() => navigateTo('profile')}
          onNavigateToCv={() => navigateTo('cv')}
          onNavigateToSimulations={() => navigateTo('simulations')}
          onNavigateToCategories={() => navigateTo('categories')}
          onNavigateToSearch={() => navigateTo('search')}
          onNavigateToPerformance={() => navigateTo('performance')}
          onNavigateToAi={() => navigateTo('chat')}
          onNavigateToAssessment={() => navigateTo('diagnostic-intake')}
          onNavigateToResult={() => navigateTo('interview-result')}
          onNavigateToHistory={() => navigateTo('history')}
        />
      )}

      {currentPage === 'communication-analytics' && (
        <CommunicationAnalyticsPage
          onNavigateToDashboard={() => navigateTo('dashboard')}
          onNavigateToProfile={() => navigateTo('profile')}
          onNavigateToCv={() => navigateTo('cv')}
          onNavigateToSimulations={() => navigateTo('simulations')}
          onNavigateToCategories={() => navigateTo('categories')}
          onNavigateToSearch={() => navigateTo('search')}
          onNavigateToPerformance={() => navigateTo('performance')}
          onNavigateToSkillAnalytics={() => navigateTo('skill-analytics')}
          onNavigateToSpeechAnalytics={() => navigateTo('speech-analytics')}
          onNavigateToPresentationAnalytics={() => navigateTo('presentation-analytics')}
          onNavigateToAi={() => navigateTo('chat')}
          onNavigateToAssessment={() => navigateTo('diagnostic-intake')}
          onNavigateToResult={() => navigateTo('interview-result')}
          onNavigateToHistory={() => navigateTo('history')}
        />
      )}

      {currentPage === 'speech-analytics' && (
        <SpeechAnalyticsPage
          onNavigateToDashboard={() => navigateTo('dashboard')}
          onNavigateToProfile={() => navigateTo('profile')}
          onNavigateToCv={() => navigateTo('cv')}
          onNavigateToSimulations={() => navigateTo('simulations')}
          onNavigateToCategories={() => navigateTo('categories')}
          onNavigateToSearch={() => navigateTo('search')}
          onNavigateToPerformance={() => navigateTo('performance')}
          onNavigateToSkillAnalytics={() => navigateTo('skill-analytics')}
          onNavigateToCommunicationAnalytics={() => navigateTo('communication-analytics')}
          onNavigateToPresentationAnalytics={() => navigateTo('presentation-analytics')}
          onNavigateToAi={() => navigateTo('chat')}
          onNavigateToAssessment={() => navigateTo('diagnostic-intake')}
          onNavigateToResult={() => navigateTo('interview-result')}
          onNavigateToHistory={() => navigateTo('history')}
        />
      )}

      {currentPage === 'presentation-analytics' && (
        <PresentationAnalyticsPage
          onNavigateToDashboard={() => navigateTo('dashboard')}
          onNavigateToProfile={() => navigateTo('profile')}
          onNavigateToCv={() => navigateTo('cv')}
          onNavigateToSimulations={() => navigateTo('simulations')}
          onNavigateToCategories={() => navigateTo('categories')}
          onNavigateToSearch={() => navigateTo('search')}
          onNavigateToPerformance={() => navigateTo('performance')}
          onNavigateToSkillAnalytics={() => navigateTo('skill-analytics')}
          onNavigateToCommunicationAnalytics={() => navigateTo('communication-analytics')}
          onNavigateToSpeechAnalytics={() => navigateTo('speech-analytics')}
          onNavigateToAi={() => navigateTo('chat')}
          onNavigateToAssessment={() => navigateTo('diagnostic-intake')}
          onNavigateToHistory={() => navigateTo('history')}
        />
      )}

      {currentPage === 'question-performance' && (
        <QuestionPerformancePage
          onNavigateToDashboard={() => navigateTo('dashboard')}
          onNavigateToProfile={() => navigateTo('profile')}
          onNavigateToCv={() => navigateTo('cv')}
          onNavigateToSimulations={() => navigateTo('simulations')}
          onNavigateToCategories={() => navigateTo('categories')}
          onNavigateToSearch={() => navigateTo('search')}
          onNavigateToPerformance={() => navigateTo('performance')}
          onNavigateToSkillAnalytics={() => navigateTo('skill-analytics')}
          onNavigateToCommunicationAnalytics={() => navigateTo('communication-analytics')}
          onNavigateToSpeechAnalytics={() => navigateTo('speech-analytics')}
          onNavigateToPresentationAnalytics={() => navigateTo('presentation-analytics')}
          onNavigateToAi={() => navigateTo('improvement')}
          onNavigateToAssessment={() => navigateTo('diagnostic-intake')}
          onNavigateToHistory={() => navigateTo('history')}
        />
      )}

      {(currentPage === 'improvement' || currentPage === 'ai-plan') && (
        <AiImprovementPlanPage
          onNavigateToDashboard={() => navigateTo('dashboard')}
          onNavigateToProfile={() => navigateTo('profile')}
          onNavigateToCv={() => navigateTo('cv')}
          onNavigateToSimulations={() => navigateTo('simulations')}
          onNavigateToCategories={() => navigateTo('categories')}
          onNavigateToSearch={() => navigateTo('search')}
          onNavigateToPerformance={() => navigateTo('performance')}
          onNavigateToSkillAnalytics={() => navigateTo('skill-analytics')}
          onNavigateToCommunicationAnalytics={() => navigateTo('communication-analytics')}
          onNavigateToSpeechAnalytics={() => navigateTo('speech-analytics')}
          onNavigateToPresentationAnalytics={() => navigateTo('presentation-analytics')}
          onNavigateToQuestionPerformance={() => navigateTo('question-performance')}
          onNavigateToAssessment={() => navigateTo('diagnostic-intake')}
          onNavigateToHistory={() => navigateTo('history')}
        />
      )}

      {(currentPage === 'interview-result' || currentPage === 'intro-result') && (
        <InterviewResultPage
          onNavigateToHome={() => navigateTo('home')}
          onNavigateToDashboard={() => navigateTo('performance')}
          onNavigateToProfile={() => navigateTo('profile')}
          onNavigateToCv={() => navigateTo('cv')}
          onNavigateToSimulations={() => navigateTo('simulations')}
          onNavigateToCategories={() => navigateTo('categories')}
          onNavigateToSearch={() => navigateTo('search')}
          onNavigateToAi={() => navigateTo('chat')}
          onNavigateToAssessment={() => navigateTo('diagnostic-intake')}
        />
      )}

      {currentPage === 'pipeline-diagnostic' && (
        <PipelineDiagnosticPage
          onNavigateToHome={() => navigateTo('home')}
          onNavigateToDashboard={() => navigateTo('dashboard')}
          onNavigateToProfile={() => navigateTo('profile')}
          onNavigateToCv={() => navigateTo('cv')}
          onNavigateToSimulations={() => navigateTo('simulations')}
          onNavigateToSearch={() => navigateTo('search')}
          onNavigateToCategories={() => navigateTo('categories')}
          onNavigateToIntroResult={() => navigateTo('intro-result')}
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
          onNavigateToSimulations={() => navigateTo('simulations')}
          onNavigateToSearch={() => navigateTo('search')}
          onNavigateToSimulationDetails={() => navigateTo('simulation-details')}
          onNavigateToIntroRoom={() => navigateTo('intro-room')}
          onNavigateToAi={() => navigateTo('chat')}
          onNavigateToCategories={() => navigateTo('categories')}
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
          onNavigateToCategories={() => navigateTo('categories')}
          onNavigateToSearch={() => navigateTo('search')}
          onNavigateToPerformance={() => navigateTo('performance')}
          onNavigateToHistory={() => navigateTo('history')}
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
          onNavigateToLogin={() => navigateTo('login')}
          onNavigateToSignup={() => navigateTo('signup')}
          onNavigateToDashboard={() => navigateTo('dashboard')}
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
          onNavigateToDashboard={() => navigateTo('dashboard')}
          onNavigateToProfile={() => navigateTo('profile')}
          onNavigateToCv={() => navigateTo('cv')}
          onNavigateToProfileAnalysis={() => navigateTo('profile-analysis')}
          onNavigateToRecommendedInterviews={() => navigateTo('recommended-interviews')}
          onNavigateToCategories={() => navigateTo('categories')}
          onNavigateToSearch={() => navigateTo('search')}
          onNavigateToAi={() => navigateTo('chat')}
        />
      )}

      {currentPage === 'search' && (
        <SearchFilterPage
          onNavigateToHome={() => navigateTo('home')}
          onNavigateToDashboard={() => navigateTo('dashboard')}
          onNavigateToProfile={() => navigateTo('profile')}
          onNavigateToCv={() => navigateTo('cv')}
          onNavigateToProfileAnalysis={() => navigateTo('profile-analysis')}
          onNavigateToRecommendedInterviews={() => navigateTo('recommended-interviews')}
          onNavigateToCategories={() => navigateTo('categories')}
          onNavigateToSimulations={() => navigateTo('simulations')}
          onNavigateToSimulationDetails={() => navigateTo('simulation-details')}
          onNavigateToAi={() => navigateTo('chat')}
        />
      )}

      {currentPage === 'simulation-details' && (
        <SimulationDetailsPage
          onNavigateToHome={() => navigateTo('home')}
          onNavigateToDashboard={() => navigateTo('dashboard')}
          onNavigateToProfile={() => navigateTo('profile')}
          onNavigateToCv={() => navigateTo('cv')}
          onNavigateToSimulations={() => navigateTo('simulations')}
          onNavigateToSearch={() => navigateTo('search')}
          onNavigateToAi={() => navigateTo('chat')}
          onNavigateToCategories={() => navigateTo('categories')}
          onNavigateToDeviceCheck={() => navigateTo('device-readiness')}
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
          onVerificationSuccess={() => navigateTo('diagnostic-intake')}
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
