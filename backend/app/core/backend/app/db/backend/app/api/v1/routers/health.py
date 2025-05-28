from fastapi import APIRouter

router = APIRouter(prefix="/health", tags=["Health"])


@router.get("/", summary="Health check")
async def health_root():
    return {"status": "ok"}
