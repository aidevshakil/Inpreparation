import React from 'react';
import { 
  FileUp, 
  Activity, 
  Radar, 
  Compass, 
  Headphones, 
  Layers, 
  BarChart2, 
  RotateCw 
} from 'lucide-react';

export const PreparationJourneyOverview: React.FC = () => {
  const journeyStages = [
    {
      num: '01',
      icon: FileUp,
      title: 'Build Your Profile',
      description: 'Upload your resume for automatic parsing or configure your tech competencies manually.',
      stage: 'Stage 1 of 8'
    },
    {
      num: '02',
      icon: Activity,
      title: 'Understand Your Career',
      description: 'The engine creates a structured competency index based on your real past project scope.',
      stage: 'Stage 2 of 8'
    },
    {
      num: '03',
      icon: Radar,
      title: 'Get Your AI Profile',
      description: 'Synthesized radar scores isolate strengths, tech depth, and senior-level gaps.',
      stage: 'Stage 3 of 8'
    },
    {
      num: '04',
      icon: Compass,
      title: 'Discover Matching Mocks',
      description: 'Get hand-calibrated interview tracks aligned with market hiring rubrics.',
      stage: 'Stage 4 of 8'
    },
    {
      num: '05',
      icon: Headphones,
      title: 'Practice a Real Mock',
      description: 'Sit through an authentic 5-question interview simulated by synthetic conversational AI.',
      stage: 'Stage 5 of 8'
    },
    {
      num: '06',
      icon: Layers,
      title: 'Multimodal AI Feedback',
      description: 'Parallel pipelines evaluate speech dynamics, posture, code accuracy, and clarity.',
      stage: 'Stage 6 of 8'
    },
    {
      num: '07',
      icon: BarChart2,
      title: 'Understand Performance',
      description: 'Inspect response rubrics, ideal executive benchmarks, and pinpointed mistakes.',
      stage: 'Stage 7 of 8'
    },
    {
      num: '08',
      icon: RotateCw,
      title: 'Improve & Repeat',
      description: 'Implement recommended behavioral tweaks and measure your compound progress delta.',
      stage: 'Stage 8 of 8'
    }
  ];

  return (
    <section style={{ padding: '40px 0 80px', position: 'relative' }}>
      <div className="container" style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 20px' }}>
        
        {/* Section Header */}
        <div style={{ textAlign: 'center', marginBottom: '48px' }}>
          <div style={{
            fontSize: '11.5px',
            fontWeight: 700,
            letterSpacing: '0.1em',
            color: '#818cf8',
            textTransform: 'uppercase',
            marginBottom: '12px'
          }}>
            STRUCTURED END-TO-END FLOW
          </div>

          <h2 style={{
            fontSize: 'clamp(28px, 4vw, 40px)',
            fontWeight: 800,
            lineHeight: 1.25,
            color: '#ffffff',
            letterSpacing: '-0.02em',
            marginBottom: '14px'
          }}>
            Your Complete Interview Preparation Journey
          </h2>

          <p style={{
            fontSize: 'clamp(14px, 1.6vw, 16px)',
            color: '#94a3b8',
            lineHeight: 1.6,
            maxWidth: '750px',
            margin: '0 auto'
          }}>
            A proven architectural loop designed to eliminate guesswork, test high-leverage domains, and quantify readiness.
          </p>
        </div>

        {/* 8 Stage Cards Grid (2 rows of 4) */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
          gap: '20px'
        }}>
          {journeyStages.map((item, index) => {
            const IconComponent = item.icon;
            return (
              <div
                key={index}
                style={{
                  background: '#0d121f',
                  border: '1px solid rgba(255, 255, 255, 0.06)',
                  borderRadius: '16px',
                  padding: '24px 20px',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  minHeight: '210px',
                  transition: 'all 0.25s ease',
                  position: 'relative',
                  overflow: 'hidden'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = 'rgba(99, 102, 241, 0.35)';
                  e.currentTarget.style.transform = 'translateY(-2px)';
                  e.currentTarget.style.boxShadow = '0 12px 28px -8px rgba(0, 0, 0, 0.5)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.06)';
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = 'none';
                }}
              >
                <div>
                  {/* Top Header: Number and Icon */}
                  <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    marginBottom: '16px'
                  }}>
                    <span style={{
                      fontSize: '30px',
                      fontWeight: 800,
                      color: '#334155',
                      letterSpacing: '-0.03em',
                      lineHeight: 1
                    }}>
                      {item.num}
                    </span>

                    <div style={{
                      width: '34px',
                      height: '34px',
                      borderRadius: '50%',
                      background: 'rgba(255, 255, 255, 0.03)',
                      border: '1px solid rgba(255, 255, 255, 0.08)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center'
                    }}>
                      <IconComponent size={16} color="#818cf8" />
                    </div>
                  </div>

                  {/* Title */}
                  <h3 style={{
                    fontSize: '16px',
                    fontWeight: 700,
                    color: '#f8fafc',
                    marginBottom: '10px',
                    lineHeight: 1.3
                  }}>
                    {item.title}
                  </h3>

                  {/* Description */}
                  <p style={{
                    fontSize: '13px',
                    color: '#8896ab',
                    lineHeight: 1.55,
                    margin: 0
                  }}>
                    {item.description}
                  </p>
                </div>

                {/* Bottom Stage Tag */}
                <div style={{
                  fontSize: '11.5px',
                  fontWeight: 600,
                  color: '#38bdf8',
                  marginTop: '20px',
                  letterSpacing: '0.02em'
                }}>
                  {item.stage}
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
