# Getting Started Guide

## 1. Initial Setup

Clone the repository and verify system tools:
- **Node.js**: v18+ (`node -v`)
- **pnpm**: v9+ (`pnpm -v`)
- **Python**: v3.10+ (`python --version`)
- **Flutter**: v3.16+ (`flutter --version`)

### Install JS/TS Workspace Dependencies
```bash
pnpm install
```

---

## 2. Running Services

### A. Python AI Service (Backend)
```bash
cd services/ai-service
python -m venv .venv

# On Windows:
.venv\Scripts\activate
# On macOS/Linux:
# source .venv/bin/activate

pip install -r requirements.txt
cp .env.example .env
uvicorn app.main:app --reload --port 8000
```
Swagger UI will be at: `http://localhost:8000/docs`

---

### B. React Web Client
```bash
pnpm dev:web
```
Runs at: `http://localhost:3000`

---

### C. React Admin Dashboard
```bash
pnpm dev:admin
```
Runs at: `http://localhost:5174`

---

### D. Flutter Mobile App
```bash
cd apps/mobile
flutter pub get
flutter run
```
