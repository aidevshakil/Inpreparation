import React from 'react';
import { GitBranch, FileCheck, Brain } from 'lucide-react';

export const ExperienceUnderstandingStep: React.FC = () => {
  return (
    <section style={{ padding: '60px 0 80px', position: 'relative' }}>
      <div className="container" style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 20px' }}>
        
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(360px, 1fr))',
          gap: '40px',
          alignItems: 'center'
        }}>
          {/* Left Column: Heading, Subtitle & 2 Feature Cards */}
          <div>
            <div style={{
              fontSize: '11px',
              fontWeight: 800,
              letterSpacing: '0.1em',
              textTransform: 'uppercase',
              color: '#818cf8',
              marginBottom: '10px'
            }}>
              STEP 02
            </div>

            <h2 style={{
              fontSize: 'clamp(26px, 3.2vw, 36px)',
              fontWeight: 800,
              color: '#ffffff',
              letterSpacing: '-0.02em',
              lineHeight: 1.25,
              marginBottom: '14px'
            }}>
              2. Let AI Understand Your Experience
            </h2>

            <p style={{
              fontSize: '14.5px',
              color: '#94a3b8',
              lineHeight: 1.6,
              marginBottom: '28px'
            }}>
              Inprep does not treat your CV as plain keywords. Our specialized model maps your historical milestones against modern executive expectations, extracting true technical depth, leadership scope, and architectural responsibility.
            </p>

            {/* 2 Feature Cards */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '14px', marginBottom: '24px' }}>
              {/* Feature 1 */}
              <div style={{
                background: '#0a0e18',
                border: '1px solid rgba(255, 255, 255, 0.06)',
                borderRadius: '14px',
                padding: '18px 20px',
                display: 'flex',
                alignItems: 'flex-start',
                gap: '14px'
              }}>
                <div style={{
                  width: '34px',
                  height: '34px',
                  borderRadius: '10px',
                  background: 'rgba(129, 140, 248, 0.12)',
                  border: '1px solid rgba(129, 140, 248, 0.25)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0,
                  marginTop: '2px'
                }}>
                  <GitBranch size={17} color="#818cf8" />
                </div>
                <div>
                  <h3 style={{ fontSize: '15px', fontWeight: 700, color: '#ffffff', marginBottom: '4px' }}>
                    Semantic Competency Mapping
                  </h3>
                  <p style={{ fontSize: '13px', color: '#8896ab', lineHeight: 1.5, margin: 0 }}>
                    Dissects concrete project outcomes versus passive tool mentions.
                  </p>
                </div>
              </div>

              {/* Feature 2 */}
              <div style={{
                background: '#0a0e18',
                border: '1px solid rgba(255, 255, 255, 0.06)',
                borderRadius: '14px',
                padding: '18px 20px',
                display: 'flex',
                alignItems: 'flex-start',
                gap: '14px'
              }}>
                <div style={{
                  width: '34px',
                  height: '34px',
                  borderRadius: '10px',
                  background: 'rgba(56, 189, 248, 0.12)',
                  border: '1px solid rgba(56, 189, 248, 0.25)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0,
                  marginTop: '2px'
                }}>
                  <FileCheck size={17} color="#38bdf8" />
                </div>
                <div>
                  <h3 style={{ fontSize: '15px', fontWeight: 700, color: '#ffffff', marginBottom: '4px' }}>
                    Verifiable Resume Grounding
                  </h3>
                  <p style={{ fontSize: '13px', color: '#8896ab', lineHeight: 1.5, margin: 0 }}>
                    Generates questions strictly aligned to what you have actually built.
                  </p>
                </div>
              </div>
            </div>

            {/* Bottom Tag Pill */}
            <div style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              background: 'rgba(255, 255, 255, 0.03)',
              border: '1px solid rgba(255, 255, 255, 0.08)',
              padding: '6px 14px',
              borderRadius: '100px'
            }}>
              <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#38bdf8', boxShadow: '0 0 8px #38bdf8' }} />
              <span style={{ fontSize: '12px', color: '#94a3b8', fontWeight: 500 }}>
                AI Profile Analysis — Based on verifiable resume data
              </span>
            </div>
          </div>

          {/* Right Column: Synthesis Pipeline Card */}
          <div style={{
            background: '#0a0e18',
            border: '1px solid rgba(255, 255, 255, 0.08)',
            borderRadius: '20px',
            padding: '24px 26px',
            boxShadow: '0 20px 50px rgba(0, 0, 0, 0.5)'
          }}>
            {/* Header Row */}
            <div style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              marginBottom: '20px',
              paddingBottom: '14px',
              borderBottom: '1px solid rgba(255, 255, 255, 0.06)'
            }}>
              <span style={{ fontSize: '13px', fontWeight: 600, color: '#e2e8f0' }}>
                Synthesis Pipeline: Input to Semantic Graph
              </span>
              <span style={{
                fontSize: '11px',
                fontWeight: 600,
                color: '#a5b4fc',
                background: 'rgba(99, 102, 241, 0.15)',
                border: '1px solid rgba(99, 102, 241, 0.3)',
                padding: '3px 10px',
                borderRadius: '6px'
              }}>
                Status: Active Extraction
              </span>
            </div>

            {/* 3 Pipeline Nodes */}
            <div style={{
              display: 'grid',
              gridTemplateColumns: '1fr 1.1fr 1.15fr',
              gap: '12px',
              alignItems: 'stretch'
            }}>
              {/* Node 1: Source File */}
              <div style={{
                background: '#060911',
                border: '1px solid rgba(255, 255, 255, 0.05)',
                borderRadius: '12px',
                padding: '16px 14px',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between'
              }}>
                <div>
                  <div style={{ fontSize: '11px', color: '#64748b', fontWeight: 500, marginBottom: '4px' }}>
                    Source File
                  </div>
                  <div style={{ fontSize: '12.5px', fontWeight: 700, color: '#ffffff', marginBottom: '16px' }}>
                    curriculum_vitae.pdf
                  </div>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '6px', marginBottom: '16px' }}>
                    <div style={{ width: '90%', height: '5px', background: 'rgba(255, 255, 255, 0.08)', borderRadius: '3px' }} />
                    <div style={{ width: '70%', height: '5px', background: 'rgba(255, 255, 255, 0.05)', borderRadius: '3px' }} />
                    <div style={{ width: '85%', height: '5px', background: 'rgba(255, 255, 255, 0.06)', borderRadius: '3px' }} />
                  </div>
                </div>
                <div style={{ fontSize: '11px', color: '#64748b' }}>
                  4 Pages • 1,280 Words
                </div>
              </div>

              {/* Node 2: Neural Parser */}
              <div style={{
                background: '#0f1422',
                border: '1px solid rgba(255, 255, 255, 0.06)',
                borderRadius: '12px',
                padding: '18px 12px',
                textAlign: 'center',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center'
              }}>
                <div style={{
                  width: '40px',
                  height: '40px',
                  borderRadius: '50%',
                  background: 'rgba(129, 140, 248, 0.15)',
                  border: '1px solid rgba(129, 140, 248, 0.3)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginBottom: '10px'
                }}>
                  <Brain size={20} color="#818cf8" />
                </div>
                <div style={{ fontSize: '13px', fontWeight: 700, color: '#ffffff', marginBottom: '4px' }}>
                  Neural Parser
                </div>
                <div style={{ fontSize: '11px', color: '#94a3b8', lineHeight: 1.4 }}>
                  Deconstructing 14 roles & 38 technical competencies
                </div>
              </div>

              {/* Node 3: Synthesized Record */}
              <div style={{
                background: '#060911',
                border: '1px solid rgba(255, 255, 255, 0.05)',
                borderRadius: '12px',
                padding: '16px 14px',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between'
              }}>
                <div>
                  <div style={{ fontSize: '11px', color: '#38bdf8', fontWeight: 600, marginBottom: '4px' }}>
                    Synthesized Record
                  </div>
                  <div style={{ fontSize: '14px', fontWeight: 700, color: '#ffffff', marginBottom: '10px' }}>
                    Senior Tech Profile
                  </div>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '5px', marginBottom: '14px' }}>
                    <span style={{
                      fontSize: '10px',
                      fontWeight: 600,
                      color: '#38bdf8',
                      background: 'rgba(56, 189, 248, 0.12)',
                      border: '1px solid rgba(56, 189, 248, 0.3)',
                      padding: '2px 7px',
                      borderRadius: '4px'
                    }}>
                      Distributed Systems
                    </span>
                    {['High-Concurrency', 'Kafka', 'PostgreSQL'].map((tag) => (
                      <span key={tag} style={{
                        fontSize: '10px',
                        fontWeight: 500,
                        color: '#cbd5e1',
                        background: '#131825',
                        border: '1px solid rgba(255, 255, 255, 0.06)',
                        padding: '2px 7px',
                        borderRadius: '4px'
                      }}>
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
                <div style={{ fontSize: '11px', color: '#94a3b8' }}>
                  Calibrated Tier: <span style={{ color: '#38bdf8', fontWeight: 600 }}>Staff Level (L6)</span>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

