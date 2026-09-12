import React from 'react';

export const DiagnosticPerformanceStep: React.FC = () => {
  return (
    <section style={{ padding: '60px 0 80px', position: 'relative' }}>
      <div className="container" style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 20px' }}>
        
        {/* Step Header */}
        <div style={{ textAlign: 'left', marginBottom: '36px' }}>
          <div style={{
            fontSize: '11px',
            fontWeight: 800,
            letterSpacing: '0.1em',
            textTransform: 'uppercase',
            color: '#818cf8',
            marginBottom: '10px'
          }}>
            STEP 07
          </div>
          <h2 style={{
            fontSize: 'clamp(28px, 3.5vw, 38px)',
            fontWeight: 700,
            color: '#ffffff',
            letterSpacing: '-0.02em',
            marginBottom: '12px'
          }}>
            7. See Exactly How You Performed
          </h2>
          <p style={{
            fontSize: '15px',
            color: '#94a3b8',
            lineHeight: 1.6,
            maxWidth: '780px',
            margin: 0
          }}>
            Inspect micro-rubrics for every single answer. Compare your exact verbal delivery side-by-side with a staff-tier structured benchmark.
          </p>
        </div>

        {/* Card 1: Session Diagnostic Summary */}
        <div style={{
          background: '#0a0e18',
          border: '1px solid rgba(255, 255, 255, 0.08)',
          borderRadius: '20px',
          padding: '28px 30px',
          marginBottom: '24px',
          boxShadow: '0 20px 50px rgba(0, 0, 0, 0.5)'
        }}>
          {/* Header Row */}
          <div style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginBottom: '28px',
            flexWrap: 'wrap',
            gap: '12px'
          }}>
            <div>
              <div style={{ fontSize: '11.5px', color: '#94a3b8', fontWeight: 500, marginBottom: '4px' }}>
                Session Diagnostic Summary
              </div>
              <h3 style={{ fontSize: '20px', fontWeight: 700, color: '#ffffff', margin: 0 }}>
                AI/ML Engineering Mock Results
              </h3>
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <span style={{
                fontSize: '11.5px',
                color: '#94a3b8',
                background: '#121726',
                border: '1px solid rgba(255, 255, 255, 0.06)',
                padding: '4px 12px',
                borderRadius: '6px'
              }}>
                Completed Today
              </span>
              <span style={{
                fontSize: '11.5px',
                fontWeight: 600,
                color: '#38bdf8',
                background: '#0e2942',
                border: '1px solid rgba(56, 189, 248, 0.25)',
                padding: '4px 12px',
                borderRadius: '6px'
              }}>
                Passed Bar
              </span>
            </div>
          </div>

          {/* Inner Grid */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '32px',
            alignItems: 'center'
          }}>
            {/* Left: Overall Score Circular Gauge */}
            <div style={{
              background: '#060911',
              border: '1px solid rgba(255, 255, 255, 0.05)',
              borderRadius: '16px',
              padding: '28px 20px',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              textAlign: 'center'
            }}>
              <div style={{
                width: '124px',
                height: '124px',
                borderRadius: '50%',
                border: '5px solid rgba(255, 255, 255, 0.06)',
                borderTopColor: '#818cf8',
                borderRightColor: '#38bdf8',
                borderBottomColor: '#a855f7',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                marginBottom: '18px',
                boxShadow: '0 0 30px rgba(99, 102, 241, 0.25)'
              }}>
                <span style={{ fontSize: '38px', fontWeight: 800, color: '#ffffff', lineHeight: 1 }}>
                  82
                </span>
                <span style={{ fontSize: '9px', fontWeight: 700, color: '#94a3b8', letterSpacing: '0.08em', marginTop: '4px' }}>
                  OVERALL SCORE
                </span>
              </div>

              <div style={{ fontSize: '13.5px', fontWeight: 700, color: '#ffffff', marginBottom: '4px' }}>
                Executive Readiness: Senior Grade
              </div>
              <div style={{ fontSize: '12px', color: '#38bdf8', fontWeight: 500 }}>
                +6 points higher than cohort baseline
              </div>
            </div>

            {/* Right: 4 Category Progress Bars */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '18px' }}>
              {[
                { label: 'Technical Precision & Trade-Offs', pct: 86, color: '#a78bfa' },
                { label: 'Structured Communication (STAR Framework)', pct: 84, color: '#38bdf8' },
                { label: 'Pacing, Cadence & Filler Word Minimization', pct: 81, color: '#c084fc' },
                { label: 'Physical Composure & Setup Ergonomics', pct: 85, color: '#e2e8f0' }
              ].map((bar, i) => (
                <div key={i}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '12.5px', marginBottom: '7px' }}>
                    <span style={{ color: '#cbd5e1', fontWeight: 500 }}>{bar.label}</span>
                    <span style={{ color: '#ffffff', fontWeight: 700 }}>{bar.pct}%</span>
                  </div>
                  <div style={{ width: '100%', height: '6px', background: 'rgba(255, 255, 255, 0.06)', borderRadius: '3px', overflow: 'hidden' }}>
                    <div style={{ width: `${bar.pct}%`, height: '100%', background: bar.color, borderRadius: '3px' }} />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Card 2: Question 1 of 5 Micro-Rubric */}
        <div style={{
          background: '#0a0e18',
          border: '1px solid rgba(255, 255, 255, 0.08)',
          borderRadius: '20px',
          padding: '24px 28px',
          marginBottom: '20px',
          boxShadow: '0 20px 50px rgba(0, 0, 0, 0.5)'
        }}>
          {/* Header */}
          <div style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginBottom: '16px',
            flexWrap: 'wrap',
            gap: '8px'
          }}>
            <span style={{
              fontSize: '11.5px',
              fontWeight: 600,
              color: '#94a3b8',
              background: '#121726',
              border: '1px solid rgba(255, 255, 255, 0.06)',
              padding: '3px 10px',
              borderRadius: '6px'
            }}>
              Question 1 of 5
            </span>
            <span style={{ fontSize: '13px', fontWeight: 700, color: '#38bdf8' }}>
              Score: 88/100 (Strong Answer)
            </span>
          </div>

          <h4 style={{ fontSize: '16.5px', fontWeight: 700, color: '#ffffff', marginBottom: '10px' }}>
            "How do you manage schema evolution in high-throughput event logs without downtime?"
          </h4>

          <p style={{ fontSize: '12.5px', color: '#94a3b8', lineHeight: 1.5, marginBottom: '20px' }}>
            <strong style={{ color: '#ffffff' }}>Strengths:</strong> Accurately detailed Avro Schema Registry and forward/backward compatibility checks. Highlighted consumer lag metrics.
          </p>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '16px'
          }}>
            {/* Left: Your Transcript Excerpt */}
            <div style={{
              background: '#060911',
              border: '1px solid rgba(255, 255, 255, 0.05)',
              borderRadius: '10px',
              padding: '16px'
            }}>
              <div style={{ fontSize: '10.5px', fontWeight: 700, color: '#64748b', letterSpacing: '0.05em', marginBottom: '8px', textTransform: 'uppercase' }}>
                YOUR TRANSCRIPT EXCERPT:
              </div>
              <div style={{ fontSize: '12.5px', color: '#cbd5e1', lineHeight: 1.55, fontStyle: 'italic' }}>
                "...we used schema registry with Avro. We made sure fields had default values so old consumers wouldn't crash when new writers published..."
              </div>
            </div>

            {/* Right: Staff-Tier Benchmark */}
            <div style={{
              background: '#060911',
              border: '1px solid rgba(56, 189, 248, 0.15)',
              borderRadius: '10px',
              padding: '16px'
            }}>
              <div style={{ fontSize: '10.5px', fontWeight: 700, color: '#38bdf8', letterSpacing: '0.05em', marginBottom: '8px', textTransform: 'uppercase' }}>
                STAFF-TIER BENCHMARK:
              </div>
              <div style={{ fontSize: '12.5px', color: '#e2e8f0', lineHeight: 1.55 }}>
                1. Define Compatibility Mode (FULL/BACKWARD) • 2. Enforce CI schema validation • 3. Deploy Consumer before Producer • 4. Monitor Dead-Letter Queues.
              </div>
            </div>
          </div>
        </div>

        {/* Card 3: Question 2 of 5 - Diagnostic Gap */}
        <div style={{
          background: '#0a0e18',
          border: '1px solid rgba(255, 255, 255, 0.08)',
          borderRadius: '20px',
          padding: '24px 28px',
          boxShadow: '0 20px 50px rgba(0, 0, 0, 0.5)'
        }}>
          <div style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginBottom: '16px',
            flexWrap: 'wrap',
            gap: '8px'
          }}>
            <span style={{
              fontSize: '11.5px',
              fontWeight: 600,
              color: '#94a3b8',
              background: '#121726',
              border: '1px solid rgba(255, 255, 255, 0.06)',
              padding: '3px 10px',
              borderRadius: '6px'
            }}>
              Question 2 of 5
            </span>
            <span style={{ fontSize: '13px', fontWeight: 700, color: '#f59e0b' }}>
              Score: 71/100 (Needs Improvement)
            </span>
          </div>

          <h4 style={{ fontSize: '16.5px', fontWeight: 700, color: '#ffffff', marginBottom: '10px' }}>
            "Walk through handling split-brain scenarios in a distributed consensus layer."
          </h4>

          <p style={{ fontSize: '12.5px', color: '#94a3b8', lineHeight: 1.5, marginBottom: '20px' }}>
            <strong style={{ color: '#ffffff' }}>Diagnostic Gap:</strong> Answer omitted majority quorum math and fencing tokens. Addressed symptom mitigation rather than consensus protocol guarantees.
          </p>

          <div style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            paddingTop: '16px',
            borderTop: '1px solid rgba(255, 255, 255, 0.05)',
            fontSize: '12px',
            flexWrap: 'wrap',
            gap: '8px'
          }}>
            <span style={{ color: '#38bdf8' }}>
              AI-generated benchmark for practice calibration
            </span>
            <span style={{ color: '#38bdf8', fontWeight: 600, cursor: 'pointer' }}>
              View Suggested Remediation Answer →
            </span>
          </div>
        </div>

      </div>
    </section>
  );
};

