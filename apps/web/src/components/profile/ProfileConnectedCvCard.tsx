import React from 'react';
import { FileText, CheckCircle2 } from 'lucide-react';

interface ProfileConnectedCvCardProps {
  fileName?: string;
  fileSize?: string;
  parsedDate?: string;
  onViewCv?: () => void;
  onUpdateCv?: () => void;
}

export const ProfileConnectedCvCard: React.FC<ProfileConnectedCvCardProps> = ({
  fileName = 'Shakil_Ahamed_Resume.pdf',
  fileSize = '142 KB',
  parsedDate = 'Parsed 3 days ago',
  onViewCv,
  onUpdateCv,
}) => {
  return (
    <div className="card" style={{ marginBottom: '16px' }}>
      {/* Header */}
      <div className="flex items-center justify-between" style={{ marginBottom: '14px' }}>
        <div className="flex items-center gap-2">
          <FileText size={15} style={{ color: 'var(--color-success)' }} />
          <span style={{ fontSize: '11px', fontWeight: 700, letterSpacing: '0.8px', color: 'var(--color-success)', textTransform: 'uppercase' }}>
            Connected CV
          </span>
        </div>

        <span className="badge" style={{ backgroundColor: 'rgba(16, 185, 129, 0.1)', color: 'var(--color-success)', borderColor: 'rgba(16, 185, 129, 0.2)' }}>
          Active
        </span>
      </div>

      {/* File Tile */}
      <div className="flex items-center" style={{ gap: '12px', padding: '10px 12px', backgroundColor: 'var(--bg-main)', border: '1px solid var(--border-subtle)', borderRadius: '10px', marginBottom: '12px' }}>
        <div style={{ padding: '4px 6px', borderRadius: '6px', backgroundColor: 'rgba(244, 63, 94, 0.1)', color: 'var(--color-error)', fontSize: '11px', fontWeight: 800, letterSpacing: '0.5px' }}>
          PDF
        </div>

        <div style={{ flex: 1, minWidth: 0 }}>
          <div className="flex items-center" style={{ gap: '5px' }}>
            <span style={{ fontSize: '13px', fontWeight: 600, color: 'var(--text-main)', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
              {fileName}
            </span>
            <CheckCircle2 size={12} color="var(--color-success)" />
          </div>
          <span style={{ fontSize: '11px', color: 'var(--text-muted)' }}>
            {parsedDate} • {fileSize}
          </span>
        </div>
      </div>

      {/* Action Buttons */}
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '8px' }}>
        <button onClick={onViewCv} className="btn btn-outline" style={{ padding: '6px 12px', fontSize: '12px', justifyContent: 'center' }}>
          View CV
        </button>
        <button onClick={onUpdateCv} className="btn btn-outline" style={{ padding: '6px 12px', fontSize: '12px', justifyContent: 'center' }}>
          Update CV
        </button>
      </div>
    </div>
  );
};
