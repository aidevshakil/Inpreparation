import React from 'react';
import { Card } from '@packages/ui';
import { User } from '@packages/types';

export const UsersPage: React.FC = () => {
  const users: User[] = [
    { id: 'usr_1', name: 'Alice Smith', email: 'alice@example.com', role: 'admin', createdAt: '2026-01-10', updatedAt: '2026-09-01' },
    { id: 'usr_2', name: 'Bob Johnson', email: 'bob@example.com', role: 'user', createdAt: '2026-03-15', updatedAt: '2026-09-05' },
    { id: 'usr_3', name: 'Carol Danvers', email: 'carol@example.com', role: 'moderator', createdAt: '2026-05-22', updatedAt: '2026-08-30' },
  ];

  return (
    <div>
      <h1 style={{ fontSize: '24px', fontWeight: 700, marginBottom: '24px' }}>User Management</h1>
      <Card>
        <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '14px' }}>
          <thead>
            <tr style={{ borderBottom: '1px solid rgba(255,255,255,0.08)', textAlign: 'left', color: '#64748b' }}>
              <th style={{ padding: '12px 8px' }}>User ID</th>
              <th>Name</th>
              <th>Email</th>
              <th>Role</th>
              <th>Created Date</th>
            </tr>
          </thead>
          <tbody>
            {users.map((u) => (
              <tr key={u.id} style={{ borderBottom: '1px solid rgba(255,255,255,0.04)' }}>
                <td style={{ padding: '12px 8px', color: '#94a3b8' }}><code>{u.id}</code></td>
                <td style={{ fontWeight: 600 }}>{u.name}</td>
                <td style={{ color: '#cbd5e1' }}>{u.email}</td>
                <td>
                  <span
                    style={{
                      padding: '3px 8px',
                      borderRadius: '4px',
                      fontSize: '12px',
                      background: u.role === 'admin' ? 'rgba(56, 189, 248, 0.2)' : 'rgba(255,255,255,0.08)',
                      color: u.role === 'admin' ? '#38bdf8' : '#cbd5e1',
                    }}
                  >
                    {u.role}
                  </span>
                </td>
                <td style={{ color: '#94a3b8' }}>{u.createdAt}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </Card>
    </div>
  );
};
