import React from 'react';
import { Users, BookOpen, Star, Building2 } from 'lucide-react';

export const StatsBanner: React.FC = () => {
  const stats = [
    {
      icon: <Users size={24} color="#818cf8" />,
      value: '10K+',
      label: 'Active Candidates Prepared',
      subtext: 'Across 45+ countries worldwide'
    },
    {
      icon: <BookOpen size={24} color="#06b6d4" />,
      value: '500+',
      label: 'Interview Roles & Tracks',
      subtext: 'Software, PM, AI, System Design & HR'
    },
    {
      icon: <Star size={24} color="#f59e0b" />,
      value: '4.9/5',
      label: 'Average Candidate Rating',
      subtext: 'From 3,500+ verified reviews'
    },
    {
      icon: <Building2 size={24} color="#10b981" />,
      value: '100+',
      label: 'Companies Benchmarked',
      subtext: 'Google, Meta, Amazon, Stripe rubrics'
    }
  ];

  return (
    <section style={{
      padding: '40px 0 80px',
      position: 'relative',
      zIndex: 2
    }}>
      <div className="container">
        <div style={{
          textAlign: 'center',
          marginBottom: '36px'
        }}>
          <span style={{
            fontSize: '12px',
            fontWeight: 700,
            letterSpacing: '0.1em',
            textTransform: 'uppercase',
            color: '#64748b',
            display: 'block',
            marginBottom: '8px'
          }}>
            PROVEN TRACK RECORD
          </span>
          <h2 style={{
            fontSize: '28px',
            fontWeight: 800,
            color: '#f8fafc',
            letterSpacing: '-0.02em'
          }}>
            Built to Accelerate Interview Preparation
          </h2>
        </div>

        {/* 4 Stat Cards Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
          gap: '20px'
        }}>
          {stats.map((stat, idx) => (
            <div
              key={idx}
              className="glass-card"
              style={{
                textAlign: 'center',
                padding: '30px 20px',
                background: 'linear-gradient(180deg, rgba(19, 24, 38, 0.8) 0%, rgba(10, 14, 23, 0.95) 100%)',
                border: '1px solid rgba(255, 255, 255, 0.07)',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center'
              }}
            >
              <div style={{
                width: '50px',
                height: '50px',
                borderRadius: '14px',
                background: 'rgba(255, 255, 255, 0.04)',
                border: '1px solid rgba(255, 255, 255, 0.08)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginBottom: '16px'
              }}>
                {stat.icon}
              </div>

              <div style={{
                fontSize: '38px',
                fontWeight: 800,
                letterSpacing: '-0.03em',
                background: 'linear-gradient(135deg, #ffffff 0%, #a5b4fc 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                marginBottom: '4px'
              }}>
                {stat.value}
              </div>

              <div style={{
                fontSize: '15px',
                fontWeight: 700,
                color: '#e2e8f0',
                marginBottom: '4px'
              }}>
                {stat.label}
              </div>

              <div style={{
                fontSize: '12px',
                color: '#64748b'
              }}>
                {stat.subtext}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
