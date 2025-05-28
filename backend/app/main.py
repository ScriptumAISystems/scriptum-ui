from fastapi import FastAPI

from backend.app.api.v1.routers import routers

app = FastAPI(title="Scriptum-UI Backend", version="0.1.0")

for router in routers:
    app.include_router(router)
