# Enterprise Multi-Platform Monorepo

A lightweight, production-ready monorepo structure housing:
- 📱 **Mobile App** (`apps/mobile`): Flutter cross-platform mobile application (iOS, Android, Web).
- 💻 **Web Client** (`apps/web`): React.js / Vite web application for end-users.
- 📊 **Admin Dashboard** (`apps/admin`): React.js / Vite administrative control panel.
- 🚀 **Main API Backend** (`services/api-backend`): Node.js + TypeScript + Express backend with Prisma ORM.
- 🤖 **AI Engine** (`services/ai-service`): Python FastAPI service for LLMs, embeddings, RAG, and ML inference.
- 🗄️ **Database Layer** (`packages/database`): Prisma ORM with type-safe schema and client.
- 📦 **Shared Packages** (`packages/`): Shared UI components, TypeScript types, and shared tooling configs.

---

## 📁 Repository Structure

```
├── apps/
│   ├── mobile/                # Flutter application
│   ├── web/                   # React.js customer-facing frontend (Port 3000)
│   └── admin/                 # React.js administrative dashboard (Port 5174)
├── services/
│   ├── api-backend/           # Node.js + Express backend (Port 5000)
│   └── ai-service/            # Python AI backend (FastAPI, Port 8000)
├── packages/
│   ├── database/              # Prisma ORM schema, migrations, and PrismaClient
│   ├── ui/                    # Shared React UI components & design system
│   ├── types/                 # Shared TypeScript models & API contracts
│   └── config/                # Shared ESLint, TS, and Prettier configurations
├── docs/                      # Architectural and integration documentation
├── package.json               # Root workspace manifest
├── pnpm-workspace.yaml        # PNPM workspace definition
├── turbo.json                 # Turborepo build pipeline
├── .env.example               # Master environment variable template
└── README.md                  # Project documentation
```

---

## 📋 Prerequisites

Before running the project, make sure you have the following installed on your machine:
- **Node.js**: `v20.x` or `v24.x` (Recommended: `v20+`)
- **pnpm**: `v9.x+` (`corepack enable` or `npm install -g pnpm`)
- **Python**: `3.10+` or `3.14+` (for Python AI microservice)
- **Flutter SDK**: `3.x+` (for mobile app)

---

## ⚙️ Environment Configuration

1. Copy the master `.env.example` to `.env` in the project root:
   ```bash
   cp .env.example .env
   ```
2. Open [`.env`](.env) and verify the configuration:
   - **`DATABASE_URL`**: Set to your PostgreSQL instance (or SQLite for local lightweight testing):
     ```env
     # PostgreSQL:
     DATABASE_URL="postgresql://postgres:password@localhost:5432/inpreparation_db?schema=public"

     # SQLite alternative:
     # DATABASE_URL="file:./dev.db"
     ```
   - **`OPENAI_API_KEY`**: Provide your OpenAI key if testing AI features (`services/ai-service`).
   - Note: The backend (`services/api-backend`) and AI service (`services/ai-service`) automatically inherit variables from this root `.env` file.

---

## 🚀 Quick Start Guide

### Step 1: Install Workspace Dependencies
Run from the root directory:
```bash
pnpm install
```

### Step 2: Initialize Database (Prisma)
Generate the Prisma Client types and sync your database schema:
```bash
# Generate the Prisma client code
pnpm db:generate

# Push schema changes to your database
pnpm db:push

# (Optional) Open Prisma Studio database GUI (http://localhost:5555)
pnpm db:studio
```

---

## 🖥️ Running the Project

You can run the full web stack all at once, or launch services individually in separate terminal windows.

### Option A: Run All Web Services at Once (Turborepo)
Runs the Node.js API backend, customer web client, and admin portal concurrently:
```bash
pnpm dev
```

---

### Option B: Run Services Individually (Recommended for Development)

Open separate terminal windows for the services you want to run:

#### 1. Main API Backend (Node.js / Express)
```bash
pnpm dev:backend
```
- **Port**: `http://localhost:5000`
- **Health Check**: `http://localhost:5000/api/health`

#### 2. React Customer Web Client
```bash
pnpm dev:web
```
- **Port**: `http://localhost:3000`

#### 3. React Admin Dashboard
```bash
pnpm dev:admin
```
- **Port**: `http://localhost:5174`

#### 4. Python AI Service (FastAPI)
First-time virtual environment setup:
```bash
cd services/ai-service

# Create virtual environment
python -m venv .venv

# Activate virtual environment:
# Windows (PowerShell):
.\.venv\Scripts\activate
# Windows (CMD):
# .venv\Scripts\activate.bat
# Linux / macOS:
# source .venv/bin/activate

# Install requirements
pip install -r requirements.txt

# Run the FastAPI server
uvicorn app.main:app --reload --port 8000
```
- **Port**: `http://localhost:8000`
- **Interactive Swagger Docs**: `http://localhost:8000/docs`
- *Note:* Once `.venv` is configured, you can also launch directly from root using: `pnpm dev:ai`

#### 5. Flutter Mobile App
```bash
pnpm dev:mobile
# Or navigate to the folder:
cd apps/mobile
flutter run
```

---

## 🛠 Monorepo Commands Reference

| Command | Action |
| --- | --- |
| `pnpm dev` | Concurrently start web app, admin portal, and backend |
| `pnpm dev:backend` | Start only Node.js Prisma API Backend on `:5000` |
| `pnpm dev:web` | Start only the customer web app on `:3000` |
| `pnpm dev:admin` | Start only the admin portal on `:5174` |
| `pnpm dev:ai` | Start Python AI service on `:8000` |
| `pnpm dev:mobile` | Run Flutter mobile application |
| `pnpm db:generate` | Generate Prisma Client types |
| `pnpm db:push` | Push Prisma schema changes to database |
| `pnpm db:studio` | Launch Prisma Studio web GUI |
| `pnpm build` | Build all web apps, backend, and packages via Turborepo |
| `pnpm test` | Run tests across workspaces |
| `pnpm lint` | Run linters across workspaces |
| `pnpm clean` | Clean build artifacts and node_modules |

---

## 🔧 Troubleshooting

### Port Already in Use (`EADDRINUSE: 5000`)
If you see an error like `listen EADDRINUSE: address already in use :::5000`, an earlier server process is still running.

- **On Windows (PowerShell)**:
  ```powershell
  # Find process on port 5000 and stop it:
  Get-Process -Id (Get-NetTCPConnection -LocalPort 5000).OwningProcess | Stop-Process -Force
  ```
- **Using npx**:
  ```bash
  npx kill-port 5000
  ```

### Database Connection Issues
- Make sure your database server is running and reachable at the host/port specified in `DATABASE_URL`.
- If using PostgreSQL, ensure credentials in [`.env`](.env) are correct.
- After making any edits to [`packages/database/prisma/schema.prisma`](packages/database/prisma/schema.prisma), always re-run:
  ```bash
  pnpm db:generate
  pnpm db:push
  ```

