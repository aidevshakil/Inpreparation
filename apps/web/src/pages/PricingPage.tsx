import React, { useState } from 'react';
import {
  Sparkles,
  ArrowRight,
  Check,
  X,
  ShieldCheck,
  Zap,
  ChevronDown,
  Calculator,
  CreditCard
} from 'lucide-react';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';
import { LiveSimulationModal } from '../components/LiveSimulationModal';
import { DemoVideoModal } from '../components/DemoVideoModal';

interface PricingPageProps {
  onNavigateToHome: () => void;
  onNavigateToFeatures: () => void;
  onNavigateToHowItWorks: () => void;
  onNavigateToSimulations: () => void;
  onNavigateToFaq?: () => void;
  onNavigateToAi?: () => void;
}

export const PricingPage: React.FC<PricingPageProps> = ({
  onNavigateToHome,
  onNavigateToFeatures,
  onNavigateToHowItWorks,
  onNavigateToSimulations,
  onNavigateToFaq,
  onNavigateToAi
}) => {
  const [isAnnual, setIsAnnual] = useState(true);
  const [isSimulatorOpen, setIsSimulatorOpen] = useState(false);
  const [isDemoOpen, setIsDemoOpen] = useState(false);
  const [selectedRole, setSelectedRole] = useState('Senior Frontend Engineer');
  const [activeCalculatorOption, setActiveCalculatorOption] = useState<number>(1);
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  // 1. Calculator Scenarios
  const calculatorOptions = [
    {
      name: 'Casual Explorer',
      sub: '1-2 mocks / month',
      plan: 'Free Starter Plan ($0)',
      interviews: '2 Full Simulations / month',
      savings: 'Great for initial baseline testing',
      cta: 'Start Free'
    },
    {
      name: 'Active Job Seeker',
      sub: '3-5 mocks / week (Recommended)',
      plan: 'Pro Candidate Plan ($19/mo)',
      interviews: 'Unlimited Practice Simulations',
      savings: 'Saves ~$800/mo vs human mock coaches ($200/hr)',
      cta: 'Upgrade to Pro'
    },
    {
      name: 'Intensive Sprint',
      sub: 'Daily mocks before big loop',
      plan: 'Pro Candidate Plan ($19/mo)',
      interviews: 'Unlimited Practice + Fast GPU',
      savings: 'Accelerates readiness by 3.2x in 2 weeks',
      cta: 'Start Sprint'
    },
    {
      name: 'Executive & Staff Tier',
      sub: 'L6+ / Principal / PM prep',
      plan: 'Career Fast-Track ($39/mo)',
      interviews: 'Unlimited + FAANG Packs + Rubrics',
      savings: 'Includes quarterly human coach rubric audit',
      cta: 'Get Fast-Track'
    }
  ];

  const currentCalc = calculatorOptions[activeCalculatorOption];

  // 2. Comparison Table Matrix Data
  const comparisonCategories = [
    {
      category: 'Practice & Simulation Experience',
      rows: [
        { feature: 'Full AI Mock Interview Sessions', free: '2 / month', pro: 'Unlimited', premium: 'Unlimited' },
        { feature: 'Curated Question Tracks Bank', free: '100+ Standard', pro: '500+ Curated', premium: '500+ & FAANG Rubrics' },
        { feature: 'Custom Job Description & Resume Upload', free: false, pro: true, premium: true },
        { feature: 'Interactive Whiteboard & Coding Canvas', free: 'Basic Text', pro: 'Full Interactive', premium: 'Full Interactive + Sandbox' }
      ]
    },
    {
      category: 'AI Telemetry & Video Evaluation',
      rows: [
        { feature: 'Conversational Voice Latency', free: 'Standard (~800ms)', pro: '<300ms Ultra-Low', premium: '<200ms Dedicated GPU' },
        { feature: 'Eye Contact & Face Tracking (Webcam)', free: false, pro: true, premium: true },
        { feature: 'Real-Time Cadence & Filler Word Filter', free: 'Basic', pro: 'Advanced Multi-Modal', premium: 'Advanced Multi-Modal' },
        { feature: 'Adaptive Contextual Follow-up Questions', free: false, pro: true, premium: true }
      ]
    },
    {
      category: 'Diagnostics & Actionable Improvement',
      rows: [
        { feature: 'Comprehensive Diagnostic Scorecard', free: 'Basic Summary', pro: 'Full Multi-Dimensional', premium: 'Full + Coach Audit' },
        { feature: 'AI-Optimized Model Answers (STAR Method)', free: false, pro: true, premium: true },
        { feature: 'Actionable Improvement Drills Library', free: false, pro: true, premium: true },
        { feature: 'Downloadable PDF Scorecards & Transcripts', free: false, pro: true, premium: true }
      ]
    },
    {
      category: 'Company Packs & Support',
      rows: [
        { feature: 'Company-Specific Packs (Google, Meta, Amazon)', free: false, pro: false, premium: true },
        { feature: 'Salary Negotiation AI Simulator', free: false, pro: false, premium: true },
        { feature: '1-on-1 Human Expert Rubric Audit', free: false, pro: false, premium: 'Quarterly Review' },
        { feature: 'Support Level', free: 'Community Discord', pro: 'Priority Email', premium: '24/7 Dedicated Concierge' }
      ]
    }
  ];

  const handleStartPractice = (roleName?: string) => {
    if (roleName) setSelectedRole(roleName);
    setIsSimulatorOpen(true);
  };

  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', background: '#07090e', color: '#f8fafc' }}>
      {/* Navbar */}
      <Navbar
        onStartPractice={handleStartPractice}
        onNavigateToAi={onNavigateToAi}
        currentPage="pricing"
        onNavigate={(page) => {
          if (page === 'home') onNavigateToHome();
          if (page === 'features') onNavigateToFeatures();
          if (page === 'how-it-works') onNavigateToHowItWorks();
          if (page === 'simulations') onNavigateToSimulations();
          if (page === 'faq' && onNavigateToFaq) onNavigateToFaq();
        }}
      />

      <main style={{ flex: 1 }}>
        {/* ========================================================
            HERO SECTION: Practice More. Improve Faster. Choose the Plan That Fits You.
        ======================================================== */}
        <section style={{ padding: '60px 0 50px', position: 'relative', overflow: 'hidden' }}>
          <div className="bg-ambient-glow" style={{ top: '-15%', left: '20%', width: '500px', height: '500px', background: 'radial-gradient(circle, rgba(124, 58, 237, 0.35) 0%, transparent 70%)' }} />
          <div className="bg-ambient-glow" style={{ top: '30%', right: '15%', width: '450px', height: '450px', background: 'radial-gradient(circle, rgba(6, 182, 212, 0.25) 0%, transparent 70%)' }} />

          <div className="container" style={{ textAlign: 'center', position: 'relative', zIndex: 2 }}>
            <div style={{ marginBottom: '18px' }}>
              <span className="badge-pill badge-purple">
                <Sparkles size={14} color="#c084fc" />
                TRANSPARENT PRICING & PLANS
              </span>
            </div>

            <h1 style={{
              fontSize: 'clamp(36px, 5vw, 60px)',
              fontWeight: 800,
              letterSpacing: '-0.03em',
              lineHeight: 1.15,
              marginBottom: '20px',
              maxWidth: '920px',
              margin: '0 auto 20px'
            }}>
              Practice More. Improve Faster.{' '}
              <span className="gradient-highlight-text" style={{ textShadow: '0 0 40px rgba(124, 58, 237, 0.4)' }}>
                Choose the Plan That Fits You.
              </span>
            </h1>

            <p style={{
              fontSize: '18px',
              color: '#94a3b8',
              lineHeight: 1.7,
              maxWidth: '740px',
              margin: '0 auto 32px'
            }}>
              Clear, predictable pricing with zero surprise fees. Invest in your career confidence with unlimited
              AI interview simulations and comprehensive feedback scorecards.
            </p>

            {/* Badges Row */}
            <div style={{
              display: 'flex',
              flexWrap: 'wrap',
              justifyContent: 'center',
              gap: '24px',
              marginBottom: '36px',
              color: '#cbd5e1',
              fontSize: '13px',
              fontWeight: 500
            }}>
              <span style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <ShieldCheck size={16} color="#10b981" /> 14-Day Money-Back Guarantee
              </span>
              <span style={{ color: '#475569' }}>•</span>
              <span style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <CreditCard size={16} color="#06b6d4" /> Cancel Anytime with 1-Click
              </span>
              <span style={{ color: '#475569' }}>•</span>
              <span style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <Zap size={16} color="#818cf8" /> Instant Activation & Zero Queue
              </span>
            </div>

            {/* Billing Switcher Toggle */}
            <div style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '12px',
              background: 'rgba(255, 255, 255, 0.05)',
              padding: '6px 10px',
              borderRadius: '9999px',
              border: '1px solid rgba(255, 255, 255, 0.1)'
            }}>
              <button
                onClick={() => setIsAnnual(false)}
                style={{
                  background: !isAnnual ? '#6366f1' : 'transparent',
                  color: !isAnnual ? '#fff' : '#94a3b8',
                  border: 'none',
                  borderRadius: '9999px',
                  padding: '6px 18px',
                  fontSize: '13px',
                  fontWeight: 600,
                  cursor: 'pointer',
                  transition: 'all 0.2s'
                }}
              >
                Monthly
              </button>
              <button
                onClick={() => setIsAnnual(true)}
                style={{
                  background: isAnnual ? '#6366f1' : 'transparent',
                  color: isAnnual ? '#fff' : '#94a3b8',
                  border: 'none',
                  borderRadius: '9999px',
                  padding: '6px 18px',
                  fontSize: '13px',
                  fontWeight: 600,
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '6px',
                  transition: 'all 0.2s'
                }}
              >
                <span>Annual</span>
                <span style={{
                  background: '#10b981',
                  color: '#fff',
                  fontSize: '10px',
                  fontWeight: 800,
                  padding: '2px 6px',
                  borderRadius: '9999px'
                }}>
                  SAVE 20%
                </span>
              </button>
            </div>
          </div>
        </section>

        {/* ========================================================
            3 PRIMARY PRICING TIER CARDS
        ======================================================== */}
        <section style={{ padding: '20px 0 60px', position: 'relative' }}>
          <div className="container">
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
              gap: '28px',
              alignItems: 'stretch'
            }}>
              {/* Card 1: Starter / Free */}
              <div
                className="glass-card"
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  padding: '36px 28px',
                  background: '#0e121c',
                  border: '1px solid rgba(255, 255, 255, 0.08)'
                }}
              >
                <div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '12px' }}>
                    <h3 style={{ fontSize: '22px', fontWeight: 800, color: '#f8fafc' }}>
                      Starter
                    </h3>
                    <span style={{ fontSize: '11px', fontWeight: 700, color: '#94a3b8', background: 'rgba(255, 255, 255, 0.06)', padding: '4px 8px', borderRadius: '6px' }}>
                      Free Forever
                    </span>
                  </div>

                  <p style={{ fontSize: '13px', color: '#94a3b8', lineHeight: 1.5, marginBottom: '24px' }}>
                    Ideal for exploring the platform and testing your baseline interview performance.
                  </p>

                  <div style={{ marginBottom: '28px' }}>
                    <div style={{ display: 'flex', alignItems: 'baseline', gap: '4px' }}>
                      <span style={{ fontSize: '44px', fontWeight: 800, color: '#f8fafc', letterSpacing: '-0.03em' }}>
                        $0
                      </span>
                      <span style={{ fontSize: '14px', color: '#94a3b8' }}>/ month</span>
                    </div>
                    <div style={{ fontSize: '12px', color: '#64748b', marginTop: '2px' }}>
                      No credit card required
                    </div>
                  </div>

                  {/* Features */}
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', marginBottom: '32px' }}>
                    {[
                      '2 Full AI Interview Sessions / month',
                      'Standard Question Bank (100+ questions)',
                      'Basic Diagnostic Scorecard (Text Summary)',
                      'Standard Conversational Voice Speed',
                      'Community Discord Access'
                    ].map((feat, fIdx) => (
                      <div key={fIdx} style={{ display: 'flex', alignItems: 'flex-start', gap: '10px', fontSize: '13px', color: '#cbd5e1' }}>
                        <Check size={16} color="#10b981" style={{ marginTop: '2px', flexShrink: 0 }} />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <button
                  onClick={() => handleStartPractice()}
                  className="btn-secondary"
                  style={{ width: '100%', justifyContent: 'center' }}
                >
                  <span>Start Free</span>
                  <ArrowRight size={15} />
                </button>
              </div>

              {/* Card 2: Pro Candidate (Most Popular) */}
              <div
                className="glass-card"
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  padding: '36px 28px',
                  background: 'linear-gradient(180deg, #171d30 0%, #0e121e 100%)',
                  border: '2px solid #818cf8',
                  boxShadow: '0 20px 50px -10px rgba(124, 58, 237, 0.4)',
                  transform: 'scale(1.03)',
                  position: 'relative'
                }}
              >
                {/* Popular Pill */}
                <div style={{
                  position: 'absolute',
                  top: '-14px',
                  left: '50%',
                  transform: 'translateX(-50%)',
                  background: 'linear-gradient(90deg, #7c3aed 0%, #6366f1 100%)',
                  color: '#fff',
                  fontSize: '11px',
                  fontWeight: 800,
                  textTransform: 'uppercase',
                  letterSpacing: '0.08em',
                  padding: '4px 16px',
                  borderRadius: '9999px',
                  boxShadow: '0 4px 12px rgba(124, 58, 237, 0.5)'
                }}>
                  ✦ MOST POPULAR CHOICE
                </div>

                <div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '12px' }}>
                    <h3 style={{ fontSize: '22px', fontWeight: 800, color: '#f8fafc' }}>
                      Pro Candidate
                    </h3>
                    <span style={{ fontSize: '11px', fontWeight: 700, color: '#a5b4fc', background: 'rgba(99, 102, 241, 0.15)', padding: '4px 8px', borderRadius: '6px' }}>
                      Unlimited Access
                    </span>
                  </div>

                  <p style={{ fontSize: '13px', color: '#94a3b8', lineHeight: 1.5, marginBottom: '24px' }}>
                    Our most popular plan for active job seekers preparing for high-stakes loops.
                  </p>

                  <div style={{ marginBottom: '28px' }}>
                    <div style={{ display: 'flex', alignItems: 'baseline', gap: '4px' }}>
                      <span style={{ fontSize: '44px', fontWeight: 800, color: '#f8fafc', letterSpacing: '-0.03em' }}>
                        {isAnnual ? '$15' : '$19'}
                      </span>
                      <span style={{ fontSize: '14px', color: '#94a3b8' }}>/ month</span>
                    </div>
                    <div style={{ fontSize: '12px', color: '#64748b', marginTop: '2px' }}>
                      {isAnnual ? 'Billed annually ($180/year)' : 'Billed monthly, cancel anytime'}
                    </div>
                  </div>

                  {/* Features */}
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', marginBottom: '32px' }}>
                    {[
                      'Unlimited AI Mock Interviews',
                      'Multi-Modal Video & Eye Contact Analysis',
                      'Real-time Voice Engine (<300ms latency)',
                      'Upload Custom Job Descriptions & Resumes',
                      'AI-Optimized Model Answers (STAR Method)',
                      'Targeted Weakness Improvement Drills',
                      'Downloadable Full Diagnostic PDF Scorecards'
                    ].map((feat, fIdx) => (
                      <div key={fIdx} style={{ display: 'flex', alignItems: 'flex-start', gap: '10px', fontSize: '13px', color: '#cbd5e1' }}>
                        <Check size={16} color="#818cf8" style={{ marginTop: '2px', flexShrink: 0 }} />
                        <span style={{ fontWeight: fIdx === 0 ? 700 : 400, color: fIdx === 0 ? '#fff' : '#cbd5e1' }}>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <button
                  onClick={() => handleStartPractice()}
                  className="btn-primary"
                  style={{ width: '100%', justifyContent: 'center' }}
                >
                  <span>Upgrade to Pro</span>
                  <ArrowRight size={15} />
                </button>
              </div>

              {/* Card 3: Career Fast-Track / Premium */}
              <div
                className="glass-card"
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  padding: '36px 28px',
                  background: '#0e121c',
                  border: '1px solid rgba(255, 255, 255, 0.08)'
                }}
              >
                <div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '12px' }}>
                    <h3 style={{ fontSize: '22px', fontWeight: 800, color: '#f8fafc' }}>
                      Career Fast-Track
                    </h3>
                    <span style={{ fontSize: '11px', fontWeight: 700, color: '#f59e0b', background: 'rgba(245, 158, 11, 0.12)', padding: '4px 8px', borderRadius: '6px' }}>
                      Executive Edge
                    </span>
                  </div>

                  <p style={{ fontSize: '13px', color: '#94a3b8', lineHeight: 1.5, marginBottom: '24px' }}>
                    Designed for senior, staff, and executive candidates seeking top offers.
                  </p>

                  <div style={{ marginBottom: '28px' }}>
                    <div style={{ display: 'flex', alignItems: 'baseline', gap: '4px' }}>
                      <span style={{ fontSize: '44px', fontWeight: 800, color: '#f8fafc', letterSpacing: '-0.03em' }}>
                        {isAnnual ? '$39' : '$49'}
                      </span>
                      <span style={{ fontSize: '14px', color: '#94a3b8' }}>/ month</span>
                    </div>
                    <div style={{ fontSize: '12px', color: '#64748b', marginTop: '2px' }}>
                      {isAnnual ? 'Billed annually ($468/year)' : 'Billed monthly'}
                    </div>
                  </div>

                  {/* Features */}
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', marginBottom: '32px' }}>
                    {[
                      'Everything in Pro Candidate tier',
                      'FAANG Company-Specific Question Rubrics',
                      'Executive System Design Whiteboard Practice',
                      'Salary Negotiation AI Simulator',
                      '1-on-1 Human Expert Rubric Review (Quarterly)',
                      'Priority 24/7 Concierge Support'
                    ].map((feat, fIdx) => (
                      <div key={fIdx} style={{ display: 'flex', alignItems: 'flex-start', gap: '10px', fontSize: '13px', color: '#cbd5e1' }}>
                        <Check size={16} color="#10b981" style={{ marginTop: '2px', flexShrink: 0 }} />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <button
                  onClick={() => handleStartPractice()}
                  className="btn-secondary"
                  style={{ width: '100%', justifyContent: 'center' }}
                >
                  <span>Get Fast-Track</span>
                  <ArrowRight size={15} />
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* ========================================================
            HOW MUCH PRACTICE DO YOU NEED? (INTERACTIVE CALCULATOR)
        ======================================================== */}
        <section style={{ padding: '60px 0', background: 'linear-gradient(180deg, #07090e 0%, #0d121f 100%)' }}>
          <div className="container">
            <div style={{
              background: 'linear-gradient(135deg, #111728 0%, #0c0f18 100%)',
              border: '1px solid rgba(99, 102, 241, 0.3)',
              borderRadius: '28px',
              padding: '40px',
              boxShadow: '0 25px 60px -15px rgba(0, 0, 0, 0.8)'
            }}>
              <div style={{ textAlign: 'center', maxWidth: '780px', margin: '0 auto 36px' }}>
                <span className="badge-pill badge-cyan" style={{ marginBottom: '10px' }}>
                  <Calculator size={13} /> PLAN RECOMMENDATION CALCULATOR
                </span>
                <h2 style={{ fontSize: '28px', fontWeight: 800, color: '#f8fafc', marginTop: '6px' }}>
                  How Much Practice Do You Need?
                </h2>
                <p style={{ fontSize: '15px', color: '#94a3b8' }}>
                  Select your preparation timeline to calculate your optimal plan and estimated ROI.
                </p>
              </div>

              <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                gap: '32px',
                alignItems: 'center'
              }}>
                {/* Left side: Timeline options */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                  {calculatorOptions.map((opt, idx) => (
                    <div
                      key={idx}
                      onClick={() => setActiveCalculatorOption(idx)}
                      style={{
                        padding: '16px 20px',
                        borderRadius: '12px',
                        background: activeCalculatorOption === idx ? 'rgba(99, 102, 241, 0.2)' : 'rgba(255, 255, 255, 0.03)',
                        border: activeCalculatorOption === idx ? '1px solid #818cf8' : '1px solid rgba(255, 255, 255, 0.07)',
                        cursor: 'pointer',
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        transition: 'all 0.2s'
                      }}
                    >
                      <div>
                        <div style={{ fontSize: '15px', fontWeight: 700, color: '#f8fafc' }}>{opt.name}</div>
                        <div style={{ fontSize: '12px', color: '#94a3b8' }}>{opt.sub}</div>
                      </div>
                      <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: activeCalculatorOption === idx ? '#818cf8' : '#334155' }} />
                    </div>
                  ))}
                </div>

                {/* Right side: Recommendation Calculation Display */}
                <div style={{
                  background: 'rgba(0, 0, 0, 0.4)',
                  border: '1px solid rgba(99, 102, 241, 0.3)',
                  borderRadius: '20px',
                  padding: '28px'
                }}>
                  <div style={{ fontSize: '11px', fontWeight: 800, color: '#10b981', textTransform: 'uppercase', marginBottom: '8px' }}>
                    ✦ RECOMMENDED MATCH
                  </div>
                  <h3 style={{ fontSize: '24px', fontWeight: 800, color: '#f8fafc', marginBottom: '6px' }}>
                    {currentCalc.plan}
                  </h3>
                  <div style={{ fontSize: '13px', color: '#67e8f9', marginBottom: '16px' }}>
                    Estimated capacity: {currentCalc.interviews}
                  </div>

                  <div style={{ background: 'rgba(99, 102, 241, 0.1)', borderRadius: '10px', padding: '14px', marginBottom: '20px', fontSize: '13px', color: '#cbd5e1' }}>
                    💡 <b>Value ROI:</b> {currentCalc.savings}
                  </div>

                  <button
                    onClick={() => handleStartPractice()}
                    className="btn-primary"
                    style={{ width: '100%', justifyContent: 'center' }}
                  >
                    <span>{currentCalc.cta}</span>
                    <ArrowRight size={15} />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ========================================================
            SEE THE DIFFERENCE (GENERIC AI vs INPREP AI)
        ======================================================== */}
        <section style={{ padding: '60px 0', position: 'relative' }}>
          <div className="container">
            <div style={{ textAlign: 'center', maxWidth: '780px', margin: '0 auto 40px' }}>
              <span className="badge-pill badge-purple" style={{ marginBottom: '12px' }}>
                WHY GENERIC AI IS NOT ENOUGH
              </span>
              <h2 style={{ fontSize: 'clamp(28px, 4vw, 42px)', fontWeight: 800, letterSpacing: '-0.02em', marginBottom: '14px' }}>
                See the Difference
              </h2>
              <p style={{ fontSize: '16px', color: '#94a3b8' }}>
                Generic chatbots only read text prompts. InPrep AI evaluates authentic speech, body language, and company-calibrated rubrics.
              </p>
            </div>

            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
              gap: '28px'
            }}>
              {/* Left: Generic AI */}
              <div className="glass-card" style={{ padding: '28px', background: '#0e121c', border: '1px solid rgba(239, 68, 68, 0.3)' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px' }}>
                  <h3 style={{ fontSize: '18px', fontWeight: 800, color: '#fca5a5' }}>
                    Generic Chatbots (ChatGPT / Claude)
                  </h3>
                  <span style={{ fontSize: '11px', color: '#ef4444', fontWeight: 700, background: 'rgba(239, 68, 68, 0.15)', padding: '3px 8px', borderRadius: '4px' }}>
                    Text Only
                  </span>
                </div>
                <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '12px', fontSize: '13px', color: '#94a3b8' }}>
                  <li style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <X size={16} color="#ef4444" /> No conversational voice latency or spoken back-and-forth
                  </li>
                  <li style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <X size={16} color="#ef4444" /> Zero body language or eye contact analysis
                  </li>
                  <li style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <X size={16} color="#ef4444" /> Generic textbook answers without FAANG rubric scoring
                  </li>
                </ul>
              </div>

              {/* Right: InPrep Multi-Modal AI */}
              <div className="glass-card" style={{ padding: '28px', background: '#121828', border: '1px solid rgba(16, 185, 129, 0.4)', boxShadow: '0 0 35px rgba(16, 185, 129, 0.12)' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px' }}>
                  <h3 style={{ fontSize: '18px', fontWeight: 800, color: '#6ee7b7' }}>
                    InPrep Multi-Modal AI (Score: 89/100)
                  </h3>
                  <span style={{ fontSize: '11px', color: '#10b981', fontWeight: 700, background: 'rgba(16, 185, 129, 0.15)', padding: '3px 8px', borderRadius: '4px' }}>
                    ✦ Full Audio & Vision
                  </span>
                </div>
                <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '12px', fontSize: '13px', color: '#cbd5e1' }}>
                  <li style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <Check size={16} color="#10b981" /> Sub-300ms bidirectional speech with natural cadence & follow-ups
                  </li>
                  <li style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <Check size={16} color="#10b981" /> 94% Eye contact, posture tracking, and filler word detection
                  </li>
                  <li style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <Check size={16} color="#10b981" /> Actionable STAR model answers with quantifiable impact suggestions
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* ========================================================
            COMPARE ALL PLANS (FULL DETAILED COMPARISON TABLE)
        ======================================================== */}
        <section style={{ padding: '60px 0', background: 'linear-gradient(180deg, #07090e 0%, #0d121f 100%)' }}>
          <div className="container">
            <div style={{ textAlign: 'center', maxWidth: '780px', margin: '0 auto 40px' }}>
              <span className="badge-pill badge-cyan" style={{ marginBottom: '12px' }}>
                FULL MATRIX
              </span>
              <h2 style={{ fontSize: 'clamp(28px, 4vw, 42px)', fontWeight: 800, letterSpacing: '-0.02em', marginBottom: '14px' }}>
                Compare All Plans
              </h2>
              <p style={{ fontSize: '16px', color: '#94a3b8' }}>
                A side-by-side technical breakdown of features across every subscription tier.
              </p>
            </div>

            {/* Matrix Table */}
            <div style={{
              background: '#0d121c',
              border: '1px solid rgba(255, 255, 255, 0.08)',
              borderRadius: '24px',
              overflowX: 'auto',
              boxShadow: '0 20px 40px rgba(0, 0, 0, 0.5)'
            }}>
              <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left', minWidth: '700px' }}>
                <thead>
                  <tr style={{ background: '#131927', borderBottom: '1px solid rgba(255, 255, 255, 0.08)' }}>
                    <th style={{ padding: '20px 24px', color: '#94a3b8', fontSize: '14px', fontWeight: 600, width: '40%' }}>
                      Features & Capabilities
                    </th>
                    <th style={{ padding: '20px 24px', color: '#94a3b8', fontSize: '14px', fontWeight: 700, width: '20%' }}>
                      Free Starter
                    </th>
                    <th style={{ padding: '20px 24px', color: '#fff', fontSize: '15px', fontWeight: 800, background: 'rgba(99, 102, 241, 0.15)', borderLeft: '1px solid rgba(99, 102, 241, 0.3)', borderRight: '1px solid rgba(99, 102, 241, 0.3)', width: '22%' }}>
                      Pro Candidate
                    </th>
                    <th style={{ padding: '20px 24px', color: '#94a3b8', fontSize: '14px', fontWeight: 700, width: '18%' }}>
                      Fast-Track
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {comparisonCategories.map((cat, cIdx) => (
                    <React.Fragment key={cIdx}>
                      <tr style={{ background: 'rgba(99, 102, 241, 0.08)', borderBottom: '1px solid rgba(255, 255, 255, 0.05)' }}>
                        <td colSpan={4} style={{ padding: '12px 24px', fontSize: '12px', fontWeight: 800, color: '#818cf8', textTransform: 'uppercase', letterSpacing: '0.06em' }}>
                          {cat.category}
                        </td>
                      </tr>
                      {cat.rows.map((row, rIdx) => (
                        <tr key={rIdx} style={{ borderBottom: '1px solid rgba(255, 255, 255, 0.04)' }}>
                          <td style={{ padding: '16px 24px', fontSize: '13px', color: '#cbd5e1', fontWeight: 500 }}>
                            {row.feature}
                          </td>
                          <td style={{ padding: '16px 24px', fontSize: '13px', color: '#94a3b8' }}>
                            {typeof row.free === 'boolean' ? (
                              row.free ? <Check size={16} color="#10b981" /> : <X size={16} color="#64748b" />
                            ) : row.free}
                          </td>
                          <td style={{ padding: '16px 24px', fontSize: '13px', color: '#fff', fontWeight: 700, background: 'rgba(99, 102, 241, 0.06)', borderLeft: '1px solid rgba(99, 102, 241, 0.2)', borderRight: '1px solid rgba(99, 102, 241, 0.2)' }}>
                            {typeof row.pro === 'boolean' ? (
                              row.pro ? <Check size={16} color="#818cf8" /> : <X size={16} color="#64748b" />
                            ) : row.pro}
                          </td>
                          <td style={{ padding: '16px 24px', fontSize: '13px', color: '#94a3b8' }}>
                            {typeof row.premium === 'boolean' ? (
                              row.premium ? <Check size={16} color="#10b981" /> : <X size={16} color="#64748b" />
                            ) : row.premium}
                          </td>
                        </tr>
                      ))}
                    </React.Fragment>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* ========================================================
            FAQ ACCORDION SECTION
        ======================================================== */}
        <section style={{ padding: '60px 0', position: 'relative' }}>
          <div className="container" style={{ maxWidth: '820px' }}>
            <div style={{ textAlign: 'center', marginBottom: '36px' }}>
              <span className="badge-pill badge-purple" style={{ marginBottom: '12px' }}>
                BILLING & PLANS FAQ
              </span>
              <h2 style={{ fontSize: '28px', fontWeight: 800, color: '#f8fafc' }}>
                Frequently Asked Questions
              </h2>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              {[
                {
                  q: 'Can I switch or cancel my plan anytime?',
                  a: 'Yes! You can upgrade, downgrade, or cancel your subscription at any time directly from your account settings with a single click. There are zero cancellation fees.'
                },
                {
                  q: 'How does the 14-day money-back guarantee work?',
                  a: 'If you are not 100% satisfied with InPrep AI within 14 days of subscribing to any paid plan, simply message our support team for a prompt, full refund with no questions asked.'
                },
                {
                  q: 'Can I expense InPrep AI through my company learning budget?',
                  a: 'Yes! We provide itemized receipts and tax invoices suitable for submission to your employer’s professional development or education stipends.'
                },
                {
                  q: 'Are my audio and video interview recordings kept private?',
                  a: 'Absolutely. All computer vision telemetry processes client-side in your browser, and we never use your recordings to train public third-party foundational models.'
                }
              ].map((faq, idx) => {
                const isOpen = openFaqIndex === idx;
                return (
                  <div key={idx} className="glass-card" style={{ padding: '0', background: '#0e131f' }}>
                    <button
                      onClick={() => setOpenFaqIndex(isOpen ? null : idx)}
                      style={{
                        width: '100%',
                        padding: '18px 20px',
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        background: 'transparent',
                        border: 'none',
                        color: '#f8fafc',
                        fontSize: '15px',
                        fontWeight: 700,
                        cursor: 'pointer',
                        textAlign: 'left'
                      }}
                    >
                      <span>{faq.q}</span>
                      <ChevronDown size={18} style={{ transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)', transition: 'transform 0.2s', color: '#818cf8' }} />
                    </button>
                    {isOpen && (
                      <div style={{ padding: '0 20px 18px', fontSize: '13px', color: '#94a3b8', lineHeight: 1.6, borderTop: '1px solid rgba(255, 255, 255, 0.05)', paddingTop: '12px' }}>
                        {faq.a}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* ========================================================
            BOTTOM CTA BANNER
        ======================================================== */}
        <section style={{ padding: '60px 0 100px', position: 'relative' }}>
          <div className="container">
            <div style={{
              background: 'linear-gradient(135deg, #1e1b4b 0%, #0f172a 50%, #082f49 100%)',
              border: '1px solid rgba(124, 58, 237, 0.4)',
              borderRadius: '32px',
              padding: '60px 32px',
              textAlign: 'center',
              position: 'relative',
              overflow: 'hidden',
              boxShadow: '0 30px 70px -15px rgba(0, 0, 0, 0.8), 0 0 50px rgba(124, 58, 237, 0.3)'
            }}>
              <div style={{ position: 'relative', zIndex: 2, maxWidth: '720px', margin: '0 auto' }}>
                <span className="badge-pill badge-purple" style={{ marginBottom: '16px' }}>
                  <Sparkles size={13} color="#c084fc" />
                  START PREPARING TODAY
                </span>

                <h2 style={{
                  fontSize: 'clamp(32px, 5vw, 48px)',
                  fontWeight: 800,
                  color: '#ffffff',
                  letterSpacing: '-0.03em',
                  lineHeight: 1.2,
                  marginBottom: '18px'
                }}>
                  Start Preparing for Your Next Interview Today
                </h2>

                <p style={{
                  fontSize: '17px',
                  color: '#cbd5e1',
                  lineHeight: 1.7,
                  marginBottom: '36px'
                }}>
                  Join 10,000+ candidates who conquered anxiety and landed competitive tech offers.
                </p>

                <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '16px' }}>
                  <button
                    onClick={() => handleStartPractice()}
                    className="btn-primary"
                    style={{ fontSize: '16px', padding: '15px 34px' }}
                  >
                    <span>Start Free Practice Now</span>
                    <ArrowRight size={18} />
                  </button>

                  <button
                    onClick={onNavigateToHome}
                    className="btn-secondary"
                    style={{ fontSize: '15px', padding: '15px 28px' }}
                  >
                    <span>Back to Overview</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />

      {/* Live Simulation Modal */}
      <LiveSimulationModal
        isOpen={isSimulatorOpen}
        onClose={() => setIsSimulatorOpen(false)}
        initialRole={selectedRole}
      />

      {/* Demo Video Modal */}
      <DemoVideoModal
        isOpen={isDemoOpen}
        onClose={() => setIsDemoOpen(false)}
        onStartPractice={() => handleStartPractice()}
      />
    </div>
  );
};
