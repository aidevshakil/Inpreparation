import React from 'react';
import { FileText, CheckCircle2 } from 'lucide-react';

interface ProfileConnectedCvCardProps {
  fileName?: string;
  fileSize?: string;
  parsedDate?: string;
  onViewCv?: () => void;
  onUpdateCv?: () => void;
  onSyncToProfile?: () => void;
  isSyncing?: boolean;
}

export const ProfileConnectedCvCard: React.FC<ProfileConnectedCvCardProps> = ({
  fileName = '',
  fileSize = '',
  parsedDate = '',
  onViewCv,
  onUpdateCv,
  onSyncToProfile,
  isSyncing = false,
}) => {
  const hasCv = Boolean(fileName);

  return (
    <div className="card" style={{ marginBottom: '16px' }}>
      {/* Header */}
      <div className="flex items-center justify-between" style={{ marginBottom: '14px' }}>
        <div className="flex items-center gap-2">
          <FileText size={15} style={{ color: hasCv ? 'var(--color-success)' : 'var(--text-muted)' }} />
          <span style={{ fontSize: '11px', fontWeight: 700, letterSpacing: '0.8px', color: hasCv ? 'var(--color-success)' : 'var(--text-muted)', textTransform: 'uppercase' }}>
            Connected CV
          </span>
        </div>

        {hasCv && (
          <span className="badge" style={{ backgroundColor: 'rgba(16, 185, 129, 0.1)', color: 'var(--color-success)', borderColor: 'rgba(16, 185, 129, 0.2)' }}>
            Active
          </span>
        )}
      </div>

      {hasCv ? (
        <>
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
                {parsedDate} {fileSize && `• ${fileSize}`}
              </span>
            </div>
          </div>

          {/* Action Buttons */}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '8px', marginBottom: onSyncToProfile ? '8px' : 0 }}>
            <button onClick={onViewCv} className="btn btn-outline" style={{ padding: '6px 12px', fontSize: '12px', justifyContent: 'center' }}>
              View CV
            </button>
            <button onClick={onUpdateCv} className="btn btn-outline" style={{ padding: '6px 12px', fontSize: '12px', justifyContent: 'center' }}>
              Update CV
            </button>
          </div>

          {onSyncToProfile && (
            <button
              onClick={onSyncToProfile}
              disabled={isSyncing}
              className="btn btn-outline"
              style={{
                width: '100%',
                padding: '7px 12px',
                fontSize: '12px',
                justifyContent: 'center',
                borderColor: 'rgba(99, 102, 241, 0.35)',
                color: 'var(--primary-color)',
                backgroundColor: 'rgba(99, 102, 241, 0.06)',
                fontWeight: 600,
              }}
            >
              {isSyncing ? 'Auto-filling Profile...' : '✨ Auto-fill Profile from CV'}
            </button>
          )}
        </>
      ) : (
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '12px', padding: '16px 0' }}>
          <span style={{ fontSize: '12px', color: 'var(--text-muted)', textAlign: 'center' }}>
            No CV uploaded. Connect your resume to improve AI targeting.
          </span>
          <button onClick={onUpdateCv} className="btn btn-outline" style={{ padding: '6px 16px', fontSize: '12px' }}>
            Upload CV
          </button>
        </div>
      )}
    </div>
  );
};
