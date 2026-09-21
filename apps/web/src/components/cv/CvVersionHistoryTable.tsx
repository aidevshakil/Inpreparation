import React, { useState, useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';
import { FileText, MoreVertical, RotateCcw, Download, Eye, Trash2 } from 'lucide-react';

export interface CvVersion {
  id: string;
  fileName: string;
  uploadDate: string;
  size: string;
  status: 'vectorized' | 'analyzed' | 'archived';
  statusLabel: string;
  fileUrl?: string;
  targetRole?: string;
}

interface CvVersionHistoryTableProps {
  versions?: CvVersion[];
  onRollback?: (versionId: string) => void;
  onDownloadVersion?: (versionId: string) => void;
  onPreviewVersion?: (version: CvVersion) => void;
  onDeleteVersion?: (versionId: string) => void;
}

export const CvVersionHistoryTable: React.FC<CvVersionHistoryTableProps> = ({
  versions: passedVersions,
  onRollback,
  onDownloadVersion,
  onPreviewVersion,
  onDeleteVersion,
}) => {
  const [menuAnchor, setMenuAnchor] = useState<{
    id: string;
    top: number;
    left: number;
    openUp: boolean;
  } | null>(null);

  const menuDropdownRef = useRef<HTMLDivElement | null>(null);

  const versions: CvVersion[] = passedVersions && passedVersions.length > 0 ? passedVersions : [
    {
      id: 'v1',
      fileName: 'Active_Resume.pdf',
      uploadDate: 'Recently',
      size: '142 KB',
      status: 'vectorized',
      statusLabel: 'Active Master',
    },
  ];

  // Close dropdown menu when clicking outside, scrolling, or pressing Escape
  useEffect(() => {
    if (!menuAnchor) return;

    const handleClickOutside = (event: MouseEvent) => {
      if (menuDropdownRef.current && !menuDropdownRef.current.contains(event.target as Node)) {
        setMenuAnchor(null);
      }
    };

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setMenuAnchor(null);
      }
    };

    const handleScroll = (event: Event) => {
      if (menuDropdownRef.current && menuDropdownRef.current.contains(event.target as Node)) return;
      setMenuAnchor(null);
    };

    document.addEventListener('mousedown', handleClickOutside);
    document.addEventListener('keydown', handleKeyDown);
    window.addEventListener('scroll', handleScroll, true);
    window.addEventListener('resize', handleScroll);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('keydown', handleKeyDown);
      window.removeEventListener('scroll', handleScroll, true);
      window.removeEventListener('resize', handleScroll);
    };
  }, [menuAnchor]);

  const handleDownload = (v: CvVersion) => {
    setMenuAnchor(null);

    // Call parent handler if defined
    if (onDownloadVersion) {
      onDownloadVersion(v.id);
      return;
    }

    // Direct browser fallback download
    if (v.fileUrl && v.fileUrl.startsWith('data:')) {
      const a = document.createElement('a');
      a.href = v.fileUrl;
      a.download = v.fileName;
      document.body.appendChild(a);
      a.click();
      a.remove();
      return;
    }

    const content = [
      `=============================================================`,
      `CANDIDATE DOSSIER: ${v.fileName}`,
      `Uploaded: ${v.uploadDate} | Size: ${v.size}`,
      `Status: ${v.statusLabel}`,
      `=============================================================\n`,
      `[OVERVIEW]`,
      `This resume version was vectorized and calibrated on InPreparation.`,
      `File Name: ${v.fileName}`,
      `Status: Verified / Stored in Vault`,
      `Dossier Timestamp: ${new Date().toLocaleString()}`,
      `\n=============================================================`,
    ].join('\n');

    const blob = new Blob([content], { type: 'text/plain;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = v.fileName.endsWith('.pdf') || v.fileName.endsWith('.docx')
      ? v.fileName.replace(/\.(pdf|docx)$/i, '_CV.txt')
      : `${v.fileName}_CV.txt`;
    document.body.appendChild(a);
    a.click();
    a.remove();
    URL.revokeObjectURL(url);
  };

  const getStatusBadge = (status: CvVersion['status'], label: string) => {
    switch (status) {
      case 'vectorized':
        return (
          <span
            style={{
              fontSize: '0.7rem',
              fontWeight: 600,
              padding: '2px 8px',
              borderRadius: '9999px',
              backgroundColor: 'rgba(5, 150, 105, 0.12)',
              color: '#059669',
              border: '1px solid rgba(5, 150, 105, 0.3)',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '4px',
            }}
          >
            <span style={{ width: '5px', height: '5px', borderRadius: '50%', backgroundColor: '#059669' }} />
            <span>{label}</span>
          </span>
        );
      case 'analyzed':
        return (
          <span
            style={{
              fontSize: '0.7rem',
              fontWeight: 600,
              padding: '2px 8px',
              borderRadius: '9999px',
              backgroundColor: 'rgba(2, 132, 199, 0.12)',
              color: '#0284c7',
              border: '1px solid rgba(2, 132, 199, 0.3)',
            }}
          >
            {label}
          </span>
        );
      default:
        return (
          <span
            style={{
              fontSize: '0.7rem',
              fontWeight: 500,
              padding: '2px 8px',
              borderRadius: '9999px',
              backgroundColor: 'var(--bg-surface)',
              color: 'var(--text-secondary)',
              border: '1px solid var(--border-subtle)',
            }}
          >
            {label}
          </span>
        );
    }
  };

  const menuItemStyle: React.CSSProperties = {
    display: 'flex',
    alignItems: 'center',
    gap: '8px',
    width: '100%',
    padding: '8px 10px',
    background: 'transparent',
    border: 'none',
    borderRadius: '6px',
    color: 'var(--text-main)',
    fontSize: '0.78rem',
    fontWeight: 500,
    cursor: 'pointer',
    textAlign: 'left',
    transition: 'background 0.12s ease',
  };

  return (
    <div
      style={{
        backgroundColor: 'var(--bg-card)',
        border: '1px solid var(--border-subtle)',
        borderRadius: '18px',
        padding: '20px',
        boxShadow: '0 4px 24px rgba(0, 0, 0, 0.08)',
        position: 'relative',
      }}
    >
      {/* Header */}
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '4px' }}>
        <h3 style={{ fontSize: '1.05rem', fontWeight: 700, color: 'var(--text-main)', margin: 0 }}>
          CV Version History
        </h3>

        <span
          style={{
            fontSize: '0.72rem',
            color: 'var(--text-secondary)',
            backgroundColor: 'var(--bg-surface)',
            padding: '2px 8px',
            borderRadius: '6px',
            border: '1px solid var(--border-subtle)',
            fontWeight: 500,
          }}
        >
          {versions.length} {versions.length === 1 ? 'Version' : 'Versions'} Stored
        </span>
      </div>

      <p style={{ fontSize: '0.76rem', color: 'var(--text-secondary)', margin: '0 0 16px 0' }}>
        All previously uploaded copies remain archived for comparison and rolling rollbacks.
      </p>

      {/* Table Container */}
      <div style={{ width: '100%', overflowX: 'auto', overflowY: 'visible' }}>
        <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.78rem' }}>
          <thead>
            <tr style={{ borderBottom: '1px solid var(--border-subtle)' }}>
              <th style={{ textAlign: 'left', padding: '8px 10px', color: 'var(--text-muted)', fontWeight: 600, fontSize: '0.68rem', letterSpacing: '0.5px' }}>
                FILE NAME
              </th>
              <th style={{ textAlign: 'left', padding: '8px 10px', color: 'var(--text-muted)', fontWeight: 600, fontSize: '0.68rem', letterSpacing: '0.5px' }}>
                UPLOAD DATE
              </th>
              <th style={{ textAlign: 'left', padding: '8px 10px', color: 'var(--text-muted)', fontWeight: 600, fontSize: '0.68rem', letterSpacing: '0.5px' }}>
                SIZE
              </th>
              <th style={{ textAlign: 'left', padding: '8px 10px', color: 'var(--text-muted)', fontWeight: 600, fontSize: '0.68rem', letterSpacing: '0.5px' }}>
                STATUS
              </th>
              <th style={{ textAlign: 'right', padding: '8px 10px', color: 'var(--text-muted)', fontWeight: 600, fontSize: '0.68rem', letterSpacing: '0.5px' }}>
                ACTIONS
              </th>
            </tr>
          </thead>
          <tbody>
            {versions.map((v) => (
              <tr
                key={v.id}
                style={{
                  borderBottom: '1px solid var(--border-subtle)',
                  transition: 'background-color 0.15s ease',
                }}
                onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = 'var(--bg-card-hover)')}
                onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = 'transparent')}
              >
                {/* File Name */}
                <td style={{ padding: '12px 10px', color: 'var(--text-main)', fontWeight: 600 }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <FileText size={15} color="#fb7185" />
                    <span style={{ whiteSpace: 'nowrap' }}>{v.fileName}</span>
                  </div>
                </td>

                {/* Upload Date */}
                <td style={{ padding: '12px 10px', color: 'var(--text-secondary)', whiteSpace: 'nowrap' }}>
                  {v.uploadDate}
                </td>

                {/* Size */}
                <td style={{ padding: '12px 10px', color: 'var(--text-secondary)', whiteSpace: 'nowrap' }}>
                  {v.size}
                </td>

                {/* Status */}
                <td style={{ padding: '12px 10px' }}>
                  {getStatusBadge(v.status, v.statusLabel)}
                </td>

                {/* Action Buttons */}
                <td style={{ padding: '12px 10px', textAlign: 'right' }}>
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-end', gap: '6px' }}>
                    {/* Download Button */}
                    <button
                      onClick={() => handleDownload(v)}
                      style={{
                        background: 'transparent',
                        border: '1px solid var(--border-subtle)',
                        color: 'var(--text-secondary)',
                        cursor: 'pointer',
                        padding: '6px',
                        borderRadius: '6px',
                        display: 'inline-flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        transition: 'all 0.15s ease',
                      }}
                      title="Download CV File"
                      onMouseEnter={(e) => {
                        e.currentTarget.style.color = 'var(--primary-color)';
                        e.currentTarget.style.borderColor = 'var(--primary-color)';
                        e.currentTarget.style.backgroundColor = 'rgba(99, 102, 241, 0.08)';
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.color = 'var(--text-secondary)';
                        e.currentTarget.style.borderColor = 'var(--border-subtle)';
                        e.currentTarget.style.backgroundColor = 'transparent';
                      }}
                    >
                      <Download size={13} />
                    </button>

                    {/* Rollback Button */}
                    {v.status !== 'vectorized' && (
                      <button
                        onClick={() => onRollback && onRollback(v.id)}
                        style={{
                          background: 'transparent',
                          border: '1px solid var(--border-subtle)',
                          color: 'var(--primary-color)',
                          cursor: 'pointer',
                          padding: '6px',
                          borderRadius: '6px',
                          display: 'inline-flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          transition: 'all 0.15s ease',
                        }}
                        title="Rollback / Make Active Master"
                        onMouseEnter={(e) => {
                          e.currentTarget.style.backgroundColor = 'rgba(99, 102, 241, 0.12)';
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.backgroundColor = 'transparent';
                        }}
                      >
                        <RotateCcw size={13} />
                      </button>
                    )}

                    {/* 3-Dots Menu Trigger Button */}
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        if (menuAnchor?.id === v.id) {
                          setMenuAnchor(null);
                        } else {
                          const rect = e.currentTarget.getBoundingClientRect();
                          const dropdownHeight = 170;
                          const spaceBelow = window.innerHeight - rect.bottom;
                          const openUp = spaceBelow < dropdownHeight && rect.top > dropdownHeight;
                          setMenuAnchor({
                            id: v.id,
                            top: openUp ? rect.top - dropdownHeight - 6 : rect.bottom + 6,
                            left: Math.max(12, rect.right - 185),
                            openUp,
                          });
                        }
                      }}
                      style={{
                        background: menuAnchor?.id === v.id ? 'var(--bg-surface)' : 'transparent',
                        border: '1px solid var(--border-subtle)',
                        color: menuAnchor?.id === v.id ? 'var(--text-main)' : 'var(--text-secondary)',
                        cursor: 'pointer',
                        padding: '6px',
                        borderRadius: '6px',
                        display: 'inline-flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        transition: 'all 0.15s ease',
                      }}
                      title="Version options"
                      onMouseEnter={(e) => {
                        e.currentTarget.style.color = 'var(--text-main)';
                        e.currentTarget.style.borderColor = 'var(--border-accent)';
                      }}
                      onMouseLeave={(e) => {
                        if (menuAnchor?.id !== v.id) {
                          e.currentTarget.style.color = 'var(--text-secondary)';
                          e.currentTarget.style.borderColor = 'var(--border-subtle)';
                        }
                      }}
                    >
                      <MoreVertical size={13} />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Portal Dropdown Menu attached directly to document.body (immune to any parent container clipping) */}
      {menuAnchor && (() => {
        const activeVersion = versions.find((v) => v.id === menuAnchor.id);
        if (!activeVersion) return null;

        return createPortal(
          <div
            ref={menuDropdownRef}
            onClick={(e) => e.stopPropagation()}
            style={{
              position: 'fixed',
              top: `${menuAnchor.top}px`,
              left: `${menuAnchor.left}px`,
              width: '185px',
              backgroundColor: 'var(--bg-card)',
              border: '1px solid var(--border-subtle)',
              borderRadius: '12px',
              boxShadow: '0 12px 32px rgba(0, 0, 0, 0.28)',
              padding: '6px',
              zIndex: 999999,
              display: 'flex',
              flexDirection: 'column',
              gap: '2px',
              textAlign: 'left',
            }}
          >
            {/* Option 1: Download */}
            <button
              onClick={() => {
                setMenuAnchor(null);
                handleDownload(activeVersion);
              }}
              style={menuItemStyle}
              onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = 'var(--bg-surface)')}
              onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = 'transparent')}
            >
              <Download size={14} color="var(--primary-color)" />
              <span>Download CV File</span>
            </button>

            {/* Option 2: Rollback / Set Active */}
            {activeVersion.status !== 'vectorized' && onRollback && (
              <button
                onClick={() => {
                  setMenuAnchor(null);
                  onRollback(activeVersion.id);
                }}
                style={menuItemStyle}
                onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = 'var(--bg-surface)')}
                onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = 'transparent')}
              >
                <RotateCcw size={14} color="#10b981" />
                <span>Make Active Master</span>
              </button>
            )}

            {/* Option 3: Preview */}
            {onPreviewVersion && (
              <button
                onClick={() => {
                  setMenuAnchor(null);
                  onPreviewVersion(activeVersion);
                }}
                style={menuItemStyle}
                onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = 'var(--bg-surface)')}
                onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = 'transparent')}
              >
                <Eye size={14} color="#38bdf8" />
                <span>Preview in Canvas</span>
              </button>
            )}

            {/* Option 4: Delete */}
            {onDeleteVersion && (
              <button
                onClick={() => {
                  setMenuAnchor(null);
                  onDeleteVersion(activeVersion.id);
                }}
                style={{ ...menuItemStyle, color: '#f43f5e' }}
                onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = 'rgba(244, 63, 94, 0.08)')}
                onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = 'transparent')}
              >
                <Trash2 size={14} color="#f43f5e" />
                <span>Delete Version</span>
              </button>
            )}
          </div>,
          document.body
        );
      })()}
    </div>
  );
};
