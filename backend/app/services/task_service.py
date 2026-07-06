from sqlalchemy.orm import Session

from app.models.task import Task


def create_task(db: Session, task, owner_id):

    db_task = Task(
        title=task.title,
        description=task.description,
        priority=task.priority,
        owner_id=owner_id,
    )

    db.add(db_task)

    db.commit()

    db.refresh(db_task)

    return db_task


def get_tasks(db: Session, owner_id):

    return (
        db.query(Task)
        .filter(Task.owner_id == owner_id)
        .all()
    )