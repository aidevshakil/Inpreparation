from fastapi import APIRouter, HTTPException
from app.models.schemas import EmbeddingRequest, EmbeddingResponse
from app.core.logging import logger

router = APIRouter()

@router.post("/generate", response_model=EmbeddingResponse, tags=["Embeddings"])
async def generate_embeddings(request: EmbeddingRequest):
    try:
        logger.info(f"Generating embeddings for {len(request.texts)} items")
        # Generates standard 384-dimensional vector stubs for local testing
        dimension = 384
        dummy_embeddings = [[0.05 * (i + 1) for _ in range(dimension)] for i in range(len(request.texts))]

        return EmbeddingResponse(
            embeddings=dummy_embeddings,
            model=request.model or "all-MiniLM-L6-v2",
            dimensions=dimension,
        )
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))
