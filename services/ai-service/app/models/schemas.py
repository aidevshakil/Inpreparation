from typing import List, Optional, Dict, Any
from pydantic import BaseModel, Field
from datetime import datetime


class HealthResponse(BaseModel):
    status: str = "ok"
    version: str = "0.1.0"
    environment: str
    timestamp: datetime = Field(default_factory=datetime.utcnow)


class ChatMessage(BaseModel):
    role: str = Field(..., description="Role: 'user', 'assistant', or 'system'")
    content: str = Field(..., description="Message text")


class ChatCompletionRequest(BaseModel):
    messages: List[ChatMessage]
    model: Optional[str] = "gpt-4o-mini"
    temperature: Optional[float] = 0.7
    max_tokens: Optional[int] = 1000
    system_prompt: Optional[str] = None


class UsageInfo(BaseModel):
    prompt_tokens: int = 0
    completion_tokens: int = 0
    total_tokens: int = 0


class ChatCompletionResponse(BaseModel):
    reply: str
    model: str
    usage: UsageInfo
    metadata: Dict[str, Any] = Field(default_factory=dict)


class EmbeddingRequest(BaseModel):
    texts: List[str] = Field(..., min_length=1, description="List of strings to embed")
    model: Optional[str] = "all-MiniLM-L6-v2"


class EmbeddingResponse(BaseModel):
    embeddings: List[List[float]]
    model: str
    dimensions: int


class RAGQueryRequest(BaseModel):
    query: str
    collection_name: str = "documents"
    top_k: int = 4


class RAGQueryResponse(BaseModel):
    answer: str
    sources: List[Dict[str, Any]]
