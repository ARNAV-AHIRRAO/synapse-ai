from fastapi import APIRouter
from pydantic import BaseModel

from app.prompts.prompts import (
    PLANNER_PROMPT,
    EMAIL_PROMPT,
    MEETING_PROMPT,
    TASK_PROMPT,
)

from app.services.gemini_service import ask_gemini

router = APIRouter(
    prefix="/ai",
    tags=["AI Copilot"],
)


class AIRequest(BaseModel):
    type: str
    prompt: str


@router.post("/")
def ai(request: AIRequest):

    prompt_type = request.type.lower()

    if prompt_type == "planner":
        system = PLANNER_PROMPT

    elif prompt_type == "email":
        system = EMAIL_PROMPT

    elif prompt_type == "meeting":
        system = MEETING_PROMPT

    elif prompt_type == "task":
        system = TASK_PROMPT

    else:
        system = "You are a helpful AI assistant."

    answer = ask_gemini(system, request.prompt)

    return {
        "response": answer
    }