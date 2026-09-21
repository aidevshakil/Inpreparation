import json
import os
import re
from typing import List, Dict, Any, Optional
import httpx

from app.models.schemas import ChatMessage, ChatCompletionResponse, UsageInfo
from app.core.config import settings
from app.core.logging import logger


class LLMEngine:
    """Universal Multi-Provider AI Engine supporting:
    1. Google Gemini (gemini-1.5-flash / gemini-2.0-flash / gemini-1.5-pro)
    2. Anthropic Claude (claude-3-haiku / claude-3-5-sonnet)
    3. OpenAI (gpt-4o-mini / gpt-4o)

    Auto-detects whichever key the user provides in .env and seamlessly falls back between them.
    """

    def __init__(self):
        self.openai_key = os.getenv("OPENAI_API_KEY", settings.OPENAI_API_KEY)
        self.gemini_key = os.getenv("GEMINI_API_KEY", settings.GEMINI_API_KEY)
        self.anthropic_key = os.getenv("ANTHROPIC_API_KEY", settings.ANTHROPIC_API_KEY)

        self.default_model = os.getenv("DEFAULT_MODEL", settings.DEFAULT_MODEL)
        self.gemini_model = os.getenv("GEMINI_MODEL", getattr(settings, "GEMINI_MODEL", "gemini-1.5-flash"))
        self.anthropic_model = os.getenv("ANTHROPIC_MODEL", getattr(settings, "ANTHROPIC_MODEL", "claude-3-haiku-20240307"))
        self.openai_model = os.getenv("OPENAI_MODEL", getattr(settings, "OPENAI_MODEL", "gpt-4o-mini"))

    # Key validation helpers
    def _is_valid_key(self, key: Optional[str]) -> bool:
        if not key:
            return False
        clean = key.strip()
        return len(clean) > 10 and not clean.startswith("your-") and not clean.startswith("sk-placeholder")

    @property
    def has_gemini_key(self) -> bool:
        return self._is_valid_key(os.getenv("GEMINI_API_KEY", self.gemini_key))

    @property
    def has_anthropic_key(self) -> bool:
        return self._is_valid_key(os.getenv("ANTHROPIC_API_KEY", self.anthropic_key))

    @property
    def has_openai_key(self) -> bool:
        return self._is_valid_key(os.getenv("OPENAI_API_KEY", self.openai_key))

    @property
    def has_active_api_key(self) -> bool:
        return self.has_gemini_key or self.has_anthropic_key or self.has_openai_key

    def get_active_providers(self) -> List[str]:
        providers = []
        if self.has_gemini_key:
            providers.append("gemini")
        if self.has_anthropic_key:
            providers.append("anthropic")
        if self.has_openai_key:
            providers.append("openai")
        return providers

    def get_gemini_key(self) -> str:
        return os.getenv("GEMINI_API_KEY", self.gemini_key or "").strip()

    def get_anthropic_key(self) -> str:
        return os.getenv("ANTHROPIC_API_KEY", self.anthropic_key or "").strip()

    def get_openai_key(self) -> str:
        return os.getenv("OPENAI_API_KEY", self.openai_key or "").strip()

    # 1. Chat Completion with dynamic fallback
    async def generate_response(
        self,
        messages: List[ChatMessage],
        model: Optional[str] = None,
        temperature: float = 0.7,
        max_tokens: int = 1500,
        system_prompt: Optional[str] = None,
    ) -> ChatCompletionResponse:
        """Attempts Gemini -> Anthropic Claude -> OpenAI based on available keys."""
        providers = self.get_active_providers()

        for provider in providers:
            try:
                if provider == "gemini":
                    m = model if model and "gemini" in model else self.gemini_model
                    logger.info(f"[LLM Engine] Routing to Google Gemini API ({m})")
                    reply = await self._call_gemini_chat(messages, m, temperature, max_tokens, system_prompt)
                    return ChatCompletionResponse(
                        reply=reply,
                        model=m,
                        usage=UsageInfo(prompt_tokens=40, completion_tokens=100, total_tokens=140),
                        metadata={"provider": "google_gemini", "model": m},
                    )

                elif provider == "anthropic":
                    m = model if model and "claude" in model else self.anthropic_model
                    logger.info(f"[LLM Engine] Routing to Anthropic Claude API ({m})")
                    reply = await self._call_claude_chat(messages, m, temperature, max_tokens, system_prompt)
                    return ChatCompletionResponse(
                        reply=reply,
                        model=m,
                        usage=UsageInfo(prompt_tokens=40, completion_tokens=100, total_tokens=140),
                        metadata={"provider": "anthropic_claude", "model": m},
                    )

                elif provider == "openai":
                    m = model if model and "gpt" in model else self.openai_model
                    logger.info(f"[LLM Engine] Routing to OpenAI API ({m})")
                    reply = await self._call_openai_chat(messages, m, temperature, max_tokens, system_prompt)
                    return ChatCompletionResponse(
                        reply=reply,
                        model=m,
                        usage=UsageInfo(prompt_tokens=40, completion_tokens=100, total_tokens=140),
                        metadata={"provider": "openai", "model": m},
                    )
            except Exception as err:
                logger.warning(f"[LLM Engine] Provider '{provider}' failed: {err}. Trying next available provider...")
                continue

        # Fallback simulation if no API key is provided or all failed
        last_user_msg = next((m.content for m in reversed(messages) if m.role == "user"), "Hello!")
        simulated_reply = (
            f"[InPreparation AI Gateway]: Processed prompt -> '{last_user_msg}'"
        )
        return ChatCompletionResponse(
            reply=simulated_reply,
            model=model or self.default_model,
            usage=UsageInfo(prompt_tokens=15, completion_tokens=25, total_tokens=40),
            metadata={"status": "mock_mode", "note": "Provide GEMINI_API_KEY, ANTHROPIC_API_KEY, or OPENAI_API_KEY in .env"},
        )

    # 2. Structured JSON Generation with dynamic fallback
    async def generate_structured_json(
        self,
        prompt: str,
        system_prompt: str,
        model: Optional[str] = None,
        max_tokens: int = 3000,
    ) -> Dict[str, Any]:
        """Generates validated JSON using whichever key is configured (Gemini, Claude, or OpenAI)."""
        providers = self.get_active_providers()

        for provider in providers:
            try:
                if provider == "gemini":
                    m = model if model and "gemini" in model else self.gemini_model
                    logger.info(f"[LLM Engine] Executing structured JSON extraction with Google Gemini ({m})")
                    return await self._call_gemini_json(prompt, system_prompt, m, max_tokens)

                elif provider == "anthropic":
                    m = model if model and "claude" in model else self.anthropic_model
                    logger.info(f"[LLM Engine] Executing structured JSON extraction with Anthropic Claude ({m})")
                    return await self._call_claude_json(prompt, system_prompt, m, max_tokens)

                elif provider == "openai":
                    m = model if model and "gpt" in model else self.openai_model
                    logger.info(f"[LLM Engine] Executing structured JSON extraction with OpenAI ({m})")
                    return await self._call_openai_json(prompt, system_prompt, m, max_tokens)

            except Exception as err:
                logger.warning(f"[LLM Engine] JSON extraction with provider '{provider}' encountered error: {err}")
                continue

        raise RuntimeError("No active AI API key provided or all providers failed (Provide GEMINI_API_KEY, ANTHROPIC_API_KEY, or OPENAI_API_KEY in .env)")

    # --------------------------------------------------------------------------
    # PROVIDER CALL IMPLEMENTATIONS
    # --------------------------------------------------------------------------

    # 1. GOOGLE GEMINI
    async def _call_gemini_chat(self, messages: List[ChatMessage], model: str, temperature: float, max_tokens: int, system_prompt: Optional[str]) -> str:
        key = self.get_gemini_key()
        url = f"https://generativelanguage.googleapis.com/v1beta/models/{model}:generateContent?key={key}"
        contents = []
        for msg in messages:
            role = "user" if msg.role in ("user", "human") else "model"
            contents.append({"role": role, "parts": [{"text": msg.content}]})

        payload: Dict[str, Any] = {
            "contents": contents,
            "generationConfig": {"temperature": temperature, "maxOutputTokens": max_tokens},
        }
        if system_prompt:
            payload["system_instruction"] = {"parts": [{"text": system_prompt}]}

        async with httpx.AsyncClient(timeout=45.0) as client:
            resp = await client.post(url, json=payload)
            if resp.status_code != 200:
                raise RuntimeError(f"Gemini API error ({resp.status_code}): {resp.text}")
            data = resp.json()
            return data["candidates"][0]["content"]["parts"][0]["text"]

    async def _call_gemini_json(self, prompt: str, system_prompt: str, model: str, max_tokens: int) -> Dict[str, Any]:
        key = self.get_gemini_key()
        url = f"https://generativelanguage.googleapis.com/v1beta/models/{model}:generateContent?key={key}"
        payload = {
            "system_instruction": {"parts": [{"text": system_prompt}]},
            "contents": [{"role": "user", "parts": [{"text": prompt}]}],
            "generationConfig": {
                "temperature": 0.1,
                "maxOutputTokens": max_tokens,
                "responseMimeType": "application/json",
            },
        }
        async with httpx.AsyncClient(timeout=55.0) as client:
            resp = await client.post(url, json=payload)
            if resp.status_code != 200:
                raise RuntimeError(f"Gemini JSON API error ({resp.status_code}): {resp.text}")
            data = resp.json()
            raw_json = data["candidates"][0]["content"]["parts"][0]["text"]
            return json.loads(raw_json)

    # 2. ANTHROPIC CLAUDE
    async def _call_claude_chat(self, messages: List[ChatMessage], model: str, temperature: float, max_tokens: int, system_prompt: Optional[str]) -> str:
        key = self.get_anthropic_key()
        url = "https://api.anthropic.com/v1/messages"
        headers = {
            "x-api-key": key,
            "anthropic-version": "2023-06-01",
            "content-type": "application/json",
        }
        formatted_messages = [
            {"role": "user" if m.role in ("user", "human") else "assistant", "content": m.content}
            for m in messages
        ]
        payload: Dict[str, Any] = {
            "model": model,
            "max_tokens": max_tokens,
            "temperature": temperature,
            "messages": formatted_messages,
        }
        if system_prompt:
            payload["system"] = system_prompt

        async with httpx.AsyncClient(timeout=50.0) as client:
            resp = await client.post(url, headers=headers, json=payload)
            if resp.status_code != 200:
                raise RuntimeError(f"Anthropic Claude API error ({resp.status_code}): {resp.text}")
            data = resp.json()
            return data["content"][0]["text"]

    async def _call_claude_json(self, prompt: str, system_prompt: str, model: str, max_tokens: int) -> Dict[str, Any]:
        key = self.get_anthropic_key()
        url = "https://api.anthropic.com/v1/messages"
        headers = {
            "x-api-key": key,
            "anthropic-version": "2023-06-01",
            "content-type": "application/json",
        }
        payload = {
            "model": model,
            "max_tokens": max_tokens,
            "temperature": 0.1,
            "system": f"{system_prompt}\nYou MUST output strictly valid JSON only with no preamble or explanations.",
            "messages": [{"role": "user", "content": f"{prompt}\nOutput valid JSON:"}],
        }
        async with httpx.AsyncClient(timeout=60.0) as client:
            resp = await client.post(url, headers=headers, json=payload)
            if resp.status_code != 200:
                raise RuntimeError(f"Claude JSON API error ({resp.status_code}): {resp.text}")
            data = resp.json()
            raw_text = data["content"][0]["text"]
            # Extract JSON substring
            match = re.search(r'\{.*\}', raw_text, re.DOTALL)
            if match:
                return json.loads(match.group())
            return json.loads(raw_text)

    # 3. OPENAI
    async def _call_openai_chat(self, messages: List[ChatMessage], model: str, temperature: float, max_tokens: int, system_prompt: Optional[str]) -> str:
        from openai import AsyncOpenAI
        client = AsyncOpenAI(api_key=self.get_openai_key())
        formatted = []
        if system_prompt:
            formatted.append({"role": "system", "content": system_prompt})
        for m in messages:
            formatted.append({"role": m.role, "content": m.content})

        res = await client.chat.completions.create(
            model=model,
            messages=formatted,
            temperature=temperature,
            max_tokens=max_tokens,
        )
        return res.choices[0].message.content or ""

    async def _call_openai_json(self, prompt: str, system_prompt: str, model: str, max_tokens: int) -> Dict[str, Any]:
        from openai import AsyncOpenAI
        client = AsyncOpenAI(api_key=self.get_openai_key())
        res = await client.chat.completions.create(
            model=model,
            messages=[
                {"role": "system", "content": f"{system_prompt}\nReturn strict valid JSON."},
                {"role": "user", "content": prompt},
            ],
            response_format={"type": "json_object"},
            temperature=0.1,
            max_tokens=max_tokens,
        )
        raw = res.choices[0].message.content or "{}"
        return json.loads(raw)


llm_engine = LLMEngine()
