# Enterprise Multi-Platform Monorepo

A lightweight, production-ready monorepo structure housing:
- 📱 **Mobile App** (`apps/mobile`): Flutter cross-platform mobile application (iOS, Android, Web).
- 💻 **Web Client** (`apps/web`): React.js / Vite web application for end-users.
- 📊 **Admin Dashboard** (`apps/admin`): React.js / Vite administrative control panel.
- 🚀 **Main API Backend** (`services/api-backend`): Node.js + TypeScript + Express backend.
- 🤖 **AI Engine** (`services/ai-service`): Python FastAPI service for LLMs, embeddings, RAG, and ML inference.
- 🗄️ **Database Layer** (`packages/database`): Prisma ORM with type-safe schema and client.
- 📦 **Shared Packages** (`packages/`): Shared UI components, TypeScript types, and shared tooling configs.

---

## 📁 Repository Structure

```
├── apps/
│   ├── mobile/                # Flutter application
│   ├── web/                   # React.js customer-facing frontend
│   └── admin/                 # React.js administrative dashboard
├── services/
│   ├── api-backend/           # Node.js + Express backend (Prisma integration)
│   └── ai-service/            # Python AI/ML backend (FastAPI, PyTorch, LangChain)
├── packages/
│   ├── database/              # Prisma ORM schema, migrations, and PrismaClient
│   ├── ui/                    # Shared React UI components & design system
│   ├── types/                 # Shared TypeScript models & API contracts
│   └── config/                # Shared ESLint, TS, and Prettier configurations
├── docs/                      # Architectural and integration documentation
├── package.json               # Root workspace manifest
├── pnpm-workspace.yaml        # PNPM workspace definition
├── turbo.json                 # Turborepo build pipeline
└── README.md                  # Project documentation
```

---

## 🚀 Quick Start

### 1. Install JS/TS Workspace Dependencies
```bash
pnpm install
```

### 2. Generate Prisma Client & Sync Database
```bash
# Generate Prisma Client
pnpm db:generate

# Push schema to local SQLite/PostgreSQL database
pnpm db:push

# (Optional) Open Prisma Studio database GUI
pnpm db:studio
```

### 3. Run Development Servers
- **Node.js Prisma Backend** (Port 5000):
  ```bash
  pnpm dev:backend
  ```
- **React Web Client & Admin Dashboard**:
  ```bash
  pnpm dev
  ```
- **Python AI Microservice** (Port 8000):
  ```bash
  pnpm dev:ai
  ```
- **Flutter Mobile App**:
  ```bash
  pnpm dev:mobile
  ```

---

## 🛠 Monorepo Commands

| Command | Action |
| --- | --- |
| `pnpm dev` | Start web and admin applications in development mode |
| `pnpm dev:backend` | Start Node.js Prisma API Backend on `:5000` |
| `pnpm dev:web` | Start only the customer web app on `:3000` |
| `pnpm dev:admin` | Start only the admin portal on `:5174` |
| `pnpm dev:ai` | Start Python AI service on `:8000` |
| `pnpm dev:mobile` | Run Flutter mobile app |
| `pnpm db:generate` | Generate Prisma Client types |
| `pnpm db:push` | Push Prisma schema changes to database |
| `pnpm db:studio` | Launch Prisma Studio GUI browser |
| `pnpm build` | Build all web apps, backend, and packages via Turborepo |
| `pnpm test` | Run tests across workspaces |
