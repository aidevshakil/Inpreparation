# Inpreparation Project Guidelines & Coding Standards

This document establishes the mandatory architectural and coding rules for the Inpreparation codebase. All developers and AI assistants must strictly adhere to these standards.

---

## 📌 Core Rules & Standards

### 1. 📏 Maximum File Size Limit (≤ 800 Lines)
- **Hard Limit**: No file should exceed **800 lines of code**.
- **Refactoring Trigger**: If a file grows beyond 500–600 lines, immediately break it down into modular child widgets, dedicated feature sections, or sub-components.
- Keep components compact, focused, and maintainable.

---

### 2. 🧩 Reusable Widgets & Component Modularity
- Repeated UI elements (such as HUD gauges, waveform players, step ribbons, diagnostic cards, metric bars, and modals) must be extracted into standalone, reusable components inside `src/components/`.
- Maintain clean separation between presentation UI and application state.
- Every reusable component must define explicit TypeScript prop interfaces.

---

### 3. ⚡ Clean, Scalable & Optimized Architecture
- **Performance**: Minimize unnecessary re-renders with targeted state and memoization (`useMemo`, `useCallback`) where appropriate.
- **Scalability**: Structure features so adding new assessment tracks, AI personas, or telemetry layers requires zero alterations to unrelated code.
- **Strict Typing**: Zero unused imports or variables (enforced by TypeScript build). Avoid untyped `any`.

---

### 4. 🏷️ Clear & Intuitive Naming Conventions
Files and folders must be self-explanatory based on their feature or screen domain:
- **Screens / Pages (`PascalCase.tsx`)**:
  - `HowItWorksPage.tsx`, `LandingPage.tsx`, `SimulationStudioPage.tsx`
- **Feature Widgets & Sub-components (`PascalCase.tsx`)**:
  - `DiagnosticScorecard.tsx`, `TelemetryHUD.tsx`, `PersonaSelector.tsx`, `ScoreVelocityChart.tsx`
- **Hooks (`camelCase.ts`)**:
  - `useAudioWaveform.ts`, `useMockSimulation.ts`
- **Utilities / Services (`camelCase.ts`)**:
  - `scoringEngine.ts`, `competencyMapper.ts`

---

### 5. 🔍 Quality Verification
- Before finishing any task, always verify with `pnpm build` across workspaces to guarantee 0 TypeScript/ESLint errors.
