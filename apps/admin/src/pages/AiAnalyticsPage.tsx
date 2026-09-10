import React from 'react';
import { Card } from '@packages/ui';

export const AiAnalyticsPage: React.FC = () => {
  return (
    <div>
      <h1 style={{ fontSize: '24px', fontWeight: 700, marginBottom: '24px' }}>AI Model Performance & Analytics</h1>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '24px', marginBottom: '32px' }}>
        <Card title="Active Models" subtitle="Live endpoints in services/ai-service">
          <div style={{ marginTop: '16px', display: 'flex', flexDirection: 'column', gap: '12px' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', padding: '8px 12px', background: '#0f172a', borderRadius: '6px' }}>
              <span>gpt-4o-mini (Chat & Code)</span>
              <span style={{ color: '#4ade80' }}>Active</span>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between', padding: '8px 12px', background: '#0f172a', borderRadius: '6px' }}>
              <span>all-MiniLM-L6-v2 (Vector Embeddings)</span>
              <span style={{ color: '#4ade80' }}>Active</span>
            </div>
          </div>
        </Card>

        <Card title="RAG Pipeline Statistics" subtitle="Vector search query frequency">
          <div style={{ marginTop: '16px', display: 'flex', flexDirection: 'column', gap: '12px' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', padding: '8px 12px', background: '#0f172a', borderRadius: '6px' }}>
              <span>Average Cosine Similarity</span>
              <strong>0.892</strong>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between', padding: '8px 12px', background: '#0f172a', borderRadius: '6px' }}>
              <span>Documents Indexed</span>
              <strong>12,450 chunks</strong>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
};
