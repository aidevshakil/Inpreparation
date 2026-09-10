import React, { useState } from 'react';
import {
  Sparkles,
  ArrowRight,
  ShieldCheck,
  Zap,
  Mic,
  FileText,
  UserCheck,
  Cpu,
  Layers,
  Award,
  CheckCircle2,
  Lock,
  Volume2,
  Eye,
  Terminal,
  Server,
  Layout,
  Code
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
  const [activeCategory, setActiveCategory] = useState('All');
  const [isPlayingAudio, setIsPlayingAudio] = useState(false);

  // 1. Full-Stack Capability Cards (Section 1)
  const journeyCards = [
    {
      step: 'STEP 01',
      title: '500+ Curated Question Packs',
      desc: 'Role-calibrated question sets covering Frontend, Backend, ML, System Design, and Behavioral tracks bench-marked from top firms.',
      tags: ['Frontend', 'Backend', 'ML', 'Behavioral']
    },
    {
      step: 'STEP 02',
      title: 'Ultra-Realistic AI Voice Interviewers',
      desc: 'Bidirectional low-latency speech with natural cadence, pauses, and intelligent follow-ups based on your previous answers.',
      tags: ['<300ms Latency', 'Zero Robot Tone']
    },
    {
      step: 'STEP 03',
      title: 'Personalized Interview Personas',
      desc: 'Configure interviewer style: Encouraging Mentor, Rigorous Bar Raiser, or Skeptical Technical Lead to match your target interview.',
      tags: ['Strictness 1-10', 'Tone Calibration']
    },
    {
      step: 'STEP 04',
      title: 'Interactive Whiteboard & Code Canvas',
      desc: 'Draw distributed architecture diagrams and write live code evaluated for space/time complexity and edge cases.',
      tags: ['Live Code Eval', 'Architecture Canvas']
    },
    {
      step: 'STEP 05',
      title: 'Multi-modal Video & Audio Feedback',
      desc: 'Computer vision and acoustic NLP evaluate eye contact, posture stability, vocal pitch inflection, and speech pacing.',
      tags: ['Eye Contact %', 'Cadence WPM', 'Tone']
    },
    {
      step: 'STEP 06',
      title: 'Diagnostic Performance Scorecard',
      desc: 'Instant post-interview report with timestamped audio transcriptions, STAR method breakdowns, and model answer comparison.',
      tags: ['STAR Breakdown', 'PDF Export']
    }
  ];

  // 2. 5 Communication Dimensions (Section 3)
  const communicationDimensions = [
    { score: 86, label: 'Clarity & Flow', sub: 'Optimal cadence & zero verbal crutches' },
    { score: 92, label: 'STAR Structure', sub: 'Clear Context, Task, Action & Result' },
    { score: 84, label: 'Technical Depth', sub: 'Architectural trade-offs & edge cases' },
    { score: 88, label: 'Conciseness', sub: 'Impactful delivery without rambling' },
    { score: 81, label: 'Executive Presence', sub: 'Confident tone & eye alignment' }
  ];

  // 3. Role Packs (Section 7)
  const rolePacks = [
    {
      id: 'frontend',
      category: 'Engineering',
      name: 'Frontend Engineering',
      icon: <Layout size={20} color="#818cf8" />,
      topics: 'React 19, Next.js, Web Vitals, State Architecture',
      questions: '120+ Questions'
    },
    {
      id: 'backend',
      category: 'Engineering',
      name: 'Backend Systems',
      icon: <Server size={20} color="#06b6d4" />,
      topics: 'Distributed DBs, Kafka, Go, Concurrency & Locking',
      questions: '140+ Questions'
    },
    {
      id: 'pm',
      category: 'Product & Design',
      name: 'Product Management',
      icon: <Sparkles size={20} color="#f59e0b" />,
      topics: 'CIRCLES Framework, North Star Metrics, GTM',
      questions: '95+ Questions'
    },
    {
      id: 'ai',
      category: 'Data & AI',
      name: 'AI & Data Science',
      icon: <Cpu size={20} color="#c084fc" />,
      topics: 'RAG Pipelines, LLM Evals, GPU Optimization',
      questions: '110+ Questions'
    },
    {
      id: 'behavioral',
      category: 'Leadership & Behavioral',
      name: 'Behavioral & Leadership',
      icon: <UserCheck size={20} color="#10b981" />,
      topics: 'STAR Method, Conflict Resolution, Team Culture',
      questions: '85+ Questions'
    },
    {
      id: 'devops',
      category: 'Engineering',
      name: 'DevOps & SRE',
      icon: <Terminal size={20} color="#38bdf8" />,
      topics: 'Kubernetes, AWS IAM, Incident Post-Mortems',
      questions: '90+ Questions'
    },
    {
      id: 'system-design',
      category: 'Engineering',
      name: 'System Design at Scale',
      icon: <Code size={20} color="#ec4899" />,
      topics: 'Multi-Region Failover, Sharding, CAP Theorem',
      questions: '75+ Questions'
    },
    {
      id: 'leadership',
      category: 'Leadership & Behavioral',
      name: 'Engineering Management',
      icon: <Award size={20} color="#fbbf24" />,
      topics: 'Hiring Rubrics, Roadmaps, Cross-Org Alignment',
      questions: '65+ Questions'
    }
  ];

  const filteredRoles = activeCategory === 'All'
    ? rolePacks
    : rolePacks.filter(r => r.category === activeCategory);

  const playVoiceSample = (text: string) => {
    if ('speechSynthesis' in window) {
      if (isPlayingAudio) {
        window.speechSynthesis.cancel();
        setIsPlayingAudio(false);
      } else {
        const utterance = new SpeechSynthesisUtterance(text);
        utterance.rate = 1.0;
        utterance.pitch = 1.0;
        utterance.onend = () => setIsPlayingAudio(false);
        utterance.onerror = () => setIsPlayingAudio(false);
        window.speechSynthesis.speak(utterance);
        setIsPlayingAudio(true);
      }
    }
  };

  const handleStartPractice = (role?: string) => {
    if (role) setSelectedRole(role);
    setIsSimulatorOpen(true);
  };

  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', background: '#07090e', color: '#f8fafc' }}>
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
            HERO SECTION: Everything You Need to Become Interview Ready
        ======================================================== */}
        <section style={{ padding: '60px 0 70px', position: 'relative', overflow: 'hidden' }}>
          <div className="bg-ambient-glow" style={{ top: '-20%', left: '20%', width: '500px', height: '500px', background: 'radial-gradient(circle, rgba(99, 102, 241, 0.35) 0%, transparent 70%)' }} />
          <div className="bg-ambient-glow" style={{ top: '30%', right: '10%', width: '450px', height: '450px', background: 'radial-gradient(circle, rgba(6, 182, 212, 0.25) 0%, transparent 70%)' }} />

          <div className="container" style={{ textAlign: 'center', position: 'relative', zIndex: 2 }}>
            <div style={{ marginBottom: '18px' }}>
              <span className="badge-pill badge-purple">
                <Sparkles size={14} color="#c084fc" />
                AI-POWERED INTERVIEW SUITE & ARCHITECTURE
              </span>
            </div>

            <h1 style={{
              fontSize: 'clamp(38px, 5.5vw, 62px)',
              fontWeight: 800,
              letterSpacing: '-0.03em',
              lineHeight: 1.15,
              marginBottom: '20px',
              maxWidth: '900px',
              margin: '0 auto 20px'
            }}>
              Everything You Need to Become{' '}
              <span className="gradient-highlight-text" style={{ textShadow: '0 0 35px rgba(124, 58, 237, 0.4)' }}>
                Interview Ready
              </span>
            </h1>

            <p style={{
              fontSize: '18px',
              color: '#94a3b8',
              lineHeight: 1.7,
              maxWidth: '740px',
              margin: '0 auto 36px'
            }}>
              From role-specific question banks and ultra-low latency speech to multi-modal video analytics,
              explore the full depth of our platform designed to build unshakable interview confidence.
            </p>

            <div style={{
              display: 'flex',
              flexWrap: 'wrap',
              justifyContent: 'center',
              gap: '16px',
              marginBottom: '40px'
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
                style={{ fontSize: '15px', padding: '15px 28px' }}
              >
                <span>Explore Features Library</span>
              </button>
            </div>

            {/* Sub Feature Badges Bar */}
            <div style={{
              display: 'flex',
              flexWrap: 'wrap',
              justifyContent: 'center',
              alignItems: 'center',
              gap: '24px',
              paddingTop: '24px',
              borderTop: '1px solid rgba(255, 255, 255, 0.08)',
              color: '#cbd5e1',
              fontSize: '13px',
              fontWeight: 500
            }}>
              <span style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <ShieldCheck size={16} color="#10b981" /> SOC-2 Compliant
              </span>
              <span style={{ color: '#475569' }}>•</span>
              <span style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <Zap size={16} color="#f59e0b" /> Sub-300ms Speech Latency
              </span>
              <span style={{ color: '#475569' }}>•</span>
              <span style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <Layers size={16} color="#818cf8" /> 500+ Curated Question Packs
              </span>
              <span style={{ color: '#475569' }}>•</span>
              <span style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <Mic size={16} color="#06b6d4" /> Multi-modal Feedback
              </span>
              <span style={{ color: '#475569' }}>•</span>
              <span style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <FileText size={16} color="#ec4899" /> Custom Hiring Rubrics
              </span>
            </div>
          </div>
        </section>

        {/* ========================================================
            SECTION 1: One Platform for Your Complete Interview Journey
        ======================================================== */}
        <section style={{ padding: '70px 0', position: 'relative' }}>
          <div className="container">
            <div style={{ textAlign: 'center', maxWidth: '780px', margin: '0 auto 50px' }}>
              <span className="badge-pill badge-cyan" style={{ marginBottom: '12px' }}>
                FULL-STACK REHEARSAL ENGINE
              </span>
              <h2 style={{ fontSize: 'clamp(28px, 4vw, 42px)', fontWeight: 800, letterSpacing: '-0.02em', marginBottom: '14px' }}>
                One Platform for Your Complete Interview Journey
              </h2>
              <p style={{ fontSize: '16px', color: '#94a3b8' }}>
                A complete end-to-end rehearsal engine with adaptive question branches, real-time audio evaluation, and automated diagnostic feedback.
              </p>
            </div>

            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
              gap: '24px'
            }}>
              {journeyCards.map((card, idx) => (
                <div
                  key={idx}
                  className="glass-card"
                  style={{
                    padding: '28px',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                    background: 'linear-gradient(180deg, #111728 0%, #0c101c 100%)'
                  }}
                >
                  <div>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px' }}>
                      <span style={{ fontSize: '11px', fontWeight: 800, color: '#818cf8', letterSpacing: '0.08em' }}>
                        {card.step}
                      </span>
                      <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#06b6d4' }} />
                    </div>

                    <h3 style={{ fontSize: '18px', fontWeight: 800, color: '#f8fafc', marginBottom: '10px' }}>
                      {card.title}
                    </h3>

                    <p style={{ fontSize: '13px', color: '#94a3b8', lineHeight: 1.6, marginBottom: '20px' }}>
                      {card.desc}
                    </p>
                  </div>

                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', paddingTop: '16px', borderTop: '1px solid rgba(255, 255, 255, 0.06)' }}>
                    {card.tags.map((tag, tIdx) => (
                      <span
                        key={tIdx}
                        style={{
                          background: 'rgba(255, 255, 255, 0.05)',
                          border: '1px solid rgba(255, 255, 255, 0.08)',
                          color: '#cbd5e1',
                          padding: '3px 8px',
                          borderRadius: '6px',
                          fontSize: '11px',
                          fontWeight: 600
                        }}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ========================================================
            SECTION 2: Understand the Quality of Your Answers
        ======================================================== */}
        <section style={{ padding: '70px 0', background: 'linear-gradient(180deg, #07090e 0%, #0d121e 100%)' }}>
          <div className="container">
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
              gap: '40px',
              alignItems: 'center'
            }}>
              {/* Left Column */}
              <div>
                <span className="badge-pill badge-emerald" style={{ marginBottom: '14px' }}>
                  ANSWER QUALITY MATRIX
                </span>
                <h2 style={{ fontSize: 'clamp(26px, 3.5vw, 40px)', fontWeight: 800, letterSpacing: '-0.02em', marginBottom: '16px', lineHeight: 1.2 }}>
                  Understand the Quality of Your Answers
                </h2>
                <p style={{ fontSize: '15px', color: '#94a3b8', lineHeight: 1.7, marginBottom: '28px' }}>
                  Our proprietary rubric engine scores every answer on clarity, depth, structure, and technical correctness using models trained on top-tier hiring standards.
                </p>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
                  {[
                    { label: 'Technical Depth & Accuracy', val: '92%' },
                    { label: 'STAR Method Adherence', val: '88%' },
                    { label: 'Conciseness & WPM Cadence', val: '94%' },
                    { label: 'Problem-Solving Edge Cases', val: '86%' },
                    { label: 'Impact & Quantified Results', val: '90%' }
                  ].map((item, idx) => (
                    <div key={idx} style={{ background: 'rgba(255, 255, 255, 0.03)', border: '1px solid rgba(255, 255, 255, 0.06)', borderRadius: '10px', padding: '12px 16px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                      <span style={{ fontSize: '14px', color: '#cbd5e1', fontWeight: 600 }}>{item.label}</span>
                      <span style={{ fontSize: '14px', fontWeight: 800, color: '#67e8f9' }}>{item.val}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Right Column: Question 2 Evaluation Card */}
              <div style={{
                background: 'linear-gradient(180deg, #131a2c 0%, #0c101a 100%)',
                border: '1px solid rgba(99, 102, 241, 0.35)',
                borderRadius: '24px',
                padding: '32px',
                boxShadow: '0 20px 50px -10px rgba(0, 0, 0, 0.7), 0 0 35px rgba(99, 102, 241, 0.15)'
              }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '24px', paddingBottom: '16px', borderBottom: '1px solid rgba(255, 255, 255, 0.08)' }}>
                  <div>
                    <span style={{ fontSize: '11px', fontWeight: 700, color: '#818cf8', textTransform: 'uppercase' }}>
                      QUESTION 2 EVALUATION
                    </span>
                    <div style={{ fontSize: '18px', fontWeight: 800, color: '#f8fafc', marginTop: '2px' }}>
                      Distributed Locking & Idempotency
                    </div>
                  </div>
                  <div style={{ textAlign: 'right' }}>
                    <div style={{ fontSize: '28px', fontWeight: 800, color: '#10b981' }}>86/100</div>
                    <div style={{ fontSize: '11px', color: '#94a3b8' }}>Strong Senior Tier</div>
                  </div>
                </div>

                {/* Score Progress Bars */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', marginBottom: '24px' }}>
                  <div>
                    <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '12px', marginBottom: '6px' }}>
                      <span style={{ color: '#cbd5e1' }}>Technical Precision</span>
                      <span style={{ color: '#10b981', fontWeight: 700 }}>94% (Exceptional)</span>
                    </div>
                    <div style={{ width: '100%', height: '6px', background: 'rgba(255, 255, 255, 0.08)', borderRadius: '3px', overflow: 'hidden' }}>
                      <div style={{ width: '94%', height: '100%', background: '#10b981', borderRadius: '3px' }} />
                    </div>
                  </div>

                  <div>
                    <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '12px', marginBottom: '6px' }}>
                      <span style={{ color: '#cbd5e1' }}>STAR Delivery & Framing</span>
                      <span style={{ color: '#818cf8', fontWeight: 700 }}>88% (Proficient)</span>
                    </div>
                    <div style={{ width: '100%', height: '6px', background: 'rgba(255, 255, 255, 0.08)', borderRadius: '3px', overflow: 'hidden' }}>
                      <div style={{ width: '88%', height: '100%', background: '#818cf8', borderRadius: '3px' }} />
                    </div>
                  </div>

                  <div>
                    <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '12px', marginBottom: '6px' }}>
                      <span style={{ color: '#cbd5e1' }}>Conciseness & Time Target</span>
                      <span style={{ color: '#f59e0b', fontWeight: 700 }}>82% (Needs slight trim)</span>
                    </div>
                    <div style={{ width: '100%', height: '6px', background: 'rgba(255, 255, 255, 0.08)', borderRadius: '3px', overflow: 'hidden' }}>
                      <div style={{ width: '82%', height: '100%', background: '#f59e0b', borderRadius: '3px' }} />
                    </div>
                  </div>
                </div>

                {/* Highlight Quote Box */}
                <div style={{ background: 'rgba(99, 102, 241, 0.1)', border: '1px solid rgba(99, 102, 241, 0.25)', borderRadius: '12px', padding: '14px' }}>
                  <div style={{ fontSize: '11px', fontWeight: 700, color: '#818cf8', textTransform: 'uppercase', marginBottom: '4px' }}>
                    ✦ AI Evaluator Highlight:
                  </div>
                  <p style={{ fontSize: '13px', color: '#cbd5e1', lineHeight: 1.5 }}>
                    "Identified the distributed transaction deadlock accurately and suggested Redis distributed locks with idempotent keys."
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ========================================================
            SECTION 3: Improve How You Explain Your Ideas
        ======================================================== */}
        <section style={{ padding: '70px 0', position: 'relative' }}>
          <div className="container">
            <div style={{ textAlign: 'center', maxWidth: '780px', margin: '0 auto 48px' }}>
              <span className="badge-pill badge-purple" style={{ marginBottom: '12px' }}>
                STRUCTURED COMMUNICATION ENGINE
              </span>
              <h2 style={{ fontSize: 'clamp(28px, 4vw, 42px)', fontWeight: 800, letterSpacing: '-0.02em', marginBottom: '14px' }}>
                Improve How You Explain Your Ideas
              </h2>
              <p style={{ fontSize: '16px', color: '#94a3b8' }}>
                Communication breakdown: We analyze your answer across 5 core cognitive and delivery dimensions.
              </p>
            </div>

            {/* 5 Metric Dimensions */}
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
              gap: '16px',
              marginBottom: '32px'
            }}>
              {communicationDimensions.map((dim, idx) => (
                <div
                  key={idx}
                  className="glass-card"
                  style={{
                    textAlign: 'center',
                    padding: '24px 16px',
                    background: '#101524'
                  }}
                >
                  <div style={{ fontSize: '36px', fontWeight: 800, color: '#818cf8', letterSpacing: '-0.02em', marginBottom: '4px' }}>
                    {dim.score}
                  </div>
                  <div style={{ fontSize: '14px', fontWeight: 700, color: '#f8fafc', marginBottom: '4px' }}>
                    {dim.label}
                  </div>
                  <div style={{ fontSize: '11px', color: '#64748b' }}>
                    {dim.sub}
                  </div>
                </div>
              ))}
            </div>

            {/* 5-Step Structure Timing Bar */}
            <div style={{
              background: '#0d121c',
              border: '1px solid rgba(255, 255, 255, 0.08)',
              borderRadius: '16px',
              padding: '20px 24px',
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))',
              gap: '16px',
              marginBottom: '28px'
            }}>
              {[
                { step: '1. Situation', target: '15s Target', status: 'Optimal' },
                { step: '2. Task', target: '20s Target', status: 'Concise' },
                { step: '3. Action', target: '45s Target', status: 'Deep Technical Focus' },
                { step: '4. Result', target: '20s Target', status: 'Quantified ROI' },
                { step: '5. Reflection', target: '10s Target', status: 'Growth Mindset' }
              ].map((s, idx) => (
                <div key={idx} style={{ textAlign: 'center', borderRight: idx < 4 ? '1px solid rgba(255, 255, 255, 0.06)' : 'none' }}>
                  <div style={{ fontSize: '13px', fontWeight: 700, color: '#f8fafc' }}>{s.step}</div>
                  <div style={{ fontSize: '11px', color: '#818cf8', fontWeight: 600, marginTop: '2px' }}>{s.target}</div>
                  <div style={{ fontSize: '10px', color: '#10b981', marginTop: '2px' }}>✓ {s.status}</div>
                </div>
              ))}
            </div>

            {/* Coaching Callout Box */}
            <div style={{
              background: 'linear-gradient(90deg, rgba(124, 58, 237, 0.15) 0%, rgba(6, 182, 212, 0.1) 100%)',
              border: '1px solid rgba(124, 58, 237, 0.35)',
              borderRadius: '16px',
              padding: '20px 24px',
              display: 'flex',
              alignItems: 'center',
              gap: '16px'
            }}>
              <div style={{ fontSize: '24px' }}>💡</div>
              <div>
                <span style={{ fontSize: '13px', fontWeight: 700, color: '#c084fc', textTransform: 'uppercase' }}>
                  AI Coaching Recommendation:
                </span>
                <p style={{ fontSize: '14px', color: '#e2e8f0', lineHeight: 1.6, marginTop: '2px' }}>
                  "Shorten your initial context from 35s to 15s. Spend more time detailing the specific distributed lock implementation and measurable performance gains."
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ========================================================
            SECTION 4: Improve Your Vocal Delivery (Waveform Telemetry)
        ======================================================== */}
        <section style={{ padding: '70px 0', background: 'linear-gradient(180deg, #0d121e 0%, #07090e 100%)' }}>
          <div className="container">
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
              gap: '40px',
              alignItems: 'center'
            }}>
              {/* Left Column: Waveform Graphic */}
              <div style={{
                background: '#0a0e17',
                border: '1px solid rgba(6, 182, 212, 0.3)',
                borderRadius: '24px',
                padding: '28px',
                boxShadow: '0 20px 40px rgba(0, 0, 0, 0.7)'
              }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
                  <span style={{ fontSize: '12px', fontWeight: 700, color: '#67e8f9', display: 'flex', alignItems: 'center', gap: '6px' }}>
                    <Mic size={14} /> ACOUSTIC NLP TELEMETRY
                  </span>
                  <button
                    onClick={() => playVoiceSample("Your pacing is steady at 142 words per minute, with clear articulation and zero filler words.")}
                    style={{ background: 'rgba(6, 182, 212, 0.15)', border: '1px solid rgba(6, 182, 212, 0.3)', color: '#67e8f9', borderRadius: '8px', padding: '4px 10px', fontSize: '11px', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '4px' }}
                  >
                    <Volume2 size={12} /> Test Audio
                  </button>
                </div>

                {/* Animated Waveform Display */}
                <div style={{ height: '90px', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '4px', background: 'rgba(0, 0, 0, 0.4)', borderRadius: '12px', padding: '0 16px', marginBottom: '20px' }}>
                  {[12, 24, 48, 32, 64, 40, 28, 56, 36, 18, 52, 70, 44, 26, 60, 38, 20, 46, 30, 16].map((h, idx) => (
                    <div
                      key={idx}
                      style={{
                        width: '4px',
                        height: `${h}px`,
                        background: 'linear-gradient(180deg, #06b6d4 0%, #6366f1 100%)',
                        borderRadius: '2px'
                      }}
                    />
                  ))}
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '12px', textAlign: 'center' }}>
                  <div style={{ background: 'rgba(255, 255, 255, 0.03)', padding: '12px', borderRadius: '10px' }}>
                    <div style={{ fontSize: '18px', fontWeight: 800, color: '#10b981' }}>142 WPM</div>
                    <div style={{ fontSize: '11px', color: '#94a3b8' }}>Cadence (130-150)</div>
                  </div>
                  <div style={{ background: 'rgba(255, 255, 255, 0.03)', padding: '12px', borderRadius: '10px' }}>
                    <div style={{ fontSize: '18px', fontWeight: 800, color: '#10b981' }}>0 Fillers</div>
                    <div style={{ fontSize: '11px', color: '#94a3b8' }}>Clean Articulation</div>
                  </div>
                  <div style={{ background: 'rgba(255, 255, 255, 0.03)', padding: '12px', borderRadius: '10px' }}>
                    <div style={{ fontSize: '18px', fontWeight: 800, color: '#67e8f9' }}>1.4s</div>
                    <div style={{ fontSize: '11px', color: '#94a3b8' }}>Natural Pauses</div>
                  </div>
                </div>
              </div>

              {/* Right Column: Descriptions */}
              <div>
                <span className="badge-pill badge-cyan" style={{ marginBottom: '14px' }}>
                  AUDIO SPEECH ENGINE
                </span>
                <h2 style={{ fontSize: 'clamp(26px, 3.5vw, 40px)', fontWeight: 800, letterSpacing: '-0.02em', marginBottom: '16px', lineHeight: 1.2 }}>
                  Improve Your Vocal Delivery
                </h2>
                <p style={{ fontSize: '15px', color: '#94a3b8', lineHeight: 1.7, marginBottom: '24px' }}>
                  Speech cadence, pitch modulation, and pausing for emphasis project authority and executive presence.
                </p>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                  <div style={{ display: 'flex', alignItems: 'flex-start', gap: '10px', fontSize: '14px', color: '#cbd5e1' }}>
                    <CheckCircle2 size={18} color="#10b981" style={{ marginTop: '2px', flexShrink: 0 }} />
                    <span>Real-time feedback on speaking rate (flags &gt;160 WPM rushing or &lt;110 WPM dragging).</span>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'flex-start', gap: '10px', fontSize: '14px', color: '#cbd5e1' }}>
                    <CheckCircle2 size={18} color="#10b981" style={{ marginTop: '2px', flexShrink: 0 }} />
                    <span>Instant filter detection for "um", "ah", "basically", and "like".</span>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'flex-start', gap: '10px', fontSize: '14px', color: '#cbd5e1' }}>
                    <CheckCircle2 size={18} color="#10b981" style={{ marginTop: '2px', flexShrink: 0 }} />
                    <span>Vocal inflection training to eliminate monotone delivery under pressure.</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ========================================================
            SECTION 5: Improve Your On-Camera Presence (Computer Vision)
        ======================================================== */}
        <section style={{ padding: '70px 0', position: 'relative' }}>
          <div className="container">
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
              gap: '40px',
              alignItems: 'center'
            }}>
              {/* Left Column: CV Telemetry Stats */}
              <div>
                <span className="badge-pill badge-purple" style={{ marginBottom: '14px' }}>
                  COMPUTER VISION TELEMETRY
                </span>
                <h2 style={{ fontSize: 'clamp(26px, 3.5vw, 40px)', fontWeight: 800, letterSpacing: '-0.02em', marginBottom: '16px', lineHeight: 1.2 }}>
                  Improve Your On-Camera Presence
                </h2>
                <p style={{ fontSize: '15px', color: '#94a3b8', lineHeight: 1.7, marginBottom: '28px' }}>
                  Real-time webcam telemetry tracks posture stability, eye contact alignment, and facial engagement without storing any video on external servers.
                </p>

                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
                  <div style={{ background: '#111728', border: '1px solid rgba(255, 255, 255, 0.08)', borderRadius: '14px', padding: '18px' }}>
                    <div style={{ fontSize: '28px', fontWeight: 800, color: '#10b981' }}>94%</div>
                    <div style={{ fontSize: '13px', color: '#cbd5e1', fontWeight: 600 }}>Eye Contact Alignment</div>
                    <div style={{ fontSize: '11px', color: '#64748b' }}>Consistent camera focus</div>
                  </div>
                  <div style={{ background: '#111728', border: '1px solid rgba(255, 255, 255, 0.08)', borderRadius: '14px', padding: '18px' }}>
                    <div style={{ fontSize: '28px', fontWeight: 800, color: '#818cf8' }}>88%</div>
                    <div style={{ fontSize: '13px', color: '#cbd5e1', fontWeight: 600 }}>Posture Steadiness</div>
                    <div style={{ fontSize: '11px', color: '#64748b' }}>Minimal nervous shifting</div>
                  </div>
                </div>
              </div>

              {/* Right Column: Virtual Studio Mockup */}
              <div style={{
                background: 'linear-gradient(180deg, #131a29 0%, #0c101a 100%)',
                border: '1px solid rgba(139, 92, 246, 0.35)',
                borderRadius: '24px',
                padding: '24px',
                boxShadow: '0 25px 60px -15px rgba(0, 0, 0, 0.8)'
              }}>
                <div style={{
                  height: '220px',
                  borderRadius: '16px',
                  background: 'linear-gradient(180deg, #1c2438 0%, #101624 100%)',
                  border: '1px solid rgba(255, 255, 255, 0.08)',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'center',
                  position: 'relative'
                }}>
                  <div style={{ width: '70px', height: '70px', borderRadius: '50%', background: 'linear-gradient(135deg, #7c3aed 0%, #06b6d4 100%)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '8px' }}>
                    <UserCheck size={36} color="#fff" />
                  </div>
                  <div style={{ fontSize: '14px', fontWeight: 800, color: '#f8fafc' }}>AI Host & Candidate Stream</div>
                  <div style={{ fontSize: '11px', color: '#10b981', display: 'flex', alignItems: 'center', gap: '4px', marginTop: '4px' }}>
                    <Eye size={12} /> Tracking Active: 94% Centered
                  </div>

                  <div style={{ position: 'absolute', bottom: '10px', left: '10px', background: 'rgba(0,0,0,0.6)', padding: '3px 8px', borderRadius: '6px', fontSize: '10px', color: '#67e8f9' }}>
                    24.7 FPS Zero-Lag Processing
                  </div>
                </div>

                <div style={{ marginTop: '16px', padding: '12px 16px', background: 'rgba(0, 0, 0, 0.3)', borderRadius: '12px', fontSize: '12px', color: '#94a3b8', display: 'flex', justifyContent: 'space-between' }}>
                  <span>Facial Affect: <b style={{ color: '#10b981' }}>Engaged & Composed</b></span>
                  <span>Head Movement: <b style={{ color: '#67e8f9' }}>Stable</b></span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ========================================================
            SECTION 6: Practice What Matters Most for You (Role Filter)
        ======================================================== */}
        <section style={{ padding: '70px 0', background: 'linear-gradient(180deg, #07090e 0%, #0f1422 100%)' }}>
          <div className="container">
            <div style={{ textAlign: 'center', maxWidth: '780px', margin: '0 auto 40px' }}>
              <span className="badge-pill badge-emerald" style={{ marginBottom: '12px' }}>
                TARGETED ROLE PACKS
              </span>
              <h2 style={{ fontSize: 'clamp(28px, 4vw, 42px)', fontWeight: 800, letterSpacing: '-0.02em', marginBottom: '14px' }}>
                Practice What Matters Most for You
              </h2>
              <p style={{ fontSize: '16px', color: '#94a3b8', marginBottom: '28px' }}>
                500+ curated question packs covering specialized technical and leadership domains.
              </p>

              {/* Category Filter Pills */}
              <div style={{
                display: 'inline-flex',
                flexWrap: 'wrap',
                justifyContent: 'center',
                gap: '8px',
                background: 'rgba(255, 255, 255, 0.04)',
                padding: '6px',
                borderRadius: '9999px',
                border: '1px solid rgba(255, 255, 255, 0.08)'
              }}>
                {['All', 'Engineering', 'Product & Design', 'Data & AI', 'Leadership & Behavioral'].map((cat) => (
                  <button
                    key={cat}
                    onClick={() => setActiveCategory(cat)}
                    style={{
                      background: activeCategory === cat ? '#6366f1' : 'transparent',
                      color: activeCategory === cat ? '#fff' : '#94a3b8',
                      border: 'none',
                      borderRadius: '9999px',
                      padding: '6px 16px',
                      fontSize: '12px',
                      fontWeight: 700,
                      cursor: 'pointer',
                      transition: 'all 0.2s'
                    }}
                  >
                    {cat}
                  </button>
                ))}
              </div>
            </div>

            {/* 8 Role Cards Grid */}
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
              gap: '20px'
            }}>
              {filteredRoles.map((role) => (
                <div
                  key={role.id}
                  onClick={() => handleStartPractice(role.name)}
                  className="glass-card"
                  style={{
                    cursor: 'pointer',
                    padding: '24px',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                    background: '#0e121c',
                    transition: 'all 0.25s ease'
                  }}
                >
                  <div>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px' }}>
                      <div style={{ width: '40px', height: '40px', borderRadius: '10px', background: 'rgba(255, 255, 255, 0.05)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                        {role.icon}
                      </div>
                      <span style={{ fontSize: '11px', fontWeight: 700, color: '#67e8f9', background: 'rgba(6, 182, 212, 0.1)', padding: '3px 8px', borderRadius: '6px' }}>
                        {role.questions}
                      </span>
                    </div>

                    <h3 style={{ fontSize: '17px', fontWeight: 800, color: '#f8fafc', marginBottom: '8px' }}>
                      {role.name}
                    </h3>

                    <p style={{ fontSize: '12px', color: '#94a3b8', lineHeight: 1.5, marginBottom: '20px' }}>
                      {role.topics}
                    </p>
                  </div>

                  <div style={{
                    paddingTop: '14px',
                    borderTop: '1px solid rgba(255, 255, 255, 0.06)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    fontSize: '12px',
                    color: '#818cf8',
                    fontWeight: 700
                  }}>
                    <span>Launch Pack</span>
                    <ArrowRight size={14} />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ========================================================
            SECTION 7: From One Session to a Complete Performance Report
        ======================================================== */}
        <section style={{ padding: '70px 0', position: 'relative' }}>
          <div className="container">
            <div style={{
              background: 'linear-gradient(135deg, #111728 0%, #0c0f18 100%)',
              border: '1px solid rgba(99, 102, 241, 0.3)',
              borderRadius: '28px',
              padding: '40px',
              boxShadow: '0 25px 60px -15px rgba(0, 0, 0, 0.8)'
            }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '16px', marginBottom: '32px', paddingBottom: '20px', borderBottom: '1px solid rgba(255, 255, 255, 0.08)' }}>
                <div>
                  <span className="badge-pill badge-purple" style={{ marginBottom: '8px' }}>
                    DIAGNOSTIC TELEMETRY
                  </span>
                  <h2 style={{ fontSize: '28px', fontWeight: 800, color: '#f8fafc', marginTop: '6px' }}>
                    From One Session to a Complete Performance Report
                  </h2>
                </div>
                <div style={{ textAlign: 'right' }}>
                  <div style={{ fontSize: '36px', fontWeight: 800, color: '#818cf8' }}>89/100</div>
                  <div style={{ fontSize: '12px', color: '#10b981', fontWeight: 700 }}>✦ Offer-Ready Readiness Index</div>
                </div>
              </div>

              <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                gap: '24px',
                marginBottom: '28px'
              }}>
                {/* Metric Summary Bar */}
                <div style={{ background: 'rgba(0, 0, 0, 0.3)', borderRadius: '16px', padding: '20px' }}>
                  <div style={{ fontSize: '14px', fontWeight: 700, color: '#cbd5e1', marginBottom: '14px' }}>
                    Evaluated Rubric Dimensions
                  </div>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                    {[
                      { name: 'System Design Logic', score: 92 },
                      { name: 'STAR Framework', score: 88 },
                      { name: 'Vocal Delivery & WPM', score: 94 },
                      { name: 'Eye Contact & Presence', score: 90 }
                    ].map((m, idx) => (
                      <div key={idx}>
                        <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '12px', marginBottom: '4px' }}>
                          <span style={{ color: '#94a3b8' }}>{m.name}</span>
                          <span style={{ color: '#f8fafc', fontWeight: 700 }}>{m.score}%</span>
                        </div>
                        <div style={{ width: '100%', height: '5px', background: 'rgba(255, 255, 255, 0.08)', borderRadius: '3px' }}>
                          <div style={{ width: `${m.score}%`, height: '100%', background: '#818cf8', borderRadius: '3px' }} />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Growth Velocity */}
                <div style={{ background: 'rgba(0, 0, 0, 0.3)', borderRadius: '16px', padding: '20px' }}>
                  <div style={{ fontSize: '14px', fontWeight: 700, color: '#cbd5e1', marginBottom: '14px' }}>
                    Actionable Improvement Drills
                  </div>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                    <div style={{ display: 'flex', alignItems: 'flex-start', gap: '8px', fontSize: '12px', color: '#cbd5e1' }}>
                      <CheckCircle2 size={14} color="#10b981" style={{ marginTop: '2px', flexShrink: 0 }} />
                      <span>Sharding & Partitioning Drills (Target: 10k QPS resilience)</span>
                    </div>
                    <div style={{ display: 'flex', alignItems: 'flex-start', gap: '8px', fontSize: '12px', color: '#cbd5e1' }}>
                      <CheckCircle2 size={14} color="#10b981" style={{ marginTop: '2px', flexShrink: 0 }} />
                      <span>Opening 20-second STAR structure speed drills</span>
                    </div>
                    <div style={{ display: 'flex', alignItems: 'flex-start', gap: '8px', fontSize: '12px', color: '#cbd5e1' }}>
                      <CheckCircle2 size={14} color="#10b981" style={{ marginTop: '2px', flexShrink: 0 }} />
                      <span>Quantify business throughput numbers explicitly in closing</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ========================================================
            SECTION 8: Responsible AI Commitments
        ======================================================== */}
        <section style={{ padding: '70px 0', position: 'relative' }}>
          <div className="container">
            <div style={{ textAlign: 'center', maxWidth: '780px', margin: '0 auto 48px' }}>
              <span className="badge-pill badge-cyan" style={{ marginBottom: '12px' }}>
                TRUST & SECURITY
              </span>
              <h2 style={{ fontSize: 'clamp(28px, 4vw, 42px)', fontWeight: 800, letterSpacing: '-0.02em', marginBottom: '14px' }}>
                Our Responsible AI Commitments
              </h2>
              <p style={{ fontSize: '16px', color: '#94a3b8' }}>
                Enterprise privacy, zero data retention for public training, and bias-free evaluation standards.
              </p>
            </div>

            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
              gap: '20px'
            }}>
              {[
                {
                  icon: <Lock size={20} color="#10b981" />,
                  title: 'Data Transparency',
                  desc: 'All computer vision metrics execute client-side. We never store raw webcam footage on external servers.'
                },
                {
                  icon: <ShieldCheck size={20} color="#818cf8" />,
                  title: 'Elimination of Bias',
                  desc: 'Standardized hiring rubrics benchmarked to evaluate purely technical reasoning, STAR structure, and logic.'
                },
                {
                  icon: <Zap size={20} color="#06b6d4" />,
                  title: 'Reliable & Real-Time',
                  desc: 'Sub-300ms bidirectional voice latency for fluid, stutter-free conversational practice.'
                },
                {
                  icon: <UserCheck size={20} color="#f59e0b" />,
                  title: 'Full User Data Control',
                  desc: 'Purge transcripts, scorecard records, and interview histories at any time with a single click.'
                }
              ].map((comm, idx) => (
                <div
                  key={idx}
                  className="glass-card"
                  style={{
                    padding: '24px',
                    background: '#0d121c'
                  }}
                >
                  <div style={{ width: '42px', height: '42px', borderRadius: '10px', background: 'rgba(255, 255, 255, 0.05)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '16px' }}>
                    {comm.icon}
                  </div>
                  <h3 style={{ fontSize: '16px', fontWeight: 800, color: '#f8fafc', marginBottom: '8px' }}>
                    {comm.title}
                  </h3>
                  <p style={{ fontSize: '13px', color: '#94a3b8', lineHeight: 1.6 }}>
                    {comm.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ========================================================
            BOTTOM CTA BANNER: Ready to Practice Smarter?
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
                  ACCELERATE YOUR INTERVIEW READINESS
                </span>

                <h2 style={{
                  fontSize: 'clamp(32px, 5vw, 48px)',
                  fontWeight: 800,
                  color: '#ffffff',
                  letterSpacing: '-0.03em',
                  lineHeight: 1.2,
                  marginBottom: '18px'
                }}>
                  Ready to Practice Smarter?
                </h2>

                <p style={{
                  fontSize: '17px',
                  color: '#cbd5e1',
                  lineHeight: 1.7,
                  marginBottom: '36px'
                }}>
                  Join 10,000+ candidates who conquered anxiety and accelerated their interview performance with InPrep AI.
                </p>

                <div style={{
                  display: 'flex',
                  flexWrap: 'wrap',
                  justifyContent: 'center',
                  gap: '16px'
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
                    onClick={onNavigateToHome}
                    className="btn-secondary"
                    style={{ fontSize: '15px', padding: '15px 28px' }}
                  >
                    <span>View Pricing & Plans</span>
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
