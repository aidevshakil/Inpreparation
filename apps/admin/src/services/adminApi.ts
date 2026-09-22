const BACKEND_API_BASE = (import.meta as any).env?.VITE_ADMIN_API_URL || (import.meta as any).env?.VITE_API_URL || 'http://localhost:5000/api';

async function fetchWithAuth(url: string, options: RequestInit = {}) {
  const token = typeof window !== 'undefined' ? localStorage.getItem('inprep_admin_token') || localStorage.getItem('inprep_token') : null;
  const headers = new Headers(options.headers || {});
  if (token && !headers.has('Authorization')) {
    headers.set('Authorization', `Bearer ${token}`);
  }
  return fetch(url, { ...options, headers });
}

export async function fetchAllUsers() {
  const res = await fetchWithAuth(`${BACKEND_API_BASE}/users`);
  if (!res.ok) {
    throw new Error(`Failed to fetch users: ${res.statusText}`);
  }
  return res.json();
}

export async function createUser(data: { name: string; email: string; role?: string }) {
  const res = await fetchWithAuth(`${BACKEND_API_BASE}/users`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data),
  });
  if (!res.ok) {
    throw new Error(`Failed to create user: ${res.statusText}`);
  }
  return res.json();
}

export async function fetchSystemStats() {
  const res = await fetchWithAuth(`${BACKEND_API_BASE}/admin/stats`);
  if (!res.ok) {
    throw new Error(`Failed to fetch system stats: ${res.statusText}`);
  }
  return res.json();
}

export async function fetchNodeHealth() {
  const res = await fetchWithAuth(`${BACKEND_API_BASE}/admin/health-nodes`);
  if (!res.ok) {
    throw new Error(`Failed to fetch node health: ${res.statusText}`);
  }
  return res.json();
}

export async function fetchAiAnalytics() {
  const res = await fetchWithAuth(`${BACKEND_API_BASE}/admin/ai-analytics`);
  if (!res.ok) {
    throw new Error(`Failed to fetch AI analytics: ${res.statusText}`);
  }
  return res.json();
}
