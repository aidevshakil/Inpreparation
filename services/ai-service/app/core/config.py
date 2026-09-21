from typing import List
try:
    from pydantic_settings import BaseSettings, SettingsConfigDict
except ImportError:
    from pydantic import BaseModel as BaseSettings  # type: ignore
    SettingsConfigDict = None  # type: ignore


class Settings(BaseSettings):
    APP_NAME: str = "AI-Service"
    APP_ENV: str = "development"
    DEBUG: bool = True
    PORT: int = 8000
    HOST: str = "0.0.0.0"

    # API Keys & Models
    OPENAI_API_KEY: str = ""
    GEMINI_API_KEY: str = ""
    ANTHROPIC_API_KEY: str = ""
    DEFAULT_MODEL: str = "gemini-1.5-flash"
    GEMINI_MODEL: str = "gemini-1.5-flash"
    ANTHROPIC_MODEL: str = "claude-3-haiku-20240307"
    OPENAI_MODEL: str = "gpt-4o-mini"
    EMBEDDING_MODEL: str = "all-MiniLM-L6-v2"

    # CORS
    CORS_ORIGINS: str = "http://localhost:3000,http://localhost:5173,http://localhost:5174"

    # Redis & Vector DB
    REDIS_URL: str = "redis://localhost:6379/0"
    VECTOR_DB_URL: str = "http://localhost:6333"

    @property
    def cors_origin_list(self) -> List[str]:
        return [origin.strip() for origin in self.CORS_ORIGINS.split(",") if origin.strip()]

    if SettingsConfigDict is not None:
        model_config = SettingsConfigDict(
            env_file=(".env", "../../.env"),
            env_file_encoding="utf-8",
            extra="ignore",
        )
    else:
        class Config:
            env_file = (".env", "../../.env")
            extra = "ignore"


settings = Settings()
