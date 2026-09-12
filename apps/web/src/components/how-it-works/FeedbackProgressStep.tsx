import React from 'react';

export const FeedbackProgressStep: React.FC = () => {
  return (
    <section style={{ padding: '40px 0 80px', position: 'relative' }}>
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
            STEP 08
          </div>
          <h2 style={{
            fontSize: 'clamp(28px, 3.5vw, 38px)',
            fontWeight: 700,
            color: '#ffffff',
            letterSpacing: '-0.02em',
            marginBottom: '12px'
          }}>
            8. Turn Feedback Into Progress
          </h2>
          <p style={{
            fontSize: '15px',
            color: '#94a3b8',
            lineHeight: 1.6
          }}>
            Evaluation is useless without synthesis. Inprep generates 3 high-leverage action levers after every mock session, tracking your compounding gains across retakes.
          </p>
        </div>

        {/* 2-Column Content Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))',
          gap: '28px',
          alignItems: 'stretch'
        }}>
          {/* Left Column: Targeted Focus Levers */}
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <h3 style={{ fontSize: '18px', fontWeight: 700, color: '#ffffff', marginBottom: '18px' }}>
              Targeted Focus Levers
            </h3>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '14px', flex: 1 }}>
              {/* Priority 1 */}
              <div style={{
                background: '#0a0e18',
                border: '1px solid rgba(255, 255, 255, 0.08)',
                borderRadius: '16px',
                padding: '20px 22px',
                transition: 'all 0.25s ease'
              }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '10px' }}>
                  <span style={{
                    fontSize: '11px',
                    fontWeight: 700,
                    color: '#c084fc',
                    background: 'rgba(168, 85, 247, 0.15)',
                    border: '1px solid rgba(168, 85, 247, 0.3)',
                    padding: '3px 9px',
                    borderRadius: '6px'
                  }}>
                    Priority 1 (Highest Impact)
                  </span>
                  <span style={{ fontSize: '11.5px', color: '#64748b', fontWeight: 500 }}>
                    62% Calibrated
                  </span>
                </div>
                <h4 style={{ fontSize: '14.5px', fontWeight: 700, color: '#ffffff', marginBottom: '6px' }}>
                  Sharpen Distributed Locking Explanations
                </h4>
                <p style={{ fontSize: '12.5px', color: '#94a3b8', lineHeight: 1.55, margin: 0 }}>
                  Dedicate practice to explicitly stating lease expiration parameters and fencing tokens rather than generic Redis setnx concepts.
                </p>
              </div>

              {/* Priority 2 */}
              <div style={{
                background: '#0a0e18',
                border: '1px solid rgba(255, 255, 255, 0.08)',
                borderRadius: '16px',
                padding: '20px 22px',
                transition: 'all 0.25s ease'
              }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '10px' }}>
                  <span style={{
                    fontSize: '11px',
                    fontWeight: 700,
                    color: '#38bdf8',
                    background: 'rgba(56, 189, 248, 0.15)',
                    border: '1px solid rgba(56, 189, 248, 0.3)',
                    padding: '3px 9px',
                    borderRadius: '6px'
                  }}>
                    Priority 2
                  </span>
                  <span style={{ fontSize: '11.5px', color: '#64748b', fontWeight: 500 }}>
                    74% Calibrated
                  </span>
                </div>
                <h4 style={{ fontSize: '14.5px', fontWeight: 700, color: '#ffffff', marginBottom: '6px' }}>
                  Replace Fillers with Intentional Pauses
                </h4>
                <p style={{ fontSize: '12.5px', color: '#94a3b8', lineHeight: 1.55, margin: 0 }}>
                  Insert a deliberate 1.5-second breath before answering Question 2. Your filler frequency dropped 40% when taking a beat to structure thoughts.
                </p>
              </div>

              {/* Priority 3 */}
              <div style={{
                background: '#0a0e18',
                border: '1px solid rgba(255, 255, 255, 0.08)',
                borderRadius: '16px',
                padding: '20px 22px',
                transition: 'all 0.25s ease'
              }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '10px' }}>
                  <span style={{
                    fontSize: '11px',
                    fontWeight: 600,
                    color: '#94a3b8',
                    background: 'rgba(255, 255, 255, 0.05)',
                    border: '1px solid rgba(255, 255, 255, 0.1)',
                    padding: '3px 9px',
                    borderRadius: '6px'
                  }}>
                    Priority 3
                  </span>
                  <span style={{ fontSize: '11.5px', color: '#64748b', fontWeight: 500 }}>
                    81% Calibrated
                  </span>
                </div>
                <h4 style={{ fontSize: '14.5px', fontWeight: 700, color: '#ffffff', marginBottom: '6px' }}>
                  Camera Elevation & Eye Contact Alignment
                </h4>
                <p style={{ fontSize: '12.5px', color: '#94a3b8', lineHeight: 1.55, margin: 0 }}>
                  Elevate laptop height by 2 inches to meet natural horizon level. Eliminates downward gaze during complex conceptual thinking.
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: Longitudinal Growth Score Velocity Chart */}
          <div style={{
            background: '#0a0e18',
            border: '1px solid rgba(255, 255, 255, 0.08)',
            borderRadius: '20px',
            padding: '28px 30px',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            boxShadow: '0 20px 50px rgba(0, 0, 0, 0.5)'
          }}>
            <div>
              <div style={{
                fontSize: '10.5px',
                fontWeight: 700,
                color: '#38bdf8',
                letterSpacing: '0.08em',
                textTransform: 'uppercase',
                marginBottom: '6px'
              }}>
                LONGITUDINAL GROWTH
              </div>
              <h3 style={{ fontSize: '20px', fontWeight: 700, color: '#ffffff', marginBottom: '6px' }}>
                Score Velocity (+14 pts Gain)
              </h3>
              <p style={{ fontSize: '12.5px', color: '#94a3b8', lineHeight: 1.5, marginBottom: '32px' }}>
                Measured progress across 4 consecutive practice mock attempts over 10 days.
              </p>

              {/* Bar Chart Visualization */}
              <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(4, 1fr)',
                gap: '16px',
                height: '180px',
                alignItems: 'flex-end',
                paddingBottom: '20px',
                borderBottom: '1px solid rgba(255, 255, 255, 0.06)',
                marginBottom: '16px'
              }}>
                {[
                  { label: 'Att 1', score: 68, height: '52%', bg: '#171d2b', textColor: '#64748b' },
                  { label: 'Att 2', score: 74, height: '66%', bg: '#1e2638', textColor: '#94a3b8' },
                  { label: 'Att 3', score: 79, height: '78%', bg: '#4c1d95', textColor: '#cbd5e1' },
                  { label: 'Att 4', score: 82, height: '90%', bg: '#7c3aed', textColor: '#ffffff', glow: true }
                ].map((col, idx) => (
                  <div key={idx} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', height: '100%', justifyContent: 'flex-end' }}>
                    <span style={{
                      fontSize: '12px',
                      fontWeight: 700,
                      color: col.textColor,
                      marginBottom: '8px'
                    }}>
                      {col.score}
                    </span>
                    <div style={{
                      width: '100%',
                      height: col.height,
                      background: col.bg,
                      borderRadius: '8px 8px 0 0',
                      boxShadow: col.glow ? '0 0 25px rgba(124, 58, 237, 0.45)' : 'none',
                      transition: 'height 0.3s ease'
                    }} />
                    <span style={{ fontSize: '11px', color: '#64748b', marginTop: '10px' }}>
                      {col.label}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Bottom Row */}
            <div style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              fontSize: '11.5px',
              paddingTop: '8px'
            }}>
              <span style={{ color: '#64748b' }}>
                Continuous Iterative Loop
              </span>
              <span style={{ color: '#38bdf8', fontWeight: 600, cursor: 'pointer' }}>
                Ready for Next Session
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

