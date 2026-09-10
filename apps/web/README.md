# React Web Client

The customer-facing frontend web application built with **React 18, TypeScript, and Vite**.

---

## 📁 Structure

```
apps/web/
├── src/
│   ├── pages/            # Page-level components (HomePage, AiChatPage)
│   ├── services/         # API integration with Python AI service
│   ├── App.tsx           # Application root component
│   ├── main.tsx          # DOM mounting
│   └── index.css         # Global style tokens
├── index.html            # HTML entry template
├── package.json          # Workspace package manifest
├── tsconfig.json         # TypeScript configuration
└── vite.config.ts        # Vite configuration
```

---

## 🚀 Running Locally

From monorepo root:
```bash
npm run dev:web
```
Or directly inside `apps/web`:
```bash
npm run dev
```
Runs at `http://localhost:3000`.
