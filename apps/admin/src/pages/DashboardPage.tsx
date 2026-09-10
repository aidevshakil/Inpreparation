import React from 'react';
import { Card } from '@packages/ui';

export const DashboardPage: React.FC = () => {
  const metrics = [
    { title: 'Total Registered Users', value: '24,520', change: '+12.4%', isPositive: true },
    { title: 'AI Inference Calls (24h)', value: '184,902', change: '+28.1%', isPositive: true },
    { title: 'Avg Response Latency', value: '240 ms', change: '-15.2%', isPositive: true },
    { title: 'Service Uptime', value: '99.98%', change: '0.0%', isPositive: true },
  ];

  return (
    <div>
      <h1 style={{ fontSize: '24px', fontWeight: 700, marginBottom: '24px' }}>System Overview</h1>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '20px', marginBottom: '32px' }}>
        {metrics.map((m, idx) => (
          <Card key={idx}>
            <div style={{ fontSize: '13px', color: '#94a3b8', marginBottom: '8px' }}>{m.title}</div>
            <div style={{ fontSize: '28px', fontWeight: 700, color: '#f8fafc', marginBottom: '8px' }}>{m.value}</div>
            <div style={{ fontSize: '12px', color: m.isPositive ? '#4ade80' : '#f87171' }}>
              {m.change} vs previous period
            </div>
          </Card>
        ))}
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: '24px' }}>
        <Card title="Connected Monorepo Nodes">
          <table style={{ width: '100%', borderCollapse: 'collapse', marginTop: '16px', fontSize: '14px' }}>
            <thead>
              <tr style={{ borderBottom: '1px solid rgba(255,255,255,0.08)', textAlign: 'left', color: '#64748b' }}>
                <th style={{ padding: '8px 0' }}>Module</th>
                <th>Type</th>
                <th>Port</th>
                <th>Health</th>
              </tr>
            </thead>
            <tbody>
              <tr style={{ borderBottom: '1px solid rgba(255,255,255,0.04)' }}>
                <td style={{ padding: '12px 0' }}><code>apps/mobile</code></td>
                <td>Flutter Client</td>
                <td>Device Target</td>
                <td><span style={{ color: '#4ade80' }}>Ready</span></td>
              </tr>
              <tr style={{ borderBottom: '1px solid rgba(255,255,255,0.04)' }}>
                <td style={{ padding: '12px 0' }}><code>apps/web</code></td>
                <td>React Web</td>
                <td>:3000</td>
                <td><span style={{ color: '#4ade80' }}>Online</span></td>
              </tr>
              <tr style={{ borderBottom: '1px solid rgba(255,255,255,0.04)' }}>
                <td style={{ padding: '12px 0' }}><code>services/ai-service</code></td>
                <td>Python FastAPI</td>
                <td>:8000</td>
                <td><span style={{ color: '#4ade80' }}>Online</span></td>
              </tr>
              <tr>
                <td style={{ padding: '12px 0' }}><code>packages/ui</code></td>
                <td>Design System</td>
                <td>Internal</td>
                <td><span style={{ color: '#38bdf8' }}>Linked</span></td>
              </tr>
            </tbody>
          </table>
        </Card>

        <Card title="Quick Actions">
          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', marginTop: '16px' }}>
            <button style={{ padding: '10px 14px', borderRadius: '6px', background: '#334155', border: 'none', color: '#fff', cursor: 'pointer', textAlign: 'left' }}>
              🔄 Flush Redis Cache
            </button>
            <button style={{ padding: '10px 14px', borderRadius: '6px', background: '#334155', border: 'none', color: '#fff', cursor: 'pointer', textAlign: 'left' }}>
              📥 Sync Vector Embeddings
            </button>
            <button style={{ padding: '10px 14px', borderRadius: '6px', background: '#334155', border: 'none', color: '#fff', cursor: 'pointer', textAlign: 'left' }}>
              📋 Export Audit Logs
            </button>
          </div>
        </Card>
      </div>
    </div>
  );
};
