from pydantic import BaseSettings


class Settings(BaseSettings):
    app_name: str = "Scriptum-UI Backend"
    debug: bool = False
    database_url: str = "postgresql+asyncpg://postgres:postgres@db:5432/scriptum"

    class Config:
        env_file = ".env"


settings = Settings()
