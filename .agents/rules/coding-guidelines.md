# Project Development & Coding Standards

## 1. File Length & Modularity Limit
- **Strict File Limit**: No single file must exceed **800 lines of code**.
- **Proactive Decomposition**: When a component or screen file approaches 500–600 lines, immediately split it into dedicated child widgets, feature components, or custom hooks.
- **Single Responsibility**: Each file should have one clear purpose.

---

## 2. Component & Widget Reusability
- **Reusable Widgets**: Common UI patterns (cards, metrics badges, HUD overlays, telemetry graphs, buttons, modal dialogs) must be extracted into standalone reusable components under `components/` or feature-specific component folders.
- **Separation of Concerns**: Keep business logic, state management, and presentational UI distinct.
- **Props Typing**: Always provide explicit TypeScript interfaces for component props.

---

## 3. Clean, Optimized & Scalable Code
- **Performance**: Avoid unnecessary re-renders, optimize heavy computations with `useMemo`/`useCallback` when needed, and prevent memory leaks.
- **Scalability**: Structure code and folders so new features can be added without modifying unrelated code.
- **Type Safety**: Maintain strict TypeScript compliance. Do not use `any` when explicit types can be declared. Never leave unused variables, imports, or parameters.

---

## 4. File & Feature Naming Conventions
- **Descriptive & Intuitive Names**: File names must clearly reflect the screen name, feature domain, or component role.
  - **Pages / Screens**: `HowItWorksPage.tsx`, `SimulationsPage.tsx`, `PricingPage.tsx`
  - **Feature Components**: `TelemetryPipelineHUD.tsx`, `LongitudinalGrowthChart.tsx`, `DiagnosticRubricCard.tsx`
  - **Shared UI Widgets**: `ScoreGauge.tsx`, `WaveformAudioPlayer.tsx`, `PathwaySelector.tsx`
  - **Services / Utils**: `audioStreamService.ts`, `competencyParser.ts`
- **Case Conventions**:
  - React Components & Pages: `PascalCase.tsx`
  - Hooks: `camelCase.ts` (prefixed with `use`, e.g., `useAudioRecorder.ts`)
  - Utilities & Helpers: `camelCase.ts`
  - Styles & Configs: `kebab-case.css` / `camelCase.ts`

---

## 5. Verification & Build Quality
- Every modification must compile cleanly without TypeScript or ESLint errors (`pnpm --filter @app/web build`).
- Preserve existing working code and functionality while refactoring.
