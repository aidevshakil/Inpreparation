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
  ChevronDown,
  Lock
} from 'lucide-react';
import { FaqCategory } from './faqData';

interface FaqCategoryListProps {
  categories: FaqCategory[];
  openQuestionIds: string[];
  onToggleQuestion: (questionId: string) => void;
  searchQuery: string;
}

export const FaqCategoryList: React.FC<FaqCategoryListProps> = ({
  categories,
  openQuestionIds,
  onToggleQuestion,
  searchQuery
}) => {
  const getCategoryIcon = (iconName: string) => {
    const color = 'var(--primary-color)';
    const size = 20;
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

  // Filter questions based on search query
  const filteredCategories = categories.map((cat) => {
    if (!searchQuery.trim()) return cat;
    const query = searchQuery.toLowerCase();
    const matchingQuestions = cat.questions.filter(
      (q) =>
        q.question.toLowerCase().includes(query) ||
        q.answer.toLowerCase().includes(query) ||
        cat.name.toLowerCase().includes(query)
    );
    return {
      ...cat,
      questions: matchingQuestions
    };
  }).filter((cat) => cat.questions.length > 0);

  if (filteredCategories.length === 0) {
    return (
      <div style={{
        background: 'var(--bg-card)',
        border: '1px solid var(--border-subtle)',
        borderRadius: '20px',
        padding: '50px 30px',
        textAlign: 'center'
      }}>
        <div style={{
          width: '50px',
          height: '50px',
          borderRadius: '50%',
          background: 'rgba(99, 102, 241, 0.15)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          margin: '0 auto 16px'
        }}>
          <HelpCircle size={24} color="var(--primary-color)" />
        </div>
        <h3 style={{ fontSize: '18px', fontWeight: 700, color: 'var(--text-main)', marginBottom: '8px' }}>
          No Matching Answers Found
        </h3>
        <p style={{ fontSize: '14px', color: 'var(--text-secondary)', margin: 0 }}>
          Try adjusting your search terms or browse categories using the directory on the left.
        </p>
      </div>
    );
  }

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '36px', flex: 1 }}>
      {filteredCategories.map((cat) => (
        <section key={cat.id} id={cat.id} style={{ scrollMarginTop: '100px' }}>
          
          {/* Category Header */}
          {cat.description ? (
            /* Featured Category Card Banner (e.g., Computer Vision & Camera) */
            <div style={{
              background: 'var(--bg-card)',
              border: '1px solid rgba(2, 132, 199, 0.25)',
              borderRadius: '16px',
              padding: '22px 24px',
              marginBottom: '16px',
              boxShadow: 'var(--shadow-md)'
            }}>
              <div style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                flexWrap: 'wrap',
                gap: '12px',
                marginBottom: '12px'
              }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
                  <div style={{
                    width: '38px',
                    height: '38px',
                    borderRadius: '10px',
                    background: 'rgba(2, 132, 199, 0.15)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0
                  }}>
                    <Video size={20} color="#0284c7" />
                  </div>
                  <div>
                    <h2 style={{ fontSize: '20px', fontWeight: 700, color: 'var(--text-main)', margin: 0, letterSpacing: '-0.02em' }}>
                      {cat.name}
                    </h2>
                    {cat.subtitle && (
                      <div style={{ fontSize: '12px', fontWeight: 600, color: '#0284c7', marginTop: '2px' }}>
                        {cat.subtitle}
                      </div>
                    )}
                  </div>
                </div>

                {cat.badge && (
                  <div style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    padding: '4px 12px',
                    borderRadius: '100px',
                    background: 'rgba(2, 132, 199, 0.12)',
                    border: '1px solid rgba(2, 132, 199, 0.3)',
                    fontSize: '11px',
                    fontWeight: 700,
                    color: '#0284c7',
                    letterSpacing: '0.04em'
                  }}>
                    <span>{cat.badge}</span>
                  </div>
                )}
              </div>

              <p style={{
                fontSize: '13px',
                color: 'var(--text-secondary)',
                lineHeight: 1.6,
                margin: 0
              }}>
                {cat.description}
              </p>
            </div>
          ) : (
            /* Standard Category Header */
            <div style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              flexWrap: 'wrap',
              gap: '12px',
              marginBottom: '16px'
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                <div style={{
                  width: '36px',
                  height: '36px',
                  borderRadius: '10px',
                  background: 'rgba(99, 102, 241, 0.15)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}>
                  {getCategoryIcon(cat.iconName)}
                </div>
                <h2 style={{ fontSize: '22px', fontWeight: 700, color: 'var(--text-main)', margin: 0 }}>
                  {cat.name}
                </h2>
              </div>

              {cat.badge && (
                <div style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '6px',
                  padding: '4px 12px',
                  borderRadius: '100px',
                  background: 'rgba(2, 132, 199, 0.12)',
                  border: '1px solid rgba(2, 132, 199, 0.25)',
                  fontSize: '11px',
                  fontWeight: 700,
                  color: '#0284c7',
                  letterSpacing: '0.04em'
                }}>
                  <Lock size={12} />
                  <span>{cat.badge}</span>
                </div>
              )}
            </div>
          )}

          {/* Accordion Questions */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
            {cat.questions.map((q) => {
              const isOpen = openQuestionIds.includes(q.id);
              return (
                <div
                  key={q.id}
                  style={{
                    background: 'var(--bg-card)',
                    border: isOpen ? '1px solid var(--primary-color)' : '1px solid var(--border-subtle)',
                    borderRadius: '14px',
                    overflow: 'hidden',
                    transition: 'all 0.2s ease',
                    boxShadow: isOpen ? 'var(--shadow-md)' : 'none'
                  }}
                >
                  <button
                    onClick={() => onToggleQuestion(q.id)}
                    style={{
                      width: '100%',
                      padding: '18px 22px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      gap: '16px',
                      background: 'transparent',
                      border: 'none',
                      color: 'var(--text-main)',
                      fontSize: '15px',
                      fontWeight: 600,
                      cursor: 'pointer',
                      textAlign: 'left'
                    }}
                  >
                    <span style={{ color: isOpen ? 'var(--primary-color)' : 'var(--text-main)' }}>
                      {q.question}
                    </span>
                    <div style={{
                      width: '26px',
                      height: '26px',
                      borderRadius: '50%',
                      background: isOpen ? 'rgba(99, 102, 241, 0.15)' : 'var(--bg-surface)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      flexShrink: 0,
                      transition: 'transform 0.25s ease'
                    }}>
                      <ChevronDown
                        size={15}
                        color={isOpen ? 'var(--primary-color)' : 'var(--text-muted)'}
                        style={{
                          transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)',
                          transition: 'transform 0.25s ease'
                        }}
                      />
                    </div>
                  </button>

                  {isOpen && (
                    <div style={{
                      padding: '0 22px 20px',
                      fontSize: '14px',
                      color: 'var(--text-secondary)',
                      lineHeight: 1.7,
                      borderTop: '1px solid var(--border-subtle)',
                      paddingTop: '14px',
                      animation: 'fadeIn 0.2s ease-out'
                    }}>
                      {q.answer}
                    </div>
                  )}
                </div>
              );
            })}
          </div>

        </section>
      ))}
    </div>
  );
};
