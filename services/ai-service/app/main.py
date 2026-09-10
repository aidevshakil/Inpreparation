from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from app.core.config import settings
from app.core.logging import logger
from app.api.v1.router import api_router

def create_application() -> FastAPI:
    app = FastAPI(
        title=settings.APP_NAME,
        version="0.1.0",
        description="High-performance Python AI microservice serving LLM chat, embeddings, RAG, and ML inference.",
        docs_url="/docs",
        redoc_url="/redoc",
    )

    # Configure CORS for Flutter Web, React Web, and React Admin
    app.add_middleware(
        CORSMiddleware,
        allow_origins=["*"] if settings.DEBUG else settings.cors_origin_list,
        allow_credentials=True,
        allow_methods=["*"],
        allow_headers=["*"],
    )

    # Mount API Routers
    app.include_router(api_router, prefix="/api/v1")

    @app.on_event("startup")
    async def startup_event():
        logger.info(f"Starting {settings.APP_NAME} in [{settings.APP_ENV}] mode on port {settings.PORT}")

    @app.on_event("shutdown")
    async def shutdown_event():
        logger.info(f"Shutting down {settings.APP_NAME}")

    return app

app = create_application()
