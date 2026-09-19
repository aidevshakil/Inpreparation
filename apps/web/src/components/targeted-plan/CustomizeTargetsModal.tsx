import React, { useState } from 'react';
import { X, Check, Sliders, Bell } from 'lucide-react';
import { CustomTargetsConfig } from '../../services/aiPlanStore';

interface CustomizeTargetsModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialTargets: CustomTargetsConfig;
  onSave: (targets: CustomTargetsConfig) => void;
}

export const CustomizeTargetsModal: React.FC<CustomizeTargetsModalProps> = ({
  isOpen,
  onClose,
  initialTargets,
  onSave,
}) => {
  const [targetComposite, setTargetComposite] = useState(initialTargets.targetComposite || 80.0);
  const [dailyAlertTime, setDailyAlertTime] = useState(initialTargets.dailyAlertTime || '09:00 AM (UTC+6)');
  const [alertActive, setAlertActive] = useState(initialTargets.alertActive ?? true);
  const [technicalDrills, setTechnicalDrills] = useState(initialTargets.technicalDrillsTarget || 16);
  const [standardSessions, setStandardSessions] = useState(initialTargets.standardSessionsTarget || 4);

  if (!isOpen) return null;

  const handleSave = () => {
    onSave({
      ...initialTargets,
      targetComposite,
      dailyAlertTime,
      alertActive,
      technicalDrillsTarget: technicalDrills,
      standardSessionsTarget: standardSessions,
    });
    onClose();
  };

  return (
    <div
      style={{
        position: 'fixed',
        inset: 0,
        backgroundColor: 'rgba(0, 0, 0, 0.75)',
        backdropFilter: 'blur(8px)',
        zIndex: 200,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '20px',
      }}
    >
      <div
        style={{
          width: '100%',
          maxWidth: '520px',
          backgroundColor: '#0c1322',
          border: '1px solid rgba(99, 102, 241, 0.3)',
          borderRadius: '16px',
          padding: '24px 28px',
          boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.7)',
          display: 'flex',
          flexDirection: 'column',
          gap: '20px',
        }}
      >
        {/* Header */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <Sliders size={18} color="#818cf8" />
            <h3 style={{ margin: 0, fontSize: '1.1rem', fontWeight: 800, color: '#ffffff' }}>
              Customize Calibration Targets
            </h3>
          </div>
          <button
            onClick={onClose}
            style={{
              background: 'none',
              border: 'none',
              color: '#94a3b8',
              cursor: 'pointer',
              padding: '4px',
            }}
          >
            <X size={18} />
          </button>
        </div>

        {/* Content */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
          {/* Target Composite Score */}
          <div>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '6px' }}>
              <span style={{ fontSize: '0.78rem', fontWeight: 600, color: '#cbd5e1' }}>
                Target Composite Score
              </span>
              <span style={{ fontSize: '0.84rem', fontWeight: 800, color: '#818cf8' }}>
                {targetComposite.toFixed(1)} / 100
              </span>
            </div>
            <input
              type="range"
              min="70"
              max="95"
              step="0.5"
              value={targetComposite}
              onChange={(e) => setTargetComposite(parseFloat(e.target.value))}
              style={{
                width: '100%',
                accentColor: '#6366f1',
                cursor: 'pointer',
              }}
            />
            <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.66rem', color: '#64748b' }}>
              <span>70.0 (L5 Bar)</span>
              <span>80.0 (Staff L6 Standard)</span>
              <span>90.0+ (Principal L7)</span>
            </div>
          </div>

          {/* Standard Sessions Target */}
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <div style={{ display: 'flex', flexDirection: 'column' }}>
              <span style={{ fontSize: '0.78rem', fontWeight: 600, color: '#cbd5e1' }}>
                Weekly 5-Question Mocks
              </span>
              <span style={{ fontSize: '0.68rem', color: '#64748b' }}>Full simulation cadence</span>
            </div>
            <select
              value={standardSessions}
              onChange={(e) => setStandardSessions(parseInt(e.target.value))}
              style={{
                backgroundColor: '#1e293b',
                border: '1px solid rgba(255, 255, 255, 0.1)',
                borderRadius: '8px',
                padding: '6px 12px',
                color: '#f8fafc',
                fontSize: '0.76rem',
                fontWeight: 600,
              }}
            >
              <option value="2">2 Sessions / week</option>
              <option value="3">3 Sessions / week</option>
              <option value="4">4 Sessions / week</option>
              <option value="5">5 Sessions / week</option>
            </select>
          </div>

          {/* Technical Drills Target */}
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <div style={{ display: 'flex', flexDirection: 'column' }}>
              <span style={{ fontSize: '0.78rem', fontWeight: 600, color: '#cbd5e1' }}>
                Technical Systems Micro-Drills
              </span>
              <span style={{ fontSize: '0.68rem', color: '#64748b' }}>10–15 min targeted scenario drills</span>
            </div>
            <select
              value={technicalDrills}
              onChange={(e) => setTechnicalDrills(parseInt(e.target.value))}
              style={{
                backgroundColor: '#1e293b',
                border: '1px solid rgba(255, 255, 255, 0.1)',
                borderRadius: '8px',
                padding: '6px 12px',
                color: '#f8fafc',
                fontSize: '0.76rem',
                fontWeight: 600,
              }}
            >
              <option value="8">8 Drills / cycle</option>
              <option value="12">12 Drills / cycle</option>
              <option value="16">16 Drills / cycle</option>
              <option value="20">20 Drills / cycle</option>
            </select>
          </div>

          {/* Daily Alert Time */}
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <Bell size={15} color="#38bdf8" />
              <div style={{ display: 'flex', flexDirection: 'column' }}>
                <span style={{ fontSize: '0.78rem', fontWeight: 600, color: '#cbd5e1' }}>
                  Daily Practice Alert
                </span>
                <span style={{ fontSize: '0.68rem', color: '#64748b' }}>Push & calendar notification</span>
              </div>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <select
                value={dailyAlertTime}
                onChange={(e) => setDailyAlertTime(e.target.value)}
                style={{
                  backgroundColor: '#1e293b',
                  border: '1px solid rgba(255, 255, 255, 0.1)',
                  borderRadius: '8px',
                  padding: '6px 10px',
                  color: '#f8fafc',
                  fontSize: '0.74rem',
                }}
              >
                <option value="08:00 AM (UTC+6)">08:00 AM</option>
                <option value="09:00 AM (UTC+6)">09:00 AM</option>
                <option value="06:00 PM (UTC+6)">06:00 PM</option>
                <option value="08:00 PM (UTC+6)">08:00 PM</option>
                <option value="09:00 PM (UTC+6)">09:00 PM</option>
              </select>

              <button
                type="button"
                onClick={() => setAlertActive(!alertActive)}
                style={{
                  padding: '6px 10px',
                  borderRadius: '8px',
                  backgroundColor: alertActive ? 'rgba(74, 222, 128, 0.15)' : 'rgba(255, 255, 255, 0.05)',
                  border: alertActive ? '1px solid #4ade80' : '1px solid rgba(255, 255, 255, 0.1)',
                  color: alertActive ? '#4ade80' : '#64748b',
                  fontSize: '0.7rem',
                  fontWeight: 700,
                  cursor: 'pointer',
                }}
              >
                {alertActive ? 'Active' : 'Muted'}
              </button>
            </div>
          </div>
        </div>

        {/* Footer Actions */}
        <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '10px', paddingTop: '10px' }}>
          <button
            onClick={onClose}
            style={{
              padding: '8px 16px',
              backgroundColor: 'transparent',
              border: '1px solid rgba(255, 255, 255, 0.1)',
              borderRadius: '8px',
              color: '#94a3b8',
              fontSize: '0.78rem',
              fontWeight: 600,
              cursor: 'pointer',
            }}
          >
            Cancel
          </button>
          <button
            onClick={handleSave}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '6px',
              padding: '8px 18px',
              backgroundColor: '#6366f1',
              border: 'none',
              borderRadius: '8px',
              color: '#ffffff',
              fontSize: '0.78rem',
              fontWeight: 700,
              cursor: 'pointer',
              boxShadow: '0 4px 14px rgba(99, 102, 241, 0.4)',
            }}
          >
            <Check size={14} />
            <span>Save Targets</span>
          </button>
        </div>
      </div>
    </div>
  );
};
