import React from 'react';
import { Card, Button } from '@packages/ui';

interface HomePageProps {
  onNavigateToAi: () => void;
}

export const HomePage: React.FC<HomePageProps> = ({ onNavigateToAi }) => {
  return (
    <div style={{ maxWidth: '1100px', margin: '0 auto', padding: '48px 24px' }}>
      <header style={{ textAlign: 'center', marginBottom: '48px' }}>
        <h1 style={{ fontSize: '42px', fontWeight: 800, marginBottom: '16px', background: 'linear-gradient(135deg, #a5b4fc 0%, #6366f1 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
          Welcome to the Monorepo Web Client
        </h1>
        <p style={{ fontSize: '18px', color: '#94a3b8', maxWidth: '600px', margin: '0 auto' }}>
          Connect seamlessly to the unified Python AI microservice, shared component library, and cross-platform backend.
        </p>
      </header>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '24px', marginBottom: '40px' }}>
        <Card title="⚡ AI Assistant Engine" badge="Live AI" subtitle="Interact with LLM Chat and RAG">
          <p style={{ color: '#cbd5e1', fontSize: '14px', lineHeight: 1.6, margin: '16px 0 20px' }}>
            Direct integration with the FastAPI AI backend running at <code>services/ai-service</code>.
          </p>
          <Button onClick={onNavigateToAi}>Open AI Chat</Button>
        </Card>

        <Card title="📱 Flutter Mobile App" badge="Mobile" subtitle="Cross-platform iOS & Android">
          <p style={{ color: '#cbd5e1', fontSize: '14px', lineHeight: 1.6, margin: '16px 0 20px' }}>
            Shared API contracts, feature-first architecture located under <code>apps/mobile</code>.
          </p>
          <Button variant="outline" onClick={() => alert('Start flutter app: cd apps/mobile && flutter run')}>
            Explore Mobile
          </Button>
        </Card>

        <Card title="📊 Admin Dashboard" badge="Admin" subtitle="Analytics & System Operations">
          <p style={{ color: '#cbd5e1', fontSize: '14px', lineHeight: 1.6, margin: '16px 0 20px' }}>
            Dedicated React administrative control panel located at <code>apps/admin</code>.
          </p>
          <Button variant="outline" onClick={() => window.open('http://localhost:5174', '_blank')}>
            Open Admin
          </Button>
        </Card>
      </div>
    </div>
  );
};
