import React from 'react';

interface InterviewTracksStepProps {
  onStartPractice: (role?: string) => void;
}

export const InterviewTracksStep: React.FC<InterviewTracksStepProps> = ({
  onStartPractice
}) => {
  return (
    <section style={{ padding: '60px 0 80px', position: 'relative' }}>
      <div className="container" style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 20px' }}>
        
        {/* Step Header */}
        <div style={{ textAlign: 'center', maxWidth: '780px', margin: '0 auto 48px' }}>
          <div style={{
            fontSize: '11px',
            fontWeight: 800,
            letterSpacing: '0.1em',
            textTransform: 'uppercase',
            color: '#818cf8',
            marginBottom: '10px'
          }}>
            STEP 04
          </div>
          <h2 style={{
            fontSize: 'clamp(28px, 3.5vw, 38px)',
            fontWeight: 700,
            color: '#ffffff',
            letterSpacing: '-0.02em',
            marginBottom: '12px'
          }}>
            4. Get Interviews Built Around You
          </h2>
          <p style={{
            fontSize: '15px',
            color: '#94a3b8',
            lineHeight: 1.6
          }}>
            Never sit through irrelevant generic question sets. Inprep dynamically generates custom tracks based on your verified strengths and target benchmarks.
          </p>
        </div>

        {/* 3 Track Cards */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
          gap: '24px'
        }}>
          {/* Card 1: AI / ML Engineer Track */}
          <div style={{
            background: '#0a0e18',
            border: '1px solid rgba(255, 255, 255, 0.08)',
            borderRadius: '20px',
            padding: '28px 24px',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            boxShadow: '0 12px 35px rgba(0, 0, 0, 0.4)',
            transition: 'all 0.25s ease'
          }}>
            <div>
              {/* Badge & Time Header */}
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '18px' }}>
                <span style={{
                  fontSize: '11.5px',
                  fontWeight: 600,
                  color: '#a5b4fc',
                  background: 'rgba(99, 102, 241, 0.15)',
                  border: '1px solid rgba(99, 102, 241, 0.25)',
                  padding: '3px 10px',
                  borderRadius: '6px'
                }}>
                  Strong Match 96%
                </span>
                <span style={{ fontSize: '12px', color: '#64748b' }}>
                  15 min
                </span>
              </div>

              {/* Title & Description */}
              <h3 style={{ fontSize: '18px', fontWeight: 700, color: '#ffffff', marginBottom: '10px' }}>
                AI / ML Engineer Track
              </h3>
              <p style={{ fontSize: '13px', color: '#94a3b8', lineHeight: 1.6, marginBottom: '22px' }}>
                Focuses on inference latency optimization, PyTorch serving pipelines, and concurrency challenges in transformer deployment.
              </p>

              {/* Focus Dimensions */}
              <div style={{ marginBottom: '22px' }}>
                <div style={{ fontSize: '10.5px', fontWeight: 700, color: '#64748b', textTransform: 'uppercase', letterSpacing: '0.06em', marginBottom: '8px' }}>
                  FOCUS DIMENSIONS:
                </div>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
                  {['PyTorch', 'Latency Slicing', 'vLLM'].map((tag) => (
                    <span key={tag} style={{
                      fontSize: '11px',
                      fontWeight: 500,
                      color: '#cbd5e1',
                      background: '#121726',
                      border: '1px solid rgba(255, 255, 255, 0.06)',
                      padding: '4px 10px',
                      borderRadius: '6px'
                    }}>
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Callout Box */}
              <div style={{
                background: '#060911',
                border: '1px solid rgba(255, 255, 255, 0.04)',
                borderRadius: '10px',
                padding: '12px 14px',
                marginBottom: '24px',
                fontSize: '12.5px',
                lineHeight: 1.5,
                color: '#94a3b8'
              }}>
                <span style={{ color: '#818cf8', fontWeight: 600 }}>Why this interview?</span> Matches your 3+ years experience building model serving endpoints.
              </div>
            </div>

            {/* Launch Button */}
            <button
              onClick={() => onStartPractice('AI / ML Engineer Track')}
              style={{
                width: '100%',
                padding: '12px',
                borderRadius: '10px',
                border: 'none',
                background: '#a5b4fc',
                color: '#090d16',
                fontSize: '13.5px',
                fontWeight: 700,
                cursor: 'pointer',
                transition: 'all 0.2s ease'
              }}
              onMouseEnter={(e) => { e.currentTarget.style.background = '#c7d2fe'; }}
              onMouseLeave={(e) => { e.currentTarget.style.background = '#a5b4fc'; }}
            >
              Launch 5-Question Session
            </button>
          </div>

          {/* Card 2: Python Backend Developer */}
          <div style={{
            background: '#0a0e18',
            border: '1px solid rgba(255, 255, 255, 0.08)',
            borderRadius: '20px',
            padding: '28px 24px',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            boxShadow: '0 12px 35px rgba(0, 0, 0, 0.4)',
            transition: 'all 0.25s ease'
          }}>
            <div>
              {/* Badge & Time Header */}
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '18px' }}>
                <span style={{
                  fontSize: '11.5px',
                  fontWeight: 600,
                  color: '#38bdf8',
                  background: 'rgba(56, 189, 248, 0.12)',
                  border: '1px solid rgba(56, 189, 248, 0.25)',
                  padding: '3px 10px',
                  borderRadius: '6px'
                }}>
                  High Match 92%
                </span>
                <span style={{ fontSize: '12px', color: '#64748b' }}>
                  14 min
                </span>
              </div>

              {/* Title & Description */}
              <h3 style={{ fontSize: '18px', fontWeight: 700, color: '#ffffff', marginBottom: '10px' }}>
                Python Backend Developer
              </h3>
              <p style={{ fontSize: '13px', color: '#94a3b8', lineHeight: 1.6, marginBottom: '22px' }}>
                Rigorous drills covering asynchronous architecture, FastAPI database connection pooling, and resilient worker systems.
              </p>

              {/* Focus Dimensions */}
              <div style={{ marginBottom: '22px' }}>
                <div style={{ fontSize: '10.5px', fontWeight: 700, color: '#64748b', textTransform: 'uppercase', letterSpacing: '0.06em', marginBottom: '8px' }}>
                  FOCUS DIMENSIONS:
                </div>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
                  {['Asyncio', 'FastAPI', 'Postgres Pool'].map((tag) => (
                    <span key={tag} style={{
                      fontSize: '11px',
                      fontWeight: 500,
                      color: '#cbd5e1',
                      background: '#121726',
                      border: '1px solid rgba(255, 255, 255, 0.06)',
                      padding: '4px 10px',
                      borderRadius: '6px'
                    }}>
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Callout Box */}
              <div style={{
                background: '#060911',
                border: '1px solid rgba(255, 255, 255, 0.04)',
                borderRadius: '10px',
                padding: '12px 14px',
                marginBottom: '24px',
                fontSize: '12.5px',
                lineHeight: 1.5,
                color: '#94a3b8'
              }}>
                <span style={{ color: '#38bdf8', fontWeight: 600 }}>Why this interview?</span> Targets core framework proficiency derived from recent project logs.
              </div>
            </div>

            {/* Launch Button */}
            <button
              onClick={() => onStartPractice('Python Backend Developer')}
              style={{
                width: '100%',
                padding: '12px',
                borderRadius: '10px',
                border: '1px solid rgba(255, 255, 255, 0.08)',
                background: '#182030',
                color: '#cbd5e1',
                fontSize: '13.5px',
                fontWeight: 600,
                cursor: 'pointer',
                transition: 'all 0.2s ease'
              }}
              onMouseEnter={(e) => { e.currentTarget.style.background = '#222d42'; e.currentTarget.style.color = '#ffffff'; }}
              onMouseLeave={(e) => { e.currentTarget.style.background = '#182030'; e.currentTarget.style.color = '#cbd5e1'; }}
            >
              Launch 5-Question Session
            </button>
          </div>

          {/* Card 3: Data Platform Engineer */}
          <div style={{
            background: '#0a0e18',
            border: '1px solid rgba(255, 255, 255, 0.08)',
            borderRadius: '20px',
            padding: '28px 24px',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            boxShadow: '0 12px 35px rgba(0, 0, 0, 0.4)',
            transition: 'all 0.25s ease'
          }}>
            <div>
              {/* Badge & Time Header */}
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '18px' }}>
                <span style={{
                  fontSize: '11.5px',
                  fontWeight: 600,
                  color: '#93c5fd',
                  background: 'rgba(59, 130, 246, 0.15)',
                  border: '1px solid rgba(59, 130, 246, 0.25)',
                  padding: '3px 10px',
                  borderRadius: '6px'
                }}>
                  Good Match 85%
                </span>
                <span style={{ fontSize: '12px', color: '#64748b' }}>
                  17 min
                </span>
              </div>

              {/* Title & Description */}
              <h3 style={{ fontSize: '18px', fontWeight: 700, color: '#ffffff', marginBottom: '10px' }}>
                Data Platform Engineer
              </h3>
              <p style={{ fontSize: '13px', color: '#94a3b8', lineHeight: 1.6, marginBottom: '22px' }}>
                Tests distributed stream processing resiliency, Apache Spark memory management, and exactly-once message delivery semantics.
              </p>

              {/* Focus Dimensions */}
              <div style={{ marginBottom: '22px' }}>
                <div style={{ fontSize: '10.5px', fontWeight: 700, color: '#64748b', textTransform: 'uppercase', letterSpacing: '0.06em', marginBottom: '8px' }}>
                  FOCUS DIMENSIONS:
                </div>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
                  {['Spark', 'Kafka', 'Data Lakehouse'].map((tag) => (
                    <span key={tag} style={{
                      fontSize: '11px',
                      fontWeight: 500,
                      color: '#cbd5e1',
                      background: '#121726',
                      border: '1px solid rgba(255, 255, 255, 0.06)',
                      padding: '4px 10px',
                      borderRadius: '6px'
                    }}>
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Callout Box */}
              <div style={{
                background: '#060911',
                border: '1px solid rgba(255, 255, 255, 0.04)',
                borderRadius: '10px',
                padding: '12px 14px',
                marginBottom: '24px',
                fontSize: '12.5px',
                lineHeight: 1.5,
                color: '#94a3b8'
              }}>
                <span style={{ color: '#818cf8', fontWeight: 600 }}>Why this interview?</span> Addresses senior-level distributed architecture criteria.
              </div>
            </div>

            {/* Launch Button */}
            <button
              onClick={() => onStartPractice('Data Platform Engineer')}
              style={{
                width: '100%',
                padding: '12px',
                borderRadius: '10px',
                border: '1px solid rgba(255, 255, 255, 0.08)',
                background: '#182030',
                color: '#cbd5e1',
                fontSize: '13.5px',
                fontWeight: 600,
                cursor: 'pointer',
                transition: 'all 0.2s ease'
              }}
              onMouseEnter={(e) => { e.currentTarget.style.background = '#222d42'; e.currentTarget.style.color = '#ffffff'; }}
              onMouseLeave={(e) => { e.currentTarget.style.background = '#182030'; e.currentTarget.style.color = '#cbd5e1'; }}
            >
              Launch 5-Question Session
            </button>
          </div>
        </div>

      </div>
    </section>
  );
};

