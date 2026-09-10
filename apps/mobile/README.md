# Flutter Cross-Platform Mobile Client

Cross-platform mobile and web application built with **Flutter 3.x / Dart**.

---

## 📁 Feature-First Directory Layout

```
apps/mobile/
├── lib/
│   ├── main.dart
│   └── src/
│       ├── core/               # Shared constants, network clients, theme tokens
│       │   ├── constants/
│       │   ├── network/
│       │   └── theme/
│       ├── features/           # Modular domain-driven features
│       │   ├── ai_assistant/   # LLM chat screen & state
│       │   ├── auth/           # Login / register flows
│       │   └── home/           # Dashboard navigation
│       └── shared/             # Reusable Flutter widgets
├── test/                       # Unit and widget test suite
├── pubspec.yaml                # Dependencies & Flutter asset definitions
└── README.md
```

---

## 🚀 Running Locally

```bash
cd apps/mobile
flutter pub get

# Run on emulator/connected device
flutter run

# Run on Flutter Web
flutter run -d chrome
```
