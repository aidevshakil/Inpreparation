import React, { useEffect, useState } from 'react';
import { X, ShieldCheck, Save, Loader2 } from 'lucide-react';

export interface PrivacySettings {
  allowSessionRecording: boolean;
  allowAnonymizedTelemetry: boolean;
  allowAiTrainingUsage: boolean;
}

interface ProfilePrivacyModalProps {
  isOpen: boolean;
  initialSettings: PrivacySettings;
  onClose: () => void;
  onSave: (settings: PrivacySettings) => Promise<void>;
}

const toggles: Array<{
  key: keyof PrivacySettings;
  title: string;
  description: string;
}> = [
  {
    key: 'allowSessionRecording',
    title: 'Allow session recording',
    description:
      'Record audio, video, and transcripts of your mock interview sessions so you can review them later.',
  },
  {
    key: 'allowAnonymizedTelemetry',
    title: 'Share anonymized telemetry',
    description:
      'Help us improve rubric calibration by sharing aggregated, anonymized delivery metrics (WPM, filler count, etc.).',
  },
  {
    key: 'allowAiTrainingUsage',
    title: 'Contribute to AI training data',
    description:
      'Allow anonymized session data to be used to improve future model versions. You can revoke consent at any time.',
  },
];

export const ProfilePrivacyModal: React.FC<ProfilePrivacyModalProps> = ({
  isOpen,
  initialSettings,
  onClose,
  onSave,
}) => {
  const [settings, setSettings] = useState<PrivacySettings>(initialSettings);
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (isOpen) {
      setSettings(initialSettings);
      setError(null);
    }
  }, [isOpen, initialSettings]);

  if (!isOpen) return null;

  const toggle = (key: keyof PrivacySettings) => {
    setSettings((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  const handleSave = async () => {
    setSaving(true);
    setError(null);
    try {
      await onSave(settings);
      onClose();
    } catch (err: any) {
      setError(err?.message || 'Failed to save privacy settings');
    } finally {
      setSaving(false);
    }
  };

  return (
    <div
      onClick={onClose}
      style={{
        position: 'fixed',
        inset: 0,
        backgroundColor: 'rgba(3, 6, 15, 0.75)',
        backdropFilter: 'blur(4px)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        zIndex: 1000,
        padding: '20px',
      }}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        style={{
          background: '#0f1420',
          border: '1px solid rgba(255, 255, 255, 0.08)',
          borderRadius: '16px',
          maxWidth: '540px',
          width: '100%',
          padding: '24px',
          boxShadow: '0 20px 60px rgba(0, 0, 0, 0.5)',
        }}
      >
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '18px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <div
              style={{
                width: 36,
                height: 36,
                borderRadius: '10px',
                background: 'rgba(99, 102, 241, 0.15)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <ShieldCheck size={18} color="#a5b4fc" />
            </div>
            <div>
              <h3 style={{ margin: 0, fontSize: '1.05rem', fontWeight: 700, color: '#f8fafc' }}>
                Privacy & Data Settings
              </h3>
              <p style={{ margin: '2px 0 0 0', fontSize: '0.76rem', color: '#94a3b8' }}>
                Control how your data is stored and used.
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            style={{ background: 'none', border: 'none', color: '#64748b', cursor: 'pointer', padding: 4 }}
          >
            <X size={18} />
          </button>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', marginBottom: '18px' }}>
          {toggles.map((t) => (
            <label
              key={t.key}
              style={{
                display: 'flex',
                gap: '14px',
                padding: '12px 14px',
                background: 'rgba(255, 255, 255, 0.02)',
                border: '1px solid rgba(255, 255, 255, 0.06)',
                borderRadius: '10px',
                cursor: 'pointer',
              }}
            >
              <div style={{ flex: 1 }}>
                <div style={{ fontSize: '0.86rem', fontWeight: 600, color: '#f8fafc', marginBottom: '2px' }}>
                  {t.title}
                </div>
                <div style={{ fontSize: '0.74rem', color: '#94a3b8', lineHeight: 1.45 }}>{t.description}</div>
              </div>
              <div
                onClick={(e) => {
                  e.preventDefault();
                  toggle(t.key);
                }}
                style={{
                  width: 40,
                  height: 22,
                  borderRadius: '999px',
                  backgroundColor: settings[t.key] ? '#4f46e5' : 'rgba(255, 255, 255, 0.15)',
                  position: 'relative',
                  transition: 'background-color 0.2s',
                  flexShrink: 0,
                  alignSelf: 'center',
                }}
              >
                <span
                  style={{
                    position: 'absolute',
                    top: 2,
                    left: settings[t.key] ? 20 : 2,
                    width: 18,
                    height: 18,
                    borderRadius: '50%',
                    background: '#f8fafc',
                    transition: 'left 0.2s',
                  }}
                />
              </div>
            </label>
          ))}
        </div>

        {error && (
          <div
            style={{
              fontSize: '0.76rem',
              color: '#fb7185',
              background: 'rgba(244, 63, 94, 0.1)',
              border: '1px solid rgba(244, 63, 94, 0.25)',
              padding: '8px 12px',
              borderRadius: '8px',
              marginBottom: '12px',
            }}
          >
            {error}
          </div>
        )}

        <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '10px' }}>
          <button
            onClick={onClose}
            disabled={saving}
            className="btn btn-outline"
            style={{ padding: '8px 16px', fontSize: '0.82rem' }}
          >
            Cancel
          </button>
          <button
            onClick={handleSave}
            disabled={saving}
            className="btn btn-primary"
            style={{ padding: '8px 16px', fontSize: '0.82rem', display: 'inline-flex', alignItems: 'center', gap: '6px' }}
          >
            {saving ? <Loader2 size={14} className="spin-animate" /> : <Save size={14} />}
            <span>{saving ? 'Saving...' : 'Save Settings'}</span>
          </button>
        </div>
      </div>
    </div>
  );
};
