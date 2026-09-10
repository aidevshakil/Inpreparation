const BACKEND_API_BASE = (import.meta as any).env?.VITE_ADMIN_API_URL || (import.meta as any).env?.VITE_API_URL || 'http://localhost:5000/api';

export async function fetchAllUsers() {
  const res = await fetch(`${BACKEND_API_BASE}/users`);
  if (!res.ok) {
    throw new Error(`Failed to fetch users: ${res.statusText}`);
  }
  return res.json();
}

export async function createUser(data: { name: string; email: string; role?: string }) {
  const res = await fetch(`${BACKEND_API_BASE}/users`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data),
  });
  if (!res.ok) {
    throw new Error(`Failed to create user: ${res.statusText}`);
  }
  return res.json();
}
