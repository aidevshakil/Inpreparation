import React, { useState } from 'react';
import { DashboardSidebar, NavItemKey } from '../components/dashboard/DashboardSidebar';
import { DashboardNavbar } from '../components/dashboard/DashboardNavbar';
import { 
  CheckCircle2, Clock, Terminal, Shield, Lock, Eye, CheckSquare, Server, 
  RefreshCw, CornerDownRight, Activity
} from 'lucide-react';
import { useAuth } from '../context/AuthContext';

interface PipelineDiagnosticPageProps {
  onNavigateToHome?: () => void;
  onNavigateToDashboard?: () => void;
  onNavigateToProfile?: () => void;
  onNavigateToCv?: () => void;
  onNavigateToSimulations?: () => void;
  onNavigateToSearch?: () => void;
  onNavigateToAi?: () => void;
  onNavigateToCategories?: () => void;
  onNavigateToIntroResult?: () => void;
}

export const PipelineDiagnosticPage: React.FC<PipelineDiagnosticPageProps> = ({
  onNavigateToDashboard,
  onNavigateToProfile,
  onNavigateToCv,
  onNavigateToSimulations,
  onNavigateToSearch,
  onNavigateToAi,
  onNavigateToCategories,
  onNavigateToIntroResult,
}) => {
  const { user } = useAuth();
  const [activeNav, setActiveNav] = useState<NavItemKey>('dashboard');
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);

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

  const interactiveStates = [
    { label: '1. Active Processing (Stage 5/7)', active: true },
    { label: '2. Ingestion Complete (Result Ready)' },
    { label: '3. Background Safe Mode' },
    { label: '4. Partial Audio Warning' },
    { label: '5. Offline / Retry Modal' }
  ];

  return (
    <div style={{ minHeight: '100vh', backgroundColor: '#07090e', color: '#f8fafc', display: 'flex', flexDirection: 'column' }}>
      
      {/* Top Navbar */}
      <DashboardNavbar onToggleSidebar={() => setSidebarCollapsed(!sidebarCollapsed)} />

      <div style={{ display: 'flex', flex: 1, minHeight: '100vh', overflow: 'hidden' }}>
        
        {/* Sidebar */}
        <DashboardSidebar
          activeItem={activeNav}
          onSelectItem={handleSelectNav}
          collapsed={sidebarCollapsed}
          onToggleCollapse={() => setSidebarCollapsed(!sidebarCollapsed)}
        />

        {/* Main Content Area */}
        <div style={{ flex: 1, display: 'flex', flexDirection: 'column', minWidth: 0, overflowY: 'auto' }}>
          
          {/* Top Control Bar (Stakeholder Testing) */}
          <div style={{ padding: '12px 24px', borderBottom: '1px solid rgba(255, 255, 255, 0.05)', display: 'flex', gap: '12px', alignItems: 'center', overflowX: 'auto', background: '#0a0d14' }}>
            <span style={{ fontSize: '0.7rem', color: '#64748b', fontWeight: 700, letterSpacing: '0.5px', display: 'flex', alignItems: 'center', gap: '4px' }}>
              <Server size={12} /> STAKEHOLDER TESTING:
            </span>
            <span style={{ fontSize: '0.7rem', color: '#94a3b8' }}>Scenario State Simulator</span>
            <div style={{ width: 1, height: 16, background: 'rgba(255, 255, 255, 0.1)', margin: '0 8px' }} />
            {interactiveStates.map((b, i) => (
              <div key={i} style={{ background: b.active ? 'rgba(99, 102, 241, 0.2)' : 'transparent', color: b.active ? '#a5b4fc' : '#94a3b8', border: b.active ? '1px solid rgba(99, 102, 241, 0.4)' : 'none', padding: '4px 12px', borderRadius: '100px', fontSize: '0.7rem', fontWeight: 600, whiteSpace: 'nowrap', cursor: 'pointer' }}>
                {b.label}
              </div>
            ))}
          </div>

          <div style={{ padding: '0', maxWidth: '1440px', width: '100%', margin: '0 auto', display: 'flex', flexDirection: 'column' }}>
            
            <div style={{ padding: '32px 32px 40px 32px' }}>
              
              {/* Breadcrumb */}
              <div style={{ fontSize: '0.75rem', color: '#94a3b8', display: 'flex', alignItems: 'center', gap: '6px', marginBottom: '12px' }}>
                <span style={{ cursor: 'pointer' }} onClick={onNavigateToSimulations}>Interview Library</span>
                <span>/</span>
                <span style={{ color: '#cbd5e1' }}>Interview #SIM-PY-6821</span>
                <span>/</span>
                <span style={{ color: '#f8fafc', fontWeight: 600 }}>AI Processing & Rubric Synthesis (Web #32)</span>
              </div>
              
              {/* Context Tag */}
              <div style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', background: 'rgba(255, 255, 255, 0.05)', border: '1px solid rgba(255, 255, 255, 0.1)', padding: '4px 10px', borderRadius: '6px', fontSize: '0.7rem', color: '#cbd5e1', marginBottom: '24px' }}>
                <div style={{ width: 6, height: 6, borderRadius: '50%', background: '#38bdf8' }} /> Track: Python Backend Concurrency & High-Throughput APIs #SIM-PY-6821 • Staff L6+ Benchmark
              </div>

              {/* Header Box */}
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '32px' }}>
                <div style={{ maxWidth: '650px' }}>
                  <div style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', background: 'rgba(56, 189, 248, 0.1)', color: '#38bdf8', padding: '4px 12px', borderRadius: '100px', fontSize: '0.7rem', fontWeight: 700, marginBottom: '16px' }}>
                    <CheckCircle2 size={12} /> DEFENDED 5/5 QUESTIONS • Cryptographic Session Lock RVAL (7-PMA)
                  </div>
                  <h1 style={{ fontSize: '2.2rem', fontWeight: 800, margin: '0 0 12px 0' }}>Your Interview Is Complete</h1>
                  <p style={{ fontSize: '0.95rem', color: '#94a3b8', margin: 0, lineHeight: 1.6 }}>
                    You successfully defended all 5 adaptive questions. Our deterministic evaluation engine is currently analyzing your technical reasoning, architectural trade-offs, and observable presentation telemetry.
                  </p>
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end', gap: '12px' }}>
                  <div style={{ background: 'rgba(168, 85, 247, 0.1)', border: '1px solid rgba(168, 85, 247, 0.3)', color: '#e9d5ff', padding: '8px 16px', borderRadius: '100px', fontSize: '0.8rem', fontWeight: 600, display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <div style={{ width: 8, height: 8, borderRadius: '50%', background: '#a855f7' }} /> Stage 5 of 7 Active: Evaluating Technical Rubric
                  </div>
                  <div style={{ fontSize: '0.75rem', color: '#cbd5e1', display: 'flex', alignItems: 'center', gap: '6px' }}>
                    <Clock size={14} color="#94a3b8" /> Estimated synthesis time remaining: <span style={{ fontWeight: 700, color: '#f8fafc' }}>01:41</span>
                  </div>
                </div>
              </div>

              {/* Main Grid */}
              <div style={{ display: 'grid', gridTemplateColumns: 'minmax(0, 1fr) 340px', gap: '32px', alignItems: 'flex-start' }}>
                
                {/* Left Column */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
                  
                  {/* Synthesis Pipeline Card */}
                  <div style={{ background: 'rgba(255, 255, 255, 0.02)', border: '1px solid rgba(255, 255, 255, 0.05)', borderRadius: '16px', padding: '24px' }}>
                    
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '24px' }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                        <div style={{ width: 40, height: 40, borderRadius: '8px', background: 'rgba(99, 102, 241, 0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                          <Server size={20} color="#a5b4fc" />
                        </div>
                        <div>
                          <h2 style={{ fontSize: '1.1rem', fontWeight: 700, margin: '0 0 2px 0', color: '#f8fafc' }}>Deterministic Synthesis Pipeline</h2>
                          <div style={{ fontSize: '0.75rem', color: '#64748b' }}>Seven distinct deterministic validation engines running concurrently</div>
                        </div>
                      </div>
                      <div style={{ textAlign: 'right' }}>
                        <div style={{ fontSize: '0.65rem', color: '#94a3b8', fontWeight: 700, letterSpacing: '0.5px', marginBottom: '2px' }}>OVERALL PROGRESS</div>
                        <div style={{ fontSize: '1.4rem', fontWeight: 800, color: '#f8fafc' }}>71%</div>
                      </div>
                    </div>

                    {/* Progress Bar */}
                    <div style={{ width: '100%', height: '6px', background: 'rgba(255, 255, 255, 0.05)', borderRadius: '100px', marginBottom: '32px', overflow: 'hidden' }}>
                      <div style={{ width: '71%', height: '100%', background: 'linear-gradient(90deg, #4f46e5, #a855f7)', borderRadius: '100px' }} />
                    </div>

                    {/* Stages List */}
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                      
                      {/* Stage 1 */}
                      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', padding: '16px', background: 'rgba(255, 255, 255, 0.02)', borderRadius: '12px', border: '1px solid rgba(255, 255, 255, 0.03)' }}>
                        <div style={{ display: 'flex', gap: '12px', alignItems: 'flex-start' }}>
                          <CheckCircle2 size={20} color="#38bdf8" style={{ marginTop: '2px' }} />
                          <div>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '4px' }}>
                              <span style={{ fontSize: '0.9rem', fontWeight: 600, color: '#f8fafc' }}>Stage 1: Responses Collected</span>
                              <span style={{ fontSize: '0.65rem', background: 'rgba(56, 189, 248, 0.1)', color: '#38bdf8', padding: '2px 8px', borderRadius: '100px', fontWeight: 600 }}>Complete</span>
                            </div>
                            <div style={{ fontSize: '0.75rem', color: '#94a3b8', lineHeight: 1.5, maxWidth: '450px' }}>
                              All 5 audio/video payloads and candidate scratchpad logs verified and encrypted with AES-256 Vault keys.
                            </div>
                          </div>
                        </div>
                        <span style={{ fontSize: '0.7rem', color: '#64748b' }}>1.2s • Vault Synced</span>
                      </div>

                      {/* Stage 2 */}
                      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', padding: '16px', background: 'rgba(255, 255, 255, 0.02)', borderRadius: '12px', border: '1px solid rgba(255, 255, 255, 0.03)' }}>
                        <div style={{ display: 'flex', gap: '12px', alignItems: 'flex-start' }}>
                          <CheckCircle2 size={20} color="#38bdf8" style={{ marginTop: '2px' }} />
                          <div>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '4px' }}>
                              <span style={{ fontSize: '0.9rem', fontWeight: 600, color: '#f8fafc' }}>Stage 2: Media & Payload Preparation</span>
                              <span style={{ fontSize: '0.65rem', background: 'rgba(56, 189, 248, 0.1)', color: '#38bdf8', padding: '2px 8px', borderRadius: '100px', fontWeight: 600 }}>Complete</span>
                            </div>
                            <div style={{ fontSize: '0.75rem', color: '#94a3b8', lineHeight: 1.5, maxWidth: '450px' }}>
                              Multi-track 1080p video streams, 48kHz audio streams, and local speech buffers parsed without packet loss.
                            </div>
                          </div>
                        </div>
                        <span style={{ fontSize: '0.7rem', color: '#64748b' }}>0.8s • 0 Pkts Lost</span>
                      </div>

                      {/* Stage 3 */}
                      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', padding: '16px', background: 'rgba(255, 255, 255, 0.02)', borderRadius: '12px', border: '1px solid rgba(255, 255, 255, 0.03)' }}>
                        <div style={{ display: 'flex', gap: '12px', alignItems: 'flex-start' }}>
                          <CheckCircle2 size={20} color="#38bdf8" style={{ marginTop: '2px' }} />
                          <div>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '4px' }}>
                              <span style={{ fontSize: '0.9rem', fontWeight: 600, color: '#f8fafc' }}>Stage 3: Speech & Acoustic Telemetry</span>
                              <span style={{ fontSize: '0.65rem', background: 'rgba(56, 189, 248, 0.1)', color: '#38bdf8', padding: '2px 8px', borderRadius: '100px', fontWeight: 600 }}>Complete</span>
                            </div>
                            <div style={{ fontSize: '0.75rem', color: '#94a3b8', lineHeight: 1.5, maxWidth: '450px', marginBottom: '8px' }}>
                              Measuring acoustic cadences (135 WPM), filler token frequency (1.2%), pause boundaries, and articulation latency.
                            </div>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '0.65rem', color: '#64748b' }}>
                              <Shield size={12} /> Measurable communication telemetry only, not personality or emotional inference.
                            </div>
                          </div>
                        </div>
                        <span style={{ fontSize: '0.7rem', color: '#64748b' }}>1.8s • Cadence 135 WPM</span>
                      </div>

                      {/* Stage 4 */}
                      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', padding: '16px', background: 'rgba(255, 255, 255, 0.02)', borderRadius: '12px', border: '1px solid rgba(255, 255, 255, 0.03)' }}>
                        <div style={{ display: 'flex', gap: '12px', alignItems: 'flex-start' }}>
                          <CheckCircle2 size={20} color="#38bdf8" style={{ marginTop: '2px' }} />
                          <div>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '4px' }}>
                              <span style={{ fontSize: '0.9rem', fontWeight: 600, color: '#f8fafc' }}>Stage 4: Observable Framing & Presentation Signals</span>
                              <span style={{ fontSize: '0.65rem', background: 'rgba(56, 189, 248, 0.1)', color: '#38bdf8', padding: '2px 8px', borderRadius: '100px', fontWeight: 600 }}>Complete</span>
                            </div>
                            <div style={{ fontSize: '0.75rem', color: '#94a3b8', lineHeight: 1.5, maxWidth: '450px', marginBottom: '8px' }}>
                              Verifying eye-line headroom, webcam framing stability, and low-light gamma balance.
                            </div>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '0.65rem', color: '#64748b' }}>
                              <Shield size={12} /> Zero biometric or eye tracking profiling.
                            </div>
                          </div>
                        </div>
                        <span style={{ fontSize: '0.7rem', color: '#64748b' }}>1.1s • Framing Stable</span>
                      </div>

                      {/* Stage 5 (Active) */}
                      <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', padding: '20px', background: 'rgba(168, 85, 247, 0.05)', borderRadius: '12px', border: '1px solid rgba(168, 85, 247, 0.3)' }}>
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                          <div style={{ display: 'flex', gap: '12px', alignItems: 'flex-start' }}>
                            <RefreshCw size={20} color="#a855f7" style={{ marginTop: '2px', animation: 'spin 3s linear infinite' }} />
                            <div>
                              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '4px' }}>
                                <span style={{ fontSize: '0.9rem', fontWeight: 700, color: '#f8fafc' }}>Stage 5: Technical Answer & Architectural Defense</span>
                              </div>
                              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '12px' }}>
                                <span style={{ fontSize: '0.65rem', color: '#cbd5e1', fontWeight: 600 }}>62% EVALUATED</span>
                                <span style={{ fontSize: '0.65rem', background: '#a855f7', color: 'white', padding: '2px 8px', borderRadius: '100px', fontWeight: 700 }}>PROCESSING</span>
                              </div>
                              <div style={{ fontSize: '0.75rem', color: '#cbd5e1', lineHeight: 1.5, maxWidth: '450px' }}>
                                Evaluating against Staff L6+ deterministic benchmarks: Python 3.12 Asyncio event loops, GIL bypass via ProcessPoolExecutor, asyncpg pool saturation, and backpressure bulkheads.
                              </div>
                            </div>
                          </div>
                        </div>
                        
                        <div style={{ background: 'rgba(0, 0, 0, 0.2)', borderRadius: '8px', padding: '12px 16px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.75rem', color: '#94a3b8' }}>
                            <CornerDownRight size={14} color="#64748b" /> Comparing Candidate response Q1 against Staff L6 concurrency...
                          </div>
                          <div style={{ width: '80px', height: '4px', background: 'rgba(255, 255, 255, 0.1)', borderRadius: '100px', overflow: 'hidden' }}>
                            <div style={{ width: '45%', height: '100%', background: '#a855f7' }} />
                          </div>
                        </div>
                      </div>

                      {/* Stage 6 */}
                      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', padding: '16px', opacity: 0.5 }}>
                        <div style={{ display: 'flex', gap: '12px', alignItems: 'flex-start' }}>
                          <div style={{ width: 20, height: 20, borderRadius: '50%', border: '2px solid #64748b', marginTop: '2px' }} />
                          <div>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '4px' }}>
                              <span style={{ fontSize: '0.9rem', fontWeight: 500, color: '#94a3b8' }}>Stage 6: Personalized Feedback Synthesis</span>
                              <span style={{ fontSize: '0.65rem', background: 'rgba(255, 255, 255, 0.05)', color: '#64748b', padding: '2px 8px', borderRadius: '100px', fontWeight: 600 }}>Queued</span>
                            </div>
                            <div style={{ fontSize: '0.75rem', color: '#64748b', lineHeight: 1.5, maxWidth: '450px' }}>
                              Preparing constructive trade-off breakdowns, exemplar model architectures, and follow-up drill paths.
                            </div>
                          </div>
                        </div>
                        <span style={{ fontSize: '0.7rem', color: '#64748b' }}>Pending Stage 5</span>
                      </div>

                      {/* Stage 7 */}
                      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', padding: '16px', opacity: 0.4 }}>
                        <div style={{ display: 'flex', gap: '12px', alignItems: 'flex-start' }}>
                          <Lock size={20} color="#64748b" style={{ marginTop: '2px' }} />
                          <div>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '4px' }}>
                              <span style={{ fontSize: '0.9rem', fontWeight: 500, color: '#94a3b8' }}>Stage 7: Finalizing Result Dashboard</span>
                              <span style={{ fontSize: '0.65rem', background: 'rgba(255, 255, 255, 0.05)', color: '#64748b', padding: '2px 8px', borderRadius: '100px', fontWeight: 600 }}>Queued</span>
                            </div>
                            <div style={{ fontSize: '0.75rem', color: '#64748b', lineHeight: 1.5, maxWidth: '450px' }}>
                              Compiling debrief dossier and generating cryptographic verification hash.
                            </div>
                          </div>
                        </div>
                        <span style={{ fontSize: '0.7rem', color: '#64748b' }}>Pending Synthesis</span>
                      </div>

                    </div>
                  </div>

                  {/* 5-Question Ingestion Matrix */}
                  <div>
                    <h3 style={{ fontSize: '1.1rem', fontWeight: 700, margin: '0 0 4px 0', color: '#f8fafc' }}>5-Question Ingestion Matrix</h3>
                    <p style={{ fontSize: '0.8rem', color: '#94a3b8', margin: '0 0 16px 0' }}>All candidate inputs captured and validated against session payload schema</p>
                    
                    <div style={{ display: 'inline-flex', background: 'rgba(56, 189, 248, 0.1)', color: '#38bdf8', padding: '4px 10px', borderRadius: '100px', fontSize: '0.7rem', fontWeight: 700, marginBottom: '24px' }}>
                      5 of 5 Payloads Secured
                    </div>

                    <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                      
                      {[
                        { num: 'Q1', title: 'Python Asyncio & GIL Starvation', sub: 'Defense of event-loop isolation, CPU-bound subinterpreters, and worker delegation.', dur: '01:42 duration', type: 'Audio + Framing + Code' },
                        { num: 'Q2', title: 'Database Connection Pooling & Spike Contention', sub: 'Analysis of asyncpg max_size saturation, connection lease timeouts, and pool leakage.', dur: '02:35 duration', type: 'Spoken Audio' },
                        { num: 'Q3', title: 'Distributed Microservices & Circuit Breakers', sub: 'Half-open state transitions, fallback caching mechanisms, and cascading failure isolation.', dur: '02:00 duration', type: 'Spoken Audio' },
                        { num: 'Q4', title: 'Backpressure & Idempotent Retry Policies', sub: 'Jittered exponential backoff, sliding window throttling, and idempotency key constraints.', dur: '01:54 duration', type: 'Spoken Audio + Scratchpad' },
                        { num: 'Q5', title: 'System Trade-Offs & Cost-to-SLA Matrix', sub: 'Balancing p99 latency SLA targets vs compute infrastructure budget envelope.', dur: '02:30 duration', type: 'Spoken Audio' }
                      ].map((item, i) => (
                        <div key={i} style={{ background: 'rgba(255, 255, 255, 0.02)', border: '1px solid rgba(255, 255, 255, 0.05)', borderRadius: '12px', padding: '20px', display: 'flex', alignItems: 'center', gap: '24px' }}>
                          <div style={{ width: 40, height: 40, borderRadius: '8px', background: 'rgba(255, 255, 255, 0.05)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '0.85rem', fontWeight: 700, color: '#f8fafc', flexShrink: 0 }}>
                            {item.num}
                          </div>
                          <div style={{ flex: 1 }}>
                            <div style={{ fontSize: '0.9rem', fontWeight: 700, color: '#f8fafc', marginBottom: '4px' }}>{item.title}</div>
                            <div style={{ fontSize: '0.75rem', color: '#64748b', lineHeight: 1.5 }}>{item.sub}</div>
                          </div>
                          <div style={{ display: 'flex', alignItems: 'center', gap: '24px', flexShrink: 0 }}>
                            <div style={{ fontSize: '0.75rem', color: '#94a3b8' }}>{item.dur}</div>
                            <div style={{ fontSize: '0.75rem', color: '#94a3b8' }}>{item.type}</div>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '0.75rem', color: '#38bdf8', fontWeight: 600 }}>
                              <CheckCircle2 size={14} /> Submitted
                            </div>
                          </div>
                        </div>
                      ))}

                    </div>
                  </div>

                </div>

                {/* Right Column */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: '24px', position: 'sticky', top: '24px' }}>
                  
                  {/* Safe Background Ingestion */}
                  <div style={{ background: 'rgba(255, 255, 255, 0.02)', border: '1px solid rgba(255, 255, 255, 0.05)', borderRadius: '16px', padding: '24px' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '16px' }}>
                      <div style={{ width: 32, height: 32, borderRadius: '8px', background: 'rgba(168, 85, 247, 0.15)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                        <Lock size={16} color="#c084fc" />
                      </div>
                      <div>
                        <div style={{ fontSize: '0.85rem', fontWeight: 700, color: '#f8fafc' }}>Safe Background Ingestion</div>
                        <div style={{ fontSize: '0.7rem', color: '#94a3b8' }}>You may safely navigate away anytime.</div>
                      </div>
                    </div>
                    <p style={{ fontSize: '0.75rem', color: '#cbd5e1', margin: '0 0 20px 0', lineHeight: 1.5 }}>
                      All 5 answers are locked in your private vault. We will send an email alert or update your Progress Dashboard when compilation completes.
                    </p>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                      <button onClick={onNavigateToDashboard} style={{ width: '100%', background: 'rgba(255, 255, 255, 0.05)', border: '1px solid rgba(255, 255, 255, 0.1)', color: '#f8fafc', padding: '12px', borderRadius: '8px', fontSize: '0.85rem', fontWeight: 600, display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px', cursor: 'pointer' }}>
                        <Terminal size={14} /> Continue to Dashboard<br/><span style={{ fontSize: '0.75rem', color: '#94a3b8', fontWeight: 500 }}>(Run in Background)</span>
                      </button>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '8px', justifyContent: 'center', fontSize: '0.75rem', color: '#94a3b8' }}>
                        <Eye size={14} color="#a5b4fc" /> Keep Window Open (Fastest Debrief)
                      </div>
                    </div>
                  </div>

                  {/* System Health & Node Sync */}
                  <div style={{ background: 'rgba(255, 255, 255, 0.02)', border: '1px solid rgba(255, 255, 255, 0.05)', borderRadius: '16px', padding: '24px' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '20px' }}>
                      <h3 style={{ fontSize: '0.9rem', fontWeight: 700, margin: 0, color: '#f8fafc' }}>System Health & Node Sync</h3>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '6px', background: 'rgba(16, 185, 129, 0.1)', color: '#34d399', padding: '2px 8px', borderRadius: '100px', fontSize: '0.65rem', fontWeight: 700 }}>
                        <div style={{ width: 4, height: 4, borderRadius: '50%', background: '#10b981' }} /> Operational
                      </div>
                    </div>

                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px' }}>
                      <div style={{ background: 'rgba(255, 255, 255, 0.02)', border: '1px solid rgba(255, 255, 255, 0.05)', borderRadius: '8px', padding: '12px' }}>
                        <div style={{ fontSize: '0.65rem', color: '#94a3b8', fontWeight: 600, marginBottom: '8px' }}>INGESTION LATENCY</div>
                        <div style={{ fontSize: '1.2rem', fontWeight: 700, color: '#f8fafc', marginBottom: '4px' }}>24 ms</div>
                        <div style={{ fontSize: '0.65rem', color: '#38bdf8', fontWeight: 600 }}>Zero dropped frames</div>
                      </div>
                      <div style={{ background: 'rgba(255, 255, 255, 0.02)', border: '1px solid rgba(255, 255, 255, 0.05)', borderRadius: '8px', padding: '12px' }}>
                        <div style={{ fontSize: '0.65rem', color: '#94a3b8', fontWeight: 600, marginBottom: '8px' }}>SECURITY PROTOCOL</div>
                        <div style={{ fontSize: '1.1rem', fontWeight: 700, color: '#f8fafc', marginBottom: '4px' }}>AES-256</div>
                        <div style={{ fontSize: '0.65rem', color: '#cbd5e1' }}>Encrypted at rest</div>
                      </div>
                      <div style={{ background: 'rgba(255, 255, 255, 0.02)', border: '1px solid rgba(255, 255, 255, 0.05)', borderRadius: '8px', padding: '12px' }}>
                        <div style={{ fontSize: '0.65rem', color: '#94a3b8', fontWeight: 600, marginBottom: '8px' }}>EVALUATION NODE</div>
                        <div style={{ fontSize: '0.85rem', fontWeight: 600, color: '#f8fafc', marginBottom: '4px', wordBreak: 'break-all' }}>us-east-va-c...</div>
                        <div style={{ fontSize: '0.65rem', color: '#cbd5e1' }}>Isolated sandbox</div>
                      </div>
                      <div style={{ background: 'rgba(255, 255, 255, 0.02)', border: '1px solid rgba(255, 255, 255, 0.05)', borderRadius: '8px', padding: '12px' }}>
                        <div style={{ fontSize: '0.65rem', color: '#94a3b8', fontWeight: 600, marginBottom: '8px' }}>BUFFER STATE</div>
                        <div style={{ fontSize: '1.2rem', fontWeight: 700, color: '#f8fafc', marginBottom: '4px' }}>100% Synced</div>
                        <div style={{ fontSize: '0.65rem', color: '#38bdf8', fontWeight: 600 }}>All payloads verified</div>
                      </div>
                    </div>
                  </div>

                  {/* Live Rubric Evaluation Stream */}
                  <div style={{ background: 'rgba(255, 255, 255, 0.02)', border: '1px solid rgba(255, 255, 255, 0.05)', borderRadius: '16px', padding: '20px' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px' }}>
                      <h3 style={{ fontSize: '0.85rem', fontWeight: 700, margin: 0, display: 'flex', alignItems: 'center', gap: '8px', color: '#f8fafc' }}>
                        <Terminal size={14} color="#a5b4fc" /> Live Rubric Evaluation Stream
                      </h3>
                      <span style={{ fontSize: '0.6rem', color: '#64748b', fontWeight: 600, letterSpacing: '0.5px' }}>STDOUT LOG</span>
                    </div>

                    <div style={{ background: '#0a0d14', borderRadius: '8px', border: '1px solid rgba(255, 255, 255, 0.05)', padding: '16px', display: 'flex', flexDirection: 'column', gap: '12px', fontFamily: 'monospace', fontSize: '0.7rem', color: '#94a3b8', lineHeight: 1.6 }}>
                      <div>
                        <span style={{ color: '#cbd5e1' }}>→ [05:12:04]</span> <span style={{ color: '#38bdf8' }}>INGESTION_SUCCESS: 5 stream manifests accepted</span>
                      </div>
                      <div>
                        <span style={{ color: '#cbd5e1' }}>→ [05:12:07]</span> ACOUSTIC_VAD: speech_density=84.2%, pause_avg=1.4s
                      </div>
                      <div>
                        <span style={{ color: '#cbd5e1' }}>→ [05:12:11]</span> FRAMING_OK: eye_line_ratio=0.92, gamma=stable
                      </div>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#a855f7' }}>
                        <RefreshCw size={10} style={{ animation: 'spin 2s linear infinite' }} /> Processing Q1 technical tokens...
                      </div>
                    </div>
                  </div>

                  {/* Responsible AI Governance */}
                  <div style={{ background: 'rgba(255, 255, 255, 0.02)', border: '1px solid rgba(255, 255, 255, 0.05)', borderRadius: '16px', padding: '24px' }}>
                    <h3 style={{ fontSize: '0.9rem', fontWeight: 700, margin: '0 0 12px 0', display: 'flex', alignItems: 'center', gap: '8px', color: '#f8fafc' }}>
                      <Shield size={16} color="#a5b4fc" /> Responsible AI Governance
                    </h3>
                    <p style={{ fontSize: '0.75rem', color: '#cbd5e1', margin: '0 0 16px 0', lineHeight: 1.6 }}>
                      Inprep AI models evaluate purely against objective engineering rubrics and communication telemetry. We strictly forbid psychological inference, emotion analysis, or automated hiring pass/fail decisions.
                    </p>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                      <div style={{ display: 'flex', gap: '8px', alignItems: 'flex-start' }}>
                        <Lock size={14} color="#38bdf8" style={{ marginTop: '2px', flexShrink: 0 }} />
                        <span style={{ fontSize: '0.75rem', color: '#94a3b8', lineHeight: 1.4 }}>Self-delete protocols available upon dossier completion.</span>
                      </div>
                      <div style={{ display: 'flex', gap: '8px', alignItems: 'flex-start' }}>
                        <Server size={14} color="#38bdf8" style={{ marginTop: '2px', flexShrink: 0 }} />
                        <span style={{ fontSize: '0.75rem', color: '#94a3b8', lineHeight: 1.4 }}>Deterministic grading aligned with Staff L6 industry data.</span>
                      </div>
                    </div>
                  </div>

                </div>

              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PipelineDiagnosticPage;
