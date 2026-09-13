import React, { useState } from 'react';
import {
  Sparkles,
  ArrowRight,
  Shield,
  Video,
  Mic,
  Activity,
  CheckCircle2,
  Lock,
  Cpu,
  Eye,
  BarChart3,
  Award,
  Zap,
  Target,
  FileText,
  Compass,
  Code2,
  Briefcase,
  GraduationCap,
  Play,
  RotateCcw,
  Sliders,
  Volume2
} from 'lucide-react';
import { Navbar } from '../components/Navbar';
import { DemoVideoModal } from '../components/DemoVideoModal';
import { useAuth } from '../context/AuthContext';

interface AboutPageProps {
  onNavigateToHome: () => void;
  onNavigateToFeatures: () => void;
  onNavigateToHowItWorks: () => void;
  onNavigateToSimulations: () => void;
  onNavigateToPricing: () => void;
  onNavigateToFaq: () => void;
  onNavigateToAi: () => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({
  onNavigateToHome,
  onNavigateToFeatures,
  onNavigateToHowItWorks,
  onNavigateToSimulations,
  onNavigateToPricing,
  onNavigateToFaq,
  onNavigateToAi
}) => {
  const { isAuthenticated } = useAuth();
  const [demoModalOpen, setDemoModalOpen] = useState(false);
  const [activeRubricTab, setActiveRubricTab] = useState<'structure' | 'problemSolving' | 'relevance' | 'communication' | 'presence'>('structure');

  // Interactive Live Telemetry Simulator State
  const [interactiveWpm, setInteractiveWpm] = useState(142);
  const [interactiveFillers, setInteractiveFillers] = useState(2);
  const [interactiveGaze, setInteractiveGaze] = useState(94);
  const [activeEcosystemNode, setActiveEcosystemNode] = useState<string>('core');

  const startPractice = (_role?: string) => {
    if (isAuthenticated) {
      window.location.hash = 'dashboard';
    } else {
      window.location.hash = 'signup';
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const rubricDetails = {
    structure: {
      title: 'STAR & Logical Structure',
      score: '92/100',
      description: 'Evaluates how well you frame problems using the Situation-Task-Action-Result framework, ensuring logical pacing, clear narrative arc, and concise conclusions.',
      strengths: ['Clear context setting in first 15s', 'Quantified business impact in Result phase', 'Crisp transitions between points'],
      coachingTip: 'Spend 20% on Situation/Task, 60% on Action details, and 20% on Results & Retrospective learnings.'
    },
    problemSolving: {
      title: 'Decomposition & Trade-offs',
      score: '88/100',
      description: 'Analyzes your ability to break ambiguous engineering or business questions into modular components and explicitly defend technical decisions.',
      strengths: ['Identified bottlenecks proactively', 'Explicitly weighed consistency vs availability trade-offs', 'Handled edge cases gracefully'],
      coachingTip: 'State your assumptions upfront before diving directly into architectural designs.'
    },
    relevance: {
      title: 'Direct Question Alignment',
      score: '95/100',
      description: 'Measures whether the response directly addresses the interviewer prompt without excessive tangential storytelling or unrequested scope expansion.',
      strengths: ['No extraneous tangents', 'Answered all 3 sub-questions directly', 'Kept answer within 2.5 minute target'],
      coachingTip: 'Confirm alignment with a quick check-in: "Would you like me to dive deeper into the database sharding strategy?"'
    },
    communication: {
      title: 'Clarity & Articulation',
      score: '90/100',
      description: 'Monitors vocabulary precision, vocal inflection, sentence structure, and technical terminology accuracy in high-pressure delivery.',
      strengths: ['Precise domain terminology', 'Engaging vocal variation', 'Low jargon abuse'],
      coachingTip: 'Avoid trailing off at the end of sentences; finish with a confident summary takeaway.'
    },
    presence: {
      title: 'Camera & Vocal Delivery',
      score: '94/100',
      description: 'Evaluates non-verbal engagement: direct webcam eye gaze, upright posture alignment, controlled cadence, and minimal verbal filler pauses.',
      strengths: ['Consistent direct camera contact (94%)', 'Controlled 142 WPM optimal pace', 'Minimal verbal fillers (2 / min)'],
      coachingTip: 'Position your webcam at eye level to maximize natural eye-contact confidence scores.'
    }
  };

  const ecosystemNodes: Record<string, { title: string; subtitle: string; desc: string; icon: any; badge: string }> = {
    core: {
      title: 'Inprep.AI Core Intelligence Hub',
      subtitle: 'Multi-Modal Reasoning & Evaluation Pipeline',
      desc: 'Orchestrates real-time speech recognition, client-side computer vision telemetry, context grounding, and LLM rubric scoring into a unified, instant feedback loop.',
      icon: Cpu,
      badge: 'Central Engine'
    },
    cv: {
      title: 'CV & Context Grounding',
      subtitle: 'Dynamic Profile Ingestion',
      desc: 'Parses your tech stack, career history, and target role level to generate authentic, non-generic interview scenarios tailored to your actual experience.',
      icon: FileText,
      badge: 'Input Layer'
    },
    telemetry: {
      title: 'Multimodal Telemetry Engine',
      subtitle: 'Live Speech & Vision Analysis',
      desc: 'Tracks words per minute (WPM), verbal fillers, pause cadence, and eye-contact direction entirely within your local browser sandbox.',
      icon: Activity,
      badge: 'Real-time Telemetry'
    },
    rubric: {
      title: 'Structured Scoring & Rubric Engine',
      subtitle: '4-Pillar Evaluation',
      desc: 'Applies standardized hiring rubrics (Structure, Problem Solving, Relevance, Delivery) modeled after top Tier-1 technology and enterprise hiring bars.',
      icon: Award,
      badge: 'Evaluation Engine'
    },
    star: {
      title: 'Smart Answer Coach (STAR)',
      subtitle: 'Actionable Rewrites',
      desc: 'Provides side-by-side answer comparisons, identifying weak areas and rewriting candidate responses into crisp, impactful STAR stories.',
      icon: Sparkles,
      badge: 'Coaching Layer'
    },
    tracks: {
      title: '500+ Role Tracks & Domain Packs',
      subtitle: 'Industry-Specific Frameworks',
      desc: 'Pre-calibrated interview tracks spanning Software Engineering, Product Management, System Design, Data Science, and Leadership.',
      icon: Compass,
      badge: 'Curriculum Base'
    },
    analytics: {
      title: 'Progress Analytics & Benchmarking',
      subtitle: 'Continuous Growth Tracking',
      desc: 'Visualizes historical performance curves across multiple interview sessions to identify strengths and lingering bottlenecks.',
      icon: BarChart3,
      badge: 'Growth Engine'
    }
  };

  return (
    <div style={{ minHeight: '100vh', backgroundColor: '#07090e', color: '#f8fafc', overflowX: 'hidden' }}>
      {/* Navigation */}
      <Navbar
        currentPage="home"
        onStartPractice={startPractice}
        onNavigateToAi={onNavigateToAi}
        onNavigate={(page) => {
          if (page === 'home') onNavigateToHome();
          else if (page === 'features') onNavigateToFeatures();
          else if (page === 'how-it-works') onNavigateToHowItWorks();
          else if (page === 'simulations') onNavigateToSimulations();
          else if (page === 'pricing') onNavigateToPricing();
          else if (page === 'faq') onNavigateToFaq();
          else if (page === 'chat') onNavigateToAi();
        }}
      />

      {/* Hero Section */}
      <section style={{
        position: 'relative',
        padding: '80px 24px 70px',
        background: 'radial-gradient(ellipse 80% 60% at 50% -10%, rgba(99, 102, 241, 0.25) 0%, rgba(7, 9, 14, 0) 70%)',
        textAlign: 'center',
        borderBottom: '1px solid rgba(255, 255, 255, 0.05)'
      }}>
        <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
          {/* Badge */}
          <div style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '8px',
            background: 'rgba(99, 102, 241, 0.12)',
            border: '1px solid rgba(129, 140, 248, 0.3)',
            borderRadius: '9999px',
            padding: '6px 16px',
            fontSize: '13px',
            fontWeight: 600,
            color: '#a5b4fc',
            marginBottom: '24px',
            boxShadow: '0 0 20px rgba(99, 102, 241, 0.2)'
          }}>
            <Sparkles size={14} color="#818cf8" />
            <span>OUR MISSION & PLATFORM</span>
          </div>

          {/* Heading */}
          <h1 style={{
            fontSize: 'clamp(32px, 5.5vw, 56px)',
            fontWeight: 800,
            letterSpacing: '-0.03em',
            lineHeight: 1.15,
            marginBottom: '20px',
            color: '#f8fafc'
          }}>
            Helping You Prepare Better for the{' '}
            <span style={{
              background: 'linear-gradient(135deg, #818cf8 0%, #38bdf8 50%, #c084fc 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              display: 'inline-block'
            }}>
              Interviews That Matter
            </span>
          </h1>

          {/* Subtitle */}
          <p style={{
            fontSize: 'clamp(16px, 2vw, 19px)',
            color: '#94a3b8',
            maxWidth: '820px',
            margin: '0 auto 36px',
            lineHeight: 1.6
          }}>
            A purpose-built interview intelligence platform that combines CV context, multimodal presentation analysis, and actionable coaching to transform how candidates prepare, reflect, and succeed.
          </p>

          {/* Action Buttons */}
          <div style={{
            display: 'flex',
            flexWrap: 'wrap',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '16px',
            marginBottom: '40px'
          }}>
            <button
              onClick={() => startPractice()}
              className="btn-primary"
              style={{
                padding: '14px 28px',
                fontSize: '15px',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '10px'
              }}
            >
              <span>Start Preparing</span>
              <ArrowRight size={17} />
            </button>

            <button
              onClick={() => setDemoModalOpen(true)}
              className="btn-secondary"
              style={{
                padding: '14px 26px',
                fontSize: '15px',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px'
              }}
            >
              <Play size={16} color="#818cf8" />
              <span>Explore Platform Tour</span>
            </button>
          </div>

          {/* Trust Tags */}
          <div style={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'center',
            gap: '12px 24px',
            fontSize: '13px',
            color: '#cbd5e1'
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
              <CheckCircle2 size={15} color="#06b6d4" />
              <span>CV-Contextualized Practice</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
              <CheckCircle2 size={15} color="#06b6d4" />
              <span>Multimodal Feedback</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
              <CheckCircle2 size={15} color="#06b6d4" />
              <span>500+ Role Frameworks</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
              <CheckCircle2 size={15} color="#06b6d4" />
              <span>Private & Candidate-Centric</span>
            </div>
          </div>
        </div>

        {/* 5 Stats Ribbon Bar */}
        <div style={{
          maxWidth: '1100px',
          margin: '50px auto 0',
          background: 'rgba(15, 23, 42, 0.7)',
          backdropFilter: 'blur(12px)',
          border: '1px solid rgba(255, 255, 255, 0.08)',
          borderRadius: '16px',
          padding: '20px 28px',
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
          gap: '20px',
          textAlign: 'center'
        }}>
          <div>
            <div style={{ fontSize: '24px', fontWeight: 800, color: '#f8fafc' }}>500+</div>
            <div style={{ fontSize: '12px', color: '#94a3b8', marginTop: '4px' }}>Interview Roles</div>
          </div>
          <div style={{ borderLeft: '1px solid rgba(255, 255, 255, 0.06)' }}>
            <div style={{ fontSize: '24px', fontWeight: 800, color: '#818cf8' }}>4-Pillar</div>
            <div style={{ fontSize: '12px', color: '#94a3b8', marginTop: '4px' }}>Evaluation Rubric</div>
          </div>
          <div style={{ borderLeft: '1px solid rgba(255, 255, 255, 0.06)' }}>
            <div style={{ fontSize: '24px', fontWeight: 800, color: '#38bdf8' }}>15+</div>
            <div style={{ fontSize: '12px', color: '#94a3b8', marginTop: '4px' }}>Observable Signals</div>
          </div>
          <div style={{ borderLeft: '1px solid rgba(255, 255, 255, 0.06)' }}>
            <div style={{ fontSize: '24px', fontWeight: 800, color: '#34d399' }}>100%</div>
            <div style={{ fontSize: '12px', color: '#94a3b8', marginTop: '4px' }}>Private to Candidate</div>
          </div>
          <div style={{ borderLeft: '1px solid rgba(255, 255, 255, 0.06)' }}>
            <div style={{ fontSize: '24px', fontWeight: 800, color: '#c084fc' }}>24/7</div>
            <div style={{ fontSize: '12px', color: '#94a3b8', marginTop: '4px' }}>AI-Powered Practice</div>
          </div>
        </div>
      </section>

      {/* Section 1: BACKGROUND & PHILOSOPHY */}
      <section style={{ padding: '90px 24px', borderBottom: '1px solid rgba(255, 255, 255, 0.05)' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '48px',
            alignItems: 'center'
          }}>
            {/* Left Content */}
            <div>
              <div style={{
                fontSize: '12px',
                fontWeight: 700,
                color: '#818cf8',
                letterSpacing: '0.1em',
                textTransform: 'uppercase',
                marginBottom: '12px'
              }}>
                BACKGROUND & PHILOSOPHY
              </div>
              <h2 style={{
                fontSize: 'clamp(26px, 3.5vw, 38px)',
                fontWeight: 800,
                letterSpacing: '-0.02em',
                lineHeight: 1.25,
                color: '#f8fafc',
                marginBottom: '20px'
              }}>
                Interview Preparation Should Be More Than Memorizing Questions
              </h2>
              <p style={{ fontSize: '15px', color: '#94a3b8', lineHeight: 1.7, marginBottom: '28px' }}>
                Traditional interview prep relies on static question lists and memorized answers. But real interviews evaluate how you think, structure complex ideas, and communicate under pressure. Inprep.AI bridges the gap between theoretical knowledge and high-stakes performance.
              </p>

              {/* 4 Feature Points */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                <div style={{
                  display: 'flex',
                  gap: '14px',
                  background: 'rgba(255, 255, 255, 0.02)',
                  border: '1px solid rgba(255, 255, 255, 0.06)',
                  borderRadius: '12px',
                  padding: '14px 18px'
                }}>
                  <div style={{
                    width: '36px',
                    height: '36px',
                    borderRadius: '8px',
                    background: 'rgba(99, 102, 241, 0.15)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0
                  }}>
                    <FileText size={18} color="#818cf8" />
                  </div>
                  <div>
                    <div style={{ fontSize: '14px', fontWeight: 700, color: '#f8fafc' }}>AI Context Grounding</div>
                    <div style={{ fontSize: '13px', color: '#94a3b8', marginTop: '2px' }}>
                      Tailored to your specific CV, experience, and target role level.
                    </div>
                  </div>
                </div>

                <div style={{
                  display: 'flex',
                  gap: '14px',
                  background: 'rgba(255, 255, 255, 0.02)',
                  border: '1px solid rgba(255, 255, 255, 0.06)',
                  borderRadius: '12px',
                  padding: '14px 18px'
                }}>
                  <div style={{
                    width: '36px',
                    height: '36px',
                    borderRadius: '8px',
                    background: 'rgba(6, 182, 212, 0.15)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0
                  }}>
                    <Activity size={18} color="#06b6d4" />
                  </div>
                  <div>
                    <div style={{ fontSize: '14px', fontWeight: 700, color: '#f8fafc' }}>Multimodal Telemetry</div>
                    <div style={{ fontSize: '13px', color: '#94a3b8', marginTop: '2px' }}>
                      Real-time analysis of pacing, filler words, eye contact, and clarity.
                    </div>
                  </div>
                </div>

                <div style={{
                  display: 'flex',
                  gap: '14px',
                  background: 'rgba(255, 255, 255, 0.02)',
                  border: '1px solid rgba(255, 255, 255, 0.06)',
                  borderRadius: '12px',
                  padding: '14px 18px'
                }}>
                  <div style={{
                    width: '36px',
                    height: '36px',
                    borderRadius: '8px',
                    background: 'rgba(192, 132, 252, 0.15)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0
                  }}>
                    <Award size={18} color="#c084fc" />
                  </div>
                  <div>
                    <div style={{ fontSize: '14px', fontWeight: 700, color: '#f8fafc' }}>4-Dimension Rubric</div>
                    <div style={{ fontSize: '13px', color: '#94a3b8', marginTop: '2px' }}>
                      Balanced scoring across Structure, Communication, Technical, and Presentation.
                    </div>
                  </div>
                </div>

                <div style={{
                  display: 'flex',
                  gap: '14px',
                  background: 'rgba(255, 255, 255, 0.02)',
                  border: '1px solid rgba(255, 255, 255, 0.06)',
                  borderRadius: '12px',
                  padding: '14px 18px'
                }}>
                  <div style={{
                    width: '36px',
                    height: '36px',
                    borderRadius: '8px',
                    background: 'rgba(52, 211, 153, 0.15)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0
                  }}>
                    <Sparkles size={18} color="#34d399" />
                  </div>
                  <div>
                    <div style={{ fontSize: '14px', fontWeight: 700, color: '#f8fafc' }}>Actionable Feedback</div>
                    <div style={{ fontSize: '13px', color: '#94a3b8', marginTop: '2px' }}>
                      Clear rewrite recommendations, STAR frameworks, and delivery adjustments.
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Diagnostic Card Preview */}
            <div style={{
              background: 'linear-gradient(135deg, rgba(30, 41, 59, 0.6) 0%, rgba(15, 23, 42, 0.8) 100%)',
              border: '1px solid rgba(129, 140, 248, 0.25)',
              borderRadius: '20px',
              padding: '28px',
              boxShadow: '0 20px 50px rgba(0, 0, 0, 0.4), 0 0 30px rgba(99, 102, 241, 0.15)',
              position: 'relative'
            }}>
              <div style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                borderBottom: '1px solid rgba(255, 255, 255, 0.08)',
                paddingBottom: '16px',
                marginBottom: '20px'
              }}>
                <div>
                  <div style={{ fontSize: '11px', fontWeight: 700, color: '#818cf8', textTransform: 'uppercase', letterSpacing: '0.08em' }}>
                    Score Profile Preview
                  </div>
                  <div style={{ fontSize: '18px', fontWeight: 800, color: '#f8fafc', marginTop: '2px' }}>
                    Full Stack Interview
                  </div>
                </div>
                <div style={{
                  background: 'rgba(52, 211, 153, 0.15)',
                  border: '1px solid rgba(52, 211, 153, 0.3)',
                  padding: '4px 12px',
                  borderRadius: '20px',
                  color: '#34d399',
                  fontSize: '13px',
                  fontWeight: 700
                }}>
                  87/100 Score
                </div>
              </div>

              {/* Progress Bars */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '14px', marginBottom: '22px' }}>
                <div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '12px', marginBottom: '6px' }}>
                    <span style={{ color: '#cbd5e1' }}>Technical Depth</span>
                    <span style={{ color: '#818cf8', fontWeight: 700 }}>91% (Strong)</span>
                  </div>
                  <div style={{ height: '6px', background: 'rgba(255, 255, 255, 0.08)', borderRadius: '3px', overflow: 'hidden' }}>
                    <div style={{ width: '91%', height: '100%', background: 'linear-gradient(90deg, #818cf8, #38bdf8)' }} />
                  </div>
                </div>

                <div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '12px', marginBottom: '6px' }}>
                    <span style={{ color: '#cbd5e1' }}>STAR Structure</span>
                    <span style={{ color: '#38bdf8', fontWeight: 700 }}>88% (Crisp)</span>
                  </div>
                  <div style={{ height: '6px', background: 'rgba(255, 255, 255, 0.08)', borderRadius: '3px', overflow: 'hidden' }}>
                    <div style={{ width: '88%', height: '100%', background: 'linear-gradient(90deg, #38bdf8, #34d399)' }} />
                  </div>
                </div>

                <div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '12px', marginBottom: '6px' }}>
                    <span style={{ color: '#cbd5e1' }}>Speaking Pacing (142 WPM)</span>
                    <span style={{ color: '#34d399', fontWeight: 700 }}>85% (Optimal)</span>
                  </div>
                  <div style={{ height: '6px', background: 'rgba(255, 255, 255, 0.08)', borderRadius: '3px', overflow: 'hidden' }}>
                    <div style={{ width: '85%', height: '100%', background: 'linear-gradient(90deg, #34d399, #c084fc)' }} />
                  </div>
                </div>

                <div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '12px', marginBottom: '6px' }}>
                    <span style={{ color: '#cbd5e1' }}>Eye Contact & Presence</span>
                    <span style={{ color: '#c084fc', fontWeight: 700 }}>94% (High)</span>
                  </div>
                  <div style={{ height: '6px', background: 'rgba(255, 255, 255, 0.08)', borderRadius: '3px', overflow: 'hidden' }}>
                    <div style={{ width: '94%', height: '100%', background: 'linear-gradient(90deg, #c084fc, #818cf8)' }} />
                  </div>
                </div>
              </div>

              {/* Coaching Quote Card */}
              <div style={{
                background: 'rgba(0, 0, 0, 0.3)',
                border: '1px solid rgba(255, 255, 255, 0.06)',
                borderRadius: '12px',
                padding: '14px 16px',
                fontSize: '12px',
                color: '#94a3b8',
                lineHeight: 1.6
              }}>
                <span style={{ color: '#818cf8', fontWeight: 700 }}>AI Coach Observation:</span> "Excellent technical rationale on caching strategies. Minor recommendation: reduce introductory pause on Question 3 to maintain rhythm."
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 2: OUR PURPOSE */}
      <section style={{ padding: '90px 24px', background: 'rgba(15, 23, 42, 0.3)', borderBottom: '1px solid rgba(255, 255, 255, 0.05)' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto', textAlign: 'center' }}>
          <div style={{
            fontSize: '12px',
            fontWeight: 700,
            color: '#06b6d4',
            letterSpacing: '0.1em',
            textTransform: 'uppercase',
            marginBottom: '12px'
          }}>
            OUR PURPOSE
          </div>
          <h2 style={{
            fontSize: 'clamp(28px, 4vw, 42px)',
            fontWeight: 800,
            letterSpacing: '-0.02em',
            color: '#f8fafc',
            maxWidth: '850px',
            margin: '0 auto 16px',
            lineHeight: 1.2
          }}>
            Make high-quality interview preparation accessible, structured, and actionable.
          </h2>
          <p style={{
            fontSize: '16px',
            color: '#94a3b8',
            maxWidth: '740px',
            margin: '0 auto 50px',
            lineHeight: 1.6
          }}>
            We believe everyone deserves the tools to prepare effectively for career-defining moments, without expensive coaching fees or ambiguous feedback.
          </p>

          {/* 3 Pillars */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '24px',
            textAlign: 'left'
          }}>
            {/* Pillar 1 */}
            <div style={{
              background: 'rgba(255, 255, 255, 0.02)',
              border: '1px solid rgba(255, 255, 255, 0.08)',
              borderRadius: '16px',
              padding: '28px',
              transition: 'all 0.3s ease'
            }}>
              <div style={{
                width: '44px',
                height: '44px',
                borderRadius: '10px',
                background: 'rgba(99, 102, 241, 0.15)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginBottom: '20px'
              }}>
                <Zap size={22} color="#818cf8" />
              </div>
              <div style={{ fontSize: '12px', fontWeight: 700, color: '#818cf8', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '6px' }}>
                Pillar 01
              </div>
              <h3 style={{ fontSize: '20px', fontWeight: 700, color: '#f8fafc', marginBottom: '10px' }}>
                Practice
              </h3>
              <p style={{ fontSize: '14px', color: '#94a3b8', lineHeight: 1.6, margin: 0 }}>
                Real-time AI simulations that recreate realistic interview environments with authentic conversational pressure and role-specific scenarios.
              </p>
            </div>

            {/* Pillar 2 */}
            <div style={{
              background: 'rgba(255, 255, 255, 0.02)',
              border: '1px solid rgba(255, 255, 255, 0.08)',
              borderRadius: '16px',
              padding: '28px',
              transition: 'all 0.3s ease'
            }}>
              <div style={{
                width: '44px',
                height: '44px',
                borderRadius: '10px',
                background: 'rgba(6, 182, 212, 0.15)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginBottom: '20px'
              }}>
                <Activity size={22} color="#06b6d4" />
              </div>
              <div style={{ fontSize: '12px', fontWeight: 700, color: '#06b6d4', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '6px' }}>
                Pillar 02
              </div>
              <h3 style={{ fontSize: '20px', fontWeight: 700, color: '#f8fafc', marginBottom: '10px' }}>
                Understand
              </h3>
              <p style={{ fontSize: '14px', color: '#94a3b8', lineHeight: 1.6, margin: 0 }}>
                Detailed multimodal feedback across content, structure, and communication delivery so you see precisely what worked and what didn't.
              </p>
            </div>

            {/* Pillar 3 */}
            <div style={{
              background: 'rgba(255, 255, 255, 0.02)',
              border: '1px solid rgba(255, 255, 255, 0.08)',
              borderRadius: '16px',
              padding: '28px',
              transition: 'all 0.3s ease'
            }}>
              <div style={{
                width: '44px',
                height: '44px',
                borderRadius: '10px',
                background: 'rgba(192, 132, 252, 0.15)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginBottom: '20px'
              }}>
                <Award size={22} color="#c084fc" />
              </div>
              <div style={{ fontSize: '12px', fontWeight: 700, color: '#c084fc', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '6px' }}>
                Pillar 03
              </div>
              <h3 style={{ fontSize: '20px', fontWeight: 700, color: '#f8fafc', marginBottom: '10px' }}>
                Improve
              </h3>
              <p style={{ fontSize: '14px', color: '#94a3b8', lineHeight: 1.6, margin: 0 }}>
                Actionable coaching, suggested answer revisions, and targeted practice exercises designed to systematically build your confidence.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 3: PLATFORM FOUNDATIONS */}
      <section style={{ padding: '90px 24px', borderBottom: '1px solid rgba(255, 255, 255, 0.05)' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '48px' }}>
            <div style={{ fontSize: '12px', fontWeight: 700, color: '#818cf8', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '10px' }}>
              PLATFORM FOUNDATIONS
            </div>
            <h2 style={{ fontSize: 'clamp(26px, 3.5vw, 38px)', fontWeight: 800, color: '#f8fafc' }}>
              A More Complete Way to Practice
            </h2>
            <p style={{ fontSize: '15px', color: '#94a3b8', maxWidth: '600px', margin: '10px auto 0' }}>
              Combining context intelligence, real-time telemetry, and structured feedback.
            </p>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
            gap: '20px'
          }}>
            <div style={{ background: 'rgba(255, 255, 255, 0.02)', border: '1px solid rgba(255, 255, 255, 0.06)', borderRadius: '14px', padding: '24px' }}>
              <FileText size={22} color="#818cf8" style={{ marginBottom: '16px' }} />
              <h3 style={{ fontSize: '17px', fontWeight: 700, color: '#f8fafc', marginBottom: '8px' }}>CV-Grounded Context</h3>
              <p style={{ fontSize: '13px', color: '#94a3b8', lineHeight: 1.6, margin: 0 }}>
                Upload your CV to practice interviews tailored to your exact career history and target role.
              </p>
            </div>

            <div style={{ background: 'rgba(255, 255, 255, 0.02)', border: '1px solid rgba(255, 255, 255, 0.06)', borderRadius: '14px', padding: '24px' }}>
              <Activity size={22} color="#06b6d4" style={{ marginBottom: '16px' }} />
              <h3 style={{ fontSize: '17px', fontWeight: 700, color: '#f8fafc', marginBottom: '8px' }}>Real-Time Telemetry</h3>
              <p style={{ fontSize: '13px', color: '#94a3b8', lineHeight: 1.6, margin: 0 }}>
                Live analysis of your speaking pace, filler words, eye contact, and posture during simulation.
              </p>
            </div>

            <div style={{ background: 'rgba(255, 255, 255, 0.02)', border: '1px solid rgba(255, 255, 255, 0.06)', borderRadius: '14px', padding: '24px' }}>
              <Award size={22} color="#c084fc" style={{ marginBottom: '16px' }} />
              <h3 style={{ fontSize: '17px', fontWeight: 700, color: '#f8fafc', marginBottom: '8px' }}>Multimodal Feedback</h3>
              <p style={{ fontSize: '13px', color: '#94a3b8', lineHeight: 1.6, margin: 0 }}>
                Comprehensive scorecards that evaluate what you say and how you present yourself.
              </p>
            </div>

            <div style={{ background: 'rgba(255, 255, 255, 0.02)', border: '1px solid rgba(255, 255, 255, 0.06)', borderRadius: '14px', padding: '24px' }}>
              <Target size={22} color="#34d399" style={{ marginBottom: '16px' }} />
              <h3 style={{ fontSize: '17px', fontWeight: 700, color: '#f8fafc', marginBottom: '8px' }}>Targeted Practice</h3>
              <p style={{ fontSize: '13px', color: '#94a3b8', lineHeight: 1.6, margin: 0 }}>
                Focus on specific competencies or question types to address weaknesses systematically.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 4: KEY DIFFERENTIATORS */}
      <section style={{ padding: '90px 24px', background: 'rgba(15, 23, 42, 0.3)', borderBottom: '1px solid rgba(255, 255, 255, 0.05)' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '50px' }}>
            <div style={{ fontSize: '12px', fontWeight: 700, color: '#818cf8', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '10px' }}>
              KEY DIFFERENTIATORS
            </div>
            <h2 style={{ fontSize: 'clamp(26px, 3.5vw, 38px)', fontWeight: 800, color: '#f8fafc' }}>
              What Makes Inprep.AI Different
            </h2>
            <p style={{ fontSize: '15px', color: '#94a3b8', maxWidth: '650px', margin: '10px auto 0' }}>
              Traditional prep methods leave gaps. Inprep.AI closes them with purpose-built intelligence.
            </p>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '24px'
          }}>
            <div style={{ background: 'rgba(255, 255, 255, 0.02)', border: '1px solid rgba(255, 255, 255, 0.06)', borderRadius: '16px', padding: '26px' }}>
              <div style={{ width: '40px', height: '40px', borderRadius: '8px', background: 'rgba(99, 102, 241, 0.15)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '16px' }}>
                <Compass size={20} color="#818cf8" />
              </div>
              <h3 style={{ fontSize: '18px', fontWeight: 700, color: '#f8fafc', marginBottom: '8px' }}>Context-Aware Questioning</h3>
              <p style={{ fontSize: '13px', color: '#94a3b8', lineHeight: 1.6, margin: 0 }}>
                Questions evolve dynamically based on your CV and previous answers, not static generic question banks.
              </p>
            </div>

            <div style={{ background: 'rgba(255, 255, 255, 0.02)', border: '1px solid rgba(255, 255, 255, 0.06)', borderRadius: '16px', padding: '26px' }}>
              <div style={{ width: '40px', height: '40px', borderRadius: '8px', background: 'rgba(6, 182, 212, 0.15)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '16px' }}>
                <Eye size={20} color="#06b6d4" />
              </div>
              <h3 style={{ fontSize: '18px', fontWeight: 700, color: '#f8fafc', marginBottom: '8px' }}>Multimodal Presentation Analysis</h3>
              <p style={{ fontSize: '13px', color: '#94a3b8', lineHeight: 1.6, margin: 0 }}>
                We analyze speaking cadence, filler words, and camera presence alongside answer quality.
              </p>
            </div>

            <div style={{ background: 'rgba(255, 255, 255, 0.02)', border: '1px solid rgba(255, 255, 255, 0.06)', borderRadius: '16px', padding: '26px' }}>
              <div style={{ width: '40px', height: '40px', borderRadius: '8px', background: 'rgba(192, 132, 252, 0.15)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '16px' }}>
                <Award size={20} color="#c084fc" />
              </div>
              <h3 style={{ fontSize: '18px', fontWeight: 700, color: '#f8fafc', marginBottom: '8px' }}>Rubric-Based Evaluation</h3>
              <p style={{ fontSize: '13px', color: '#94a3b8', lineHeight: 1.6, margin: 0 }}>
                Objective scoring across 4 standardized dimensions instead of subjective or arbitrary scores.
              </p>
            </div>

            <div style={{ background: 'rgba(255, 255, 255, 0.02)', border: '1px solid rgba(255, 255, 255, 0.06)', borderRadius: '16px', padding: '26px' }}>
              <div style={{ width: '40px', height: '40px', borderRadius: '8px', background: 'rgba(52, 211, 153, 0.15)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '16px' }}>
                <Sparkles size={20} color="#34d399" />
              </div>
              <h3 style={{ fontSize: '18px', fontWeight: 700, color: '#f8fafc', marginBottom: '8px' }}>Actionable Answer Rewrites</h3>
              <p style={{ fontSize: '13px', color: '#94a3b8', lineHeight: 1.6, margin: 0 }}>
                Get specific suggestions on how to improve your answers using the STAR method with clear examples.
              </p>
            </div>

            <div style={{ background: 'rgba(255, 255, 255, 0.02)', border: '1px solid rgba(255, 255, 255, 0.06)', borderRadius: '16px', padding: '26px' }}>
              <div style={{ width: '40px', height: '40px', borderRadius: '8px', background: 'rgba(244, 63, 94, 0.15)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '16px' }}>
                <Shield size={20} color="#f43f5e" />
              </div>
              <h3 style={{ fontSize: '18px', fontWeight: 700, color: '#f8fafc', marginBottom: '8px' }}>Private & Candidate-Centric</h3>
              <p style={{ fontSize: '13px', color: '#94a3b8', lineHeight: 1.6, margin: 0 }}>
                Your video and audio data is processed securely and never shared with employers or recruiters.
              </p>
            </div>

            <div style={{ background: 'rgba(255, 255, 255, 0.02)', border: '1px solid rgba(255, 255, 255, 0.06)', borderRadius: '16px', padding: '26px' }}>
              <div style={{ width: '40px', height: '40px', borderRadius: '8px', background: 'rgba(56, 189, 248, 0.15)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '16px' }}>
                <BarChart3 size={20} color="#38bdf8" />
              </div>
              <h3 style={{ fontSize: '18px', fontWeight: 700, color: '#f8fafc', marginBottom: '8px' }}>Continuous Progress Tracking</h3>
              <p style={{ fontSize: '13px', color: '#94a3b8', lineHeight: 1.6, margin: 0 }}>
                Track your improvement over time with detailed analytics across all your practice sessions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 5: CORE CAPABILITIES */}
      <section style={{ padding: '90px 24px', borderBottom: '1px solid rgba(255, 255, 255, 0.05)' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '48px' }}>
            <div style={{ fontSize: '12px', fontWeight: 700, color: '#06b6d4', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '10px' }}>
              CORE CAPABILITIES
            </div>
            <h2 style={{ fontSize: 'clamp(26px, 3.5vw, 38px)', fontWeight: 800, color: '#f8fafc' }}>
              AI That Supports Your Preparation
            </h2>
            <p style={{ fontSize: '15px', color: '#94a3b8', maxWidth: '650px', margin: '10px auto 0' }}>
              State-of-the-art speech intelligence, computer vision, and LLM reasoning working in harmony.
            </p>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '20px'
          }}>
            <div style={{ background: 'rgba(255, 255, 255, 0.02)', border: '1px solid rgba(255, 255, 255, 0.06)', borderRadius: '12px', padding: '22px', display: 'flex', gap: '16px' }}>
              <Video size={24} color="#818cf8" style={{ flexShrink: 0, marginTop: '2px' }} />
              <div>
                <h3 style={{ fontSize: '16px', fontWeight: 700, color: '#f8fafc', marginBottom: '4px' }}>Live Interactive Sessions</h3>
                <p style={{ fontSize: '13px', color: '#94a3b8', lineHeight: 1.5, margin: 0 }}>
                  Natural back-and-forth conversational AI interviewers tailored to your industry.
                </p>
              </div>
            </div>

            <div style={{ background: 'rgba(255, 255, 255, 0.02)', border: '1px solid rgba(255, 255, 255, 0.06)', borderRadius: '12px', padding: '22px', display: 'flex', gap: '16px' }}>
              <Cpu size={24} color="#06b6d4" style={{ flexShrink: 0, marginTop: '2px' }} />
              <div>
                <h3 style={{ fontSize: '16px', fontWeight: 700, color: '#f8fafc', marginBottom: '4px' }}>Multimodal Signal Processing</h3>
                <p style={{ fontSize: '13px', color: '#94a3b8', lineHeight: 1.5, margin: 0 }}>
                  Real-time speech-to-text, acoustic analysis, and computer vision presentation telemetry.
                </p>
              </div>
            </div>

            <div style={{ background: 'rgba(255, 255, 255, 0.02)', border: '1px solid rgba(255, 255, 255, 0.06)', borderRadius: '12px', padding: '22px', display: 'flex', gap: '16px' }}>
              <Mic size={24} color="#c084fc" style={{ flexShrink: 0, marginTop: '2px' }} />
              <div>
                <h3 style={{ fontSize: '16px', fontWeight: 700, color: '#f8fafc', marginBottom: '4px' }}>Speech Intelligence</h3>
                <p style={{ fontSize: '13px', color: '#94a3b8', lineHeight: 1.5, margin: 0 }}>
                  Pace analysis, pause tracking, filler word detection, and tone clarity.
                </p>
              </div>
            </div>

            <div style={{ background: 'rgba(255, 255, 255, 0.02)', border: '1px solid rgba(255, 255, 255, 0.06)', borderRadius: '12px', padding: '22px', display: 'flex', gap: '16px' }}>
              <Eye size={24} color="#34d399" style={{ flexShrink: 0, marginTop: '2px' }} />
              <div>
                <h3 style={{ fontSize: '16px', fontWeight: 700, color: '#f8fafc', marginBottom: '4px' }}>Computer Vision</h3>
                <p style={{ fontSize: '13px', color: '#94a3b8', lineHeight: 1.5, margin: 0 }}>
                  Client-side posture and gaze estimation processed privately in your browser.
                </p>
              </div>
            </div>

            <div style={{ background: 'rgba(255, 255, 255, 0.02)', border: '1px solid rgba(255, 255, 255, 0.06)', borderRadius: '12px', padding: '22px', display: 'flex', gap: '16px' }}>
              <Award size={24} color="#f59e0b" style={{ flexShrink: 0, marginTop: '2px' }} />
              <div>
                <h3 style={{ fontSize: '16px', fontWeight: 700, color: '#f8fafc', marginBottom: '4px' }}>Structured Scoring Frameworks</h3>
                <p style={{ fontSize: '13px', color: '#94a3b8', lineHeight: 1.5, margin: 0 }}>
                  Standardized rubrics aligned with top tech and enterprise hiring criteria.
                </p>
              </div>
            </div>

            <div style={{ background: 'rgba(255, 255, 255, 0.02)', border: '1px solid rgba(255, 255, 255, 0.06)', borderRadius: '12px', padding: '22px', display: 'flex', gap: '16px' }}>
              <Sparkles size={24} color="#818cf8" style={{ flexShrink: 0, marginTop: '2px' }} />
              <div>
                <h3 style={{ fontSize: '16px', fontWeight: 700, color: '#f8fafc', marginBottom: '4px' }}>Actionable Feedback</h3>
                <p style={{ fontSize: '13px', color: '#94a3b8', lineHeight: 1.5, margin: 0 }}>
                  Concrete guidance on phrasing, structure, and delivery to elevate your answers.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 6: OBSERVABLE SIGNALS & TELEMETRY */}
      <section style={{ padding: '90px 24px', background: 'rgba(15, 23, 42, 0.3)', borderBottom: '1px solid rgba(255, 255, 255, 0.05)' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '48px',
            alignItems: 'center'
          }}>
            {/* Left Content */}
            <div>
              <div style={{ fontSize: '12px', fontWeight: 700, color: '#38bdf8', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '10px' }}>
                OBSERVABLE SIGNALS
              </div>
              <h2 style={{ fontSize: 'clamp(26px, 3.5vw, 38px)', fontWeight: 800, color: '#f8fafc', lineHeight: 1.25, marginBottom: '16px' }}>
                Understanding Presentation Through Observable Signals
              </h2>
              <p style={{ fontSize: '15px', color: '#94a3b8', lineHeight: 1.7, marginBottom: '28px' }}>
                Communication effectiveness is measured through concrete, observable patterns—never subjective personality scoring.
              </p>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', marginBottom: '24px' }}>
                <div style={{ display: 'flex', gap: '12px', alignItems: 'flex-start' }}>
                  <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#818cf8', marginTop: '6px', flexShrink: 0 }} />
                  <div>
                    <span style={{ fontSize: '14px', fontWeight: 700, color: '#f8fafc' }}>Speaking Pace & Rhythm: </span>
                    <span style={{ fontSize: '13px', color: '#94a3b8' }}>Words per minute tracking with optimal range guidance (130-160 WPM).</span>
                  </div>
                </div>

                <div style={{ display: 'flex', gap: '12px', alignItems: 'flex-start' }}>
                  <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#06b6d4', marginTop: '6px', flexShrink: 0 }} />
                  <div>
                    <span style={{ fontSize: '14px', fontWeight: 700, color: '#f8fafc' }}>Filler Word Density: </span>
                    <span style={{ fontSize: '13px', color: '#94a3b8' }}>Identification and counting of verbal fillers (um, uh, like, you know).</span>
                  </div>
                </div>

                <div style={{ display: 'flex', gap: '12px', alignItems: 'flex-start' }}>
                  <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#34d399', marginTop: '6px', flexShrink: 0 }} />
                  <div>
                    <span style={{ fontSize: '14px', fontWeight: 700, color: '#f8fafc' }}>Camera Engagement: </span>
                    <span style={{ fontSize: '13px', color: '#94a3b8' }}>Gaze direction and presence analysis processed entirely in your browser.</span>
                  </div>
                </div>
              </div>

              {/* Security Banner */}
              <div style={{
                background: 'rgba(6, 182, 212, 0.08)',
                border: '1px solid rgba(6, 182, 212, 0.25)',
                borderRadius: '12px',
                padding: '16px 18px',
                display: 'flex',
                gap: '12px',
                alignItems: 'center'
              }}>
                <Shield size={20} color="#06b6d4" style={{ flexShrink: 0 }} />
                <div style={{ fontSize: '12px', color: '#94a3b8', lineHeight: 1.5 }}>
                  <strong style={{ color: '#06b6d4' }}>Privacy-First Architecture:</strong> All camera processing happens client-side using browser-native vision APIs. No raw video frames are ever transmitted to our servers.
                </div>
              </div>
            </div>

            {/* Right Interactive Telemetry Widget */}
            <div style={{
              background: 'linear-gradient(135deg, rgba(30, 41, 59, 0.6) 0%, rgba(15, 23, 42, 0.8) 100%)',
              border: '1px solid rgba(255, 255, 255, 0.08)',
              borderRadius: '20px',
              padding: '28px',
              boxShadow: '0 20px 40px rgba(0, 0, 0, 0.4)'
            }}>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '20px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <Sliders size={18} color="#818cf8" />
                  <span style={{ fontSize: '14px', fontWeight: 700, color: '#f8fafc' }}>Live Telemetry Calibration Demo</span>
                </div>
                <button
                  onClick={() => {
                    setInteractiveWpm(142);
                    setInteractiveFillers(2);
                    setInteractiveGaze(94);
                  }}
                  style={{
                    background: 'none',
                    border: 'none',
                    color: '#94a3b8',
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '4px',
                    fontSize: '12px'
                  }}
                  title="Reset to Defaults"
                >
                  <RotateCcw size={13} />
                  <span>Reset</span>
                </button>
              </div>

              {/* Telemetry Metric Controls */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '18px' }}>
                <div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '13px', marginBottom: '6px' }}>
                    <span style={{ color: '#cbd5e1' }}>Speaking Rate (WPM):</span>
                    <span style={{ color: interactiveWpm >= 130 && interactiveWpm <= 160 ? '#34d399' : '#f59e0b', fontWeight: 700 }}>
                      {interactiveWpm} WPM {interactiveWpm >= 130 && interactiveWpm <= 160 ? '(Optimal)' : interactiveWpm < 130 ? '(Slightly Slow)' : '(Fast)'}
                    </span>
                  </div>
                  <input
                    type="range"
                    min="90"
                    max="220"
                    value={interactiveWpm}
                    onChange={(e) => setInteractiveWpm(Number(e.target.value))}
                    style={{ width: '100%', accentColor: '#818cf8', cursor: 'pointer' }}
                  />
                  <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '10px', color: '#64748b', marginTop: '4px' }}>
                    <span>90 WPM (Slow)</span>
                    <span>145 WPM (Ideal)</span>
                    <span>220 WPM (Rushed)</span>
                  </div>
                </div>

                <div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '13px', marginBottom: '6px' }}>
                    <span style={{ color: '#cbd5e1' }}>Filler Word Count / min:</span>
                    <span style={{ color: interactiveFillers <= 3 ? '#34d399' : '#f43f5e', fontWeight: 700 }}>
                      {interactiveFillers} fillers {interactiveFillers <= 3 ? '(Low)' : '(High)'}
                    </span>
                  </div>
                  <input
                    type="range"
                    min="0"
                    max="12"
                    value={interactiveFillers}
                    onChange={(e) => setInteractiveFillers(Number(e.target.value))}
                    style={{ width: '100%', accentColor: '#06b6d4', cursor: 'pointer' }}
                  />
                </div>

                <div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '13px', marginBottom: '6px' }}>
                    <span style={{ color: '#cbd5e1' }}>Camera Gaze Contact:</span>
                    <span style={{ color: interactiveGaze >= 80 ? '#34d399' : '#f59e0b', fontWeight: 700 }}>
                      {interactiveGaze}% {interactiveGaze >= 80 ? '(Engaged)' : '(Averted)'}
                    </span>
                  </div>
                  <input
                    type="range"
                    min="40"
                    max="100"
                    value={interactiveGaze}
                    onChange={(e) => setInteractiveGaze(Number(e.target.value))}
                    style={{ width: '100%', accentColor: '#c084fc', cursor: 'pointer' }}
                  />
                </div>
              </div>

              {/* Dynamic Calculated Score */}
              <div style={{
                marginTop: '24px',
                padding: '16px',
                background: 'rgba(0, 0, 0, 0.3)',
                borderRadius: '12px',
                border: '1px solid rgba(255, 255, 255, 0.05)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between'
              }}>
                <div>
                  <div style={{ fontSize: '11px', color: '#94a3b8', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Delivery Score</div>
                  <div style={{ fontSize: '20px', fontWeight: 800, color: '#f8fafc', marginTop: '2px' }}>
                    {Math.round(
                      (interactiveWpm >= 130 && interactiveWpm <= 160 ? 95 : 75) * 0.4 +
                      (100 - interactiveFillers * 7) * 0.3 +
                      interactiveGaze * 0.3
                    )}/100
                  </div>
                </div>
                <div style={{
                  padding: '6px 14px',
                  borderRadius: '20px',
                  fontSize: '12px',
                  fontWeight: 700,
                  background: 'rgba(99, 102, 241, 0.2)',
                  color: '#a5b4fc',
                  border: '1px solid rgba(99, 102, 241, 0.3)'
                }}>
                  Live Simulated
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 7: TELEMETRY METRICS IN PRACTICE & COMMUNICATION */}
      <section style={{ padding: '90px 24px', borderBottom: '1px solid rgba(255, 255, 255, 0.05)' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '48px',
            alignItems: 'center'
          }}>
            {/* Left Snapshot Box */}
            <div style={{
              background: 'linear-gradient(135deg, rgba(20, 26, 40, 0.8) 0%, rgba(10, 14, 23, 0.9) 100%)',
              border: '1px solid rgba(255, 255, 255, 0.08)',
              borderRadius: '20px',
              padding: '28px'
            }}>
              <div style={{ fontSize: '11px', fontWeight: 700, color: '#818cf8', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '14px' }}>
                Telemetry Metrics in Practice
              </div>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '14px', marginBottom: '20px' }}>
                <div style={{ background: 'rgba(255, 255, 255, 0.03)', padding: '16px', borderRadius: '12px', border: '1px solid rgba(255, 255, 255, 0.05)' }}>
                  <div style={{ fontSize: '11px', color: '#94a3b8' }}>Speaking Pace</div>
                  <div style={{ fontSize: '22px', fontWeight: 800, color: '#f8fafc', marginTop: '4px' }}>142 WPM</div>
                  <div style={{ fontSize: '11px', color: '#34d399', marginTop: '2px' }}>Optimal (130-160)</div>
                </div>

                <div style={{ background: 'rgba(255, 255, 255, 0.03)', padding: '16px', borderRadius: '12px', border: '1px solid rgba(255, 255, 255, 0.05)' }}>
                  <div style={{ fontSize: '11px', color: '#94a3b8' }}>Filler Frequency</div>
                  <div style={{ fontSize: '22px', fontWeight: 800, color: '#f8fafc', marginTop: '4px' }}>3 total</div>
                  <div style={{ fontSize: '11px', color: '#34d399', marginTop: '2px' }}>Low (Target &lt; 5)</div>
                </div>

                <div style={{ background: 'rgba(255, 255, 255, 0.03)', padding: '16px', borderRadius: '12px', border: '1px solid rgba(255, 255, 255, 0.05)' }}>
                  <div style={{ fontSize: '11px', color: '#94a3b8' }}>Camera Engagement</div>
                  <div style={{ fontSize: '22px', fontWeight: 800, color: '#f8fafc', marginTop: '4px' }}>92%</div>
                  <div style={{ fontSize: '11px', color: '#34d399', marginTop: '2px' }}>High direct gaze</div>
                </div>

                <div style={{ background: 'rgba(255, 255, 255, 0.03)', padding: '16px', borderRadius: '12px', border: '1px solid rgba(255, 255, 255, 0.05)' }}>
                  <div style={{ fontSize: '11px', color: '#94a3b8' }}>Pause Cadence</div>
                  <div style={{ fontSize: '22px', fontWeight: 800, color: '#f8fafc', marginTop: '4px' }}>1.2s avg</div>
                  <div style={{ fontSize: '11px', color: '#34d399', marginTop: '2px' }}>Natural breathing</div>
                </div>
              </div>

              <div style={{ fontSize: '12px', color: '#94a3b8', fontStyle: 'italic' }}>
                * Metrics update continuously in 250ms windows throughout active speech.
              </div>
            </div>

            {/* Right Text Content */}
            <div>
              <div style={{ fontSize: '12px', fontWeight: 700, color: '#818cf8', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '10px' }}>
                COMMUNICATION INTELLIGENCE
              </div>
              <h2 style={{ fontSize: 'clamp(26px, 3.5vw, 38px)', fontWeight: 800, color: '#f8fafc', lineHeight: 1.25, marginBottom: '16px' }}>
                Helping You Improve How You Communicate
              </h2>
              <p style={{ fontSize: '15px', color: '#94a3b8', lineHeight: 1.7, marginBottom: '20px' }}>
                Most candidates stumble not because they lack technical competence, but because nervous habits undermine their delivery. Inprep.AI gives you objective visibility into non-verbal telemetry so you can polish your presence.
              </p>
              <p style={{ fontSize: '15px', color: '#94a3b8', lineHeight: 1.7, marginBottom: '28px' }}>
                By practicing in an authentic conversational setting with instant visual feedback, you turn high-stakes stress into second-nature confidence.
              </p>

              <button
                onClick={() => startPractice()}
                className="btn-primary"
                style={{ display: 'inline-flex', alignItems: 'center', gap: '8px' }}
              >
                <span>Try Telemetry Practice</span>
                <ArrowRight size={16} />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Section 8: EVALUATION RUBRIC */}
      <section style={{ padding: '90px 24px', background: 'rgba(15, 23, 42, 0.3)', borderBottom: '1px solid rgba(255, 255, 255, 0.05)' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '48px' }}>
            <div style={{ fontSize: '12px', fontWeight: 700, color: '#c084fc', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '10px' }}>
              EVALUATION RUBRIC
            </div>
            <h2 style={{ fontSize: 'clamp(26px, 3.5vw, 38px)', fontWeight: 800, color: '#f8fafc' }}>
              Going Beyond "Correct" or "Incorrect"
            </h2>
            <p style={{ fontSize: '15px', color: '#94a3b8', maxWidth: '650px', margin: '10px auto 0' }}>
              Great interview answers demonstrate structured thinking, domain mastery, and clear communication.
            </p>
          </div>

          {/* Rubric Tabs */}
          <div style={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'center',
            gap: '10px',
            marginBottom: '32px'
          }}>
            {(['structure', 'problemSolving', 'relevance', 'communication', 'presence'] as const).map((tab) => {
              const tabNames: Record<string, string> = {
                structure: 'Structure (STAR)',
                problemSolving: 'Problem Solving',
                relevance: 'Relevance',
                communication: 'Communication',
                presence: 'Presence'
              };
              const isActive = activeRubricTab === tab;
              return (
                <button
                  key={tab}
                  onClick={() => setActiveRubricTab(tab)}
                  style={{
                    padding: '10px 20px',
                    borderRadius: '12px',
                    fontSize: '14px',
                    fontWeight: 600,
                    cursor: 'pointer',
                    transition: 'all 0.2s ease',
                    background: isActive ? 'linear-gradient(135deg, #7c3aed 0%, #4f46e5 100%)' : 'rgba(255, 255, 255, 0.04)',
                    color: isActive ? '#ffffff' : '#94a3b8',
                    border: isActive ? '1px solid rgba(124, 58, 237, 0.5)' : '1px solid rgba(255, 255, 255, 0.08)',
                    boxShadow: isActive ? '0 0 20px rgba(124, 58, 237, 0.3)' : 'none'
                  }}
                >
                  {tabNames[tab]}
                </button>
              );
            })}
          </div>

          {/* Active Rubric Detail Card */}
          <div style={{
            background: 'linear-gradient(135deg, rgba(30, 41, 59, 0.5) 0%, rgba(15, 23, 42, 0.7) 100%)',
            border: '1px solid rgba(129, 140, 248, 0.25)',
            borderRadius: '20px',
            padding: '36px',
            boxShadow: '0 20px 50px rgba(0, 0, 0, 0.4)'
          }}>
            <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', alignItems: 'center', gap: '16px', marginBottom: '20px' }}>
              <div>
                <h3 style={{ fontSize: '24px', fontWeight: 800, color: '#f8fafc', margin: 0 }}>
                  {rubricDetails[activeRubricTab].title}
                </h3>
                <p style={{ fontSize: '15px', color: '#94a3b8', marginTop: '6px', maxWidth: '750px', lineHeight: 1.6 }}>
                  {rubricDetails[activeRubricTab].description}
                </p>
              </div>
              <div style={{
                background: 'rgba(52, 211, 153, 0.15)',
                border: '1px solid rgba(52, 211, 153, 0.3)',
                padding: '6px 18px',
                borderRadius: '9999px',
                color: '#34d399',
                fontSize: '16px',
                fontWeight: 800
              }}>
                {rubricDetails[activeRubricTab].score}
              </div>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '20px', marginTop: '24px' }}>
              <div style={{ background: 'rgba(255, 255, 255, 0.02)', border: '1px solid rgba(255, 255, 255, 0.06)', borderRadius: '12px', padding: '20px' }}>
                <div style={{ fontSize: '12px', fontWeight: 700, color: '#34d399', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '12px', display: 'flex', alignItems: 'center', gap: '6px' }}>
                  <CheckCircle2 size={16} />
                  <span>Key Positive Signals</span>
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                  {rubricDetails[activeRubricTab].strengths.map((item, idx) => (
                    <div key={idx} style={{ fontSize: '13px', color: '#cbd5e1', display: 'flex', alignItems: 'center', gap: '8px' }}>
                      <span style={{ color: '#34d399' }}>✓</span>
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div style={{ background: 'rgba(99, 102, 241, 0.08)', border: '1px solid rgba(99, 102, 241, 0.2)', borderRadius: '12px', padding: '20px' }}>
                <div style={{ fontSize: '12px', fontWeight: 700, color: '#818cf8', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '12px', display: 'flex', alignItems: 'center', gap: '6px' }}>
                  <Sparkles size={16} />
                  <span>Actionable Coaching Tip</span>
                </div>
                <p style={{ fontSize: '13px', color: '#cbd5e1', lineHeight: 1.6, margin: 0 }}>
                  {rubricDetails[activeRubricTab].coachingTip}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 9: AI ETHICS */}
      <section style={{ padding: '90px 24px', borderBottom: '1px solid rgba(255, 255, 255, 0.05)' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto', textAlign: 'center' }}>
          <div style={{ fontSize: '12px', fontWeight: 700, color: '#818cf8', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '12px' }}>
            AI ETHICS
          </div>
          <h2 style={{ fontSize: 'clamp(28px, 4vw, 42px)', fontWeight: 800, color: '#f8fafc', marginBottom: '16px' }}>
            AI Should Coach You — Not Define You
          </h2>
          <p style={{ fontSize: '16px', color: '#94a3b8', maxWidth: '780px', margin: '0 auto 48px', lineHeight: 1.6 }}>
            Inprep.AI is designed as an empowering preparation tool, not a gatekeeper. We believe AI should help you present your best self, not make arbitrary judgments about your capabilities.
          </p>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
            gap: '20px',
            textAlign: 'left'
          }}>
            <div style={{ background: 'rgba(255, 255, 255, 0.02)', border: '1px solid rgba(255, 255, 255, 0.06)', borderRadius: '14px', padding: '24px' }}>
              <Eye size={22} color="#818cf8" style={{ marginBottom: '14px' }} />
              <h3 style={{ fontSize: '17px', fontWeight: 700, color: '#f8fafc', marginBottom: '8px' }}>Transparency</h3>
              <p style={{ fontSize: '13px', color: '#94a3b8', lineHeight: 1.6, margin: 0 }}>
                Clear explanations for all scores and feedback with actionable improvement steps.
              </p>
            </div>

            <div style={{ background: 'rgba(255, 255, 255, 0.02)', border: '1px solid rgba(255, 255, 255, 0.06)', borderRadius: '14px', padding: '24px' }}>
              <Shield size={22} color="#06b6d4" style={{ marginBottom: '14px' }} />
              <h3 style={{ fontSize: '17px', fontWeight: 700, color: '#f8fafc', marginBottom: '8px' }}>Candidate-First Focus</h3>
              <p style={{ fontSize: '13px', color: '#94a3b8', lineHeight: 1.6, margin: 0 }}>
                Tools designed entirely for candidate improvement, not employer screening.
              </p>
            </div>

            <div style={{ background: 'rgba(255, 255, 255, 0.02)', border: '1px solid rgba(255, 255, 255, 0.06)', borderRadius: '14px', padding: '24px' }}>
              <Lock size={22} color="#c084fc" style={{ marginBottom: '14px' }} />
              <h3 style={{ fontSize: '17px', fontWeight: 700, color: '#f8fafc', marginBottom: '8px' }}>Client-Side Processing</h3>
              <p style={{ fontSize: '13px', color: '#94a3b8', lineHeight: 1.6, margin: 0 }}>
                Sensitive video data never leaves your browser; all analysis is performed locally.
              </p>
            </div>

            <div style={{ background: 'rgba(255, 255, 255, 0.02)', border: '1px solid rgba(255, 255, 255, 0.06)', borderRadius: '14px', padding: '24px' }}>
              <CheckCircle2 size={22} color="#34d399" style={{ marginBottom: '14px' }} />
              <h3 style={{ fontSize: '17px', fontWeight: 700, color: '#f8fafc', marginBottom: '8px' }}>No Black-Box Decisions</h3>
              <p style={{ fontSize: '13px', color: '#94a3b8', lineHeight: 1.6, margin: 0 }}>
                Every score is backed by specific observable rubric criteria and clear reasoning.
              </p>
            </div>
          </div>

          <div style={{ marginTop: '36px' }}>
            <button
              onClick={() => onNavigateToFaq()}
              style={{
                background: 'none',
                border: 'none',
                color: '#818cf8',
                fontSize: '14px',
                fontWeight: 600,
                cursor: 'pointer',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '6px'
              }}
            >
              <span>Read our Responsible AI Framework in FAQ</span>
              <ArrowRight size={15} />
            </button>
          </div>
        </div>
      </section>

      {/* Section 10: CANDIDATE EXPERIENCE */}
      <section style={{ padding: '90px 24px', background: 'rgba(15, 23, 42, 0.3)', borderBottom: '1px solid rgba(255, 255, 255, 0.05)' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '48px' }}>
            <div style={{ fontSize: '12px', fontWeight: 700, color: '#38bdf8', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '10px' }}>
              CANDIDATE EXPERIENCE
            </div>
            <h2 style={{ fontSize: 'clamp(26px, 3.5vw, 38px)', fontWeight: 800, color: '#f8fafc' }}>
              Designed Around the Candidate Experience
            </h2>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
            gap: '16px'
          }}>
            <div style={{ background: 'rgba(255, 255, 255, 0.02)', border: '1px solid rgba(255, 255, 255, 0.06)', borderRadius: '12px', padding: '20px' }}>
              <div style={{ fontSize: '11px', fontWeight: 700, color: '#818cf8', marginBottom: '6px' }}>01</div>
              <h3 style={{ fontSize: '15px', fontWeight: 700, color: '#f8fafc', marginBottom: '6px' }}>Sign Up & Share Context</h3>
              <p style={{ fontSize: '12px', color: '#94a3b8', lineHeight: 1.5, margin: 0 }}>
                Upload CV and select your target role track in seconds.
              </p>
            </div>

            <div style={{ background: 'rgba(255, 255, 255, 0.02)', border: '1px solid rgba(255, 255, 255, 0.06)', borderRadius: '12px', padding: '20px' }}>
              <div style={{ fontSize: '11px', fontWeight: 700, color: '#06b6d4', marginBottom: '6px' }}>02</div>
              <h3 style={{ fontSize: '15px', fontWeight: 700, color: '#f8fafc', marginBottom: '6px' }}>Interactive Practice</h3>
              <p style={{ fontSize: '12px', color: '#94a3b8', lineHeight: 1.5, margin: 0 }}>
                Engage in realistic conversational voice mock interviews.
              </p>
            </div>

            <div style={{ background: 'rgba(255, 255, 255, 0.02)', border: '1px solid rgba(255, 255, 255, 0.06)', borderRadius: '12px', padding: '20px' }}>
              <div style={{ fontSize: '11px', fontWeight: 700, color: '#c084fc', marginBottom: '6px' }}>03</div>
              <h3 style={{ fontSize: '15px', fontWeight: 700, color: '#f8fafc', marginBottom: '6px' }}>Multimodal Evaluation</h3>
              <p style={{ fontSize: '12px', color: '#94a3b8', lineHeight: 1.5, margin: 0 }}>
                Analyze speech pace, posture, and answer structure simultaneously.
              </p>
            </div>

            <div style={{ background: 'rgba(255, 255, 255, 0.02)', border: '1px solid rgba(255, 255, 255, 0.06)', borderRadius: '12px', padding: '20px' }}>
              <div style={{ fontSize: '11px', fontWeight: 700, color: '#34d399', marginBottom: '6px' }}>04</div>
              <h3 style={{ fontSize: '15px', fontWeight: 700, color: '#f8fafc', marginBottom: '6px' }}>Actionable Feedback</h3>
              <p style={{ fontSize: '12px', color: '#94a3b8', lineHeight: 1.5, margin: 0 }}>
                Review STAR answer breakdowns and concrete rewrite blueprints.
              </p>
            </div>

            <div style={{ background: 'rgba(255, 255, 255, 0.02)', border: '1px solid rgba(255, 255, 255, 0.06)', borderRadius: '12px', padding: '20px' }}>
              <div style={{ fontSize: '11px', fontWeight: 700, color: '#f59e0b', marginBottom: '6px' }}>05</div>
              <h3 style={{ fontSize: '15px', fontWeight: 700, color: '#f8fafc', marginBottom: '6px' }}>Track Continuous Growth</h3>
              <p style={{ fontSize: '12px', color: '#94a3b8', lineHeight: 1.5, margin: 0 }}>
                Watch your readiness curve climb session by session.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 11: THE INPREP.AI ECOSYSTEM */}
      <section style={{ padding: '90px 24px', borderBottom: '1px solid rgba(255, 255, 255, 0.05)' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '50px' }}>
            <div style={{ fontSize: '12px', fontWeight: 700, color: '#818cf8', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '10px' }}>
              PLATFORM ARCHITECTURE
            </div>
            <h2 style={{ fontSize: 'clamp(26px, 3.5vw, 38px)', fontWeight: 800, color: '#f8fafc' }}>
              The Inprep.AI Ecosystem
            </h2>
            <p style={{ fontSize: '15px', color: '#94a3b8', maxWidth: '650px', margin: '10px auto 0' }}>
              A comprehensive suite designed to take you from resume upload to interview-ready confidence. Click any component below to explore.
            </p>
          </div>

          {/* Interactive Ecosystem Hub */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '32px',
            alignItems: 'center'
          }}>
            {/* Interactive Selector Ring */}
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(2, 1fr)',
              gap: '12px'
            }}>
              {Object.entries(ecosystemNodes).map(([key, item]) => {
                const IconComponent = item.icon;
                const isSelected = activeEcosystemNode === key;
                return (
                  <div
                    key={key}
                    onClick={() => setActiveEcosystemNode(key)}
                    style={{
                      background: isSelected ? 'linear-gradient(135deg, rgba(99, 102, 241, 0.25) 0%, rgba(6, 182, 212, 0.15) 100%)' : 'rgba(255, 255, 255, 0.02)',
                      border: isSelected ? '1px solid #818cf8' : '1px solid rgba(255, 255, 255, 0.08)',
                      borderRadius: '14px',
                      padding: '16px',
                      cursor: 'pointer',
                      transition: 'all 0.2s ease',
                      boxShadow: isSelected ? '0 0 25px rgba(99, 102, 241, 0.3)' : 'none'
                    }}
                  >
                    <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                      <div style={{
                        width: '32px',
                        height: '32px',
                        borderRadius: '8px',
                        background: isSelected ? 'rgba(129, 140, 248, 0.3)' : 'rgba(255, 255, 255, 0.05)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        flexShrink: 0
                      }}>
                        <IconComponent size={16} color={isSelected ? '#818cf8' : '#94a3b8'} />
                      </div>
                      <div>
                        <div style={{ fontSize: '13px', fontWeight: 700, color: isSelected ? '#f8fafc' : '#cbd5e1' }}>
                          {item.title}
                        </div>
                        <div style={{ fontSize: '11px', color: '#94a3b8' }}>
                          {item.badge}
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Ecosystem Node Active Details */}
            <div style={{
              background: 'linear-gradient(135deg, rgba(30, 41, 59, 0.6) 0%, rgba(15, 23, 42, 0.9) 100%)',
              border: '1px solid rgba(129, 140, 248, 0.3)',
              borderRadius: '20px',
              padding: '36px',
              boxShadow: '0 20px 50px rgba(0, 0, 0, 0.5)'
            }}>
              <div style={{
                display: 'inline-block',
                background: 'rgba(99, 102, 241, 0.15)',
                border: '1px solid rgba(129, 140, 248, 0.3)',
                padding: '4px 12px',
                borderRadius: '20px',
                color: '#a5b4fc',
                fontSize: '11px',
                fontWeight: 700,
                textTransform: 'uppercase',
                letterSpacing: '0.08em',
                marginBottom: '16px'
              }}>
                {ecosystemNodes[activeEcosystemNode].badge}
              </div>
              <h3 style={{ fontSize: '24px', fontWeight: 800, color: '#f8fafc', marginBottom: '6px' }}>
                {ecosystemNodes[activeEcosystemNode].title}
              </h3>
              <div style={{ fontSize: '14px', color: '#06b6d4', fontWeight: 600, marginBottom: '16px' }}>
                {ecosystemNodes[activeEcosystemNode].subtitle}
              </div>
              <p style={{ fontSize: '15px', color: '#94a3b8', lineHeight: 1.7, marginBottom: '28px' }}>
                {ecosystemNodes[activeEcosystemNode].desc}
              </p>

              <button
                onClick={() => startPractice()}
                className="btn-primary btn-sm"
                style={{ display: 'inline-flex', alignItems: 'center', gap: '8px' }}
              >
                <span>Launch This Simulation Layer</span>
                <ArrowRight size={14} />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Section 12: PROGRESSION TIMELINE */}
      <section style={{ padding: '90px 24px', background: 'rgba(15, 23, 42, 0.3)', borderBottom: '1px solid rgba(255, 255, 255, 0.05)' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '48px',
            alignItems: 'center'
          }}>
            {/* Left Steps */}
            <div>
              <div style={{ fontSize: '12px', fontWeight: 700, color: '#06b6d4', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '10px' }}>
                MEASURABLE MILESTONES
              </div>
              <h2 style={{ fontSize: 'clamp(26px, 3.5vw, 38px)', fontWeight: 800, color: '#f8fafc', marginBottom: '20px' }}>
                From Practice to Progress
              </h2>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '18px' }}>
                <div style={{ display: 'flex', gap: '14px' }}>
                  <div style={{ width: '28px', height: '28px', borderRadius: '50%', background: 'rgba(99, 102, 241, 0.2)', color: '#818cf8', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 700, fontSize: '12px', flexShrink: 0 }}>1</div>
                  <div>
                    <div style={{ fontSize: '14px', fontWeight: 700, color: '#f8fafc' }}>Diagnostic Baseline</div>
                    <div style={{ fontSize: '13px', color: '#94a3b8' }}>Complete your initial mock test to establish your baseline score.</div>
                  </div>
                </div>

                <div style={{ display: 'flex', gap: '14px' }}>
                  <div style={{ width: '28px', height: '28px', borderRadius: '50%', background: 'rgba(6, 182, 212, 0.2)', color: '#06b6d4', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 700, fontSize: '12px', flexShrink: 0 }}>2</div>
                  <div>
                    <div style={{ fontSize: '14px', fontWeight: 700, color: '#f8fafc' }}>Targeted Remediation</div>
                    <div style={{ fontSize: '13px', color: '#94a3b8' }}>Focus on identified weak spots like STAR result framing or pacing.</div>
                  </div>
                </div>

                <div style={{ display: 'flex', gap: '14px' }}>
                  <div style={{ width: '28px', height: '28px', borderRadius: '50%', background: 'rgba(192, 132, 252, 0.2)', color: '#c084fc', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 700, fontSize: '12px', flexShrink: 0 }}>3</div>
                  <div>
                    <div style={{ fontSize: '14px', fontWeight: 700, color: '#f8fafc' }}>Simulated High-Stakes Pressure</div>
                    <div style={{ fontSize: '13px', color: '#94a3b8' }}>Run full 45-minute simulations under authentic constraints.</div>
                  </div>
                </div>

                <div style={{ display: 'flex', gap: '14px' }}>
                  <div style={{ width: '28px', height: '28px', borderRadius: '50%', background: 'rgba(52, 211, 153, 0.2)', color: '#34d399', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 700, fontSize: '12px', flexShrink: 0 }}>4</div>
                  <div>
                    <div style={{ fontSize: '14px', fontWeight: 700, color: '#f8fafc' }}>Interview-Ready Mastery</div>
                    <div style={{ fontSize: '13px', color: '#94a3b8' }}>Reach 85+ consistency across all 4 evaluation pillars.</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Progress Curve Box */}
            <div style={{
              background: 'linear-gradient(135deg, rgba(30, 41, 59, 0.6) 0%, rgba(15, 23, 42, 0.8) 100%)',
              border: '1px solid rgba(255, 255, 255, 0.08)',
              borderRadius: '20px',
              padding: '28px'
            }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
                <div>
                  <div style={{ fontSize: '11px', color: '#818cf8', fontWeight: 700, textTransform: 'uppercase' }}>Candidate Trajectory</div>
                  <div style={{ fontSize: '17px', fontWeight: 800, color: '#f8fafc' }}>10-Session Growth Curve</div>
                </div>
                <div style={{ fontSize: '12px', color: '#34d399', fontWeight: 700, background: 'rgba(52, 211, 153, 0.1)', padding: '4px 10px', borderRadius: '20px' }}>
                  +26 pts Avg Improvement
                </div>
              </div>

              {/* Bar Visuals */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                <div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '12px', color: '#cbd5e1', marginBottom: '4px' }}>
                    <span>Session 1 (Baseline)</span>
                    <span style={{ fontWeight: 700 }}>68/100</span>
                  </div>
                  <div style={{ height: '8px', background: 'rgba(255, 255, 255, 0.06)', borderRadius: '4px', overflow: 'hidden' }}>
                    <div style={{ width: '68%', height: '100%', background: '#64748b' }} />
                  </div>
                </div>

                <div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '12px', color: '#cbd5e1', marginBottom: '4px' }}>
                    <span>Session 3 (Pacing Adjusted)</span>
                    <span style={{ fontWeight: 700 }}>75/100</span>
                  </div>
                  <div style={{ height: '8px', background: 'rgba(255, 255, 255, 0.06)', borderRadius: '4px', overflow: 'hidden' }}>
                    <div style={{ width: '75%', height: '100%', background: '#818cf8' }} />
                  </div>
                </div>

                <div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '12px', color: '#cbd5e1', marginBottom: '4px' }}>
                    <span>Session 5 (STAR Structure Fixed)</span>
                    <span style={{ fontWeight: 700 }}>82/100</span>
                  </div>
                  <div style={{ height: '8px', background: 'rgba(255, 255, 255, 0.06)', borderRadius: '4px', overflow: 'hidden' }}>
                    <div style={{ width: '82%', height: '100%', background: '#38bdf8' }} />
                  </div>
                </div>

                <div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '12px', color: '#cbd5e1', marginBottom: '4px' }}>
                    <span>Session 8 (System Design Mastery)</span>
                    <span style={{ fontWeight: 700 }}>89/100</span>
                  </div>
                  <div style={{ height: '8px', background: 'rgba(255, 255, 255, 0.06)', borderRadius: '4px', overflow: 'hidden' }}>
                    <div style={{ width: '89%', height: '100%', background: '#c084fc' }} />
                  </div>
                </div>

                <div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '12px', color: '#cbd5e1', marginBottom: '4px' }}>
                    <span>Session 10 (Interview-Ready)</span>
                    <span style={{ fontWeight: 700, color: '#34d399' }}>94/100</span>
                  </div>
                  <div style={{ height: '8px', background: 'rgba(255, 255, 255, 0.06)', borderRadius: '4px', overflow: 'hidden' }}>
                    <div style={{ width: '94%', height: '100%', background: 'linear-gradient(90deg, #34d399, #38bdf8)' }} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 13: WHO INPREP.AI IS FOR */}
      <section style={{ padding: '90px 24px', borderBottom: '1px solid rgba(255, 255, 255, 0.05)' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '48px' }}>
            <div style={{ fontSize: '12px', fontWeight: 700, color: '#818cf8', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '10px' }}>
              AUDIENCE
            </div>
            <h2 style={{ fontSize: 'clamp(26px, 3.5vw, 38px)', fontWeight: 800, color: '#f8fafc' }}>
              Who Inprep.AI Is For
            </h2>
            <p style={{ fontSize: '15px', color: '#94a3b8', maxWidth: '600px', margin: '10px auto 0' }}>
              Whether you are entering the job market, switching careers, or preparing for executive roles.
            </p>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
            gap: '20px'
          }}>
            <div style={{ background: 'rgba(255, 255, 255, 0.02)', border: '1px solid rgba(255, 255, 255, 0.06)', borderRadius: '14px', padding: '24px' }}>
              <Code2 size={24} color="#818cf8" style={{ marginBottom: '14px' }} />
              <h3 style={{ fontSize: '18px', fontWeight: 700, color: '#f8fafc', marginBottom: '8px' }}>Software Engineers</h3>
              <p style={{ fontSize: '13px', color: '#94a3b8', lineHeight: 1.6, margin: 0 }}>
                System design, coding reasoning, architectural trade-offs, and technical leadership interviews.
              </p>
            </div>

            <div style={{ background: 'rgba(255, 255, 255, 0.02)', border: '1px solid rgba(255, 255, 255, 0.06)', borderRadius: '14px', padding: '24px' }}>
              <Briefcase size={24} color="#06b6d4" style={{ marginBottom: '14px' }} />
              <h3 style={{ fontSize: '18px', fontWeight: 700, color: '#f8fafc', marginBottom: '8px' }}>Product Managers</h3>
              <p style={{ fontSize: '13px', color: '#94a3b8', lineHeight: 1.6, margin: 0 }}>
                Product sense, execution metrics, user story prioritization, and stakeholder influence.
              </p>
            </div>

            <div style={{ background: 'rgba(255, 255, 255, 0.02)', border: '1px solid rgba(255, 255, 255, 0.06)', borderRadius: '14px', padding: '24px' }}>
              <BarChart3 size={24} color="#c084fc" style={{ marginBottom: '14px' }} />
              <h3 style={{ fontSize: '18px', fontWeight: 700, color: '#f8fafc', marginBottom: '8px' }}>Consultants & Analysts</h3>
              <p style={{ fontSize: '13px', color: '#94a3b8', lineHeight: 1.6, margin: 0 }}>
                Case study frameworks, market sizing, structured business hypotheses, and data synthesis.
              </p>
            </div>

            <div style={{ background: 'rgba(255, 255, 255, 0.02)', border: '1px solid rgba(255, 255, 255, 0.06)', borderRadius: '14px', padding: '24px' }}>
              <GraduationCap size={24} color="#34d399" style={{ marginBottom: '14px' }} />
              <h3 style={{ fontSize: '18px', fontWeight: 700, color: '#f8fafc', marginBottom: '8px' }}>Career Switchers & Grads</h3>
              <p style={{ fontSize: '13px', color: '#94a3b8', lineHeight: 1.6, margin: 0 }}>
                Behavioral fundamentals, STAR storytelling, imposter syndrome elimination, and confidence building.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 14: OUR PRODUCT PHILOSOPHY */}
      <section style={{ padding: '90px 24px', background: 'rgba(15, 23, 42, 0.3)', borderBottom: '1px solid rgba(255, 255, 255, 0.05)' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '48px' }}>
            <div style={{ fontSize: '12px', fontWeight: 700, color: '#818cf8', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '10px' }}>
              PHILOSOPHY
            </div>
            <h2 style={{ fontSize: 'clamp(26px, 3.5vw, 38px)', fontWeight: 800, color: '#f8fafc' }}>
              Our Product Philosophy
            </h2>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '24px'
          }}>
            <div style={{ background: 'rgba(255, 255, 255, 0.02)', border: '1px solid rgba(255, 255, 255, 0.06)', borderRadius: '16px', padding: '28px' }}>
              <div style={{ fontSize: '12px', fontWeight: 800, color: '#818cf8', marginBottom: '10px' }}>01</div>
              <h3 style={{ fontSize: '18px', fontWeight: 700, color: '#f8fafc', marginBottom: '10px', lineHeight: 1.4 }}>
                "Practice should feel like the real thing, without the real stakes."
              </h3>
              <p style={{ fontSize: '13px', color: '#94a3b8', lineHeight: 1.6, margin: 0 }}>
                High fidelity simulations allow you to make mistakes, recalibrate, and iterate safely before facing hiring managers.
              </p>
            </div>

            <div style={{ background: 'rgba(255, 255, 255, 0.02)', border: '1px solid rgba(255, 255, 255, 0.06)', borderRadius: '16px', padding: '28px' }}>
              <div style={{ fontSize: '12px', fontWeight: 800, color: '#06b6d4', marginBottom: '10px' }}>02</div>
              <h3 style={{ fontSize: '18px', fontWeight: 700, color: '#f8fafc', marginBottom: '10px', lineHeight: 1.4 }}>
                "Feedback is only useful if it's actionable, not just descriptive."
              </h3>
              <p style={{ fontSize: '13px', color: '#94a3b8', lineHeight: 1.6, margin: 0 }}>
                Telling someone they were nervous is unhelpful. Showing them their 180 WPM pace and providing a 140 WPM model is transformative.
              </p>
            </div>

            <div style={{ background: 'rgba(255, 255, 255, 0.02)', border: '1px solid rgba(255, 255, 255, 0.06)', borderRadius: '16px', padding: '28px' }}>
              <div style={{ fontSize: '12px', fontWeight: 800, color: '#c084fc', marginBottom: '10px' }}>03</div>
              <h3 style={{ fontSize: '18px', fontWeight: 700, color: '#f8fafc', marginBottom: '10px', lineHeight: 1.4 }}>
                "Communication matters as much as technical knowledge."
              </h3>
              <p style={{ fontSize: '13px', color: '#94a3b8', lineHeight: 1.6, margin: 0 }}>
                The strongest candidate is often the one who explains complex solutions clearly and builds rapport effortlessly.
              </p>
            </div>

            <div style={{ background: 'rgba(255, 255, 255, 0.02)', border: '1px solid rgba(255, 255, 255, 0.06)', borderRadius: '16px', padding: '28px' }}>
              <div style={{ fontSize: '12px', fontWeight: 800, color: '#34d399', marginBottom: '10px' }}>04</div>
              <h3 style={{ fontSize: '18px', fontWeight: 700, color: '#f8fafc', marginBottom: '10px', lineHeight: 1.4 }}>
                "Preparation is a habit, not an all-nighter before the interview."
              </h3>
              <p style={{ fontSize: '13px', color: '#94a3b8', lineHeight: 1.6, margin: 0 }}>
                15 minutes of structured daily practice creates permanent muscle memory and calm fluency.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 15: CONTINUOUS PREPARATION CYCLE */}
      <section style={{ padding: '90px 24px', borderBottom: '1px solid rgba(255, 255, 255, 0.05)' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '48px' }}>
            <div style={{ fontSize: '12px', fontWeight: 700, color: '#38bdf8', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '10px' }}>
              PREPARATION LOOP
            </div>
            <h2 style={{ fontSize: 'clamp(26px, 3.5vw, 38px)', fontWeight: 800, color: '#f8fafc' }}>
              The Continuous Preparation Cycle
            </h2>
            <p style={{ fontSize: '15px', color: '#94a3b8', maxWidth: '600px', margin: '10px auto 0' }}>
              A closed feedback loop designed to systematically eliminate blindspots.
            </p>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(170px, 1fr))',
            gap: '14px'
          }}>
            <div style={{ background: 'rgba(255, 255, 255, 0.02)', border: '1px solid rgba(255, 255, 255, 0.06)', borderRadius: '12px', padding: '18px', textAlign: 'center' }}>
              <FileText size={20} color="#818cf8" style={{ margin: '0 auto 8px' }} />
              <div style={{ fontSize: '13px', fontWeight: 700, color: '#f8fafc' }}>1. Analyze CV</div>
              <div style={{ fontSize: '11px', color: '#94a3b8', marginTop: '2px' }}>Extract experience profile</div>
            </div>

            <div style={{ background: 'rgba(255, 255, 255, 0.02)', border: '1px solid rgba(255, 255, 255, 0.06)', borderRadius: '12px', padding: '18px', textAlign: 'center' }}>
              <Sliders size={20} color="#06b6d4" style={{ margin: '0 auto 8px' }} />
              <div style={{ fontSize: '13px', fontWeight: 700, color: '#f8fafc' }}>2. Configure</div>
              <div style={{ fontSize: '11px', color: '#94a3b8', marginTop: '2px' }}>Role, difficulty & rubric</div>
            </div>

            <div style={{ background: 'rgba(255, 255, 255, 0.02)', border: '1px solid rgba(255, 255, 255, 0.06)', borderRadius: '12px', padding: '18px', textAlign: 'center' }}>
              <Video size={20} color="#38bdf8" style={{ margin: '0 auto 8px' }} />
              <div style={{ fontSize: '13px', fontWeight: 700, color: '#f8fafc' }}>3. Live Sim</div>
              <div style={{ fontSize: '11px', color: '#94a3b8', marginTop: '2px' }}>Voice & video dialogue</div>
            </div>

            <div style={{ background: 'rgba(255, 255, 255, 0.02)', border: '1px solid rgba(255, 255, 255, 0.06)', borderRadius: '12px', padding: '18px', textAlign: 'center' }}>
              <Activity size={20} color="#c084fc" style={{ margin: '0 auto 8px' }} />
              <div style={{ fontSize: '13px', fontWeight: 700, color: '#f8fafc' }}>4. Telemetry</div>
              <div style={{ fontSize: '11px', color: '#94a3b8', marginTop: '2px' }}>Multimodal metrics</div>
            </div>

            <div style={{ background: 'rgba(255, 255, 255, 0.02)', border: '1px solid rgba(255, 255, 255, 0.06)', borderRadius: '12px', padding: '18px', textAlign: 'center' }}>
              <Sparkles size={20} color="#34d399" style={{ margin: '0 auto 8px' }} />
              <div style={{ fontSize: '13px', fontWeight: 700, color: '#f8fafc' }}>5. STAR Drills</div>
              <div style={{ fontSize: '11px', color: '#94a3b8', marginTop: '2px' }}>Answer rewrite practice</div>
            </div>

            <div style={{ background: 'rgba(255, 255, 255, 0.02)', border: '1px solid rgba(255, 255, 255, 0.06)', borderRadius: '12px', padding: '18px', textAlign: 'center' }}>
              <Award size={20} color="#f59e0b" style={{ margin: '0 auto 8px' }} />
              <div style={{ fontSize: '13px', fontWeight: 700, color: '#f8fafc' }}>6. Track Mastery</div>
              <div style={{ fontSize: '11px', color: '#94a3b8', marginTop: '2px' }}>Readiness score updates</div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 16: TRUST & PRIVACY GUARANTEES */}
      <section style={{ padding: '90px 24px', background: 'rgba(15, 23, 42, 0.3)', borderBottom: '1px solid rgba(255, 255, 255, 0.05)' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '48px' }}>
            <div style={{ fontSize: '12px', fontWeight: 700, color: '#34d399', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '10px' }}>
              PRIVACY PROMISE
            </div>
            <h2 style={{ fontSize: 'clamp(26px, 3.5vw, 38px)', fontWeight: 800, color: '#f8fafc' }}>
              Trust & Privacy Guarantees
            </h2>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
            gap: '20px'
          }}>
            <div style={{ background: 'rgba(255, 255, 255, 0.02)', border: '1px solid rgba(255, 255, 255, 0.06)', borderRadius: '14px', padding: '24px' }}>
              <Shield size={22} color="#34d399" style={{ marginBottom: '14px' }} />
              <h3 style={{ fontSize: '17px', fontWeight: 700, color: '#f8fafc', marginBottom: '8px' }}>Zero-Data Retention for Video</h3>
              <p style={{ fontSize: '13px', color: '#94a3b8', lineHeight: 1.6, margin: 0 }}>
                Webcam frames are analyzed purely in client-side RAM and never sent to cloud servers.
              </p>
            </div>

            <div style={{ background: 'rgba(255, 255, 255, 0.02)', border: '1px solid rgba(255, 255, 255, 0.06)', borderRadius: '14px', padding: '24px' }}>
              <Lock size={22} color="#818cf8" style={{ marginBottom: '14px' }} />
              <h3 style={{ fontSize: '17px', fontWeight: 700, color: '#f8fafc', marginBottom: '8px' }}>Encrypted Transcripts</h3>
              <p style={{ fontSize: '13px', color: '#94a3b8', lineHeight: 1.6, margin: 0 }}>
                All session text is protected with AES-256 bank-grade encryption at rest and in transit.
              </p>
            </div>

            <div style={{ background: 'rgba(255, 255, 255, 0.02)', border: '1px solid rgba(255, 255, 255, 0.06)', borderRadius: '14px', padding: '24px' }}>
              <CheckCircle2 size={22} color="#06b6d4" style={{ marginBottom: '14px' }} />
              <h3 style={{ fontSize: '17px', fontWeight: 700, color: '#f8fafc', marginBottom: '8px' }}>No Employer Data Sharing</h3>
              <p style={{ fontSize: '13px', color: '#94a3b8', lineHeight: 1.6, margin: 0 }}>
                Your practice logs belong solely to you. We never sell or share scores with prospective employers.
              </p>
            </div>

            <div style={{ background: 'rgba(255, 255, 255, 0.02)', border: '1px solid rgba(255, 255, 255, 0.06)', borderRadius: '14px', padding: '24px' }}>
              <Award size={22} color="#c084fc" style={{ marginBottom: '14px' }} />
              <h3 style={{ fontSize: '17px', fontWeight: 700, color: '#f8fafc', marginBottom: '8px' }}>Full Candidate Data Control</h3>
              <p style={{ fontSize: '13px', color: '#94a3b8', lineHeight: 1.6, margin: 0 }}>
                Export your preparation diagnostic reports or permanently delete your profile anytime in 1-click.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 17: THE TEAMS BEHIND INPREP.AI */}
      <section style={{ padding: '90px 24px', borderBottom: '1px solid rgba(255, 255, 255, 0.05)' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '48px' }}>
            <div style={{ fontSize: '12px', fontWeight: 700, color: '#818cf8', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '10px' }}>
              CORE DISCIPLINES
            </div>
            <h2 style={{ fontSize: 'clamp(26px, 3.5vw, 38px)', fontWeight: 800, color: '#f8fafc' }}>
              The Disciplines Powering Inprep.AI
            </h2>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
            gap: '20px'
          }}>
            <div style={{ background: 'rgba(255, 255, 255, 0.02)', border: '1px solid rgba(255, 255, 255, 0.06)', borderRadius: '14px', padding: '24px' }}>
              <Cpu size={24} color="#818cf8" style={{ marginBottom: '14px' }} />
              <h3 style={{ fontSize: '18px', fontWeight: 700, color: '#f8fafc', marginBottom: '8px' }}>AI Research & ML</h3>
              <p style={{ fontSize: '13px', color: '#94a3b8', lineHeight: 1.6, margin: 0 }}>
                Fine-tuned LLM architectures calibrated to provide constructive, non-hallucinatory feedback.
              </p>
            </div>

            <div style={{ background: 'rgba(255, 255, 255, 0.02)', border: '1px solid rgba(255, 255, 255, 0.06)', borderRadius: '14px', padding: '24px' }}>
              <Briefcase size={24} color="#06b6d4" style={{ marginBottom: '14px' }} />
              <h3 style={{ fontSize: '18px', fontWeight: 700, color: '#f8fafc', marginBottom: '8px' }}>Interview Coaching</h3>
              <p style={{ fontSize: '13px', color: '#94a3b8', lineHeight: 1.6, margin: 0 }}>
                Veteran recruiters and hiring managers who define our standardized 4-pillar rubrics.
              </p>
            </div>

            <div style={{ background: 'rgba(255, 255, 255, 0.02)', border: '1px solid rgba(255, 255, 255, 0.06)', borderRadius: '14px', padding: '24px' }}>
              <Volume2 size={24} color="#c084fc" style={{ marginBottom: '14px' }} />
              <h3 style={{ fontSize: '18px', fontWeight: 700, color: '#f8fafc', marginBottom: '8px' }}>Speech & Vision Telemetry</h3>
              <p style={{ fontSize: '13px', color: '#94a3b8', lineHeight: 1.6, margin: 0 }}>
                Acoustic signal processing engineers building low-latency, privacy-safe browser telemetry.
              </p>
            </div>

            <div style={{ background: 'rgba(255, 255, 255, 0.02)', border: '1px solid rgba(255, 255, 255, 0.06)', borderRadius: '14px', padding: '24px' }}>
              <Sparkles size={24} color="#34d399" style={{ marginBottom: '14px' }} />
              <h3 style={{ fontSize: '18px', fontWeight: 700, color: '#f8fafc', marginBottom: '8px' }}>Candidate Experience</h3>
              <p style={{ fontSize: '13px', color: '#94a3b8', lineHeight: 1.6, margin: 0 }}>
                Designers dedicated to making interview prep motivating, transparent, and anxiety-free.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 18: BOTTOM CTA BANNER */}
      <section style={{ padding: '90px 24px', position: 'relative' }}>
        <div style={{
          maxWidth: '1000px',
          margin: '0 auto',
          background: 'linear-gradient(135deg, rgba(99, 102, 241, 0.15) 0%, rgba(6, 182, 212, 0.1) 100%)',
          border: '1px solid rgba(129, 140, 248, 0.3)',
          borderRadius: '24px',
          padding: '60px 32px',
          textAlign: 'center',
          boxShadow: '0 20px 60px rgba(0, 0, 0, 0.5), 0 0 40px rgba(99, 102, 241, 0.2)'
        }}>
          <div style={{
            width: '52px',
            height: '52px',
            borderRadius: '14px',
            background: 'linear-gradient(135deg, #7c3aed 0%, #38bdf8 100%)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            margin: '0 auto 20px',
            boxShadow: '0 0 20px rgba(124, 58, 237, 0.5)'
          }}>
            <Sparkles size={26} color="#ffffff" />
          </div>

          <h2 style={{
            fontSize: 'clamp(28px, 4.5vw, 44px)',
            fontWeight: 800,
            letterSpacing: '-0.02em',
            color: '#f8fafc',
            marginBottom: '16px'
          }}>
            Prepare With Purpose.{' '}
            <span style={{
              background: 'linear-gradient(135deg, #818cf8 0%, #38bdf8 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent'
            }}>
              Improve With Every Interview.
            </span>
          </h2>

          <p style={{
            fontSize: '16px',
            color: '#94a3b8',
            maxWidth: '680px',
            margin: '0 auto 36px',
            lineHeight: 1.6
          }}>
            Experience the power of comprehensive AI-driven interview preparation and calibrated feedback.
          </p>

          <div style={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'center',
            gap: '16px',
            marginBottom: '24px'
          }}>
            <button
              onClick={() => startPractice()}
              className="btn-primary"
              style={{ padding: '14px 32px', fontSize: '15px', display: 'inline-flex', alignItems: 'center', gap: '8px' }}
            >
              <span>Start Preparing</span>
              <ArrowRight size={16} />
            </button>

            <button
              onClick={() => setDemoModalOpen(true)}
              className="btn-secondary"
              style={{ padding: '14px 28px', fontSize: '15px', display: 'inline-flex', alignItems: 'center', gap: '8px' }}
            >
              <Play size={16} color="#818cf8" />
              <span>Explore Platform Tour</span>
            </button>
          </div>

          <div style={{ fontSize: '12px', color: '#64748b' }}>
            Zero credit card required • Instant 2-minute setup • 100% private
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer style={{
        background: '#04060a',
        borderTop: '1px solid rgba(255, 255, 255, 0.06)',
        padding: '60px 24px 40px'
      }}>
        <div style={{
          maxWidth: '1200px',
          margin: '0 auto',
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
          gap: '40px',
          marginBottom: '50px'
        }}>
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '14px' }}>
              <div style={{
                width: '32px',
                height: '32px',
                borderRadius: '8px',
                background: 'linear-gradient(135deg, #7c3aed 0%, #38bdf8 100%)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}>
                <Sparkles size={18} color="#ffffff" />
              </div>
              <span style={{ fontSize: '18px', fontWeight: 800, color: '#f8fafc' }}>
                InPrep<span style={{ color: '#818cf8' }}>AI</span>
              </span>
            </div>
            <p style={{ fontSize: '13px', color: '#94a3b8', lineHeight: 1.6 }}>
              The purpose-built AI interview intelligence platform combining CV context, multimodal telemetry, and actionable coaching.
            </p>
          </div>

          <div>
            <div style={{ fontSize: '13px', fontWeight: 700, color: '#f8fafc', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '16px' }}>
              Product
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', fontSize: '13px' }}>
              <span onClick={() => onNavigateToFeatures()} style={{ color: '#94a3b8', cursor: 'pointer' }}>Platform Features</span>
              <span onClick={() => onNavigateToHowItWorks()} style={{ color: '#94a3b8', cursor: 'pointer' }}>How It Works</span>
              <span onClick={() => onNavigateToSimulations()} style={{ color: '#94a3b8', cursor: 'pointer' }}>Role Tracks</span>
              <span onClick={() => onNavigateToPricing()} style={{ color: '#94a3b8', cursor: 'pointer' }}>Pricing & Plans</span>
            </div>
          </div>

          <div>
            <div style={{ fontSize: '13px', fontWeight: 700, color: '#f8fafc', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '16px' }}>
              Resources
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', fontSize: '13px' }}>
              <span onClick={() => onNavigateToFaq()} style={{ color: '#94a3b8', cursor: 'pointer' }}>FAQ & Help</span>
              <span onClick={() => setDemoModalOpen(true)} style={{ color: '#94a3b8', cursor: 'pointer' }}>Platform Tour</span>
              <span onClick={() => onNavigateToAi()} style={{ color: '#94a3b8', cursor: 'pointer' }}>AI Chat Assistant</span>
            </div>
          </div>

          <div>
            <div style={{ fontSize: '13px', fontWeight: 700, color: '#f8fafc', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '16px' }}>
              Company
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', fontSize: '13px' }}>
              <span style={{ color: '#818cf8', fontWeight: 600 }}>About & Philosophy</span>
              <span style={{ color: '#94a3b8' }}>Careers</span>
              <span style={{ color: '#94a3b8' }}>Press</span>
            </div>
          </div>

          <div>
            <div style={{ fontSize: '13px', fontWeight: 700, color: '#f8fafc', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '16px' }}>
              Legal
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', fontSize: '13px' }}>
              <span style={{ color: '#94a3b8' }}>Privacy Policy</span>
              <span style={{ color: '#94a3b8' }}>Terms of Service</span>
              <span style={{ color: '#94a3b8' }}>Responsible AI</span>
            </div>
          </div>
        </div>

        <div style={{
          maxWidth: '1200px',
          margin: '0 auto',
          borderTop: '1px solid rgba(255, 255, 255, 0.06)',
          paddingTop: '24px',
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'space-between',
          alignItems: 'center',
          gap: '16px',
          fontSize: '12px',
          color: '#64748b'
        }}>
          <div>© 2026 Inprep.AI. All Rights Reserved.</div>
          <div style={{ display: 'flex', gap: '20px' }}>
            <span>Enterprise Standard</span>
            <span>Continuous Innovation</span>
          </div>
        </div>
      </footer>

      {/* Demo Video Modal */}
      <DemoVideoModal
        isOpen={demoModalOpen}
        onClose={() => setDemoModalOpen(false)}
        onStartPractice={() => {
          setDemoModalOpen(false);
          startPractice();
        }}
      />
    </div>
  );
};
