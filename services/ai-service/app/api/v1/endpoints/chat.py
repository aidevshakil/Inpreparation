from fastapi import APIRouter, HTTPException
from app.models.schemas import (
    ChatCompletionRequest,
    ChatCompletionResponse,
    RAGQueryRequest,
    RAGQueryResponse,
)
from app.services.llm_engine import llm_engine
from app.services.rag_pipeline import rag_pipeline

router = APIRouter()

@router.post("/completions", response_model=ChatCompletionResponse, tags=["Chat"])
async def create_chat_completion(request: ChatCompletionRequest):
    try:
        response = await llm_engine.generate_response(
            messages=request.messages,
            model=request.model,
            temperature=request.temperature,
            max_tokens=request.max_tokens,
            system_prompt=request.system_prompt,
        )
        return response
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))

@router.post("/rag/query", response_model=RAGQueryResponse, tags=["RAG"])
async def query_rag(request: RAGQueryRequest):
    try:
        response = await rag_pipeline.query(
            query_text=request.query,
            collection_name=request.collection_name,
            top_k=request.top_k,
        )
        return response
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))
