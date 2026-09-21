import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

interface FaqItem {
  question: string;
  answer: string;
}

export const PricingFaqSection: React.FC = () => {
  const [openIndices, setOpenIndices] = useState<number[]>([0]);

  const faqs: FaqItem[] = [
    {
      question: 'Can I use Inprep AI for free?',
      answer: 'Yes! The Starter plan gives you a free account to build your professional profile, analyze your CV with skill extraction, calibrate your introductory baseline assessment, and explore our 50+ role track questions. Full multimodal live AI mock interview simulations require an active Pro or Premium plan.'
    },
    {
      question: 'What happens when I use up my monthly credits?',
      answer: 'You will never be charged unexpected overage fees. If your credits run out before your monthly renewal, you can instantly purchase standalone Credit Add-On packs (1,000, 2,500, or 5,000 credits) that never expire, or upgrade to a higher tier plan.'
    },
    {
      question: 'How many credits does a typical mock interview consume?',
      answer: 'A standard 30-minute full multimodal interview simulation (covering speech cadence, computer vision posture/lighting coaching, transcript evaluation, and technical depth) consumes approximately 250 credits. Shorter targeted technical drills consume between 75 and 150 credits.'
    },
    {
      question: 'Can I cancel or switch plans at any time?',
      answer: 'Yes! You have complete freedom. You can upgrade, downgrade, or cancel your subscription with a single click in your account settings. Upgrades apply immediately with prorated billing, and cancellations remain active until the end of your billing cycle.'
    },
    {
      question: 'Do unused credits roll over?',
      answer: 'Yes, add-on credit packs roll over indefinitely month-to-month. On paid monthly subscriptions (Pro and Premium), active subscriber credits roll over up to 2x your monthly tier allocation as long as your membership remains active.'
    },
    {
      question: 'Are my interview recordings and CVs kept private?',
      answer: 'Absolutely. We practice privacy-by-design. Computer vision ergonomics are computed ephemeral-only in local browser memory and never stored. Transcripts and CV analyses are encrypted with 256-bit AES, and we never use your personal interview data to train third-party foundation models.'
    },
    {
      question: 'What payment methods do you support?',
      answer: 'We accept all major international credit and debit cards (Visa, Mastercard, American Express, Discover), PayPal, Apple Pay, Google Pay, and SEPA bank transfers via our secure Tier-1 Stripe payment gateway.'
    },
    {
      question: 'Can I get a receipt or invoice for company reimbursement?',
      answer: 'Yes! Every billing transaction generates an itemized, downloadable PDF invoice containing VAT/GST breakdowns and company entity details suitable for expensing against professional development and learning budgets.'
    }
  ];

  const toggleFaq = (index: number) => {
    setOpenIndices((prev) =>
      prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]
    );
  };

  return (
    <section style={{ padding: '40px 0 80px', position: 'relative' }}>
      <div className="container" style={{ maxWidth: '860px', margin: '0 auto', padding: '0 20px' }}>
        
        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: '40px' }}>
          <div style={{
            fontSize: '11px',
            fontWeight: 800,
            letterSpacing: '0.1em',
            textTransform: 'uppercase',
            color: '#818cf8',
            marginBottom: '10px'
          }}>
            GOT QUESTIONS?
          </div>
          <h2 style={{
            fontSize: 'clamp(28px, 3.5vw, 38px)',
            fontWeight: 700,
            color: '#ffffff',
            letterSpacing: '-0.02em',
            marginBottom: '10px'
          }}>
            Frequently Asked Questions
          </h2>
          <p style={{
            fontSize: '15px',
            color: '#94a3b8',
            lineHeight: 1.6,
            margin: 0
          }}>
            Everything you need to know about our plans, credits, and billing practices.
          </p>
        </div>

        {/* Accordion List */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
          {faqs.map((faq, idx) => {
            const isOpen = openIndices.includes(idx);
            return (
              <div
                key={idx}
                style={{
                  background: '#0a0e18',
                  border: isOpen ? '1px solid rgba(129, 140, 248, 0.3)' : '1px solid rgba(255, 255, 255, 0.07)',
                  borderRadius: '14px',
                  overflow: 'hidden',
                  transition: 'all 0.25s ease',
                  boxShadow: isOpen ? '0 10px 30px rgba(0, 0, 0, 0.4)' : 'none'
                }}
              >
                <button
                  onClick={() => toggleFaq(idx)}
                  style={{
                    width: '100%',
                    padding: '20px 24px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    gap: '16px',
                    background: 'transparent',
                    border: 'none',
                    color: '#ffffff',
                    fontSize: '15px',
                    fontWeight: 600,
                    cursor: 'pointer',
                    textAlign: 'left'
                  }}
                >
                  <span style={{ color: isOpen ? '#f8fafc' : '#cbd5e1' }}>
                    {faq.question}
                  </span>
                  <div
                    style={{
                      width: '28px',
                      height: '28px',
                      borderRadius: '50%',
                      background: isOpen ? 'rgba(129, 140, 248, 0.15)' : 'rgba(255, 255, 255, 0.04)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      flexShrink: 0,
                      transition: 'transform 0.25s ease'
                    }}
                  >
                    <ChevronDown
                      size={16}
                      color={isOpen ? '#818cf8' : '#94a3b8'}
                      style={{
                        transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)',
                        transition: 'transform 0.25s ease'
                      }}
                    />
                  </div>
                </button>

                {isOpen && (
                  <div
                    style={{
                      padding: '0 24px 22px',
                      fontSize: '14px',
                      color: '#94a3b8',
                      lineHeight: 1.7,
                      borderTop: '1px solid rgba(255, 255, 255, 0.04)',
                      paddingTop: '16px',
                      animation: 'fadeIn 0.2s ease-out'
                    }}
                  >
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
