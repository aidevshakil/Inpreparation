import React, { useState } from 'react';
import {
  Sparkles,
  ArrowRight,
  Upload,
  FileText,
  UserCheck,
  CheckCircle2,
  Briefcase,
  Eye,
  Sliders,
  Play,
  Pause,
  Video,
  Mic,
  MicOff,
  Activity,
  Award,
  Check,
  Clock,
  Terminal
} from 'lucide-react';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';
import { LiveSimulationModal } from '../components/LiveSimulationModal';
import { DemoVideoModal } from '../components/DemoVideoModal';

interface HowItWorksPageProps {
  onNavigateToHome: () => void;
  onNavigateToFeatures: () => void;
  onNavigateToSimulations?: () => void;
  onNavigateToPricing?: () => void;
  onNavigateToFaq?: () => void;
  onNavigateToAi?: () => void;
}

export const HowItWorksPage: React.FC<HowItWorksPageProps> = ({
  onNavigateToHome,
  onNavigateToFeatures,
  onNavigateToSimulations,
  onNavigateToPricing,
  onNavigateToFaq,
  onNavigateToAi
}) => {
  const [isSimulatorOpen, setIsSimulatorOpen] = useState(false);
  const [isDemoOpen, setIsDemoOpen] = useState(false);

  // Calibration state
  const [activePathway, setActivePathway] = useState<'upload' | 'role'>('upload');
  const [selectedRole, setSelectedRole] = useState('Senior Frontend Engineer');
  const [selectedLevel, setSelectedLevel] = useState('Senior • L5/L6');
  const [selectedCompany, setSelectedCompany] = useState('Google / Tier-1 FAANG');
  const [selectedFocus, setSelectedFocus] = useState<string[]>([
    'System Architecture',
    'STAR Leadership',
    'Distributed Caching'
  ]);
  const [isUploading, setIsUploading] = useState(false);
  const [uploadedFileName, setUploadedFileName] = useState<string | null>('Senior_Fullstack_Resume_2026.pdf');

  // Step 2: Persona Engine State
  const [selectedPersonaIdx, setSelectedPersonaIdx] = useState(1); // Default to Bar Raiser
  const [isPlayingPersonaAudio, setIsPlayingPersonaAudio] = useState(false);

  // Step 4: Practice Modes State
  const [activePracticeMode, setActivePracticeMode] = useState<number>(0);

  // Step 5: Studio Mode Tab
  const [studioModeTab, setStudioModeTab] = useState<'system' | 'behavioral' | 'coding' | 'rapid'>('system');
  const [isMicMuted, setIsMicMuted] = useState(false);

  // Step 7: Scorecard Tabs
  const [scorecardTab, setScorecardTab] = useState<'strengths' | 'opportunities' | 'model'>('strengths');

  // 8 Journey Overview Cards
  const journeySteps = [
    { num: '01', title: 'Resume Parsing & Extraction', tag: 'Ingestion', desc: 'AI extracts technical skills, leadership milestones, and stack experience from your CV.' },
    { num: '02', title: 'Custom Role Calibration', tag: 'Alignment', desc: 'Calibrate questions to your exact seniority level, target company, and JD requirements.' },
    { num: '03', title: 'Adaptive Interviewer Persona', tag: 'Psychometrics', desc: 'Choose between Encouraging Mentor, Tough Bar Raiser, or Fast-Paced Recruiter.' },
    { num: '04', title: 'Dynamic Conversational Simulation', tag: 'Voice AI', desc: 'Real-time bidirectional voice interview with natural cadence and follow-up probes.' },
    { num: '05', title: 'Real-Time Hints & Pacing', tag: 'Live Guidance', desc: 'Get live guidance in practice mode to refine your answer structure without penalty.' },
    { num: '06', title: 'Multi-Modal Vision & Voice', tag: 'Telemetry', desc: 'Computer vision and acoustic NLP evaluate eye contact, posture, WPM, and vocal tone.' },
    { num: '07', title: 'Diagnostic Scorecard & STAR', tag: 'Evaluation', desc: 'Instant multi-dimensional report with timestamped audio and model answers.' },
    { num: '08', title: 'Targeted Action Drills', tag: 'Retraining', desc: 'Personalized follow-up exercises to eliminate weak points and accelerate readiness.' }
  ];

  // Personas data
  const personas = [
    {
      id: 0,
      name: 'Elena Rostova',
      title: 'Senior Engineering Manager',
      company: 'High-Growth Fintech & Scaleups',
      avatarGradient: 'linear-gradient(135deg, #06b6d4 0%, #3b82f6 100%)',
      style: 'Encouraging Mentor',
      tag: 'Supportive & Structured',
      rigor: 78,
      probingDepth: 80,
      interruptionRate: 'Low (Patient & Guiding)',
      tone: 'Constructive, Warm, Feedback-Driven',
      quote: "Take your time framing your thoughts. What core architectural trade-offs did you weigh before committing to this database sharding strategy?"
    },
    {
      id: 1,
      name: 'Dr. Marcus Vance',
      title: 'Principal Bar Raiser',
      company: 'Tier-1 FAANG Cloud Infrastructure',
      avatarGradient: 'linear-gradient(135deg, #8b5cf6 0%, #ec4899 100%)',
      style: 'Tough Bar Raiser',
      tag: 'High Critical Rigor',
      rigor: 96,
      probingDepth: 94,
      interruptionRate: 'Moderate (Probes Fuzzy Claims)',
      tone: 'Direct, Analytical, High-Precision',
      quote: "You mentioned using Redis for distributed locks across multi-region clusters. Walk me through your failover consensus if network partition splits regions during high writes."
    },
    {
      id: 2,
      name: 'David Chen',
      title: 'Lead Technical Recruiter',
      company: 'Global Enterprise & Venture Portfolio',
      avatarGradient: 'linear-gradient(135deg, #f59e0b 0%, #ef4444 100%)',
      style: 'Fast-Paced Recruiter',
      tag: 'Speed & Behavioral STAR',
      rigor: 84,
      probingDepth: 82,
      interruptionRate: 'High (Cadence & Brevity Check)',
      tone: 'Rapid, Decisive, Result-Oriented',
      quote: "Give me a 60-second STAR walkthrough: Describe a project where cross-functional friction threatened your deadline and how you quantified your resolution."
    },
    {
      id: 3,
      name: 'Sophia Sterling',
      title: 'VP of Engineering',
      company: 'Next-Gen Enterprise SaaS',
      avatarGradient: 'linear-gradient(135deg, #10b981 0%, #06b6d4 100%)',
      style: 'Executive Director',
      tag: 'Strategic ROI & Culture',
      rigor: 90,
      probingDepth: 88,
      interruptionRate: 'Balanced (Macro-Impact Focus)',
      tone: 'Strategic, Visionary, Metric-Driven',
      quote: "How does this technical re-architecture directly translate to business retention, customer ARR, and multi-quarter engineering velocity?"
    }
  ];

  // Studio scenario questions by tab
  const studioScenarios = {
    system: {
      round: 'System Architecture & Scalability',
      probe: 'Question 3 of 5 • Distributed State Synchronization',
      question: 'How did you isolate the race condition when managing high-throughput state updates across distributed worker nodes under heavy read-write contention?',
      sampleAnswer: 'We introduced monotonic sequence versioning backed by Redis distributed leases with sliding TTLs, decaying retries to prevent split-brain anomalies.',
      badge: 'Architecture Level: Staff • L6'
    },
    behavioral: {
      round: 'Leadership & STAR Methodology',
      probe: 'Question 2 of 4 • Conflict Resolution & Ownership',
      question: 'Tell me about a time an executive disagreed with your architectural proposal. How did you align the team without compromising system stability?',
      sampleAnswer: 'I instrumented telemetry benchmarks showing the latency regression of their proposed design, presenting objective SLA data during our architecture committee review.',
      badge: 'Executive Presence: High'
    },
    coding: {
      round: 'Algorithm & Sandboxed Implementation',
      probe: 'Question 1 of 3 • Dynamic Programming & Cache Bounds',
      question: 'Analyze the memory overhead of your LRU cache when cache misses spike by 400%. Can you optimize space complexity to sub-linear time?',
      sampleAnswer: 'By pairing a doubly-linked list with an eviction ring buffer, we bounded node allocations and capped garbage collection pause cycles to sub-2ms.',
      badge: 'Time Complexity: O(1) • Space: O(K)'
    },
    rapid: {
      round: 'Rapid-Fire Pressure Round',
      probe: 'Lightning Round • 45s Time Limit',
      question: 'Contrast CAP theorem trade-offs between CP and AP databases in a banking ledger vs an analytics event stream.',
      sampleAnswer: 'Ledgers mandate strict CP with Raft/Paxos consensus for financial invariants, whereas telemetry pipelines thrive on AP with eventual consistency.',
      badge: 'Pacing Check: 148 WPM'
    }
  };

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setUploadedFileName(file.name);
      setIsUploading(true);
      setTimeout(() => {
        setIsUploading(false);
      }, 1200);
    }
  };

  const handleStartPractice = (role?: string) => {
    if (role) setSelectedRole(role);
    setIsSimulatorOpen(true);
  };

  const toggleFocusArea = (area: string) => {
    if (selectedFocus.includes(area)) {
      setSelectedFocus(selectedFocus.filter((item) => item !== area));
    } else {
      setSelectedFocus([...selectedFocus, area]);
    }
  };

  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', background: '#07090e', color: '#f8fafc' }}>
      {/* Navbar */}
      <Navbar
        onStartPractice={() => handleStartPractice()}
        onNavigateToAi={onNavigateToAi}
        currentPage="how-it-works"
        onNavigate={(page) => {
          if (page === 'home') onNavigateToHome();
          if (page === 'features') onNavigateToFeatures();
          if (page === 'simulations' && onNavigateToSimulations) onNavigateToSimulations();
          if (page === 'pricing' && onNavigateToPricing) onNavigateToPricing();
          if (page === 'faq' && onNavigateToFaq) onNavigateToFaq();
        }}
      />

      <main style={{ flex: 1 }}>
        {/* ========================================================
            HERO SECTION: From Your CV to Interview-Ready — Step by Step
        ======================================================== */}
        <section style={{ padding: '64px 0 60px', position: 'relative', overflow: 'hidden' }}>
          <div className="bg-ambient-glow" style={{ top: '-10%', left: '20%', width: '550px', height: '550px', background: 'radial-gradient(circle, rgba(124, 58, 237, 0.35) 0%, transparent 70%)' }} />
          <div className="bg-ambient-glow" style={{ top: '25%', right: '15%', width: '500px', height: '500px', background: 'radial-gradient(circle, rgba(6, 182, 212, 0.25) 0%, transparent 70%)' }} />

          <div className="container" style={{ textAlign: 'center', position: 'relative', zIndex: 2 }}>
            <div style={{ marginBottom: '18px' }}>
              <span className="badge-pill badge-purple" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '6px 16px', borderRadius: '30px', background: 'rgba(124, 58, 237, 0.15)', border: '1px solid rgba(168, 85, 247, 0.3)' }}>
                <Sparkles size={14} color="#c084fc" />
                HOW IT WORKS — END-TO-END PIPELINE
              </span>
            </div>

            <h1 style={{
              fontSize: 'clamp(38px, 5.2vw, 62px)',
              fontWeight: 800,
              letterSpacing: '-0.03em',
              lineHeight: 1.15,
              marginBottom: '20px',
              maxWidth: '920px',
              margin: '0 auto 20px'
            }}>
              From Your CV to Interview-Ready —{' '}
              <span className="gradient-highlight-text" style={{ textShadow: '0 0 40px rgba(168, 85, 247, 0.4)' }}>
                Step by Step
              </span>
            </h1>

            <p style={{
              fontSize: '18px',
              color: '#94a3b8',
              lineHeight: 1.7,
              maxWidth: '740px',
              margin: '0 auto 36px'
            }}>
              Upload your resume or enter your target role. Our AI analyzes your experience, generates tailored questions,
              simulates realistic multi-modal interviews, and gives you actionable diagnostic feedback.
            </p>

            <div style={{
              display: 'flex',
              flexWrap: 'wrap',
              justifyContent: 'center',
              gap: '16px',
              marginBottom: '48px'
            }}>
              <button
                onClick={() => handleStartPractice()}
                className="btn-primary"
                style={{ fontSize: '16px', padding: '15px 34px' }}
              >
                <span>Start Free Practice</span>
                <ArrowRight size={18} />
              </button>

              <button
                onClick={() => setIsDemoOpen(true)}
                className="btn-secondary"
                style={{ fontSize: '15px', padding: '15px 28px', display: 'flex', alignItems: 'center', gap: '8px' }}
              >
                <Play size={16} color="#06b6d4" />
                <span>Explore Workflow</span>
              </button>
            </div>

            {/* Quick-Jump Step Ribbon Cards */}
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))',
              gap: '12px',
              maxWidth: '1060px',
              margin: '0 auto',
              background: 'rgba(14, 18, 27, 0.85)',
              padding: '16px',
              borderRadius: '20px',
              border: '1px solid rgba(255, 255, 255, 0.09)',
              backdropFilter: 'blur(16px)',
              boxShadow: '0 20px 40px -10px rgba(0,0,0,0.6)'
            }}>
              {[
                { label: 'Resume Parsing', step: 'Step 01', icon: FileText, color: '#818cf8', href: '#step-pathways' },
                { label: 'Role Calibration', step: 'Step 02', icon: Sliders, color: '#06b6d4', href: '#step-pathways' },
                { label: 'Adaptive Personas', step: 'Step 03', icon: UserCheck, color: '#a855f7', href: '#step-personas' },
                { label: 'Multi-Modal Vision', step: 'Step 04', icon: Eye, color: '#10b981', href: '#step-vision' },
                { label: 'Live Simulation', step: 'Step 05', icon: Video, color: '#f59e0b', href: '#step-studio' },
                { label: 'Diagnostic Scorecard', step: 'Step 06', icon: Award, color: '#ec4899', href: '#step-scorecard' }
              ].map((item, idx) => {
                const IconComponent = item.icon;
                return (
                  <a
                    key={idx}
                    href={item.href}
                    style={{
                      textDecoration: 'none',
                      textAlign: 'center',
                      padding: '12px 10px',
                      borderRadius: '12px',
                      background: 'rgba(255, 255, 255, 0.03)',
                      border: '1px solid rgba(255, 255, 255, 0.05)',
                      transition: 'all 0.2s ease',
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'center',
                      gap: '6px'
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.borderColor = item.color;
                      e.currentTarget.style.transform = 'translateY(-2px)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.05)';
                      e.currentTarget.style.transform = 'translateY(0)';
                    }}
                  >
                    <div style={{
                      width: '32px',
                      height: '32px',
                      borderRadius: '8px',
                      background: `${item.color}18`,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center'
                    }}>
                      <IconComponent size={16} color={item.color} />
                    </div>
                    <div style={{ fontSize: '10px', fontWeight: 800, color: '#64748b', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                      {item.step}
                    </div>
                    <div style={{ fontSize: '12px', fontWeight: 700, color: '#f8fafc', whiteSpace: 'nowrap' }}>
                      {item.label}
                    </div>
                  </a>
                );
              })}
            </div>
          </div>
        </section>

        {/* ========================================================
            SECTION 1: 8-Step Complete Preparation Journey
        ======================================================== */}
        <section id="step-journey" style={{ padding: '70px 0', position: 'relative' }}>
          <div className="container">
            <div style={{ textAlign: 'center', maxWidth: '780px', margin: '0 auto 48px' }}>
              <span className="badge-pill badge-cyan" style={{ marginBottom: '12px' }}>
                COMPLETE PREPARATION JOURNEY
              </span>
              <h2 style={{ fontSize: 'clamp(28px, 4vw, 42px)', fontWeight: 800, letterSpacing: '-0.02em', marginBottom: '14px' }}>
                Your Complete Interview Preparation Journey
              </h2>
              <p style={{ fontSize: '16px', color: '#94a3b8' }}>
                Every step is engineered to build technical precision, STAR structure, and executive presence under pressure.
              </p>
            </div>

            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
              gap: '20px'
            }}>
              {journeySteps.map((step, idx) => (
                <div
                  key={idx}
                  className="glass-card"
                  style={{
                    padding: '26px',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                    background: 'linear-gradient(180deg, #111728 0%, #0c101c 100%)',
                    borderRadius: '18px',
                    border: '1px solid rgba(255, 255, 255, 0.07)',
                    transition: 'all 0.25s ease'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = 'rgba(124, 58, 237, 0.4)';
                    e.currentTarget.style.transform = 'translateY(-3px)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.07)';
                    e.currentTarget.style.transform = 'translateY(0)';
                  }}
                >
                  <div>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '12px' }}>
                      <span style={{ fontSize: '28px', fontWeight: 800, color: '#3b4b68', fontFamily: 'JetBrains Mono, monospace' }}>
                        {step.num}
                      </span>
                      <span style={{
                        fontSize: '11px',
                        fontWeight: 700,
                        color: '#818cf8',
                        background: 'rgba(99, 102, 241, 0.12)',
                        padding: '3px 9px',
                        borderRadius: '6px'
                      }}>
                        {step.tag}
                      </span>
                    </div>
                    <h3 style={{ fontSize: '17px', fontWeight: 800, color: '#f8fafc', marginBottom: '8px', lineHeight: 1.3 }}>
                      {step.title}
                    </h3>
                    <p style={{ fontSize: '13px', color: '#94a3b8', lineHeight: 1.6 }}>
                      {step.desc}
                    </p>
                  </div>
                  <div style={{ paddingTop: '16px', borderTop: '1px solid rgba(255, 255, 255, 0.06)', marginTop: '16px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                    <span style={{ fontSize: '11px', color: '#67e8f9', fontWeight: 700 }}>
                      Step {step.num} Active
                    </span>
                    <CheckCircle2 size={14} color="#10b981" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ========================================================
            STEP 1: Ingestion & Calibration — Two Flexible Pathways
        ======================================================== */}
        <section id="step-pathways" style={{ padding: '75px 0', background: 'linear-gradient(180deg, #07090e 0%, #0e1322 100%)' }}>
          <div className="container">
            <div style={{ textAlign: 'center', maxWidth: '780px', margin: '0 auto 48px' }}>
              <span className="badge-pill badge-purple" style={{ marginBottom: '12px' }}>
                STEP 1: ONBOARDING PATHWAYS
              </span>
              <h2 style={{ fontSize: 'clamp(28px, 4vw, 42px)', fontWeight: 800, letterSpacing: '-0.02em', marginBottom: '14px' }}>
                Build Your Profile — Two Flexible Pathways
              </h2>
              <p style={{ fontSize: '16px', color: '#94a3b8' }}>
                Start by uploading your resume or select your target job track directly to calibrate interview questions.
              </p>
            </div>

            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
              gap: '28px'
            }}>
              {/* Pathway 1: Upload CV / Resume */}
              <div
                onClick={() => setActivePathway('upload')}
                className="glass-card"
                style={{
                  padding: '32px',
                  borderRadius: '24px',
                  border: activePathway === 'upload' ? '1px solid #818cf8' : '1px solid rgba(255, 255, 255, 0.08)',
                  background: activePathway === 'upload' ? '#141a2c' : '#0e121c',
                  boxShadow: activePathway === 'upload' ? '0 0 35px rgba(124, 58, 237, 0.25)' : 'none',
                  cursor: 'pointer',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between'
                }}
              >
                <div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '16px' }}>
                    <div style={{ width: '42px', height: '42px', borderRadius: '12px', background: 'rgba(99, 102, 241, 0.18)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                      <Upload size={20} color="#818cf8" />
                    </div>
                    <div>
                      <h3 style={{ fontSize: '18px', fontWeight: 800, color: '#f8fafc' }}>
                        Pathway A: Upload Your CV
                      </h3>
                      <span style={{ fontSize: '12px', color: '#94a3b8' }}>
                        AI extracts skills, stack, and project complexity automatically
                      </span>
                    </div>
                  </div>

                  {/* Dropzone Area */}
                  <label style={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    padding: '32px 20px',
                    border: '2px dashed rgba(99, 102, 241, 0.45)',
                    borderRadius: '16px',
                    background: 'rgba(0, 0, 0, 0.35)',
                    cursor: 'pointer',
                    marginBottom: '18px',
                    transition: 'all 0.2s ease'
                  }}>
                    <input type="file" accept=".pdf,.doc,.docx" onChange={handleFileUpload} style={{ display: 'none' }} />
                    <FileText size={38} color="#818cf8" style={{ marginBottom: '10px' }} />
                    <span style={{ fontSize: '14px', fontWeight: 700, color: '#f8fafc' }}>
                      {uploadedFileName ? uploadedFileName : 'Click to Upload Resume (PDF, DOCX)'}
                    </span>
                    <span style={{ fontSize: '11px', color: '#64748b', marginTop: '4px' }}>
                      Up to 10MB • 100% Confidential & Secure • Zero Retention
                    </span>
                  </label>

                  {isUploading && (
                    <div style={{ textAlign: 'center', color: '#67e8f9', fontSize: '12px', fontWeight: 600, marginBottom: '16px' }}>
                      ⚡ Parsing skills, architecture experiences & STAR milestones...
                    </div>
                  )}

                  {/* Parsed Competency Badges */}
                  <div style={{ marginBottom: '16px' }}>
                    <div style={{ fontSize: '11px', fontWeight: 700, color: '#94a3b8', marginBottom: '8px', textTransform: 'uppercase' }}>
                      Extracted Competencies (18 Calibrated):
                    </div>
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
                      {[
                        'React 18',
                        'Next.js App Router',
                        'TypeScript',
                        'Distributed Caching',
                        'Redis Locks',
                        'PostgreSQL',
                        'System Sharding',
                        'GraphQL APIs',
                        'CI/CD Workflows'
                      ].map((tag, i) => (
                        <span key={i} style={{
                          background: 'rgba(99, 102, 241, 0.14)',
                          color: '#c7d2fe',
                          fontSize: '11px',
                          fontWeight: 600,
                          padding: '3px 8px',
                          borderRadius: '6px',
                          border: '1px solid rgba(99, 102, 241, 0.25)'
                        }}>
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <div style={{
                  padding: '12px 14px',
                  borderRadius: '10px',
                  background: 'rgba(16, 185, 129, 0.1)',
                  border: '1px solid rgba(16, 185, 129, 0.3)',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px'
                }}>
                  <CheckCircle2 size={16} color="#10b981" />
                  <span style={{ fontSize: '12px', color: '#10b981', fontWeight: 700 }}>
                    Profile Calibrated: Ready for Staff & Senior Technical Probing
                  </span>
                </div>
              </div>

              {/* Pathway 2: Select Role Directly */}
              <div
                onClick={() => setActivePathway('role')}
                className="glass-card"
                style={{
                  padding: '32px',
                  borderRadius: '24px',
                  border: activePathway === 'role' ? '1px solid #06b6d4' : '1px solid rgba(255, 255, 255, 0.08)',
                  background: activePathway === 'role' ? '#111b28' : '#0e121c',
                  boxShadow: activePathway === 'role' ? '0 0 35px rgba(6, 182, 212, 0.25)' : 'none',
                  cursor: 'pointer',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between'
                }}
              >
                <div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '16px' }}>
                    <div style={{ width: '42px', height: '42px', borderRadius: '12px', background: 'rgba(6, 182, 212, 0.18)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                      <Briefcase size={20} color="#06b6d4" />
                    </div>
                    <div>
                      <h3 style={{ fontSize: '18px', fontWeight: 800, color: '#f8fafc' }}>
                        Pathway B: Select Role Directly
                      </h3>
                      <span style={{ fontSize: '12px', color: '#94a3b8' }}>
                        Pick from 500+ pre-calibrated role tracks & seniority levels
                      </span>
                    </div>
                  </div>

                  <div style={{ display: 'flex', flexDirection: 'column', gap: '14px', marginBottom: '20px' }}>
                    {/* Target Track */}
                    <div>
                      <label style={{ fontSize: '12px', color: '#cbd5e1', fontWeight: 600, display: 'block', marginBottom: '6px' }}>
                        Target Engineering Track:
                      </label>
                      <select
                        value={selectedRole}
                        onChange={(e) => setSelectedRole(e.target.value)}
                        style={{
                          width: '100%',
                          background: '#090d16',
                          border: '1px solid rgba(255, 255, 255, 0.15)',
                          color: '#f8fafc',
                          padding: '10px 12px',
                          borderRadius: '8px',
                          fontSize: '13px',
                          outline: 'none'
                        }}
                      >
                        <option value="Senior Frontend Engineer">Senior Frontend Engineer (React / TypeScript / Web Vitals)</option>
                        <option value="AI & Machine Learning Engineer">AI & ML Engineer (LLMs / PyTorch / Vector DBs)</option>
                        <option value="Staff Distributed Systems Architect">Staff Distributed Systems Architect (Microservices / Kafka)</option>
                        <option value="Product Manager — Growth & Strategy">Product Manager — Growth & Platform Strategy</option>
                      </select>
                    </div>

                    {/* Seniority Buttons */}
                    <div>
                      <label style={{ fontSize: '12px', color: '#cbd5e1', fontWeight: 600, display: 'block', marginBottom: '6px' }}>
                        Target Seniority Level:
                      </label>
                      <div style={{ display: 'flex', gap: '8px' }}>
                        {['Junior • L3', 'Mid • L4', 'Senior • L5', 'Staff/Lead • L6+'].map((lvl) => (
                          <button
                            key={lvl}
                            type="button"
                            onClick={(e) => {
                              e.stopPropagation();
                              setSelectedLevel(lvl);
                            }}
                            style={{
                              flex: 1,
                              background: selectedLevel.includes(lvl.substring(0, 4)) ? 'rgba(6, 182, 212, 0.25)' : 'rgba(255, 255, 255, 0.04)',
                              border: selectedLevel.includes(lvl.substring(0, 4)) ? '1px solid #06b6d4' : '1px solid rgba(255, 255, 255, 0.08)',
                              color: selectedLevel.includes(lvl.substring(0, 4)) ? '#67e8f9' : '#fff',
                              padding: '8px 4px',
                              borderRadius: '6px',
                              fontSize: '11px',
                              fontWeight: 700,
                              cursor: 'pointer'
                            }}
                          >
                            {lvl}
                          </button>
                        ))}
                      </div>
                    </div>

                    {/* Target Company Preset */}
                    <div>
                      <label style={{ fontSize: '12px', color: '#cbd5e1', fontWeight: 600, display: 'block', marginBottom: '6px' }}>
                        Company Culture Archetype:
                      </label>
                      <select
                        value={selectedCompany}
                        onChange={(e) => setSelectedCompany(e.target.value)}
                        style={{
                          width: '100%',
                          background: '#090d16',
                          border: '1px solid rgba(255, 255, 255, 0.15)',
                          color: '#f8fafc',
                          padding: '10px 12px',
                          borderRadius: '8px',
                          fontSize: '13px',
                          outline: 'none'
                        }}
                      >
                        <option value="Google / Tier-1 FAANG">Google / Tier-1 Tech (System Design + Algorithmic Rigor)</option>
                        <option value="Meta / Fast-Iterating Product">Meta (Speed, Production Craft & Trade-offs)</option>
                        <option value="Amazon / Leadership Principles">Amazon (Customer Obsession & STAR Principles)</option>
                        <option value="Stripe / API & Reliability">Stripe (Precision, API Design, Distributed Robustness)</option>
                        <option value="High-Growth Series B/C Startup">High-Growth Startup (Ownership, Full-Stack Autonomy)</option>
                      </select>
                    </div>

                    {/* Question Focus Chips */}
                    <div>
                      <label style={{ fontSize: '12px', color: '#cbd5e1', fontWeight: 600, display: 'block', marginBottom: '6px' }}>
                        Round Emphasis Areas:
                      </label>
                      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
                        {['System Architecture', 'STAR Leadership', 'Distributed Caching', 'Live Coding Sandbox', 'Micro-Frontend Modularization'].map((focus) => (
                          <button
                            key={focus}
                            type="button"
                            onClick={(e) => {
                              e.stopPropagation();
                              toggleFocusArea(focus);
                            }}
                            style={{
                              background: selectedFocus.includes(focus) ? 'rgba(6, 182, 212, 0.2)' : 'rgba(255, 255, 255, 0.04)',
                              border: selectedFocus.includes(focus) ? '1px solid #06b6d4' : '1px solid rgba(255, 255, 255, 0.08)',
                              color: selectedFocus.includes(focus) ? '#67e8f9' : '#94a3b8',
                              padding: '4px 9px',
                              borderRadius: '6px',
                              fontSize: '11px',
                              fontWeight: 600,
                              cursor: 'pointer'
                            }}
                          >
                            {selectedFocus.includes(focus) ? '✓ ' : '+ '}{focus}
                          </button>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                <button
                  onClick={() => handleStartPractice(selectedRole)}
                  className="btn-primary"
                  style={{ width: '100%', justifyContent: 'center', padding: '12px', borderRadius: '10px' }}
                >
                  <span>Calibrate Questions</span>
                  <ArrowRight size={15} />
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* ========================================================
            STEP 2: Adaptive Interviewer Persona Engine
        ======================================================== */}
        <section id="step-personas" style={{ padding: '75px 0', position: 'relative' }}>
          <div className="container">
            <div style={{ textAlign: 'center', maxWidth: '780px', margin: '0 auto 48px' }}>
              <span className="badge-pill badge-purple" style={{ marginBottom: '12px' }}>
                STEP 2: PERSONA CALIBRATION
              </span>
              <h2 style={{ fontSize: 'clamp(28px, 4vw, 42px)', fontWeight: 800, letterSpacing: '-0.02em', marginBottom: '14px' }}>
                Adaptive Interviewer Persona Engine
              </h2>
              <p style={{ fontSize: '16px', color: '#94a3b8' }}>
                Choose the interviewer temperament that challenges you most — from empathetic mentors to rigorous hiring bar raisers.
              </p>
            </div>

            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
              gap: '28px',
              alignItems: 'stretch'
            }}>
              {/* Persona Selector List */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
                {personas.map((persona) => {
                  const isSelected = selectedPersonaIdx === persona.id;
                  return (
                    <div
                      key={persona.id}
                      onClick={() => setSelectedPersonaIdx(persona.id)}
                      className="glass-card"
                      style={{
                        padding: '20px',
                        borderRadius: '16px',
                        cursor: 'pointer',
                        background: isSelected ? '#151b2e' : '#0e121c',
                        border: isSelected ? '1px solid #8b5cf6' : '1px solid rgba(255, 255, 255, 0.08)',
                        boxShadow: isSelected ? '0 0 25px rgba(139, 92, 246, 0.25)' : 'none',
                        transition: 'all 0.2s ease',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        gap: '14px'
                      }}
                    >
                      <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
                        <div style={{
                          width: '46px',
                          height: '46px',
                          borderRadius: '12px',
                          background: persona.avatarGradient,
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          flexShrink: 0
                        }}>
                          <UserCheck size={24} color="#fff" />
                        </div>
                        <div>
                          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '2px' }}>
                            <h4 style={{ fontSize: '15px', fontWeight: 800, color: '#f8fafc' }}>
                              {persona.style}
                            </h4>
                            <span style={{
                              fontSize: '10px',
                              fontWeight: 700,
                              color: isSelected ? '#c084fc' : '#94a3b8',
                              background: 'rgba(255, 255, 255, 0.05)',
                              padding: '2px 6px',
                              borderRadius: '4px'
                            }}>
                              {persona.tag}
                            </span>
                          </div>
                          <p style={{ fontSize: '12px', color: '#94a3b8' }}>
                            {persona.name} • {persona.title}
                          </p>
                        </div>
                      </div>

                      <div style={{
                        width: '24px',
                        height: '24px',
                        borderRadius: '50%',
                        border: isSelected ? '2px solid #8b5cf6' : '2px solid rgba(255, 255, 255, 0.2)',
                        background: isSelected ? '#8b5cf6' : 'transparent',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        flexShrink: 0
                      }}>
                        {isSelected && <Check size={14} color="#fff" />}
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Persona Detail / Voice Preview HUD */}
              {(() => {
                const cur = personas[selectedPersonaIdx];
                return (
                  <div
                    className="glass-card"
                    style={{
                      padding: '32px',
                      borderRadius: '24px',
                      background: 'linear-gradient(135deg, #121829 0%, #0c101c 100%)',
                      border: '1px solid rgba(139, 92, 246, 0.35)',
                      boxShadow: '0 25px 60px -15px rgba(0, 0, 0, 0.8)',
                      display: 'flex',
                      flexDirection: 'column',
                      justifyContent: 'space-between'
                    }}
                  >
                    <div>
                      {/* Avatar Header */}
                      <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '20px' }}>
                        <div style={{
                          width: '64px',
                          height: '64px',
                          borderRadius: '18px',
                          background: cur.avatarGradient,
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          boxShadow: '0 0 25px rgba(139, 92, 246, 0.4)'
                        }}>
                          <UserCheck size={32} color="#fff" />
                        </div>
                        <div>
                          <span style={{ fontSize: '11px', fontWeight: 800, color: '#c084fc', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                            CALIBRATED INTERVIEWER
                          </span>
                          <h3 style={{ fontSize: '20px', fontWeight: 800, color: '#f8fafc' }}>
                            {cur.name}
                          </h3>
                          <p style={{ fontSize: '13px', color: '#67e8f9' }}>
                            {cur.title} — {cur.company}
                          </p>
                        </div>
                      </div>

                      {/* Rigor Sliders */}
                      <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', marginBottom: '24px' }}>
                        <div>
                          <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '12px', marginBottom: '4px' }}>
                            <span style={{ color: '#cbd5e1', fontWeight: 600 }}>Critical Rigor Rating:</span>
                            <span style={{ color: '#8b5cf6', fontWeight: 700 }}>{cur.rigor}%</span>
                          </div>
                          <div style={{ width: '100%', height: '6px', background: 'rgba(255,255,255,0.08)', borderRadius: '3px' }}>
                            <div style={{ width: `${cur.rigor}%`, height: '100%', background: 'linear-gradient(90deg, #8b5cf6, #ec4899)', borderRadius: '3px' }} />
                          </div>
                        </div>

                        <div>
                          <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '12px', marginBottom: '4px' }}>
                            <span style={{ color: '#06b6d4', fontWeight: 600 }}>Follow-up Probing Depth:</span>
                            <span style={{ color: '#06b6d4', fontWeight: 700 }}>{cur.probingDepth}%</span>
                          </div>
                          <div style={{ width: '100%', height: '6px', background: 'rgba(255,255,255,0.08)', borderRadius: '3px' }}>
                            <div style={{ width: `${cur.probingDepth}%`, height: '100%', background: 'linear-gradient(90deg, #06b6d4, #10b981)', borderRadius: '3px' }} />
                          </div>
                        </div>

                        <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '12px', padding: '6px 0', borderTop: '1px solid rgba(255,255,255,0.06)' }}>
                          <span style={{ color: '#94a3b8' }}>Interruption Cadence:</span>
                          <span style={{ color: '#f8fafc', fontWeight: 600 }}>{cur.interruptionRate}</span>
                        </div>

                        <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '12px', padding: '6px 0', borderTop: '1px solid rgba(255,255,255,0.06)' }}>
                          <span style={{ color: '#94a3b8' }}>Tone Characteristic:</span>
                          <span style={{ color: '#cbd5e1', fontWeight: 600 }}>{cur.tone}</span>
                        </div>
                      </div>

                      {/* Sample Opening Prompt with Audio Player Simulation */}
                      <div style={{
                        background: 'rgba(0, 0, 0, 0.45)',
                        border: '1px solid rgba(255, 255, 255, 0.08)',
                        borderRadius: '14px',
                        padding: '16px',
                        marginBottom: '20px'
                      }}>
                        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '10px' }}>
                          <span style={{ fontSize: '11px', fontWeight: 800, color: '#818cf8', textTransform: 'uppercase' }}>
                            SAMPLE PROBING VOICE PROMPT:
                          </span>
                          <button
                            type="button"
                            onClick={() => setIsPlayingPersonaAudio(!isPlayingPersonaAudio)}
                            style={{
                              background: isPlayingPersonaAudio ? '#8b5cf6' : 'rgba(255,255,255,0.08)',
                              border: 'none',
                              color: '#fff',
                              padding: '4px 10px',
                              borderRadius: '20px',
                              fontSize: '11px',
                              fontWeight: 700,
                              display: 'flex',
                              alignItems: 'center',
                              gap: '6px',
                              cursor: 'pointer'
                            }}
                          >
                            {isPlayingPersonaAudio ? <Pause size={12} /> : <Play size={12} />}
                            <span>{isPlayingPersonaAudio ? 'Pause Audio' : 'Preview Voice'}</span>
                          </button>
                        </div>

                        <p style={{ fontSize: '13px', color: '#e2e8f0', lineHeight: 1.6, fontStyle: 'italic' }}>
                          "{cur.quote}"
                        </p>

                        {/* Animated Sound Wave Bar */}
                        <div style={{ display: 'flex', alignItems: 'center', gap: '3px', marginTop: '12px', height: '22px' }}>
                          {[16, 24, 12, 32, 18, 28, 14, 22, 36, 12, 28, 20, 30, 15, 26, 18, 34, 14].map((h, idx) => (
                            <div
                              key={idx}
                              style={{
                                flex: 1,
                                height: isPlayingPersonaAudio ? `${h}px` : '6px',
                                background: isPlayingPersonaAudio ? '#a855f7' : '#334155',
                                borderRadius: '3px',
                                transition: 'all 0.2s ease'
                              }}
                            />
                          ))}
                        </div>
                      </div>
                    </div>

                    <button
                      onClick={() => handleStartPractice(selectedRole)}
                      className="btn-primary"
                      style={{ width: '100%', justifyContent: 'center' }}
                    >
                      <span>Simulate Interview with {cur.name.split(' ')[0]}</span>
                      <ArrowRight size={16} />
                    </button>
                  </div>
                );
              })()}
            </div>
          </div>
        </section>

        {/* ========================================================
            STEP 3: Multi-Modal Vision & Acoustic Analysis (Dual HUDs)
        ======================================================== */}
        <section id="step-vision" style={{ padding: '75px 0', background: 'linear-gradient(180deg, #07090e 0%, #0c121e 100%)' }}>
          <div className="container">
            <div style={{ textAlign: 'center', maxWidth: '780px', margin: '0 auto 48px' }}>
              <span className="badge-pill badge-emerald" style={{ marginBottom: '12px' }}>
                STEP 3: MULTI-MODAL TELEMETRY
              </span>
              <h2 style={{ fontSize: 'clamp(28px, 4vw, 42px)', fontWeight: 800, letterSpacing: '-0.02em', marginBottom: '14px' }}>
                Computer Vision & Acoustic Intelligence in Action
              </h2>
              <p style={{ fontSize: '16px', color: '#94a3b8' }}>
                Our bi-directional perceptual models evaluate non-verbal cues in real time without storing private video or audio recordings.
              </p>
            </div>

            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
              gap: '28px'
            }}>
              {/* HUD 1: Computer Vision Telemetry */}
              <div
                className="glass-card"
                style={{
                  padding: '30px',
                  borderRadius: '24px',
                  background: '#0c111d',
                  border: '1px solid rgba(6, 182, 212, 0.35)',
                  boxShadow: '0 20px 50px -15px rgba(6, 182, 212, 0.15)'
                }}
              >
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                    <div style={{ width: '38px', height: '38px', borderRadius: '10px', background: 'rgba(6, 182, 212, 0.15)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                      <Eye size={20} color="#06b6d4" />
                    </div>
                    <div>
                      <h3 style={{ fontSize: '17px', fontWeight: 800, color: '#f8fafc' }}>
                        Computer Vision Telemetry
                      </h3>
                      <span style={{ fontSize: '11px', color: '#10b981', fontWeight: 700 }}>
                        ● REAL-TIME GAZE & POSTURE TRACKER
                      </span>
                    </div>
                  </div>
                  <span style={{ fontSize: '11px', background: 'rgba(6, 182, 212, 0.15)', color: '#67e8f9', padding: '4px 8px', borderRadius: '6px', fontWeight: 700 }}>
                    1080p Studio
                  </span>
                </div>

                {/* Video Reticle Mockup */}
                <div style={{
                  height: '190px',
                  borderRadius: '16px',
                  background: 'radial-gradient(circle at center, #131d2e 0%, #090e18 100%)',
                  border: '1px solid rgba(6, 182, 212, 0.3)',
                  position: 'relative',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginBottom: '20px',
                  overflow: 'hidden'
                }}>
                  {/* Targeting Reticle */}
                  <div style={{
                    width: '100px',
                    height: '100px',
                    borderRadius: '50%',
                    border: '2px dashed rgba(6, 182, 212, 0.5)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    position: 'relative'
                  }}>
                    <div style={{ width: '6px', height: '6px', background: '#06b6d4', borderRadius: '50%', boxShadow: '0 0 10px #06b6d4' }} />
                    <span style={{ position: 'absolute', top: '-14px', fontSize: '10px', color: '#67e8f9', fontWeight: 700 }}>
                      GAZE LOCK
                    </span>
                  </div>

                  {/* Corner brackets */}
                  <div style={{ position: 'absolute', top: '10px', left: '10px', fontSize: '10px', color: '#06b6d4', fontFamily: 'monospace' }}>
                    [MESH_OK • 60 FPS]
                  </div>
                  <div style={{ position: 'absolute', top: '10px', right: '10px', fontSize: '10px', color: '#10b981', fontFamily: 'monospace' }}>
                    EYE_CONTACT: 94%
                  </div>
                  <div style={{ position: 'absolute', bottom: '10px', left: '10px', fontSize: '10px', color: '#cbd5e1' }}>
                    Pitch: +0.4° • Yaw: -1.2°
                  </div>
                  <div style={{ position: 'absolute', bottom: '10px', right: '10px', fontSize: '10px', color: '#10b981', fontWeight: 700 }}>
                    Posture: Centered
                  </div>
                </div>

                {/* Metrics Breakdown */}
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px' }}>
                  <div style={{ background: 'rgba(0,0,0,0.3)', padding: '12px', borderRadius: '10px' }}>
                    <div style={{ fontSize: '11px', color: '#94a3b8' }}>Eye Contact Ratio</div>
                    <div style={{ fontSize: '18px', fontWeight: 800, color: '#10b981' }}>94% Centered</div>
                    <div style={{ fontSize: '10px', color: '#64748b' }}>Benchmark: &gt;85%</div>
                  </div>
                  <div style={{ background: 'rgba(0,0,0,0.3)', padding: '12px', borderRadius: '10px' }}>
                    <div style={{ fontSize: '11px', color: '#94a3b8' }}>Micro-Expressions</div>
                    <div style={{ fontSize: '18px', fontWeight: 800, color: '#06b6d4' }}>Calm & Focused</div>
                    <div style={{ fontSize: '10px', color: '#64748b' }}>0% Anxiety Spikes</div>
                  </div>
                </div>
              </div>

              {/* HUD 2: Acoustic Speech Intelligence */}
              <div
                className="glass-card"
                style={{
                  padding: '30px',
                  borderRadius: '24px',
                  background: '#0c111d',
                  border: '1px solid rgba(168, 85, 247, 0.35)',
                  boxShadow: '0 20px 50px -15px rgba(168, 85, 247, 0.15)'
                }}
              >
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                    <div style={{ width: '38px', height: '38px', borderRadius: '10px', background: 'rgba(168, 85, 247, 0.15)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                      <Activity size={20} color="#a855f7" />
                    </div>
                    <div>
                      <h3 style={{ fontSize: '17px', fontWeight: 800, color: '#f8fafc' }}>
                        Acoustic Speech Intelligence
                      </h3>
                      <span style={{ fontSize: '11px', color: '#a855f7', fontWeight: 700 }}>
                        ● BI-DIRECTIONAL VOCAL TELEMETRY
                      </span>
                    </div>
                  </div>
                  <span style={{ fontSize: '11px', background: 'rgba(168, 85, 247, 0.15)', color: '#c084fc', padding: '4px 8px', borderRadius: '6px', fontWeight: 700 }}>
                    142 WPM Pace
                  </span>
                </div>

                {/* Waveform Spectrogram Mockup */}
                <div style={{
                  height: '190px',
                  borderRadius: '16px',
                  background: 'radial-gradient(circle at center, #1b1428 0%, #090e18 100%)',
                  border: '1px solid rgba(168, 85, 247, 0.3)',
                  position: 'relative',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  padding: '0 20px',
                  marginBottom: '20px',
                  overflow: 'hidden'
                }}>
                  {/* Frequency Spectrum Bars */}
                  <div style={{ display: 'flex', alignItems: 'center', gap: '4px', width: '100%', height: '80px' }}>
                    {[32, 45, 60, 24, 75, 90, 55, 30, 85, 100, 65, 40, 70, 85, 50, 30, 60, 75, 40, 25, 65, 80, 50].map((h, i) => (
                      <div
                        key={i}
                        style={{
                          flex: 1,
                          height: `${h}%`,
                          background: 'linear-gradient(180deg, #c084fc 0%, #6366f1 100%)',
                          borderRadius: '4px',
                          opacity: 0.85
                        }}
                      />
                    ))}
                  </div>

                  <div style={{ position: 'absolute', top: '10px', left: '10px', fontSize: '10px', color: '#c084fc', fontFamily: 'monospace' }}>
                    [SPECTROGRAM: 48kHz]
                  </div>
                  <div style={{ position: 'absolute', top: '10px', right: '10px', fontSize: '10px', color: '#10b981', fontFamily: 'monospace' }}>
                    FILLERS_DETECTED: 0
                  </div>
                  <div style={{ position: 'absolute', bottom: '10px', left: '10px', fontSize: '10px', color: '#cbd5e1' }}>
                    Modulation: 88% Dynamic
                  </div>
                  <div style={{ position: 'absolute', bottom: '10px', right: '10px', fontSize: '10px', color: '#67e8f9', fontWeight: 700 }}>
                    Pause Latency: 1.2s
                  </div>
                </div>

                {/* Metrics Breakdown */}
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px' }}>
                  <div style={{ background: 'rgba(0,0,0,0.3)', padding: '12px', borderRadius: '10px' }}>
                    <div style={{ fontSize: '11px', color: '#94a3b8' }}>Speaking Cadence</div>
                    <div style={{ fontSize: '18px', fontWeight: 800, color: '#f59e0b' }}>142 WPM</div>
                    <div style={{ fontSize: '10px', color: '#64748b' }}>Ideal: 130–155 WPM</div>
                  </div>
                  <div style={{ background: 'rgba(0,0,0,0.3)', padding: '12px', borderRadius: '10px' }}>
                    <div style={{ fontSize: '11px', color: '#94a3b8' }}>Filler Word Suppression</div>
                    <div style={{ fontSize: '18px', fontWeight: 800, color: '#10b981' }}>0 / min</div>
                    <div style={{ fontSize: '10px', color: '#64748b' }}>Crutches: None Detected</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ========================================================
            STEP 4: Adaptive Practice Modes (3 Intensity Levels)
        ======================================================== */}
        <section id="step-modes" style={{ padding: '75px 0', position: 'relative' }}>
          <div className="container">
            <div style={{ textAlign: 'center', maxWidth: '780px', margin: '0 auto 48px' }}>
              <span className="badge-pill badge-cyan" style={{ marginBottom: '12px' }}>
                STEP 4: ADAPTIVE PRACTICE MODES
              </span>
              <h2 style={{ fontSize: 'clamp(28px, 4vw, 42px)', fontWeight: 800, letterSpacing: '-0.02em', marginBottom: '14px' }}>
                Interview Modes Built Around You
              </h2>
              <p style={{ fontSize: '16px', color: '#94a3b8' }}>
                Choose the practice format that matches your prep phase: targeted architectural rounds, behavioral drills, or full 45-minute FAANG rehearsals.
              </p>
            </div>

            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
              gap: '24px'
            }}>
              {[
                {
                  id: 0,
                  title: '1. Technical & Architecture Round',
                  badge: 'Coding & System Design',
                  desc: 'Deep-dive into distributed systems, algorithmic complexity, API schema design, and trade-off justification under pressure.',
                  tags: ['Big-O Analysis', 'System Sharding', 'Live Sandbox', 'Lease Renewals'],
                  estTime: '25 Mins'
                },
                {
                  id: 1,
                  title: '2. Behavioral & Leadership Round',
                  badge: 'STAR Methodology',
                  desc: 'Assess situational leadership, conflict management, cross-functional persuasion, and business ROI delivery.',
                  tags: ['STAR Scoring', 'Vocal Inflection', 'Power Verbs', 'Ownership'],
                  estTime: '30 Mins'
                },
                {
                  id: 2,
                  title: '3. Full End-to-End Mock Session',
                  badge: '45-Min FAANG Loop Rehearsal',
                  desc: 'A complete 4-stage simulation replicating actual Google, Meta, Amazon, and Stripe candidate assessment pipelines.',
                  tags: ['Multi-Stage', 'Bar Raiser Evaluation', 'Full Diagnostic Report', 'PDF Export'],
                  estTime: '45 Mins'
                }
              ].map((mode) => (
                <div
                  key={mode.id}
                  onClick={() => setActivePracticeMode(mode.id)}
                  className="glass-card"
                  style={{
                    padding: '28px',
                    borderRadius: '20px',
                    borderColor: activePracticeMode === mode.id ? '#818cf8' : 'rgba(255, 255, 255, 0.08)',
                    background: activePracticeMode === mode.id ? '#13192b' : '#0e121c',
                    boxShadow: activePracticeMode === mode.id ? '0 0 30px rgba(99, 102, 241, 0.25)' : 'none',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                    cursor: 'pointer',
                    transition: 'all 0.2s ease'
                  }}
                >
                  <div>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '12px' }}>
                      <span style={{ fontSize: '11px', fontWeight: 700, color: '#818cf8', background: 'rgba(99, 102, 241, 0.12)', padding: '3px 8px', borderRadius: '6px' }}>
                        {mode.badge}
                      </span>
                      <span style={{ fontSize: '11px', color: '#94a3b8', display: 'flex', alignItems: 'center', gap: '4px' }}>
                        <Clock size={12} /> {mode.estTime}
                      </span>
                    </div>

                    <h3 style={{ fontSize: '18px', fontWeight: 800, color: '#f8fafc', marginBottom: '10px' }}>
                      {mode.title}
                    </h3>
                    <p style={{ fontSize: '13px', color: '#94a3b8', lineHeight: 1.6, marginBottom: '20px' }}>
                      {mode.desc}
                    </p>
                  </div>

                  <div>
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px', marginBottom: '20px' }}>
                      {mode.tags.map((t, idx) => (
                        <span key={idx} style={{ background: 'rgba(255, 255, 255, 0.04)', fontSize: '11px', padding: '3px 8px', borderRadius: '4px', color: '#cbd5e1' }}>
                          {t}
                        </span>
                      ))}
                    </div>

                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        handleStartPractice(selectedRole);
                      }}
                      className="btn-primary btn-sm"
                      style={{ width: '100%', justifyContent: 'center' }}
                    >
                      <span>Start This Mode</span>
                      <ArrowRight size={14} />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ========================================================
            STEP 5: Real-Time Simulation Studio Preview
        ======================================================== */}
        <section id="step-studio" style={{ padding: '75px 0', background: 'linear-gradient(180deg, #07090e 0%, #0d121f 100%)' }}>
          <div className="container">
            <div style={{ textAlign: 'center', maxWidth: '780px', margin: '0 auto 36px' }}>
              <span className="badge-pill badge-emerald" style={{ marginBottom: '12px' }}>
                STEP 5: REAL-TIME SIMULATION STUDIO
              </span>
              <h2 style={{ fontSize: 'clamp(28px, 4vw, 42px)', fontWeight: 800, letterSpacing: '-0.02em', marginBottom: '14px' }}>
                Enter a Realistic AI Interview
              </h2>
              <p style={{ fontSize: '16px', color: '#94a3b8' }}>
                Engage in natural, spoken dialogue with contextual follow-up questions tailored to your responses.
              </p>
            </div>

            {/* Interactive Scenario Tabs */}
            <div style={{ display: 'flex', justifyContent: 'center', gap: '10px', marginBottom: '24px', flexWrap: 'wrap' }}>
              {[
                { id: 'system', label: 'Technical System Design' },
                { id: 'behavioral', label: 'Behavioral & STAR Leadership' },
                { id: 'coding', label: 'Live Coding & Algorithms' },
                { id: 'rapid', label: 'Rapid-Fire Follow-ups' }
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setStudioModeTab(tab.id as any)}
                  style={{
                    background: studioModeTab === tab.id ? 'rgba(99, 102, 241, 0.25)' : 'rgba(255, 255, 255, 0.04)',
                    border: studioModeTab === tab.id ? '1px solid #818cf8' : '1px solid rgba(255, 255, 255, 0.08)',
                    color: studioModeTab === tab.id ? '#fff' : '#94a3b8',
                    padding: '8px 16px',
                    borderRadius: '20px',
                    fontSize: '12px',
                    fontWeight: 700,
                    cursor: 'pointer',
                    transition: 'all 0.2s ease'
                  }}
                >
                  {tab.label}
                </button>
              ))}
            </div>

            {/* Virtual Studio Window */}
            {(() => {
              const scenario = studioScenarios[studioModeTab];
              return (
                <div style={{
                  background: '#0d121c',
                  border: '1px solid rgba(99, 102, 241, 0.4)',
                  borderRadius: '26px',
                  padding: '24px',
                  maxWidth: '1000px',
                  margin: '0 auto',
                  boxShadow: '0 30px 80px -20px rgba(0, 0, 0, 0.9)'
                }}>
                  {/* Studio Header Bar */}
                  <div style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    paddingBottom: '16px',
                    marginBottom: '16px',
                    borderBottom: '1px solid rgba(255, 255, 255, 0.08)'
                  }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                      <span style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#ef4444', display: 'inline-block' }} />
                      <span style={{ fontSize: '12px', fontWeight: 800, color: '#f8fafc', letterSpacing: '0.04em' }}>
                        LIVE SIMULATION • 14:32 ELAPSED
                      </span>
                      <span style={{ fontSize: '11px', color: '#67e8f9', background: 'rgba(6, 182, 212, 0.15)', padding: '2px 8px', borderRadius: '4px' }}>
                        {scenario.badge}
                      </span>
                    </div>

                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                      <button
                        type="button"
                        onClick={() => setIsMicMuted(!isMicMuted)}
                        style={{
                          background: isMicMuted ? 'rgba(239, 68, 68, 0.2)' : 'rgba(255, 255, 255, 0.06)',
                          border: '1px solid rgba(255, 255, 255, 0.1)',
                          color: isMicMuted ? '#ef4444' : '#f8fafc',
                          padding: '6px 12px',
                          borderRadius: '8px',
                          fontSize: '11px',
                          fontWeight: 700,
                          display: 'flex',
                          alignItems: 'center',
                          gap: '6px',
                          cursor: 'pointer'
                        }}
                      >
                        {isMicMuted ? <MicOff size={14} /> : <Mic size={14} />}
                        <span>{isMicMuted ? 'Muted' : 'Mic Active'}</span>
                      </button>
                    </div>
                  </div>

                  {/* Studio Video Split */}
                  <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
                    gap: '16px',
                    marginBottom: '18px'
                  }}>
                    {/* Candidate Feed */}
                    <div style={{
                      height: '230px',
                      borderRadius: '16px',
                      background: '#090d16',
                      border: '1px solid rgba(6, 182, 212, 0.35)',
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'center',
                      justifyContent: 'center',
                      position: 'relative',
                      overflow: 'hidden'
                    }}>
                      <div style={{ width: '70px', height: '70px', borderRadius: '50%', background: '#1e293b', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '8px' }}>
                        <Eye size={30} color="#06b6d4" />
                      </div>
                      <div style={{ fontSize: '14px', fontWeight: 800, color: '#f8fafc' }}>Candidate Stream (You)</div>
                      <div style={{ fontSize: '11px', color: '#10b981' }}>Eye Contact: 96% Centered</div>

                      {/* Video HUD Reticle Overlay */}
                      <div style={{ position: 'absolute', top: '10px', left: '10px', background: 'rgba(0,0,0,0.6)', padding: '3px 8px', borderRadius: '4px', fontSize: '10px', color: '#67e8f9' }}>
                        ● FACE TRACKING ACTIVE
                      </div>

                      <div style={{ position: 'absolute', bottom: '10px', left: '10px', right: '10px', background: 'rgba(15, 23, 42, 0.92)', padding: '5px 12px', borderRadius: '8px', fontSize: '11px', display: 'flex', justifyContent: 'space-between', color: '#94a3b8' }}>
                        <span>Pace: <b style={{ color: '#fff' }}>142 WPM</b></span>
                        <span>Fillers: <b style={{ color: '#10b981' }}>0</b></span>
                        <span>Tone: <b style={{ color: '#67e8f9' }}>Composed</b></span>
                      </div>
                    </div>

                    {/* AI Interviewer Feed */}
                    <div style={{
                      height: '230px',
                      borderRadius: '16px',
                      background: 'linear-gradient(180deg, #182033 0%, #0d121e 100%)',
                      border: '1px solid rgba(139, 92, 246, 0.35)',
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'center',
                      justifyContent: 'center',
                      position: 'relative',
                      overflow: 'hidden'
                    }}>
                      <div style={{ width: '70px', height: '70px', borderRadius: '50%', background: 'linear-gradient(135deg, #7c3aed 0%, #38bdf8 100%)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '8px', boxShadow: '0 0 20px rgba(124, 58, 237, 0.5)' }}>
                        <UserCheck size={36} color="#fff" />
                      </div>
                      <div style={{ fontSize: '14px', fontWeight: 800, color: '#f8fafc' }}>Dr. Marcus Vance (Bar Raiser)</div>
                      <div style={{ fontSize: '11px', color: '#67e8f9' }}>Principal Architect • Tier-1 FAANG</div>

                      <div style={{ position: 'absolute', top: '10px', left: '10px', background: 'rgba(0,0,0,0.6)', padding: '3px 8px', borderRadius: '4px', fontSize: '10px', color: '#10b981' }}>
                        ● EVALUATING CANDIDATE LOGIC
                      </div>

                      {/* Speaking Activity Waves */}
                      <div style={{ position: 'absolute', bottom: '10px', left: '10px', right: '10px', background: 'rgba(15, 23, 42, 0.92)', padding: '6px 12px', borderRadius: '8px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                        <span style={{ fontSize: '11px', color: '#c084fc', fontWeight: 700 }}>AI Speech Activity:</span>
                        <div style={{ display: 'flex', gap: '3px', alignItems: 'center', height: '14px' }}>
                          {[8, 14, 6, 12, 16, 9, 13, 7].map((h, i) => (
                            <div key={i} style={{ width: '3px', height: `${h}px`, background: '#c084fc', borderRadius: '2px' }} />
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Subtitle Dialogue Bar */}
                  <div style={{
                    background: '#131929',
                    borderRadius: '16px',
                    padding: '18px 22px',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '12px'
                  }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '8px' }}>
                      <span style={{ fontSize: '11px', fontWeight: 800, color: '#818cf8', textTransform: 'uppercase' }}>
                        {scenario.probe}
                      </span>
                      <span style={{ fontSize: '11px', color: '#94a3b8' }}>Round: {scenario.round}</span>
                    </div>

                    <p style={{ fontSize: '14px', color: '#f8fafc', fontWeight: 600, lineHeight: 1.5 }}>
                      "{scenario.question}"
                    </p>

                    <div style={{
                      background: 'rgba(0, 0, 0, 0.35)',
                      padding: '10px 14px',
                      borderRadius: '8px',
                      borderLeft: '3px solid #10b981',
                      fontSize: '12px',
                      color: '#cbd5e1'
                    }}>
                      <b style={{ color: '#10b981' }}>Candidate Transcribed Answer: </b>
                      "{scenario.sampleAnswer}"
                    </div>

                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '10px', paddingTop: '6px' }}>
                      <div style={{ display: 'flex', gap: '8px' }}>
                        <button
                          type="button"
                          onClick={() => handleStartPractice(selectedRole)}
                          className="btn-secondary btn-sm"
                          style={{ fontSize: '12px' }}
                        >
                          <Sparkles size={13} color="#c084fc" />
                          <span>Request Live Hint</span>
                        </button>
                      </div>

                      <button
                        onClick={() => handleStartPractice(selectedRole)}
                        className="btn-primary btn-sm"
                      >
                        <span>Try Answering via Voice →</span>
                      </button>
                    </div>
                  </div>
                </div>
              );
            })()}
          </div>
        </section>

        {/* ========================================================
            STEP 6: Multi-Angle Diagnostic Breakdown (Instant Telemetry)
        ======================================================== */}
        <section id="step-telemetry" style={{ padding: '75px 0', position: 'relative' }}>
          <div className="container">
            <div style={{ textAlign: 'center', maxWidth: '780px', margin: '0 auto 48px' }}>
              <span className="badge-pill badge-purple" style={{ marginBottom: '12px' }}>
                STEP 6: MULTI-ANGLE TELEMETRY
              </span>
              <h2 style={{ fontSize: 'clamp(28px, 4vw, 42px)', fontWeight: 800, letterSpacing: '-0.02em', marginBottom: '14px' }}>
                Your Interview Is Analyzed from Multiple Angles
              </h2>
              <p style={{ fontSize: '16px', color: '#94a3b8' }}>
                We go far beyond text transcription to evaluate vocal rhythm, emotional composure, and structured technical logic.
              </p>
            </div>

            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
              gap: '20px',
              marginBottom: '32px'
            }}>
              {[
                { title: '1. Technical Accuracy & Depth', score: '94%', note: 'Sound architectural trade-offs, Big-O awareness, and edge cases handled.', status: 'Outstanding' },
                { title: '2. Communication & STAR Method', score: '88%', note: 'Clear Context, Task ownership, decisive Actions, and quantified impact results.', status: 'Strong Structure' },
                { title: '3. Non-Verbal Poise & Eye Contact', score: '92%', note: 'High eye contact alignment, steady posture, and composed recovery under curveballs.', status: 'Executive Poise' },
                { title: '4. Response Conciseness & Pace', score: '82%', note: '142 WPM optimal speaking rate with zero awkward filler crutches.', status: 'Crisp Delivery' }
              ].map((card, idx) => (
                <div key={idx} className="glass-card" style={{ padding: '24px', background: '#0e121c', borderRadius: '18px' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '12px' }}>
                    <span style={{ fontSize: '28px', fontWeight: 800, color: '#67e8f9' }}>{card.score}</span>
                    <span style={{ fontSize: '11px', color: '#10b981', fontWeight: 700, background: 'rgba(16, 185, 129, 0.12)', padding: '2px 8px', borderRadius: '4px' }}>
                      ✓ {card.status}
                    </span>
                  </div>
                  <h3 style={{ fontSize: '16px', fontWeight: 800, color: '#f8fafc', marginBottom: '8px' }}>
                    {card.title}
                  </h3>
                  <p style={{ fontSize: '13px', color: '#94a3b8', lineHeight: 1.6 }}>
                    {card.note}
                  </p>
                </div>
              ))}
            </div>

            {/* Dynamic Annotated Transcript Banner */}
            <div style={{
              background: 'linear-gradient(135deg, #111728 0%, #0d111d 100%)',
              border: '1px solid rgba(255, 255, 255, 0.08)',
              borderRadius: '20px',
              padding: '24px 30px',
              display: 'flex',
              flexDirection: 'column',
              gap: '12px'
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <Terminal size={16} color="#06b6d4" />
                <span style={{ fontSize: '12px', fontWeight: 800, color: '#06b6d4', textTransform: 'uppercase' }}>
                  SENTENCE-LEVEL AI ANNOTATION & REWRITE HIGHLIGHTS:
                </span>
              </div>
              <p style={{ fontSize: '14px', color: '#e2e8f0', lineHeight: 1.7 }}>
                "We <span style={{ color: '#10b981', fontWeight: 700, textDecoration: 'underline' }}>orchestrated</span> an optimistic locking strategy backed by <span style={{ color: '#c084fc', fontWeight: 700 }}>Redis distributed leases</span> with monotonic version counters, which <span style={{ color: '#06b6d4', fontWeight: 700, textDecoration: 'underline' }}>cut latency by 42%</span> across our 3 multi-region replica nodes."
              </p>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '16px', fontSize: '11px', color: '#94a3b8', paddingTop: '6px' }}>
                <span><b style={{ color: '#10b981' }}>● Green:</b> High-Impact Action Verb</span>
                <span><b style={{ color: '#c084fc' }}>● Purple:</b> Architectural Trade-off Term</span>
                <span><b style={{ color: '#06b6d4' }}>● Cyan:</b> Quantified Metric Outcome</span>
              </div>
            </div>
          </div>
        </section>

        {/* ========================================================
            STEP 7: Diagnostic Scorecard & STAR Breakdown
        ======================================================== */}
        <section id="step-scorecard" style={{ padding: '75px 0', background: 'linear-gradient(180deg, #07090e 0%, #0d121e 100%)' }}>
          <div className="container">
            <div style={{
              background: 'linear-gradient(135deg, #111728 0%, #0c0f18 100%)',
              border: '1px solid rgba(99, 102, 241, 0.4)',
              borderRadius: '28px',
              padding: '40px',
              boxShadow: '0 30px 80px -20px rgba(0, 0, 0, 0.9)'
            }}>
              {/* Scorecard Header */}
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '16px', marginBottom: '32px', paddingBottom: '20px', borderBottom: '1px solid rgba(255, 255, 255, 0.08)' }}>
                <div>
                  <span className="badge-pill badge-emerald" style={{ marginBottom: '8px' }}>
                    STEP 7: DIAGNOSTIC SCORECARD
                  </span>
                  <h2 style={{ fontSize: '28px', fontWeight: 800, color: '#f8fafc', marginTop: '6px' }}>
                    See Exactly How You Performed
                  </h2>
                </div>
                <div style={{ textAlign: 'right' }}>
                  <div style={{ fontSize: '42px', fontWeight: 800, color: '#818cf8', lineHeight: 1 }}>91/100</div>
                  <div style={{ fontSize: '12px', color: '#10b981', fontWeight: 700, marginTop: '4px' }}>
                    ✦ Offer-Ready Tier • Top 6% Candidate Cohort
                  </div>
                </div>
              </div>

              {/* Progress Bars & Strengths/Gaps */}
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '28px', marginBottom: '32px' }}>
                {/* Sliders */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
                  {[
                    { label: 'Technical Clarity & Systems Depth', pct: 94, color: '#10b981' },
                    { label: 'STAR Behavioral Framework Structure', pct: 88, color: '#818cf8' },
                    { label: 'Response Conciseness & Time Budget', pct: 82, color: '#f59e0b' },
                    { label: 'Non-Verbal Composure & Camera Gaze', pct: 90, color: '#06b6d4' }
                  ].map((cat, idx) => (
                    <div key={idx}>
                      <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '12px', marginBottom: '6px' }}>
                        <span style={{ color: '#cbd5e1', fontWeight: 600 }}>{cat.label}</span>
                        <span style={{ color: cat.color, fontWeight: 700 }}>{cat.pct}%</span>
                      </div>
                      <div style={{ width: '100%', height: '8px', background: 'rgba(255, 255, 255, 0.08)', borderRadius: '4px' }}>
                        <div style={{ width: `${cat.pct}%`, height: '100%', background: cat.color, borderRadius: '4px' }} />
                      </div>
                    </div>
                  ))}
                </div>

                {/* Tabbed Review: Strengths vs Opportunities */}
                <div style={{ background: 'rgba(0, 0, 0, 0.35)', borderRadius: '18px', padding: '22px', border: '1px solid rgba(255, 255, 255, 0.06)' }}>
                  <div style={{ display: 'flex', gap: '8px', marginBottom: '16px' }}>
                    {[
                      { id: 'strengths', label: '✦ Top Strengths' },
                      { id: 'opportunities', label: '⚠️ Growth Gaps' },
                      { id: 'model', label: '💡 Model Answer' }
                    ].map((tab) => (
                      <button
                        key={tab.id}
                        onClick={() => setScorecardTab(tab.id as any)}
                        style={{
                          background: scorecardTab === tab.id ? 'rgba(99, 102, 241, 0.25)' : 'transparent',
                          border: scorecardTab === tab.id ? '1px solid #818cf8' : '1px solid transparent',
                          color: scorecardTab === tab.id ? '#fff' : '#94a3b8',
                          padding: '4px 10px',
                          borderRadius: '6px',
                          fontSize: '11px',
                          fontWeight: 700,
                          cursor: 'pointer'
                        }}
                      >
                        {tab.label}
                      </button>
                    ))}
                  </div>

                  {scorecardTab === 'strengths' && (
                    <div>
                      <div style={{ fontSize: '12px', color: '#10b981', fontWeight: 700, marginBottom: '8px' }}>
                        Identified Hiring Committee Signals:
                      </div>
                      <ul style={{ fontSize: '12px', color: '#cbd5e1', lineHeight: 1.7, paddingLeft: '16px' }}>
                        <li>Solid explanation of Redis distributed lease TTLs and atomic counter verification.</li>
                        <li>Maintained consistent 94% eye contact alignment with the interviewer lens.</li>
                        <li>Proactively handled network partition failure cases before being probed.</li>
                      </ul>
                    </div>
                  )}

                  {scorecardTab === 'opportunities' && (
                    <div>
                      <div style={{ fontSize: '12px', color: '#f59e0b', fontWeight: 700, marginBottom: '8px' }}>
                        High-Leverage Areas for Improvement:
                      </div>
                      <ul style={{ fontSize: '12px', color: '#cbd5e1', lineHeight: 1.7, paddingLeft: '16px' }}>
                        <li>Shorten initial context setting from 45s down to 15s to leave more time for architectural trade-offs.</li>
                        <li>Quantify business impact ($ savings, query latency, or MTTR reduction) explicitly in the Result stage.</li>
                      </ul>
                    </div>
                  )}

                  {scorecardTab === 'model' && (
                    <div>
                      <div style={{ fontSize: '12px', color: '#c084fc', fontWeight: 700, marginBottom: '8px' }}>
                        Staff-Level Benchmark Answer:
                      </div>
                      <p style={{ fontSize: '12px', color: '#cbd5e1', lineHeight: 1.6, fontStyle: 'italic' }}>
                        "We isolated concurrency race conditions via an optimistic locking schema paired with Redis distributed leases, achieving 99.99% idempotency while slashing p99 latency from 180ms to 24ms."
                      </p>
                    </div>
                  )}
                </div>
              </div>

              {/* STAR Methodology Component Breakdown */}
              <div style={{
                background: 'rgba(255, 255, 255, 0.02)',
                border: '1px solid rgba(255, 255, 255, 0.08)',
                borderRadius: '16px',
                padding: '20px',
                marginBottom: '28px'
              }}>
                <div style={{ fontSize: '12px', fontWeight: 800, color: '#818cf8', textTransform: 'uppercase', marginBottom: '14px' }}>
                  STAR METHODOLOGY COMPONENT EVALUATION:
                </div>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: '12px' }}>
                  {[
                    { key: 'S', title: 'Situation', score: '25/25', desc: 'Crisp context without rambling or irrelevant backstory.' },
                    { key: 'T', title: 'Task', score: '23/25', desc: 'Clear scope of individual technical ownership defined.' },
                    { key: 'A', title: 'Action', score: '24/25', desc: 'Deep technical execution with specific tooling trade-offs.' },
                    { key: 'R', title: 'Result', score: '19/25', desc: 'Strong technical outcome; needs more quantified business metrics.' }
                  ].map((star, i) => (
                    <div key={i} style={{ background: 'rgba(0, 0, 0, 0.3)', padding: '14px', borderRadius: '10px' }}>
                      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '6px' }}>
                        <span style={{ fontSize: '16px', fontWeight: 900, color: '#67e8f9' }}>{star.key} — {star.title}</span>
                        <span style={{ fontSize: '11px', fontWeight: 800, color: '#10b981' }}>{star.score}</span>
                      </div>
                      <p style={{ fontSize: '11px', color: '#94a3b8', lineHeight: 1.5 }}>
                        {star.desc}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              <button
                onClick={() => handleStartPractice()}
                className="btn-primary"
                style={{ width: '100%', justifyContent: 'center', padding: '15px' }}
              >
                <span>Launch Free Practice Session & Get Your Scorecard</span>
                <ArrowRight size={16} />
              </button>
            </div>
          </div>
        </section>

        {/* ========================================================
            STEP 8: Cohort Benchmarking & Growth Matrix
        ======================================================== */}
        <section id="step-benchmarking" style={{ padding: '75px 0', position: 'relative' }}>
          <div className="container">
            <div style={{ textAlign: 'center', maxWidth: '780px', margin: '0 auto 48px' }}>
              <span className="badge-pill badge-cyan" style={{ marginBottom: '12px' }}>
                STEP 8: COHORT BENCHMARKING
              </span>
              <h2 style={{ fontSize: 'clamp(28px, 4vw, 42px)', fontWeight: 800, letterSpacing: '-0.02em', marginBottom: '14px' }}>
                Benchmarked Against Top 10% Hired Engineers
              </h2>
              <p style={{ fontSize: '16px', color: '#94a3b8' }}>
                Compare your performance across core competencies against candidate cohorts who received job offers at FAANG and high-growth scaleups.
              </p>
            </div>

            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
              gap: '28px',
              alignItems: 'stretch'
            }}>
              {/* Comparative Bar Chart Card */}
              <div className="glass-card" style={{ padding: '30px', borderRadius: '24px', background: '#0e121c' }}>
                <h3 style={{ fontSize: '18px', fontWeight: 800, color: '#f8fafc', marginBottom: '6px' }}>
                  Competency Comparison
                </h3>
                <p style={{ fontSize: '12px', color: '#94a3b8', marginBottom: '24px' }}>
                  Your score vs. Candidate Average vs. Top 10% Hired
                </p>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '18px' }}>
                  {[
                    { label: 'System Design & Scalability', you: 94, avg: 68, top: 92 },
                    { label: 'STAR Behavioral Leadership', you: 88, avg: 72, top: 90 },
                    { label: 'Algorithms & Trade-offs', you: 91, avg: 65, top: 94 },
                    { label: 'Communication & Conciseness', you: 82, avg: 60, top: 88 }
                  ].map((item, idx) => (
                    <div key={idx}>
                      <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '12px', marginBottom: '6px' }}>
                        <span style={{ color: '#cbd5e1', fontWeight: 700 }}>{item.label}</span>
                        <span style={{ color: '#67e8f9', fontWeight: 800 }}>You: {item.you}%</span>
                      </div>

                      {/* Triple comparative bars */}
                      <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
                        {/* You */}
                        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                          <span style={{ fontSize: '10px', color: '#818cf8', width: '45px' }}>You</span>
                          <div style={{ flex: 1, height: '6px', background: 'rgba(255,255,255,0.06)', borderRadius: '3px' }}>
                            <div style={{ width: `${item.you}%`, height: '100%', background: '#818cf8', borderRadius: '3px' }} />
                          </div>
                        </div>

                        {/* Top 10% */}
                        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                          <span style={{ fontSize: '10px', color: '#10b981', width: '45px' }}>Top 10%</span>
                          <div style={{ flex: 1, height: '6px', background: 'rgba(255,255,255,0.06)', borderRadius: '3px' }}>
                            <div style={{ width: `${item.top}%`, height: '100%', background: '#10b981', borderRadius: '3px' }} />
                          </div>
                        </div>

                        {/* Average */}
                        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                          <span style={{ fontSize: '10px', color: '#64748b', width: '45px' }}>Average</span>
                          <div style={{ flex: 1, height: '6px', background: 'rgba(255,255,255,0.06)', borderRadius: '3px' }}>
                            <div style={{ width: `${item.avg}%`, height: '100%', background: '#475569', borderRadius: '3px' }} />
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Domain Readiness Matrix Card */}
              <div className="glass-card" style={{ padding: '30px', borderRadius: '24px', background: '#0e121c', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                <div>
                  <h3 style={{ fontSize: '18px', fontWeight: 800, color: '#f8fafc', marginBottom: '6px' }}>
                    Domain Readiness Matrix
                  </h3>
                  <p style={{ fontSize: '12px', color: '#94a3b8', marginBottom: '24px' }}>
                    Readiness by core technical stack specialization
                  </p>

                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '14px', marginBottom: '20px' }}>
                    {[
                      { name: 'Frontend Architecture', score: '95%', tag: 'Offer-Ready', color: '#10b981' },
                      { name: 'Distributed Systems', score: '88%', tag: 'Senior Tier', color: '#06b6d4' },
                      { name: 'Database & Caching', score: '90%', tag: 'Offer-Ready', color: '#10b981' },
                      { name: 'DevOps & CI/CD Pipelines', score: '82%', tag: 'Needs Polish', color: '#f59e0b' }
                    ].map((domain, i) => (
                      <div key={i} style={{ background: 'rgba(0, 0, 0, 0.35)', padding: '16px', borderRadius: '12px', border: '1px solid rgba(255, 255, 255, 0.05)' }}>
                        <div style={{ fontSize: '11px', color: '#94a3b8', marginBottom: '4px' }}>{domain.name}</div>
                        <div style={{ fontSize: '22px', fontWeight: 800, color: '#f8fafc', marginBottom: '4px' }}>{domain.score}</div>
                        <span style={{ fontSize: '10px', color: domain.color, fontWeight: 700 }}>● {domain.tag}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div style={{
                  padding: '14px',
                  borderRadius: '12px',
                  background: 'rgba(99, 102, 241, 0.1)',
                  border: '1px solid rgba(99, 102, 241, 0.25)',
                  fontSize: '12px',
                  color: '#c7d2fe'
                }}>
                  💡 <b>Cohort Insight:</b> Candidates scoring &gt;88% on Distributed Systems and &gt;90% on Frontend have an 84% pass rate across Staff-level loops.
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ========================================================
            STEP 9: Targeted Action Drills to Close Your Gaps
        ======================================================== */}
        <section id="step-drills" style={{ padding: '75px 0', background: 'linear-gradient(180deg, #07090e 0%, #0d121f 100%)' }}>
          <div className="container">
            <div style={{ textAlign: 'center', maxWidth: '780px', margin: '0 auto 48px' }}>
              <span className="badge-pill badge-purple" style={{ marginBottom: '12px' }}>
                STEP 9: TARGETED RETRAINING
              </span>
              <h2 style={{ fontSize: 'clamp(28px, 4vw, 42px)', fontWeight: 800, letterSpacing: '-0.02em', marginBottom: '14px' }}>
                Targeted Action Drills to Close Your Gaps
              </h2>
              <p style={{ fontSize: '16px', color: '#94a3b8' }}>
                AI synthesizes your scorecard into 5-to-15 minute focused drills so you never repeat the same mistake.
              </p>
            </div>

            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
              gap: '20px'
            }}>
              {[
                {
                  title: 'System Design Scalability Drill',
                  duration: '10 min',
                  tag: 'High Priority',
                  tagColor: '#ef4444',
                  desc: 'Master multi-region replication, failover consensus, and partition recovery trade-offs.',
                  drillRole: 'Staff Distributed Systems Architect'
                },
                {
                  title: 'STAR Impact Quantification Practice',
                  duration: '15 min',
                  tag: 'Recommended',
                  tagColor: '#f59e0b',
                  desc: 'Refactor your behavioral stories to highlight metric-driven business ROI and leadership decisions.',
                  drillRole: 'Product Manager — Growth & Strategy'
                },
                {
                  title: 'Rapid Fire Curveball Follow-ups',
                  duration: '8 min',
                  tag: 'Speed Drill',
                  tagColor: '#06b6d4',
                  desc: 'Train composed thinking under aggressive cross-examination with zero preparation time.',
                  drillRole: 'Senior Frontend Engineer'
                },
                {
                  title: 'Filler Word Elimination Challenge',
                  duration: '5 min',
                  tag: 'Cadence Drill',
                  tagColor: '#10b981',
                  desc: 'Eliminate "um", "like", and trailing sentences with real-time acoustic buzz reminders.',
                  drillRole: 'Senior Frontend Engineer'
                }
              ].map((drill, idx) => (
                <div
                  key={idx}
                  className="glass-card"
                  style={{
                    padding: '24px',
                    borderRadius: '18px',
                    background: '#0e121c',
                    border: '1px solid rgba(255, 255, 255, 0.08)',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between'
                  }}
                >
                  <div>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '12px' }}>
                      <span style={{ fontSize: '11px', fontWeight: 700, color: drill.tagColor, background: `${drill.tagColor}15`, padding: '2px 8px', borderRadius: '4px' }}>
                        {drill.tag}
                      </span>
                      <span style={{ fontSize: '11px', color: '#94a3b8', display: 'flex', alignItems: 'center', gap: '4px' }}>
                        <Clock size={12} /> {drill.duration}
                      </span>
                    </div>

                    <h3 style={{ fontSize: '16px', fontWeight: 800, color: '#f8fafc', marginBottom: '8px' }}>
                      {drill.title}
                    </h3>
                    <p style={{ fontSize: '13px', color: '#94a3b8', lineHeight: 1.6, marginBottom: '20px' }}>
                      {drill.desc}
                    </p>
                  </div>

                  <button
                    onClick={() => handleStartPractice(drill.drillRole)}
                    className="btn-primary btn-sm"
                    style={{ width: '100%', justifyContent: 'center' }}
                  >
                    <span>Start Drill</span>
                    <ArrowRight size={13} />
                  </button>
                </div>
              ))}
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
                  TRANSFORM YOUR INTERVIEW CONFIDENCE
                </span>

                <h2 style={{
                  fontSize: 'clamp(32px, 5vw, 48px)',
                  fontWeight: 800,
                  color: '#ffffff',
                  letterSpacing: '-0.03em',
                  lineHeight: 1.2,
                  marginBottom: '18px'
                }}>
                  Your Next Interview Can Be Better Than Your Last One.
                </h2>

                <p style={{
                  fontSize: '17px',
                  color: '#cbd5e1',
                  lineHeight: 1.7,
                  marginBottom: '36px'
                }}>
                  Master your answers, body language, and pacing with InPrep AI's end-to-end interview simulation engine.
                </p>

                <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '16px' }}>
                  <button
                    onClick={() => handleStartPractice()}
                    className="btn-primary"
                    style={{ fontSize: '16px', padding: '15px 34px' }}
                  >
                    <span>Start Practice for Free</span>
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
