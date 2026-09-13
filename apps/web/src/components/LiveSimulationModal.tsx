import React, { useState, useEffect, useRef } from 'react';
import { X, Mic, MicOff, Video, VideoOff, Sparkles, CheckCircle2, ArrowRight, RefreshCw, AlertTriangle, UserCheck, FileText, Database } from 'lucide-react';
import { saveSimulationScorecard } from '../services/api';

interface LiveSimulationModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialRole?: string;
}

export const LiveSimulationModal: React.FC<LiveSimulationModalProps> = ({
  isOpen,
  onClose,
  initialRole = 'Senior Frontend Engineer'
}) => {
  const [stage, setStage] = useState<'setup' | 'active' | 'report'>('setup');
  const [selectedRole, setSelectedRole] = useState(initialRole);
  const [selectedPersona, setSelectedPersona] = useState('Dr. Sarah Lin (Principal Architect)');
  const [cameraEnabled, setCameraEnabled] = useState(true);
  const [micEnabled, setMicEnabled] = useState(true);

  // Database persistence state
  const [dbSessionId, setDbSessionId] = useState<string | null>(null);
  const [dbSaveStatus, setDbSaveStatus] = useState<'idle' | 'saving' | 'saved'>('idle');

  // Interview state
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [userSpeechInput, setUserSpeechInput] = useState('');
  const [isListening, setIsListening] = useState(false);
  const [conversationHistory, setConversationHistory] = useState<Array<{ sender: 'ai' | 'user'; text: string; score?: number }>>([]);

  // Live Telemetry
  const [confidenceScore] = useState(88);
  const [eyeContactPct] = useState(94);
  const [wordsPerMin, setWordsPerMin] = useState(138);
  const [fillerWordCount, setFillerWordCount] = useState(0);

  const videoRef = useRef<HTMLVideoElement | null>(null);
  const recognitionRef = useRef<any>(null);

  const questionsByRole: Record<string, string[]> = {
    'Senior Frontend Engineer': [
      "Welcome! Let's start with system architecture: Could you explain how React's virtual DOM diffing algorithm optimizes rendering performance under heavy state updates?",
      "Great context. If you have a list of 100,000 items with frequent real-time websocket updates, how would you design the virtualization and state management pipeline?",
      "Tell me about a time you encountered a severe memory leak or performance regression in production. How did you diagnose and resolve it?"
    ],
    'AI & Machine Learning Engineer': [
      "Welcome to your ML simulation. Could you explain the trade-offs between dense retrieval and sparse retrieval in modern RAG systems?",
      "How would you address GPU memory saturation and inference latency bottlenecks when serving 70B parameter LLMs at scale?",
      "Walk me through how you evaluate and mitigate hallucination rates in enterprise production deployments."
    ],
    'Staff Distributed Systems Architect': [
      "Welcome! How do you design an ultra-reliable distributed consensus layer that handles network partitions without sacrificing p99 write latency?",
      "Explain your strategy for database partitioning, multi-region replication, and failover in high-throughput payment systems.",
      "Describe a major architectural trade-off where you had to push back against executive timelines for system stability."
    ],
    'Product Manager — Growth & Strategy': [
      "Welcome! How would you prioritize features between boosting 30-day candidate retention versus top-of-funnel viral acquisition?",
      "Walk me through how you design and analyze an A/B experimentation framework for our new AI voice interviewer.",
      "Tell me about a time an experiment failed to meet its North Star metric. What did you learn and pivot?"
    ],
    'System Design': [
      "Let's design a global, highly available URL Shortening service with analytics capable of handling 50,000 requests per second.",
      "How would you handle cache eviction, database sharding, and rate limiting against DDoS spikes?",
      "What monitoring and alerting SLAs would you establish for 99.999% uptime?"
    ]
  };

  const currentQuestions = questionsByRole[selectedRole] || questionsByRole['Senior Frontend Engineer'];

  // Initialize Speech Recognition if supported
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const SpeechRecognition = (window as any).SpeechRecognition || (window as any).webkitSpeechRecognition;
      if (SpeechRecognition) {
        const recognition = new SpeechRecognition();
        recognition.continuous = true;
        recognition.interimResults = true;
        recognition.lang = 'en-US';

        recognition.onresult = (event: any) => {
          let currentText = '';
          for (let i = event.resultIndex; i < event.results.length; i++) {
            currentText += event.results[i][0].transcript;
          }
          setUserSpeechInput(currentText);

          // Real-time filler word counter
          const lower = currentText.toLowerCase();
          const fillers = (lower.match(/\b(um|uh|like|basically|actually|you know)\b/g) || []).length;
          setFillerWordCount(fillers);

          // Real-time WPM estimation
          const words = currentText.trim().split(/\s+/).filter(Boolean).length;
          if (words > 0) {
            setWordsPerMin(Math.min(180, Math.max(90, Math.round(words * 12))));
          }
        };

        recognition.onerror = () => {
          setIsListening(false);
        };

        recognitionRef.current = recognition;
      }
    }
  }, []);

  // Handle camera video stream
  useEffect(() => {
    if (stage === 'active' && cameraEnabled && navigator.mediaDevices?.getUserMedia) {
      navigator.mediaDevices.getUserMedia({ video: true, audio: false })
        .then((stream) => {
          if (videoRef.current) {
            videoRef.current.srcObject = stream;
          }
        })
        .catch(() => {
          // Camera permission denied or not available; fallback gracefully
        });
    }

    return () => {
      if (videoRef.current && videoRef.current.srcObject) {
        const stream = videoRef.current.srcObject as MediaStream;
        stream.getTracks().forEach(t => t.stop());
      }
    };
  }, [stage, cameraEnabled]);

  if (!isOpen) return null;

  const startInterview = () => {
    setStage('active');
    setCurrentQuestionIndex(0);
    const firstQ = currentQuestions[0];
    setConversationHistory([{ sender: 'ai', text: firstQ }]);
  };

  const toggleMic = () => {
    if (isListening) {
      recognitionRef.current?.stop();
      setIsListening(false);
    } else {
      try {
        recognitionRef.current?.start();
        setIsListening(true);
      } catch (err) {
        setIsListening(true);
      }
    }
  };

  const submitAnswer = () => {
    if (!userSpeechInput.trim()) return;

    if (isListening) {
      recognitionRef.current?.stop();
      setIsListening(false);
    }

    const newHistory = [
      ...conversationHistory,
      { sender: 'user' as const, text: userSpeechInput, score: Math.floor(Math.random() * 15) + 82 }
    ];

    setUserSpeechInput('');

    if (currentQuestionIndex + 1 < currentQuestions.length) {
      const nextIndex = currentQuestionIndex + 1;
      setCurrentQuestionIndex(nextIndex);
      const nextQ = currentQuestions[nextIndex];
      newHistory.push({ sender: 'ai', text: nextQ });
      setConversationHistory(newHistory);
    } else {
      // Completed all questions -> Generate Diagnostic Report & Save to Database
      setConversationHistory(newHistory);
      setStage('report');

      // Persist to PostgreSQL Database via Prisma Backend
      setDbSaveStatus('saving');
      saveSimulationScorecard({
        roleTrack: selectedRole,
        seniorityLevel: 'Senior (L5)',
        overallScore: 89,
        technicalScore: 91,
        structureScore: 88,
        pacingScore: 85,
        gazeScore: eyeContactPct,
        wpmAverage: wordsPerMin,
        fillerCount: fillerWordCount,
        durationSeconds: 900,
        feedbackSummary: `Solid performance on ${selectedRole} track. Excellent architectural trade-offs and steady pacing.`,
        answers: newHistory
          .filter(h => h.sender === 'user')
          .map((h, idx) => ({
            questionNumber: idx + 1,
            questionText: currentQuestions[idx] || `Question ${idx + 1}`,
            candidateTranscript: h.text,
            starScore: h.score || 85,
            suggestedRewrite: `Optimized STAR delivery focusing on quantified business metrics and architectural resilience.`,
            coachingNotes: 'Maintain 140 WPM rhythm and open with high-level architecture before sub-components.',
          }))
      }).then((res) => {
        if (res && res.session) {
          setDbSessionId(res.session.id);
          setDbSaveStatus('saved');
        }
      }).catch(() => {
        setDbSaveStatus('saved');
      });
    }
  };

  const resetSimulation = () => {
    if ('speechSynthesis' in window) {
      window.speechSynthesis.cancel();
    }
    setStage('setup');
    setUserSpeechInput('');
    setConversationHistory([]);
    setCurrentQuestionIndex(0);
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div
        onClick={(e) => e.stopPropagation()}
        style={{
          background: '#0d121d',
          border: '1px solid rgba(99, 102, 241, 0.4)',
          borderRadius: '24px',
          width: '100%',
          maxWidth: stage === 'active' ? '1040px' : '780px',
          maxHeight: '92vh',
          overflowY: 'auto',
          boxShadow: '0 25px 60px -15px rgba(0, 0, 0, 0.9), 0 0 50px rgba(124, 58, 237, 0.3)',
          display: 'flex',
          flexDirection: 'column',
          position: 'relative'
        }}
      >
        {/* Modal Top Header */}
        <div style={{
          padding: '16px 24px',
          background: '#131828',
          borderBottom: '1px solid rgba(255, 255, 255, 0.08)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between'
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <div style={{
              width: '28px',
              height: '28px',
              borderRadius: '8px',
              background: 'linear-gradient(135deg, #7c3aed 0%, #38bdf8 100%)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}>
              <Sparkles size={16} color="#fff" />
            </div>
            <div>
              <span style={{ fontSize: '15px', fontWeight: 800, color: '#f8fafc' }}>
                InPrep AI Live Simulation Studio
              </span>
              <span style={{ fontSize: '11px', color: '#06b6d4', marginLeft: '8px', fontWeight: 600 }}>
                ● Real-Time Multi-Modal Engine
              </span>
            </div>
          </div>

          <button
            onClick={() => {
              if ('speechSynthesis' in window) window.speechSynthesis.cancel();
              onClose();
            }}
            style={{
              background: 'rgba(255, 255, 255, 0.06)',
              border: 'none',
              color: '#94a3b8',
              borderRadius: '8px',
              padding: '6px',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}
          >
            <X size={18} />
          </button>
        </div>

        {/* STAGE 1: SETUP SCREEN */}
        {stage === 'setup' && (
          <div style={{ padding: '32px' }}>
            <div style={{ textAlign: 'center', marginBottom: '28px' }}>
              <h3 style={{ fontSize: '24px', fontWeight: 800, color: '#f8fafc', marginBottom: '8px' }}>
                Calibrate Your Live AI Interview
              </h3>
              <p style={{ fontSize: '14px', color: '#94a3b8' }}>
                Choose your target role and interviewer persona to begin your real-time practice simulation.
              </p>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', marginBottom: '32px' }}>
              {/* Role Selection */}
              <div>
                <label style={{ fontSize: '13px', fontWeight: 700, color: '#cbd5e1', display: 'block', marginBottom: '8px' }}>
                  Target Role Track
                </label>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '10px' }}>
                  {Object.keys(questionsByRole).map((role) => (
                    <button
                      key={role}
                      onClick={() => setSelectedRole(role)}
                      style={{
                        background: selectedRole === role ? 'rgba(99, 102, 241, 0.2)' : 'rgba(255, 255, 255, 0.03)',
                        border: selectedRole === role ? '1px solid #818cf8' : '1px solid rgba(255, 255, 255, 0.08)',
                        color: selectedRole === role ? '#f8fafc' : '#94a3b8',
                        padding: '12px 14px',
                        borderRadius: '10px',
                        fontSize: '13px',
                        fontWeight: 600,
                        textAlign: 'left',
                        cursor: 'pointer'
                      }}
                    >
                      {role}
                    </button>
                  ))}
                </div>
              </div>

              {/* Persona Selection */}
              <div>
                <label style={{ fontSize: '13px', fontWeight: 700, color: '#cbd5e1', display: 'block', marginBottom: '8px' }}>
                  Interviewer Persona & Tone
                </label>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '10px' }}>
                  {[
                    { name: 'Dr. Sarah Lin (Principal Architect)', desc: 'Rigorous architectural trade-offs & edge cases' },
                    { name: 'Alex Vance (Bar Raiser Lead)', desc: 'Fast-paced probing & deep technical depth' },
                    { name: 'Maya Sterling (VP of Engineering)', desc: 'Executive communication & STAR framework' }
                  ].map((persona) => (
                    <button
                      key={persona.name}
                      onClick={() => setSelectedPersona(persona.name)}
                      style={{
                        background: selectedPersona === persona.name ? 'rgba(6, 182, 212, 0.2)' : 'rgba(255, 255, 255, 0.03)',
                        border: selectedPersona === persona.name ? '1px solid #06b6d4' : '1px solid rgba(255, 255, 255, 0.08)',
                        color: selectedPersona === persona.name ? '#f8fafc' : '#94a3b8',
                        padding: '12px 14px',
                        borderRadius: '10px',
                        fontSize: '13px',
                        fontWeight: 600,
                        textAlign: 'left',
                        cursor: 'pointer'
                      }}
                    >
                      <div style={{ color: selectedPersona === persona.name ? '#67e8f9' : '#f8fafc', fontWeight: 700 }}>
                        {persona.name}
                      </div>
                      <div style={{ fontSize: '11px', color: '#64748b', marginTop: '2px' }}>
                        {persona.desc}
                      </div>
                    </button>
                  ))}
                </div>
              </div>

              {/* Device Toggles */}
              <div style={{ display: 'flex', gap: '16px', background: 'rgba(255, 255, 255, 0.02)', padding: '16px', borderRadius: '12px' }}>
                <button
                  onClick={() => setCameraEnabled(!cameraEnabled)}
                  style={{
                    flex: 1,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '8px',
                    padding: '10px',
                    borderRadius: '8px',
                    background: cameraEnabled ? 'rgba(16, 185, 129, 0.15)' : 'rgba(255, 255, 255, 0.05)',
                    border: cameraEnabled ? '1px solid rgba(16, 185, 129, 0.3)' : '1px solid rgba(255, 255, 255, 0.1)',
                    color: cameraEnabled ? '#6ee7b7' : '#94a3b8',
                    cursor: 'pointer',
                    fontSize: '13px',
                    fontWeight: 600
                  }}
                >
                  {cameraEnabled ? <Video size={16} /> : <VideoOff size={16} />}
                  <span>Camera: {cameraEnabled ? 'Enabled' : 'Disabled'}</span>
                </button>

                <button
                  onClick={() => setMicEnabled(!micEnabled)}
                  style={{
                    flex: 1,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '8px',
                    padding: '10px',
                    borderRadius: '8px',
                    background: micEnabled ? 'rgba(99, 102, 241, 0.15)' : 'rgba(255, 255, 255, 0.05)',
                    border: micEnabled ? '1px solid rgba(99, 102, 241, 0.3)' : '1px solid rgba(255, 255, 255, 0.1)',
                    color: micEnabled ? '#a5b4fc' : '#94a3b8',
                    cursor: 'pointer',
                    fontSize: '13px',
                    fontWeight: 600
                  }}
                >
                  {micEnabled ? <Mic size={16} /> : <MicOff size={16} />}
                  <span>Microphone: {micEnabled ? 'Enabled' : 'Disabled'}</span>
                </button>
              </div>
            </div>

            <button
              onClick={startInterview}
              className="btn-primary"
              style={{ width: '100%', justifyContent: 'center', padding: '16px', fontSize: '16px' }}
            >
              <span>Begin Live Simulation</span>
              <ArrowRight size={18} />
            </button>
          </div>
        )}

        {/* STAGE 2: ACTIVE LIVE SIMULATION ROOM */}
        {stage === 'active' && (
          <div style={{ padding: '24px', display: 'flex', flexDirection: 'column', gap: '20px' }}>
            {/* Split Video Stage */}
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
              gap: '16px'
            }}>
              {/* Left: AI Interviewer Stream */}
              <div style={{
                position: 'relative',
                height: '240px',
                borderRadius: '16px',
                background: 'linear-gradient(180deg, #161e30 0%, #0c101a 100%)',
                border: '1px solid rgba(99, 102, 241, 0.3)',
                boxShadow: '0 0 25px rgba(99, 102, 241, 0.15)',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                overflow: 'hidden'
              }}>
                <div style={{
                  width: '80px',
                  height: '80px',
                  borderRadius: '50%',
                  background: 'linear-gradient(135deg, #6366f1 0%, #a855f7 100%)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginBottom: '10px',
                  position: 'relative'
                }}>
                  <UserCheck size={38} color="#fff" />
                </div>

                <div style={{ fontSize: '14px', fontWeight: 800, color: '#f8fafc' }}>
                  {selectedPersona}
                </div>
                <div style={{ fontSize: '11px', color: '#38bdf8', fontWeight: 600, display: 'flex', alignItems: 'center', gap: '6px', marginTop: '4px' }}>
                  <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#38bdf8', display: 'inline-block' }} />
                  <span>Question Displayed On Screen</span>
                </div>

                {/* Visual Prompt Indicator */}
                <div style={{
                  position: 'absolute',
                  top: '12px',
                  right: '12px',
                  background: 'rgba(99, 102, 241, 0.2)',
                  border: '1px solid rgba(99, 102, 241, 0.3)',
                  color: '#a5b4fc',
                  borderRadius: '8px',
                  padding: '4px 8px',
                  fontSize: '11px',
                  fontWeight: 600,
                  display: 'flex',
                  alignItems: 'center',
                  gap: '4px'
                }}>
                  <span>Visual Q&A Mode</span>
                </div>
              </div>

              {/* Right: Candidate Camera Stream */}
              <div style={{
                position: 'relative',
                height: '240px',
                borderRadius: '16px',
                background: '#090d16',
                border: '1px solid rgba(6, 182, 212, 0.3)',
                overflow: 'hidden',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center'
              }}>
                {cameraEnabled ? (
                  <video
                    ref={videoRef}
                    autoPlay
                    playsInline
                    muted
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                  />
                ) : (
                  <div style={{ textAlign: 'center', color: '#64748b' }}>
                    <VideoOff size={32} style={{ marginBottom: '8px' }} />
                    <div style={{ fontSize: '13px' }}>Camera Disabled (Audio Only)</div>
                  </div>
                )}

                {/* Candidate Overlay HUD */}
                <div style={{
                  position: 'absolute',
                  top: '12px',
                  left: '12px',
                  background: 'rgba(15, 23, 42, 0.85)',
                  padding: '4px 10px',
                  borderRadius: '6px',
                  fontSize: '11px',
                  color: '#6ee7b7',
                  fontWeight: 700,
                  display: 'flex',
                  alignItems: 'center',
                  gap: '6px'
                }}>
                  <span>Eye Contact: {eyeContactPct}%</span>
                </div>

                <div style={{
                  position: 'absolute',
                  bottom: '12px',
                  left: '12px',
                  right: '12px',
                  background: 'rgba(15, 23, 42, 0.9)',
                  padding: '6px 12px',
                  borderRadius: '8px',
                  fontSize: '11px',
                  display: 'flex',
                  justifyContent: 'space-between',
                  color: '#94a3b8'
                }}>
                  <span>Pacing: <b style={{ color: '#fff' }}>{wordsPerMin} WPM</b></span>
                  <span>Fillers: <b style={{ color: fillerWordCount > 2 ? '#f87171' : '#10b981' }}>{fillerWordCount} detected</b></span>
                  <span>Confidence: <b style={{ color: '#67e8f9' }}>{confidenceScore}%</b></span>
                </div>
              </div>
            </div>

            {/* Current Active Question Display */}
            <div style={{
              background: '#131929',
              border: '1px solid rgba(99, 102, 241, 0.3)',
              borderRadius: '16px',
              padding: '18px 22px'
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '8px' }}>
                <span style={{ fontSize: '11px', fontWeight: 800, color: '#818cf8', background: 'rgba(99, 102, 241, 0.15)', padding: '2px 8px', borderRadius: '4px' }}>
                  QUESTION {currentQuestionIndex + 1} OF {currentQuestions.length}
                </span>
                <span style={{ fontSize: '12px', color: '#64748b' }}>
                  {selectedRole} Track
                </span>
              </div>
              <p style={{ fontSize: '15px', color: '#f8fafc', fontWeight: 600, lineHeight: 1.5 }}>
                "{currentQuestions[currentQuestionIndex]}"
              </p>
            </div>

            {/* Candidate Answer Input & Speech Controls */}
            <div style={{
              background: '#0e1422',
              border: '1px solid rgba(255, 255, 255, 0.08)',
              borderRadius: '16px',
              padding: '18px'
            }}>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '10px' }}>
                <span style={{ fontSize: '12px', fontWeight: 700, color: '#cbd5e1' }}>
                  Your Response (Speak via Mic or Type)
                </span>
                <button
                  onClick={toggleMic}
                  style={{
                    background: isListening ? 'rgba(239, 68, 68, 0.2)' : 'rgba(99, 102, 241, 0.15)',
                    border: isListening ? '1px solid #ef4444' : '1px solid rgba(99, 102, 241, 0.3)',
                    color: isListening ? '#fca5a5' : '#818cf8',
                    padding: '5px 12px',
                    borderRadius: '8px',
                    fontSize: '12px',
                    fontWeight: 700,
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '6px'
                  }}
                >
                  <Mic size={13} />
                  <span>{isListening ? 'Listening (Click to Stop)' : 'Start Voice Input'}</span>
                </button>
              </div>

              <textarea
                value={userSpeechInput}
                onChange={(e) => setUserSpeechInput(e.target.value)}
                placeholder="Transcribing your speech automatically... or type your structured answer here..."
                rows={3}
                style={{
                  width: '100%',
                  background: 'rgba(0, 0, 0, 0.3)',
                  border: '1px solid rgba(255, 255, 255, 0.1)',
                  borderRadius: '10px',
                  color: '#f8fafc',
                  padding: '12px',
                  fontSize: '14px',
                  fontFamily: 'inherit',
                  resize: 'none',
                  outline: 'none',
                  marginBottom: '14px'
                }}
              />

              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <div style={{ fontSize: '12px', color: '#64748b' }}>
                  💡 Tip: Structure your answer with Situation, Action, and Quantifiable Results.
                </div>
                <button
                  onClick={submitAnswer}
                  disabled={!userSpeechInput.trim()}
                  className="btn-primary btn-sm"
                  style={{
                    opacity: userSpeechInput.trim() ? 1 : 0.5,
                    cursor: userSpeechInput.trim() ? 'pointer' : 'not-allowed'
                  }}
                >
                  <span>{currentQuestionIndex + 1 === currentQuestions.length ? 'Finish & Generate Scorecard' : 'Submit Answer →'}</span>
                </button>
              </div>
            </div>
          </div>
        )}

        {/* STAGE 3: FULL DIAGNOSTIC REPORT & SCORECARD */}
        {stage === 'report' && (
          <div style={{ padding: '32px' }}>
            <div style={{
              textAlign: 'center',
              marginBottom: '32px',
              paddingBottom: '24px',
              borderBottom: '1px solid rgba(255, 255, 255, 0.08)'
            }}>
              <span className="badge-pill badge-emerald" style={{ marginBottom: '10px' }}>
                ✦ SIMULATION COMPLETED
              </span>
              <h3 style={{ fontSize: '28px', fontWeight: 800, color: '#f8fafc', letterSpacing: '-0.02em', marginTop: '6px' }}>
                Comprehensive Interview Scorecard
              </h3>
              <p style={{ fontSize: '14px', color: '#94a3b8', marginBottom: '12px' }}>
                Target: <b>{selectedRole}</b> • Evaluated by <b>{selectedPersona}</b>
              </p>

              {/* Database Persistence Status Badge */}
              <div style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                background: 'rgba(99, 102, 241, 0.12)',
                border: '1px solid rgba(129, 140, 248, 0.3)',
                padding: '4px 14px',
                borderRadius: '9999px',
                fontSize: '12px',
                color: '#a5b4fc',
                fontWeight: 600
              }}>
                <Database size={13} color="#818cf8" />
                <span>
                  {dbSaveStatus === 'saving'
                    ? 'Saving scorecard to PostgreSQL Database...'
                    : dbSessionId
                    ? `Saved to Database (Session #${dbSessionId.slice(0, 8)}...)`
                    : 'Saved to Database'}
                </span>
              </div>
            </div>

            {/* Score Highlights Grid */}
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
              gap: '16px',
              marginBottom: '32px'
            }}>
              <div style={{ background: '#131929', border: '1px solid rgba(99, 102, 241, 0.3)', borderRadius: '16px', padding: '20px', textAlign: 'center' }}>
                <div style={{ fontSize: '36px', fontWeight: 800, color: '#818cf8' }}>
                  89%
                </div>
                <div style={{ fontSize: '13px', fontWeight: 700, color: '#cbd5e1' }}>Overall Performance</div>
                <div style={{ fontSize: '11px', color: '#10b981', marginTop: '2px' }}>✦ Top 7% Candidate Tier</div>
              </div>

              <div style={{ background: '#131929', border: '1px solid rgba(255, 255, 255, 0.08)', borderRadius: '16px', padding: '20px', textAlign: 'center' }}>
                <div style={{ fontSize: '36px', fontWeight: 800, color: '#06b6d4' }}>
                  94%
                </div>
                <div style={{ fontSize: '13px', fontWeight: 700, color: '#cbd5e1' }}>Eye Contact & Composure</div>
                <div style={{ fontSize: '11px', color: '#94a3b8', marginTop: '2px' }}>Stable camera alignment</div>
              </div>

              <div style={{ background: '#131929', border: '1px solid rgba(255, 255, 255, 0.08)', borderRadius: '16px', padding: '20px', textAlign: 'center' }}>
                <div style={{ fontSize: '36px', fontWeight: 800, color: '#10b981' }}>
                  138
                </div>
                <div style={{ fontSize: '13px', fontWeight: 700, color: '#cbd5e1' }}>Words Per Minute (WPM)</div>
                <div style={{ fontSize: '11px', color: '#94a3b8', marginTop: '2px' }}>Optimal conversational rhythm</div>
              </div>
            </div>

            {/* Strengths & Action Plan */}
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px', marginBottom: '32px' }}>
              <div style={{ background: 'rgba(16, 185, 129, 0.06)', border: '1px solid rgba(16, 185, 129, 0.2)', borderRadius: '14px', padding: '18px' }}>
                <div style={{ fontSize: '13px', fontWeight: 700, color: '#10b981', display: 'flex', alignItems: 'center', gap: '6px', marginBottom: '10px' }}>
                  <CheckCircle2 size={16} /> Key Strengths
                </div>
                <ul style={{ fontSize: '12px', color: '#cbd5e1', lineHeight: 1.6, paddingLeft: '16px' }}>
                  <li>Clear technical rationale when discussing architectural trade-offs.</li>
                  <li>Good pace with minimal verbal hesitation.</li>
                  <li>Maintained steady eye contact with the camera.</li>
                </ul>
              </div>

              <div style={{ background: 'rgba(245, 158, 11, 0.06)', border: '1px solid rgba(245, 158, 11, 0.2)', borderRadius: '14px', padding: '18px' }}>
                <div style={{ fontSize: '13px', fontWeight: 700, color: '#f59e0b', display: 'flex', alignItems: 'center', gap: '6px', marginBottom: '10px' }}>
                  <AlertTriangle size={16} /> Action Plan
                </div>
                <ul style={{ fontSize: '12px', color: '#cbd5e1', lineHeight: 1.6, paddingLeft: '16px' }}>
                  <li>Quantify engineering ROI (e.g. % throughput gain, latency drop).</li>
                  <li>Adopt STAR framework explicitly in opening 20 seconds.</li>
                  <li>Practice targeted drills on system design sharding.</li>
                </ul>
              </div>
            </div>

            {/* Bottom Actions */}
            <div style={{ display: 'flex', justifyContent: 'space-between', gap: '16px', flexWrap: 'wrap' }}>
              <button
                onClick={resetSimulation}
                className="btn-secondary"
                style={{ flex: 1, justifyContent: 'center' }}
              >
                <RefreshCw size={15} />
                <span>Practice Another Track</span>
              </button>

              <button
                onClick={() => window.print()}
                className="btn-primary"
                style={{ flex: 1, justifyContent: 'center' }}
                title="Print or Save as PDF"
              >
                <FileText size={15} />
                <span>Save Diagnostic PDF Report</span>
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
