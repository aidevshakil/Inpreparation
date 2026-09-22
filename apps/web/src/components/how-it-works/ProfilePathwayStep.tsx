import React from 'react';
import { UploadCloud, FileText, CheckCircle2, Sliders, SlidersHorizontal, Plus } from 'lucide-react';

interface ProfilePathwayStepProps {
  activePathway: 'upload' | 'role';
  setActivePathway: (pathway: 'upload' | 'role') => void;
  selectedLevel: string;
  setSelectedLevel: (level: string) => void;
  isUploading: boolean;
  uploadedFileName: string | null;
  onFileUpload: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export const ProfilePathwayStep: React.FC<ProfilePathwayStepProps> = ({
  activePathway,
  setActivePathway,
  selectedLevel,
  setSelectedLevel,
  isUploading,
  uploadedFileName,
  onFileUpload
}) => {
  return (
    <section style={{ padding: '60px 0 80px', position: 'relative' }}>
      <div className="container" style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 20px' }}>
        
        {/* Step Section Header */}
        <div style={{ textAlign: 'left', marginBottom: '36px' }}>
          <div style={{
            fontSize: '11px',
            fontWeight: 800,
            letterSpacing: '0.1em',
            textTransform: 'uppercase',
            color: 'var(--primary-color)',
            marginBottom: '10px'
          }}>
            STEP 01
          </div>
          <h2 style={{
            fontSize: 'clamp(28px, 3.5vw, 38px)',
            fontWeight: 700,
            color: 'var(--text-main)',
            letterSpacing: '-0.02em',
            marginBottom: '12px'
          }}>
            Build Your Profile — Two Flexible Pathways
          </h2>
          <p style={{
            fontSize: '15px',
            color: 'var(--text-secondary)',
            lineHeight: 1.6,
            maxWidth: '780px',
            margin: 0
          }}>
            Whether you want immediate automated ingestion or prefer granular manual precision, Inprep initializes your baseline within two minutes.
          </p>
        </div>

        {/* Two Pathway Cards Side by Side */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(360px, 1fr))',
          gap: '24px'
        }}>
          {/* Pathway A Card */}
          <div
            onClick={() => setActivePathway('upload')}
            style={{
              background: 'var(--bg-card)',
              border: activePathway === 'upload' ? '1px solid var(--primary-color)' : '1px solid var(--border-subtle)',
              borderRadius: '20px',
              padding: '30px',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              boxShadow: activePathway === 'upload' ? 'var(--shadow-md)' : 'none',
              transition: 'all 0.25s ease',
              cursor: 'pointer'
            }}
          >
            <div>
              {/* Header */}
              <div style={{ display: 'flex', alignItems: 'center', gap: '14px', marginBottom: '16px' }}>
                <div style={{
                  width: '38px',
                  height: '38px',
                  borderRadius: '12px',
                  background: 'rgba(99, 102, 241, 0.15)',
                  border: '1px solid rgba(99, 102, 241, 0.25)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0
                }}>
                  <UploadCloud size={19} color="#818cf8" />
                </div>
                <h3 style={{ fontSize: '18px', fontWeight: 700, color: 'var(--text-main)', margin: 0 }}>
                  Pathway A: Upload Your CV
                </h3>
              </div>

              <p style={{ fontSize: '13px', color: 'var(--text-secondary)', lineHeight: 1.6, marginBottom: '24px' }}>
                Drag and drop your existing PDF or Word document. Our deep NLP parser extracts roles, tech stacks, and career milestones automatically.
              </p>

              {/* Dropzone Container */}
              <label style={{
                display: 'block',
                background: 'var(--bg-surface)',
                border: '1px solid var(--border-subtle)',
                borderRadius: '14px',
                padding: '32px 20px 24px',
                textAlign: 'center',
                marginBottom: '24px',
                cursor: 'pointer'
              }}>
                <input type="file" accept=".pdf,.doc,.docx" onChange={onFileUpload} style={{ display: 'none' }} />
                
                <div style={{
                  width: '44px',
                  height: '44px',
                  borderRadius: '10px',
                  background: 'var(--bg-card)',
                  border: '1px solid var(--border-subtle)',
                  display: 'inline-flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginBottom: '14px'
                }}>
                  <FileText size={22} color="var(--text-main)" />
                </div>

                <div style={{ fontSize: '14.5px', fontWeight: 600, color: 'var(--text-main)', marginBottom: '6px' }}>
                  Drag & drop your resume file here
                </div>
                <div style={{ fontSize: '12px', color: 'var(--text-muted)', marginBottom: '22px' }}>
                  Supports PDF, DOCX up to 15MB
                </div>

                {/* Progress Pill Bar */}
                <div style={{
                  background: 'var(--bg-main)',
                  borderRadius: '10px',
                  padding: '12px 16px',
                  border: '1px solid var(--border-subtle)',
                  textAlign: 'left',
                  position: 'relative',
                  overflow: 'hidden'
                }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '8px' }}>
                    <span style={{ fontSize: '12.5px', color: 'var(--text-main)', fontWeight: 500 }}>
                      {isUploading ? 'Parsing document...' : (uploadedFileName || 'resume_senior_backend.pdf')}
                    </span>
                    <span style={{ fontSize: '12px', color: 'var(--primary-color)', fontWeight: 700 }}>
                      {isUploading ? 'Analyzing...' : '100% Parsed'}
                    </span>
                  </div>
                  <div style={{ width: '100%', height: '4px', background: 'var(--bg-surface)', borderRadius: '2px', overflow: 'hidden' }}>
                    <div style={{ width: isUploading ? '60%' : '100%', height: '100%', background: 'linear-gradient(90deg, #6366f1 0%, #38bdf8 100%)', transition: 'width 0.3s ease' }} />
                  </div>
                </div>
              </label>
            </div>

            {/* Footer */}
            <div style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              paddingTop: '16px',
              borderTop: '1px solid var(--border-subtle)'
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <CheckCircle2 size={16} color="var(--primary-color)" />
                <span style={{ fontSize: '12.5px', color: 'var(--text-main)', fontWeight: 500 }}>
                  Instant Data Extraction
                </span>
              </div>
              <span style={{ fontSize: '12px', color: 'var(--text-muted)' }}>
                Takes ~30 seconds
              </span>
            </div>
          </div>

          {/* Pathway B Card */}
          <div
            onClick={() => setActivePathway('role')}
            style={{
              background: 'var(--bg-card)',
              border: activePathway === 'role' ? '1px solid var(--primary-color)' : '1px solid var(--border-subtle)',
              borderRadius: '20px',
              padding: '30px',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              boxShadow: activePathway === 'role' ? 'var(--shadow-md)' : 'none',
              transition: 'all 0.25s ease',
              cursor: 'pointer'
            }}
          >
            <div>
              {/* Header */}
              <div style={{ display: 'flex', alignItems: 'center', gap: '14px', marginBottom: '16px' }}>
                <div style={{
                  width: '38px',
                  height: '38px',
                  borderRadius: '12px',
                  background: 'rgba(99, 102, 241, 0.15)',
                  border: '1px solid rgba(99, 102, 241, 0.25)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0
                }}>
                  <SlidersHorizontal size={19} color="#818cf8" />
                </div>
                <h3 style={{ fontSize: '18px', fontWeight: 700, color: 'var(--text-main)', margin: 0 }}>
                  Pathway B: Build Manually
                </h3>
              </div>

              <p style={{ fontSize: '13px', color: 'var(--text-secondary)', lineHeight: 1.6, marginBottom: '24px' }}>
                Fine-tune the exact focus areas you want to be quizzed on by selecting target level, primary frameworks, and past architecture environments.
              </p>

              {/* Form Controls Container */}
              <div style={{
                background: 'var(--bg-surface)',
                border: '1px solid var(--border-subtle)',
                borderRadius: '14px',
                padding: '24px 20px',
                marginBottom: '24px',
                display: 'flex',
                flexDirection: 'column',
                gap: '18px'
              }}>
                {/* Level Selection */}
                <div>
                  <label style={{ display: 'block', fontSize: '11.5px', color: 'var(--text-secondary)', fontWeight: 500, marginBottom: '8px' }}>
                    Target Engineering Level
                  </label>
                  <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(3, 1fr)',
                    gap: '8px',
                    background: 'var(--bg-main)',
                    padding: '4px',
                    borderRadius: '10px',
                    border: '1px solid var(--border-subtle)'
                  }}>
                    {['Mid-Level', 'Senior Staff', 'Principal'].map((lvl) => {
                      const isSelected = selectedLevel === lvl || (selectedLevel === 'Senior' && lvl === 'Senior Staff');
                      return (
                        <button
                          key={lvl}
                          type="button"
                          onClick={(e) => {
                            e.stopPropagation();
                            setSelectedLevel(lvl);
                          }}
                          style={{
                            padding: '8px 12px',
                            borderRadius: '7px',
                            fontSize: '12px',
                            fontWeight: 600,
                            border: 'none',
                            cursor: 'pointer',
                            transition: 'all 0.2s ease',
                            background: isSelected ? 'var(--primary-color)' : 'transparent',
                            color: isSelected ? '#ffffff' : 'var(--text-secondary)',
                            boxShadow: isSelected ? '0 2px 8px rgba(99, 102, 241, 0.35)' : 'none'
                          }}
                        >
                          {lvl}
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* Tech Stack Tags */}
                <div>
                  <label style={{ display: 'block', fontSize: '11.5px', color: 'var(--text-secondary)', fontWeight: 500, marginBottom: '8px' }}>
                    Core Tech Stack
                  </label>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                    {['Python', 'FastAPI', 'PostgreSQL', 'Kafka'].map((tech) => (
                      <span
                        key={tech}
                        style={{
                          fontSize: '11.5px',
                          fontWeight: 500,
                          padding: '5px 12px',
                          borderRadius: '100px',
                          background: 'var(--bg-main)',
                          border: '1px solid var(--border-subtle)',
                          color: 'var(--text-main)'
                        }}
                      >
                        {tech}
                      </span>
                    ))}
                    <span
                      style={{
                        fontSize: '11.5px',
                        fontWeight: 500,
                        padding: '5px 12px',
                        borderRadius: '100px',
                        background: 'var(--bg-card)',
                        border: '1px dashed var(--border-subtle)',
                        color: 'var(--text-secondary)',
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '4px',
                        cursor: 'pointer'
                      }}
                    >
                      <Plus size={12} />
                      Add Skill
                    </span>
                  </div>
                </div>

                {/* Experience Row */}
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  paddingTop: '6px'
                }}>
                  <div>
                    <div style={{ fontSize: '11.5px', color: 'var(--text-secondary)', fontWeight: 500, marginBottom: '4px' }}>
                      Years of Professional Experience
                    </div>
                    <div style={{ fontSize: '14px', fontWeight: 700, color: 'var(--text-main)' }}>
                      6+ Years
                    </div>
                  </div>
                  <span style={{ fontSize: '12px', fontWeight: 600, color: 'var(--primary-color)' }}>
                    Calibrated
                  </span>
                </div>
              </div>
            </div>

            {/* Footer */}
            <div style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              paddingTop: '16px',
              borderTop: '1px solid var(--border-subtle)'
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <Sliders size={16} color="var(--primary-color)" />
                <span style={{ fontSize: '12.5px', color: 'var(--text-main)', fontWeight: 500 }}>
                  Tailor Every Dimension
                </span>
              </div>
              <span style={{ fontSize: '12px', color: 'var(--text-muted)' }}>
                Custom Focus
              </span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

