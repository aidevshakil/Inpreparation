import React, { useState, useMemo } from 'react';
import {
  Sparkles,
  ArrowRight,
  Search,
  HelpCircle,
  ShieldCheck,
  Zap,
  ChevronDown,
  Layers,
  FileText,
  Video,
  Mic,
  Award,
  CreditCard,
  Lock,
  Cpu,
  Mail,
  BookOpen
} from 'lucide-react';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';
import { LiveSimulationModal } from '../components/LiveSimulationModal';
import { DemoVideoModal } from '../components/DemoVideoModal';

interface FaqPageProps {
  onNavigateToHome: () => void;
  onNavigateToFeatures: () => void;
  onNavigateToHowItWorks: () => void;
  onNavigateToSimulations: () => void;
  onNavigateToPricing: () => void;
  onNavigateToAbout?: () => void;
  onNavigateToAi?: () => void;
}

interface FaqItem {
  id: string;
  q: string;
  a: string;
}

interface FaqCategory {
  id: string;
  name: string;
  icon: React.ReactNode;
  items: FaqItem[];
}

export const FaqPage: React.FC<FaqPageProps> = ({
  onNavigateToHome,
  onNavigateToFeatures,
  onNavigateToHowItWorks,
  onNavigateToSimulations,
  onNavigateToPricing,
  onNavigateToAbout,
  onNavigateToAi
}) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [openFaqMap, setOpenFaqMap] = useState<Record<string, boolean>>({
    'get-1': true,
    'cv-1': true,
    'cv-vision-1': true
  });
  const [isSimulatorOpen, setIsSimulatorOpen] = useState(false);
  const [isDemoOpen, setIsDemoOpen] = useState(false);
  const [selectedRole, setSelectedRole] = useState('Senior Frontend Engineer');

  const toggleFaq = (id: string) => {
    setOpenFaqMap(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  // 10 Detailed Categories from the mockup
  const faqCategories: FaqCategory[] = [
    {
      id: 'getting-started',
      name: 'Getting Started',
      icon: <Sparkles size={18} color="#818cf8" />,
      items: [
        {
          id: 'get-1',
          q: 'What is InPrep AI?',
          a: 'InPrep AI is an ultra-realistic, multi-modal interview rehearsal platform. It uses low-latency conversational voice AI, computer vision telemetry, and standardized hiring rubrics to simulate authentic technical, behavioral, and system design interviews with instant diagnostic scorecards.'
        },
        {
          id: 'get-2',
          q: 'Who is InPrep AI for?',
          a: 'InPrep AI is designed for software engineers, backend/frontend developers, distributed system architects, product managers, data scientists, and technical leaders preparing for high-stakes interviews at top tech firms, FAANG companies, and high-growth startups.'
        },
        {
          id: 'get-3',
          q: 'Do I need prior interview preparation before using InPrep AI?',
          a: 'Not at all! You can use InPrep AI as a baseline diagnostic to discover your weaknesses early, or as an intensive rehearsal tool right before your actual on-site loop.'
        },
        {
          id: 'get-4',
          q: 'How do I get started?',
          a: 'Simply click "Launch Simulator" or "Start Free Practice". No credit card is required to take your first 2 complete mock interview sessions in your browser.'
        }
      ]
    },
    {
      id: 'profile-cv',
      name: 'Profile & CV Upload',
      icon: <FileText size={18} color="#06b6d4" />,
      items: [
        {
          id: 'cv-1',
          q: 'Can I upload my CV / Resume?',
          a: 'Yes! You can upload your resume (PDF, DOCX up to 10MB). Our AI parses your architecture stack, project scale, and leadership milestones to calibrate targeted questions around your background.'
        },
        {
          id: 'cv-2',
          q: 'Can I build custom interview questions without a CV?',
          a: 'Yes! You can select any role from our 500+ pre-calibrated tracks (e.g. Senior Frontend, Staff Backend, ML Engineer) or paste a specific job description URL/text.'
        },
        {
          id: 'cv-3',
          q: 'What resume formats are supported?',
          a: 'We support PDF, Microsoft Word (.doc, .docx), plain text (.txt), and Markdown (.md) formatted files.'
        },
        {
          id: 'cv-4',
          q: 'Can I edit my profile parameters after CV analysis?',
          a: 'Yes! You can adjust your target seniority level (L4, L5, L6, L7), target company type, and prioritize specific technical domains anytime.'
        }
      ]
    },
    {
      id: 'practice-assessment',
      name: '5-Question Practice & Assessment',
      icon: <Layers size={18} color="#a855f7" />,
      items: [
        {
          id: 'prac-1',
          q: 'How many questions are in a practice interview?',
          a: 'A standard practice round consists of 3 to 5 deep, multi-stage questions. If your answer is vague, the AI interviewer will ask contextual follow-up probes just like a real human hiring manager.'
        },
        {
          id: 'prac-2',
          q: 'How does the AI create personalized questions?',
          a: 'Questions are dynamically calibrated against your seniority level, resume experience, and real rubrics from companies like Google, Meta, Amazon, and Stripe.'
        },
        {
          id: 'prac-3',
          q: 'Is the assessment the same as the actual mock interview?',
          a: 'Yes, our simulations replicate the conversational cadence, strictness, and trade-off depth expected in real 45-minute technical and behavioral loops.'
        },
        {
          id: 'prac-4',
          q: 'How does the live 5-question interview flow work?',
          a: 'The AI speaks the question -> You respond via speech or text -> Telemetry tracks cadence and composure -> AI evaluates and asks follow-ups -> Instant Scorecard is generated.'
        },
        {
          id: 'prac-5',
          q: 'Can I retake or pause drills?',
          a: 'Yes, in practice mode you can pause, request hints, or retake questions without penalty.'
        }
      ]
    },
    {
      id: 'multimodal-evaluation',
      name: 'Multi-modal Evaluation',
      icon: <Cpu size={18} color="#f59e0b" />,
      items: [
        {
          id: 'multi-1',
          q: 'What dimensions does InPrep AI evaluate?',
          a: 'We evaluate 5 core pillars: Technical Depth & Accuracy, STAR Method Structure, Speech Cadence (130-150 WPM), Eye Contact & Body Language, and Executive Impact.'
        },
        {
          id: 'multi-2',
          q: 'Does the score come from only one AI model?',
          a: 'No. We use a multi-model pipeline: acoustic models for audio pacing and filler detection, client-side computer vision for gaze tracking, and high-reasoning LLMs for conceptual correctness.'
        },
        {
          id: 'multi-3',
          q: 'Is the AI score absolute or a hiring guarantee?',
          a: 'The score is a calibrated diagnostic benchmark indicating your relative readiness and identifying exact areas to polish before your real interviews.'
        },
        {
          id: 'multi-4',
          q: 'How is the overall score calculated?',
          a: 'Scores are weighted across technical precision (40%), structured communication (30%), non-verbal composure (15%), and conciseness/pacing (15%).'
        }
      ]
    },
    {
      id: 'computer-vision',
      name: 'Computer Vision & Camera',
      icon: <Video size={18} color="#10b981" />,
      items: [
        {
          id: 'cv-vision-1',
          q: 'What hardware or camera is needed?',
          a: 'Any standard laptop integrated webcam or USB camera works seamlessly. No specialized hardware or software installations are needed.'
        },
        {
          id: 'cv-vision-2',
          q: 'What non-verbal signals does the camera measure?',
          a: 'Our client-side vision model tracks eye contact alignment to the lens, head pose steadiness, posture stability, and nervousness indicators.'
        },
        {
          id: 'cv-vision-3',
          q: 'Does InPrep AI detect emotions, anxiety, or psychology?',
          a: 'It measures calm composure, engagement, and vocal steadiness when responding to difficult architectural or behavioral questions.'
        },
        {
          id: 'cv-vision-4',
          q: 'Can I disable the camera and practice in audio-only mode?',
          a: 'Yes! You can toggle camera off at any time and practice exclusively with voice or text input.'
        },
        {
          id: 'cv-vision-5',
          q: 'Is a camera strictly required for practice sessions?',
          a: 'No, camera tracking is entirely optional. You still receive full audio and technical scorecard feedback without video.'
        }
      ]
    },
    {
      id: 'speech-intelligence',
      name: 'Speech Intelligence & Cadence',
      icon: <Mic size={18} color="#38bdf8" />,
      items: [
        {
          id: 'speech-1',
          q: 'What does speech analysis measure?',
          a: 'It analyzes speech rate (words per minute), filler words ("um", "ah", "basically", "like"), pause duration, and vocal inflection.'
        },
        {
          id: 'speech-2',
          q: 'Does speech analysis judge my accent or mother tongue?',
          a: 'No! Our models are trained to evaluate the substance, technical logic, and STAR structure of your answer, regardless of regional accent.'
        },
        {
          id: 'speech-3',
          q: 'How do I improve my speaking based on the AI feedback?',
          a: 'Use our side-by-side model answer comparison to see suggested phrasing and listen to AI model delivery.'
        }
      ]
    },
    {
      id: 'feedback-blueprints',
      name: 'Feedback & Answer Blueprints',
      icon: <Award size={18} color="#ec4899" />,
      items: [
        {
          id: 'fb-1',
          q: 'What happens immediately after completing an interview?',
          a: 'In less than 2 seconds, you receive a full diagnostic scorecard with category breakdowns, transcription analysis, and targeted drills.'
        },
        {
          id: 'fb-2',
          q: 'What is an AI Suggested Answer Blueprint?',
          a: 'It is an optimized version of your transcribed response structured in STAR format, highlighting strong power verbs and quantifiable metrics.'
        },
        {
          id: 'fb-3',
          q: 'What is the STAR framework and why is it used?',
          a: 'Situation, Task, Action, Result — the universally accepted framework used by hiring managers at Google, Amazon, and Meta to evaluate behavioral competence.'
        }
      ]
    },
    {
      id: 'credits-billing',
      name: 'AI Credits & Billing',
      icon: <CreditCard size={18} color="#fbbf24" />,
      items: [
        {
          id: 'bill-1',
          q: 'What are AI credits and how do they work?',
          a: '1 Credit corresponds to 1 full multi-stage AI interview simulation including audio synthesis and diagnostic scorecard generation.'
        },
        {
          id: 'bill-2',
          q: 'What consumes a credit?',
          a: 'Starting and completing a full mock interview session consumes 1 credit. Unlimited follow-up drills and model answers are included.'
        },
        {
          id: 'bill-3',
          q: 'Can I use InPrep AI for free?',
          a: 'Yes! The Starter plan gives you 2 free full AI interview simulations every month with zero credit card requirement.'
        },
        {
          id: 'bill-4',
          q: 'Can I cancel or change plans anytime?',
          a: 'Yes, cancel or upgrade anytime with 1 click from your account dashboard with zero cancellation fees.'
        }
      ]
    },
    {
      id: 'privacy-security',
      name: 'Responsible AI & Privacy',
      icon: <Lock size={18} color="#10b981" />,
      items: [
        {
          id: 'priv-1',
          q: 'Can I decide whether my practice is private?',
          a: 'All interview sessions are 100% private to your account. We never publish or share candidate scores.'
        },
        {
          id: 'priv-2',
          q: 'Is my video recording stored on external servers?',
          a: 'No. All computer vision and video analysis runs 100% client-side in your browser. Raw webcam video is never sent or stored on our servers.'
        },
        {
          id: 'priv-3',
          q: 'Does InPrep AI sell my personal data or audio?',
          a: 'Never. We adhere to strict SOC-2 compliance standards and never sell data or use your private transcripts to train public models.'
        }
      ]
    },
    {
      id: 'technical-support',
      name: 'Technical Support & Setup',
      icon: <HelpCircle size={18} color="#67e8f9" />,
      items: [
        {
          id: 'tech-1',
          q: 'Why isn’t my camera or microphone connecting?',
          a: 'Ensure you have granted microphone and camera permissions in your browser URL bar. If blocked, click the lock/camera icon to allow access.'
        },
        {
          id: 'tech-2',
          q: 'Which browsers are supported?',
          a: 'InPrep AI runs optimally on all modern desktop browsers including Google Chrome, Microsoft Edge, Brave, Safari, and Mozilla Firefox.'
        }
      ]
    }
  ];

  // Search Filter logic
  const filteredCategories = useMemo(() => {
    if (!searchQuery.trim() && activeCategory === 'all') {
      return faqCategories;
    }

    return faqCategories
      .map(cat => {
        if (activeCategory !== 'all' && cat.id !== activeCategory) {
          return null;
        }

        if (!searchQuery.trim()) {
          return cat;
        }

        const query = searchQuery.toLowerCase();
        const matchingItems = cat.items.filter(
          item =>
            item.q.toLowerCase().includes(query) ||
            item.a.toLowerCase().includes(query)
        );

        if (matchingItems.length > 0) {
          return { ...cat, items: matchingItems };
        }
        return null;
      })
      .filter((cat): cat is FaqCategory => cat !== null);
  }, [searchQuery, activeCategory, faqCategories]);

  const totalQuestionsCount = faqCategories.reduce((acc, cat) => acc + cat.items.length, 0);

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
        currentPage="faq"
        onNavigate={(page) => {
          if (page === 'home') onNavigateToHome();
          if (page === 'features') onNavigateToFeatures();
          if (page === 'how-it-works') onNavigateToHowItWorks();
          if (page === 'simulations') onNavigateToSimulations();
          if (page === 'pricing') onNavigateToPricing();
          if (page === 'about' && onNavigateToAbout) onNavigateToAbout();
          if (page === 'chat' && onNavigateToAi) onNavigateToAi();
        }}
      />

      <main style={{ flex: 1 }}>
        {/* ========================================================
            HERO SECTION: Questions? We've Got Answers.
        ======================================================== */}
        <section style={{ padding: '70px 0 50px', position: 'relative', overflow: 'hidden' }}>
          <div className="bg-ambient-glow" style={{ top: '-15%', left: '20%', width: '500px', height: '500px', background: 'radial-gradient(circle, rgba(124, 58, 237, 0.35) 0%, transparent 70%)' }} />
          <div className="bg-ambient-glow" style={{ top: '30%', right: '15%', width: '450px', height: '450px', background: 'radial-gradient(circle, rgba(6, 182, 212, 0.25) 0%, transparent 70%)' }} />

          <div className="container" style={{ textAlign: 'center', position: 'relative', zIndex: 2 }}>
            <div style={{ marginBottom: '18px' }}>
              <span className="badge-pill badge-purple">
                <Sparkles size={14} color="#c084fc" />
                HELP CENTER • KNOWLEDGE BASE
              </span>
            </div>

            <h1 style={{
              fontSize: 'clamp(36px, 5.5vw, 62px)',
              fontWeight: 800,
              letterSpacing: '-0.03em',
              lineHeight: 1.15,
              marginBottom: '20px',
              maxWidth: '920px',
              margin: '0 auto 20px'
            }}>
              Questions?{' '}
              <span className="gradient-highlight-text" style={{ textShadow: '0 0 40px rgba(124, 58, 237, 0.4)' }}>
                We've Got Answers.
              </span>
            </h1>

            <p style={{
              fontSize: '17px',
              color: '#94a3b8',
              lineHeight: 1.7,
              maxWidth: '780px',
              margin: '0 auto 32px'
            }}>
              Learn how Inprep.AI evaluates your interview performance, how your AI credits work, and the steps your career journey will undergo with our continuous performance calibration.
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
                className="btn-primary"
                style={{ fontSize: '15px', padding: '14px 30px', display: 'inline-flex', alignItems: 'center', gap: '8px' }}
              >
                <span>Start Practicing Free</span>
                <ArrowRight size={16} />
              </button>

              <button
                onClick={onNavigateToSimulations}
                className="btn-secondary"
                style={{ fontSize: '15px', padding: '14px 26px' }}
              >
                <span>Explore Role Tracks</span>
              </button>
            </div>

            {/* Badges Row */}
            <div style={{
              display: 'flex',
              flexWrap: 'wrap',
              justifyContent: 'center',
              gap: '16px 24px',
              paddingTop: '20px',
              borderTop: '1px solid rgba(255, 255, 255, 0.08)',
              color: '#cbd5e1',
              fontSize: '13px',
              fontWeight: 500
            }}>
              <span style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <ShieldCheck size={16} color="#06b6d4" /> CV-Contextualized Practice
              </span>
              <span style={{ color: '#475569' }}>•</span>
              <span style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <Zap size={16} color="#818cf8" /> Multimodal Feedback
              </span>
              <span style={{ color: '#475569' }}>•</span>
              <span style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <Layers size={16} color="#c084fc" /> 500+ Role Frameworks
              </span>
              <span style={{ color: '#475569' }}>•</span>
              <span style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <Award size={16} color="#10b981" /> Private & Candidate-Centric
              </span>
            </div>
          </div>
        </section>

        {/* ========================================================
            GLOBAL SEARCH & QUICK TOPIC FILTERS
        ======================================================== */}
        <section style={{ padding: '10px 0 40px', position: 'relative', zIndex: 10 }}>
          <div className="container">
            <div style={{
              background: '#0d121c',
              border: '1px solid rgba(99, 102, 241, 0.3)',
              borderRadius: '20px',
              padding: '24px',
              boxShadow: '0 20px 40px rgba(0, 0, 0, 0.6)'
            }}>
              <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: '12px',
                background: 'rgba(0, 0, 0, 0.3)',
                border: '1px solid rgba(255, 255, 255, 0.1)',
                borderRadius: '12px',
                padding: '14px 18px',
                marginBottom: '16px'
              }}>
                <Search size={20} color="#818cf8" />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder='Search for questions (e.g. "How does AI scoring work?", "What is the 5-Question...")...'
                  style={{
                    background: 'transparent',
                    border: 'none',
                    outline: 'none',
                    color: '#fff',
                    fontSize: '15px',
                    width: '100%',
                    fontFamily: 'inherit'
                  }}
                />
                {searchQuery && (
                  <button
                    onClick={() => setSearchQuery('')}
                    style={{ background: 'transparent', border: 'none', color: '#94a3b8', cursor: 'pointer', fontSize: '13px' }}
                  >
                    Clear
                  </button>
                )}
              </div>

              {/* Quick tags */}
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', flexWrap: 'wrap' }}>
                <span style={{ fontSize: '12px', color: '#64748b', fontWeight: 600 }}>Try:</span>
                {[
                  'How to start',
                  'Multimodal overview',
                  'Computer Vision & privacy',
                  'Answer blueprints',
                  'AI credits & billing',
                  'Responsible AI & privacy'
                ].map((tag, idx) => (
                  <button
                    key={idx}
                    onClick={() => setSearchQuery(tag)}
                    style={{
                      background: 'rgba(255, 255, 255, 0.04)',
                      border: '1px solid rgba(255, 255, 255, 0.08)',
                      color: '#cbd5e1',
                      borderRadius: '9999px',
                      padding: '4px 12px',
                      fontSize: '12px',
                      cursor: 'pointer',
                      transition: 'all 0.2s'
                    }}
                  >
                    {tag}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ========================================================
            MAIN FAQ SECTION: SIDEBAR + ACCORDIONS
        ======================================================== */}
        <section style={{ padding: '30px 0 80px', position: 'relative' }}>
          <div className="container">
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
              gap: '36px',
              alignItems: 'start'
            }}>
              {/* Left Column: Category Sidebar + CTA Box */}
              <div style={{ position: 'sticky', top: '90px' }}>
                <div style={{
                  background: '#0d121c',
                  border: '1px solid rgba(255, 255, 255, 0.08)',
                  borderRadius: '20px',
                  padding: '20px',
                  marginBottom: '20px'
                }}>
                  <div style={{ fontSize: '13px', fontWeight: 800, color: '#f8fafc', textTransform: 'uppercase', letterSpacing: '0.06em', marginBottom: '14px', paddingBottom: '10px', borderBottom: '1px solid rgba(255, 255, 255, 0.06)' }}>
                    FAQ Categories ({totalQuestionsCount})
                  </div>

                  <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
                    <button
                      onClick={() => setActiveCategory('all')}
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        padding: '10px 12px',
                        borderRadius: '8px',
                        background: activeCategory === 'all' ? 'rgba(99, 102, 241, 0.2)' : 'transparent',
                        border: activeCategory === 'all' ? '1px solid #818cf8' : '1px solid transparent',
                        color: activeCategory === 'all' ? '#fff' : '#94a3b8',
                        cursor: 'pointer',
                        fontSize: '13px',
                        fontWeight: activeCategory === 'all' ? 700 : 500,
                        textAlign: 'left'
                      }}
                    >
                      <span>All Topics</span>
                      <span style={{ fontSize: '11px', color: '#67e8f9' }}>{totalQuestionsCount}</span>
                    </button>

                    {faqCategories.map((cat) => (
                      <button
                        key={cat.id}
                        onClick={() => setActiveCategory(cat.id)}
                        style={{
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'space-between',
                          padding: '10px 12px',
                          borderRadius: '8px',
                          background: activeCategory === cat.id ? 'rgba(99, 102, 241, 0.2)' : 'transparent',
                          border: activeCategory === cat.id ? '1px solid #818cf8' : '1px solid transparent',
                          color: activeCategory === cat.id ? '#fff' : '#94a3b8',
                          cursor: 'pointer',
                          fontSize: '13px',
                          fontWeight: activeCategory === cat.id ? 700 : 500,
                          textAlign: 'left'
                        }}
                      >
                        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                          {cat.icon}
                          <span>{cat.name}</span>
                        </div>
                        <span style={{ fontSize: '11px', color: '#64748b' }}>{cat.items.length}</span>
                      </button>
                    ))}
                  </div>
                </div>

                {/* Simulation Prompt Box */}
                <div style={{
                  background: 'linear-gradient(135deg, #13192b 0%, #0b0f19 100%)',
                  border: '1px solid rgba(99, 102, 241, 0.3)',
                  borderRadius: '18px',
                  padding: '22px',
                  boxShadow: '0 15px 35px rgba(0, 0, 0, 0.5)'
                }}>
                  <div style={{ width: '36px', height: '36px', borderRadius: '10px', background: 'rgba(99, 102, 241, 0.2)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '12px' }}>
                    <Sparkles size={18} color="#818cf8" />
                  </div>
                  <h3 style={{ fontSize: '16px', fontWeight: 800, color: '#f8fafc', marginBottom: '6px' }}>
                    Start your simulation today
                  </h3>
                  <p style={{ fontSize: '12px', color: '#94a3b8', lineHeight: 1.6, marginBottom: '16px' }}>
                    Experience realistic live interview simulations with instant multimodal feedback and step-by-step model answer blueprints.
                  </p>
                  <button
                    onClick={() => handleStartPractice()}
                    className="btn-primary btn-sm"
                    style={{ width: '100%', justifyContent: 'center', marginBottom: '10px' }}
                  >
                    <span>Student Engineering Pack</span>
                    <ArrowRight size={13} />
                  </button>
                  <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '11px', color: '#64748b' }}>
                    <span>Avg. session: ~15 min</span>
                    <span>3 Free</span>
                  </div>
                </div>
              </div>

              {/* Right Column: Category Accordion Groups */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '32px', gridColumn: 'span 2' }}>
                {filteredCategories.length === 0 && (
                  <div style={{ textAlign: 'center', padding: '60px 20px', background: '#0e121c', borderRadius: '16px', border: '1px solid rgba(255, 255, 255, 0.08)' }}>
                    <HelpCircle size={40} color="#64748b" style={{ marginBottom: '12px' }} />
                    <h3 style={{ fontSize: '18px', fontWeight: 700, color: '#f8fafc', marginBottom: '6px' }}>
                      No matching questions found
                    </h3>
                    <p style={{ fontSize: '14px', color: '#94a3b8', marginBottom: '18px' }}>
                      Try searching with different keywords or browse all categories.
                    </p>
                    <button onClick={() => { setSearchQuery(''); setActiveCategory('all'); }} className="btn-secondary btn-sm">
                      Reset Search Filters
                    </button>
                  </div>
                )}

                {filteredCategories.map((cat) => (
                  <div key={cat.id} id={cat.id}>
                    {/* Category Title */}
                    <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '14px' }}>
                      <div style={{ width: '32px', height: '32px', borderRadius: '8px', background: 'rgba(99, 102, 241, 0.15)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                        {cat.icon}
                      </div>
                      <h2 style={{ fontSize: '20px', fontWeight: 800, color: '#f8fafc' }}>
                        {cat.name}
                      </h2>
                    </div>

                    {/* Category Callout for Computer Vision */}
                    {cat.id === 'computer-vision' && (
                      <div style={{
                        background: 'linear-gradient(90deg, rgba(16, 185, 129, 0.1) 0%, rgba(6, 182, 212, 0.1) 100%)',
                        border: '1px solid rgba(16, 185, 129, 0.25)',
                        borderRadius: '12px',
                        padding: '14px 18px',
                        marginBottom: '14px',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '12px'
                      }}>
                        <Lock size={18} color="#10b981" style={{ flexShrink: 0 }} />
                        <span style={{ fontSize: '13px', color: '#cbd5e1' }}>
                          <b>100% Client-Side Video Processing:</b> Webcam telemetry runs locally in your browser. Video streams are never uploaded, recorded, or stored on external servers.
                        </span>
                      </div>
                    )}

                    {/* Accordion Items List */}
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                      {cat.items.map((item) => {
                        const isOpen = !!openFaqMap[item.id];
                        return (
                          <div
                            key={item.id}
                            className="glass-card"
                            style={{
                              padding: '0',
                              background: isOpen ? '#111728' : '#0e121c',
                              borderColor: isOpen ? 'rgba(99, 102, 241, 0.35)' : 'rgba(255, 255, 255, 0.07)',
                              transition: 'all 0.2s ease'
                            }}
                          >
                            <button
                              onClick={() => toggleFaq(item.id)}
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
                              <span>{item.q}</span>
                              <div style={{
                                transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)',
                                transition: 'transform 0.2s ease',
                                color: isOpen ? '#818cf8' : '#64748b',
                                flexShrink: 0,
                                marginLeft: '12px'
                              }}>
                                <ChevronDown size={18} />
                              </div>
                            </button>

                            {isOpen && (
                              <div style={{
                                padding: '0 20px 18px',
                                fontSize: '14px',
                                color: '#94a3b8',
                                lineHeight: 1.7,
                                borderTop: '1px solid rgba(255, 255, 255, 0.05)',
                                paddingTop: '14px'
                              }}>
                                {item.a}
                              </div>
                            )}
                          </div>
                        );
                      })}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ========================================================
            STILL CAN'T FIND YOUR ANSWER? (SUPPORT BANNER)
        ======================================================== */}
        <section style={{ padding: '0 0 60px', position: 'relative' }}>
          <div className="container">
            <div style={{
              background: 'linear-gradient(90deg, #101524 0%, #171d30 100%)',
              border: '1px solid rgba(99, 102, 241, 0.3)',
              borderRadius: '20px',
              padding: '28px 36px',
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              flexWrap: 'wrap',
              gap: '20px'
            }}>
              <div>
                <span className="badge-pill badge-cyan" style={{ marginBottom: '8px' }}>
                  Need Personalized Guidance?
                </span>
                <h3 style={{ fontSize: '20px', fontWeight: 800, color: '#f8fafc', marginTop: '4px' }}>
                  Still Can't Find Your Answer?
                </h3>
                <p style={{ fontSize: '13px', color: '#94a3b8', marginTop: '2px', maxWidth: '600px' }}>
                  Our engineering and interview coaching teams are available 24/7. Get custom assistance with technical difficulties or custom rubric requests.
                </p>
              </div>

              <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
                <button
                  onClick={() => alert("Support ticket opened! Our technical team responds within 15 minutes.")}
                  className="btn-primary btn-sm"
                  style={{ display: 'flex', alignItems: 'center', gap: '6px' }}
                >
                  <Mail size={14} />
                  <span>Contact Support</span>
                </button>

                <button
                  onClick={() => alert("Opening InPrep AI documentation wiki...")}
                  className="btn-secondary btn-sm"
                  style={{ display: 'flex', alignItems: 'center', gap: '6px' }}
                >
                  <BookOpen size={14} />
                  <span>Knowledge Center</span>
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* ========================================================
            BOTTOM CTA BANNER
        ======================================================== */}
        <section style={{ padding: '40px 0 100px', position: 'relative' }}>
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
              <div style={{ position: 'relative', zIndex: 2, maxWidth: '760px', margin: '0 auto' }}>
                <div style={{
                  width: '48px',
                  height: '48px',
                  borderRadius: '12px',
                  background: 'linear-gradient(135deg, #7c3aed 0%, #38bdf8 100%)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  margin: '0 auto 16px',
                  boxShadow: '0 0 20px rgba(124, 58, 237, 0.5)'
                }}>
                  <Sparkles size={24} color="#ffffff" />
                </div>

                <h2 style={{
                  fontSize: 'clamp(30px, 4.5vw, 44px)',
                  fontWeight: 800,
                  color: '#ffffff',
                  letterSpacing: '-0.03em',
                  lineHeight: 1.2,
                  marginBottom: '16px'
                }}>
                  Ready to Practice Your Next Interview?
                </h2>

                <p style={{
                  fontSize: '16px',
                  color: '#cbd5e1',
                  lineHeight: 1.7,
                  marginBottom: '32px'
                }}>
                  Stop second-guessing how you perform. Practice under realistic pressure, receive structured multimodal feedback, and improve with every single attempt.
                </p>

                <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '16px', marginBottom: '20px' }}>
                  <button
                    onClick={() => handleStartPractice()}
                    className="btn-primary"
                    style={{ fontSize: '15px', padding: '14px 32px', display: 'inline-flex', alignItems: 'center', gap: '8px' }}
                  >
                    <span>Start Practicing Free</span>
                    <ArrowRight size={16} />
                  </button>

                  <button
                    onClick={onNavigateToSimulations}
                    className="btn-secondary"
                    style={{ fontSize: '15px', padding: '14px 26px' }}
                  >
                    <span>Explore Interview Tracks</span>
                  </button>
                </div>

                <div style={{ fontSize: '12px', color: '#64748b' }}>
                  Zero credit card required • Instant 2-minute setup • 100% private
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
