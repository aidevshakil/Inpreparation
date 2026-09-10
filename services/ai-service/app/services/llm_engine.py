from typing import List, Dict, Any
from app.models.schemas import ChatMessage, ChatCompletionResponse, UsageInfo
from app.core.config import settings
from app.core.logging import logger


class LLMEngine:
    """Service wrapper for interacting with Large Language Models."""

    def __init__(self):
        self.api_key = settings.OPENAI_API_KEY
        self.default_model = settings.DEFAULT_MODEL

    async def generate_response(
        self,
        messages: List[ChatMessage],
        model: str = None,
        temperature: float = 0.7,
        max_tokens: int = 1000,
        system_prompt: str = None,
    ) -> ChatCompletionResponse:
        model_name = model or self.default_model
        logger.info(f"Generating LLM response with model {model_name}")

        # If an OpenAI key is configured, invoke OpenAI client; otherwise provide a fallback mock response
        if self.api_key and not self.api_key.startswith("your-"):
            try:
                from openai import AsyncOpenAI
                client = AsyncOpenAI(api_key=self.api_key)
                
                formatted_messages = []
                if system_prompt:
                    formatted_messages.append({"role": "system", "content": system_prompt})
                for msg in messages:
                    formatted_messages.append({"role": msg.role, "content": msg.content})

                response = await client.chat.completions.create(
                    model=model_name,
                    messages=formatted_messages,
                    temperature=temperature,
                    max_tokens=max_tokens,
                )

                choice = response.choices[0]
                usage = response.usage

                return ChatCompletionResponse(
                    reply=choice.message.content or "",
                    model=model_name,
                    usage=UsageInfo(
                        prompt_tokens=usage.prompt_tokens if usage else 0,
                        completion_tokens=usage.completion_tokens if usage else 0,
                        total_tokens=usage.total_tokens if usage else 0,
                    ),
                )
            except Exception as e:
                logger.error(f"OpenAI API invocation failed: {str(e)}")
                raise

        # Fallback simulated response for local development without API key
        last_user_msg = next((m.content for m in reversed(messages) if m.role == "user"), "Hello!")
        simulated_reply = (
            f"[AI Service Stub ({model_name})]: Processed your prompt -> '{last_user_msg}'"
        )

        return ChatCompletionResponse(
            reply=simulated_reply,
            model=model_name,
            usage=UsageInfo(prompt_tokens=15, completion_tokens=25, total_tokens=40),
            metadata={"status": "mock_mode", "note": "Configure OPENAI_API_KEY in .env for live LLM inference"},
        )


llm_engine = LLMEngine()
