from app.routers.task_router import router as task_router
from app.models.task import Task
from app.routers.auth_router import router as auth_router
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from app.models.user import User
from app.database.database import Base, engine
from app.routers.ai_router import router as ai_router

Base.metadata.create_all(bind=engine)

app = FastAPI(
    title="SynapseAI",
    version="1.0.0"
)

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


@app.get("/")
def home():
    return {
        "message": "Welcome to SynapseAI 🚀"
    }


@app.get("/health")
def health():
    return {
        "status": "running"
    }


app.include_router(auth_router)

app.include_router(task_router)

app.include_router(ai_router)
