# React Admin Dashboard

The administrative control center built with **React 18, TypeScript, and Vite**.

---

## 📁 Structure

```
apps/admin/
├── src/
│   ├── components/       # Layout & UI components (Sidebar, Header)
│   ├── pages/            # Admin views (Dashboard, AiAnalytics, Users)
│   ├── services/         # Administrative API endpoints
│   ├── App.tsx           # Dashboard layout & routing
│   ├── main.tsx          # DOM mounting
│   └── index.css         # Admin theme styles
├── index.html            # HTML entry template
├── package.json          # Workspace manifest
├── tsconfig.json         # TypeScript configuration
└── vite.config.ts        # Vite configuration (port 5174)
```

---

## 🚀 Running Locally

From monorepo root:
```bash
npm run dev:admin
```
Runs at `http://localhost:5174`.
