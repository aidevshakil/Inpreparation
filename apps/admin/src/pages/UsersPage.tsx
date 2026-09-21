import React, { useState, useEffect } from 'react';
import { Card } from '@packages/ui';
import { User } from '@packages/types';
import { fetchAllUsers } from '../services/adminApi';

export const UsersPage: React.FC = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const loadUsers = async () => {
    setLoading(true);
    setError(null);
    try {
      const data = await fetchAllUsers();
      setUsers(data);
    } catch (err: any) {
      console.error('Failed to load users:', err);
      setError(err.message || 'Failed to connect to backend user API');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadUsers();
  }, []);

  return (
    <div>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '24px' }}>
        <div>
          <h1 style={{ fontSize: '24px', fontWeight: 700, margin: '0 0 4px 0' }}>User Management</h1>
          <p style={{ fontSize: '13px', color: '#94a3b8', margin: 0 }}>
            Live registered candidates and administrative tenant identities in PostgreSQL
          </p>
        </div>
        <button
          onClick={loadUsers}
          disabled={loading}
          style={{
            padding: '8px 16px',
            backgroundColor: '#4f46e5',
            color: '#fff',
            border: 'none',
            borderRadius: '6px',
            fontSize: '13px',
            fontWeight: 600,
            cursor: loading ? 'not-allowed' : 'pointer',
            opacity: loading ? 0.7 : 1,
          }}
        >
          {loading ? 'Refreshing...' : '🔄 Refresh Users'}
        </button>
      </div>

      {error && (
        <div style={{ padding: '12px 16px', backgroundColor: 'rgba(239, 68, 68, 0.1)', border: '1px solid rgba(239, 68, 68, 0.3)', borderRadius: '8px', color: '#f87171', marginBottom: '16px', fontSize: '13px' }}>
          {error}
        </div>
      )}

      <Card>
        {loading && users.length === 0 ? (
          <div style={{ padding: '32px', textAlign: 'center', color: '#94a3b8' }}>
            Loading registered users from backend...
          </div>
        ) : users.length === 0 ? (
          <div style={{ padding: '32px', textAlign: 'center', color: '#94a3b8' }}>
            No users registered in database yet.
          </div>
        ) : (
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
                  <td style={{ fontWeight: 600, color: '#f8fafc' }}>{u.name || 'Anonymous User'}</td>
                  <td style={{ color: '#cbd5e1' }}>{u.email}</td>
                  <td>
                    <span
                      style={{
                        padding: '3px 8px',
                        borderRadius: '4px',
                        fontSize: '12px',
                        fontWeight: 600,
                        background: u.role === 'admin' ? 'rgba(56, 189, 248, 0.2)' : u.role === 'moderator' ? 'rgba(168, 85, 247, 0.2)' : 'rgba(255,255,255,0.08)',
                        color: u.role === 'admin' ? '#38bdf8' : u.role === 'moderator' ? '#c084fc' : '#cbd5e1',
                      }}
                    >
                      {u.role}
                    </span>
                  </td>
                  <td style={{ color: '#94a3b8' }}>{u.createdAt ? new Date(u.createdAt).toLocaleDateString() : 'N/A'}</td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </Card>
    </div>
  );
};
