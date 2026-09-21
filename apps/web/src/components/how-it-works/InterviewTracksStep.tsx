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
            color: 'var(--primary-color)',
            marginBottom: '10px'
          }}>
            STEP 04
          </div>
          <h2 style={{
            fontSize: 'clamp(28px, 3.5vw, 38px)',
            fontWeight: 700,
            color: 'var(--text-main)',
            letterSpacing: '-0.02em',
            marginBottom: '12px'
          }}>
            4. Get Interviews Built Around You
          </h2>
          <p style={{
            fontSize: '15px',
            color: 'var(--text-secondary)',
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
            background: 'var(--bg-card)',
            border: '1px solid rgba(99, 102, 241, 0.35)',
            borderRadius: '20px',
            padding: '28px 24px',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            boxShadow: 'var(--shadow-md)',
            transition: 'all 0.25s ease'
          }}>
            <div>
              {/* Badge & Time Header */}
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '18px' }}>
                <span style={{
                  fontSize: '11.5px',
                  fontWeight: 700,
                  color: 'var(--primary-color)',
                  background: 'rgba(99, 102, 241, 0.12)',
                  border: '1px solid rgba(99, 102, 241, 0.25)',
                  padding: '3px 10px',
                  borderRadius: '6px'
                }}>
                  Strong Match 96%
                </span>
                <span style={{ fontSize: '12px', color: 'var(--text-muted)', fontWeight: 500 }}>
                  15 min
                </span>
              </div>

              {/* Title & Description */}
              <h3 style={{ fontSize: '18px', fontWeight: 700, color: 'var(--text-main)', marginBottom: '10px' }}>
                AI / ML Engineer Track
              </h3>
              <p style={{ fontSize: '13px', color: 'var(--text-secondary)', lineHeight: 1.6, marginBottom: '22px' }}>
                Focuses on inference latency optimization, PyTorch serving pipelines, and concurrency challenges in transformer deployment.
              </p>

              {/* Focus Dimensions */}
              <div style={{ marginBottom: '22px' }}>
                <div style={{ fontSize: '10.5px', fontWeight: 700, color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.06em', marginBottom: '8px' }}>
                  FOCUS DIMENSIONS:
                </div>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
                  {['PyTorch', 'Latency Slicing', 'vLLM'].map((tag) => (
                    <span key={tag} style={{
                      fontSize: '11px',
                      fontWeight: 600,
                      color: 'var(--text-main)',
                      background: 'var(--bg-surface)',
                      border: '1px solid var(--border-subtle)',
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
                background: 'var(--bg-surface)',
                border: '1px solid var(--border-subtle)',
                borderRadius: '10px',
                padding: '12px 14px',
                marginBottom: '24px',
                fontSize: '12.5px',
                lineHeight: 1.5,
                color: 'var(--text-secondary)'
              }}>
                <span style={{ color: 'var(--primary-color)', fontWeight: 600 }}>Why this interview?</span> Matches your 3+ years experience building model serving endpoints.
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
                background: 'linear-gradient(135deg, #6366f1 0%, #a855f7 100%)',
                color: '#ffffff',
                fontSize: '13.5px',
                fontWeight: 700,
                cursor: 'pointer',
                boxShadow: '0 4px 14px rgba(99, 102, 241, 0.35)',
                transition: 'all 0.2s ease'
              }}
              onMouseEnter={(e) => { e.currentTarget.style.opacity = '0.9'; e.currentTarget.style.transform = 'translateY(-1px)'; }}
              onMouseLeave={(e) => { e.currentTarget.style.opacity = '1'; e.currentTarget.style.transform = 'translateY(0)'; }}
            >
              Launch 5-Question Session
            </button>
          </div>

          {/* Card 2: Python Backend Developer */}
          <div style={{
            background: 'var(--bg-card)',
            border: '1px solid var(--border-subtle)',
            borderRadius: '20px',
            padding: '28px 24px',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            boxShadow: 'var(--shadow-md)',
            transition: 'all 0.25s ease'
          }}>
            <div>
              {/* Badge & Time Header */}
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '18px' }}>
                <span style={{
                  fontSize: '11.5px',
                  fontWeight: 700,
                  color: '#0284c7',
                  background: 'rgba(2, 132, 199, 0.12)',
                  border: '1px solid rgba(2, 132, 199, 0.25)',
                  padding: '3px 10px',
                  borderRadius: '6px'
                }}>
                  High Match 92%
                </span>
                <span style={{ fontSize: '12px', color: 'var(--text-muted)', fontWeight: 500 }}>
                  14 min
                </span>
              </div>

              {/* Title & Description */}
              <h3 style={{ fontSize: '18px', fontWeight: 700, color: 'var(--text-main)', marginBottom: '10px' }}>
                Python Backend Developer
              </h3>
              <p style={{ fontSize: '13px', color: 'var(--text-secondary)', lineHeight: 1.6, marginBottom: '22px' }}>
                Rigorous drills covering asynchronous architecture, FastAPI database connection pooling, and resilient worker systems.
              </p>

              {/* Focus Dimensions */}
              <div style={{ marginBottom: '22px' }}>
                <div style={{ fontSize: '10.5px', fontWeight: 700, color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.06em', marginBottom: '8px' }}>
                  FOCUS DIMENSIONS:
                </div>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
                  {['Asyncio', 'FastAPI', 'Postgres Pool'].map((tag) => (
                    <span key={tag} style={{
                      fontSize: '11px',
                      fontWeight: 600,
                      color: 'var(--text-main)',
                      background: 'var(--bg-surface)',
                      border: '1px solid var(--border-subtle)',
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
                background: 'var(--bg-surface)',
                border: '1px solid var(--border-subtle)',
                borderRadius: '10px',
                padding: '12px 14px',
                marginBottom: '24px',
                fontSize: '12.5px',
                lineHeight: 1.5,
                color: 'var(--text-secondary)'
              }}>
                <span style={{ color: '#0284c7', fontWeight: 600 }}>Why this interview?</span> Targets core framework proficiency derived from recent project logs.
              </div>
            </div>

            {/* Launch Button */}
            <button
              onClick={() => onStartPractice('Python Backend Developer')}
              style={{
                width: '100%',
                padding: '12px',
                borderRadius: '10px',
                border: '1px solid var(--border-accent)',
                background: 'var(--bg-surface)',
                color: 'var(--text-main)',
                fontSize: '13.5px',
                fontWeight: 600,
                cursor: 'pointer',
                transition: 'all 0.2s ease'
              }}
              onMouseEnter={(e) => { e.currentTarget.style.background = 'var(--bg-card-hover)'; }}
              onMouseLeave={(e) => { e.currentTarget.style.background = 'var(--bg-surface)'; }}
            >
              Launch 5-Question Session
            </button>
          </div>

          {/* Card 3: Data Platform Engineer */}
          <div style={{
            background: 'var(--bg-card)',
            border: '1px solid var(--border-subtle)',
            borderRadius: '20px',
            padding: '28px 24px',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            boxShadow: 'var(--shadow-md)',
            transition: 'all 0.25s ease'
          }}>
            <div>
              {/* Badge & Time Header */}
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '18px' }}>
                <span style={{
                  fontSize: '11.5px',
                  fontWeight: 700,
                  color: '#2563eb',
                  background: 'rgba(37, 99, 235, 0.12)',
                  border: '1px solid rgba(37, 99, 235, 0.25)',
                  padding: '3px 10px',
                  borderRadius: '6px'
                }}>
                  Good Match 85%
                </span>
                <span style={{ fontSize: '12px', color: 'var(--text-muted)', fontWeight: 500 }}>
                  17 min
                </span>
              </div>

              {/* Title & Description */}
              <h3 style={{ fontSize: '18px', fontWeight: 700, color: 'var(--text-main)', marginBottom: '10px' }}>
                Data Platform Engineer
              </h3>
              <p style={{ fontSize: '13px', color: 'var(--text-secondary)', lineHeight: 1.6, marginBottom: '22px' }}>
                Tests distributed stream processing resiliency, Apache Spark memory management, and exactly-once message delivery semantics.
              </p>

              {/* Focus Dimensions */}
              <div style={{ marginBottom: '22px' }}>
                <div style={{ fontSize: '10.5px', fontWeight: 700, color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.06em', marginBottom: '8px' }}>
                  FOCUS DIMENSIONS:
                </div>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
                  {['Spark', 'Kafka', 'Data Lakehouse'].map((tag) => (
                    <span key={tag} style={{
                      fontSize: '11px',
                      fontWeight: 600,
                      color: 'var(--text-main)',
                      background: 'var(--bg-surface)',
                      border: '1px solid var(--border-subtle)',
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
                background: 'var(--bg-surface)',
                border: '1px solid var(--border-subtle)',
                borderRadius: '10px',
                padding: '12px 14px',
                marginBottom: '24px',
                fontSize: '12.5px',
                lineHeight: 1.5,
                color: 'var(--text-secondary)'
              }}>
                <span style={{ color: '#2563eb', fontWeight: 600 }}>Why this interview?</span> Addresses senior-level distributed architecture criteria.
              </div>
            </div>

            {/* Launch Button */}
            <button
              onClick={() => onStartPractice('Data Platform Engineer')}
              style={{
                width: '100%',
                padding: '12px',
                borderRadius: '10px',
                border: '1px solid var(--border-accent)',
                background: 'var(--bg-surface)',
                color: 'var(--text-main)',
                fontSize: '13.5px',
                fontWeight: 600,
                cursor: 'pointer',
                transition: 'all 0.2s ease'
              }}
              onMouseEnter={(e) => { e.currentTarget.style.background = 'var(--bg-card-hover)'; }}
              onMouseLeave={(e) => { e.currentTarget.style.background = 'var(--bg-surface)'; }}
            >
              Launch 5-Question Session
            </button>
          </div>
        </div>

      </div>
    </section>
  );
};
