from pydantic import BaseModel


class TaskCreate(BaseModel):
    title: str
    description: str
    priority: str = "Medium"


class TaskResponse(BaseModel):
    id: int
    title: str
    description: str
    priority: str
    status: str
    completed: bool

    class Config:
        from_attributes = True