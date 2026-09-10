import React, { useState } from 'react';
import {
  Sparkles,
  ArrowRight,
  Upload,
  FileText,
  UserCheck,
  CheckCircle2,
  Briefcase,
  Eye
} from 'lucide-react';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';
import { LiveSimulationModal } from '../components/LiveSimulationModal';
import { DemoVideoModal } from '../components/DemoVideoModal';

interface HowItWorksPageProps {
  onNavigateToHome: () => void;
  onNavigateToFeatures: () => void;
  onNavigateToSimulations?: () => void;
  onNavigateToAi?: () => void;
}

export const HowItWorksPage: React.FC<HowItWorksPageProps> = ({
  onNavigateToHome,
  onNavigateToFeatures,
  onNavigateToSimulations,
  onNavigateToAi
}) => {
  const [isSimulatorOpen, setIsSimulatorOpen] = useState(false);
  const [isDemoOpen, setIsDemoOpen] = useState(false);
  const [selectedRole, setSelectedRole] = useState('Senior Frontend Engineer');
  const [selectedLevel, setSelectedLevel] = useState('Senior • L5/L6');
  const [activePathway, setActivePathway] = useState<'upload' | 'role'>('upload');
  const [isUploading, setIsUploading] = useState(false);
  const [uploadedFileName, setUploadedFileName] = useState<string | null>(null);
  const [activePracticeMode, setActivePracticeMode] = useState<number>(0);

  // 1. 8 Journey Overview Cards
  const journeySteps = [
    { num: '01', title: 'Resume Parsing & Extraction', desc: 'AI extracts technical skills, leadership milestones, and stack experience from your CV.' },
    { num: '02', title: 'Custom Role Calibration', desc: 'Calibrate questions to your exact seniority level, target company, and JD requirements.' },
    { num: '03', title: 'Adaptive Interviewer Persona', desc: 'Choose between Encouraging Mentor, Tough Bar Raiser, or Fast-Paced Recruiter.' },
    { num: '04', title: 'Dynamic Conversational Simulation', desc: 'Real-time bidirectional voice interview with natural cadence and follow-up probes.' },
    { num: '05', title: 'Real-Time Hints & Pacing', desc: 'Get live guidance in practice mode to refine your answer structure without penalty.' },
    { num: '06', title: 'Multi-Modal Vision & Voice', desc: 'Computer vision and acoustic NLP evaluate eye contact, posture, WPM, and vocal tone.' },
    { num: '07', title: 'Diagnostic Scorecard & STAR', desc: 'Instant multi-dimensional report with timestamped audio and model answers.' },
    { num: '08', title: 'Targeted Action Drills', desc: 'Personalized follow-up exercises to eliminate weak points and accelerate readiness.' }
  ];

  // Mock CV Upload Handler
  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setUploadedFileName(file.name);
      setIsUploading(true);
      setTimeout(() => {
        setIsUploading(false);
      }, 1500);
    }
  };

  const handleStartPractice = (role?: string) => {
    if (role) setSelectedRole(role);
    setIsSimulatorOpen(true);
  };

  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', background: '#07090e', color: '#f8fafc' }}>
      {/* Navbar */}
      <Navbar
        onStartPractice={handleStartPractice}
        onNavigateToAi={onNavigateToAi}
        currentPage="how-it-works"
        onNavigate={(page) => {
          if (page === 'home') onNavigateToHome();
          if (page === 'features') onNavigateToFeatures();
          if (page === 'simulations' && onNavigateToSimulations) onNavigateToSimulations();
        }}
      />

      <main style={{ flex: 1 }}>
        {/* ========================================================
            HERO SECTION: From Your CV to Interview-Ready — Step by Step
        ======================================================== */}
        <section style={{ padding: '60px 0 70px', position: 'relative', overflow: 'hidden' }}>
          <div className="bg-ambient-glow" style={{ top: '-15%', left: '25%', width: '500px', height: '500px', background: 'radial-gradient(circle, rgba(124, 58, 237, 0.35) 0%, transparent 70%)' }} />
          <div className="bg-ambient-glow" style={{ top: '35%', right: '15%', width: '450px', height: '450px', background: 'radial-gradient(circle, rgba(6, 182, 212, 0.25) 0%, transparent 70%)' }} />

          <div className="container" style={{ textAlign: 'center', position: 'relative', zIndex: 2 }}>
            <div style={{ marginBottom: '18px' }}>
              <span className="badge-pill badge-purple">
                <Sparkles size={14} color="#c084fc" />
                HOW IT WORKS — END-TO-END PIPELINE
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
              marginBottom: '44px'
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
                <span>Explore Workflow</span>
              </button>
            </div>

            {/* Workflow Step Ribbon */}
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(140px, 1fr))',
              gap: '12px',
              maxWidth: '1000px',
              margin: '0 auto',
              background: 'rgba(14, 18, 27, 0.8)',
              padding: '16px',
              borderRadius: '16px',
              border: '1px solid rgba(255, 255, 255, 0.08)',
              backdropFilter: 'blur(12px)'
            }}>
              {[
                { step: '1. RESUME PARSING', color: '#818cf8' },
                { step: '2. ROLE SETUP', color: '#06b6d4' },
                { step: '3. LIVE SIMULATION', color: '#a855f7' },
                { step: '4. MULTI-MODAL ANALYSIS', color: '#f59e0b' },
                { step: '5. SCORECARD & FEEDBACK', color: '#10b981' },
                { step: '6. TARGETED DRILLS', color: '#ec4899' }
              ].map((ribbon, idx) => (
                <div key={idx} style={{ textAlign: 'center', padding: '6px', borderRadius: '8px', background: 'rgba(255, 255, 255, 0.02)' }}>
                  <div style={{ fontSize: '11px', fontWeight: 800, color: ribbon.color, letterSpacing: '0.04em' }}>
                    {ribbon.step}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ========================================================
            SECTION 1: 8-Card Journey Overview
        ======================================================== */}
        <section style={{ padding: '70px 0', position: 'relative' }}>
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
                    padding: '24px',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                    background: 'linear-gradient(180deg, #111728 0%, #0c101c 100%)'
                  }}
                >
                  <div>
                    <div style={{ fontSize: '26px', fontWeight: 800, color: '#334155', fontFamily: 'JetBrains Mono, monospace', marginBottom: '10px' }}>
                      {step.num}
                    </div>
                    <h3 style={{ fontSize: '16px', fontWeight: 800, color: '#f8fafc', marginBottom: '8px' }}>
                      {step.title}
                    </h3>
                    <p style={{ fontSize: '13px', color: '#94a3b8', lineHeight: 1.6 }}>
                      {step.desc}
                    </p>
                  </div>
                  <div style={{ paddingTop: '14px', borderTop: '1px solid rgba(255, 255, 255, 0.05)', marginTop: '16px', fontSize: '11px', color: '#818cf8', fontWeight: 700 }}>
                    Step {step.num} Active
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ========================================================
            STEP 1: Build Your Profile — Two Flexible Pathways
        ======================================================== */}
        <section style={{ padding: '70px 0', background: 'linear-gradient(180deg, #07090e 0%, #0e1322 100%)' }}>
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
                  borderColor: activePathway === 'upload' ? '#818cf8' : 'rgba(255, 255, 255, 0.08)',
                  background: activePathway === 'upload' ? '#141a2c' : '#0e121c',
                  boxShadow: activePathway === 'upload' ? '0 0 30px rgba(124, 58, 237, 0.25)' : 'none'
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '16px' }}>
                  <div style={{ width: '38px', height: '38px', borderRadius: '10px', background: 'rgba(99, 102, 241, 0.15)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <Upload size={18} color="#818cf8" />
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
                  padding: '36px 20px',
                  border: '2px dashed rgba(99, 102, 241, 0.4)',
                  borderRadius: '16px',
                  background: 'rgba(0, 0, 0, 0.3)',
                  cursor: 'pointer',
                  marginBottom: '18px'
                }}>
                  <input type="file" accept=".pdf,.doc,.docx" onChange={handleFileUpload} style={{ display: 'none' }} />
                  <FileText size={36} color="#818cf8" style={{ marginBottom: '10px' }} />
                  <span style={{ fontSize: '14px', fontWeight: 700, color: '#f8fafc' }}>
                    {uploadedFileName ? uploadedFileName : 'Click to Upload Resume (PDF, DOCX)'}
                  </span>
                  <span style={{ fontSize: '11px', color: '#64748b', marginTop: '4px' }}>
                    Up to 10MB • 100% Confidential & Secure
                  </span>
                </label>

                {isUploading && (
                  <div style={{ textAlign: 'center', color: '#67e8f9', fontSize: '12px', fontWeight: 600 }}>
                    ⚡ Parsing skills, architecture experiences & STAR milestones...
                  </div>
                )}
                {uploadedFileName && !isUploading && (
                  <div style={{ display: 'flex', alignItems: 'center', gap: '6px', color: '#10b981', fontSize: '12px', fontWeight: 700 }}>
                    <CheckCircle2 size={14} /> Resume parsed successfully (18 competencies extracted)
                  </div>
                )}
              </div>

              {/* Pathway 2: Select Role Directly */}
              <div
                onClick={() => setActivePathway('role')}
                className="glass-card"
                style={{
                  padding: '32px',
                  borderColor: activePathway === 'role' ? '#06b6d4' : 'rgba(255, 255, 255, 0.08)',
                  background: activePathway === 'role' ? '#111b28' : '#0e121c',
                  boxShadow: activePathway === 'role' ? '0 0 30px rgba(6, 182, 212, 0.25)' : 'none'
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '16px' }}>
                  <div style={{ width: '38px', height: '38px', borderRadius: '10px', background: 'rgba(6, 182, 212, 0.15)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <Briefcase size={18} color="#06b6d4" />
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

                <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', marginBottom: '20px' }}>
                  <div>
                    <label style={{ fontSize: '12px', color: '#cbd5e1', fontWeight: 600, display: 'block', marginBottom: '6px' }}>
                      Target Track:
                    </label>
                    <select
                      value={selectedRole}
                      onChange={(e) => setSelectedRole(e.target.value)}
                      style={{
                        width: '100%',
                        background: '#090d16',
                        border: '1px solid rgba(255, 255, 255, 0.12)',
                        color: '#f8fafc',
                        padding: '10px 12px',
                        borderRadius: '8px',
                        fontSize: '13px',
                        outline: 'none'
                      }}
                    >
                      <option value="Senior Frontend Engineer">Senior Frontend Engineer (React / Next.js)</option>
                      <option value="AI & Machine Learning Engineer">AI & ML Engineer (LLMs / PyTorch / RAG)</option>
                      <option value="Staff Distributed Systems Architect">Staff Distributed Systems Architect</option>
                      <option value="Product Manager — Growth & Strategy">Product Manager — Growth & Strategy</option>
                    </select>
                  </div>

                  <div>
                    <label style={{ fontSize: '12px', color: '#cbd5e1', fontWeight: 600, display: 'block', marginBottom: '6px' }}>
                      Seniority Level:
                    </label>
                    <div style={{ display: 'flex', gap: '8px' }}>
                      {['Mid-Level (L4)', 'Senior (L5)', 'Staff / Lead (L6+)'].map((lvl) => (
                        <button
                          key={lvl}
                          onClick={() => setSelectedLevel(lvl)}
                          style={{
                            flex: 1,
                            background: selectedLevel.includes(lvl.substring(0, 5)) ? 'rgba(6, 182, 212, 0.2)' : 'rgba(255, 255, 255, 0.04)',
                            border: selectedLevel.includes(lvl.substring(0, 5)) ? '1px solid #06b6d4' : '1px solid rgba(255, 255, 255, 0.08)',
                            color: '#fff',
                            padding: '8px 4px',
                            borderRadius: '6px',
                            fontSize: '11px',
                            fontWeight: 600,
                            cursor: 'pointer'
                          }}
                        >
                          {lvl}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>

                <button
                  onClick={() => handleStartPractice(selectedRole)}
                  className="btn-primary"
                  style={{ width: '100%', justifyContent: 'center', padding: '12px' }}
                >
                  <span>Calibrate Questions</span>
                  <ArrowRight size={15} />
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* ========================================================
            STEP 2 & 3: Interview Modes Built Around You
        ======================================================== */}
        <section style={{ padding: '70px 0', position: 'relative' }}>
          <div className="container">
            <div style={{ textAlign: 'center', maxWidth: '780px', margin: '0 auto 48px' }}>
              <span className="badge-pill badge-cyan" style={{ marginBottom: '12px' }}>
                STEP 2 & 3: ADAPTIVE PRACTICE MODES
              </span>
              <h2 style={{ fontSize: 'clamp(28px, 4vw, 42px)', fontWeight: 800, letterSpacing: '-0.02em', marginBottom: '14px' }}>
                Interview Modes Built Around You
              </h2>
              <p style={{ fontSize: '16px', color: '#94a3b8' }}>
                Simulate targeted technical rounds, behavioral STAR sessions, or full 45-minute comprehensive mock interviews.
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
                  tags: ['Big-O Analysis', 'System Sharding', 'Live Sandbox']
                },
                {
                  id: 1,
                  title: '2. Behavioral & Leadership Round',
                  badge: 'STAR Methodology',
                  desc: 'Assess situational leadership, conflict management, cross-functional persuasion, and business ROI delivery.',
                  tags: ['STAR Scoring', 'Vocal Inflection', 'Power Verbs']
                },
                {
                  id: 2,
                  title: '3. Full End-to-End Mock Session',
                  badge: '45-Min FAANG Loop Rehearsal',
                  desc: 'A full 4-stage simulation replicating actual Google, Meta, Amazon, and Stripe candidate assessment pipelines.',
                  tags: ['Multi-Stage', 'Full Scorecard', 'PDF Export']
                }
              ].map((mode) => (
                <div
                  key={mode.id}
                  onClick={() => setActivePracticeMode(mode.id)}
                  className="glass-card"
                  style={{
                    padding: '28px',
                    borderColor: activePracticeMode === mode.id ? '#818cf8' : 'rgba(255, 255, 255, 0.08)',
                    background: activePracticeMode === mode.id ? '#13192b' : '#0e121c',
                    boxShadow: activePracticeMode === mode.id ? '0 0 25px rgba(99, 102, 241, 0.2)' : 'none',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                    cursor: 'pointer'
                  }}
                >
                  <div>
                    <span style={{ fontSize: '11px', fontWeight: 700, color: '#818cf8', background: 'rgba(99, 102, 241, 0.12)', padding: '3px 8px', borderRadius: '6px' }}>
                      {mode.badge}
                    </span>
                    <h3 style={{ fontSize: '18px', fontWeight: 800, color: '#f8fafc', margin: '14px 0 8px' }}>
                      {mode.title}
                    </h3>
                    <p style={{ fontSize: '13px', color: '#94a3b8', lineHeight: 1.6, marginBottom: '20px' }}>
                      {mode.desc}
                    </p>
                  </div>

                  <div>
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px', marginBottom: '20px' }}>
                      {mode.tags.map((t, idx) => (
                        <span key={idx} style={{ background: 'rgba(255, 255, 255, 0.04)', fontSize: '11px', padding: '2px 8px', borderRadius: '4px', color: '#cbd5e1' }}>
                          {t}
                        </span>
                      ))}
                    </div>

                    <button
                      onClick={() => handleStartPractice(selectedRole)}
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
            STEP 4: Enter a Realistic AI Interview (Studio Preview)
        ======================================================== */}
        <section style={{ padding: '70px 0', background: 'linear-gradient(180deg, #07090e 0%, #0d121f 100%)' }}>
          <div className="container">
            <div style={{ textAlign: 'center', maxWidth: '780px', margin: '0 auto 40px' }}>
              <span className="badge-pill badge-emerald" style={{ marginBottom: '12px' }}>
                STEP 4: REAL-TIME SIMULATION STUDIO
              </span>
              <h2 style={{ fontSize: 'clamp(28px, 4vw, 42px)', fontWeight: 800, letterSpacing: '-0.02em', marginBottom: '14px' }}>
                Enter a Realistic AI Interview
              </h2>
              <p style={{ fontSize: '16px', color: '#94a3b8' }}>
                Engage in natural, spoken dialogue with contextual follow-up questions tailored to your responses.
              </p>
            </div>

            {/* Virtual Studio Window */}
            <div style={{
              background: '#0d121c',
              border: '1px solid rgba(99, 102, 241, 0.35)',
              borderRadius: '24px',
              padding: '24px',
              maxWidth: '960px',
              margin: '0 auto',
              boxShadow: '0 25px 60px -15px rgba(0, 0, 0, 0.8)'
            }}>
              {/* Studio Video Split */}
              <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
                gap: '16px',
                marginBottom: '18px'
              }}>
                {/* AI Interviewer */}
                <div style={{
                  height: '210px',
                  borderRadius: '14px',
                  background: 'linear-gradient(180deg, #182033 0%, #0d121e 100%)',
                  border: '1px solid rgba(255, 255, 255, 0.08)',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'center',
                  position: 'relative'
                }}>
                  <div style={{ width: '64px', height: '64px', borderRadius: '50%', background: 'linear-gradient(135deg, #7c3aed 0%, #38bdf8 100%)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '8px' }}>
                    <UserCheck size={32} color="#fff" />
                  </div>
                  <div style={{ fontSize: '14px', fontWeight: 800, color: '#f8fafc' }}>Dr. Sarah Lin (AI Host)</div>
                  <div style={{ fontSize: '11px', color: '#67e8f9' }}>Principal Architect • Bar Raiser</div>
                  <div style={{ position: 'absolute', top: '10px', left: '10px', background: 'rgba(0,0,0,0.6)', padding: '2px 8px', borderRadius: '4px', fontSize: '10px', color: '#10b981' }}>
                    ● LIVE CONVERSATION
                  </div>
                </div>

                {/* Candidate Feed */}
                <div style={{
                  height: '210px',
                  borderRadius: '14px',
                  background: '#090d16',
                  border: '1px solid rgba(6, 182, 212, 0.3)',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'center',
                  position: 'relative'
                }}>
                  <div style={{ width: '64px', height: '64px', borderRadius: '50%', background: '#1e293b', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '8px' }}>
                    <Eye size={28} color="#06b6d4" />
                  </div>
                  <div style={{ fontSize: '14px', fontWeight: 800, color: '#f8fafc' }}>Candidate Stream (You)</div>
                  <div style={{ fontSize: '11px', color: '#10b981' }}>Eye Contact: 96% Centered</div>

                  <div style={{ position: 'absolute', bottom: '10px', left: '10px', right: '10px', background: 'rgba(15, 23, 42, 0.9)', padding: '4px 10px', borderRadius: '6px', fontSize: '11px', display: 'flex', justifyContent: 'space-between', color: '#94a3b8' }}>
                    <span>Pace: <b style={{ color: '#fff' }}>142 WPM</b></span>
                    <span>Fillers: <b style={{ color: '#10b981' }}>0</b></span>
                  </div>
                </div>
              </div>

              {/* Subtitle Dialogue Bar */}
              <div style={{ background: '#131929', borderRadius: '12px', padding: '16px 20px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '16px' }}>
                <div>
                  <span style={{ fontSize: '11px', fontWeight: 800, color: '#818cf8', textTransform: 'uppercase' }}>
                    QUESTION 3 PROBE:
                  </span>
                  <p style={{ fontSize: '13px', color: '#e2e8f0', marginTop: '2px' }}>
                    "How did you isolate the race condition when managing high-throughput state updates across distributed worker nodes?"
                  </p>
                </div>
                <button
                  onClick={() => handleStartPractice(selectedRole)}
                  className="btn-primary btn-sm"
                  style={{ flexShrink: 0 }}
                >
                  <span>Try Answering →</span>
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* ========================================================
            STEP 5: Your Interview Is Analyzed from Multiple Angles
        ======================================================== */}
        <section style={{ padding: '70px 0', position: 'relative' }}>
          <div className="container">
            <div style={{ textAlign: 'center', maxWidth: '780px', margin: '0 auto 48px' }}>
              <span className="badge-pill badge-purple" style={{ marginBottom: '12px' }}>
                STEP 5: MULTI-ANGLE TELEMETRY
              </span>
              <h2 style={{ fontSize: 'clamp(28px, 4vw, 42px)', fontWeight: 800, letterSpacing: '-0.02em', marginBottom: '14px' }}>
                Your Interview Is Analyzed from Multiple Angles
              </h2>
              <p style={{ fontSize: '16px', color: '#94a3b8' }}>
                We go far beyond text to evaluate vocal rhythm, emotional composure, and structured technical logic.
              </p>
            </div>

            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
              gap: '20px'
            }}>
              {[
                { title: '1. Technical Accuracy & Depth', score: '94%', note: 'Sound architectural trade-offs, Big-O awareness, and edge cases handled.' },
                { title: '2. Communication & STAR Method', score: '88%', note: 'Clear Context, Task ownership, decisive Actions, and quantified impact results.' },
                { title: '3. Non-Verbal & Presence', score: '92%', note: 'High eye contact alignment, steady posture, and composed recovery under curveballs.' },
                { title: '4. Response Conciseness & Pace', score: '82%', note: '142 WPM optimal speaking rate with zero awkward filler crutches.' }
              ].map((card, idx) => (
                <div key={idx} className="glass-card" style={{ padding: '24px', background: '#0e121c' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '12px' }}>
                    <span style={{ fontSize: '24px', fontWeight: 800, color: '#67e8f9' }}>{card.score}</span>
                    <span style={{ fontSize: '11px', color: '#10b981', fontWeight: 700 }}>✓ Optimal</span>
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
          </div>
        </section>

        {/* ========================================================
            STEP 6: See Exactly How You Performed (The Scorecard)
        ======================================================== */}
        <section style={{ padding: '70px 0', background: 'linear-gradient(180deg, #07090e 0%, #0d121e 100%)' }}>
          <div className="container">
            <div style={{
              background: 'linear-gradient(135deg, #111728 0%, #0c0f18 100%)',
              border: '1px solid rgba(99, 102, 241, 0.35)',
              borderRadius: '28px',
              padding: '40px',
              boxShadow: '0 25px 60px -15px rgba(0, 0, 0, 0.8)'
            }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '16px', marginBottom: '32px', paddingBottom: '20px', borderBottom: '1px solid rgba(255, 255, 255, 0.08)' }}>
                <div>
                  <span className="badge-pill badge-emerald" style={{ marginBottom: '8px' }}>
                    STEP 6: DIAGNOSTIC SCORECARD
                  </span>
                  <h2 style={{ fontSize: '28px', fontWeight: 800, color: '#f8fafc', marginTop: '6px' }}>
                    See Exactly How You Performed
                  </h2>
                </div>
                <div style={{ textAlign: 'right' }}>
                  <div style={{ fontSize: '38px', fontWeight: 800, color: '#818cf8' }}>90/100</div>
                  <div style={{ fontSize: '12px', color: '#10b981', fontWeight: 700 }}>✦ Offer-Ready Readiness Tier</div>
                </div>
              </div>

              {/* Category Bars */}
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '24px', marginBottom: '32px' }}>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                  {[
                    { label: 'Technical Clarity (94%)', pct: 94, color: '#10b981' },
                    { label: 'STAR Framework (88%)', pct: 88, color: '#818cf8' },
                    { label: 'Response Conciseness (82%)', pct: 82, color: '#f59e0b' },
                    { label: 'Non-Verbal Presence (90%)', pct: 90, color: '#06b6d4' }
                  ].map((cat, idx) => (
                    <div key={idx}>
                      <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '12px', marginBottom: '4px' }}>
                        <span style={{ color: '#cbd5e1', fontWeight: 600 }}>{cat.label}</span>
                      </div>
                      <div style={{ width: '100%', height: '6px', background: 'rgba(255, 255, 255, 0.08)', borderRadius: '3px' }}>
                        <div style={{ width: `${cat.pct}%`, height: '100%', background: cat.color, borderRadius: '3px' }} />
                      </div>
                    </div>
                  ))}
                </div>

                <div style={{ background: 'rgba(0, 0, 0, 0.3)', borderRadius: '14px', padding: '18px' }}>
                  <div style={{ fontSize: '13px', fontWeight: 700, color: '#10b981', marginBottom: '8px' }}>
                    ✦ Strengths Identified:
                  </div>
                  <ul style={{ fontSize: '12px', color: '#cbd5e1', lineHeight: 1.6, paddingLeft: '16px', marginBottom: '14px' }}>
                    <li>Solid explanation of Redis distributed lock TTL and lease renewal.</li>
                    <li>Maintained steady gaze with the camera throughout the round.</li>
                  </ul>
                  <div style={{ fontSize: '13px', fontWeight: 700, color: '#f59e0b', marginBottom: '8px' }}>
                    ⚠️ Key Opportunity:
                  </div>
                  <p style={{ fontSize: '12px', color: '#cbd5e1', lineHeight: 1.5 }}>
                    Shorten initial context framing to 15s to leave more time for architectural failover discussion.
                  </p>
                </div>
              </div>

              <button
                onClick={() => handleStartPractice()}
                className="btn-primary"
                style={{ width: '100%', justifyContent: 'center' }}
              >
                <span>Launch Free Practice Session</span>
                <ArrowRight size={16} />
              </button>
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
