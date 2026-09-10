from fastapi import APIRouter, HTTPException
from pydantic import BaseModel
from typing import Dict, Any, List

router = APIRouter()

class InferenceInput(BaseModel):
    task: str = "classification"
    data: List[Dict[str, Any]]

class InferenceOutput(BaseModel):
    predictions: List[Dict[str, Any]]
    model_version: str = "v1.0.0"

@router.post("/predict", response_model=InferenceOutput, tags=["Inference"])
async def run_inference(input_data: InferenceInput):
    try:
        # Mock prediction output
        results = [
            {"index": idx, "label": "category_a", "confidence": 0.98}
            for idx, item in enumerate(input_data.data)
        ]
        return InferenceOutput(predictions=results, model_version="v1.0.0")
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))
