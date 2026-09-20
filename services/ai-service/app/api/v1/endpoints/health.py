from fastapi import APIRouter
from app.models.schemas import HealthResponse
from app.core.config import settings

router = APIRouter()

@router.get("", response_model=HealthResponse, tags=["Health"])
@router.get("/", response_model=HealthResponse, tags=["Health"])
async def health_check():
    return HealthResponse(
        status="ok",
        version="0.1.0",
        environment=settings.APP_ENV,
    )
