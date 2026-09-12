import React from 'react';
import { Sparkles } from 'lucide-react';

interface FooterProps {
  onNavigate?: (page: 'home' | 'features' | 'how-it-works' | 'simulations' | 'pricing' | 'faq' | 'about') => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  return (
    <footer style={{
      background: '#070a12',
      borderTop: '1px solid rgba(255, 255, 255, 0.06)',
      padding: '70px 0 36px',
      position: 'relative'
    }}>
      <div className="container">
        {/* Main 5-Column Grid */}
        <div className="footer-grid" style={{
          display: 'grid',
          gridTemplateColumns: '1.4fr 1fr 1fr 1fr 1fr',
          gap: '40px',
          marginBottom: '56px'
        }}>
          {/* Brand Info */}
          <div style={{ maxWidth: '300px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '18px' }}>
              <div style={{
                width: '32px',
                height: '32px',
                borderRadius: '8px',
                background: 'linear-gradient(135deg, #7c3aed 0%, #6366f1 100%)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                boxShadow: '0 4px 12px rgba(124, 58, 237, 0.35)'
              }}>
                <Sparkles size={16} color="#ffffff" />
              </div>
              <span style={{ fontSize: '17px', fontWeight: 800, color: '#ffffff', letterSpacing: '-0.02em' }}>
                Inprep AI
              </span>
            </div>

            <p style={{
              fontSize: '12.5px',
              color: '#64748b',
              lineHeight: 1.65,
              margin: 0
            }}>
              The authoritative executive interview intelligence studio powered by conversational AI.
            </p>
          </div>

          {/* Column 1: PRODUCT */}
          <div>
            <div style={{
              fontSize: '11px',
              fontWeight: 700,
              color: '#ffffff',
              textTransform: 'uppercase',
              letterSpacing: '0.08em',
              marginBottom: '18px'
            }}>
              PRODUCT
            </div>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '12px', fontSize: '13px', color: '#8896ab' }}>
              <li><a href="#features" onClick={(e) => { if (onNavigate) { e.preventDefault(); onNavigate('features'); window.scrollTo({ top: 0, behavior: 'smooth' }); } }} style={{ color: 'inherit', textDecoration: 'none', transition: 'color 0.2s', cursor: 'pointer' }}>Features</a></li>
              <li><a href="#simulations" onClick={(e) => { if (onNavigate) { e.preventDefault(); onNavigate('simulations'); window.scrollTo({ top: 0, behavior: 'smooth' }); } }} style={{ color: 'inherit', textDecoration: 'none', transition: 'color 0.2s', cursor: 'pointer' }}>Simulation Modes</a></li>
              <li><a href="#simulations" onClick={(e) => { if (onNavigate) { e.preventDefault(); onNavigate('simulations'); window.scrollTo({ top: 0, behavior: 'smooth' }); } }} style={{ color: 'inherit', textDecoration: 'none', transition: 'color 0.2s', cursor: 'pointer' }}>Live Evaluation</a></li>
              <li><a href="#pricing" onClick={(e) => { if (onNavigate) { e.preventDefault(); onNavigate('pricing'); window.scrollTo({ top: 0, behavior: 'smooth' }); } }} style={{ color: 'inherit', textDecoration: 'none', transition: 'color 0.2s', cursor: 'pointer' }}>Pricing Plans</a></li>
            </ul>
          </div>

          {/* Column 2: RESOURCES */}
          <div>
            <div style={{
              fontSize: '11px',
              fontWeight: 700,
              color: '#ffffff',
              textTransform: 'uppercase',
              letterSpacing: '0.08em',
              marginBottom: '18px'
            }}>
              RESOURCES
            </div>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '12px', fontSize: '13px', color: '#8896ab' }}>
              <li><a href="#simulations" onClick={(e) => { if (onNavigate) { e.preventDefault(); onNavigate('simulations'); window.scrollTo({ top: 0, behavior: 'smooth' }); } }} style={{ color: 'inherit', textDecoration: 'none', transition: 'color 0.2s', cursor: 'pointer' }}>Interview Library</a></li>
              <li><a href="#faq" onClick={(e) => { if (onNavigate) { e.preventDefault(); onNavigate('faq'); window.scrollTo({ top: 0, behavior: 'smooth' }); } }} style={{ color: 'inherit', textDecoration: 'none', transition: 'color 0.2s', cursor: 'pointer' }}>FAQ</a></li>
              <li><a href="#how-it-works" onClick={(e) => { if (onNavigate) { e.preventDefault(); onNavigate('how-it-works'); window.scrollTo({ top: 0, behavior: 'smooth' }); } }} style={{ color: 'inherit', textDecoration: 'none', transition: 'color 0.2s', cursor: 'pointer' }}>Executive Playbooks</a></li>
              <li><a href="#features" onClick={(e) => { if (onNavigate) { e.preventDefault(); onNavigate('features'); window.scrollTo({ top: 0, behavior: 'smooth' }); } }} style={{ color: 'inherit', textDecoration: 'none', transition: 'color 0.2s', cursor: 'pointer' }}>Voice Diagnostics</a></li>
            </ul>
          </div>

          {/* Column 3: COMPANY */}
          <div>
            <div style={{
              fontSize: '11px',
              fontWeight: 700,
              color: '#ffffff',
              textTransform: 'uppercase',
              letterSpacing: '0.08em',
              marginBottom: '18px'
            }}>
              COMPANY
            </div>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '12px', fontSize: '13px', color: '#8896ab' }}>
              <li><a href="#" onClick={(e) => { if (onNavigate) { e.preventDefault(); onNavigate('about'); window.scrollTo({ top: 0, behavior: 'smooth' }); } }} style={{ color: 'inherit', textDecoration: 'none', transition: 'color 0.2s', cursor: 'pointer' }}>About Us</a></li>
              <li><a href="#" style={{ color: 'inherit', textDecoration: 'none', transition: 'color 0.2s' }}>Careers</a></li>
              <li><a href="#how-it-works" onClick={(e) => { if (onNavigate) { e.preventDefault(); onNavigate('how-it-works'); window.scrollTo({ top: 0, behavior: 'smooth' }); } }} style={{ color: 'inherit', textDecoration: 'none', transition: 'color 0.2s', cursor: 'pointer' }}>Methodology</a></li>
              <li><a href="#" style={{ color: 'inherit', textDecoration: 'none', transition: 'color 0.2s' }}>Contact</a></li>
            </ul>
          </div>

          {/* Column 4: LEGAL */}
          <div>
            <div style={{
              fontSize: '11px',
              fontWeight: 700,
              color: '#ffffff',
              textTransform: 'uppercase',
              letterSpacing: '0.08em',
              marginBottom: '18px'
            }}>
              LEGAL
            </div>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '12px', fontSize: '13px', color: '#8896ab' }}>
              <li><a href="#" style={{ color: 'inherit', textDecoration: 'none', transition: 'color 0.2s' }}>Privacy Policy</a></li>
              <li><a href="#" style={{ color: 'inherit', textDecoration: 'none', transition: 'color 0.2s' }}>Terms of Service</a></li>
              <li><a href="#" style={{ color: 'inherit', textDecoration: 'none', transition: 'color 0.2s' }}>Security & Compliance</a></li>
              <li><a href="#" style={{ color: 'inherit', textDecoration: 'none', transition: 'color 0.2s' }}>Cookie Preferences</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom Status Bar */}
        <div style={{
          borderTop: '1px solid rgba(255, 255, 255, 0.05)',
          paddingTop: '24px',
          display: 'flex',
          flexWrap: 'wrap',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: '16px',
          fontSize: '12px',
          color: '#64748b'
        }}>
          <div>
            © 2026 Inprep AI. All rights reserved.
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <span style={{
              width: '7px',
              height: '7px',
              borderRadius: '50%',
              background: '#38bdf8',
              display: 'inline-block',
              boxShadow: '0 0 8px rgba(56, 189, 248, 0.8)'
            }} />
            <span style={{ color: '#94a3b8' }}>Real-Time Synthetic Diagnostics Online</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
