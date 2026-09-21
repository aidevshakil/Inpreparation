import React, { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import {
  X,
  Download,
  ExternalLink,
  FileText,
  Copy,
  Check,
  MapPin,
  Mail,
  Phone,
  GraduationCap,
  Sparkles,
} from 'lucide-react';

export interface DocumentViewerModalProps {
  isOpen: boolean;
  onClose: () => void;
  fileName?: string;
  fileSize?: string;
  fileUrl?: string;
  candidateName?: string;
  candidateRole?: string;
  candidateEmail?: string;
  candidatePhone?: string;
  candidateLocation?: string;
  candidateSkills?: string[];
  summary?: string;
  workExperience?: any[];
  projects?: any[];
  education?: string[];
  rawTextPreview?: string;
  onDownload?: () => void;
}

export const DocumentViewerModal: React.FC<DocumentViewerModalProps> = ({
  isOpen,
  onClose,
  fileName = 'Uploaded_Resume.pdf',
  fileSize = '142 KB',
  fileUrl,
  candidateName,
  candidateRole,
  candidateEmail,
  candidatePhone,
  candidateLocation,
  candidateSkills = [],
  summary,
  workExperience = [],
  projects = [],
  education = [],
  rawTextPreview,
  onDownload,
}) => {
  const [activeTab, setActiveTab] = useState<'preview' | 'ocr'>('preview');
  const [copied, setCopied] = useState(false);

  // Close on Escape key
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handleCopyText = () => {
    const textToCopy = rawTextPreview || [
      `CANDIDATE: ${candidateName || 'Candidate'}`,
      `ROLE: ${candidateRole || 'Software Engineer'}`,
      `CONTACT: ${candidateEmail || ''} | ${candidatePhone || ''} | ${candidateLocation || ''}`,
      `\nSUMMARY:\n${summary || ''}`,
      `\nSKILLS:\n${candidateSkills.join(', ')}`,
      `\nEXPERIENCE:\n` + workExperience.map((w: any) => `${w.title} at ${w.company} (${w.duration}):\n${(w.bullets || []).join('\n')}`).join('\n\n'),
    ].join('\n');

    navigator.clipboard.writeText(textToCopy);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleInternalDownload = () => {
    if (onDownload) {
      onDownload();
      return;
    }

    if (fileUrl && fileUrl.startsWith('data:')) {
      const a = document.createElement('a');
      a.href = fileUrl;
      a.download = fileName;
      document.body.appendChild(a);
      a.click();
      a.remove();
      return;
    }

    const textContent = rawTextPreview || [
      `=============================================================`,
      `DOCUMENT DOSSIER: ${fileName}`,
      `Candidate: ${candidateName || 'Candidate'}`,
      `Target Role: ${candidateRole || 'Software Engineer'}`,
      `=============================================================\n`,
      summary ? `[PROFESSIONAL SUMMARY]\n${summary}\n` : '',
      candidateSkills.length > 0 ? `[TECHNICAL SKILLS]\n${candidateSkills.join(', ')}\n` : '',
      workExperience.length > 0 ? `[WORK EXPERIENCE]\n` + workExperience.map((w: any) => `${w.title} - ${w.company} (${w.duration})\n${(w.bullets || []).map((b: string) => `  * ${b}`).join('\n')}`).join('\n\n') : '',
    ].join('\n');

    const blob = new Blob([textContent], { type: 'text/plain;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = fileName.endsWith('.pdf') ? fileName.replace(/\.pdf$/i, '_dossier.txt') : `${fileName}_dossier.txt`;
    document.body.appendChild(a);
    a.click();
    a.remove();
    URL.revokeObjectURL(url);
  };

  const handleOpenInNewTab = () => {
    if (fileUrl) {
      const newWindow = window.open();
      if (newWindow) {
        newWindow.document.write(`
          <title>${fileName}</title>
          <body style="margin:0;background:#111;height:100vh;">
            <iframe src="${fileUrl}" frameborder="0" style="width:100%;height:100%;"></iframe>
          </body>
        `);
      }
    } else {
      handleInternalDownload();
    }
  };

  return createPortal(
    <div
      onClick={onClose}
      style={{
        position: 'fixed',
        inset: 0,
        backgroundColor: 'rgba(5, 7, 14, 0.82)',
        backdropFilter: 'blur(8px)',
        zIndex: 9999999,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '16px',
        animation: 'fadeIn 0.2s ease',
      }}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        style={{
          width: '95vw',
          maxWidth: '1080px',
          height: '90vh',
          maxHeight: '920px',
          backgroundColor: 'var(--bg-card)',
          border: '1px solid var(--border-subtle)',
          borderRadius: '20px',
          boxShadow: '0 24px 64px rgba(0, 0, 0, 0.5)',
          display: 'flex',
          flexDirection: 'column',
          overflow: 'hidden',
          position: 'relative',
        }}
      >
        {/* Top Header */}
        <div
          style={{
            padding: '14px 20px',
            backgroundColor: 'var(--bg-surface)',
            borderBottom: '1px solid var(--border-subtle)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: '12px',
          }}
        >
          {/* File Info */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            <div
              style={{
                width: '38px',
                height: '38px',
                borderRadius: '10px',
                backgroundColor: 'rgba(239, 68, 68, 0.12)',
                border: '1px solid rgba(239, 68, 68, 0.25)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#ef4444',
              }}
            >
              <FileText size={20} />
            </div>
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <h3 style={{ fontSize: '0.96rem', fontWeight: 700, color: 'var(--text-main)', margin: 0 }}>
                  {fileName}
                </h3>
                <span
                  style={{
                    fontSize: '0.68rem',
                    fontWeight: 600,
                    padding: '2px 8px',
                    borderRadius: '9999px',
                    backgroundColor: 'rgba(99, 102, 241, 0.12)',
                    color: 'var(--primary-color)',
                    border: '1px solid rgba(99, 102, 241, 0.25)',
                  }}
                >
                  {fileSize}
                </span>
              </div>
              <p style={{ fontSize: '0.72rem', color: 'var(--text-secondary)', margin: '2px 0 0 0' }}>
                {candidateName ? `${candidateName} • ${candidateRole || 'Software Engineer'}` : 'Document Verification & OCR Preview'}
              </p>
            </div>
          </div>

          {/* Center Tabs */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              backgroundColor: 'var(--bg-card)',
              border: '1px solid var(--border-subtle)',
              borderRadius: '10px',
              padding: '3px',
              gap: '4px',
            }}
          >
            <button
              onClick={() => setActiveTab('preview')}
              style={{
                padding: '6px 14px',
                borderRadius: '8px',
                border: 'none',
                backgroundColor: activeTab === 'preview' ? 'var(--primary-color)' : 'transparent',
                color: activeTab === 'preview' ? '#ffffff' : 'var(--text-secondary)',
                fontSize: '0.76rem',
                fontWeight: 600,
                cursor: 'pointer',
                transition: 'all 0.15s ease',
                display: 'flex',
                alignItems: 'center',
                gap: '6px',
              }}
            >
              <FileText size={13} />
              <span>{fileUrl ? 'Original PDF' : 'Dossier View'}</span>
            </button>

            <button
              onClick={() => setActiveTab('ocr')}
              style={{
                padding: '6px 14px',
                borderRadius: '8px',
                border: 'none',
                backgroundColor: activeTab === 'ocr' ? 'var(--primary-color)' : 'transparent',
                color: activeTab === 'ocr' ? '#ffffff' : 'var(--text-secondary)',
                fontSize: '0.76rem',
                fontWeight: 600,
                cursor: 'pointer',
                transition: 'all 0.15s ease',
                display: 'flex',
                alignItems: 'center',
                gap: '6px',
              }}
            >
              <Sparkles size={13} />
              <span>OCR Extracted Text</span>
            </button>
          </div>

          {/* Right Action Buttons */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            {fileUrl && (
              <button
                onClick={handleOpenInNewTab}
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '6px',
                  padding: '7px 12px',
                  borderRadius: '8px',
                  backgroundColor: 'var(--bg-card)',
                  border: '1px solid var(--border-subtle)',
                  color: 'var(--text-main)',
                  fontSize: '0.75rem',
                  fontWeight: 600,
                  cursor: 'pointer',
                  transition: 'all 0.15s ease',
                }}
                title="Open in new window"
              >
                <ExternalLink size={13} />
                <span>New Window</span>
              </button>
            )}

            <button
              onClick={handleInternalDownload}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '6px',
                padding: '7px 14px',
                borderRadius: '8px',
                backgroundColor: 'var(--primary-color)',
                border: 'none',
                color: '#ffffff',
                fontSize: '0.75rem',
                fontWeight: 600,
                cursor: 'pointer',
                transition: 'all 0.15s ease',
              }}
              title="Download file"
            >
              <Download size={13} />
              <span>Download</span>
            </button>

            <button
              onClick={onClose}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
                width: '32px',
                height: '32px',
                borderRadius: '8px',
                backgroundColor: 'transparent',
                border: '1px solid var(--border-subtle)',
                color: 'var(--text-secondary)',
                cursor: 'pointer',
                transition: 'all 0.15s ease',
                marginLeft: '4px',
              }}
              title="Close (Esc)"
              onMouseEnter={(e) => {
                e.currentTarget.style.color = '#ef4444';
                e.currentTarget.style.borderColor = '#ef4444';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.color = 'var(--text-secondary)';
                e.currentTarget.style.borderColor = 'var(--border-subtle)';
              }}
            >
              <X size={16} />
            </button>
          </div>
        </div>

        {/* Modal Main Content */}
        <div
          style={{
            flex: 1,
            overflowY: 'auto',
            padding: '20px',
            backgroundColor: activeTab === 'preview' && fileUrl ? '#0b0f19' : 'var(--bg-main)',
            display: 'flex',
            flexDirection: 'column',
          }}
        >
          {/* TAB 1: PREVIEW */}
          {activeTab === 'preview' && (
            <>
              {fileUrl ? (
                <div style={{ flex: 1, width: '100%', height: '100%', minHeight: '520px', display: 'flex', flexDirection: 'column' }}>
                  <iframe
                    src={fileUrl}
                    title={fileName}
                    style={{
                      width: '100%',
                      height: '100%',
                      flex: 1,
                      border: '1px solid var(--border-subtle)',
                      borderRadius: '12px',
                      backgroundColor: '#ffffff',
                    }}
                  />
                </div>
              ) : (
                /* High Fidelity A4 Document Structured Viewer when no raw binary is available */
                <div
                  style={{
                    maxWidth: '820px',
                    margin: '0 auto',
                    width: '100%',
                    backgroundColor: 'var(--bg-card)',
                    border: '1px solid var(--border-subtle)',
                    borderRadius: '14px',
                    padding: '36px 40px',
                    boxShadow: '0 8px 30px rgba(0,0,0,0.12)',
                  }}
                >
                  {/* Document Header */}
                  <div style={{ borderBottom: '2px solid var(--border-subtle)', paddingBottom: '18px', marginBottom: '24px' }}>
                    <h1 style={{ fontSize: '1.65rem', fontWeight: 800, color: 'var(--text-main)', margin: '0 0 6px 0', letterSpacing: '-0.02em' }}>
                      {candidateName || 'Full Stack Engineer'}
                    </h1>
                    <p style={{ fontSize: '1.05rem', fontWeight: 600, color: 'var(--primary-color)', margin: '0 0 14px 0' }}>
                      {candidateRole || 'Software Engineering Specialist'}
                    </p>

                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '16px', fontSize: '0.78rem', color: 'var(--text-secondary)' }}>
                      {candidateEmail && (
                        <span style={{ display: 'inline-flex', alignItems: 'center', gap: '5px' }}>
                          <Mail size={13} color="var(--primary-color)" />
                          {candidateEmail}
                        </span>
                      )}
                      {candidatePhone && (
                        <span style={{ display: 'inline-flex', alignItems: 'center', gap: '5px' }}>
                          <Phone size={13} color="var(--primary-color)" />
                          {candidatePhone}
                        </span>
                      )}
                      {candidateLocation && (
                        <span style={{ display: 'inline-flex', alignItems: 'center', gap: '5px' }}>
                          <MapPin size={13} color="var(--primary-color)" />
                          {candidateLocation}
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Summary */}
                  {summary && (
                    <div style={{ marginBottom: '24px' }}>
                      <h4 style={{ fontSize: '0.82rem', fontWeight: 700, color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.06em', margin: '0 0 8px 0' }}>
                        Professional Summary
                      </h4>
                      <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', lineHeight: 1.65, margin: 0 }}>
                        {summary}
                      </p>
                    </div>
                  )}

                  {/* Skills Grid */}
                  {candidateSkills && candidateSkills.length > 0 && (
                    <div style={{ marginBottom: '24px' }}>
                      <h4 style={{ fontSize: '0.82rem', fontWeight: 700, color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.06em', margin: '0 0 10px 0' }}>
                        Core Competencies & Technologies
                      </h4>
                      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
                        {candidateSkills.map((s, idx) => (
                          <span
                            key={idx}
                            style={{
                              fontSize: '0.74rem',
                              fontWeight: 600,
                              padding: '4px 10px',
                              borderRadius: '6px',
                              backgroundColor: 'var(--bg-surface)',
                              color: 'var(--text-main)',
                              border: '1px solid var(--border-subtle)',
                            }}
                          >
                            {s}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Work Experience */}
                  {workExperience && workExperience.length > 0 && (
                    <div style={{ marginBottom: '24px' }}>
                      <h4 style={{ fontSize: '0.82rem', fontWeight: 700, color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.06em', margin: '0 0 14px 0' }}>
                        Work Experience
                      </h4>
                      <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                        {workExperience.map((w, idx) => (
                          <div key={idx} style={{ borderLeft: '2px solid var(--border-subtle)', paddingLeft: '14px' }}>
                            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '6px' }}>
                              <h5 style={{ fontSize: '0.92rem', fontWeight: 700, color: 'var(--text-main)', margin: 0 }}>
                                {w.title}
                              </h5>
                              <span style={{ fontSize: '0.74rem', color: 'var(--text-muted)', fontWeight: 500 }}>
                                {w.duration}
                              </span>
                            </div>
                            <p style={{ fontSize: '0.78rem', color: 'var(--primary-color)', fontWeight: 600, margin: '2px 0 8px 0' }}>
                              {w.company} {w.location ? `• ${w.location}` : ''}
                            </p>
                            {w.bullets && (
                              <ul style={{ margin: 0, paddingLeft: '16px', fontSize: '0.8rem', color: 'var(--text-secondary)', lineHeight: 1.6 }}>
                                {w.bullets.map((b: string, bIdx: number) => (
                                  <li key={bIdx} style={{ marginBottom: '4px' }}>{b}</li>
                                ))}
                              </ul>
                            )}
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Featured Projects */}
                  {projects && projects.length > 0 && (
                    <div style={{ marginBottom: '24px' }}>
                      <h4 style={{ fontSize: '0.82rem', fontWeight: 700, color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.06em', margin: '0 0 14px 0' }}>
                        Featured Projects
                      </h4>
                      <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
                        {projects.map((p, idx) => (
                          <div key={idx} style={{ borderLeft: '2px solid var(--primary-color)', paddingLeft: '14px' }}>
                            <h5 style={{ fontSize: '0.9rem', fontWeight: 700, color: 'var(--text-main)', margin: 0 }}>
                              {p.title}
                            </h5>
                            {p.description && (
                              <p style={{ fontSize: '0.8rem', color: 'var(--text-secondary)', margin: '4px 0' }}>
                                {p.description}
                              </p>
                            )}
                            {p.metrics && (
                              <span style={{ fontSize: '0.74rem', color: 'var(--primary-color)', fontWeight: 600 }}>
                                {p.metrics}
                              </span>
                            )}
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Education */}
                  {education && education.length > 0 && (
                    <div>
                      <h4 style={{ fontSize: '0.82rem', fontWeight: 700, color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.06em', margin: '0 0 10px 0' }}>
                        Education & Credentials
                      </h4>
                      <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
                        {education.map((edu, idx) => (
                          <div key={idx} style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.82rem', color: 'var(--text-secondary)' }}>
                            <GraduationCap size={15} color="var(--primary-color)" />
                            <span>{edu}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              )}
            </>
          )}

          {/* TAB 2: OCR EXTRACTED TEXT */}
          {activeTab === 'ocr' && (
            <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: '12px' }}>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <span style={{ fontSize: '0.78rem', color: 'var(--text-secondary)' }}>
                  Verified selectable text extracted by InPreparation's OCR pipeline:
                </span>
                <button
                  onClick={handleCopyText}
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '6px',
                    padding: '5px 12px',
                    borderRadius: '6px',
                    backgroundColor: 'var(--bg-surface)',
                    border: '1px solid var(--border-subtle)',
                    color: copied ? '#10b981' : 'var(--text-main)',
                    fontSize: '0.74rem',
                    fontWeight: 600,
                    cursor: 'pointer',
                  }}
                >
                  {copied ? <Check size={12} /> : <Copy size={12} />}
                  <span>{copied ? 'Copied to Clipboard!' : 'Copy Raw Text'}</span>
                </button>
              </div>

              <div
                style={{
                  flex: 1,
                  minHeight: '450px',
                  backgroundColor: 'var(--bg-card)',
                  border: '1px solid var(--border-subtle)',
                  borderRadius: '12px',
                  padding: '20px',
                  fontFamily: 'monospace',
                  fontSize: '0.8rem',
                  lineHeight: 1.65,
                  color: 'var(--text-secondary)',
                  whiteSpace: 'pre-wrap',
                  overflowY: 'auto',
                }}
              >
                {rawTextPreview || [
                  `[INPREPARATION OCR EXTRACTION DOSSIER]`,
                  `File: ${fileName}`,
                  `Size: ${fileSize}`,
                  `=============================================================`,
                  `Candidate: ${candidateName || 'Candidate'}`,
                  `Role Alignment: ${candidateRole || 'Software Engineer'}`,
                  `Email: ${candidateEmail || 'Not specified'}`,
                  `Phone: ${candidatePhone || 'Not specified'}`,
                  `Location: ${candidateLocation || 'Remote / Global'}`,
                  `=============================================================`,
                  `\n[PROFESSIONAL SUMMARY]`,
                  summary || 'No professional summary extracted.',
                  `\n[EXTRACTED SKILLS & KEYWORDS]`,
                  candidateSkills.join(', ') || 'None',
                  `\n[EXPERIENCE ENTRIES]`,
                  workExperience.map((w: any) => `• ${w.title} at ${w.company} (${w.duration})\n  ${(w.bullets || []).join('\n  ')}`).join('\n\n') || 'No experience records.',
                  `\n[EDUCATION]`,
                  education.join('\n') || 'No education records.',
                ].join('\n')}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>,
    document.body
  );
};
