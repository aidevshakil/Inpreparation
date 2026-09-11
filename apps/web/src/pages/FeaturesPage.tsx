import React, { useState } from 'react';
import {
  Sparkles,
  ArrowRight,
  CheckCircle2,
  Lock,
  Eye,
  Sliders,
  Compass,
  Layers,
  Mic,
  TrendingUp,
  RefreshCw,
  Copy,
  Check,
  Code,
  MessageSquare,
  Video,
  Globe,
  BarChart3,
  Smartphone,
  Users,
  Shield,
  CameraOff,
  Ban,
  Radio
} from 'lucide-react';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';
import { LiveSimulationModal } from '../components/LiveSimulationModal';
import { DemoVideoModal } from '../components/DemoVideoModal';

interface FeaturesPageProps {
  onNavigateToHome: () => void;
  onNavigateToHowItWorks?: () => void;
  onNavigateToSimulations?: () => void;
  onNavigateToPricing?: () => void;
  onNavigateToFaq?: () => void;
  onNavigateToAi?: () => void;
}

export const FeaturesPage: React.FC<FeaturesPageProps> = ({
  onNavigateToHome,
  onNavigateToHowItWorks,
  onNavigateToSimulations,
  onNavigateToPricing,
  onNavigateToFaq,
  onNavigateToAi
}) => {
  const [isSimulatorOpen, setIsSimulatorOpen] = useState(false);
  const [isDemoOpen, setIsDemoOpen] = useState(false);
  const [selectedRole, setSelectedRole] = useState('Senior Frontend Engineer');
  const [selectedEvalDimension, setSelectedEvalDimension] = useState(0);
  const [copiedAnswer, setCopiedAnswer] = useState(false);

  const handleStartPractice = (role?: string) => {
    if (role) setSelectedRole(role);
    setIsSimulatorOpen(true);
  };

  const handleCopyModelAnswer = () => {
    const text = `1. High-Level Definition: "Synchronous execution is blocking; asynchronous execution yields control while awaiting high-latency operations."\n2. Mechanism: "Python achieves this via the single-threaded asyncio event loop, registering coroutines rather than spinning OS-level threads."\n3. Workload Distinction: "Asyncio is ideal for I/O-bound workloads (HTTP, database calls), whereas CPU-bound operations require multiprocessing to bypass Python's GIL."\n4. Production Example: "In our microservice, switching from synchronous requests to httpx with asyncio cut p99 latency from 420ms to 65ms."`;
    navigator.clipboard.writeText(text);
    setCopiedAnswer(true);
    setTimeout(() => setCopiedAnswer(false), 2000);
  };

  // 1. One Platform for Your Complete Interview Journey (6 Cards)
  const journeySteps = [
    {
      step: '01',
      title: 'Profile & Role Calibration',
      desc: 'Upload your CV and target job description to dynamically tune question difficulty and competencies.',
      icon: Sliders,
      accentColor: '#818cf8'
    },
    {
      step: '02',
      title: 'AI Career Readiness Assessment',
      desc: 'Benchmark baseline technical and communication aptitude against thousands of anonymized candidates.',
      icon: Compass,
      accentColor: '#38bdf8'
    },
    {
      step: '03',
      title: 'Select Track & Scenario',
      desc: 'Choose from 100+ role tracks: from distributed consensus to executive behavioral leadership.',
      icon: Layers,
      accentColor: '#34d399'
    },
    {
      step: '04',
      title: 'Realistic AI Simulation',
      desc: 'Speak naturally with expressive AI interviewers in strict, calibrated 5-question rounds.',
      icon: Mic,
      accentColor: '#fb923c'
    },
    {
      step: '05',
      title: 'Multimodal Rubrics Breakdown',
      desc: 'Receive instant, objective diagnostics across code correctness, delivery pacing, and camera setup.',
      icon: TrendingUp,
      accentColor: '#c084fc'
    },
    {
      step: '06',
      title: 'Targeted Re-Practice Drills',
      desc: 'Iterate on your single highest-leverage improvement area with AI-suggested model formulations.',
      icon: RefreshCw,
      accentColor: '#ec4899'
    }
  ];

  // 2. Evaluation Engine 4 Dimensions
  const evalDimensions = [
    {
      id: 'tech',
      title: 'Technical Accuracy',
      desc: 'Algorithmic correctness, edge case handling, and architectural trade-offs.',
      icon: Code,
      score: '88%',
      color: '#818cf8'
    },
    {
      id: 'comm',
      title: 'Communication & Structure',
      desc: 'Logical STAR flow, executive clarity, and structured rationale.',
      icon: MessageSquare,
      score: '84%',
      color: '#38bdf8'
    },
    {
      id: 'speech',
      title: 'Speech & Delivery',
      desc: '120–160 WPM pacing, zero filler words, and vocal confidence.',
      icon: Mic,
      score: '81%',
      color: '#34d399'
    },
    {
      id: 'camera',
      title: 'On-Camera Presentation',
      desc: 'Optimal lighting, centered camera eye-level framing.',
      icon: Video,
      score: '85%',
      color: '#c084fc'
    }
  ];

  // 3. Standardized 5-Question Rounds
  const benchmarkScores = [
    { score: 86, label: 'Q1: Problem Framing' },
    { score: 82, label: 'Q2: System Architecture' },
    { score: 84, label: 'Q3: Concrete Trade-offs' },
    { score: 88, label: 'Q4: Failure Modes' },
    { score: 81, label: 'Q5: Behavioral Impact' }
  ];

  // 4. Domain Coverage Tracks (10 tracks)
  const domainTracks = [
    { title: 'Software Engineering', count: '24 tracks', skills: 'Python, Go, Java, C++, Rust', icon: Code, color: '#818cf8' },
    { title: 'AI & ML Engineering', count: '18 tracks', skills: 'LLMs, PyTorch, Fine-Tuning, RAG', icon: Globe, color: '#a855f7' },
    { title: 'Data Science', count: '15 tracks', skills: 'SQL, Spark, A/B Testing, Modeling', icon: BarChart3, color: '#38bdf8' },
    { title: 'System Design', count: '19 tracks', skills: 'Scalability, Caching, CAP, Consensus', icon: Layers, color: '#34d399' },
    { title: 'DevOps & Cloud', count: '12 tracks', skills: 'K8s, Terraform, AWS, CI/CD', icon: Shield, color: '#60a5fa' },
    { title: 'Frontend & Web', count: '14 tracks', skills: 'React, Next.js, Vue, Web Performance', icon: Smartphone, color: '#c084fc' },
    { title: 'Mobile Engineering', count: '10 tracks', skills: 'Flutter, React Native, Swift, Kotlin', icon: Smartphone, color: '#2dd4bf' },
    { title: 'Distributed Systems', count: '16 tracks', skills: 'Raft, Paxos, Event-driven, Storage', icon: Layers, color: '#f59e0b' },
    { title: 'Security & Infosec', count: '11 tracks', skills: 'OWASP, Auth, Cryptography, Pentesting', icon: Lock, color: '#ec4899' },
    { title: 'Product Management', count: '16 tracks', skills: 'EM, Technical PM, Staff Behavioral', icon: Users, color: '#4ade80' }
  ];

  // 5. Tech Stack Integrations
  const techStack = [
    { name: 'FastAPI', type: 'Python Core', color: '#10b981' },
    { name: 'React 19', type: 'Modern UI', color: '#38bdf8' },
    { name: 'WebRTC', type: 'Low-Latency Voice', color: '#818cf8' },
    { name: 'OpenAI', type: 'Reasoning Engine', color: '#34d399' },
    { name: 'Anthropic', type: 'Contextual Logic', color: '#fb923c' },
    { name: 'PostgreSQL', type: 'Relational Store', color: '#60a5fa' },
    { name: 'Docker', type: 'Containerized Env', color: '#38bdf8' }
  ];

  // 6. Ethical Pillars
  const ethicalPillars = [
    {
      icon: Eye,
      color: '#38bdf8',
      title: 'Transparent Analysis',
      desc: 'Every metric is accompanied by exact timestamps and rationale.'
    },
    {
      icon: CameraOff,
      color: '#a855f7',
      title: 'Observable Only',
      desc: 'Camera metrics evaluate physical setup factors, never facial expressions.'
    },
    {
      icon: Ban,
      color: '#38bdf8',
      title: 'No Profiling',
      desc: 'Strict prohibition on psychological, emotional, or honesty conjecture.'
    },
    {
      icon: Lock,
      color: '#34d399',
      title: 'Candidate Privacy',
      desc: 'Zero candidate video is ever used to train public foundational models.'
    }
  ];

  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', background: '#080c14', color: '#f8fafc' }}>
      {/* Sticky Navigation */}
      <Navbar
        onStartPractice={handleStartPractice}
        onNavigateToAi={onNavigateToAi}
        currentPage="features"
        onNavigate={(page) => {
          if (page === 'home') onNavigateToHome();
          if (page === 'how-it-works' && onNavigateToHowItWorks) onNavigateToHowItWorks();
          if (page === 'simulations' && onNavigateToSimulations) onNavigateToSimulations();
          if (page === 'pricing' && onNavigateToPricing) onNavigateToPricing();
          if (page === 'faq' && onNavigateToFaq) onNavigateToFaq();
        }}
      />

      <main style={{ flex: 1 }}>
        {/* ========================================================
            1. HERO SECTION: Everything You Need to Become Interview Ready
        ======================================================== */}
        <section style={{ padding: '70px 0 60px', position: 'relative', overflow: 'hidden' }}>
          <div className="bg-ambient-glow" style={{ top: '-15%', left: '25%', width: '500px', height: '500px', background: 'radial-gradient(circle, rgba(99, 102, 241, 0.3) 0%, transparent 70%)' }} />
          <div className="bg-ambient-glow" style={{ top: '25%', right: '15%', width: '450px', height: '450px', background: 'radial-gradient(circle, rgba(56, 189, 248, 0.2) 0%, transparent 70%)' }} />

          <div className="container" style={{ textAlign: 'center', position: 'relative', zIndex: 2 }}>
            <div style={{ marginBottom: '18px' }}>
              <span style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                background: 'rgba(99, 102, 241, 0.15)',
                border: '1px solid rgba(99, 102, 241, 0.35)',
                borderRadius: '9999px',
                padding: '6px 16px',
                fontSize: '11px',
                fontWeight: 700,
                letterSpacing: '0.1em',
                textTransform: 'uppercase',
                color: '#c7d2fe'
              }}>
                <Sparkles size={13} color="#818cf8" />
                AI-POWERED INTERVIEW PREPARATION
              </span>
            </div>

            <h1 style={{
              fontSize: 'clamp(36px, 5vw, 56px)',
              fontWeight: 800,
              letterSpacing: '-0.03em',
              lineHeight: 1.15,
              marginBottom: '20px',
              maxWidth: '860px',
              margin: '0 auto 20px'
            }}>
              Everything You Need to Become{' '}
              <span style={{
                background: 'linear-gradient(135deg, #818cf8 0%, #38bdf8 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                display: 'inline-block'
              }}>
                Interview Ready
              </span>
            </h1>

            <p style={{
              fontSize: '16px',
              color: '#94a3b8',
              lineHeight: 1.65,
              maxWidth: '680px',
              margin: '0 auto 34px'
            }}>
              From role-specific question banks and ultra-low latency speech to multimodal video analytics, explore the full depth of our platform designed to build unshakable interview confidence.
            </p>

            <div style={{
              display: 'flex',
              flexWrap: 'wrap',
              justifyContent: 'center',
              gap: '16px',
              marginBottom: '44px'
            }}>
              <button
                onClick={() => handleStartPractice()}
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '8px',
                  background: 'linear-gradient(135deg, #7c3aed 0%, #6366f1 100%)',
                  color: '#ffffff',
                  border: 'none',
                  borderRadius: '9999px',
                  padding: '14px 30px',
                  fontSize: '15px',
                  fontWeight: 600,
                  cursor: 'pointer',
                  boxShadow: '0 8px 24px rgba(124, 58, 237, 0.45)',
                  transition: 'all 0.2s ease'
                }}
              >
                <span>Start Practicing Free</span>
                <ArrowRight size={16} />
              </button>

              <button
                onClick={() => setIsDemoOpen(true)}
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  background: 'rgba(255, 255, 255, 0.07)',
                  border: '1px solid rgba(255, 255, 255, 0.1)',
                  color: '#e2e8f0',
                  borderRadius: '9999px',
                  padding: '14px 28px',
                  fontSize: '15px',
                  fontWeight: 600,
                  cursor: 'pointer',
                  transition: 'all 0.2s ease'
                }}
              >
                <span>Explore Features</span>
              </button>
            </div>

            {/* Feature Sub-Pills Bar */}
            <div style={{
              display: 'flex',
              flexWrap: 'wrap',
              justifyContent: 'center',
              alignItems: 'center',
              gap: '20px',
              paddingTop: '24px',
              borderTop: '1px solid rgba(255, 255, 255, 0.06)',
              color: '#94a3b8',
              fontSize: '12.5px',
              fontWeight: 500
            }}>
              <span>Real-Time Voice</span>
              <span style={{ color: '#475569' }}>•</span>
              <span>Multimodal Feedback</span>
              <span style={{ color: '#475569' }}>•</span>
              <span>Domain-Specific Tracks</span>
              <span style={{ color: '#475569' }}>•</span>
              <span>STAR Method Answers</span>
              <span style={{ color: '#475569' }}>•</span>
              <span>Zero Emotion Profiling</span>
            </div>
          </div>
        </section>

        {/* ========================================================
            2. SECTION: One Platform for Your Complete Interview Journey
        ======================================================== */}
        <section style={{ padding: '70px 0', position: 'relative' }}>
          <div className="container">
            <div style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'flex-end',
              flexWrap: 'wrap',
              gap: '24px',
              marginBottom: '44px'
            }}>
              <div>
                <span style={{
                  fontSize: '11px',
                  fontWeight: 700,
                  letterSpacing: '0.12em',
                  textTransform: 'uppercase',
                  color: '#38bdf8',
                  display: 'block',
                  marginBottom: '10px'
                }}>
                  HOW IT WORKS
                </span>
                <h2 style={{ fontSize: 'clamp(28px, 3.8vw, 42px)', fontWeight: 800, color: '#ffffff', letterSpacing: '-0.025em', margin: 0 }}>
                  One Platform for Your Complete Interview Journey
                </h2>
              </div>
              <p style={{ fontSize: '14px', color: '#94a3b8', maxWidth: '420px', margin: 0, lineHeight: 1.6 }}>
                A structured, science-backed approach taking you from initial calibration to offer-ready mastery.
              </p>
            </div>

            {/* 3x2 Grid */}
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
              gap: '20px'
            }}>
              {journeySteps.map((card) => {
                const Icon = card.icon;
                return (
                  <div
                    key={card.step}
                    style={{
                      background: 'rgba(15, 21, 35, 0.65)',
                      border: '1px solid rgba(255, 255, 255, 0.06)',
                      borderRadius: '16px',
                      padding: '28px',
                      backdropFilter: 'blur(12px)',
                      display: 'flex',
                      flexDirection: 'column',
                      justifyContent: 'space-between',
                      transition: 'all 0.25s ease'
                    }}
                    className="glow-card-hover"
                  >
                    <div>
                      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
                        <span style={{ fontSize: '12px', fontWeight: 800, color: card.accentColor, letterSpacing: '0.05em' }}>
                          {card.step}
                        </span>
                        <div style={{
                          width: '32px',
                          height: '32px',
                          borderRadius: '8px',
                          background: 'rgba(255, 255, 255, 0.04)',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center'
                        }}>
                          <Icon size={16} color={card.accentColor} />
                        </div>
                      </div>

                      <h3 style={{ fontSize: '17px', fontWeight: 700, color: '#ffffff', marginBottom: '10px', letterSpacing: '-0.01em' }}>
                        {card.title}
                      </h3>

                      <p style={{ fontSize: '13px', color: '#94a3b8', lineHeight: 1.6, margin: 0 }}>
                        {card.desc}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* ========================================================
            3. SECTION: Understand Every Quality of Your Answer
        ======================================================== */}
        <section style={{ padding: '70px 0', position: 'relative' }}>
          <div className="container">
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))',
              gap: '40px',
              alignItems: 'center'
            }}>
              {/* Left Column: 4 Selectable Dimension Cards */}
              <div>
                <span style={{
                  fontSize: '11px',
                  fontWeight: 700,
                  letterSpacing: '0.12em',
                  textTransform: 'uppercase',
                  color: '#818cf8',
                  display: 'block',
                  marginBottom: '10px'
                }}>
                  EVALUATION ENGINE
                </span>

                <h2 style={{ fontSize: 'clamp(28px, 3.8vw, 40px)', fontWeight: 800, color: '#ffffff', letterSpacing: '-0.025em', lineHeight: 1.2, marginBottom: '14px' }}>
                  Understand Every Quality of Your Answer
                </h2>

                <p style={{ fontSize: '14px', color: '#94a3b8', lineHeight: 1.65, marginBottom: '28px' }}>
                  Our multimodal engine evaluates your responses across four core dimensions, giving you granular visibility into technical depth and executive delivery.
                </p>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                  {evalDimensions.map((dim, idx) => {
                    const isSelected = selectedEvalDimension === idx;
                    const Icon = dim.icon;
                    return (
                      <div
                        key={dim.id}
                        onClick={() => setSelectedEvalDimension(idx)}
                        style={{
                          background: isSelected ? 'rgba(20, 28, 48, 0.85)' : 'rgba(15, 21, 35, 0.6)',
                          border: isSelected ? '1px solid rgba(99, 102, 241, 0.45)' : '1px solid rgba(255, 255, 255, 0.06)',
                          borderRadius: '14px',
                          padding: '16px 20px',
                          cursor: 'pointer',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'space-between',
                          gap: '14px',
                          transition: 'all 0.2s ease',
                          boxShadow: isSelected ? '0 8px 24px rgba(99, 102, 241, 0.2)' : 'none'
                        }}
                      >
                        <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
                          <div style={{
                            width: '36px',
                            height: '36px',
                            borderRadius: '10px',
                            background: isSelected ? 'rgba(99, 102, 241, 0.2)' : 'rgba(255, 255, 255, 0.05)',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            flexShrink: 0
                          }}>
                            <Icon size={18} color={isSelected ? '#818cf8' : '#94a3b8'} />
                          </div>
                          <div>
                            <div style={{ fontSize: '14px', fontWeight: 700, color: '#ffffff' }}>
                              {dim.title}
                            </div>
                            <div style={{ fontSize: '12px', color: '#64748b', marginTop: '2px' }}>
                              {dim.desc}
                            </div>
                          </div>
                        </div>

                        <span style={{ fontSize: '13px', fontWeight: 700, color: isSelected ? '#38bdf8' : '#64748b' }}>
                          {dim.score}
                        </span>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Right Column: Scorecard Card */}
              <div style={{
                background: 'rgba(15, 21, 35, 0.75)',
                border: '1px solid rgba(99, 102, 241, 0.3)',
                borderRadius: '22px',
                padding: '32px',
                backdropFilter: 'blur(16px)',
                boxShadow: '0 20px 50px rgba(0, 0, 0, 0.6), 0 0 30px rgba(99, 102, 241, 0.15)'
              }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '24px', paddingBottom: '16px', borderBottom: '1px solid rgba(255, 255, 255, 0.06)' }}>
                  <div>
                    <span style={{ fontSize: '11px', fontWeight: 700, color: '#818cf8', textTransform: 'uppercase', letterSpacing: '0.08em' }}>
                      EXAMPLE SCORECARD
                    </span>
                    <div style={{ fontSize: '18px', fontWeight: 800, color: '#ffffff', marginTop: '2px' }}>
                      Overall Performance
                    </div>
                  </div>
                  <div style={{ textAlign: 'right' }}>
                    <div style={{ fontSize: '32px', fontWeight: 800, color: '#10b981', lineHeight: 1 }}>86<span style={{ fontSize: '16px', color: '#64748b' }}>/100</span></div>
                    <div style={{ fontSize: '11px', color: '#34d399', fontWeight: 600, marginTop: '4px' }}>Offer-Ready</div>
                  </div>
                </div>

                {/* 4 Progress Bars */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', marginBottom: '24px' }}>
                  {[
                    { label: 'Technical Accuracy', score: 88, color: '#818cf8' },
                    { label: 'Communication Structure', score: 84, color: '#38bdf8' },
                    { label: 'Speech Pacing & Cadence', score: 81, color: '#34d399' },
                    { label: 'Setup & Camera Presence', score: 85, color: '#c084fc' }
                  ].map((bar, idx) => (
                    <div key={idx}>
                      <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '12px', marginBottom: '6px' }}>
                        <span style={{ color: '#cbd5e1', fontWeight: 500 }}>{bar.label}</span>
                        <span style={{ color: '#ffffff', fontWeight: 700 }}>{bar.score}%</span>
                      </div>
                      <div style={{ width: '100%', height: '6px', background: 'rgba(255, 255, 255, 0.06)', borderRadius: '3px', overflow: 'hidden' }}>
                        <div style={{ width: `${bar.score}%`, height: '100%', background: bar.color, borderRadius: '3px' }} />
                      </div>
                    </div>
                  ))}
                </div>

                {/* Callout box */}
                <div style={{
                  background: 'rgba(99, 102, 241, 0.08)',
                  border: '1px solid rgba(99, 102, 241, 0.2)',
                  borderRadius: '12px',
                  padding: '14px 16px'
                }}>
                  <div style={{ fontSize: '11px', fontWeight: 700, color: '#818cf8', textTransform: 'uppercase', marginBottom: '4px' }}>
                    ✦ Diagnostic Feedback
                  </div>
                  <p style={{ fontSize: '12.5px', color: '#cbd5e1', lineHeight: 1.55, margin: 0 }}>
                    <strong>Key Strength:</strong> Strong STAR structure on Q3 with clear metrics.<br />
                    <strong>Primary Lever:</strong> Eliminate 2–3 filler words in the first 30 seconds of response.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ========================================================
            4. SECTION: Standardized 5-Question Simulations
        ======================================================== */}
        <section style={{ padding: '70px 0', position: 'relative' }}>
          <div className="container">
            <div style={{ textAlign: 'center', maxWidth: '780px', margin: '0 auto 40px' }}>
              <span style={{
                fontSize: '11px',
                fontWeight: 700,
                letterSpacing: '0.12em',
                textTransform: 'uppercase',
                color: '#c084fc',
                display: 'block',
                marginBottom: '10px'
              }}>
                BENCHMARK METRICS
              </span>
              <h2 style={{ fontSize: 'clamp(28px, 4vw, 42px)', fontWeight: 800, color: '#ffffff', letterSpacing: '-0.025em', marginBottom: '12px' }}>
                Standardized 5-Question Simulations
              </h2>
              <p style={{ fontSize: '15px', color: '#94a3b8', margin: 0 }}>
                Every session contains 5 progressive questions calibrated to industry rubrics.
              </p>
            </div>

            {/* 5 Big Score Boxes */}
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(160px, 1fr))',
              gap: '16px',
              marginBottom: '24px'
            }}>
              {benchmarkScores.map((b, idx) => (
                <div
                  key={idx}
                  style={{
                    background: 'rgba(15, 21, 35, 0.65)',
                    border: '1px solid rgba(255, 255, 255, 0.06)',
                    borderRadius: '16px',
                    padding: '24px 16px',
                    textAlign: 'center',
                    backdropFilter: 'blur(12px)'
                  }}
                >
                  <div style={{ fontSize: '36px', fontWeight: 800, color: '#ffffff', letterSpacing: '-0.02em', marginBottom: '6px' }}>
                    {b.score}
                  </div>
                  <div style={{ fontSize: '12px', color: '#94a3b8', fontWeight: 500 }}>
                    {b.label}
                  </div>
                </div>
              ))}
            </div>

            {/* 5-Step Process Row */}
            <div style={{
              background: 'rgba(15, 21, 35, 0.65)',
              border: '1px solid rgba(255, 255, 255, 0.06)',
              borderRadius: '16px',
              padding: '18px 24px',
              display: 'flex',
              flexWrap: 'wrap',
              alignItems: 'center',
              justifyContent: 'space-between',
              gap: '12px',
              marginBottom: '20px',
              fontSize: '13px',
              color: '#cbd5e1'
            }}>
              {['1. Problem Definition', '2. Architectural Design', '3. Deep Dive', '4. Trade-Off Analysis', '5. Failure Modes'].map((step, idx) => (
                <div key={idx} style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                  <span style={{ fontWeight: 600 }}>{step}</span>
                  {idx < 4 && <span style={{ color: '#475569' }}>→</span>}
                </div>
              ))}
            </div>

            {/* Research Footnote Banner */}
            <div style={{
              background: 'rgba(99, 102, 241, 0.06)',
              border: '1px solid rgba(99, 102, 241, 0.18)',
              borderRadius: '12px',
              padding: '14px 20px',
              textAlign: 'center',
              fontSize: '12.5px',
              color: '#94a3b8'
            }}>
              <span style={{ color: '#818cf8', fontWeight: 700 }}>Why 5 questions?</span> Deliberate practice research shows 15-minute focused rounds yield 3x faster retention than unstructured long chats.
            </div>
          </div>
        </section>

        {/* ========================================================
            5. SECTION: Improve Your Audio Delivery (Speech Telemetry)
        ======================================================== */}
        <section style={{ padding: '70px 0', position: 'relative' }}>
          <div className="container">
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))',
              gap: '40px',
              alignItems: 'center'
            }}>
              {/* Left Column: Waveform Card */}
              <div style={{
                background: 'rgba(15, 21, 35, 0.75)',
                border: '1px solid rgba(56, 189, 248, 0.25)',
                borderRadius: '20px',
                padding: '28px',
                backdropFilter: 'blur(16px)',
                boxShadow: '0 20px 45px rgba(0, 0, 0, 0.6)'
              }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
                  <span style={{ fontSize: '11px', fontWeight: 700, color: '#38bdf8', letterSpacing: '0.08em', textTransform: 'uppercase' }}>
                    ACOUSTIC TELEMETRY HUD
                  </span>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '11px', color: '#10b981' }}>
                    <Radio size={12} />
                    <span>Real-Time Processing</span>
                  </div>
                </div>

                {/* Simulated Audio Waveform Graphic */}
                <div style={{ height: '70px', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '4px', background: 'rgba(0, 0, 0, 0.3)', borderRadius: '12px', padding: '0 16px', marginBottom: '20px' }}>
                  {[10, 20, 38, 24, 48, 30, 22, 42, 28, 14, 40, 52, 34, 20, 46, 28, 16, 36, 22, 12].map((h, idx) => (
                    <div
                      key={idx}
                      style={{
                        width: '4px',
                        height: `${h}px`,
                        background: 'linear-gradient(180deg, #38bdf8 0%, #818cf8 100%)',
                        borderRadius: '2px'
                      }}
                    />
                  ))}
                </div>

                {/* 3 Metric Badges */}
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '12px', textAlign: 'center' }}>
                  <div style={{ background: 'rgba(255, 255, 255, 0.03)', padding: '12px', borderRadius: '10px' }}>
                    <div style={{ fontSize: '17px', fontWeight: 800, color: '#10b981' }}>142 WPM</div>
                    <div style={{ fontSize: '11px', color: '#94a3b8', marginTop: '2px' }}>Optimal Cadence</div>
                  </div>
                  <div style={{ background: 'rgba(255, 255, 255, 0.03)', padding: '12px', borderRadius: '10px' }}>
                    <div style={{ fontSize: '17px', fontWeight: 800, color: '#38bdf8' }}>Steady</div>
                    <div style={{ fontSize: '11px', color: '#94a3b8', marginTop: '2px' }}>Pacing Purity</div>
                  </div>
                  <div style={{ background: 'rgba(255, 255, 255, 0.03)', padding: '12px', borderRadius: '10px' }}>
                    <div style={{ fontSize: '17px', fontWeight: 800, color: '#10b981' }}>0 in 30s</div>
                    <div style={{ fontSize: '11px', color: '#94a3b8', marginTop: '2px' }}>Filler Words</div>
                  </div>
                </div>
              </div>

              {/* Right Column: Speech Description */}
              <div>
                <span style={{
                  fontSize: '11px',
                  fontWeight: 700,
                  letterSpacing: '0.12em',
                  textTransform: 'uppercase',
                  color: '#38bdf8',
                  display: 'block',
                  marginBottom: '10px'
                }}>
                  SPEECH & ACOUSTICS
                </span>

                <h2 style={{ fontSize: 'clamp(28px, 3.8vw, 40px)', fontWeight: 800, color: '#ffffff', letterSpacing: '-0.025em', lineHeight: 1.2, marginBottom: '16px' }}>
                  Improve Your Audio Delivery
                </h2>

                <p style={{ fontSize: '14px', color: '#94a3b8', lineHeight: 1.65, marginBottom: '24px' }}>
                  Real-time acoustic analysis measures speaking cadence, pauses, and filler words to ensure you project authority and calmness under pressure.
                </p>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
                  <div style={{ display: 'flex', alignItems: 'flex-start', gap: '10px', fontSize: '13.5px', color: '#cbd5e1' }}>
                    <CheckCircle2 size={18} color="#10b981" style={{ marginTop: '2px', flexShrink: 0 }} />
                    <span>Cadence detection flags rushing (&gt;160 WPM) or dragging (&lt;110 WPM)</span>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'flex-start', gap: '10px', fontSize: '13.5px', color: '#cbd5e1' }}>
                    <CheckCircle2 size={18} color="#10b981" style={{ marginTop: '2px', flexShrink: 0 }} />
                    <span>Filler word alerts detect "um", "uh", "like", and "basically" in real time</span>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'flex-start', gap: '10px', fontSize: '13.5px', color: '#cbd5e1' }}>
                    <CheckCircle2 size={18} color="#10b981" style={{ marginTop: '2px', flexShrink: 0 }} />
                    <span>Pause structure guidance ensures natural pauses for emphasis without awkward dead air</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ========================================================
            6. SECTION: Master Your On-Camera Presentation
        ======================================================== */}
        <section style={{ padding: '70px 0', position: 'relative' }}>
          <div className="container">
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))',
              gap: '40px',
              alignItems: 'center'
            }}>
              {/* Left Column: CV Telemetry Stats */}
              <div>
                <span style={{
                  fontSize: '11px',
                  fontWeight: 700,
                  letterSpacing: '0.12em',
                  textTransform: 'uppercase',
                  color: '#818cf8',
                  display: 'block',
                  marginBottom: '10px'
                }}>
                  COMPUTER VISION
                </span>

                <h2 style={{ fontSize: 'clamp(28px, 3.8vw, 40px)', fontWeight: 800, color: '#ffffff', letterSpacing: '-0.025em', lineHeight: 1.2, marginBottom: '16px' }}>
                  Master Your On-Camera Presentation
                </h2>

                <p style={{ fontSize: '14px', color: '#94a3b8', lineHeight: 1.65, marginBottom: '28px' }}>
                  Objective computer vision checks your setup so you make a polished, professional first impression on every video interview.
                </p>

                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '14px' }}>
                  <div style={{ background: 'rgba(15, 21, 35, 0.65)', border: '1px solid rgba(255, 255, 255, 0.06)', borderRadius: '14px', padding: '18px' }}>
                    <div style={{ fontSize: '24px', fontWeight: 800, color: '#10b981' }}>94%</div>
                    <div style={{ fontSize: '13px', color: '#ffffff', fontWeight: 600, marginTop: '2px' }}>Gaze Alignment</div>
                    <div style={{ fontSize: '11px', color: '#64748b' }}>Consistent camera focus</div>
                  </div>
                  <div style={{ background: 'rgba(15, 21, 35, 0.65)', border: '1px solid rgba(255, 255, 255, 0.06)', borderRadius: '14px', padding: '18px' }}>
                    <div style={{ fontSize: '24px', fontWeight: 800, color: '#818cf8' }}>88%</div>
                    <div style={{ fontSize: '13px', color: '#ffffff', fontWeight: 600, marginTop: '2px' }}>Framing Score</div>
                    <div style={{ fontSize: '11px', color: '#64748b' }}>Shoulders & head aligned</div>
                  </div>
                  <div style={{ background: 'rgba(15, 21, 35, 0.65)', border: '1px solid rgba(255, 255, 255, 0.06)', borderRadius: '14px', padding: '18px' }}>
                    <div style={{ fontSize: '24px', fontWeight: 800, color: '#38bdf8' }}>Optimal</div>
                    <div style={{ fontSize: '13px', color: '#ffffff', fontWeight: 600, marginTop: '2px' }}>Lighting Level</div>
                    <div style={{ fontSize: '11px', color: '#64748b' }}>Face evenly illuminated</div>
                  </div>
                  <div style={{ background: 'rgba(15, 21, 35, 0.65)', border: '1px solid rgba(255, 255, 255, 0.06)', borderRadius: '14px', padding: '18px' }}>
                    <div style={{ fontSize: '24px', fontWeight: 800, color: '#34d399' }}>Centered</div>
                    <div style={{ fontSize: '13px', color: '#ffffff', fontWeight: 600, marginTop: '2px' }}>Camera Angle</div>
                    <div style={{ fontSize: '11px', color: '#64748b' }}>Eye-level calibrated</div>
                  </div>
                </div>
              </div>

              {/* Right Column: Video Preview with Eye-Level Line */}
              <div style={{
                background: 'rgba(15, 21, 35, 0.75)',
                border: '1px solid rgba(255, 255, 255, 0.08)',
                borderRadius: '22px',
                padding: '16px',
                backdropFilter: 'blur(16px)',
                boxShadow: '0 25px 60px rgba(0, 0, 0, 0.7)'
              }}>
                <div style={{ position: 'relative', borderRadius: '16px', overflow: 'hidden', height: '260px' }}>
                  <img
                    src="/interviewer_sarah.jpg"
                    alt="Camera calibration feed"
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                  />
                  {/* Eye-level line */}
                  <div style={{
                    position: 'absolute',
                    top: '42%',
                    left: 0,
                    right: 0,
                    height: '1px',
                    background: 'rgba(56, 189, 248, 0.8)',
                    boxShadow: '0 0 8px rgba(56, 189, 248, 0.8)'
                  }} />
                  <div style={{
                    position: 'absolute',
                    top: '36%',
                    left: '12px',
                    fontSize: '10px',
                    color: '#38bdf8',
                    fontWeight: 700,
                    background: 'rgba(0,0,0,0.6)',
                    padding: '2px 6px',
                    borderRadius: '4px'
                  }}>
                    EYE-LEVEL GUIDELINE
                  </div>

                  {/* Status overlays */}
                  <div style={{ position: 'absolute', top: '12px', right: '12px', background: 'rgba(0, 0, 0, 0.65)', backdropFilter: 'blur(8px)', padding: '4px 10px', borderRadius: '6px', fontSize: '11px', color: '#34d399', fontWeight: 600 }}>
                    ● 1080p Stream Calibrated
                  </div>
                </div>

                <div style={{
                  marginTop: '14px',
                  padding: '12px 14px',
                  background: 'rgba(0, 0, 0, 0.25)',
                  borderRadius: '12px',
                  fontSize: '11px',
                  color: '#64748b',
                  lineHeight: 1.5
                }}>
                  Camera telemetry evaluates only physical setup factors (lighting, eye-level, framing). Zero facial emotion analysis.
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ========================================================
            7. SECTION: Learn From Every Answer (Model Answers)
        ======================================================== */}
        <section style={{ padding: '70px 0', position: 'relative' }}>
          <div className="container">
            <div style={{ textAlign: 'center', maxWidth: '780px', margin: '0 auto 40px' }}>
              <span style={{
                fontSize: '11px',
                fontWeight: 700,
                letterSpacing: '0.12em',
                textTransform: 'uppercase',
                color: '#818cf8',
                display: 'block',
                marginBottom: '10px'
              }}>
                MODEL ANSWERS
              </span>
              <h2 style={{ fontSize: 'clamp(28px, 4vw, 42px)', fontWeight: 800, color: '#ffffff', letterSpacing: '-0.025em', marginBottom: '12px' }}>
                Learn From Every Answer
              </h2>
              <p style={{ fontSize: '15px', color: '#94a3b8', margin: 0 }}>
                Compare your transcribed response with AI-recommended structures modeled on executive clarity.
              </p>
            </div>

            {/* Side-by-Side 2-Column Comparison */}
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))',
              gap: '24px'
            }}>
              {/* Left Column: Transcribed Answer */}
              <div style={{
                background: 'rgba(15, 21, 35, 0.65)',
                border: '1px solid rgba(255, 255, 255, 0.07)',
                borderRadius: '18px',
                padding: '28px',
                backdropFilter: 'blur(12px)',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between'
              }}>
                <div>
                  <div style={{ fontSize: '11px', fontWeight: 700, color: '#94a3b8', letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: '16px' }}>
                    YOUR TRANSCRIBED ANSWER
                  </div>
                  <p style={{ fontSize: '14px', color: '#cbd5e1', lineHeight: 1.65, fontStyle: 'italic', margin: '0 0 24px 0' }}>
                    "In Python, sync code runs sequentially while async allows non-blocking operations. Asyncio is single-threaded and handles I/O well, but CPU-bound tasks need multiprocessing."
                  </p>
                </div>

                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', paddingTop: '16px', borderTop: '1px solid rgba(255, 255, 255, 0.05)' }}>
                  <span style={{ fontSize: '11px', color: '#f59e0b', background: 'rgba(245, 158, 11, 0.1)', padding: '4px 10px', borderRadius: '9999px', fontWeight: 600 }}>
                    Cadence: 168 WPM (Slightly rushed)
                  </span>
                  <span style={{ fontSize: '11px', color: '#f59e0b', background: 'rgba(245, 158, 11, 0.1)', padding: '4px 10px', borderRadius: '9999px', fontWeight: 600 }}>
                    Fillers: 2 detected ("like", "basically")
                  </span>
                </div>
              </div>

              {/* Right Column: AI Recommended Structure */}
              <div style={{
                background: 'rgba(15, 21, 35, 0.75)',
                border: '1px solid rgba(99, 102, 241, 0.35)',
                borderRadius: '18px',
                padding: '28px',
                backdropFilter: 'blur(12px)',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                boxShadow: '0 12px 32px rgba(0, 0, 0, 0.4)'
              }}>
                <div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px' }}>
                    <span style={{ fontSize: '11px', fontWeight: 700, color: '#818cf8', letterSpacing: '0.08em', textTransform: 'uppercase' }}>
                      AI RECOMMENDED STRUCTURE
                    </span>
                    <span style={{ fontSize: '11px', fontWeight: 700, color: '#34d399', background: 'rgba(16, 185, 129, 0.12)', padding: '3px 8px', borderRadius: '6px' }}>
                      Clarity Score: 98
                    </span>
                  </div>

                  <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 20px 0', display: 'flex', flexDirection: 'column', gap: '10px', fontSize: '13px', color: '#e2e8f0', lineHeight: 1.55 }}>
                    <li><strong style={{ color: '#818cf8' }}>1. Definition:</strong> Synchronous execution blocks; async yields control during high-latency calls.</li>
                    <li><strong style={{ color: '#818cf8' }}>2. Mechanism:</strong> Single-threaded asyncio event loop registers coroutines without OS-thread overhead.</li>
                    <li><strong style={{ color: '#818cf8' }}>3. Workload:</strong> Asyncio for I/O; multiprocessing for CPU-bound tasks to bypass the GIL.</li>
                    <li><strong style={{ color: '#818cf8' }}>4. Production Example:</strong> Switching from sync requests to httpx cut p99 latency from 420ms to 65ms.</li>
                  </ul>
                </div>

                <div style={{ display: 'flex', justifyContent: 'flex-end', paddingTop: '16px', borderTop: '1px solid rgba(255, 255, 255, 0.05)' }}>
                  <button
                    onClick={handleCopyModelAnswer}
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '6px',
                      background: 'rgba(99, 102, 241, 0.15)',
                      border: '1px solid rgba(99, 102, 241, 0.3)',
                      color: '#c7d2fe',
                      padding: '6px 14px',
                      borderRadius: '9999px',
                      fontSize: '12px',
                      fontWeight: 600,
                      cursor: 'pointer',
                      transition: 'all 0.2s'
                    }}
                  >
                    {copiedAnswer ? <Check size={14} color="#34d399" /> : <Copy size={14} />}
                    <span>{copiedAnswer ? 'Copied' : 'Copy Structure'}</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ========================================================
            8. SECTION: Practice What Matters to You (100+ Tracks)
        ======================================================== */}
        <section style={{ padding: '70px 0', position: 'relative' }}>
          <div className="container">
            <div style={{ textAlign: 'center', maxWidth: '780px', margin: '0 auto 40px' }}>
              <span style={{
                fontSize: '11px',
                fontWeight: 700,
                letterSpacing: '0.12em',
                textTransform: 'uppercase',
                color: '#38bdf8',
                display: 'block',
                marginBottom: '10px'
              }}>
                DOMAIN COVERAGE
              </span>
              <h2 style={{ fontSize: 'clamp(28px, 4vw, 42px)', fontWeight: 800, color: '#ffffff', letterSpacing: '-0.025em', marginBottom: '12px' }}>
                Practice What Matters to You
              </h2>
              <p style={{ fontSize: '15px', color: '#94a3b8', margin: 0 }}>
                Choose from 100+ role-calibrated tracks designed by hiring leaders.
              </p>
            </div>

            {/* 10 Track Cards (5x2) */}
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
              gap: '16px'
            }}>
              {domainTracks.map((track, idx) => {
                const Icon = track.icon;
                return (
                  <div
                    key={idx}
                    onClick={() => handleStartPractice(track.title)}
                    style={{
                      background: 'rgba(15, 21, 35, 0.65)',
                      border: '1px solid rgba(255, 255, 255, 0.06)',
                      borderRadius: '14px',
                      padding: '20px',
                      backdropFilter: 'blur(12px)',
                      cursor: 'pointer',
                      transition: 'all 0.25s ease',
                      display: 'flex',
                      flexDirection: 'column',
                      justifyContent: 'space-between'
                    }}
                    className="glow-card-hover"
                  >
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '14px' }}>
                      <div style={{ width: '32px', height: '32px', display: 'flex', alignItems: 'center', justifyContent: 'flex-start' }}>
                        <Icon size={18} color={track.color} />
                      </div>
                      <span style={{ fontSize: '11px', color: '#64748b' }}>{track.count}</span>
                    </div>

                    <div>
                      <h4 style={{ fontSize: '14px', fontWeight: 700, color: '#ffffff', marginBottom: '4px' }}>
                        {track.title}
                      </h4>
                      <p style={{ fontSize: '11.5px', color: '#64748b', margin: 0, lineHeight: 1.45 }}>
                        {track.skills}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* ========================================================
            9. SECTION: Interactive Simulation Environment (Live Room Preview)
        ======================================================== */}
        <section style={{ padding: '70px 0', position: 'relative' }}>
          <div className="container">
            <div style={{ textAlign: 'center', maxWidth: '780px', margin: '0 auto 40px' }}>
              <span style={{
                fontSize: '11px',
                fontWeight: 700,
                letterSpacing: '0.12em',
                textTransform: 'uppercase',
                color: '#818cf8',
                display: 'block',
                marginBottom: '10px'
              }}>
                LIVE INTERVIEW ROOM
              </span>
              <h2 style={{ fontSize: 'clamp(28px, 4vw, 42px)', fontWeight: 800, color: '#ffffff', letterSpacing: '-0.025em', marginBottom: '12px' }}>
                Interactive Simulation Environment
              </h2>
              <p style={{ fontSize: '15px', color: '#94a3b8', margin: 0 }}>
                A distraction-free, browser-native room engineered to replicate authentic hiring manager interviews.
              </p>
            </div>

            {/* Room Preview Card */}
            <div style={{
              background: 'rgba(13, 18, 30, 0.9)',
              border: '1px solid rgba(255, 255, 255, 0.08)',
              borderRadius: '24px',
              padding: '24px',
              boxShadow: '0 25px 60px rgba(0, 0, 0, 0.8)'
            }}>
              {/* Top Room Bar */}
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '12px', marginBottom: '20px', paddingBottom: '16px', borderBottom: '1px solid rgba(255, 255, 255, 0.06)' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <span style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#10b981', display: 'inline-block' }} />
                  <span style={{ fontSize: '13px', fontWeight: 700, color: '#f8fafc' }}>Question 3 of 5</span>
                  <span style={{ color: '#475569' }}>•</span>
                  <span style={{ fontSize: '12px', color: '#94a3b8' }}>System Architecture & Trade-Offs</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px', fontSize: '12px', color: '#64748b' }}>
                  <span>Camera: 1080p</span>
                  <span>•</span>
                  <span>Latency: 280ms</span>
                </div>
              </div>

              {/* Dual Video Feeds */}
              <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                gap: '16px',
                marginBottom: '16px'
              }}>
                {/* Host Feed */}
                <div style={{ position: 'relative', height: '220px', borderRadius: '16px', overflow: 'hidden' }}>
                  <img src="/interviewer_sarah.jpg" alt="Dr. Sarah Vance" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                  <div style={{ position: 'absolute', bottom: '10px', left: '10px', background: 'rgba(0,0,0,0.65)', backdropFilter: 'blur(6px)', padding: '4px 10px', borderRadius: '6px', fontSize: '11px', color: '#fff', fontWeight: 600 }}>
                    Dr. Sarah Vance (AI Lead)
                  </div>
                </div>

                {/* Candidate Feed */}
                <div style={{ position: 'relative', height: '220px', borderRadius: '16px', overflow: 'hidden' }}>
                  <img src="/candidate_alex.jpg" alt="Candidate Alex" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                  <div style={{ position: 'absolute', bottom: '10px', left: '10px', background: 'rgba(0,0,0,0.65)', backdropFilter: 'blur(6px)', padding: '4px 10px', borderRadius: '6px', fontSize: '11px', color: '#fff', fontWeight: 600 }}>
                    Alex Chen (Candidate)
                  </div>
                  <div style={{ position: 'absolute', top: '10px', right: '10px', background: 'rgba(16, 185, 129, 0.2)', border: '1px solid rgba(16, 185, 129, 0.4)', padding: '3px 8px', borderRadius: '6px', fontSize: '10px', color: '#34d399', fontWeight: 700 }}>
                    Eye Contact: 94%
                  </div>
                </div>
              </div>

              {/* Bottom Caption / Controls Bar */}
              <div style={{
                background: 'rgba(0, 0, 0, 0.4)',
                borderRadius: '12px',
                padding: '12px 18px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                fontSize: '12.5px',
                color: '#cbd5e1'
              }}>
                <span>"How would you handle cache eviction and consensus when p99 latency spikes?"</span>
                <button
                  onClick={() => handleStartPractice()}
                  style={{
                    background: 'linear-gradient(135deg, #7c3aed 0%, #6366f1 100%)',
                    border: 'none',
                    color: '#fff',
                    borderRadius: '9999px',
                    padding: '8px 18px',
                    fontSize: '12px',
                    fontWeight: 600,
                    cursor: 'pointer'
                  }}
                >
                  Test Live Studio
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* ========================================================
            10. SECTION: Notice Continuous Growth With Every Session
        ======================================================== */}
        <section style={{ padding: '70px 0', position: 'relative' }}>
          <div className="container">
            <div style={{ textAlign: 'center', maxWidth: '780px', margin: '0 auto 40px' }}>
              <span style={{
                fontSize: '11px',
                fontWeight: 700,
                letterSpacing: '0.12em',
                textTransform: 'uppercase',
                color: '#34d399',
                display: 'block',
                marginBottom: '10px'
              }}>
                TRACK MEASURABLE PROGRESS
              </span>
              <h2 style={{ fontSize: 'clamp(28px, 4vw, 42px)', fontWeight: 800, color: '#ffffff', letterSpacing: '-0.025em', marginBottom: '12px' }}>
                Notice Continuous Growth With Every Session
              </h2>
              <p style={{ fontSize: '15px', color: '#94a3b8', margin: 0 }}>
                Longitudinal tracking transforms subjective interview feeling into quantifiable confidence.
              </p>
            </div>

            {/* Scorecard + Growth Trajectory Chart */}
            <div style={{
              background: 'rgba(15, 21, 35, 0.7)',
              border: '1px solid rgba(255, 255, 255, 0.07)',
              borderRadius: '24px',
              padding: '36px',
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
              gap: '40px',
              alignItems: 'center'
            }}>
              {/* Left Scorecard */}
              <div>
                <div style={{ display: 'flex', alignItems: 'baseline', gap: '12px', marginBottom: '20px' }}>
                  <span style={{ fontSize: '46px', fontWeight: 800, color: '#ffffff', lineHeight: 1 }}>82</span>
                  <span style={{ fontSize: '13px', color: '#64748b' }}>/ 100 Current Readiness Score</span>
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', marginBottom: '24px' }}>
                  {[
                    { name: 'System Design & Logic', val: 86 },
                    { name: 'Structured Delivery (STAR)', val: 84 },
                    { name: 'Speech Cadence (WPM)', val: 81 },
                    { name: 'Executive Presence', val: 85 }
                  ].map((bar, idx) => (
                    <div key={idx}>
                      <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '12px', marginBottom: '4px', color: '#cbd5e1' }}>
                        <span>{bar.name}</span>
                        <span style={{ fontWeight: 700 }}>{bar.val}%</span>
                      </div>
                      <div style={{ width: '100%', height: '5px', background: 'rgba(255, 255, 255, 0.06)', borderRadius: '3px' }}>
                        <div style={{ width: `${bar.val}%`, height: '100%', background: '#6366f1', borderRadius: '3px' }} />
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Right Trajectory Graph */}
              <div style={{
                background: 'rgba(10, 14, 24, 0.8)',
                border: '1px solid rgba(255, 255, 255, 0.05)',
                borderRadius: '16px',
                padding: '24px'
              }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '11px', marginBottom: '16px' }}>
                  <span style={{ color: '#cbd5e1' }}>Readiness Trajectory (Last 5 Sessions)</span>
                  <span style={{ color: '#38bdf8', fontWeight: 600 }}>Target: 85 Benchmark</span>
                </div>

                {/* SVG Graph */}
                <div style={{ width: '100%', height: '110px' }}>
                  <svg viewBox="0 0 400 100" style={{ width: '100%', height: '100%' }}>
                    <path
                      d="M 20 80 C 80 72, 120 68, 160 55 C 200 48, 280 40, 380 25"
                      fill="none"
                      stroke="#818cf8"
                      strokeWidth="2.5"
                    />
                    <circle cx="20" cy="80" r="4" fill="#818cf8" />
                    <circle cx="100" cy="70" r="4" fill="#818cf8" />
                    <circle cx="190" cy="50" r="4" fill="#818cf8" />
                    <circle cx="280" cy="38" r="4" fill="#818cf8" />
                    <circle cx="380" cy="25" r="6" fill="#38bdf8" style={{ filter: 'drop-shadow(0 0 6px rgba(56, 189, 248, 0.8))' }} />
                  </svg>
                </div>

                <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '11px', color: '#64748b', marginTop: '10px', borderTop: '1px solid rgba(255, 255, 255, 0.05)', paddingTop: '8px' }}>
                  <span>R1 (68)</span>
                  <span>R2 (72)</span>
                  <span>R3 (76)</span>
                  <span>R4 (79)</span>
                  <span style={{ color: '#38bdf8', fontWeight: 700 }}>R5 (82)</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ========================================================
            11. SECTION: Everything Works Together (Tech Logos)
        ======================================================== */}
        <section style={{ padding: '60px 0', position: 'relative' }}>
          <div className="container" style={{ textAlign: 'center' }}>
            <span style={{
              fontSize: '11px',
              fontWeight: 700,
              letterSpacing: '0.12em',
              textTransform: 'uppercase',
              color: '#818cf8',
              display: 'block',
              marginBottom: '10px'
            }}>
              SEAMLESS INTEGRATION
            </span>
            <h2 style={{ fontSize: 'clamp(26px, 3.5vw, 38px)', fontWeight: 800, color: '#ffffff', letterSpacing: '-0.025em', marginBottom: '32px' }}>
              Everything Works Together
            </h2>

            <div style={{
              display: 'flex',
              flexWrap: 'wrap',
              justifyContent: 'center',
              alignItems: 'center',
              gap: '16px'
            }}>
              {techStack.map((tech, idx) => (
                <div
                  key={idx}
                  style={{
                    background: 'rgba(15, 21, 35, 0.65)',
                    border: '1px solid rgba(255, 255, 255, 0.07)',
                    borderRadius: '9999px',
                    padding: '10px 22px',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '10px',
                    backdropFilter: 'blur(8px)'
                  }}
                >
                  <span style={{ width: '8px', height: '8px', borderRadius: '50%', background: tech.color }} />
                  <span style={{ fontSize: '13px', fontWeight: 700, color: '#ffffff' }}>{tech.name}</span>
                  <span style={{ fontSize: '11px', color: '#64748b' }}>({tech.type})</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ========================================================
            12. SECTION: Our Responsible AI Commitments
        ======================================================== */}
        <section style={{ padding: '60px 0 80px', position: 'relative' }}>
          <div className="container">
            <div style={{ textAlign: 'center', maxWidth: '780px', margin: '0 auto 40px' }}>
              <span style={{
                fontSize: '11px',
                fontWeight: 700,
                letterSpacing: '0.12em',
                textTransform: 'uppercase',
                color: '#34d399',
                display: 'block',
                marginBottom: '10px'
              }}>
                ETHICAL AI
              </span>
              <h2 style={{ fontSize: 'clamp(28px, 4vw, 42px)', fontWeight: 800, color: '#ffffff', letterSpacing: '-0.025em', marginBottom: '12px' }}>
                Our Responsible AI Commitments
              </h2>
              <p style={{ fontSize: '15px', color: '#94a3b8', margin: 0 }}>
                Rigorous standards protecting candidate dignity, privacy, and fairness.
              </p>
            </div>

            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
              gap: '20px'
            }}>
              {ethicalPillars.map((p, idx) => {
                const Icon = p.icon;
                return (
                  <div
                    key={idx}
                    style={{
                      background: 'rgba(15, 21, 35, 0.65)',
                      border: '1px solid rgba(255, 255, 255, 0.06)',
                      borderRadius: '16px',
                      padding: '24px 22px',
                      backdropFilter: 'blur(12px)'
                    }}
                    className="glow-card-hover"
                  >
                    <div style={{ width: '32px', height: '32px', display: 'flex', alignItems: 'center', justifyContent: 'flex-start', marginBottom: '14px' }}>
                      <Icon size={20} color={p.color} strokeWidth={2} />
                    </div>
                    <h3 style={{ fontSize: '15px', fontWeight: 700, color: '#ffffff', marginBottom: '6px' }}>
                      {p.title}
                    </h3>
                    <p style={{ fontSize: '12px', color: '#64748b', margin: 0, lineHeight: 1.55 }}>
                      {p.desc}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* ========================================================
            13. SECTION: Bottom CTA Banner: Ready to Practice Smarter?
        ======================================================== */}
        <section style={{ padding: '60px 0 100px', position: 'relative' }}>
          <div className="container">
            <div style={{
              background: 'radial-gradient(ellipse 80% 60% at 50% -20%, rgba(99, 102, 241, 0.25), transparent 70%), linear-gradient(180deg, rgba(15, 21, 35, 0.7) 0%, rgba(10, 14, 24, 0.95) 100%)',
              border: '1px solid rgba(255, 255, 255, 0.08)',
              borderRadius: '28px',
              padding: '64px 32px',
              textAlign: 'center',
              position: 'relative',
              overflow: 'hidden',
              boxShadow: '0 30px 80px -20px rgba(0, 0, 0, 0.9), 0 0 60px rgba(99, 102, 241, 0.15)'
            }}>
              <div style={{ position: 'relative', zIndex: 2, maxWidth: '760px', margin: '0 auto' }}>
                <div style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '8px',
                  background: 'rgba(30, 27, 75, 0.8)',
                  border: '1px solid rgba(129, 140, 248, 0.3)',
                  borderRadius: '9999px',
                  padding: '6px 16px',
                  marginBottom: '22px'
                }}>
                  <span style={{ color: '#818cf8', fontWeight: 900, fontSize: '11px' }}>▌</span>
                  <span style={{ fontSize: '11px', fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase', color: '#c7d2fe' }}>
                    READY TO TEST YOUR READINESS?
                  </span>
                </div>

                <h2 style={{
                  fontSize: 'clamp(32px, 4.5vw, 48px)',
                  fontWeight: 800,
                  color: '#ffffff',
                  letterSpacing: '-0.025em',
                  lineHeight: 1.18,
                  marginBottom: '18px'
                }}>
                  Ready to Practice Smarter?
                </h2>

                <p style={{
                  fontSize: '15px',
                  color: '#cbd5e1',
                  lineHeight: 1.65,
                  maxWidth: '640px',
                  margin: '0 auto 36px'
                }}>
                  Join thousands of candidates who improved their readiness and landed offers at top tech companies.
                </p>

                <div style={{
                  display: 'flex',
                  flexWrap: 'wrap',
                  justifyContent: 'center',
                  alignItems: 'center',
                  gap: '16px'
                }}>
                  <button
                    onClick={() => handleStartPractice()}
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '8px',
                      background: 'linear-gradient(135deg, #7c3aed 0%, #6366f1 100%)',
                      color: '#ffffff',
                      border: 'none',
                      borderRadius: '9999px',
                      padding: '14px 28px',
                      fontSize: '14px',
                      fontWeight: 600,
                      cursor: 'pointer',
                      boxShadow: '0 8px 24px rgba(124, 58, 237, 0.45)',
                      transition: 'all 0.2s ease'
                    }}
                  >
                    <span>Start Practicing Free</span>
                    <ArrowRight size={16} />
                  </button>

                  <button
                    onClick={onNavigateToSimulations ? onNavigateToSimulations : () => handleStartPractice()}
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      background: 'rgba(255, 255, 255, 0.07)',
                      border: '1px solid rgba(255, 255, 255, 0.1)',
                      color: '#e2e8f0',
                      borderRadius: '9999px',
                      padding: '14px 26px',
                      fontSize: '14px',
                      fontWeight: 600,
                      cursor: 'pointer',
                      transition: 'all 0.2s ease'
                    }}
                  >
                    <span>Explore Simulations</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Global Footer */}
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
