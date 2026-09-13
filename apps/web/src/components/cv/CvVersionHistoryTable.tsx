import React from 'react';
import { FileText, MoreVertical, RotateCcw, Download } from 'lucide-react';

interface CvVersion {
  id: string;
  fileName: string;
  uploadDate: string;
  size: string;
  status: 'vectorized' | 'analyzed' | 'archived';
  statusLabel: string;
}

interface CvVersionHistoryTableProps {
  onRollback?: (versionId: string) => void;
  onDownloadVersion?: (versionId: string) => void;
}

export const CvVersionHistoryTable: React.FC<CvVersionHistoryTableProps> = ({
  onRollback,
  onDownloadVersion,
}) => {
  const versions: CvVersion[] = [
    {
      id: 'v3',
      fileName: 'Shakil_Ahamed_Resume_2026.pdf',
      uploadDate: 'Sep 10, 2026',
      size: '142 KB',
      status: 'vectorized',
      statusLabel: 'Vectorized',
    },
    {
      id: 'v2',
      fileName: 'Shakil_Ahamed_Resume_v2.1.pdf',
      uploadDate: 'Aug 28, 2026',
      size: '138 KB',
      status: 'analyzed',
      statusLabel: 'Analyzed',
    },
    {
      id: 'v1',
      fileName: 'Shakil_Resume_Draft_Aug.pdf',
      uploadDate: 'Aug 12, 2026',
      size: '120 KB',
      status: 'archived',
      statusLabel: 'Archived',
    },
  ];

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
              backgroundColor: 'rgba(16, 185, 129, 0.15)',
              color: '#34d399',
              border: '1px solid rgba(16, 185, 129, 0.3)',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '4px',
            }}
          >
            <span style={{ width: '5px', height: '5px', borderRadius: '50%', backgroundColor: '#10b981' }} />
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
              backgroundColor: 'rgba(56, 189, 248, 0.15)',
              color: '#38bdf8',
              border: '1px solid rgba(56, 189, 248, 0.3)',
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
              backgroundColor: 'rgba(255, 255, 255, 0.05)',
              color: '#94a3b8',
              border: '1px solid rgba(255, 255, 255, 0.08)',
            }}
          >
            {label}
          </span>
        );
    }
  };

  return (
    <div
      style={{
        backgroundColor: 'rgba(14, 18, 28, 0.85)',
        border: '1px solid rgba(255, 255, 255, 0.08)',
        borderRadius: '18px',
        padding: '20px',
        boxShadow: '0 4px 24px rgba(0, 0, 0, 0.25)',
      }}
    >
      {/* Header */}
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '4px' }}>
        <h3 style={{ fontSize: '1.05rem', fontWeight: 700, color: '#f8fafc', margin: 0 }}>
          CV Version History
        </h3>

        <span
          style={{
            fontSize: '0.72rem',
            color: '#94a3b8',
            backgroundColor: 'rgba(255, 255, 255, 0.04)',
            padding: '2px 8px',
            borderRadius: '6px',
            border: '1px solid rgba(255, 255, 255, 0.08)',
          }}
        >
          2 Versions Stored
        </span>
      </div>

      <p style={{ fontSize: '0.76rem', color: '#94a3b8', margin: '0 0 16px 0' }}>
        All previously uploaded copies remain archived for comparison and rolling rollbacks.
      </p>

      {/* Table Container */}
      <div style={{ width: '100%', overflowX: 'auto' }}>
        <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.78rem' }}>
          <thead>
            <tr style={{ borderBottom: '1px solid rgba(255, 255, 255, 0.08)' }}>
              <th style={{ textAlign: 'left', padding: '8px 10px', color: '#64748b', fontWeight: 600, fontSize: '0.68rem', letterSpacing: '0.5px' }}>
                FILE NAME
              </th>
              <th style={{ textAlign: 'left', padding: '8px 10px', color: '#64748b', fontWeight: 600, fontSize: '0.68rem', letterSpacing: '0.5px' }}>
                UPLOAD DATE
              </th>
              <th style={{ textAlign: 'left', padding: '8px 10px', color: '#64748b', fontWeight: 600, fontSize: '0.68rem', letterSpacing: '0.5px' }}>
                SIZE
              </th>
              <th style={{ textAlign: 'left', padding: '8px 10px', color: '#64748b', fontWeight: 600, fontSize: '0.68rem', letterSpacing: '0.5px' }}>
                STATUS
              </th>
              <th style={{ textAlign: 'right', padding: '8px 10px', color: '#64748b', fontWeight: 600, fontSize: '0.68rem', letterSpacing: '0.5px' }}>
                ACTIONS
              </th>
            </tr>
          </thead>
          <tbody>
            {versions.map((v) => (
              <tr
                key={v.id}
                style={{
                  borderBottom: '1px solid rgba(255, 255, 255, 0.04)',
                  transition: 'background-color 0.15s ease',
                }}
                onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.03)')}
                onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = 'transparent')}
              >
                {/* File Name */}
                <td style={{ padding: '12px 10px', color: '#f1f5f9', fontWeight: 600 }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <FileText size={15} color="#fb7185" />
                    <span style={{ whiteSpace: 'nowrap' }}>{v.fileName}</span>
                  </div>
                </td>

                {/* Upload Date */}
                <td style={{ padding: '12px 10px', color: '#94a3b8', whiteSpace: 'nowrap' }}>
                  {v.uploadDate}
                </td>

                {/* Size */}
                <td style={{ padding: '12px 10px', color: '#94a3b8', whiteSpace: 'nowrap' }}>
                  {v.size}
                </td>

                {/* Status */}
                <td style={{ padding: '12px 10px' }}>
                  {getStatusBadge(v.status, v.statusLabel)}
                </td>

                {/* Action Menu */}
                <td style={{ padding: '12px 10px', textAlign: 'right' }}>
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-end', gap: '4px' }}>
                    <button
                      onClick={() => onDownloadVersion && onDownloadVersion(v.id)}
                      style={{
                        background: 'transparent',
                        border: 'none',
                        color: '#94a3b8',
                        cursor: 'pointer',
                        padding: '4px',
                        borderRadius: '4px',
                      }}
                      title="Download"
                    >
                      <Download size={13} />
                    </button>

                    {v.status !== 'vectorized' && (
                      <button
                        onClick={() => onRollback && onRollback(v.id)}
                        style={{
                          background: 'transparent',
                          border: 'none',
                          color: '#818cf8',
                          cursor: 'pointer',
                          padding: '4px',
                          borderRadius: '4px',
                        }}
                        title="Rollback to this version"
                      >
                        <RotateCcw size={13} />
                      </button>
                    )}

                    <button
                      style={{
                        background: 'transparent',
                        border: 'none',
                        color: '#64748b',
                        cursor: 'pointer',
                        padding: '4px',
                      }}
                    >
                      <MoreVertical size={14} />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};
