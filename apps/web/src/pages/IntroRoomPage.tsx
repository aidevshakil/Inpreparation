import React, { useState, useEffect } from 'react';
import { 
  Mic, Video, PhoneOff, Activity, Lock, Maximize2, Settings, Zap, 
  CheckCircle2, Clock, PauseCircle, RotateCcw, ChevronUp, Play, Shield
} from 'lucide-react';
import { useAuth } from '../context/AuthContext';

interface IntroRoomPageProps {
  onNavigateToHome?: () => void;
  onNavigateToDashboard?: () => void;
  onNavigateToResult?: () => void;
}

export const IntroRoomPage: React.FC<IntroRoomPageProps> = ({
  onNavigateToDashboard,
  onNavigateToResult,
}) => {
  const { user } = useAuth();
  const [scratchpadText, setScratchpadText] = useState(`1. Offload Argon2 CPU-bound hashing using loop.run_in_executor(ProcessPoolExecutor, ...) to bypass GIL lock completely.
2. Pool connections via asyncpg with min_size=20, max_size=50 to prevent connection thrash under 50k req/min.
3. Apply Token-bucket backpressure queue using asyncio.Queue with maxsize=1000 to drop early and`);
  
  const handleEndSession = () => {
    if (onNavigateToResult) {
      onNavigateToResult();
    } else if (onNavigateToDashboard) {
      onNavigateToDashboard();
    }
  };

  const interactiveStates = [
    { label: '1. Answering Q1 (Active)', active: true },
    { label: '2. Live Recording Waveform' },
    { label: '3. Answer Captured (Review/Retake)' },
    { label: '4. Audio-Only Fallback' },
    { label: '5. Exit Prompt' }
  ];

  return (
    <div style={{ minHeight: '100vh', backgroundColor: '#07090e', color: '#f8fafc', display: 'flex', flexDirection: 'column' }}>
      
      {/* Top Navbar */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '12px 24px', backgroundColor: '#0f121b', borderBottom: '1px solid rgba(255, 255, 255, 0.05)' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '24px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <div style={{ width: 28, height: 28, borderRadius: '6px', background: 'linear-gradient(135deg, #7c3aed, #4f46e5)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <Zap size={16} color="white" />
            </div>
            <div style={{ display: 'flex', flexDirection: 'column' }}>
              <span style={{ fontSize: '0.9rem', fontWeight: 800, lineHeight: 1 }}>Inprep</span>
              <span style={{ fontSize: '0.9rem', fontWeight: 800, lineHeight: 1 }}>AI</span>
            </div>
          </div>
          
          <div style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
            <div style={{ background: 'rgba(99, 102, 241, 0.2)', color: '#a5b4fc', border: '1px solid rgba(99, 102, 241, 0.4)', padding: '6px 12px', borderRadius: '100px', fontSize: '0.75rem', fontWeight: 700, display: 'flex', alignItems: 'center', gap: '6px' }}>
              <Lock size={12} /> SIMULATION ROOM
            </div>
            <div style={{ background: '#a5b4fc', color: '#312e81', padding: '6px 16px', borderRadius: '100px', fontSize: '0.8rem', fontWeight: 800 }}>
              Q1 Active (1/5)
            </div>
            {['Q2\nPending', 'Q3\nPending', 'Q4\nPending', 'Q5\nBenchmark'].map((q, i) => (
              <div key={i} style={{ color: '#64748b', fontSize: '0.75rem', fontWeight: 600, lineHeight: 1.2, textAlign: 'center', marginLeft: '12px' }}>
                {q.split('\n')[0]}<br/>{q.split('\n')[1]}
              </div>
            ))}
          </div>
        </div>
        
        <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
          <div style={{ display: 'flex', gap: '16px', alignItems: 'center', color: '#94a3b8', fontSize: '0.75rem', fontWeight: 600, background: 'rgba(255, 255, 255, 0.05)', padding: '6px 16px', borderRadius: '100px' }}>
            <span style={{ display: 'flex', alignItems: 'center', gap: '4px', color: '#34d399' }}><Activity size={12} /> 24ms</span>
            <span style={{ display: 'flex', alignItems: 'center', gap: '4px', color: '#f8fafc' }}><Mic size={12} /> Mic ON</span>
            <span style={{ display: 'flex', alignItems: 'center', gap: '4px' }}><Video size={12} /> 1080p</span>
          </div>
          
          <div style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '0.9rem', fontWeight: 700 }}>
            <Clock size={16} color="#94a3b8" /> 03:12
          </div>
          
          <button onClick={handleEndSession} style={{ background: '#ef4444', color: 'white', border: 'none', padding: '6px 16px', borderRadius: '100px', fontSize: '0.8rem', fontWeight: 700, display: 'flex', alignItems: 'center', gap: '6px', cursor: 'pointer' }}>
            <PhoneOff size={14} /> Exit Session
          </button>
          
          <div style={{ width: 32, height: 32, borderRadius: '50%', background: 'linear-gradient(135deg, #7c3aed, #4f46e5)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', fontSize: '0.85rem', fontWeight: 700 }}>
            SA
          </div>
        </div>
      </div>

      {/* Scenario Switcher Bar */}
      <div style={{ padding: '8px 24px', backgroundColor: '#07090e', borderBottom: '1px solid rgba(255, 255, 255, 0.05)', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <div style={{ display: 'flex', gap: '12px', alignItems: 'center', overflowX: 'auto' }}>
          <span style={{ fontSize: '0.7rem', color: '#64748b', fontWeight: 700, letterSpacing: '0.5px', display: 'flex', alignItems: 'center', gap: '4px' }}>
            <Settings size={12} /> SCENARIO SWITCHER
          </span>
          {interactiveStates.map((b, i) => (
            <div key={i} style={{ background: b.active ? 'rgba(99, 102, 241, 0.2)' : 'rgba(255, 255, 255, 0.03)', color: b.active ? '#a5b4fc' : '#94a3b8', border: `1px solid ${b.active ? 'rgba(99, 102, 241, 0.4)' : 'rgba(255, 255, 255, 0.08)'}`, padding: '4px 12px', borderRadius: '100px', fontSize: '0.7rem', fontWeight: 600, whiteSpace: 'nowrap' }}>
              {b.label}
            </div>
          ))}
        </div>
        <div style={{ fontSize: '0.7rem', color: '#38bdf8', fontWeight: 600, display: 'flex', alignItems: 'center', gap: '6px' }}>
          <div style={{ width: 6, height: 6, borderRadius: '50%', background: '#38bdf8' }} /> Ultra-Low Latency Channel
        </div>
      </div>

      {/* Main Workspace */}
      <div style={{ display: 'flex', flex: 1, padding: '24px', gap: '24px', maxWidth: '1600px', margin: '0 auto', width: '100%', overflow: 'hidden' }}>
        
        {/* Left Column (Main Content) */}
        <div style={{ flex: '1 1 70%', display: 'flex', flexDirection: 'column', gap: '16px', overflowY: 'auto', paddingRight: '8px' }}>
          
          {/* Question Header */}
          <div style={{ background: 'rgba(255, 255, 255, 0.02)', border: '1px solid rgba(255, 255, 255, 0.05)', borderRadius: '16px', padding: '24px' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '24px' }}>
              <div style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
                <span style={{ background: 'rgba(99, 102, 241, 0.2)', color: '#a5b4fc', padding: '4px 12px', borderRadius: '100px', fontSize: '0.75rem', fontWeight: 700 }}>
                  QUESTION 1 OF 5
                </span>
                <span style={{ fontSize: '0.8rem', color: '#38bdf8', fontWeight: 600, display: 'flex', alignItems: 'center', gap: '6px' }}>
                  <Settings size={14} /> Domain: Python & Concurrency Mechanics
                </span>
                <span style={{ fontSize: '0.8rem', color: '#cbd5e1', display: 'flex', alignItems: 'center', gap: '6px' }}>
                  <Shield size={14} /> Staff L6+ Standard
                </span>
              </div>
              <span style={{ fontSize: '0.75rem', color: '#64748b', fontWeight: 600 }}>#SIM-PY-6821</span>
            </div>

            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '16px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.75rem', color: '#94a3b8' }}>
                <Clock size={14} color="#38bdf8" /> Comprehension Window Finished • <span style={{ color: '#38bdf8', fontWeight: 600 }}>Live Defense Active</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '0.75rem', color: '#64748b' }}>
                <CheckCircle2 size={14} /> Evaluated by Inprep Synthetic Engine v4.8
              </div>
            </div>

            <h1 style={{ fontSize: '1.6rem', fontWeight: 600, margin: '0 0 24px 0', lineHeight: 1.5, color: '#f8fafc' }}>
              Explain how the Python Asyncio event loop schedules coroutines versus OS-level worker threads under GIL contention. In a FastAPI microservice processing 50k req/min with mixed cryptographic hashing and async PostgreSQL MVCC queries, how would you architect task delegation to prevent event-loop starvation and ensure p99 latency stays under 15ms?
            </h1>

            {/* Code Block */}
            <div style={{ background: '#0d1117', border: '1px solid rgba(255, 255, 255, 0.1)', borderRadius: '12px', overflow: 'hidden' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '12px 16px', background: 'rgba(255, 255, 255, 0.03)', borderBottom: '1px solid rgba(255, 255, 255, 0.05)' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.75rem', color: '#cbd5e1' }}>
                  <Settings size={14} color="#94a3b8" /> fastapi_gateway_service.py (Target Code Under Review)
                </div>
                <div style={{ fontSize: '0.75rem', color: '#64748b' }}>Python 3.12 • uvloop</div>
              </div>
              <div style={{ padding: '16px', fontSize: '0.85rem', fontFamily: 'monospace', color: '#c9d1d9', lineHeight: 1.6, overflowX: 'auto' }}>
                <div><span style={{ color: '#d2a8ff' }}>@app.post</span>(<span style={{ color: '#a5d6ff' }}>"/verify-transaction"</span>)</div>
                <div><span style={{ color: '#ff7b72' }}>async def</span> <span style={{ color: '#d2a8ff' }}>handle_tx</span>(payload: TxPayload):</div>
                <div style={{ color: '#8b949e', paddingLeft: '16px' }}># Step 1: Compute Argon2 cryptographic fingerprint (CPU-bound)</div>
                <div style={{ paddingLeft: '16px' }}>digest = compute_crypto_hash(payload.raw_token)  <span style={{ color: '#ff7b72' }}>&lt;-- WARNING: BLOCKS EVENT LOOP</span></div>
                <br/>
                <div style={{ color: '#8b949e', paddingLeft: '16px' }}># Step 2: Read-committed async query under heavy MVCC contention</div>
                <div style={{ paddingLeft: '16px' }}>account_state = <span style={{ color: '#ff7b72' }}>await</span> db.fetch_row(query, payload.account_id)</div>
                <br/>
                <div style={{ paddingLeft: '16px' }}><span style={{ color: '#ff7b72' }}>return</span> &#123;<span style={{ color: '#a5d6ff' }}>"status"</span>: <span style={{ color: '#a5d6ff' }}>"processed"</span>, <span style={{ color: '#a5d6ff' }}>"digest"</span>: digest&#125;</div>
              </div>
            </div>
          </div>

          {/* Recording / Telemetry Box */}
          <div style={{ background: 'rgba(255, 255, 255, 0.02)', border: '1px solid rgba(255, 255, 255, 0.05)', borderRadius: '16px', padding: '24px', display: 'flex', flexDirection: 'column' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '24px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                <div style={{ background: '#ef4444', color: 'white', padding: '4px 12px', borderRadius: '100px', fontSize: '0.75rem', fontWeight: 700, display: 'flex', alignItems: 'center', gap: '6px' }}>
                  <div style={{ width: 6, height: 6, borderRadius: '50%', background: 'white' }} /> REC 01:42 / 03:00 max
                </div>
                <span style={{ fontSize: '0.8rem', color: '#cbd5e1' }}>Live Voice & Framing Capture</span>
              </div>
              <div style={{ display: 'flex', gap: '16px', fontSize: '0.75rem', color: '#cbd5e1' }}>
                <span style={{ display: 'flex', alignItems: 'center', gap: '6px' }}><Mic size={14} color="#38bdf8" /> -13.4 dB</span>
                <span style={{ display: 'flex', alignItems: 'center', gap: '6px' }}><Activity size={14} color="#34d399" /> Pace: 138 WPM (Optimal)</span>
              </div>
            </div>

            {/* Waveform Mockup */}
            <div style={{ background: '#0a0d14', border: '1px solid rgba(255, 255, 255, 0.05)', borderRadius: '12px', padding: '24px', marginBottom: '24px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
              <div style={{ alignSelf: 'flex-start', fontSize: '0.75rem', color: '#64748b', display: 'flex', alignItems: 'center', gap: '6px', marginBottom: '24px' }}>
                <Mic size={12} /> Microphone Stream: Scarlett 2i2 USB (Stereo In) <span style={{ marginLeft: 'auto', color: '#38bdf8', fontWeight: 600 }}>48.0 kHz • 24-bit PCM</span>
              </div>
              
              <div style={{ display: 'flex', alignItems: 'center', gap: '4px', height: '60px', width: '100%', justifyContent: 'center' }}>
                {[...Array(40)].map((_, i) => {
                  // Generate a varied wave pattern
                  const height = 10 + Math.random() * 50;
                  const isRecent = i > 25 && i < 35;
                  return (
                    <div key={i} style={{ width: '6px', height: `${height}px`, background: isRecent ? '#a5b4fc' : '#4f46e5', borderRadius: '100px', transition: 'height 0.1s ease' }} />
                  )
                })}
              </div>

              <div style={{ width: '100%', display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '24px', fontSize: '0.75rem' }}>
                <span style={{ color: '#38bdf8', fontWeight: 600 }}>Real-time clarity: 98.4%</span>
                <span style={{ color: '#cbd5e1' }}>Cadence: Steady & Analytical</span>
                <span style={{ color: '#94a3b8' }}>Remaining: 01:18</span>
              </div>
            </div>

            {/* Action Buttons */}
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <div style={{ display: 'flex', gap: '12px' }}>
                <button style={{ background: 'rgba(255, 255, 255, 0.05)', color: '#cbd5e1', border: '1px solid rgba(255, 255, 255, 0.1)', padding: '12px 20px', borderRadius: '100px', fontSize: '0.85rem', fontWeight: 600, display: 'flex', alignItems: 'center', gap: '8px', cursor: 'pointer' }}>
                  <PauseCircle size={16} /> Pause Recording
                </button>
                <button style={{ background: 'rgba(255, 255, 255, 0.05)', color: '#cbd5e1', border: '1px solid rgba(255, 255, 255, 0.1)', padding: '12px 20px', borderRadius: '100px', fontSize: '0.85rem', fontWeight: 600, display: 'flex', alignItems: 'center', gap: '8px', cursor: 'pointer' }}>
                  <RotateCcw size={16} /> Reset & Retake Q1
                </button>
              </div>
              <button style={{ background: 'linear-gradient(135deg, #7c3aed, #4f46e5)', color: 'white', border: 'none', padding: '14px 28px', borderRadius: '100px', fontSize: '0.95rem', fontWeight: 700, display: 'flex', alignItems: 'center', gap: '8px', cursor: 'pointer', boxShadow: '0 4px 14px rgba(99, 102, 241, 0.4)' }}>
                Finish & Submit Answer (Q1 of 5) &rarr;
              </button>
            </div>
          </div>

          {/* Candidate Private Scratchpad */}
          <div style={{ background: 'rgba(255, 255, 255, 0.02)', border: '1px solid rgba(255, 255, 255, 0.05)', borderRadius: '16px', padding: '20px' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px' }}>
              <h3 style={{ fontSize: '1rem', fontWeight: 700, margin: 0, display: 'flex', alignItems: 'center', gap: '8px' }}>
                <Settings size={16} /> Candidate Private Scratchpad <span style={{ fontSize: '0.65rem', background: 'rgba(255, 255, 255, 0.05)', color: '#94a3b8', padding: '2px 8px', borderRadius: '100px', fontWeight: 600 }}>Private to Candidate (Not graded by AI)</span>
              </h3>
              <ChevronUp size={16} color="#64748b" style={{ cursor: 'pointer' }} />
            </div>
            
            <div style={{ fontSize: '0.75rem', color: '#94a3b8', display: 'flex', alignItems: 'center', gap: '6px', marginBottom: '12px' }}>
              <Settings size={12} /> Markdown scratch space for mapping your architectural response before verbal delivery
            </div>

            <textarea 
              value={scratchpadText}
              onChange={(e) => setScratchpadText(e.target.value)}
              style={{ width: '100%', height: '100px', background: '#0a0d14', border: '1px solid rgba(255, 255, 255, 0.1)', borderRadius: '8px', padding: '12px', color: '#cbd5e1', fontSize: '0.85rem', fontFamily: 'monospace', lineHeight: 1.6, resize: 'vertical', outline: 'none' }}
            />

            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '12px', fontSize: '0.7rem', color: '#64748b' }}>
              <span>Auto-saved to local memory</span>
              <span>184 characters • Markdown supported</span>
            </div>
          </div>

        </div>

        {/* Right Column (Sidebar) */}
        <div style={{ flex: '0 0 340px', display: 'flex', flexDirection: 'column', gap: '16px' }}>
          
          {/* Candidate Video Stream */}
          <div style={{ background: 'rgba(255, 255, 255, 0.02)', border: '1px solid rgba(255, 255, 255, 0.05)', borderRadius: '16px', padding: '16px' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '12px' }}>
              <span style={{ fontSize: '0.75rem', fontWeight: 600, display: 'flex', alignItems: 'center', gap: '6px' }}>
                <div style={{ width: 6, height: 6, borderRadius: '50%', background: '#38bdf8' }} /> Candidate Video Stream
              </span>
              <span style={{ fontSize: '0.65rem', color: '#64748b' }}>1080p @ 30fps • FOV 78°</span>
            </div>
            
            <div style={{ position: 'relative', width: '100%', aspectRatio: '16/9', borderRadius: '12px', overflow: 'hidden', border: '1px solid rgba(255, 255, 255, 0.1)' }}>
              <img src="file:///C:/Users/hp/.gemini/antigravity-ide/brain/2378d22a-7282-40e8-afc1-fcc565196bde/candidate_video_feed_1789566058610.jpg" alt="Candidate" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              
              <div style={{ position: 'absolute', top: 8, left: 8, background: 'rgba(0, 0, 0, 0.6)', backdropFilter: 'blur(4px)', padding: '4px 8px', borderRadius: '100px', fontSize: '0.65rem', color: '#f8fafc', fontWeight: 600, display: 'flex', alignItems: 'center', gap: '4px' }}>
                <Maximize2 size={10} color="#38bdf8" /> Eye Contact: 94%
              </div>

              <div style={{ position: 'absolute', bottom: 8, left: 8, background: 'rgba(0, 0, 0, 0.6)', backdropFilter: 'blur(4px)', padding: '4px 8px', borderRadius: '6px', fontSize: '0.65rem', color: '#cbd5e1', fontWeight: 600 }}>
                Sarah J. • Staff Candidate
              </div>

              <div style={{ position: 'absolute', bottom: 8, right: 8, display: 'flex', gap: '6px' }}>
                <div style={{ width: 24, height: 24, borderRadius: '6px', background: 'rgba(0, 0, 0, 0.6)', backdropFilter: 'blur(4px)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <Mic size={12} color="white" />
                </div>
                <div style={{ width: 24, height: 24, borderRadius: '6px', background: 'rgba(0, 0, 0, 0.6)', backdropFilter: 'blur(4px)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <Video size={12} color="white" />
                </div>
              </div>
            </div>

            <div style={{ fontSize: '0.65rem', color: '#64748b', marginTop: '12px', display: 'flex', gap: '6px', lineHeight: 1.4 }}>
              <Shield size={12} color="#64748b" style={{ flexShrink: 0, marginTop: '2px' }} />
              Observable Framing Signals Only • Zero Emotion or Biometric Profiling
            </div>
          </div>

          {/* Elena M. (AI Interviewer) */}
          <div style={{ background: 'rgba(255, 255, 255, 0.02)', border: '1px solid rgba(255, 255, 255, 0.05)', borderRadius: '16px', padding: '16px' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px' }}>
              <span style={{ fontSize: '0.8rem', fontWeight: 700, display: 'flex', alignItems: 'center', gap: '6px' }}>
                <div style={{ width: 6, height: 6, borderRadius: '50%', background: '#a855f7' }} /> Elena M. (AI Interviewer)
              </span>
              <span style={{ fontSize: '0.65rem', background: '#a855f7', color: 'white', padding: '2px 8px', borderRadius: '100px', fontWeight: 700 }}>SYNTHETIC L6 PROCTOR</span>
            </div>

            <div style={{ background: '#0a0d14', border: '1px solid rgba(255, 255, 255, 0.05)', borderRadius: '12px', padding: '16px', marginBottom: '16px', display: 'flex', gap: '12px', alignItems: 'center' }}>
              <div style={{ width: 48, height: 48, borderRadius: '50%', background: 'rgba(168, 85, 247, 0.1)', border: '1px solid rgba(168, 85, 247, 0.3)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                <div style={{ width: 24, height: 24, borderRadius: '50%', background: '#a855f7', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <Play size={10} color="white" fill="white" />
                </div>
              </div>
              <div>
                <div style={{ fontSize: '0.7rem', color: '#38bdf8', fontWeight: 600, display: 'flex', alignItems: 'center', gap: '4px', marginBottom: '4px' }}>
                  <Activity size={12} /> Listening & Calibrating Speech Telemetry
                </div>
                <div style={{ fontSize: '0.75rem', color: '#cbd5e1', fontStyle: 'italic', lineHeight: 1.4 }}>
                  "Candidate explaining GIL execution boundaries and event loop offloading via..."
                </div>
              </div>
            </div>

            <div>
              <div style={{ fontSize: '0.65rem', color: '#64748b', fontWeight: 700, letterSpacing: '0.5px', marginBottom: '8px' }}>LIVE SPEECH TRANSCRIPTION STREAM</div>
              <div style={{ fontSize: '0.75rem', color: '#94a3b8', fontFamily: 'monospace', lineHeight: 1.5 }}>
                "...since Python's Global Interpreter Lock prevents concurrent bytecode execution, calling heavy Argon2 crypto directly in the async handler will freeze the main loop thread..."
              </div>
            </div>
          </div>

          {/* Simulation Roadmap */}
          <div style={{ background: 'rgba(255, 255, 255, 0.02)', border: '1px solid rgba(255, 255, 255, 0.05)', borderRadius: '16px', padding: '20px' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
              <h3 style={{ fontSize: '1rem', fontWeight: 700, margin: 0 }}>Simulation Roadmap</h3>
              <span style={{ fontSize: '0.75rem', color: '#a5b4fc', fontWeight: 600 }}>1/5 Active</span>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              {[
                { num: '1', title: 'Python Asyncio & GIL Starvation', active: true, sub: 'In Progress • Defense timer active' },
                { num: '2', title: 'Database Connection Pooling & Spike Contenti...', sub: 'Upcoming • Est. 3 mins' },
                { num: '3', title: 'Distributed Microservices & Circuit Breakers', sub: 'Upcoming • Est. 4 mins' },
                { num: '4', title: 'Backpressure & Idempotent Retry Policies', sub: 'Upcoming • Est. 3 mins' },
                { num: '5', title: 'System Trade-Offs & Cost-to-SLA Matrix', sub: 'Upcoming • Final Synthesis' },
              ].map((step, i) => (
                <div key={i} style={{ display: 'flex', gap: '12px', alignItems: 'flex-start' }}>
                  <div style={{ width: 24, height: 24, borderRadius: '50%', background: step.active ? '#a5b4fc' : 'rgba(255, 255, 255, 0.05)', color: step.active ? '#312e81' : '#64748b', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '0.75rem', fontWeight: 700, flexShrink: 0 }}>
                    {step.num}
                  </div>
                  <div>
                    <div style={{ fontSize: '0.8rem', fontWeight: step.active ? 700 : 500, color: step.active ? '#f8fafc' : '#94a3b8', marginBottom: '2px', display: 'flex', alignItems: 'center', gap: '8px' }}>
                      {step.title}
                      {step.active && <span style={{ fontSize: '0.6rem', background: '#38bdf8', color: '#0369a1', padding: '2px 6px', borderRadius: '4px', fontWeight: 800 }}>ACTIVE</span>}
                    </div>
                    <div style={{ fontSize: '0.7rem', color: step.active ? '#38bdf8' : '#64748b' }}>{step.sub}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Security Banner */}
          <div style={{ background: 'rgba(255, 255, 255, 0.02)', border: '1px solid rgba(255, 255, 255, 0.05)', borderRadius: '16px', padding: '16px', display: 'flex', gap: '12px', alignItems: 'flex-start' }}>
            <div style={{ width: 32, height: 32, borderRadius: '8px', background: 'rgba(255, 255, 255, 0.05)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
              <Lock size={16} color="#64748b" />
            </div>
            <div>
              <div style={{ fontSize: '0.75rem', fontWeight: 700, color: '#f8fafc', marginBottom: '4px' }}>256-Bit Vault Synced</div>
              <div style={{ fontSize: '0.7rem', color: '#94a3b8', lineHeight: 1.4 }}>Automatic 30-day purge or instant self-delete on debrief completion. SOC2 Type II compliance enforced.</div>
            </div>
          </div>

        </div>
      </div>

      {/* Footer */}
      <div style={{ padding: '16px 24px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderTop: '1px solid rgba(255, 255, 255, 0.05)', fontSize: '0.75rem', color: '#64748b' }}>
        <span>© 2025 Inprep AI Enterprise Simulation Engine. End-to-end encrypted session.</span>
        <div style={{ display: 'flex', gap: '24px' }}>
          <span style={{ cursor: 'pointer' }}>Session Telemetry</span>
          <span style={{ cursor: 'pointer' }}>Proctor Rules</span>
          <span style={{ cursor: 'pointer' }}>Audio Setup</span>
        </div>
      </div>

    </div>
  );
};

export default IntroRoomPage;
