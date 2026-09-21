import React, { useState } from 'react';
import { DashboardSidebar, NavItemKey } from '../components/dashboard/DashboardSidebar';
import { LiveSimulationModal } from '../components/LiveSimulationModal';
import { 
  ArrowLeft, Share2, Download, Bookmark, Clock, CheckCircle2, Mic, Shield, 
  Target, Info, CheckSquare, Zap, Activity, Cpu, Database, 
  Server, Lock, Bell, FileText, Check
} from 'lucide-react';

interface SimulationDetailsPageProps {
  onNavigateToHome?: () => void;
  onNavigateToDashboard?: () => void;
  onNavigateToProfile?: () => void;
  onNavigateToCv?: () => void;
  onNavigateToSimulations?: () => void;
  onNavigateToSearch?: () => void;
  onNavigateToAi?: () => void;
  onNavigateToCategories?: () => void;
  onNavigateToDeviceCheck?: () => void;
}

export const SimulationDetailsPage: React.FC<SimulationDetailsPageProps> = ({
  onNavigateToHome: _onNavigateToHome,
  onNavigateToDashboard,
  onNavigateToProfile,
  onNavigateToCv,
  onNavigateToSimulations,
  onNavigateToSearch,
  onNavigateToAi,
  onNavigateToCategories,
  onNavigateToDeviceCheck,
}) => {
  const [activeNav, setActiveNav] = useState<NavItemKey>('search');
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
  const [simulationModalOpen, setSimulationModalOpen] = useState(false);
  const [activeSimulationRole] = useState('Python Backend Concurrency');

  const handleSelectNav = (key: NavItemKey) => {
    setActiveNav(key);
    if (key === 'dashboard' && onNavigateToDashboard) onNavigateToDashboard();
    else if (key === 'profile' && onNavigateToProfile) onNavigateToProfile();
    else if (key === 'cv' && onNavigateToCv) onNavigateToCv();
    else if (key === 'library' && onNavigateToSimulations) onNavigateToSimulations();
    else if (key === 'search' && onNavigateToSearch) onNavigateToSearch();
    else if (key === 'categories' && onNavigateToCategories) onNavigateToCategories();
    else if (key === 'improvement' && onNavigateToAi) onNavigateToAi();
  };

  const handleStartPractice = () => {
    setSimulationModalOpen(true);
  };

  return (
    <div style={{ minHeight: '100vh', backgroundColor: '#07090e', color: '#f8fafc', display: 'flex', flexDirection: 'column' }}>
      <div style={{ display: 'flex', flex: 1, minHeight: '100vh' }}>
        <DashboardSidebar
          activeItem={activeNav}
          onSelectItem={handleSelectNav}
          collapsed={sidebarCollapsed}
          onToggleCollapse={() => setSidebarCollapsed(!sidebarCollapsed)}
        />
        <div style={{ flex: 1, display: 'flex', flexDirection: 'column', minWidth: 0, overflowX: 'hidden' }}>
          
          <div style={{ padding: '0', maxWidth: '1600px', width: '100%', margin: '0 auto', display: 'flex', flexDirection: 'column' }}>
            
            {/* Top header bar */}
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '16px 28px', borderBottom: '1px solid rgba(255, 255, 255, 0.05)' }}>
              <div style={{ fontSize: '0.8rem', color: '#94a3b8', display: 'flex', alignItems: 'center', gap: '8px' }}>
                <span style={{ cursor: 'pointer' }} onClick={() => onNavigateToSimulations?.()}>Interview Library</span>
                <span>›</span>
                <span style={{ cursor: 'pointer' }} onClick={() => onNavigateToSearch?.()}>Search & Filter</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                <div style={{ position: 'relative' }}>
                  <Bell size={18} color="#94a3b8" />
                  <span style={{ position: 'absolute', top: -2, right: -2, width: 6, height: 6, background: '#a855f7', borderRadius: '50%' }} />
                </div>
                <div style={{ width: 28, height: 28, borderRadius: '50%', background: 'linear-gradient(135deg, #7c3aed, #4f46e5)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', fontSize: '0.75rem', fontWeight: 600 }}>
                  SA
                </div>
              </div>
            </div>

            {/* Banner Tags */}
            <div style={{ padding: '12px 28px', borderBottom: '1px solid rgba(255, 255, 255, 0.05)', display: 'flex', gap: '12px', overflowX: 'auto' }}>
              <span style={{ fontSize: '0.7rem', color: '#64748b', fontWeight: 700, letterSpacing: '0.5px', alignSelf: 'center', marginRight: '8px', display: 'flex', alignItems: 'center', gap: '4px' }}>
                <Zap size={12} /> INTERACTIVE STATES (PROTOTYPE):
              </span>
              {[
                { label: '1. Python & Concurrency (Default)', active: true },
                { label: '2. Distributed Consensus (L6)' },
                { label: '3. Low Credit Warning Modal' },
                { label: '4. Device Check Needed' },
                { label: '5. Loading Skeleton State' },
              ].map((b, i) => (
                <div key={i} style={{ background: b.active ? 'rgba(99, 102, 241, 0.2)' : 'rgba(255, 255, 255, 0.03)', color: b.active ? '#a5b4fc' : '#94a3b8', border: `1px solid ${b.active ? 'rgba(99, 102, 241, 0.4)' : 'rgba(255, 255, 255, 0.08)'}`, padding: '4px 12px', borderRadius: '100px', fontSize: '0.75rem', fontWeight: 600, whiteSpace: 'nowrap' }}>
                  {b.label}
                </div>
              ))}
            </div>

            <div style={{ padding: '24px 28px 40px 28px' }}>
              
              {/* Breadcrumb & Actions */}
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '24px' }}>
                <div style={{ fontSize: '0.8rem', color: '#94a3b8', display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <ArrowLeft size={14} style={{ cursor: 'pointer' }} onClick={() => onNavigateToSearch?.()} />
                  <span style={{ cursor: 'pointer' }} onClick={() => onNavigateToSimulations?.()}>Back to Interview Library (Web #27)</span>
                  <span>/</span>
                  <span style={{ cursor: 'pointer' }} onClick={() => onNavigateToSearch?.()}>Search & Filter (Web #25)</span>
                  <span>/</span>
                  <span style={{ color: '#f8fafc', fontWeight: 600 }}>Simulation #SIM-PY-6821</span>
                </div>
                <div style={{ display: 'flex', gap: '12px' }}>
                  <button style={{ background: 'rgba(255, 255, 255, 0.05)', color: '#f8fafc', border: '1px solid rgba(255, 255, 255, 0.1)', padding: '6px 12px', borderRadius: '6px', fontSize: '0.8rem', fontWeight: 600, display: 'flex', alignItems: 'center', gap: '6px', cursor: 'pointer' }}>
                    <Bookmark size={14} /> Saved <CheckCircle2 size={12} color="#10b981" />
                  </button>
                  <button style={{ background: 'rgba(255, 255, 255, 0.05)', color: '#f8fafc', border: '1px solid rgba(255, 255, 255, 0.1)', padding: '6px 10px', borderRadius: '6px', cursor: 'pointer' }}>
                    <Share2 size={14} />
                  </button>
                  <button style={{ background: 'rgba(255, 255, 255, 0.05)', color: '#f8fafc', border: '1px solid rgba(255, 255, 255, 0.1)', padding: '6px 10px', borderRadius: '6px', cursor: 'pointer' }}>
                    <Download size={14} />
                  </button>
                </div>
              </div>

              {/* Hero Area */}
              <div style={{ background: 'linear-gradient(135deg, rgba(30, 27, 75, 0.4), rgba(15, 23, 42, 0.4))', border: '1px solid rgba(99, 102, 241, 0.2)', borderRadius: '16px', padding: '32px', marginBottom: '32px' }}>
                <div style={{ display: 'flex', gap: '8px', marginBottom: '16px', flexWrap: 'wrap' }}>
                  <span style={{ background: 'rgba(99, 102, 241, 0.15)', color: '#a5b4fc', border: '1px solid rgba(99, 102, 241, 0.3)', padding: '4px 10px', borderRadius: '100px', fontSize: '0.75rem', fontWeight: 600, display: 'flex', alignItems: 'center', gap: '4px' }}>
                    <CheckCircle2 size={12} /> Recommended Match: 96%
                  </span>
                  <span style={{ background: 'rgba(255, 255, 255, 0.05)', color: '#cbd5e1', border: '1px solid rgba(255, 255, 255, 0.1)', padding: '4px 10px', borderRadius: '100px', fontSize: '0.75rem', fontWeight: 600, display: 'flex', alignItems: 'center', gap: '4px' }}>
                    <Target size={12} /> Staff IC & Senior Architect (L6+)
                  </span>
                  <span style={{ background: 'rgba(56, 189, 248, 0.1)', color: '#38bdf8', border: '1px solid rgba(56, 189, 248, 0.2)', padding: '4px 10px', borderRadius: '100px', fontSize: '0.75rem', fontWeight: 600, display: 'flex', alignItems: 'center', gap: '4px' }}>
                    <Shield size={12} /> Deterministic Evaluation Rubric
                  </span>
                  <span style={{ background: 'rgba(255, 255, 255, 0.05)', color: '#64748b', padding: '4px 10px', borderRadius: '100px', fontSize: '0.75rem', fontWeight: 600 }}>
                    SIM-PY-6821
                  </span>
                </div>
                
                <h1 style={{ fontSize: '2.2rem', fontWeight: 800, margin: '0 0 16px 0', lineHeight: 1.2 }}>Python Backend Concurrency & High-Throughput APIs</h1>
                <p style={{ fontSize: '1rem', color: '#cbd5e1', margin: '0 0 24px 0', maxWidth: '900px', lineHeight: 1.6 }}>
                  Master and articulate deep concurrency models, Asyncio event loops, FastAPI microservices architecture, and database connection pooling under high-load spike traffic.
                </p>

                <div style={{ display: 'flex', gap: '20px', flexWrap: 'wrap', borderTop: '1px solid rgba(255, 255, 255, 0.1)', paddingTop: '20px' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '0.85rem', color: '#94a3b8' }}>
                    <Clock size={16} color="#a5b4fc" /> Duration: <span style={{ color: '#f8fafc', fontWeight: 600 }}>10-15 Mins</span>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '0.85rem', color: '#94a3b8' }}>
                    <Cpu size={16} color="#a5b4fc" /> Format: <span style={{ color: '#f8fafc', fontWeight: 600 }}>5 Adaptive Prompts</span>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '0.85rem', color: '#94a3b8' }}>
                    <Mic size={16} color="#a5b4fc" /> Mode: <span style={{ color: '#f8fafc', fontWeight: 600 }}>Spoken Audio Defense</span>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '0.85rem', color: '#94a3b8' }}>
                    <Lock size={16} color="#a5b4fc" /> AES-256 Encrypted Session
                  </div>
                </div>
              </div>

              {/* Main 2-Column Layout */}
              <div style={{ display: 'flex', gap: '32px', alignItems: 'flex-start' }}>
                
                {/* Left Content */}
                <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: '32px' }}>
                  
                  {/* Targeted Recommendation Vector */}
                  <div style={{ background: 'linear-gradient(to right, rgba(16, 185, 129, 0.05), transparent)', border: '1px solid rgba(16, 185, 129, 0.15)', borderRadius: '12px', padding: '24px', display: 'flex', gap: '16px' }}>
                    <div style={{ width: 40, height: 40, background: 'rgba(16, 185, 129, 0.1)', borderRadius: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                      <CheckCircle2 size={20} color="#34d399" />
                    </div>
                    <div style={{ flex: 1 }}>
                      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '8px' }}>
                        <h3 style={{ fontSize: '0.75rem', fontWeight: 700, color: '#34d399', letterSpacing: '0.5px', margin: 0 }}>TARGETED RECOMMENDATION VECTOR</h3>
                        <span style={{ fontSize: '0.7rem', color: '#64748b' }}>CV Pipeline Match: 96.2%</span>
                      </div>
                      <h2 style={{ fontSize: '1.2rem', fontWeight: 800, color: '#f8fafc', margin: '0 0 8px 0' }}>Synthesized from your verified background</h2>
                      <p style={{ fontSize: '0.85rem', color: '#cbd5e1', margin: '0 0 16px 0', lineHeight: 1.5 }}>
                        Anchored to your verified CV achievements at <strong>Spiral Lab &amp; Betopia Group</strong> (LLM multi-agent workflows, RAG, and Computer Vision) and stated preparation goal to target <strong>Full-Stack AI Developer</strong> roles.
                      </p>
                      <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
                        <span style={{ fontSize: '0.75rem', color: '#94a3b8', alignSelf: 'center' }}>Proven Skills:</span>
                        {['Python 3.12', 'Asyncio Loop', 'FastAPI DI', 'PostgreSQL MVCC'].map((s, i) => (
                          <span key={i} style={{ background: 'rgba(255, 255, 255, 0.05)', color: '#cbd5e1', padding: '2px 8px', borderRadius: '4px', fontSize: '0.75rem' }}>{s}</span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* 2x2 Grid Info */}
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
                    {[
                      { icon: <Activity size={16} />, title: 'EVALUATION DEPTH', main: '5 Adaptive Questions', desc: 'Standard platform benchmark; allows deterministic cross-candidate calibration.' },
                      { icon: <Clock size={16} />, title: 'TIME COMMITMENT', main: '10–15 Minutes', desc: '45-second preparation phase per prompt, followed by a 2-3 minute spoken defense.' },
                      { icon: <Target size={16} />, title: 'TARGET SENIORITY', main: 'Staff L6+ Standard', desc: 'Expects defense of system resilience, cost vectors, and organizational tradeoffs.' },
                      { icon: <Mic size={16} />, title: 'TELEMETRY INPUTS', main: 'Audio Required', desc: 'Microphone active. Optional camera feed solely evaluates posture framing & pacing.' },
                    ].map((item, i) => (
                      <div key={i} style={{ background: 'rgba(255, 255, 255, 0.02)', border: '1px solid rgba(255, 255, 255, 0.05)', borderRadius: '12px', padding: '20px' }}>
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '8px' }}>
                          <span style={{ fontSize: '0.65rem', color: '#64748b', fontWeight: 700, letterSpacing: '0.5px' }}>{item.title}</span>
                          <span style={{ color: '#64748b' }}>{item.icon}</span>
                        </div>
                        <h3 style={{ fontSize: '1.2rem', fontWeight: 700, color: '#f8fafc', margin: '0 0 8px 0' }}>{item.main}</h3>
                        <p style={{ fontSize: '0.8rem', color: '#94a3b8', margin: 0, lineHeight: 1.5 }}>{item.desc}</p>
                      </div>
                    ))}
                  </div>

                  {/* Syllabus Matrix */}
                  <div>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '16px' }}>
                      <h2 style={{ fontSize: '1.2rem', fontWeight: 800, margin: 0, display: 'flex', alignItems: 'center', gap: '8px' }}>
                        <Database size={18} color="#a5b4fc" /> Syllabus & Core Competency Matrix
                      </h2>
                      <span style={{ fontSize: '0.75rem', color: '#64748b' }}>4 High-Impact Domains</span>
                    </div>
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
                      {[
                        { title: 'Core Concurrency Mechanics', icon: <Cpu size={14} color="#38bdf8" />, desc: 'Deep internals of Python runtime execution and task scheduling.', tags: ['Event Loops', 'GIL Limitations', 'Asyncio Task Groups', 'CPU vs I/O Bound'] },
                        { title: 'Architecture & Services', icon: <Server size={14} color="#818cf8" />, desc: 'Modern async API frameworks, contracts, and boundary safety.', tags: ['FastAPI DI Lifecycle', 'gRPC Contracts', 'Idempotency Keys', 'Circuit Breakers'] },
                        { title: 'Data Layer & Spike Resilience', icon: <Database size={14} color="#f472b6" />, desc: 'Eliminating database bottlenecks under 100x concurrent hits.', tags: ['PgBouncer Pooling', 'MVCC Contention', 'Redis Cache Locks', 'Read Replicas'] },
                        { title: 'Trade-Off & SLA Defense', icon: <Shield size={14} color="#facc15" />, desc: 'Communicating business impact, latency budgets, and graceful degradation.', tags: ['p99 < 50ms Budgets', 'Backpressure', 'Multihead Isolation', 'Cost Mode - Unit'] },
                      ].map((s, i) => (
                        <div key={i} style={{ background: 'rgba(255, 255, 255, 0.02)', border: '1px solid rgba(255, 255, 255, 0.05)', borderRadius: '12px', padding: '20px' }}>
                          <h3 style={{ fontSize: '0.95rem', fontWeight: 700, color: '#f8fafc', margin: '0 0 8px 0', display: 'flex', alignItems: 'center', gap: '8px' }}>
                            {s.icon} {s.title}
                          </h3>
                          <p style={{ fontSize: '0.8rem', color: '#94a3b8', margin: '0 0 16px 0', lineHeight: 1.5 }}>{s.desc}</p>
                          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
                            {s.tags.map((t, j) => (
                              <span key={j} style={{ background: 'rgba(255, 255, 255, 0.05)', color: '#cbd5e1', padding: '4px 8px', borderRadius: '4px', fontSize: '0.7rem' }}>{t}</span>
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Lifecycle Steps */}
                  <div style={{ background: 'rgba(255, 255, 255, 0.02)', border: '1px solid rgba(255, 255, 255, 0.05)', borderRadius: '12px', padding: '24px' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '24px' }}>
                      <h2 style={{ fontSize: '1.2rem', fontWeight: 800, margin: 0 }}>The 5-Question Simulation Lifecycle</h2>
                      <span style={{ fontSize: '0.75rem', color: '#64748b' }}>Zero Ambient Anxiety Model</span>
                    </div>
                    <div style={{ display: 'flex', gap: '16px' }}>
                      {[
                        { num: '01', title: 'Pre-Flight Check', desc: 'WebRTC calibration, mic volume baseline, and room echo cancellation verify hardware integrity.', icon: <Mic size={14} color="#38bdf8" /> },
                        { num: '02', title: '5 Adaptive Prompts', desc: 'Synthetic hiring panel presents architect-level dilemmas with 45s of quiet thinking time.', icon: <Cpu size={14} color="#a5b4fc" /> },
                        { num: '03', title: 'Rubric Scoring', desc: 'Responses evaluated deterministically against calibrated Staff L6 industry benchmark criteria.', icon: <CheckCircle2 size={14} color="#f472b6" /> },
                        { num: '04', title: 'Deep Debrief', desc: 'Full transcript analysis, acoustic pacing diagnostics, and ideal Staff-level exemplar models.', icon: <FileText size={14} color="#10b981" /> },
                      ].map((s, i) => (
                        <div key={i} style={{ flex: 1, background: 'rgba(0, 0, 0, 0.2)', border: '1px solid rgba(255, 255, 255, 0.05)', borderRadius: '8px', padding: '16px' }}>
                          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '12px' }}>
                            <span style={{ fontSize: '0.7rem', color: '#f8fafc', background: 'rgba(255, 255, 255, 0.1)', padding: '2px 6px', borderRadius: '4px', fontWeight: 700 }}>{s.num}</span>
                            {s.icon}
                          </div>
                          <h4 style={{ fontSize: '0.85rem', fontWeight: 700, color: '#f8fafc', margin: '0 0 8px 0' }}>{s.title}</h4>
                          <p style={{ fontSize: '0.75rem', color: '#94a3b8', margin: 0, lineHeight: 1.5 }}>{s.desc}</p>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Weights & Criteria */}
                  <div style={{ background: 'rgba(255, 255, 255, 0.02)', border: '1px solid rgba(255, 255, 255, 0.05)', borderRadius: '12px', padding: '24px' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '24px' }}>
                      <div>
                        <h2 style={{ fontSize: '1.2rem', fontWeight: 800, margin: '0 0 4px 0' }}>Evaluation Rubric Weights & Criteria</h2>
                        <span style={{ fontSize: '0.8rem', color: '#94a3b8' }}>Exact mathematical weighting applied across your 5 recorded defenses.</span>
                      </div>
                      <span style={{ fontSize: '0.75rem', color: '#64748b', fontWeight: 600 }}>Total Weight: 100%</span>
                    </div>
                    
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                      {[
                        { title: 'Technical Depth & Execution Precision', desc: 'Core module mechanics, edge case topology, stress fallback patterns', pct: 30, color: '#818cf8' },
                        { title: 'System Architecture & Trade-Off Defense', desc: 'Scaling ceilings, failure modes, cost vs latency', pct: 25, color: '#c084fc' },
                        { title: 'Problem Decomposition & Edge Handling', desc: 'Base case isolation, back-pressuring, graceful hand-off', pct: 20, color: '#38bdf8' },
                        { title: 'Executive Articulation & Structural Framing', desc: 'Pyramid Principle, concise technical cadences, STAR', pct: 15, color: '#34d399' },
                        { title: 'Observable Presentation Framing', desc: 'Acoustic clarity, professional poise, minimal filler', pct: 10, color: '#f472b6' },
                      ].map((w, i) => (
                        <div key={i}>
                          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '8px' }}>
                            <div>
                              <span style={{ fontSize: '0.85rem', fontWeight: 600, color: '#f8fafc', marginRight: '8px' }}>{w.title}</span>
                              <span style={{ fontSize: '0.75rem', color: '#64748b' }}>{w.desc}</span>
                            </div>
                            <span style={{ fontSize: '0.85rem', fontWeight: 700, color: w.color }}>{w.pct}%</span>
                          </div>
                          <div style={{ width: '100%', height: '6px', background: 'rgba(255, 255, 255, 0.05)', borderRadius: '100px' }}>
                            <div style={{ width: `${w.pct}%`, height: '100%', background: w.color, borderRadius: '100px' }} />
                          </div>
                        </div>
                      ))}
                    </div>

                    <div style={{ background: 'rgba(56, 189, 248, 0.05)', border: '1px solid rgba(56, 189, 248, 0.2)', borderRadius: '8px', padding: '16px', marginTop: '24px', display: 'flex', gap: '12px' }}>
                      <Info size={16} color="#38bdf8" style={{ marginTop: '2px' }} />
                      <p style={{ fontSize: '0.8rem', color: '#cbd5e1', margin: 0, lineHeight: 1.5 }}>
                        Camera analysis evaluates framing balance, eye engagement, and acoustic vocal clarity only. The engine never infers emotion, sentiment, psychological traits, or uncalibrated biometric profiling.
                      </p>
                    </div>
                  </div>

                  {/* Checklist */}
                  <div style={{ background: 'rgba(255, 255, 255, 0.02)', border: '1px solid rgba(255, 255, 255, 0.05)', borderRadius: '12px', padding: '24px' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
                      <h2 style={{ fontSize: '1.2rem', fontWeight: 800, margin: 0 }}>Before You Start Checklist</h2>
                      <span style={{ fontSize: '0.75rem', color: '#94a3b8', display: 'flex', alignItems: 'center', gap: '6px' }}><CheckSquare size={14} /> Ready to Proceed</span>
                    </div>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                      {[
                        'Ensure your primary microphone is selected and clear of background fan noise.',
                        'Have a scratchpad or digital whiteboard ready for architectural topology decomposition.',
                        'Be prepared to defend specific trade-offs with concrete numeric latency & resource metrics.',
                        'All 5 questions must be answered to produce a verified benchmark debrief report.'
                      ].map((c, i) => (
                        <div key={i} style={{ display: 'flex', gap: '12px', alignItems: 'flex-start' }}>
                          <div style={{ width: 20, height: 20, background: 'rgba(99, 102, 241, 0.2)', border: '1px solid rgba(99, 102, 241, 0.5)', borderRadius: '6px', display: 'flex', alignItems: 'center', justifyContent: 'center', marginTop: '2px' }}>
                            <Check size={12} color="#a5b4fc" />
                          </div>
                          <span style={{ fontSize: '0.9rem', color: '#cbd5e1', lineHeight: 1.5 }}>{c}</span>
                        </div>
                      ))}
                    </div>
                    <div style={{ marginTop: '24px', paddingTop: '20px', borderTop: '1px solid rgba(255, 255, 255, 0.05)', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                      <button onClick={() => onNavigateToDeviceCheck?.()} style={{ background: 'transparent', border: 'none', color: '#38bdf8', fontSize: '0.85rem', fontWeight: 600, display: 'flex', alignItems: 'center', gap: '6px', cursor: 'pointer', padding: 0 }}>
                        <Zap size={14} /> Run Diagnostics & Device Check (Web #20) &rarr;
                      </button>
                      <span style={{ fontSize: '0.75rem', color: '#64748b' }}>Expected completion: ~15 minutes</span>
                    </div>
                  </div>

                  {/* Footer Guarantee */}
                  <div style={{ background: 'rgba(0, 0, 0, 0.3)', border: '1px solid rgba(255, 255, 255, 0.03)', borderRadius: '12px', padding: '20px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <div style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
                      <Shield size={20} color="#64748b" />
                      <div>
                        <h4 style={{ fontSize: '0.75rem', fontWeight: 700, color: '#cbd5e1', margin: '0 0 4px 0' }}>Inprep AI Practice Guarantee</h4>
                        <p style={{ fontSize: '0.75rem', color: '#64748b', margin: 0 }}>100% Deterministic Rubrics • No Biometric Hiring Profiling • AES-256 Vault Isolation</p>
                      </div>
                    </div>
                    <span style={{ fontSize: '0.65rem', color: '#38bdf8', fontWeight: 700, letterSpacing: '0.5px' }}>SOC2 TYPE II CERTIFIED</span>
                  </div>
                </div>

                {/* Right Column: Sticky Sidebar */}
                <div style={{ width: '320px', position: 'sticky', top: '24px', display: 'flex', flexDirection: 'column', gap: '24px' }}>
                  
                  {/* Action Card */}
                  <div style={{ background: 'rgba(255, 255, 255, 0.02)', border: '1px solid rgba(255, 255, 255, 0.08)', borderRadius: '16px', padding: '24px' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px' }}>
                      <span style={{ fontSize: '0.65rem', color: '#94a3b8', fontWeight: 700, letterSpacing: '0.5px' }}>SIMULATION CONTROL</span>
                      <span style={{ fontSize: '0.65rem', background: 'rgba(99, 102, 241, 0.2)', color: '#a5b4fc', padding: '2px 8px', borderRadius: '100px', fontWeight: 700 }}>VERIFIED ACCESS</span>
                    </div>
                    <h2 style={{ fontSize: '1.4rem', fontWeight: 800, margin: '0 0 8px 0', lineHeight: 1.2 }}>Python Backend Concurrency</h2>
                    <p style={{ fontSize: '0.8rem', color: '#38bdf8', margin: '0 0 24px 0', fontWeight: 600 }}>5 Adaptive Prompts <span style={{ color: '#64748b' }}>• Staff L6 Defense</span></p>
                    
                    <button onClick={handleStartPractice} style={{ width: '100%', background: 'linear-gradient(135deg, #7c3aed, #4f46e5)', color: 'white', border: 'none', padding: '14px', borderRadius: '100px', fontSize: '0.95rem', fontWeight: 700, cursor: 'pointer', display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '8px', marginBottom: '16px', boxShadow: '0 4px 14px rgba(99, 102, 241, 0.3)' }}>
                      Start Interview (5 Questions) &rarr;
                    </button>

                    <div style={{ display: 'flex', background: 'rgba(0, 0, 0, 0.2)', borderRadius: '8px', padding: '12px', marginBottom: '24px', border: '1px solid rgba(255, 255, 255, 0.05)' }}>
                      <div style={{ flex: 1, borderRight: '1px solid rgba(255, 255, 255, 0.1)' }}>
                        <div style={{ fontSize: '0.7rem', color: '#94a3b8', marginBottom: '4px' }}>Cost</div>
                        <div style={{ fontSize: '0.85rem', color: '#f8fafc', fontWeight: 600, display: 'flex', alignItems: 'center', gap: '6px' }}><Zap size={12} color="#a855f7" /> 1 Session Credit</div>
                      </div>
                      <div style={{ flex: 1, paddingLeft: '12px' }}>
                        <div style={{ fontSize: '0.7rem', color: '#94a3b8', marginBottom: '4px' }}>Balance: 840 pts</div>
                        <div style={{ fontSize: '0.75rem', color: '#10b981', fontWeight: 600 }}>(Sufficient)</div>
                      </div>
                    </div>

                    <div style={{ display: 'flex', gap: '12px' }}>
                      <button style={{ flex: 1, background: 'rgba(255, 255, 255, 0.05)', color: '#f8fafc', border: '1px solid rgba(255, 255, 255, 0.1)', padding: '8px', borderRadius: '8px', fontSize: '0.75rem', fontWeight: 600, display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '6px', cursor: 'pointer' }}>
                        <Bookmark size={14} /> Bookmark (saved)
                      </button>
                      <button style={{ flex: 1, background: 'rgba(255, 255, 255, 0.05)', color: '#f8fafc', border: '1px solid rgba(255, 255, 255, 0.1)', padding: '8px', borderRadius: '8px', fontSize: '0.75rem', fontWeight: 600, display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '6px', cursor: 'pointer' }}>
                        <Share2 size={14} /> Share Rubric
                      </button>
                    </div>
                  </div>

                  {/* Environment Check */}
                  <div style={{ background: 'rgba(255, 255, 255, 0.02)', border: '1px solid rgba(255, 255, 255, 0.08)', borderRadius: '16px', padding: '20px' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px' }}>
                      <h3 style={{ fontSize: '0.85rem', fontWeight: 700, margin: 0, display: 'flex', alignItems: 'center', gap: '8px' }}>
                        <Server size={14} color="#64748b" /> Hardware & Environment
                      </h3>
                      <div style={{ width: 8, height: 8, background: '#10b981', borderRadius: '50%' }} />
                    </div>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontSize: '0.75rem' }}>
                        <span style={{ color: '#94a3b8', display: 'flex', alignItems: 'center', gap: '6px' }}><Mic size={12} /> Microphone</span>
                        <span style={{ color: '#10b981', fontWeight: 600 }}>Ready (Yeti Nano)</span>
                      </div>
                      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontSize: '0.75rem' }}>
                        <span style={{ color: '#94a3b8', display: 'flex', alignItems: 'center', gap: '6px' }}><Target size={12} /> Camera</span>
                        <span style={{ color: '#64748b' }}>Optional (Disabled)</span>
                      </div>
                      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontSize: '0.75rem' }}>
                        <span style={{ color: '#94a3b8', display: 'flex', alignItems: 'center', gap: '6px' }}><Activity size={12} /> WebRTC Latency</span>
                        <span style={{ color: '#38bdf8', fontWeight: 600 }}>24ms (Optimal)</span>
                      </div>
                      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontSize: '0.75rem' }}>
                        <span style={{ color: '#94a3b8', display: 'flex', alignItems: 'center', gap: '6px' }}><Cpu size={12} /> Browser Runtime</span>
                        <span style={{ color: '#cbd5e1' }}>Chrome 124+</span>
                      </div>
                    </div>
                  </div>

                  {/* Candidate Trajectory */}
                  <div style={{ background: 'rgba(255, 255, 255, 0.02)', border: '1px solid rgba(255, 255, 255, 0.08)', borderRadius: '16px', padding: '20px' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px' }}>
                      <span style={{ fontSize: '0.75rem', fontWeight: 700, color: '#f8fafc' }}>Candidate Trajectory</span>
                      <span style={{ fontSize: '0.7rem', color: '#a5b4fc', background: 'rgba(99, 102, 241, 0.1)', padding: '2px 8px', borderRadius: '4px', fontWeight: 600 }}>~12 Diagnostic Pts</span>
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                      <div style={{ width: 40, height: 40, borderRadius: '50%', border: '2px solid rgba(99, 102, 241, 0.5)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                        <div style={{ width: 32, height: 32, borderRadius: '50%', background: 'linear-gradient(135deg, #7c3aed, #4f46e5)', color: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '0.8rem', fontWeight: 700 }}>
                          SA
                        </div>
                      </div>
                      <div>
                        <div style={{ fontSize: '0.85rem', fontWeight: 700, color: '#f8fafc' }}>Staff Backend Architect</div>
                        <div style={{ fontSize: '0.75rem', color: '#94a3b8' }}>Target L6+ Cohort Target</div>
                      </div>
                    </div>
                  </div>

                  {/* Alternative Simulations */}
                  <div>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '12px' }}>
                      <span style={{ fontSize: '0.85rem', fontWeight: 700, color: '#f8fafc' }}>Alternative Simulations</span>
                      <span style={{ fontSize: '0.75rem', color: '#a5b4fc', cursor: 'pointer' }}>View All</span>
                    </div>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                      {[
                        { title: 'Distributed Consensus (Raft, Kafka, Go)', time: '15-20 Mins', sub: 'Leader elections, split-brain recovery, and...' },
                        { title: 'Applied AI & LLM Systems Engineering', time: '15-20 Mins', sub: 'RAG pipelines, vector caching, latency vs...' },
                        { title: 'Database Internals & Storage Engines', time: '10-15 Mins', sub: 'B-Tree indexing, write amplification, and WAL...' },
                      ].map((alt, i) => (
                        <div key={i} style={{ background: 'rgba(255, 255, 255, 0.02)', border: '1px solid rgba(255, 255, 255, 0.05)', borderRadius: '12px', padding: '12px', cursor: 'pointer' }}>
                          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '6px' }}>
                            <span style={{ fontSize: '0.65rem', background: 'rgba(255, 255, 255, 0.08)', color: '#cbd5e1', padding: '2px 6px', borderRadius: '4px', fontWeight: 600 }}>5 Questions</span>
                            <span style={{ fontSize: '0.65rem', color: '#64748b' }}>{alt.time}</span>
                          </div>
                          <h4 style={{ fontSize: '0.8rem', fontWeight: 600, color: '#f8fafc', margin: '0 0 4px 0' }}>{alt.title}</h4>
                          <p style={{ fontSize: '0.7rem', color: '#94a3b8', margin: 0, whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>{alt.sub}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>

      {simulationModalOpen && (
        <LiveSimulationModal
          isOpen={simulationModalOpen}
          onClose={() => setSimulationModalOpen(false)}
          initialRole={activeSimulationRole}
        />
      )}
    </div>
  );
};

export default SimulationDetailsPage;
