# Python AI Microservice

FastAPI-powered AI backend service responsible for:
- Large Language Model (LLM) inference & chat completions
- Retrieval-Augmented Generation (RAG) pipelines
- Text embeddings generation
- Custom machine learning predictions

---

## 📁 Directory Layout

```
services/ai-service/
├── app/
│   ├── api/
│   │   └── v1/
│   │       ├── endpoints/
│   │       │   ├── health.py        # Service health checks
│   │       │   ├── chat.py          # LLM completions & RAG search
│   │       │   ├── embeddings.py    # Vector embedding generation
│   │       │   └── inference.py     # Custom ML models
│   │       └── router.py            # Aggregated API v1 router
│   ├── core/
│   │   ├── config.py                # Pydantic environment configuration
│   │   └── logging.py               # Structured logging
│   ├── models/
│   │   └── schemas.py               # Request/response validation schemas
│   ├── services/
│   │   ├── llm_engine.py            # OpenAI / local LLM abstraction
│   │   └── rag_pipeline.py          # Document chunking & context retrieval
│   └── main.py                      # Application bootstrap & middleware
├── tests/
│   └── test_health.py               # Pytest async test cases
├── pyproject.toml                   # Project metadata
├── requirements.txt                 # Pinned dependencies
└── README.md
```

---

## 🚀 Running Locally

```bash
cd services/ai-service
python -m venv .venv

# Windows:
.venv\Scripts\activate
# Linux/macOS:
# source .venv/bin/activate

pip install -r requirements.txt
cp .env.example .env

# Run development server
uvicorn app.main:app --reload --port 8000
```

Swagger UI documentation is available at `http://localhost:8000/docs`.
