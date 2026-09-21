from fastapi import APIRouter
from app.api.v1.endpoints import health, chat, embeddings, inference, cv_analysis

api_router = APIRouter()

api_router.include_router(health.router, prefix="/health", tags=["Health"])
api_router.include_router(chat.router, prefix="/chat", tags=["Chat"])
api_router.include_router(embeddings.router, prefix="/embeddings", tags=["Embeddings"])
api_router.include_router(inference.router, prefix="/inference", tags=["Inference"])
api_router.include_router(cv_analysis.router, prefix="/cv", tags=["CV Analysis"])
