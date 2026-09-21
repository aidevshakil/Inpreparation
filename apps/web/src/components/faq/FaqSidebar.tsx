import React from 'react';
import {
  Rocket,
  FileText,
  Mic,
  Activity,
  Video,
  BarChart2,
  Award,
  CreditCard,
  Shield,
  Wrench,
  HelpCircle,
  Headphones,
  Mail
} from 'lucide-react';
import { FaqCategory } from './faqData';

interface FaqSidebarProps {
  categories: FaqCategory[];
  activeCategoryId: string;
  onSelectCategory: (categoryId: string) => void;
  totalAnswersCount: number;
}

export const FaqSidebar: React.FC<FaqSidebarProps> = ({
  categories,
  activeCategoryId,
  onSelectCategory,
  totalAnswersCount
}) => {
  const getCategoryIcon = (iconName: string, isActive: boolean) => {
    const color = isActive ? '#ffffff' : '#818cf8';
    const size = 16;
    switch (iconName) {
      case 'Rocket':
        return <Rocket size={size} color={color} />;
      case 'FileText':
        return <FileText size={size} color={color} />;
      case 'Mic':
        return <Mic size={size} color={color} />;
      case 'Activity':
        return <Activity size={size} color={color} />;
      case 'Video':
        return <Video size={size} color={color} />;
      case 'BarChart2':
        return <BarChart2 size={size} color={color} />;
      case 'Award':
        return <Award size={size} color={color} />;
      case 'CreditCard':
        return <CreditCard size={size} color={color} />;
      case 'Shield':
        return <Shield size={size} color={color} />;
      case 'Wrench':
        return <Wrench size={size} color={color} />;
      default:
        return <HelpCircle size={size} color={color} />;
    }
  };

  return (
    <aside style={{ width: '100%', maxWidth: '290px', position: 'sticky', top: '90px', alignSelf: 'flex-start' }}>
      
      {/* Directory Navigation Card */}
      <div style={{
        background: '#0a0e18',
        border: '1px solid rgba(255, 255, 255, 0.08)',
        borderRadius: '18px',
        padding: '20px 16px',
        boxShadow: '0 10px 30px rgba(0, 0, 0, 0.4)',
        marginBottom: '20px'
      }}>
        {/* Header */}
        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          padding: '0 8px 14px',
          borderBottom: '1px solid rgba(255, 255, 255, 0.06)',
          marginBottom: '12px'
        }}>
          <span style={{ fontSize: '11px', fontWeight: 800, color: '#64748b', letterSpacing: '0.06em', textTransform: 'uppercase' }}>
            FAQ DIRECTORY
          </span>
          <span style={{ fontSize: '11px', fontWeight: 700, color: '#38bdf8' }}>
            {totalAnswersCount} Verified Answers
          </span>
        </div>

        {/* Navigation Categories */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
          {categories.map((cat) => {
            const isActive = activeCategoryId === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => onSelectCategory(cat.id)}
                style={{
                  width: '100%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  padding: '10px 12px',
                  borderRadius: '10px',
                  background: isActive ? 'linear-gradient(135deg, #7c3aed 0%, #6366f1 100%)' : 'transparent',
                  border: isActive ? '1px solid rgba(168, 85, 247, 0.4)' : '1px solid transparent',
                  color: isActive ? '#ffffff' : '#94a3b8',
                  fontSize: '13px',
                  fontWeight: isActive ? 700 : 500,
                  cursor: 'pointer',
                  textAlign: 'left',
                  transition: 'all 0.15s ease',
                  boxShadow: isActive ? '0 4px 15px rgba(124, 58, 237, 0.3)' : 'none'
                }}
                onMouseEnter={(e) => {
                  if (!isActive) {
                    e.currentTarget.style.background = 'rgba(255, 255, 255, 0.04)';
                    e.currentTarget.style.color = '#ffffff';
                  }
                }}
                onMouseLeave={(e) => {
                  if (!isActive) {
                    e.currentTarget.style.background = 'transparent';
                    e.currentTarget.style.color = '#94a3b8';
                  }
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                  {getCategoryIcon(cat.iconName, isActive)}
                  <span>{cat.name}</span>
                </div>

                <span style={{
                  fontSize: '11px',
                  fontWeight: 700,
                  padding: '2px 7px',
                  borderRadius: '100px',
                  background: isActive ? 'rgba(255, 255, 255, 0.2)' : 'rgba(255, 255, 255, 0.05)',
                  color: isActive ? '#ffffff' : '#64748b'
                }}>
                  {cat.count}
                </span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Need Personalized Help? Support Box */}
      <div style={{
        background: 'linear-gradient(135deg, #121829 0%, #090d16 100%)',
        border: '1px solid rgba(124, 58, 237, 0.25)',
        borderRadius: '18px',
        padding: '22px 18px',
        boxShadow: '0 10px 30px rgba(0, 0, 0, 0.4)'
      }}>
        {/* Support Icon */}
        <div style={{
          width: '36px',
          height: '36px',
          borderRadius: '10px',
          background: 'linear-gradient(135deg, #7c3aed 0%, #6366f1 100%)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          marginBottom: '14px',
          boxShadow: '0 4px 12px rgba(124, 58, 237, 0.35)'
        }}>
          <Headphones size={18} color="#ffffff" />
        </div>

        {/* Title & Subtext */}
        <h3 style={{ fontSize: '15px', fontWeight: 700, color: '#ffffff', marginBottom: '8px' }}>
          Need personalized help?
        </h3>

        <p style={{ fontSize: '12px', color: '#94a3b8', lineHeight: 1.55, margin: '0 0 16px' }}>
          Our engineering & executive coaching support answers technical questions and setup hurdles in under 4 hours.
        </p>

        {/* Contact Button */}
        <a
          href="mailto:support@inprep.ai"
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '8px',
            width: '100%',
            padding: '10px 0',
            background: 'rgba(255, 255, 255, 0.06)',
            border: '1px solid rgba(255, 255, 255, 0.12)',
            borderRadius: '10px',
            color: '#ffffff',
            fontSize: '12.5px',
            fontWeight: 600,
            textDecoration: 'none',
            transition: 'all 0.2s ease',
            marginBottom: '14px'
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.background = 'rgba(124, 58, 237, 0.25)';
            e.currentTarget.style.borderColor = 'rgba(168, 85, 247, 0.45)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.background = 'rgba(255, 255, 255, 0.06)';
            e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.12)';
          }}
        >
          <Mail size={14} color="#a5b4fc" />
          <span>Contact Engineering Team</span>
        </a>

        {/* Status Indicators Footer */}
        <div style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          fontSize: '11px',
          color: '#64748b',
          borderTop: '1px solid rgba(255, 255, 255, 0.05)',
          paddingTop: '10px'
        }}>
          <span>Avg. response: ~27 min</span>
          <div style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
            <span style={{
              width: '6px',
              height: '6px',
              borderRadius: '50%',
              background: '#10b981',
              display: 'inline-block',
              boxShadow: '0 0 6px #10b981'
            }} />
            <span style={{ color: '#cbd5e1', fontWeight: 600 }}>Online</span>
          </div>
        </div>

      </div>

    </aside>
  );
};
