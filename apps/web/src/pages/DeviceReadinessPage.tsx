import React, { useState } from 'react';
import { DashboardSidebar, NavItemKey } from '../components/dashboard/DashboardSidebar';
import { 
  Search, Bell, Video, Mic, Speaker, Activity, Shield, CheckCircle2, 
  ChevronDown, Play, CheckSquare, Server, Lock, Check,
  RefreshCw, Scan
} from 'lucide-react';
import { LiveSimulationModal } from '../components/LiveSimulationModal';

interface DeviceReadinessPageProps {
  onNavigateToHome?: () => void;
  onNavigateToDashboard?: () => void;
  onNavigateToProfile?: () => void;
  onNavigateToCv?: () => void;
  onNavigateToSimulations?: () => void;
  onNavigateToSearch?: () => void;
  onNavigateToSimulationDetails?: () => void;
  onNavigateToIntroRoom?: () => void;
  onNavigateToAi?: () => void;
  onNavigateToCategories?: () => void;
}

export const DeviceReadinessPage: React.FC<DeviceReadinessPageProps> = ({
  onNavigateToHome: _onNavigateToHome,
  onNavigateToDashboard,
  onNavigateToProfile,
  onNavigateToCv,
  onNavigateToSimulations,
  onNavigateToSearch,
  onNavigateToSimulationDetails,
  onNavigateToIntroRoom,
  onNavigateToAi,
  onNavigateToCategories,
}) => {
  const [activeNav, setActiveNav] = useState<NavItemKey>('search');
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
  const [simulationModalOpen, setSimulationModalOpen] = useState(false);

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

  const handleEnterRoom = () => {
    if (onNavigateToIntroRoom) {
      onNavigateToIntroRoom();
    } else {
      setSimulationModalOpen(true);
    }
  };

  const interactiveStates = [
    { label: '1. All Checks Passed (Ready)', active: true },
    { label: '2. Camera Permission Blocked' },
    { label: '3. Mic Level Too Low' },
    { label: '4. In-Progress Telemetry' },
    { label: '5. Text-Only Mode' }
  ];

  const checklistItems = [
    'Physical or digital scratchpad open for architecture diagrams',
    'Quiet environment, background door closed, notifications silenced',
    'Ready to structure answers with trade-offs and runtime complexity',
    'Aware of exactly 5 prompts (approx. 12 minutes total run time)'
  ];

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
                <div style={{ display: 'flex', alignItems: 'center', gap: '6px', background: 'rgba(255, 255, 255, 0.05)', padding: '6px 16px', borderRadius: '8px', fontSize: '0.8rem', color: '#94a3b8', border: '1px solid rgba(255, 255, 255, 0.08)' }}>
                  <Search size={14} /> Search questions, roles, rubrics... <span style={{ background: 'rgba(255, 255, 255, 0.1)', padding: '2px 6px', borderRadius: '4px', fontSize: '0.65rem', marginLeft: '24px' }}>⌘K</span>
                </div>
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
                <Activity size={12} /> SIMULATION SCENARIO:
              </span>
              {interactiveStates.map((b, i) => (
                <div key={i} style={{ background: b.active ? 'rgba(99, 102, 241, 0.2)' : 'rgba(255, 255, 255, 0.03)', color: b.active ? '#a5b4fc' : '#94a3b8', border: `1px solid ${b.active ? 'rgba(99, 102, 241, 0.4)' : 'rgba(255, 255, 255, 0.08)'}`, padding: '4px 12px', borderRadius: '100px', fontSize: '0.75rem', fontWeight: 600, whiteSpace: 'nowrap' }}>
                  {b.label}
                </div>
              ))}
            </div>

            <div style={{ padding: '32px 28px 40px 28px' }}>
              
              {/* Header */}
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '24px' }}>
                <div>
                  <div style={{ fontSize: '0.65rem', color: '#38bdf8', fontWeight: 700, letterSpacing: '0.5px', marginBottom: '8px' }}>
                    PRE-FLIGHT GATEWAY • Deterministic Acoustic & Optical Calibration
                  </div>
                  <h1 style={{ fontSize: '2rem', fontWeight: 800, margin: '0 0 8px 0' }}>Get Ready for Your Interview</h1>
                  <p style={{ fontSize: '0.9rem', color: '#94a3b8', margin: 0, maxWidth: '600px', lineHeight: 1.5 }}>
                    Complete the required technical and environment checks before entering your live interview room. This ensures latency integrity and deterministic evaluation telemetry.
                  </p>
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end', gap: '12px' }}>
                  <div style={{ display: 'flex', gap: '8px', alignItems: 'center', fontSize: '0.75rem', color: '#64748b', fontWeight: 600 }}>
                    <span style={{ display: 'flex', alignItems: 'center', gap: '4px' }}><CheckCircle2 size={14} color="#10b981" /> Details /</span>
                    <span style={{ display: 'flex', alignItems: 'center', gap: '4px' }}><CheckCircle2 size={14} color="#10b981" /> Device /</span>
                    <span style={{ color: '#f8fafc', display: 'flex', alignItems: 'center', gap: '4px' }}>
                      <div style={{ width: 6, height: 6, borderRadius: '50%', background: '#a5b4fc' }} /> Step 3: Pre-check /
                    </span>
                    <span>Step 4: Room</span>
                  </div>
                  <div style={{ background: 'rgba(16, 185, 129, 0.1)', border: '1px solid rgba(16, 185, 129, 0.2)', color: '#34d399', padding: '6px 12px', borderRadius: '100px', fontSize: '0.75rem', fontWeight: 700, display: 'flex', alignItems: 'center', gap: '6px' }}>
                    <div style={{ width: 6, height: 6, borderRadius: '50%', background: '#10b981' }} /> Ready to Start • 5/5 Checks Passed
                  </div>
                </div>
              </div>

              {/* Context Banner */}
              <div style={{ background: 'rgba(255, 255, 255, 0.02)', border: '1px solid rgba(255, 255, 255, 0.05)', borderRadius: '12px', padding: '16px 20px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '32px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                  <div style={{ width: 40, height: 40, background: 'rgba(99, 102, 241, 0.15)', borderRadius: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <Video size={20} color="#a5b4fc" />
                  </div>
                  <div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '4px' }}>
                      <h3 style={{ fontSize: '1rem', fontWeight: 700, color: '#f8fafc', margin: 0 }}>Python Backend Concurrency & High-Throughput APIs</h3>
                      <span style={{ fontSize: '0.65rem', background: 'rgba(255, 255, 255, 0.1)', color: '#cbd5e1', padding: '2px 6px', borderRadius: '4px' }}>#SIM-PY-6821</span>
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '12px', fontSize: '0.75rem', color: '#94a3b8' }}>
                      <span style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>5 Prompts (Standard Benchmark <Lock size={10} />)</span> •
                      <span>Duration: 10-15 Mins</span> •
                      <span>Difficulty: Staff L6+</span> •
                      <span style={{ color: '#a5b4fc' }}>Camera & Voice Required</span>
                    </div>
                  </div>
                </div>
                <button onClick={() => onNavigateToSimulationDetails?.()} style={{ background: 'transparent', border: 'none', color: '#cbd5e1', fontSize: '0.8rem', fontWeight: 600, cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '6px' }}>
                  Change Interview Details (Web #29) &rarr;
                </button>
              </div>

              {/* Main 2-Column Grid */}
              <div style={{ display: 'grid', gridTemplateColumns: 'minmax(0, 1.8fr) minmax(0, 1fr)', gap: '32px', alignItems: 'flex-start' }}>
                
                {/* Left Column */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
                  
                  {/* Camera Check */}
                  <div style={{ background: 'rgba(255, 255, 255, 0.02)', border: '1px solid rgba(255, 255, 255, 0.05)', borderRadius: '16px', padding: '24px' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px' }}>
                      <h2 style={{ fontSize: '1.1rem', fontWeight: 700, margin: 0, display: 'flex', alignItems: 'center', gap: '8px' }}>
                        <Video size={18} color="#a5b4fc" /> Optical Sensor & Headroom Verification <span style={{ fontSize: '0.6rem', background: 'rgba(255, 255, 255, 0.1)', color: '#cbd5e1', padding: '2px 6px', borderRadius: '100px', fontWeight: 700 }}>REQUIRED</span>
                      </h2>
                      <div style={{ background: 'rgba(255, 255, 255, 0.05)', border: '1px solid rgba(255, 255, 255, 0.1)', padding: '6px 12px', borderRadius: '8px', fontSize: '0.8rem', color: '#f8fafc', display: 'flex', alignItems: 'center', gap: '8px', cursor: 'pointer' }}>
                        FaceTime HD Camera (Built-in) <ChevronDown size={14} color="#94a3b8" />
                      </div>
                    </div>
                    
                    {/* Viewport */}
                    <div style={{ position: 'relative', width: '100%', height: '360px', borderRadius: '12px', overflow: 'hidden', border: '1px solid rgba(255, 255, 255, 0.1)', marginBottom: '16px' }}>
                      <img src="file:///C:/Users/hp/.gemini/antigravity-ide/brain/2378d22a-7282-40e8-afc1-fcc565196bde/candidate_video_feed_1789566058610.jpg" alt="Camera Feed" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                      
                      {/* Overlays */}
                      <div style={{ position: 'absolute', top: 12, left: 12, background: 'rgba(0, 0, 0, 0.6)', backdropFilter: 'blur(4px)', padding: '4px 10px', borderRadius: '100px', fontSize: '0.7rem', color: '#f8fafc', fontWeight: 600, display: 'flex', alignItems: 'center', gap: '6px' }}>
                        <div style={{ width: 6, height: 6, background: '#38bdf8', borderRadius: '50%' }} /> 1080p @ 30fps • Sub-pixel Lock
                      </div>
                      <div style={{ position: 'absolute', top: 12, right: 12, background: 'rgba(0, 0, 0, 0.6)', backdropFilter: 'blur(4px)', padding: '4px 10px', borderRadius: '100px', fontSize: '0.7rem', color: '#f8fafc', fontWeight: 600 }}>
                        FOV: 78°
                      </div>

                      {/* Headroom / Chest boundary SVG mock */}
                      <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', width: '80%', height: '80%', border: '2px dashed rgba(56, 189, 248, 0.5)', borderRadius: '50%', pointerEvents: 'none' }} />
                      <div style={{ position: 'absolute', top: '35%', left: '50%', transform: 'translateX(-50%)', background: 'rgba(0,0,0,0.5)', padding: '2px 8px', borderRadius: '4px', fontSize: '0.65rem', color: '#38bdf8', fontWeight: 700 }}>OPTIMAL EYE LINE</div>
                      <div style={{ position: 'absolute', bottom: '15%', left: '50%', transform: 'translateX(-50%)', background: 'rgba(0,0,0,0.5)', padding: '2px 8px', borderRadius: '4px', fontSize: '0.65rem', color: '#38bdf8', fontWeight: 700 }}>Chest & Posture Boundary</div>

                      <div style={{ position: 'absolute', bottom: 12, right: 12, background: 'rgba(16, 185, 129, 0.9)', padding: '6px 12px', borderRadius: '8px', fontSize: '0.75rem', color: 'white', fontWeight: 700, display: 'flex', alignItems: 'center', gap: '6px' }}>
                        <Scan size={14} /> Framing Position: Optimal
                      </div>
                    </div>

                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '12px', marginBottom: '16px' }}>
                      <div style={{ display: 'flex', alignItems: 'flex-start', gap: '8px', background: 'rgba(255, 255, 255, 0.02)', padding: '12px', borderRadius: '8px' }}>
                        <CheckCircle2 size={16} color="#38bdf8" />
                        <div>
                          <div style={{ fontSize: '0.8rem', fontWeight: 700, color: '#f8fafc', marginBottom: '2px' }}>Camera Stream Active</div>
                          <div style={{ fontSize: '0.7rem', color: '#94a3b8' }}>Uninterrupted WebRTC feed</div>
                        </div>
                      </div>
                      <div style={{ display: 'flex', alignItems: 'flex-start', gap: '8px', background: 'rgba(255, 255, 255, 0.02)', padding: '12px', borderRadius: '8px' }}>
                        <CheckCircle2 size={16} color="#38bdf8" />
                        <div>
                          <div style={{ fontSize: '0.8rem', fontWeight: 700, color: '#f8fafc', marginBottom: '2px' }}>Face Vector In-Bounds</div>
                          <div style={{ fontSize: '0.7rem', color: '#94a3b8' }}>Centered within golden oval</div>
                        </div>
                      </div>
                      <div style={{ display: 'flex', alignItems: 'flex-start', gap: '8px', background: 'rgba(255, 255, 255, 0.02)', padding: '12px', borderRadius: '8px' }}>
                        <CheckCircle2 size={16} color="#38bdf8" />
                        <div>
                          <div style={{ fontSize: '0.8rem', fontWeight: 700, color: '#f8fafc', marginBottom: '2px' }}>Lighting & Gamma Balanced</div>
                          <div style={{ fontSize: '0.7rem', color: '#94a3b8' }}>No clipping or silhouetting</div>
                        </div>
                      </div>
                    </div>

                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '0.75rem', color: '#64748b' }}>
                        <Shield size={14} /> Zero facial emotion classification. Observable framing telemetry only.
                      </div>
                      <div style={{ display: 'flex', gap: '8px' }}>
                        <button style={{ background: 'transparent', border: '1px solid rgba(255, 255, 255, 0.1)', color: '#f8fafc', padding: '6px 12px', borderRadius: '6px', fontSize: '0.75rem', fontWeight: 600, cursor: 'pointer' }}>Re-calibrate Framing</button>
                        <button style={{ background: 'transparent', border: '1px solid rgba(255, 255, 255, 0.1)', color: '#f8fafc', padding: '6px 12px', borderRadius: '6px', fontSize: '0.75rem', fontWeight: 600, cursor: 'pointer' }}>Test Low-Light Mode</button>
                      </div>
                    </div>
                  </div>

                  {/* Mic Check */}
                  <div style={{ background: 'rgba(255, 255, 255, 0.02)', border: '1px solid rgba(255, 255, 255, 0.05)', borderRadius: '16px', padding: '24px' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px' }}>
                      <h2 style={{ fontSize: '1.1rem', fontWeight: 700, margin: 0, display: 'flex', alignItems: 'center', gap: '8px' }}>
                        <Mic size={18} color="#a5b4fc" /> Microphone & Acoustic Pacing Check <span style={{ fontSize: '0.6rem', background: 'rgba(255, 255, 255, 0.1)', color: '#cbd5e1', padding: '2px 6px', borderRadius: '100px', fontWeight: 700 }}>REQUIRED</span>
                      </h2>
                      <div style={{ background: 'rgba(255, 255, 255, 0.05)', border: '1px solid rgba(255, 255, 255, 0.1)', padding: '6px 12px', borderRadius: '8px', fontSize: '0.8rem', color: '#f8fafc', display: 'flex', alignItems: 'center', gap: '8px', cursor: 'pointer' }}>
                        Yeti Nano USB Microphone (Direct Input) <ChevronDown size={14} color="#94a3b8" />
                      </div>
                    </div>

                    <div style={{ marginBottom: '24px' }}>
                      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontSize: '0.75rem', fontWeight: 600, marginBottom: '8px' }}>
                        <span style={{ color: '#f8fafc' }}>Input Signal Strength (Speaking Range: -18dB to -6dB)</span>
                        <span style={{ color: '#10b981' }}>-12.4 dB (Optimal)</span>
                      </div>
                      <div style={{ width: '100%', height: '8px', display: 'flex', gap: '2px' }}>
                        {[...Array(20)].map((_, i) => (
                          <div key={i} style={{ flex: 1, background: i < 14 ? '#818cf8' : i < 18 ? '#cbd5e1' : 'rgba(255, 255, 255, 0.1)', borderRadius: '2px' }} />
                        ))}
                      </div>
                    </div>

                    <div style={{ background: 'rgba(99, 102, 241, 0.05)', border: '1px solid rgba(99, 102, 241, 0.2)', borderRadius: '12px', padding: '16px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px' }}>
                      <div>
                        <div style={{ fontSize: '0.65rem', color: '#94a3b8', fontWeight: 700, letterSpacing: '0.5px', marginBottom: '4px' }}>CALIBRATION PROMPT:</div>
                        <div style={{ fontSize: '1rem', color: '#f8fafc', fontStyle: 'italic', fontWeight: 600, display: 'flex', gap: '8px' }}>
                          <Mic size={18} color="#a5b4fc" style={{ marginTop: '2px' }} /> "Ready to articulate system design trade-offs and latency boundaries."
                        </div>
                      </div>
                      <button style={{ background: 'rgba(255, 255, 255, 0.05)', border: '1px solid rgba(255, 255, 255, 0.1)', color: '#f8fafc', padding: '8px 16px', borderRadius: '100px', fontSize: '0.8rem', fontWeight: 600, display: 'flex', alignItems: 'center', gap: '6px', cursor: 'pointer' }}>
                        <div style={{ width: 8, height: 8, borderRadius: '50%', background: '#ef4444' }} /> Record 5s Sample
                      </button>
                    </div>

                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                      <div style={{ display: 'flex', gap: '16px', fontSize: '0.75rem', color: '#64748b' }}>
                        <span style={{ display: 'flex', alignItems: 'center', gap: '4px' }}><div style={{ width: 6, height: 6, borderRadius: '50%', background: '#38bdf8' }} /> Ambient Noise Floor: Low (22 dBA Quiet Studio)</span>
                        <span style={{ display: 'flex', alignItems: 'center', gap: '4px' }}><div style={{ width: 6, height: 6, borderRadius: '50%', background: '#38bdf8' }} /> Echo Cancellation Active</span>
                      </div>
                      <span style={{ fontSize: '0.75rem', color: '#38bdf8', fontWeight: 600 }}>Acoustic Baseline Calibrated ✓</span>
                    </div>
                  </div>

                  {/* Audio Output */}
                  <div style={{ background: 'rgba(255, 255, 255, 0.02)', border: '1px solid rgba(255, 255, 255, 0.05)', borderRadius: '16px', padding: '24px' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px' }}>
                      <h2 style={{ fontSize: '1.1rem', fontWeight: 700, margin: 0, display: 'flex', alignItems: 'center', gap: '8px' }}>
                        <Speaker size={18} color="#a5b4fc" /> Audio Output & Interviewer Synthetic Tone <span style={{ fontSize: '0.6rem', background: 'rgba(255, 255, 255, 0.1)', color: '#cbd5e1', padding: '2px 6px', borderRadius: '100px', fontWeight: 700 }}>RECOMMENDED</span>
                      </h2>
                      <div style={{ background: 'rgba(255, 255, 255, 0.05)', border: '1px solid rgba(255, 255, 255, 0.1)', padding: '6px 12px', borderRadius: '8px', fontSize: '0.8rem', color: '#f8fafc', display: 'flex', alignItems: 'center', gap: '8px', cursor: 'pointer' }}>
                        Headphones (External USB Audio / DAC) <ChevronDown size={14} color="#94a3b8" />
                      </div>
                    </div>

                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                        <button style={{ width: 48, height: 48, borderRadius: '12px', background: 'rgba(99, 102, 241, 0.1)', border: '1px solid rgba(99, 102, 241, 0.3)', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer' }}>
                          <Play size={20} color="#a5b4fc" style={{ marginLeft: '4px' }} />
                        </button>
                        <div>
                          <div style={{ fontSize: '0.9rem', fontWeight: 700, color: '#f8fafc', marginBottom: '2px' }}>Play Synthetic Speech Tone</div>
                          <div style={{ fontSize: '0.8rem', color: '#94a3b8' }}>Simulates the executive AI interviewer voice frequency at 48kHz</div>
                        </div>
                      </div>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                        <span style={{ fontSize: '0.8rem', color: '#cbd5e1' }}>Did you hear the chime?</span>
                        <button style={{ background: 'rgba(16, 185, 129, 0.15)', border: '1px solid rgba(16, 185, 129, 0.3)', color: '#34d399', padding: '6px 12px', borderRadius: '6px', fontSize: '0.8rem', fontWeight: 600, display: 'flex', alignItems: 'center', gap: '6px', cursor: 'pointer' }}>
                          <Check size={14} /> Yes, Clear
                        </button>
                      </div>
                    </div>
                  </div>

                  {/* Browser Telemetry */}
                  <div style={{ background: 'rgba(255, 255, 255, 0.02)', border: '1px solid rgba(255, 255, 255, 0.05)', borderRadius: '16px', padding: '24px' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px' }}>
                      <h2 style={{ fontSize: '1.1rem', fontWeight: 700, margin: 0, display: 'flex', alignItems: 'center', gap: '8px' }}>
                        <Server size={18} color="#a5b4fc" /> Browser Engine & WebRTC Telemetry <span style={{ fontSize: '0.6rem', background: 'rgba(255, 255, 255, 0.1)', color: '#cbd5e1', padding: '2px 6px', borderRadius: '100px', fontWeight: 700 }}>REQUIRED</span>
                      </h2>
                      <button style={{ background: 'transparent', border: 'none', color: '#cbd5e1', fontSize: '0.75rem', fontWeight: 600, display: 'flex', alignItems: 'center', gap: '6px', cursor: 'pointer' }}>
                        <RefreshCw size={14} /> Retest Route
                      </button>
                    </div>

                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '16px' }}>
                      <div>
                        <div style={{ fontSize: '0.65rem', color: '#94a3b8', fontWeight: 600, marginBottom: '4px' }}>Browser Engine</div>
                        <div style={{ fontSize: '1.2rem', fontWeight: 700, color: '#f8fafc', marginBottom: '2px' }}>Chrome 124</div>
                        <div style={{ fontSize: '0.75rem', color: '#38bdf8', fontWeight: 600 }}>V8 • WebRTC 1.0</div>
                        <div style={{ fontSize: '0.65rem', color: '#64748b', marginTop: '2px' }}>Accelerated</div>
                      </div>
                      <div>
                        <div style={{ fontSize: '0.65rem', color: '#94a3b8', fontWeight: 600, marginBottom: '4px' }}>Inprep Edge RTT</div>
                        <div style={{ fontSize: '1.2rem', fontWeight: 700, color: '#34d399', marginBottom: '2px' }}>24 ms</div>
                        <div style={{ fontSize: '0.75rem', color: '#cbd5e1' }}>Edge: us-east-va</div>
                        <div style={{ fontSize: '0.65rem', color: '#34d399', marginTop: '2px', fontWeight: 600 }}>Optimal (&lt;50ms)</div>
                      </div>
                      <div>
                        <div style={{ fontSize: '0.65rem', color: '#94a3b8', fontWeight: 600, marginBottom: '4px' }}>Jitter Buffer</div>
                        <div style={{ fontSize: '1.2rem', fontWeight: 700, color: '#f8fafc', marginBottom: '2px' }}>1.2 ms</div>
                        <div style={{ fontSize: '0.75rem', color: '#cbd5e1' }}>Buffer: 40ms adaptive</div>
                        <div style={{ fontSize: '0.65rem', color: '#38bdf8', marginTop: '2px', fontWeight: 600 }}>Deterministic</div>
                      </div>
                      <div>
                        <div style={{ fontSize: '0.65rem', color: '#94a3b8', fontWeight: 600, marginBottom: '4px' }}>Packet Integrity</div>
                        <div style={{ fontSize: '1.2rem', fontWeight: 700, color: '#f8fafc', marginBottom: '2px' }}>0.00%</div>
                        <div style={{ fontSize: '0.75rem', color: '#cbd5e1' }}>FEC Armed</div>
                        <div style={{ fontSize: '0.65rem', color: '#38bdf8', marginTop: '2px', fontWeight: 600 }}>Zero Loss</div>
                      </div>
                    </div>
                  </div>

                </div>

                {/* Right Column: Sticky Panel */}
                <div style={{ position: 'sticky', top: '24px', display: 'flex', flexDirection: 'column', gap: '24px' }}>
                  
                  {/* System Diagnostics Card */}
                  <div style={{ background: 'rgba(255, 255, 255, 0.02)', border: '1px solid rgba(255, 255, 255, 0.05)', borderRadius: '16px', padding: '24px' }}>
                    <div style={{ display: 'flex', gap: '12px', alignItems: 'center', marginBottom: '24px' }}>
                      <div style={{ width: 40, height: 40, borderRadius: '50%', background: 'rgba(16, 185, 129, 0.1)', border: '1px solid rgba(16, 185, 129, 0.3)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                        <CheckCircle2 size={20} color="#34d399" />
                      </div>
                      <div>
                        <div style={{ fontSize: '0.7rem', color: '#94a3b8', fontWeight: 600, letterSpacing: '0.5px', marginBottom: '2px' }}>SYSTEM DIAGNOSTICS</div>
                        <h2 style={{ fontSize: '1.2rem', fontWeight: 800, color: '#f8fafc', margin: 0 }}>All Systems Nominal</h2>
                      </div>
                    </div>

                    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.85rem', color: '#cbd5e1' }}>
                          <CheckCircle2 size={16} color="#38bdf8" /> Mandatory Hardware
                        </div>
                        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end' }}>
                          <span style={{ fontSize: '0.75rem', color: '#38bdf8', fontWeight: 600 }}>4/4</span>
                          <span style={{ fontSize: '0.65rem', color: '#38bdf8' }}>Complete</span>
                        </div>
                      </div>
                      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.85rem', color: '#cbd5e1' }}>
                          <CheckCircle2 size={16} color="#38bdf8" /> Consent & Rubrics
                        </div>
                        <span style={{ fontSize: '0.75rem', color: '#38bdf8', fontWeight: 600 }}>Acknowledged</span>
                      </div>
                      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.85rem', color: '#cbd5e1' }}>
                          <div style={{ width: 16, height: 16, borderRadius: '4px', background: 'rgba(255, 255, 255, 0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                            <Shield size={10} color="#cbd5e1" />
                          </div> Session Authorization
                        </div>
                        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end' }}>
                          <span style={{ fontSize: '0.75rem', color: '#cbd5e1' }}>1 Credit</span>
                          <span style={{ fontSize: '0.65rem', color: '#94a3b8' }}>Deducted</span>
                        </div>
                      </div>
                      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.85rem', color: '#cbd5e1' }}>
                          <Mic size={16} color="#64748b" /> Input Mode
                        </div>
                        <span style={{ fontSize: '0.75rem', color: '#94a3b8' }}>Camera + Audio</span>
                      </div>
                    </div>

                    <div style={{ background: 'rgba(255, 255, 255, 0.03)', border: '1px solid rgba(255, 255, 255, 0.05)', borderRadius: '8px', padding: '12px', marginTop: '24px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                      <span style={{ fontSize: '0.75rem', color: '#94a3b8' }}>Candidate Vault<br/>Balance</span>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                        <Lock size={14} color="#38bdf8" />
                        <span style={{ fontSize: '0.95rem', fontWeight: 700, color: '#f8fafc' }}>840 / 1,000<br/><span style={{ fontSize: '0.65rem', color: '#64748b' }}>Points</span></span>
                      </div>
                    </div>
                  </div>

                  {/* Checklist Card */}
                  <div style={{ background: 'rgba(255, 255, 255, 0.02)', border: '1px solid rgba(255, 255, 255, 0.05)', borderRadius: '16px', padding: '24px' }}>
                    <h3 style={{ fontSize: '0.95rem', fontWeight: 700, color: '#f8fafc', margin: '0 0 16px 0', display: 'flex', alignItems: 'center', gap: '8px' }}>
                      <CheckSquare size={16} color="#a5b4fc" /> Pre-Flight Candidate Checklist
                    </h3>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                      {checklistItems.map((item, i) => (
                        <div key={i} style={{ display: 'flex', gap: '12px', alignItems: 'flex-start' }}>
                          <div style={{ width: 16, height: 16, borderRadius: '4px', background: '#a5b4fc', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, marginTop: '2px' }}>
                            <Check size={12} color="#312e81" strokeWidth={3} />
                          </div>
                          <span style={{ fontSize: '0.8rem', color: '#cbd5e1', lineHeight: 1.5 }}>{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Consent Card */}
                  <div style={{ background: 'rgba(255, 255, 255, 0.02)', border: '1px solid rgba(255, 255, 255, 0.05)', borderRadius: '16px', padding: '24px' }}>
                    <h3 style={{ fontSize: '0.95rem', fontWeight: 700, color: '#f8fafc', margin: '0 0 16px 0', display: 'flex', alignItems: 'center', gap: '8px' }}>
                      <Shield size={16} color="#38bdf8" /> Consent & Privacy Governance
                    </h3>
                    <div style={{ display: 'flex', gap: '12px', alignItems: 'flex-start', marginBottom: '16px' }}>
                      <div style={{ width: 16, height: 16, borderRadius: '4px', background: '#a5b4fc', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, marginTop: '2px' }}>
                        <Check size={12} color="#312e81" strokeWidth={3} />
                      </div>
                      <span style={{ fontSize: '0.8rem', color: '#cbd5e1', lineHeight: 1.5 }}>
                        I consent to temporary audio recording and optical framing metrics strictly to generate performance rubrics.
                      </span>
                    </div>
                    <ul style={{ margin: '0 0 16px 0', paddingLeft: '24px', fontSize: '0.75rem', color: '#94a3b8', lineHeight: 1.5 }}>
                      <li>End-to-end encrypted with AES-256 vault keys.</li>
                      <li>Never sold, transferred, or used for model training.</li>
                      <li>Automatic 30-day purge or instant self-delete on request.</li>
                    </ul>
                    <div style={{ display: 'flex', gap: '16px' }}>
                      <a href="#" style={{ fontSize: '0.75rem', color: '#818cf8', textDecoration: 'underline' }}>Responsible AI Charter</a>
                      <a href="#" style={{ fontSize: '0.75rem', color: '#818cf8', textDecoration: 'underline' }}>Security Whitepaper</a>
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                    <button onClick={handleEnterRoom} style={{ width: '100%', padding: '16px', background: 'linear-gradient(135deg, #a855f7, #818cf8)', border: 'none', borderRadius: '100px', color: 'white', fontSize: '1rem', fontWeight: 700, display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '8px', cursor: 'pointer', boxShadow: '0 4px 16px rgba(168, 85, 247, 0.4)' }}>
                      Enter Interview Room (Web #31) &rarr;
                    </button>
                    <button onClick={() => onNavigateToSimulationDetails?.()} style={{ width: '100%', padding: '12px', background: 'rgba(255, 255, 255, 0.05)', border: '1px solid rgba(255, 255, 255, 0.1)', borderRadius: '100px', color: '#cbd5e1', fontSize: '0.85rem', fontWeight: 600, cursor: 'pointer' }}>
                      Exit to Interview Details (Web #29)
                    </button>
                  </div>
                  
                  <div style={{ fontSize: '0.7rem', color: '#64748b', textAlign: 'center', lineHeight: 1.5 }}>
                    Each prompt grants a 45-second silent comprehension window before answering starts.
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
          initialRole="Python Backend Concurrency"
        />
      )}
    </div>
  );
};

export default DeviceReadinessPage;
