import React from 'react';
import { ChevronRight, Download, Share2, FileCode, Shield, Calendar, Key } from 'lucide-react';

interface InterviewResultHeaderCardProps {
  onNavigateToDashboard?: () => void;
  onNavigateToHistory?: () => void;
  onDownloadPdf?: () => void;
  onShareLink?: () => void;
  onExportJson?: () => void;
}

export const InterviewResultHeaderCard: React.FC<InterviewResultHeaderCardProps> = ({
  onNavigateToDashboard,
  onNavigateToHistory,
  onDownloadPdf,
  onShareLink,
  onExportJson,
}) => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '14px', marginBottom: '24px' }}>
      {/* 1. Breadcrumb navigation */}
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: '8px',
          fontSize: '0.78rem',
          color: '#94a3b8',
          flexWrap: 'wrap',
        }}
      >
        <span
          onClick={onNavigateToDashboard}
          style={{ cursor: 'pointer', color: '#cbd5e1', transition: 'color 0.15s' }}
          onMouseEnter={(e) => (e.currentTarget.style.color = '#ffffff')}
          onMouseLeave={(e) => (e.currentTarget.style.color = '#cbd5e1')}
        >
          Dashboard
        </span>
        <ChevronRight size={13} style={{ color: '#475569' }} />
        <span
          onClick={onNavigateToHistory}
          style={{ cursor: 'pointer', color: '#cbd5e1', transition: 'color 0.15s' }}
          onMouseEnter={(e) => (e.currentTarget.style.color = '#ffffff')}
          onMouseLeave={(e) => (e.currentTarget.style.color = '#cbd5e1')}
        >
          Practice History
        </span>
        <ChevronRight size={13} style={{ color: '#475569' }} />
        <span style={{ color: '#94a3b8' }}>Simulation #SIM-PY-8821</span>
        <ChevronRight size={13} style={{ color: '#475569' }} />
        <span style={{ color: '#a5b4fc', fontWeight: 600 }}>Interview Result (Web #33)</span>
      </div>

      {/* 2. Track & Benchmark Badge Strip */}
      <div
        style={{
          display: 'inline-flex',
          alignItems: 'center',
          gap: '8px',
          padding: '6px 14px',
          borderRadius: '9999px',
          backgroundColor: 'rgba(30, 41, 59, 0.65)',
          border: '1px solid rgba(255, 255, 255, 0.08)',
          width: 'fit-content',
          fontSize: '0.74rem',
          color: '#e2e8f0',
        }}
      >
        <span
          style={{
            width: '8px',
            height: '8px',
            borderRadius: '50%',
            backgroundColor: '#00f2fe',
            boxShadow: '0 0 8px #00f2fe',
            display: 'inline-block',
          }}
        />
        <span style={{ fontWeight: 600, color: '#f8fafc' }}>
          Track: Python Backend Concurrency & High Throughput APIs (Track #SIM-PY-8821) • Staff IC-6+ Benchmark
        </span>
      </div>

      {/* 3. Hero Header Card */}
      <div
        style={{
          backgroundColor: '#0c0f17',
          border: '1px solid rgba(255, 255, 255, 0.08)',
          borderRadius: '16px',
          padding: '24px 28px',
          position: 'relative',
          overflow: 'hidden',
          background: 'linear-gradient(135deg, rgba(17, 24, 39, 0.95) 0%, rgba(12, 15, 23, 0.98) 100%)',
          boxShadow: '0 10px 30px rgba(0, 0, 0, 0.35)',
        }}
      >
        {/* Background glow */}
        <div
          style={{
            position: 'absolute',
            top: '-60px',
            right: '-60px',
            width: '260px',
            height: '260px',
            borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(99, 102, 241, 0.15) 0%, rgba(0, 0, 0, 0) 70%)',
            pointerEvents: 'none',
          }}
        />

        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'flex-start',
            gap: '24px',
            flexWrap: 'wrap',
          }}
        >
          {/* Left Text and Badges */}
          <div style={{ flex: '1 1 560px', display: 'flex', flexDirection: 'column', gap: '12px' }}>
            {/* Metadata Tags */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', flexWrap: 'wrap' }}>
              <span
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '5px',
                  backgroundColor: 'rgba(16, 185, 129, 0.12)',
                  color: '#34d399',
                  border: '1px solid rgba(16, 185, 129, 0.3)',
                  padding: '3px 10px',
                  borderRadius: '6px',
                  fontSize: '0.72rem',
                  fontWeight: 600,
                }}
              >
                <Shield size={12} />
                Completed Benchmark (5/5 Defended)
              </span>

              <span
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '5px',
                  backgroundColor: 'rgba(99, 102, 241, 0.14)',
                  color: '#a5b4fc',
                  border: '1px solid rgba(99, 102, 241, 0.3)',
                  padding: '3px 10px',
                  borderRadius: '6px',
                  fontSize: '0.72rem',
                  fontWeight: 600,
                }}
              >
                Staff L6+ Python Architecture
              </span>

              <span
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '5px',
                  backgroundColor: 'rgba(255, 255, 255, 0.04)',
                  color: '#94a3b8',
                  border: '1px solid rgba(255, 255, 255, 0.08)',
                  padding: '3px 10px',
                  borderRadius: '6px',
                  fontSize: '0.7rem',
                  fontFamily: 'monospace',
                }}
              >
                <Key size={11} />
                CRYPTOGRAPHIC HASH: #RIVAL17-P9A-46824
              </span>

              <span
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '5px',
                  color: '#64748b',
                  fontSize: '0.72rem',
                  marginLeft: '4px',
                }}
              >
                <Calendar size={12} />
                Date: Oct 24, 2024
              </span>
            </div>

            {/* Main Headline */}
            <h1
              style={{
                fontSize: '2.15rem',
                fontWeight: 800,
                color: '#f8fafc',
                margin: 0,
                letterSpacing: '-0.025em',
                lineHeight: 1.15,
              }}
            >
              Your Interview Result
            </h1>

            {/* Subheading */}
            <p
              style={{
                fontSize: '0.88rem',
                color: '#94a3b8',
                margin: 0,
                lineHeight: 1.6,
                maxWidth: '780px',
              }}
            >
              Deterministic evaluation complete across all 5 adaptive questions against Staff L6+ industry rubrics.
              Review evidence-based feedback, acoustic metrics, and prioritized drills.
            </p>
          </div>

          {/* Right Action Buttons */}
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'flex-end',
              gap: '10px',
              flexShrink: 0,
            }}
          >
            <button
              onClick={onDownloadPdf}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                padding: '10px 20px',
                borderRadius: '10px',
                backgroundColor: '#6366f1',
                color: '#ffffff',
                border: 'none',
                fontSize: '0.84rem',
                fontWeight: 700,
                cursor: 'pointer',
                transition: 'all 0.15s ease',
                boxShadow: '0 4px 14px rgba(99, 102, 241, 0.4)',
              }}
              onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = '#4f46e5')}
              onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = '#6366f1')}
            >
              <Download size={15} />
              <span>Download Debrief PDF</span>
            </button>

            <button
              onClick={onShareLink}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                padding: '8px 16px',
                borderRadius: '8px',
                backgroundColor: 'rgba(255, 255, 255, 0.04)',
                color: '#cbd5e1',
                border: '1px solid rgba(255, 255, 255, 0.12)',
                fontSize: '0.8rem',
                fontWeight: 600,
                cursor: 'pointer',
                transition: 'all 0.15s ease',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.08)';
                e.currentTarget.style.color = '#ffffff';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.04)';
                e.currentTarget.style.color = '#cbd5e1';
              }}
            >
              <Share2 size={14} />
              <span>Share Verification Link</span>
            </button>

            <button
              onClick={onExportJson}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '6px',
                padding: '4px 8px',
                background: 'none',
                color: '#94a3b8',
                border: 'none',
                fontSize: '0.74rem',
                fontWeight: 500,
                cursor: 'pointer',
                transition: 'color 0.15s ease',
              }}
              onMouseEnter={(e) => (e.currentTarget.style.color = '#f8fafc')}
              onMouseLeave={(e) => (e.currentTarget.style.color = '#94a3b8')}
            >
              <FileCode size={13} />
              <span>Export JSON Rubric</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
