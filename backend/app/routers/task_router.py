from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session

from app.models.task import Task

from app.dependencies import get_db
from app.schemas.task_schema import TaskCreate
from app.services.task_service import (
    create_task,
    get_tasks,
)

router = APIRouter(
    prefix="/tasks",
    tags=["Tasks"],
)


# Temporary user id until JWT auth middleware is added
TEMP_USER_ID = 1


@router.post("/")
def add_task(task: TaskCreate, db: Session = Depends(get_db)):
    return create_task(db, task, TEMP_USER_ID)


@router.get("/")
def list_tasks(db: Session = Depends(get_db)):
    return get_tasks(db, TEMP_USER_ID)


@router.put("/{task_id}/complete")
def complete_task(task_id: int, db: Session = Depends(get_db)):
    task = db.query(Task).filter(Task.id == task_id).first()

    if not task:
        return {"message": "Task not found"}

    task.completed = True
    task.status = "Completed"

    db.commit()

    return {"message": "Task completed"}


@router.delete("/{task_id}")
def delete_task(task_id: int, db: Session = Depends(get_db)):
    task = db.query(Task).filter(Task.id == task_id).first()

    if not task:
        return {"message": "Task not found"}

    db.delete(task)
    db.commit()

    return {"message": "Deleted"}
