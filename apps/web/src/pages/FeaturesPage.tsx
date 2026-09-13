import React, { useState } from 'react';
import {
  ArrowRight,
  CheckCircle2,
  Lock,
  Eye,
  Sliders,
  Compass,
  Layers,
  TrendingUp,
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
  Radio,
  FileText,
  Share2,
  Sparkles,
  Clock,
  Lightbulb,
  Volume2,
  Mic,
  Circle,
  Smile
} from 'lucide-react';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';
import { DemoVideoModal } from '../components/DemoVideoModal';
import { useAuth } from '../context/AuthContext';

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
  const { isAuthenticated } = useAuth();
  const [isDemoOpen, setIsDemoOpen] = useState(false);
  const [selectedEvalDimension, setSelectedEvalDimension] = useState(0);
  const [copiedAnswer, setCopiedAnswer] = useState(false);

  const handleStartPractice = (_role?: string) => {
    if (isAuthenticated) {
      window.location.hash = 'dashboard';
    } else {
      window.location.hash = 'signup';
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleCopyModelAnswer = () => {
    const text = `1. High-Level Definition: "Synchronous execution is blocking; asynchronous execution yields control while awaiting high-latency operations."\n2. Mechanism: "Python achieves this via the single-threaded asyncio event loop, registering coroutines rather than spinning OS-level threads."\n3. Workload Distinction: "Asyncio is ideal for I/O-bound workloads (HTTP, database calls), whereas CPU-bound operations require multiprocessing to bypass Python's GIL."\n4. Production Example: "In our microservice, switching from synchronous requests to httpx with asyncio cut p99 latency from 420ms to 65ms."`;
    navigator.clipboard.writeText(text);
    setCopiedAnswer(true);
    setTimeout(() => setCopiedAnswer(false), 2000);
  };

  // 1. One Platform for Your Complete Interview Journey (6 Stage Architecture Cards)
  const journeySteps = [
    {
      stage: 'STAGE 01',
      title: 'AI CV Analysis',
      desc: 'Deep semantic parsing of your resume across experience veracity, core competencies, tier-1 project deliverables, and strategic career trajectory.',
      icon: FileText,
      accentColor: '#818cf8',
      tags: ['Experience', 'Skills Mapping', 'Projects', 'Certifications'],
      actionLabel: 'Explore CV Analysis >',
      href: '#cv-analysis'
    },
    {
      stage: 'STAGE 02',
      title: 'AI Career Assessment',
      desc: 'Evaluates seniority alignment, target role expectations, and potential knowledge blind spots before scheduling live simulation runs.',
      icon: Compass,
      accentColor: '#38bdf8',
      tags: ['Background', 'Role Scope', 'Target Level'],
      actionLabel: 'Learn About Assessment >',
      href: '#career-assessment'
    },
    {
      stage: 'STAGE 03',
      title: 'Personalized Interviews',
      desc: 'Algorithmically synthesizes high-fidelity rounds matching real question distributions from Fortune 100 tech giants and unicorns.',
      icon: Sliders,
      accentColor: '#06b6d4',
      tags: ['AI/ML Engineer: 98% Match', 'Custom Rubrics'],
      actionLabel: 'Explore Interviews >',
      href: '#simulations'
    },
    {
      stage: 'STAGE 04',
      title: 'AI Interview Practice',
      desc: 'Authentic conversational pressure in calibrated 5-question rounds with dynamic audio synthesizers, video telemetry, and timing controls.',
      icon: Video,
      accentColor: '#818cf8',
      tags: ['5-Question Format', 'Camera + Mic', 'Live AI Avatar'],
      actionLabel: 'See Interview Experience >',
      href: '#interview-practice'
    },
    {
      stage: 'STAGE 05',
      title: 'Multimodal AI Feedback',
      desc: 'Four simultaneous diagnostic streams: architectural reasoning, clarity of thought, verbal rhythm, and physical camera framing.',
      icon: Sliders,
      accentColor: '#c084fc',
      tags: ['Technical (88)', 'Comm (84)', 'Speech (81)', 'Vision (85)'],
      actionLabel: 'Explore AI Evaluation >',
      href: '#multimodal-feedback'
    },
    {
      stage: 'STAGE 06',
      title: 'Progress & Improvement',
      desc: 'Longitudinal delta charts, tactical remediation tasks, and competency scorecards tracking your leap from 68 to 82+ readiness.',
      icon: BarChart3,
      accentColor: '#38bdf8',
      tags: ['Readiness: 82', '+14pt Growth', 'Target Actions'],
      actionLabel: 'Track Your Progress >',
      href: '#progress-tracking'
    }
  ];

  // 2. Evaluation Engine 5 Dimensions (Matching Reference Design)
  const evalDimensions = [
    {
      id: 'accuracy',
      title: 'Technical Accuracy',
      icon: CheckCircle2,
      score: '92%',
      scoreColor: 'cyan'
    },
    {
      id: 'logic',
      title: 'Problem Solving Logic',
      icon: Compass,
      score: '88%',
      scoreColor: 'purple'
    },
    {
      id: 'relevance',
      title: 'Direct Relevance',
      icon: Share2,
      score: '89%',
      scoreColor: 'cyan'
    },
    {
      id: 'completeness',
      title: 'Completeness & Edge Cases',
      icon: Layers,
      score: '75%',
      scoreColor: 'purple'
    },
    {
      id: 'reasoning',
      title: 'Technical Reasoning & Trade-offs',
      icon: Sliders,
      score: '83%',
      scoreColor: 'purple'
    }
  ];

  // 3. Communication Matrix 5 Metrics
  const commMetrics = [
    { score: 86, label: 'Clarity Index', color: '#ffffff' },
    { score: 82, label: 'Structural Flow', color: '#ffffff' },
    { score: 84, label: 'Conciseness', color: '#38bdf8' },
    { score: 88, label: 'Relevance', color: '#ffffff' },
    { score: 81, label: 'Explanation Quality', color: '#818cf8' }
  ];

  // 4. Communication Structural Cadence (5 Steps)
  const structuralCadence = [
    { step: 1, title: 'Question Target', desc: 'Acknowledge & frame scope' },
    { step: 2, title: 'Main Thesis', desc: 'Direct architectural premise' },
    { step: 3, title: 'Explanation', desc: 'Technical trade-off rationale' },
    { step: 4, title: 'Concrete Example', desc: 'Real production metric impact' },
    { step: 5, title: 'Conclusion', desc: 'Summary takeaway return' }
  ];

  // 5. Curated Curriculum Tracks (10 Tracks Matching Screenshot)
  const curatedTracks = [
    { title: 'Software Eng.', meta: '5 Questions • 20 mins', icon: Code, color: '#818cf8' },
    { title: 'AI / Machine Learning', meta: 'Strong Match', isHighlight: true, highlightColor: '#38bdf8', icon: Globe, color: '#a855f7' },
    { title: 'Data Science', meta: '5 Questions • 25 mins', icon: Share2, color: '#38bdf8' },
    { title: 'Data Engineering', meta: '5 Questions • 25 mins', icon: Layers, color: '#818cf8' },
    { title: 'Backend Systems', meta: '5 Questions • 25 mins', icon: Layers, color: '#94a3b8' },
    { title: 'Frontend UI/UX', meta: '5 Questions • 20 mins', icon: Smartphone, color: '#38bdf8' },
    { title: 'Flutter & Mobile', meta: '5 Questions • 20 mins', icon: Smartphone, color: '#818cf8' },
    { title: 'DevOps / Cloud', meta: '5 Questions • 24 mins', icon: Shield, color: '#38bdf8' },
    { title: 'System Design', meta: 'High Priority', isHighlight: true, highlightColor: '#c084fc', icon: Sliders, color: '#c084fc' },
    { title: 'Product & HR', meta: '5 Questions • 15 mins', icon: Users, color: '#38bdf8' }
  ];

  // 5. Cohesive Steps (Section 11)
  const cohesiveSteps = [
    { num: '1', name: 'Your CV', sub: 'Raw Credentials', icon: FileText, color: '#38bdf8' },
    { num: '2', name: 'AI Profile', sub: 'Skill Extraction', icon: Sparkles, color: '#818cf8' },
    { num: '3', name: 'Assessment', sub: 'Target Calibration', icon: Compass, color: '#c084fc' },
    { num: '4', name: 'Curated Match', sub: 'Custom Mock', icon: Sliders, color: '#38bdf8' },
    { num: '5', name: '5-Q Practice', sub: 'Live Avatar', icon: Video, color: '#a855f7', isCurrent: true },
    { num: '6', name: 'Multimodal', sub: '4-Pillar Telemetry', icon: Radio, color: '#34d399' },
    { num: '7', name: 'AI Feedback', sub: 'Actionable Rubrics', icon: MessageSquare, color: '#818cf8' },
    { num: '8', name: 'Practice Delta', sub: 'Measurable Lift', icon: TrendingUp, color: '#38bdf8' }
  ];

  // 6. Ethical Pillars (Section 12)
  const ethicalPillars = [
    {
      icon: FileText,
      color: '#38bdf8',
      title: 'Data Transparency',
      desc: 'Explainability logs with exact timestamps for all scoring decisions.'
    },
    {
      icon: Eye,
      color: '#a855f7',
      title: 'Observable Signals',
      desc: 'Evaluates physical framing and posture without biometric categorization.'
    },
    {
      icon: Smile,
      color: '#818cf8',
      title: 'No Profiling',
      desc: 'Strictly assesses professional readiness and communication structure.'
    },
    {
      icon: Lock,
      color: '#34d399',
      title: 'User Data Control',
      desc: 'Encrypted session recordings with single-click permanent purge power.'
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
                background: 'rgba(99, 102, 241, 0.12)',
                border: '1px solid rgba(99, 102, 241, 0.3)',
                borderRadius: '9999px',
                padding: '6px 18px',
                fontSize: '11px',
                fontWeight: 800,
                letterSpacing: '0.12em',
                textTransform: 'uppercase',
                color: '#c7d2fe'
              }}>
                <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#818cf8', display: 'inline-block' }} />
                POWERFUL AI INTERVIEW TOOLS
              </span>
            </div>

            <h1 style={{
              fontSize: 'clamp(38px, 5.2vw, 60px)',
              fontWeight: 800,
              letterSpacing: '-0.03em',
              lineHeight: 1.15,
              marginBottom: '20px',
              maxWidth: '860px',
              margin: '0 auto 20px'
            }}>
              Everything You Need to Become{' '}
              <span style={{ color: '#38bdf8' }}>Interview</span>{' '}
              <span style={{
                background: 'linear-gradient(135deg, #c084fc 0%, #a855f7 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                display: 'inline-block'
              }}>
                Ready
              </span>
            </h1>

            <p style={{
              fontSize: '16px',
              color: '#94a3b8',
              lineHeight: 1.65,
              maxWidth: '720px',
              margin: '0 auto 34px'
            }}>
              From CV analysis to realistic conversational AI simulations and 4-pillar multimodal diagnostics, Inprep AI gives you the precision telemetry to master high-stakes executive interviews.
            </p>

            <div style={{
              display: 'flex',
              flexWrap: 'wrap',
              justifyContent: 'center',
              gap: '16px',
              marginBottom: '36px'
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
                <span>Start Preparing</span>
                <ArrowRight size={16} />
              </button>

              <button
                onClick={() => {
                  if (onNavigateToSimulations) onNavigateToSimulations();
                }}
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  background: 'rgba(255, 255, 255, 0.05)',
                  border: '1px solid rgba(255, 255, 255, 0.12)',
                  color: '#e2e8f0',
                  borderRadius: '9999px',
                  padding: '14px 28px',
                  fontSize: '15px',
                  fontWeight: 600,
                  cursor: 'pointer',
                  transition: 'all 0.2s ease'
                }}
              >
                <span>Explore Interview Library</span>
              </button>
            </div>

            {/* 5 Quick-Jump Category Ribbon Pills */}
            <div style={{
              display: 'flex',
              flexWrap: 'wrap',
              justifyContent: 'center',
              alignItems: 'center',
              gap: '10px',
              paddingTop: '20px',
              color: '#94a3b8'
            }}>
              {[
                { label: 'CV Analysis', icon: FileText, href: '#cv-analysis', color: '#818cf8' },
                { label: 'AI Career Assessment', icon: Compass, href: '#career-assessment', color: '#38bdf8' },
                { label: '5-Question Interviews', icon: MessageSquare, href: '#simulation-rounds', color: '#06b6d4' },
                { label: 'Multimodal Feedback', icon: Sliders, href: '#multimodal-feedback', color: '#c084fc' },
                { label: 'Progress Tracking', icon: TrendingUp, href: '#progress-tracking', color: '#34d399' }
              ].map((pill, pIdx) => {
                const PillIcon = pill.icon;
                return (
                  <a
                    key={pIdx}
                    href={pill.href}
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '8px',
                      background: 'rgba(15, 21, 35, 0.75)',
                      border: '1px solid rgba(255, 255, 255, 0.08)',
                      borderRadius: '9999px',
                      padding: '8px 16px',
                      fontSize: '12px',
                      fontWeight: 600,
                      color: '#cbd5e1',
                      textDecoration: 'none',
                      transition: 'all 0.2s ease'
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.borderColor = pill.color;
                      e.currentTarget.style.color = '#ffffff';
                      e.currentTarget.style.transform = 'translateY(-1px)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.08)';
                      e.currentTarget.style.color = '#cbd5e1';
                      e.currentTarget.style.transform = 'translateY(0)';
                    }}
                  >
                    <PillIcon size={14} color={pill.color} />
                    <span>{pill.label}</span>
                  </a>
                );
              })}
            </div>
          </div>
        </section>

        {/* ========================================================
            2. SECTION: SYSTEM ARCHITECTURE — One Platform for Your Complete Interview Journey
        ======================================================== */}
        <section id="cv-analysis" style={{ padding: '75px 0', position: 'relative' }}>
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
                  fontWeight: 800,
                  letterSpacing: '0.12em',
                  textTransform: 'uppercase',
                  color: '#06b6d4',
                  display: 'block',
                  marginBottom: '10px'
                }}>
                  SYSTEM ARCHITECTURE
                </span>
                <h2 style={{ fontSize: 'clamp(28px, 3.8vw, 42px)', fontWeight: 800, color: '#ffffff', letterSpacing: '-0.025em', margin: 0 }}>
                  One Platform for Your Complete Interview Journey
                </h2>
              </div>
              <p style={{ fontSize: '14px', color: '#94a3b8', maxWidth: '440px', margin: 0, lineHeight: 1.6 }}>
                A coherent end-to-end preparation suite that calibrates your technical depth, strategic speaking, and visual poise before elite hiring committees.
              </p>
            </div>

            {/* 3x2 Grid: 6 Stage Cards */}
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
              gap: '20px'
            }}>
              {journeySteps.map((card) => {
                const Icon = card.icon;
                return (
                  <div
                    key={card.stage}
                    style={{
                      background: 'rgba(15, 21, 35, 0.65)',
                      border: '1px solid rgba(255, 255, 255, 0.07)',
                      borderRadius: '18px',
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
                      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '18px' }}>
                        <span style={{ fontSize: '11px', fontWeight: 800, color: '#64748b', letterSpacing: '0.08em', fontFamily: 'JetBrains Mono, monospace' }}>
                          {card.stage}
                        </span>
                        <div style={{
                          width: '34px',
                          height: '34px',
                          borderRadius: '10px',
                          background: 'rgba(255, 255, 255, 0.04)',
                          border: '1px solid rgba(255, 255, 255, 0.06)',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center'
                        }}>
                          <Icon size={16} color={card.accentColor} />
                        </div>
                      </div>

                      <h3 style={{ fontSize: '18px', fontWeight: 800, color: '#ffffff', marginBottom: '10px', letterSpacing: '-0.01em' }}>
                        {card.title}
                      </h3>

                      <p style={{ fontSize: '13px', color: '#94a3b8', lineHeight: 1.6, marginBottom: '20px' }}>
                        {card.desc}
                      </p>

                      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px', marginBottom: '22px' }}>
                        {card.tags.map((tag, tIdx) => {
                          const isSpecial = tag.includes('98% Match');
                          return (
                            <span
                              key={tIdx}
                              style={{
                                background: isSpecial ? 'rgba(6, 182, 212, 0.15)' : 'rgba(255, 255, 255, 0.04)',
                                border: isSpecial ? '1px solid rgba(6, 182, 212, 0.35)' : '1px solid rgba(255, 255, 255, 0.06)',
                                color: isSpecial ? '#67e8f9' : '#cbd5e1',
                                fontSize: '11px',
                                fontWeight: isSpecial ? 700 : 500,
                                padding: '3px 8px',
                                borderRadius: '5px'
                              }}
                            >
                              {tag}
                            </span>
                          );
                        })}
                      </div>
                    </div>

                    <div style={{ borderTop: '1px solid rgba(255, 255, 255, 0.06)', paddingTop: '14px' }}>
                      <a
                        href={card.href}
                        onClick={(e) => {
                          if (card.href === '#simulations' && onNavigateToSimulations) {
                            e.preventDefault();
                            onNavigateToSimulations();
                          }
                        }}
                        style={{
                          color: card.accentColor,
                          fontSize: '12px',
                          fontWeight: 700,
                          textDecoration: 'none',
                          display: 'inline-flex',
                          alignItems: 'center',
                          gap: '4px',
                          transition: 'opacity 0.2s'
                        }}
                      >
                        <span>{card.actionLabel}</span>
                      </a>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* ========================================================
            3. SECTION: Understand the Quality of Your Answers
        ======================================================== */}
        <section id="multimodal-feedback" style={{ padding: '70px 0', position: 'relative' }}>
          <div className="container">
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))',
              gap: '40px',
              alignItems: 'center'
            }}>
              {/* Left Column: 5 Selectable Dimension Cards */}
              <div>
                <div style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '6px',
                  padding: '5px 12px',
                  borderRadius: '9999px',
                  background: 'rgba(255, 255, 255, 0.04)',
                  border: '1px solid rgba(255, 255, 255, 0.08)',
                  marginBottom: '14px'
                }}>
                  <Sparkles size={12} color="#818cf8" />
                  <span style={{
                    fontSize: '10.5px',
                    fontWeight: 700,
                    letterSpacing: '0.1em',
                    textTransform: 'uppercase',
                    color: '#94a3b8'
                  }}>
                    AI EVALUATION
                  </span>
                </div>

                <h2 style={{ fontSize: 'clamp(28px, 3.8vw, 40px)', fontWeight: 800, color: '#ffffff', letterSpacing: '-0.025em', lineHeight: 1.2, marginBottom: '14px' }}>
                  Understand the Quality of Your Answers
                </h2>

                <p style={{ fontSize: '14px', color: '#94a3b8', lineHeight: 1.65, marginBottom: '28px', maxWidth: '480px' }}>
                  Inprep AI evaluates your answers beyond simply marking them right or wrong. Our neural evaluators break apart algorithmic complexity, structural rigor, and technical maturity against Principal-level standards.
                </p>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                  {evalDimensions.map((dim, idx) => {
                    const isSelected = selectedEvalDimension === idx;
                    const Icon = dim.icon;
                    return (
                      <div
                        key={dim.id}
                        onClick={() => setSelectedEvalDimension(idx)}
                        style={{
                          background: isSelected ? 'rgba(20, 28, 48, 0.85)' : 'rgba(15, 21, 35, 0.65)',
                          border: isSelected ? '1px solid rgba(99, 102, 241, 0.45)' : '1px solid rgba(255, 255, 255, 0.06)',
                          borderRadius: '12px',
                          padding: '14px 18px',
                          cursor: 'pointer',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'space-between',
                          gap: '12px',
                          transition: 'all 0.2s ease',
                          boxShadow: isSelected ? '0 6px 20px rgba(99, 102, 241, 0.15)' : 'none'
                        }}
                      >
                        <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                          <Icon size={17} color={isSelected ? '#818cf8' : '#a855f7'} />
                          <span style={{ fontSize: '13.5px', fontWeight: 600, color: '#f1f5f9' }}>
                            {dim.title}
                          </span>
                        </div>

                        <span style={{
                          fontSize: '11.5px',
                          fontWeight: 700,
                          padding: '3px 8px',
                          borderRadius: '6px',
                          background: dim.scoreColor === 'cyan' ? 'rgba(56, 189, 248, 0.12)' : 'rgba(168, 85, 247, 0.12)',
                          color: dim.scoreColor === 'cyan' ? '#38bdf8' : '#c084fc'
                        }}>
                          {dim.score}
                        </span>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Right Column: Question 2 Evaluation Card */}
              <div style={{
                background: 'rgba(14, 20, 32, 0.85)',
                border: '1px solid rgba(255, 255, 255, 0.08)',
                borderRadius: '20px',
                padding: '32px',
                backdropFilter: 'blur(16px)',
                boxShadow: '0 20px 50px rgba(0, 0, 0, 0.6), 0 0 30px rgba(99, 102, 241, 0.1)'
              }}>
                {/* Header */}
                <div style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'flex-start',
                  marginBottom: '26px',
                  paddingBottom: '20px',
                  borderBottom: '1px solid rgba(255, 255, 255, 0.06)'
                }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
                    <div style={{
                      width: '42px',
                      height: '42px',
                      borderRadius: '50%',
                      background: 'rgba(168, 85, 247, 0.15)',
                      border: '1px solid rgba(168, 85, 247, 0.3)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: '#c084fc',
                      fontSize: '15px',
                      fontWeight: 800,
                      fontFamily: 'monospace',
                      flexShrink: 0
                    }}>
                      {'{ }'}
                    </div>
                    <div>
                      <div style={{ fontSize: '17px', fontWeight: 700, color: '#ffffff' }}>
                        Question 2 Evaluation
                      </div>
                      <div style={{ fontSize: '12.5px', color: '#94a3b8', marginTop: '2px' }}>
                        Distributed Caching Invalidation Protocol
                      </div>
                    </div>
                  </div>
                  <div style={{ textAlign: 'right' }}>
                    <div style={{ fontSize: '32px', fontWeight: 800, color: '#ffffff', lineHeight: 1 }}>
                      86<span style={{ fontSize: '15px', color: '#64748b' }}>/100</span>
                    </div>
                    <div style={{
                      fontSize: '9.5px',
                      color: '#38bdf8',
                      fontWeight: 700,
                      letterSpacing: '0.08em',
                      textTransform: 'uppercase',
                      marginTop: '5px'
                    }}>
                      TECHNICAL SCORE
                    </div>
                  </div>
                </div>

                {/* 3 Progress Bars */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: '18px', marginBottom: '26px' }}>
                  {[
                    {
                      label: 'Algorithmic Efficiency & Concurrency',
                      scoreText: '91% • Strong',
                      percent: 91,
                      fill: 'linear-gradient(90deg, #6366f1, #38bdf8)'
                    },
                    {
                      label: 'Distributed State Consistency',
                      scoreText: '84% • Proficient',
                      percent: 84,
                      fill: 'linear-gradient(90deg, #8b5cf6, #c084fc)'
                    },
                    {
                      label: 'CAP Theorem & System Trade-offs',
                      scoreText: '83% • Proficient',
                      percent: 83,
                      fill: 'linear-gradient(90deg, #0284c7, #38bdf8)'
                    }
                  ].map((bar, idx) => (
                    <div key={idx}>
                      <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '12.5px', marginBottom: '7px' }}>
                        <span style={{ color: '#cbd5e1', fontWeight: 500 }}>{bar.label}</span>
                        <span style={{ color: '#94a3b8', fontSize: '12px', fontWeight: 600 }}>{bar.scoreText}</span>
                      </div>
                      <div style={{ width: '100%', height: '6px', background: 'rgba(255, 255, 255, 0.07)', borderRadius: '3px', overflow: 'hidden' }}>
                        <div style={{ width: `${bar.percent}%`, height: '100%', background: bar.fill, borderRadius: '3px' }} />
                      </div>
                    </div>
                  ))}
                </div>

                {/* Evaluation Synthesis Callout */}
                <div style={{
                  background: 'rgba(255, 255, 255, 0.02)',
                  border: '1px solid rgba(255, 255, 255, 0.06)',
                  borderRadius: '12px',
                  padding: '16px 18px'
                }}>
                  <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '6px',
                    fontSize: '10.5px',
                    fontWeight: 700,
                    color: '#94a3b8',
                    textTransform: 'uppercase',
                    letterSpacing: '0.08em',
                    marginBottom: '8px'
                  }}>
                    <Clock size={12} color="#818cf8" />
                    <span>EVALUATION SYNTHESIS</span>
                  </div>
                  <p style={{
                    fontSize: '12.5px',
                    color: '#94a3b8',
                    lineHeight: 1.6,
                    margin: 0
                  }}>
                    “Demonstrated excellent knowledge of Redis cluster pub/sub race conditions. To elevate to Staff-level, explicitly account for two-phase commit overhead under cross-region network partitions.”
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ========================================================
            4. SECTION: Improve How You Explain Your Ideas (Communication Matrix)
        ======================================================== */}
        <section id="communication-matrix" style={{ padding: '40px 0 70px', position: 'relative' }}>
          <div className="container">
            <div style={{
              background: 'rgba(13, 19, 32, 0.85)',
              border: '1px solid rgba(255, 255, 255, 0.08)',
              borderRadius: '24px',
              padding: '44px 40px',
              backdropFilter: 'blur(16px)',
              boxShadow: '0 25px 60px rgba(0, 0, 0, 0.6)'
            }}>
              {/* Badge */}
              <div style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '6px',
                padding: '5px 12px',
                borderRadius: '9999px',
                background: 'rgba(255, 255, 255, 0.04)',
                border: '1px solid rgba(255, 255, 255, 0.08)',
                marginBottom: '14px'
              }}>
                <MessageSquare size={12} color="#818cf8" />
                <span style={{
                  fontSize: '10.5px',
                  fontWeight: 700,
                  letterSpacing: '0.1em',
                  textTransform: 'uppercase',
                  color: '#94a3b8'
                }}>
                  COMMUNICATION MATRIX
                </span>
              </div>

              {/* Header */}
              <h2 style={{ fontSize: 'clamp(28px, 3.8vw, 38px)', fontWeight: 800, color: '#ffffff', letterSpacing: '-0.025em', lineHeight: 1.2, marginBottom: '12px' }}>
                Improve How You Explain Your Ideas
              </h2>

              <p style={{ fontSize: '14px', color: '#94a3b8', lineHeight: 1.65, maxWidth: '740px', marginBottom: '32px' }}>
                Executive hiring managers evaluate your ability to distill complex architectural narratives without meandering. Our communication engine verifies structural cohesion from initial hypothesis to metric conclusion.
              </p>

              {/* 5 Big Score Boxes */}
              <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(140px, 1fr))',
                gap: '14px',
                marginBottom: '28px'
              }}>
                {commMetrics.map((m, idx) => (
                  <div
                    key={idx}
                    style={{
                      background: 'rgba(18, 24, 40, 0.5)',
                      border: '1px solid rgba(255, 255, 255, 0.06)',
                      borderRadius: '14px',
                      padding: '22px 14px',
                      textAlign: 'center'
                    }}
                  >
                    <div style={{ fontSize: '36px', fontWeight: 800, color: m.color, letterSpacing: '-0.02em', lineHeight: 1, marginBottom: '8px' }}>
                      {m.score}
                    </div>
                    <div style={{ fontSize: '12px', color: '#94a3b8', fontWeight: 500 }}>
                      {m.label}
                    </div>
                  </div>
                ))}
              </div>

              {/* RECOMMENDED ANSWER STRUCTURAL CADENCE Container */}
              <div style={{
                background: 'rgba(10, 15, 26, 0.7)',
                border: '1px solid rgba(255, 255, 255, 0.06)',
                borderRadius: '16px',
                padding: '22px 24px',
                marginBottom: '18px'
              }}>
                <div style={{
                  fontSize: '10.5px',
                  fontWeight: 700,
                  letterSpacing: '0.08em',
                  textTransform: 'uppercase',
                  color: '#64748b',
                  marginBottom: '16px'
                }}>
                  RECOMMENDED ANSWER STRUCTURAL CADENCE
                </div>

                <div style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fit, minmax(160px, 1fr))',
                  gap: '12px'
                }}>
                  {structuralCadence.map((c) => (
                    <div
                      key={c.step}
                      style={{
                        background: 'rgba(18, 25, 42, 0.6)',
                        border: '1px solid rgba(255, 255, 255, 0.05)',
                        borderRadius: '12px',
                        padding: '16px 12px',
                        textAlign: 'center'
                      }}
                    >
                      <div style={{
                        width: '22px',
                        height: '22px',
                        borderRadius: '50%',
                        background: 'rgba(168, 85, 247, 0.25)',
                        border: '1px solid rgba(168, 85, 247, 0.4)',
                        color: '#c084fc',
                        fontSize: '11px',
                        fontWeight: 800,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        margin: '0 auto 10px'
                      }}>
                        {c.step}
                      </div>
                      <div style={{ fontSize: '13px', fontWeight: 700, color: '#ffffff', marginBottom: '4px' }}>
                        {c.title}
                      </div>
                      <div style={{ fontSize: '11px', color: '#94a3b8', lineHeight: 1.4 }}>
                        {c.desc}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Executive Communication Tip Callout */}
              <div style={{
                background: 'rgba(10, 15, 26, 0.7)',
                border: '1px solid rgba(255, 255, 255, 0.06)',
                borderRadius: '14px',
                padding: '16px 20px',
                display: 'flex',
                alignItems: 'flex-start',
                gap: '14px'
              }}>
                <Lightbulb size={18} color="#c084fc" style={{ flexShrink: 0, marginTop: '2px' }} />
                <div>
                  <div style={{ fontSize: '13px', fontWeight: 700, color: '#ffffff', marginBottom: '3px' }}>
                    Executive Communication Tip
                  </div>
                  <div style={{ fontSize: '12.5px', color: '#94a3b8', lineHeight: 1.55 }}>
                    When addressing Staff+ interviewers, front-load your answer with the design constraint trade-off before walking through step-by-step implementation. It immediately signals high organizational agency.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ========================================================
            5. SECTION: Improve Your Verbal Delivery (Speech Intelligence)
        ======================================================== */}
        <section id="speech-telemetry" style={{ padding: '50px 0 70px', position: 'relative' }}>
          <div className="container">
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))',
              gap: '40px',
              alignItems: 'center'
            }}>
              {/* Left Column: Audio Spectral Telemetry HUD */}
              <div style={{
                background: 'rgba(14, 20, 32, 0.85)',
                border: '1px solid rgba(255, 255, 255, 0.08)',
                borderRadius: '20px',
                padding: '24px',
                backdropFilter: 'blur(16px)',
                boxShadow: '0 20px 45px rgba(0, 0, 0, 0.6)'
              }}>
                {/* Header */}
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '18px' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <span style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#ef4444', display: 'inline-block', boxShadow: '0 0 8px #ef4444' }} />
                    <span style={{ fontSize: '11px', fontWeight: 700, color: '#94a3b8', letterSpacing: '0.08em', textTransform: 'uppercase' }}>
                      AUDIO SPECTRAL TELEMETRY
                    </span>
                  </div>
                  <span style={{
                    fontSize: '10.5px',
                    fontWeight: 700,
                    color: '#38bdf8',
                    background: 'rgba(56, 189, 248, 0.12)',
                    border: '1px solid rgba(56, 189, 248, 0.25)',
                    padding: '3px 8px',
                    borderRadius: '6px'
                  }}>
                    High-Fidelity 48kHz
                  </span>
                </div>

                {/* Waveform Display Box */}
                <div style={{
                  background: 'rgba(0, 0, 0, 0.45)',
                  border: '1px solid rgba(255, 255, 255, 0.05)',
                  borderRadius: '12px',
                  padding: '16px 20px',
                  marginBottom: '18px'
                }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '11px', color: '#64748b', marginBottom: '12px' }}>
                    <span>00:00</span>
                    <span style={{ color: '#38bdf8', fontWeight: 600 }}>Filler Detected (03:14)</span>
                    <span>06:42</span>
                  </div>

                  {/* Audio Waveform SVG */}
                  <div style={{ height: '54px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <svg viewBox="0 0 400 60" style={{ width: '100%', height: '100%' }}>
                      <path
                        d="M 0 30 Q 15 10, 30 30 T 60 30 T 80 15 T 100 45 T 120 20 T 140 38 T 160 10 T 180 48 T 200 18 T 220 35 T 240 12 T 260 46 T 280 22 T 300 40 T 320 16 T 340 38 T 360 25 T 380 34 T 400 30"
                        fill="none"
                        stroke="#cbd5e1"
                        strokeWidth="1.8"
                        strokeLinecap="round"
                      />
                    </svg>
                  </div>

                  <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '11px', color: '#94a3b8', marginTop: '10px', paddingTop: '10px', borderTop: '1px solid rgba(255, 255, 255, 0.05)' }}>
                    <span>Avg Cadence: 142 WPM</span>
                    <span style={{ color: '#38bdf8', fontWeight: 600 }}>✦ Pacing: Steady</span>
                  </div>
                </div>

                {/* 3 Metric Cards */}
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '10px', marginBottom: '16px' }}>
                  <div style={{ background: 'rgba(255, 255, 255, 0.03)', border: '1px solid rgba(255, 255, 255, 0.05)', padding: '12px', borderRadius: '10px' }}>
                    <div style={{ fontSize: '11px', color: '#94a3b8' }}>Speaking Rate</div>
                    <div style={{ fontSize: '18px', fontWeight: 800, color: '#ffffff', marginTop: '3px' }}>
                      142 <span style={{ fontSize: '11px', color: '#38bdf8', fontWeight: 600 }}>WPM</span>
                    </div>
                    <div style={{ fontSize: '10.5px', color: '#38bdf8', fontWeight: 600, marginTop: '2px' }}>Optimal Range</div>
                  </div>

                  <div style={{ background: 'rgba(255, 255, 255, 0.03)', border: '1px solid rgba(255, 255, 255, 0.05)', padding: '12px', borderRadius: '10px' }}>
                    <div style={{ fontSize: '11px', color: '#94a3b8' }}>Filler Words</div>
                    <div style={{ fontSize: '18px', fontWeight: 800, color: '#ffffff', marginTop: '3px' }}>
                      11 <span style={{ fontSize: '11px', color: '#94a3b8', fontWeight: 500 }}>total</span>
                    </div>
                    <div style={{ fontSize: '10.5px', color: '#94a3b8', marginTop: '2px' }}>um (4), like (5)</div>
                  </div>

                  <div style={{ background: 'rgba(255, 255, 255, 0.03)', border: '1px solid rgba(255, 255, 255, 0.05)', padding: '12px', borderRadius: '10px' }}>
                    <div style={{ fontSize: '11px', color: '#94a3b8' }}>Fluency Score</div>
                    <div style={{ fontSize: '18px', fontWeight: 800, color: '#ffffff', marginTop: '3px' }}>
                      84<span style={{ fontSize: '11px', color: '#64748b' }}>/100</span>
                    </div>
                    <div style={{ fontSize: '10.5px', color: '#38bdf8', fontWeight: 600, marginTop: '2px' }}>Above Benchmark</div>
                  </div>
                </div>

                {/* AI Audio Coach Callout */}
                <div style={{
                  background: 'rgba(56, 189, 248, 0.06)',
                  border: '1px solid rgba(56, 189, 248, 0.2)',
                  borderRadius: '12px',
                  padding: '12px 14px',
                  display: 'flex',
                  alignItems: 'flex-start',
                  gap: '10px'
                }}>
                  <Volume2 size={15} color="#38bdf8" style={{ flexShrink: 0, marginTop: '2px' }} />
                  <p style={{ fontSize: '11.5px', color: '#cbd5e1', lineHeight: 1.55, margin: 0 }}>
                    <strong style={{ color: '#38bdf8' }}>AI Audio Coach:</strong> Try replacing filler words with short intentional pauses (1.5s) while organizing your thoughts. Senior interviewers perceive silence as deliberate composure.
                  </p>
                </div>
              </div>

              {/* Right Column: Speech Description */}
              <div>
                <div style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '6px',
                  padding: '5px 12px',
                  borderRadius: '9999px',
                  background: 'rgba(255, 255, 255, 0.04)',
                  border: '1px solid rgba(255, 255, 255, 0.08)',
                  marginBottom: '14px'
                }}>
                  <Radio size={12} color="#38bdf8" />
                  <span style={{
                    fontSize: '10.5px',
                    fontWeight: 700,
                    letterSpacing: '0.1em',
                    textTransform: 'uppercase',
                    color: '#94a3b8'
                  }}>
                    SPEECH INTELLIGENCE
                  </span>
                </div>

                <h2 style={{ fontSize: 'clamp(28px, 3.8vw, 40px)', fontWeight: 800, color: '#ffffff', letterSpacing: '-0.025em', lineHeight: 1.2, marginBottom: '16px' }}>
                  Improve Your Verbal Delivery
                </h2>

                <p style={{ fontSize: '14px', color: '#94a3b8', lineHeight: 1.65, marginBottom: '24px' }}>
                  Pacing, vocal inflection, and involuntary crutch words alter how your competence is perceived. Our low-latency acoustic models isolate prosody metrics to give you surgical delivery diagnostics.
                </p>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
                  <div style={{ display: 'flex', alignItems: 'flex-start', gap: '10px', fontSize: '13.5px', color: '#cbd5e1' }}>
                    <Check size={16} color="#38bdf8" style={{ marginTop: '3px', flexShrink: 0 }} />
                    <span>Real-time Words-Per-Minute telemetry with optimal target bands (130–155 WPM).</span>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'flex-start', gap: '10px', fontSize: '13.5px', color: '#cbd5e1' }}>
                    <Check size={16} color="#38bdf8" style={{ marginTop: '3px', flexShrink: 0 }} />
                    <span>Phonetic timestamping for every non-lexical filler and hesitation pause.</span>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'flex-start', gap: '10px', fontSize: '13.5px', color: '#cbd5e1' }}>
                    <Check size={16} color="#38bdf8" style={{ marginTop: '3px', flexShrink: 0 }} />
                    <span>Repeated phrase detection preventing semantic circularity.</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ========================================================
            6. SECTION: Improve Your On-Camera Presentation (Computer Vision)
        ======================================================== */}
        <section id="computer-vision" style={{ padding: '50px 0 70px', position: 'relative' }}>
          <div className="container">
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))',
              gap: '40px',
              alignItems: 'center'
            }}>
              {/* Left Column: CV Description & 4 Stats */}
              <div>
                <div style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '6px',
                  padding: '5px 12px',
                  borderRadius: '9999px',
                  background: 'rgba(255, 255, 255, 0.04)',
                  border: '1px solid rgba(255, 255, 255, 0.08)',
                  marginBottom: '14px'
                }}>
                  <Video size={12} color="#818cf8" />
                  <span style={{
                    fontSize: '10.5px',
                    fontWeight: 700,
                    letterSpacing: '0.1em',
                    textTransform: 'uppercase',
                    color: '#94a3b8'
                  }}>
                    COMPUTER VISION
                  </span>
                </div>

                <h2 style={{ fontSize: 'clamp(28px, 3.8vw, 40px)', fontWeight: 800, color: '#ffffff', letterSpacing: '-0.025em', lineHeight: 1.2, marginBottom: '16px' }}>
                  Improve Your On-Camera Presentation
                </h2>

                <p style={{ fontSize: '14px', color: '#94a3b8', lineHeight: 1.65, marginBottom: '28px' }}>
                  Our Computer Vision layer analyzes observable visual signals from your interview video to help improve your presentation setup and on-camera habits.
                </p>

                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '14px' }}>
                  <div style={{ background: 'rgba(15, 21, 35, 0.65)', border: '1px solid rgba(255, 255, 255, 0.06)', borderRadius: '14px', padding: '16px 18px' }}>
                    <div style={{ fontSize: '11.5px', color: '#94a3b8', marginBottom: '4px' }}>Face Visibility</div>
                    <div style={{ fontSize: '26px', fontWeight: 800, color: '#ffffff' }}>96%</div>
                  </div>
                  <div style={{ background: 'rgba(15, 21, 35, 0.65)', border: '1px solid rgba(255, 255, 255, 0.06)', borderRadius: '14px', padding: '16px 18px' }}>
                    <div style={{ fontSize: '11.5px', color: '#94a3b8', marginBottom: '4px' }}>Camera Attention</div>
                    <div style={{ fontSize: '26px', fontWeight: 800, color: '#ffffff' }}>88%</div>
                  </div>
                  <div style={{ background: 'rgba(15, 21, 35, 0.65)', border: '1px solid rgba(255, 255, 255, 0.06)', borderRadius: '14px', padding: '16px 18px' }}>
                    <div style={{ fontSize: '11.5px', color: '#94a3b8', marginBottom: '4px' }}>Subject Framing</div>
                    <div style={{ fontSize: '26px', fontWeight: 800, color: '#38bdf8' }}>94%</div>
                  </div>
                  <div style={{ background: 'rgba(15, 21, 35, 0.65)', border: '1px solid rgba(255, 255, 255, 0.06)', borderRadius: '14px', padding: '16px 18px' }}>
                    <div style={{ fontSize: '11.5px', color: '#94a3b8', marginBottom: '4px' }}>Posture & Lighting</div>
                    <div style={{ fontSize: '26px', fontWeight: 800, color: '#c084fc' }}>89%</div>
                  </div>
                </div>
              </div>

              {/* Right Column: Video Preview HUD */}
              <div style={{
                background: 'rgba(14, 20, 32, 0.85)',
                border: '1px solid rgba(255, 255, 255, 0.08)',
                borderRadius: '22px',
                padding: '16px',
                backdropFilter: 'blur(16px)',
                boxShadow: '0 25px 60px rgba(0, 0, 0, 0.7)'
              }}>
                <div style={{ position: 'relative', borderRadius: '16px', overflow: 'hidden', height: '280px' }}>
                  <img
                    src="/interviewer_sarah.jpg"
                    alt="Camera presentation feed"
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                  />

                  {/* HUD Overlays */}
                  {/* Top-Left: Framing Golden Ratio */}
                  <div style={{
                    position: 'absolute',
                    top: '12px',
                    left: '12px',
                    background: 'rgba(0, 0, 0, 0.65)',
                    backdropFilter: 'blur(6px)',
                    padding: '4px 10px',
                    borderRadius: '6px',
                    fontSize: '11px',
                    color: '#f8fafc',
                    fontWeight: 600,
                    border: '1px solid rgba(255, 255, 255, 0.1)'
                  }}>
                    [ ] Framing: Golden Ratio
                  </div>

                  {/* Top-Right: Live Level 54.0 */}
                  <div style={{
                    position: 'absolute',
                    top: '12px',
                    right: '12px',
                    background: 'rgba(0, 0, 0, 0.65)',
                    backdropFilter: 'blur(6px)',
                    padding: '4px 10px',
                    borderRadius: '6px',
                    fontSize: '11px',
                    color: '#38bdf8',
                    fontWeight: 600,
                    display: 'flex',
                    alignItems: 'center',
                    gap: '6px',
                    border: '1px solid rgba(56, 189, 248, 0.2)'
                  }}>
                    <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#10b981', display: 'inline-block' }} />
                    <span>Live Level: 54.0 (Optimal)</span>
                  </div>

                  {/* Eye-level line */}
                  <div style={{
                    position: 'absolute',
                    top: '44%',
                    left: '12px',
                    right: '12px',
                    height: '1px',
                    borderTop: '1px dashed rgba(56, 189, 248, 0.5)'
                  }} />

                  <div style={{
                    position: 'absolute',
                    top: '38%',
                    left: '14px',
                    fontSize: '10px',
                    color: '#38bdf8',
                    fontWeight: 600,
                    background: 'rgba(0, 0, 0, 0.7)',
                    padding: '2px 6px',
                    borderRadius: '4px'
                  }}>
                    Eye Level Target
                  </div>

                  <div style={{
                    position: 'absolute',
                    top: '38%',
                    right: '14px',
                    fontSize: '10px',
                    color: '#34d399',
                    fontWeight: 700,
                    background: 'rgba(16, 185, 129, 0.2)',
                    border: '1px solid rgba(16, 185, 129, 0.4)',
                    padding: '2px 6px',
                    borderRadius: '4px'
                  }}>
                    Aligned ✓
                  </div>

                  {/* Bottom-Left: Head Angle */}
                  <div style={{
                    position: 'absolute',
                    bottom: '12px',
                    left: '12px',
                    background: 'rgba(0, 0, 0, 0.65)',
                    backdropFilter: 'blur(6px)',
                    padding: '4px 10px',
                    borderRadius: '6px',
                    fontSize: '11px',
                    color: '#f8fafc',
                    fontWeight: 600
                  }}>
                    Head Angle: Centered
                  </div>

                  {/* Bottom-Right: Presentation Index */}
                  <div style={{
                    position: 'absolute',
                    bottom: '12px',
                    right: '12px',
                    background: 'rgba(0, 0, 0, 0.7)',
                    backdropFilter: 'blur(6px)',
                    padding: '4px 10px',
                    borderRadius: '6px',
                    fontSize: '11px',
                    color: '#38bdf8',
                    fontWeight: 700
                  }}>
                    Presentation Index: 88/100
                  </div>
                </div>

                {/* Responsible AI Notice */}
                <div style={{
                  marginTop: '14px',
                  padding: '14px 16px',
                  background: 'rgba(255, 255, 255, 0.02)',
                  border: '1px solid rgba(255, 255, 255, 0.05)',
                  borderRadius: '12px'
                }}>
                  <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '6px',
                    fontSize: '10px',
                    fontWeight: 700,
                    color: '#94a3b8',
                    letterSpacing: '0.08em',
                    textTransform: 'uppercase',
                    marginBottom: '6px'
                  }}>
                    <Shield size={11} color="#818cf8" />
                    <span>RESPONSIBLE AI NOTICE • OBSERVABLE SIGNALS ONLY</span>
                  </div>
                  <p style={{
                    fontSize: '10.5px',
                    color: '#64748b',
                    lineHeight: 1.55,
                    margin: 0
                  }}>
                    <strong>Observable Signals, Not Psychological Profiling.</strong> Inprep AI focuses on measurable visual presentation signals such as face visibility, framing, head orientation, posture, lighting, and camera stability. These signals are used strictly for presentation coaching. They do not determine personality, emotion, intelligence, honesty, confidence, mental state, or other internal traits.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ========================================================
            7. SECTION: Learn From Every Answer (Benchmark Blueprint)
        ======================================================== */}
        <section id="model-answers" style={{ padding: '70px 0', position: 'relative' }}>
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
                BENCHMARK BLUEPRINT
              </span>
              <h2 style={{ fontSize: 'clamp(28px, 4vw, 42px)', fontWeight: 800, color: '#ffffff', letterSpacing: '-0.025em', marginBottom: '12px' }}>
                Learn From Every Answer
              </h2>
              <p style={{ fontSize: '15px', color: '#94a3b8', margin: 0 }}>
                After each session, our engine dissects your response structure against Principal Engineer and Director tier exemplars.
              </p>
            </div>

            {/* Side-by-Side 2-Column Comparison */}
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))',
              gap: '24px'
            }}>
              {/* Left Column: Candidate Transcription */}
              <div style={{
                background: 'rgba(15, 21, 35, 0.65)',
                border: '1px solid rgba(255, 255, 255, 0.07)',
                borderRadius: '18px',
                padding: '26px',
                backdropFilter: 'blur(12px)',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between'
              }}>
                <div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px' }}>
                    <span style={{ fontSize: '11px', fontWeight: 700, color: '#94a3b8', letterSpacing: '0.08em', textTransform: 'uppercase' }}>
                      CANDIDATE TRANSCRIPTION
                    </span>
                    <span style={{ fontSize: '11px', color: '#64748b' }}>Candidate Baseline</span>
                  </div>
                  <p style={{ fontSize: '13px', color: '#cbd5e1', lineHeight: 1.65, margin: '0 0 24px 0' }}>
                    “When microservices become slow, we usually implement Redis to cache the database reads. Then we set TTLs so old data expires. If things still lag, we scale up our replica pods in Kubernetes.”
                  </p>
                </div>

                {/* Diagnostic Gap Box */}
                <div style={{
                  background: 'rgba(239, 68, 68, 0.06)',
                  border: '1px solid rgba(239, 68, 68, 0.2)',
                  borderRadius: '10px',
                  padding: '12px 14px'
                }}>
                  <div style={{ fontSize: '11px', fontWeight: 700, color: '#f43f5e', marginBottom: '4px' }}>
                    Diagnostic Gap:
                  </div>
                  <div style={{ fontSize: '11.5px', color: '#cbd5e1', lineHeight: 1.5 }}>
                    Lacks systemic trade-off analysis regarding cache penetration, write stampedes, and distributed cache invalidation strategies.
                  </div>
                </div>
              </div>

              {/* Right Column: Staff-Tier Benchmark Response */}
              <div style={{
                background: 'rgba(15, 21, 35, 0.75)',
                border: '1px solid rgba(99, 102, 241, 0.35)',
                borderRight: '4px solid #a855f7',
                borderRadius: '18px',
                padding: '26px',
                backdropFilter: 'blur(12px)',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                boxShadow: '0 12px 32px rgba(0, 0, 0, 0.4)'
              }}>
                <div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px' }}>
                    <span style={{ fontSize: '11px', fontWeight: 700, color: '#818cf8', letterSpacing: '0.08em', textTransform: 'uppercase' }}>
                      STAFF-TIER BENCHMARK RESPONSE
                    </span>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                      <span style={{ fontSize: '10.5px', fontWeight: 700, color: '#c084fc', background: 'rgba(168, 85, 247, 0.18)', padding: '3px 8px', borderRadius: '6px' }}>
                        5-Stage Blueprint
                      </span>
                      <button
                        onClick={handleCopyModelAnswer}
                        title="Copy Response"
                        style={{
                          background: 'transparent',
                          border: 'none',
                          cursor: 'pointer',
                          display: 'inline-flex',
                          alignItems: 'center',
                          padding: '2px 4px'
                        }}
                      >
                        {copiedAnswer ? <Check size={12} color="#34d399" /> : <Copy size={12} color="#94a3b8" />}
                      </button>
                    </div>
                  </div>

                  <p style={{ fontSize: '13px', color: '#ffffff', lineHeight: 1.65, margin: '0 0 20px 0' }}>
                    “We address downstream bottlenecks by implementing a two-layer cache strategy using Redis Cluster with write-through invalidation to resolve read latency while defending against stampedes via single-flight mutex locks...”
                  </p>
                </div>

                {/* 5 Blueprint Pills */}
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px', paddingTop: '16px', borderTop: '1px solid rgba(255, 255, 255, 0.05)' }}>
                  {['1. Define Architecture', '2. Explain Latency', '3. Reason Concurrency', '4. Concrete Metric', '5. Resiliency Fallback'].map((pill, idx) => (
                    <span
                      key={idx}
                      style={{
                        fontSize: '10.5px',
                        color: '#94a3b8',
                        background: 'rgba(255, 255, 255, 0.04)',
                        border: '1px solid rgba(255, 255, 255, 0.08)',
                        padding: '4px 9px',
                        borderRadius: '6px',
                        fontWeight: 500
                      }}
                    >
                      {pill}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Footnote note */}
            <div style={{ textAlign: 'center', marginTop: '18px', fontSize: '11.5px', color: '#64748b' }}>
              Note: All suggested answers are structured learning benchmarks, not verbatim scripts to memorize.
            </div>
          </div>
        </section>

        {/* ========================================================
            8. SECTION: Practice What Matters Most for You (Curated Curriculum)
        ======================================================== */}
        <section id="curated-curriculum" style={{ padding: '40px 0 70px', position: 'relative' }}>
          <div className="container">
            <div style={{
              background: 'rgba(13, 19, 32, 0.85)',
              border: '1px solid rgba(255, 255, 255, 0.08)',
              borderRadius: '24px',
              padding: '44px 40px',
              backdropFilter: 'blur(16px)',
              boxShadow: '0 25px 60px rgba(0, 0, 0, 0.6)'
            }}>
              <div style={{ textAlign: 'center', maxWidth: '720px', margin: '0 auto 24px' }}>
                <span style={{
                  fontSize: '11px',
                  fontWeight: 700,
                  letterSpacing: '0.12em',
                  textTransform: 'uppercase',
                  color: '#38bdf8',
                  display: 'block',
                  marginBottom: '10px'
                }}>
                  CURATED CURRICULUM
                </span>
                <h2 style={{ fontSize: 'clamp(28px, 3.8vw, 38px)', fontWeight: 800, color: '#ffffff', letterSpacing: '-0.025em', marginBottom: '12px' }}>
                  Practice What Matters Most for You
                </h2>
                <p style={{ fontSize: '14px', color: '#94a3b8', lineHeight: 1.6, margin: '0 auto 24px' }}>
                  Our recommendation pipeline synthesizes your career credentials into specialized mock modules across critical engineering paradigms.
                </p>

                {/* Pipeline Flow Pill */}
                <div style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '8px',
                  padding: '6px 16px',
                  borderRadius: '9999px',
                  background: 'rgba(255, 255, 255, 0.03)',
                  border: '1px solid rgba(255, 255, 255, 0.08)',
                  fontSize: '11px',
                  color: '#94a3b8'
                }}>
                  <span>CV Profile</span>
                  <span style={{ color: '#475569' }}>→</span>
                  <span>Skill Graph</span>
                  <span style={{ color: '#475569' }}>→</span>
                  <span>Assessment Score</span>
                  <span style={{ color: '#475569' }}>→</span>
                  <span style={{ color: '#38bdf8', fontWeight: 600 }}>Personalized 5-Question Rounds</span>
                </div>
              </div>

              {/* 10 Track Cards (5x2 grid) */}
              <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
                gap: '12px'
              }}>
                {curatedTracks.map((track, idx) => {
                  const Icon = track.icon;
                  return (
                    <div
                      key={idx}
                      onClick={() => handleStartPractice(track.title)}
                      style={{
                        background: 'rgba(18, 25, 42, 0.65)',
                        border: '1px solid rgba(255, 255, 255, 0.06)',
                        borderRadius: '12px',
                        padding: '16px 14px',
                        cursor: 'pointer',
                        transition: 'all 0.2s ease',
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'space-between',
                        minHeight: '84px'
                      }}
                      className="glow-card-hover"
                    >
                      <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px' }}>
                        <Icon size={16} color={track.color} />
                        <span style={{ fontSize: '13px', fontWeight: 700, color: '#ffffff' }}>
                          {track.title}
                        </span>
                      </div>

                      <div style={{
                        fontSize: '11px',
                        color: track.isHighlight ? track.highlightColor : '#64748b',
                        fontWeight: track.isHighlight ? 700 : 500
                      }}>
                        {track.meta}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        {/* ========================================================
            9. SECTION: Immersive Simulation Environment
        ======================================================== */}
        <section style={{ padding: '80px 0', position: 'relative' }}>
          <div className="container">
            <div style={{ textAlign: 'center', maxWidth: '820px', margin: '0 auto 48px' }}>
              <div style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                background: 'rgba(129, 140, 248, 0.1)',
                border: '1px solid rgba(129, 140, 248, 0.25)',
                borderRadius: '9999px',
                padding: '6px 16px',
                marginBottom: '16px'
              }}>
                <span style={{ color: '#818cf8', fontWeight: 900, fontSize: '11px' }}>▌</span>
                <span style={{ fontSize: '11px', fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase', color: '#c7d2fe' }}>
                  IMMERSIVE SIMULATION
                </span>
              </div>
              <h2 style={{ fontSize: 'clamp(28px, 4vw, 44px)', fontWeight: 800, color: '#ffffff', letterSpacing: '-0.025em', marginBottom: '14px' }}>
                Practice in a Real Interview Environment
              </h2>
              <p style={{ fontSize: '15.5px', color: '#94a3b8', margin: 0, lineHeight: 1.6 }}>
                Strict 5-question structured rounds with dynamic interviewer avatars, mic calibration, and answer reviews before final submission.
              </p>
            </div>

            {/* Room Simulation Container */}
            <div style={{
              background: 'rgba(12, 17, 29, 0.95)',
              border: '1px solid rgba(255, 255, 255, 0.08)',
              borderRadius: '24px',
              padding: '24px',
              boxShadow: '0 25px 70px rgba(0, 0, 0, 0.85), 0 0 40px rgba(99, 102, 241, 0.08)',
              position: 'relative'
            }}>
              {/* Top Bar */}
              <div style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                flexWrap: 'wrap',
                gap: '12px',
                marginBottom: '20px',
                paddingBottom: '16px',
                borderBottom: '1px solid rgba(255, 255, 255, 0.06)'
              }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <span style={{
                    background: 'rgba(129, 140, 248, 0.15)',
                    border: '1px solid rgba(129, 140, 248, 0.3)',
                    color: '#c7d2fe',
                    fontSize: '11px',
                    fontWeight: 700,
                    padding: '4px 10px',
                    borderRadius: '9999px',
                    letterSpacing: '0.04em'
                  }}>
                    Round 1: Architecture
                  </span>
                  <span style={{
                    background: 'rgba(255, 255, 255, 0.05)',
                    border: '1px solid rgba(255, 255, 255, 0.08)',
                    color: '#e2e8f0',
                    fontSize: '11px',
                    fontWeight: 700,
                    padding: '4px 10px',
                    borderRadius: '9999px'
                  }}>
                    Question 3 of 5
                  </span>
                </div>

                <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '6px',
                    background: 'rgba(239, 68, 68, 0.15)',
                    border: '1px solid rgba(239, 68, 68, 0.3)',
                    color: '#f87171',
                    fontSize: '11px',
                    fontWeight: 700,
                    padding: '4px 12px',
                    borderRadius: '9999px'
                  }}>
                    <span style={{ width: '7px', height: '7px', borderRadius: '50%', background: '#ef4444', display: 'inline-block' }} />
                    <span>REC 03:24</span>
                  </div>
                  <div style={{
                    background: 'rgba(0, 0, 0, 0.4)',
                    border: '1px solid rgba(255, 255, 255, 0.08)',
                    color: '#94a3b8',
                    fontSize: '11px',
                    fontWeight: 600,
                    padding: '4px 12px',
                    borderRadius: '9999px'
                  }}>
                    Time Remaining: 01:36
                  </div>
                </div>
              </div>

              {/* Dual Video Stream Grid */}
              <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
                gap: '16px',
                marginBottom: '20px'
              }}>
                {/* Left Stream: AI Interviewer */}
                <div style={{
                  position: 'relative',
                  height: '280px',
                  borderRadius: '16px',
                  overflow: 'hidden',
                  border: '1px solid rgba(255, 255, 255, 0.08)',
                  background: '#070b14'
                }}>
                  <img
                    src="/interviewer_sarah.jpg"
                    alt="Dr. Sarah Vance"
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                  />
                  {/* Top Left Badge */}
                  <div style={{
                    position: 'absolute',
                    top: '12px',
                    left: '12px',
                    background: 'rgba(10, 15, 28, 0.85)',
                    backdropFilter: 'blur(8px)',
                    border: '1px solid rgba(255, 255, 255, 0.1)',
                    padding: '5px 10px',
                    borderRadius: '8px',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '6px'
                  }}>
                    <Volume2 size={13} color="#818cf8" />
                    <span style={{ fontSize: '11px', fontWeight: 600, color: '#f8fafc' }}>
                      Dr. Sarah Vance • AI Partner
                    </span>
                  </div>

                  {/* Dynamic Prompt Banner at Bottom */}
                  <div style={{
                    position: 'absolute',
                    bottom: '12px',
                    left: '12px',
                    right: '12px',
                    background: 'rgba(8, 12, 22, 0.92)',
                    backdropFilter: 'blur(12px)',
                    border: '1px solid rgba(129, 140, 248, 0.25)',
                    padding: '12px 14px',
                    borderRadius: '12px'
                  }}>
                    <span style={{ fontSize: '12px', color: '#e2e8f0', lineHeight: 1.5, display: 'block' }}>
                      "How would you design a rate-limiter for a multi-tenant API handling 100,000 requests per second across three geographic regions?"
                    </span>
                  </div>
                </div>

                {/* Right Stream: Candidate Feed */}
                <div style={{
                  position: 'relative',
                  height: '280px',
                  borderRadius: '16px',
                  overflow: 'hidden',
                  border: '1px solid rgba(255, 255, 255, 0.08)',
                  background: '#070b14'
                }}>
                  <img
                    src="/candidate_alex.jpg"
                    alt="Candidate Alex"
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                  />
                  {/* Top Left Badge */}
                  <div style={{
                    position: 'absolute',
                    top: '12px',
                    left: '12px',
                    background: 'rgba(10, 15, 28, 0.85)',
                    backdropFilter: 'blur(8px)',
                    border: '1px solid rgba(255, 255, 255, 0.1)',
                    padding: '5px 10px',
                    borderRadius: '8px',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '6px'
                  }}>
                    <span style={{ fontSize: '11px', fontWeight: 600, color: '#f8fafc' }}>
                      You (Alex Miller)
                    </span>
                    <span style={{ color: '#475569' }}>•</span>
                    <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#10b981', display: 'inline-block' }} />
                    <span style={{ fontSize: '10px', color: '#34d399', fontWeight: 600 }}>Audio stream connected</span>
                  </div>

                  {/* Top Right HUD Widget */}
                  <div style={{
                    position: 'absolute',
                    top: '12px',
                    right: '12px',
                    background: 'rgba(10, 15, 28, 0.85)',
                    backdropFilter: 'blur(8px)',
                    border: '1px solid rgba(56, 189, 248, 0.25)',
                    padding: '6px 12px',
                    borderRadius: '8px',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '8px'
                  }}>
                    <span style={{ fontSize: '10px', color: '#38bdf8', fontWeight: 700 }}>Camera: On</span>
                    <div style={{ display: 'flex', alignItems: 'flex-end', gap: '2px', height: '10px' }}>
                      <span style={{ width: '2px', height: '6px', background: '#38bdf8', borderRadius: '1px' }} />
                      <span style={{ width: '2px', height: '10px', background: '#818cf8', borderRadius: '1px' }} />
                      <span style={{ width: '2px', height: '4px', background: '#c084fc', borderRadius: '1px' }} />
                      <span style={{ width: '2px', height: '8px', background: '#38bdf8', borderRadius: '1px' }} />
                    </div>
                  </div>
                </div>
              </div>

              {/* Bottom Control Bar */}
              <div style={{
                background: 'rgba(0, 0, 0, 0.35)',
                border: '1px solid rgba(255, 255, 255, 0.05)',
                borderRadius: '14px',
                padding: '12px 20px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                flexWrap: 'wrap',
                gap: '12px'
              }}>
                {/* Media toggles */}
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <div style={{
                    width: '36px',
                    height: '36px',
                    borderRadius: '50%',
                    background: 'rgba(255, 255, 255, 0.06)',
                    border: '1px solid rgba(255, 255, 255, 0.1)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: '#e2e8f0'
                  }}>
                    <Mic size={16} />
                  </div>
                  <div style={{
                    width: '36px',
                    height: '36px',
                    borderRadius: '50%',
                    background: 'rgba(255, 255, 255, 0.06)',
                    border: '1px solid rgba(255, 255, 255, 0.1)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: '#e2e8f0'
                  }}>
                    <Video size={16} />
                  </div>
                  <div style={{
                    width: '36px',
                    height: '36px',
                    borderRadius: '50%',
                    background: 'rgba(255, 255, 255, 0.06)',
                    border: '1px solid rgba(255, 255, 255, 0.1)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: '#94a3b8'
                  }}>
                    <FileText size={16} />
                  </div>
                </div>

                {/* Right Action buttons */}
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <button
                    onClick={() => handleStartPractice()}
                    style={{
                      background: 'rgba(255, 255, 255, 0.05)',
                      border: '1px solid rgba(255, 255, 255, 0.12)',
                      color: '#cbd5e1',
                      borderRadius: '9999px',
                      padding: '8px 18px',
                      fontSize: '12.5px',
                      fontWeight: 600,
                      cursor: 'pointer',
                      transition: 'all 0.2s ease'
                    }}
                  >
                    Review & Retake Answer
                  </button>
                  <button
                    onClick={() => handleStartPractice()}
                    style={{
                      background: 'linear-gradient(135deg, #7c3aed 0%, #6366f1 100%)',
                      border: 'none',
                      color: '#ffffff',
                      borderRadius: '9999px',
                      padding: '8px 20px',
                      fontSize: '12.5px',
                      fontWeight: 600,
                      cursor: 'pointer',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '6px',
                      boxShadow: '0 4px 14px rgba(124, 58, 237, 0.4)'
                    }}
                  >
                    <span>Submit & Next Question</span>
                    <ArrowRight size={14} />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ========================================================
            10. SECTION: Longitudinal Telemetry
        ======================================================== */}
        <section style={{ padding: '80px 0', position: 'relative' }}>
          <div className="container">
            {/* Header row */}
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', flexWrap: 'wrap', gap: '20px', marginBottom: '40px' }}>
              <div style={{ maxWidth: '680px' }}>
                <div style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '8px',
                  background: 'rgba(56, 189, 248, 0.1)',
                  border: '1px solid rgba(56, 189, 248, 0.25)',
                  borderRadius: '9999px',
                  padding: '6px 16px',
                  marginBottom: '14px'
                }}>
                  <span style={{ color: '#38bdf8', fontWeight: 900, fontSize: '11px' }}>▌</span>
                  <span style={{ fontSize: '11px', fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase', color: '#bae6fd' }}>
                    LONGITUDINAL TELEMETRY
                  </span>
                </div>
                <h2 style={{ fontSize: 'clamp(28px, 4vw, 42px)', fontWeight: 800, color: '#ffffff', letterSpacing: '-0.025em', marginBottom: '12px' }}>
                  From One Score to a Complete Performance Report
                </h2>
                <p style={{ fontSize: '15px', color: '#94a3b8', margin: 0, lineHeight: 1.6 }}>
                  Beyond surface-level pass/fail ratings. Inprep provides deep dimensional breakdowns and trajectory modeling across your entire preparation timeline.
                </p>
              </div>

              {/* Right Score Pill */}
              <div style={{
                background: 'rgba(15, 21, 35, 0.8)',
                border: '1px solid rgba(255, 255, 255, 0.08)',
                borderRadius: '16px',
                padding: '16px 24px',
                textAlign: 'right'
              }}>
                <div style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'flex-end', gap: '6px' }}>
                  <span style={{ fontSize: '36px', fontWeight: 800, color: '#ffffff', lineHeight: 1 }}>82</span>
                  <span style={{ fontSize: '14px', color: '#64748b' }}>/ 100</span>
                </div>
                <span style={{ fontSize: '11.5px', color: '#94a3b8', fontWeight: 600, display: 'block', marginTop: '4px' }}>
                  Session Average Readiness
                </span>
              </div>
            </div>

            {/* 2-Column Grid */}
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))',
              gap: '24px'
            }}>
              {/* Left Column: Diagnostic Matrix Card */}
              <div style={{
                background: 'rgba(13, 18, 30, 0.85)',
                border: '1px solid rgba(255, 255, 255, 0.08)',
                borderRadius: '20px',
                padding: '28px',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between'
              }}>
                <div>
                  <h3 style={{ fontSize: '17px', fontWeight: 700, color: '#ffffff', marginBottom: '4px' }}>
                    Diagnostic Matrix
                  </h3>
                  <p style={{ fontSize: '12.5px', color: '#64748b', marginBottom: '24px' }}>
                    4 core pillars evaluated across 20 distinct metrics
                  </p>

                  <div style={{ display: 'flex', flexDirection: 'column', gap: '18px', marginBottom: '28px' }}>
                    {[
                      { name: 'Technical Mastery & Depth', score: '86/100', val: 86, color: '#818cf8' },
                      { name: 'Communication Structure (STAR)', score: '84/100', val: 84, color: '#38bdf8' },
                      { name: 'Speech Delivery & Flow', score: '81/100', val: 81, color: '#c084fc' },
                      { name: 'Presentation & Executive Setup', score: '85/100', val: 85, color: '#34d399' }
                    ].map((m, idx) => (
                      <div key={idx}>
                        <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '12.5px', marginBottom: '6px', color: '#e2e8f0' }}>
                          <span style={{ fontWeight: 500 }}>{m.name}</span>
                          <span style={{ fontWeight: 700, color: m.color }}>{m.score}</span>
                        </div>
                        <div style={{ width: '100%', height: '6px', background: 'rgba(255, 255, 255, 0.06)', borderRadius: '3px', overflow: 'hidden' }}>
                          <div style={{ width: `${m.val}%`, height: '100%', background: m.color, borderRadius: '3px' }} />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Primary Strength Callout Box */}
                <div style={{
                  background: 'rgba(16, 185, 129, 0.08)',
                  border: '1px solid rgba(16, 185, 129, 0.25)',
                  borderRadius: '12px',
                  padding: '14px 18px'
                }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '6px', marginBottom: '4px' }}>
                    <CheckCircle2 size={14} color="#34d399" />
                    <span style={{ fontSize: '11px', fontWeight: 800, letterSpacing: '0.05em', textTransform: 'uppercase', color: '#34d399' }}>
                      PRIMARY STRENGTH
                    </span>
                  </div>
                  <p style={{ fontSize: '12.5px', color: '#e2e8f0', margin: 0, lineHeight: 1.5 }}>
                    Concise trade-off framing under high-pressure scenarios.
                  </p>
                </div>
              </div>

              {/* Right Column: Stacked Velocity + Improvement Plan */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                {/* Top: Interview Growth Velocity */}
                <div style={{
                  background: 'rgba(13, 18, 30, 0.85)',
                  border: '1px solid rgba(255, 255, 255, 0.08)',
                  borderRadius: '20px',
                  padding: '24px'
                }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px' }}>
                    <div>
                      <h3 style={{ fontSize: '16px', fontWeight: 700, color: '#ffffff', margin: 0 }}>
                        Interview Growth Velocity
                      </h3>
                      <span style={{ fontSize: '11.5px', color: '#64748b' }}>Overall Readiness Progression</span>
                    </div>
                    <span style={{
                      background: 'rgba(16, 185, 129, 0.15)',
                      border: '1px solid rgba(16, 185, 129, 0.3)',
                      color: '#34d399',
                      fontSize: '11px',
                      fontWeight: 700,
                      padding: '4px 10px',
                      borderRadius: '9999px'
                    }}>
                      +14 pts Improvement
                    </span>
                  </div>

                  {/* Telemetry SVG line with points */}
                  <div style={{ width: '100%', height: '85px', marginBottom: '12px' }}>
                    <svg viewBox="0 0 400 90" style={{ width: '100%', height: '100%' }}>
                      <defs>
                        <linearGradient id="velocityLineGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                          <stop offset="0%" stopColor="#818cf8" />
                          <stop offset="100%" stopColor="#38bdf8" />
                        </linearGradient>
                      </defs>
                      <path
                        d="M 25 72 C 90 66, 150 56, 230 40 C 290 28, 340 20, 375 16"
                        fill="none"
                        stroke="url(#velocityLineGrad)"
                        strokeWidth="3"
                        strokeLinecap="round"
                      />
                      <circle cx="25" cy="72" r="4.5" fill="#818cf8" />
                      <circle cx="140" cy="58" r="4.5" fill="#818cf8" />
                      <circle cx="255" cy="36" r="4.5" fill="#818cf8" />
                      <circle cx="375" cy="16" r="6" fill="#38bdf8" style={{ filter: 'drop-shadow(0 0 6px rgba(56, 189, 248, 0.9))' }} />
                    </svg>
                  </div>

                  {/* 4 Progression Checkpoints */}
                  <div style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    fontSize: '11px',
                    color: '#94a3b8',
                    borderTop: '1px solid rgba(255, 255, 255, 0.06)',
                    paddingTop: '10px'
                  }}>
                    <span>Attempt 1: <strong style={{ color: '#f8fafc' }}>68</strong></span>
                    <span>Attempt 3: <strong style={{ color: '#f8fafc' }}>74</strong></span>
                    <span>Attempt 5: <strong style={{ color: '#f8fafc' }}>79</strong></span>
                    <span style={{ color: '#38bdf8', fontWeight: 700 }}>Latest: 82</span>
                  </div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '10.5px', color: '#64748b', marginTop: '6px' }}>
                    <span>Week 1 Baseline</span>
                    <span style={{ color: '#818cf8' }}>Target Readiness: 85+ (Senior/Staff)</span>
                  </div>
                </div>

                {/* Bottom: Active Improvement Plan */}
                <div style={{
                  background: 'rgba(13, 18, 30, 0.85)',
                  border: '1px solid rgba(255, 255, 255, 0.08)',
                  borderRadius: '20px',
                  padding: '24px'
                }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px' }}>
                    <h3 style={{ fontSize: '16px', fontWeight: 700, color: '#ffffff', margin: 0 }}>
                      Active Improvement Plan
                    </h3>
                    <span style={{
                      background: 'rgba(129, 140, 248, 0.12)',
                      border: '1px solid rgba(129, 140, 248, 0.25)',
                      color: '#c7d2fe',
                      fontSize: '11px',
                      fontWeight: 600,
                      padding: '3px 10px',
                      borderRadius: '9999px'
                    }}>
                      3 of 7 Tasks Completed
                    </span>
                  </div>

                  <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                    {[
                      { task: 'Reduce filler sound rate below 3.0/min', done: true },
                      { task: 'Front-load conclusion in STAR answers', done: true },
                      { task: 'Hold eye line on webcam when framing tradeoffs', done: false }
                    ].map((t, idx) => (
                      <div
                        key={idx}
                        style={{
                          display: 'flex',
                          alignItems: 'center',
                          gap: '10px',
                          background: 'rgba(255, 255, 255, 0.03)',
                          border: '1px solid rgba(255, 255, 255, 0.05)',
                          borderRadius: '10px',
                          padding: '10px 14px'
                        }}
                      >
                        {t.done ? (
                          <CheckCircle2 size={16} color="#34d399" />
                        ) : (
                          <Circle size={16} color="#64748b" />
                        )}
                        <span style={{
                          fontSize: '12.5px',
                          color: t.done ? '#e2e8f0' : '#94a3b8',
                          textDecoration: t.done ? 'line-through' : 'none',
                          opacity: t.done ? 0.85 : 1
                        }}>
                          {t.task}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ========================================================
            11. SECTION: Cohesive Architecture
        ======================================================== */}
        <section style={{ padding: '80px 0', position: 'relative' }}>
          <div className="container" style={{ textAlign: 'center' }}>
            <div style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              background: 'rgba(129, 140, 248, 0.1)',
              border: '1px solid rgba(129, 140, 248, 0.25)',
              borderRadius: '9999px',
              padding: '6px 16px',
              marginBottom: '14px'
            }}>
              <span style={{ color: '#818cf8', fontWeight: 900, fontSize: '11px' }}>▌</span>
              <span style={{ fontSize: '11px', fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase', color: '#c7d2fe' }}>
                COHESIVE ARCHITECTURE
              </span>
            </div>
            <h2 style={{ fontSize: 'clamp(28px, 4vw, 42px)', fontWeight: 800, color: '#ffffff', letterSpacing: '-0.025em', marginBottom: '14px' }}>
              Everything Works Together
            </h2>
            <p style={{ fontSize: '15px', color: '#94a3b8', maxWidth: '680px', margin: '0 auto 48px', lineHeight: 1.6 }}>
              A continuous feedback loop designed to transform raw experience into refined executive delivery.
            </p>

            {/* 8-Step Grid */}
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(130px, 1fr))',
              gap: '12px'
            }}>
              {cohesiveSteps.map((step, idx) => {
                const Icon = step.icon;
                return (
                  <div
                    key={idx}
                    style={{
                      background: step.isCurrent ? 'rgba(124, 58, 237, 0.15)' : 'rgba(15, 21, 35, 0.7)',
                      border: step.isCurrent ? '1px solid rgba(168, 85, 247, 0.4)' : '1px solid rgba(255, 255, 255, 0.07)',
                      borderRadius: '16px',
                      padding: '20px 12px',
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'center',
                      textAlign: 'center',
                      backdropFilter: 'blur(8px)',
                      position: 'relative',
                      boxShadow: step.isCurrent ? '0 0 20px rgba(168, 85, 247, 0.25)' : 'none'
                    }}
                    className="glow-card-hover"
                  >
                    <span style={{
                      fontSize: '11px',
                      fontWeight: 800,
                      color: step.color,
                      marginBottom: '8px',
                      display: 'block'
                    }}>
                      {step.num}
                    </span>
                    <div style={{
                      width: '36px',
                      height: '36px',
                      borderRadius: '50%',
                      background: 'rgba(255, 255, 255, 0.05)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      marginBottom: '10px'
                    }}>
                      <Icon size={18} color={step.color} />
                    </div>
                    <span style={{ fontSize: '13px', fontWeight: 700, color: '#ffffff', display: 'block', marginBottom: '4px' }}>
                      {step.name}
                    </span>
                    <span style={{ fontSize: '10.5px', color: '#64748b' }}>
                      {step.sub}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* ========================================================
            12. SECTION: Our Responsible AI Commitments
        ======================================================== */}
        <section style={{ padding: '60px 0 80px', position: 'relative' }}>
          <div className="container">
            {/* Container Card */}
            <div style={{
              background: 'rgba(13, 18, 30, 0.85)',
              border: '1px solid rgba(255, 255, 255, 0.08)',
              borderRadius: '24px',
              padding: '48px 36px',
              position: 'relative'
            }}>
              <div style={{ textAlign: 'center', maxWidth: '780px', margin: '0 auto 40px' }}>
                <div style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '8px',
                  background: 'rgba(52, 211, 153, 0.1)',
                  border: '1px solid rgba(52, 211, 153, 0.25)',
                  borderRadius: '9999px',
                  padding: '6px 16px',
                  marginBottom: '14px'
                }}>
                  <span style={{ color: '#34d399', fontWeight: 900, fontSize: '11px' }}>▌</span>
                  <span style={{ fontSize: '11px', fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase', color: '#a7f3d0' }}>
                    TRUST & PRIVACY
                  </span>
                </div>
                <h2 style={{ fontSize: 'clamp(28px, 4vw, 42px)', fontWeight: 800, color: '#ffffff', letterSpacing: '-0.025em', marginBottom: '12px' }}>
                  Our Responsible AI Commitments
                </h2>
                <p style={{ fontSize: '15px', color: '#94a3b8', margin: 0, lineHeight: 1.6 }}>
                  Engineered around candidate dignity and clear boundaries. We do not evaluate what does not predict job performance.
                </p>
              </div>

              {/* 4 Pillar Cards */}
              <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(230px, 1fr))',
                gap: '18px'
              }}>
                {ethicalPillars.map((p, idx) => {
                  const Icon = p.icon;
                  return (
                    <div
                      key={idx}
                      style={{
                        background: 'rgba(18, 24, 40, 0.7)',
                        border: '1px solid rgba(255, 255, 255, 0.06)',
                        borderRadius: '16px',
                        padding: '24px 20px',
                        backdropFilter: 'blur(12px)'
                      }}
                      className="glow-card-hover"
                    >
                      <div style={{
                        width: '36px',
                        height: '36px',
                        borderRadius: '10px',
                        background: 'rgba(255, 255, 255, 0.04)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        marginBottom: '14px'
                      }}>
                        <Icon size={20} color={p.color} strokeWidth={2} />
                      </div>
                      <h3 style={{ fontSize: '15px', fontWeight: 700, color: '#ffffff', marginBottom: '8px' }}>
                        {p.title}
                      </h3>
                      <p style={{ fontSize: '12px', color: '#94a3b8', margin: 0, lineHeight: 1.55 }}>
                        {p.desc}
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        {/* ========================================================
            13. SECTION: Bottom CTA Banner: Ready to Practice Smarter?
        ======================================================== */}
        <section style={{ padding: '40px 0 100px', position: 'relative' }}>
          <div className="container">
            <div style={{
              background: 'radial-gradient(ellipse 80% 60% at 50% -20%, rgba(124, 58, 237, 0.35), transparent 70%), linear-gradient(180deg, rgba(17, 24, 39, 0.8) 0%, rgba(10, 14, 24, 0.98) 100%)',
              border: '1px solid rgba(168, 85, 247, 0.25)',
              borderRadius: '28px',
              padding: '64px 32px',
              textAlign: 'center',
              position: 'relative',
              overflow: 'hidden',
              boxShadow: '0 30px 80px -20px rgba(0, 0, 0, 0.9), 0 0 70px rgba(124, 58, 237, 0.2)'
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
                  marginBottom: '20px'
                }}>
                  <span style={{ color: '#818cf8', fontWeight: 900, fontSize: '11px' }}>▌</span>
                  <span style={{ fontSize: '11px', fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase', color: '#c7d2fe' }}>
                    GET STARTED TODAY
                  </span>
                </div>

                <h2 style={{
                  fontSize: 'clamp(32px, 4.5vw, 48px)',
                  fontWeight: 800,
                  color: '#ffffff',
                  letterSpacing: '-0.025em',
                  lineHeight: 1.18,
                  marginBottom: '16px'
                }}>
                  Ready to Practice Smarter?
                </h2>

                <p style={{
                  fontSize: '15.5px',
                  color: '#cbd5e1',
                  lineHeight: 1.65,
                  maxWidth: '640px',
                  margin: '0 auto 36px'
                }}>
                  Join thousands of software leaders and ambitious candidates mastering their technical stories before they walk into the room.
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
                    <span>Get Started Now</span>
                    <ArrowRight size={16} />
                  </button>

                  <button
                    onClick={onNavigateToSimulations ? onNavigateToSimulations : () => handleStartPractice()}
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      background: 'rgba(255, 255, 255, 0.07)',
                      border: '1px solid rgba(255, 255, 255, 0.12)',
                      color: '#e2e8f0',
                      borderRadius: '9999px',
                      padding: '14px 26px',
                      fontSize: '14px',
                      fontWeight: 600,
                      cursor: 'pointer',
                      transition: 'all 0.2s ease'
                    }}
                  >
                    <span>Explore Interviews</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Global Footer */}
      <Footer />

      {/* Demo Video Modal */}
      <DemoVideoModal
        isOpen={isDemoOpen}
        onClose={() => setIsDemoOpen(false)}
        onStartPractice={() => handleStartPractice()}
      />
    </div>
  );
};
