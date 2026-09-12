import React from 'react';
import { Sparkles, Mail, Radio, MessageCircle } from 'lucide-react';

interface FooterProps {
  onNavigate?: (page: 'home' | 'features' | 'how-it-works' | 'simulations' | 'pricing' | 'faq' | 'about') => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  return (
    <footer style={{
      background: '#06080e',
      borderTop: '1px solid rgba(255, 255, 255, 0.06)',
      padding: '70px 0 36px',
      position: 'relative'
    }}>
      <div className="container" style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 20px' }}>
        
        {/* Main 4-Column Layout */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1.5fr 1fr 1fr 1fr',
          gap: '48px',
          marginBottom: '56px'
        }}>
          {/* Brand & Mission */}
          <div style={{ maxWidth: '340px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '16px' }}>
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
              <span style={{ fontSize: '18px', fontWeight: 800, color: '#ffffff', letterSpacing: '-0.02em' }}>
                Inprep.ai
              </span>
            </div>

            <p style={{
              fontSize: '13px',
              color: '#8896ab',
              lineHeight: 1.65,
              marginBottom: '20px'
            }}>
              Executive-tier synthetic interview intelligence. Master high-stakes behavioral, system design, and leadership evaluations with real-time biometric vocal insights.
            </p>

            {/* Social / Media Icon Buttons */}
            <div style={{ display: 'flex', gap: '10px' }}>
              {[
                { icon: <Mail size={15} color="#94a3b8" />, href: 'mailto:contact@inprep.ai', label: 'Email' },
                { icon: <Radio size={15} color="#94a3b8" />, href: '#', label: 'Broadcast' },
                { icon: <MessageCircle size={15} color="#94a3b8" />, href: '#', label: 'Community' }
              ].map((item, idx) => (
                <a
                  key={idx}
                  href={item.href}
                  aria-label={item.label}
                  style={{
                    width: '34px',
                    height: '34px',
                    borderRadius: '50%',
                    background: 'rgba(255, 255, 255, 0.04)',
                    border: '1px solid rgba(255, 255, 255, 0.08)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    textDecoration: 'none',
                    transition: 'all 0.2s ease'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = 'rgba(255, 255, 255, 0.1)';
                    e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.2)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = 'rgba(255, 255, 255, 0.04)';
                    e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.08)';
                  }}
                >
                  {item.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Column 1: Product */}
          <div>
            <div style={{
              fontSize: '14px',
              fontWeight: 700,
              color: '#ffffff',
              marginBottom: '18px'
            }}>
              Product
            </div>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '12px', fontSize: '13.5px', color: '#8896ab' }}>
              <li><a href="#features" onClick={(e) => { if (onNavigate) { e.preventDefault(); onNavigate('features'); window.scrollTo({ top: 0, behavior: 'smooth' }); } }} style={{ color: 'inherit', textDecoration: 'none', transition: 'color 0.2s' }}>Features</a></li>
              <li><a href="#simulations" onClick={(e) => { if (onNavigate) { e.preventDefault(); onNavigate('simulations'); window.scrollTo({ top: 0, behavior: 'smooth' }); } }} style={{ color: 'inherit', textDecoration: 'none', transition: 'color 0.2s' }}>Simulation Engine</a></li>
              <li><a href="#simulations" onClick={(e) => { if (onNavigate) { e.preventDefault(); onNavigate('simulations'); window.scrollTo({ top: 0, behavior: 'smooth' }); } }} style={{ color: 'inherit', textDecoration: 'none', transition: 'color 0.2s' }}>Role Tracks</a></li>
              <li><a href="#pricing" onClick={(e) => { if (onNavigate) { e.preventDefault(); onNavigate('pricing'); window.scrollTo({ top: 0, behavior: 'smooth' }); } }} style={{ color: 'inherit', textDecoration: 'none', transition: 'color 0.2s' }}>Pricing Plans</a></li>
              <li><a href="#" style={{ color: 'inherit', textDecoration: 'none', transition: 'color 0.2s' }}>Changelog</a></li>
            </ul>
          </div>

          {/* Column 2: Resources */}
          <div>
            <div style={{
              fontSize: '14px',
              fontWeight: 700,
              color: '#ffffff',
              marginBottom: '18px'
            }}>
              Resources
            </div>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '12px', fontSize: '13.5px', color: '#8896ab' }}>
              <li><a href="#how-it-works" onClick={(e) => { if (onNavigate) { e.preventDefault(); onNavigate('how-it-works'); window.scrollTo({ top: 0, behavior: 'smooth' }); } }} style={{ color: 'inherit', textDecoration: 'none', transition: 'color 0.2s' }}>Methodology</a></li>
              <li><a href="#simulations" onClick={(e) => { if (onNavigate) { e.preventDefault(); onNavigate('simulations'); window.scrollTo({ top: 0, behavior: 'smooth' }); } }} style={{ color: 'inherit', textDecoration: 'none', transition: 'color 0.2s' }}>Question Library</a></li>
              <li><a href="#how-it-works" onClick={(e) => { if (onNavigate) { e.preventDefault(); onNavigate('how-it-works'); window.scrollTo({ top: 0, behavior: 'smooth' }); } }} style={{ color: 'inherit', textDecoration: 'none', transition: 'color 0.2s' }}>Executive Guide</a></li>
              <li><a href="#faq" onClick={(e) => { if (onNavigate) { e.preventDefault(); onNavigate('faq'); window.scrollTo({ top: 0, behavior: 'smooth' }); } }} style={{ color: 'inherit', textDecoration: 'none', transition: 'color 0.2s' }}>FAQ & Help</a></li>
              <li><a href="#" style={{ color: 'inherit', textDecoration: 'none', transition: 'color 0.2s' }}>System Status</a></li>
            </ul>
          </div>

          {/* Column 3: Company */}
          <div>
            <div style={{
              fontSize: '14px',
              fontWeight: 700,
              color: '#ffffff',
              marginBottom: '18px'
            }}>
              Company
            </div>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '12px', fontSize: '13.5px', color: '#8896ab' }}>
              <li><a href="#" onClick={(e) => { if (onNavigate) { e.preventDefault(); onNavigate('about'); window.scrollTo({ top: 0, behavior: 'smooth' }); } }} style={{ color: 'inherit', textDecoration: 'none', transition: 'color 0.2s' }}>About Studio</a></li>
              <li><a href="#" style={{ color: 'inherit', textDecoration: 'none', transition: 'color 0.2s' }}>AI Ethics</a></li>
              <li><a href="#" style={{ color: 'inherit', textDecoration: 'none', transition: 'color 0.2s' }}>Research</a></li>
              <li><a href="#" style={{ color: 'inherit', textDecoration: 'none', transition: 'color 0.2s' }}>Careers</a></li>
              <li><a href="#" style={{ color: 'inherit', textDecoration: 'none', transition: 'color 0.2s' }}>Contact</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div style={{
          borderTop: '1px solid rgba(255, 255, 255, 0.05)',
          paddingTop: '24px',
          display: 'flex',
          flexWrap: 'wrap',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: '16px',
          fontSize: '12.5px',
          color: '#64748b'
        }}>
          <div>
            © 2025 Inprep AI Inc. All rights reserved.
          </div>

          <div style={{ display: 'flex', gap: '24px' }}>
            <a href="#" style={{ color: '#8896ab', textDecoration: 'none', transition: 'color 0.2s' }}>Privacy Policy</a>
            <a href="#" style={{ color: '#8896ab', textDecoration: 'none', transition: 'color 0.2s' }}>Terms of Service</a>
            <a href="#" style={{ color: '#8896ab', textDecoration: 'none', transition: 'color 0.2s' }}>Security Whitepaper</a>
          </div>
        </div>

      </div>
    </footer>
  );
};
