from sqlalchemy.ext.asyncio import AsyncSession, create_async_engine
from sqlalchemy.orm import sessionmaker

from backend.app.core.config import settings

async_engine = create_async_engine(
    settings.database_url,
    echo=settings.debug,
    future=True,
)

async_session_maker = sessionmaker(
    async_engine, class_=AsyncSession, expire_on_commit=False
)

def get_session() -> AsyncSession:  # pragma: no cover
    """Yield an async database session."""
    with async_session_maker() as session:
        yield session
