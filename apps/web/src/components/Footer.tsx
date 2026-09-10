import React from 'react';
import { Sparkles, Github, Twitter, Linkedin } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer style={{
      background: '#07090e',
      borderTop: '1px solid rgba(255, 255, 255, 0.08)',
      padding: '70px 0 36px',
      position: 'relative'
    }}>
      <div className="container">
        {/* Main 4-Column Footer */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
          gap: '40px',
          marginBottom: '50px'
        }}>
          {/* Brand Info */}
          <div style={{ maxWidth: '280px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '16px' }}>
              <div style={{
                width: '32px',
                height: '32px',
                borderRadius: '8px',
                background: 'linear-gradient(135deg, #7c3aed 0%, #38bdf8 100%)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}>
                <Sparkles size={18} color="#ffffff" />
              </div>
              <span style={{ fontSize: '18px', fontWeight: 800, color: '#f8fafc' }}>
                InPrep<span style={{ color: '#818cf8' }}>AI</span>
              </span>
            </div>
            <p style={{ fontSize: '13px', color: '#94a3b8', lineHeight: 1.6, marginBottom: '20px' }}>
              The next-generation AI interview simulator. Master system design, coding, and behavioral interviews with real-time feedback.
            </p>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
              <a href="#" style={{ color: '#94a3b8', padding: '6px', background: 'rgba(255, 255, 255, 0.04)', borderRadius: '6px' }} title="Twitter">
                <Twitter size={16} />
              </a>
              <a href="#" style={{ color: '#94a3b8', padding: '6px', background: 'rgba(255, 255, 255, 0.04)', borderRadius: '6px' }} title="GitHub">
                <Github size={16} />
              </a>
              <a href="#" style={{ color: '#94a3b8', padding: '6px', background: 'rgba(255, 255, 255, 0.04)', borderRadius: '6px' }} title="LinkedIn">
                <Linkedin size={16} />
              </a>
            </div>
          </div>

          {/* Product Links */}
          <div>
            <div style={{ fontSize: '13px', fontWeight: 700, color: '#f8fafc', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '16px' }}>
              Product
            </div>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '10px', fontSize: '14px', color: '#94a3b8' }}>
              <li><a href="#hero" style={{ color: 'inherit' }}>Live AI Simulation</a></li>
              <li><a href="#analysis" style={{ color: 'inherit' }}>Voice & Body Language HUD</a></li>
              <li><a href="#simulations" style={{ color: 'inherit' }}>Track Rubrics</a></li>
              <li><a href="#model-answers" style={{ color: 'inherit' }}>STAR Model Answers</a></li>
              <li><a href="#pricing" style={{ color: 'inherit' }}>Pricing Plans</a></li>
            </ul>
          </div>

          {/* Role Categories */}
          <div>
            <div style={{ fontSize: '13px', fontWeight: 700, color: '#f8fafc', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '16px' }}>
              Interview Tracks
            </div>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '10px', fontSize: '14px', color: '#94a3b8' }}>
              <li><a href="#simulations" style={{ color: 'inherit' }}>Software Engineering</a></li>
              <li><a href="#simulations" style={{ color: 'inherit' }}>Distributed Systems</a></li>
              <li><a href="#simulations" style={{ color: 'inherit' }}>AI & Machine Learning</a></li>
              <li><a href="#simulations" style={{ color: 'inherit' }}>Product Management</a></li>
              <li><a href="#simulations" style={{ color: 'inherit' }}>Behavioral & Leadership</a></li>
            </ul>
          </div>

          {/* Company & Legal */}
          <div>
            <div style={{ fontSize: '13px', fontWeight: 700, color: '#f8fafc', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '16px' }}>
              Resources & Privacy
            </div>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '10px', fontSize: '14px', color: '#94a3b8' }}>
              <li><a href="#" style={{ color: 'inherit' }}>Candidate Security Guide</a></li>
              <li><a href="#" style={{ color: 'inherit' }}>FAANG Rubric Whitepaper</a></li>
              <li><a href="#" style={{ color: 'inherit' }}>Privacy Policy</a></li>
              <li><a href="#" style={{ color: 'inherit' }}>Terms of Service</a></li>
              <li><a href="#" style={{ color: 'inherit' }}>Support & Help Desk</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom Status Bar */}
        <div style={{
          borderTop: '1px solid rgba(255, 255, 255, 0.06)',
          paddingTop: '24px',
          display: 'flex',
          flexWrap: 'wrap',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: '16px',
          fontSize: '13px',
          color: '#64748b'
        }}>
          <div>
            © {new Date().getFullYear()} InPrep AI Platform. All rights reserved.
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <span style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#10b981', display: 'inline-block' }} />
            <span style={{ color: '#94a3b8' }}>All Systems Operational (FastAPI + React Monorepo)</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
