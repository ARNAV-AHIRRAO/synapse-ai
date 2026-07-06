import { useEffect, useState } from "react";

import api from "../services/api";

export default function Tasks() {

  const [tasks, setTasks] = useState([]);

  const [title, setTitle] = useState("");

  const [description, setDescription] = useState("");

  const [priority, setPriority] = useState("Medium");

  async function loadTasks() {

    const res = await api.get("/tasks/");

    setTasks(res.data);

  }

  async function createTask() {

    if (title.trim() === "") {
      alert("Please enter a task title.");
      return;
    }

    await api.post("/tasks/", {

      title,
      description,
      priority

    });

    setTitle("");
    setDescription("");

    loadTasks();

  }

  useEffect(() => {

    loadTasks();

  }, []);

  async function completeTask(id) {

    await api.put(`/tasks/${id}/complete`);

    loadTasks();

  }

  async function deleteTask(id) {

    if (!window.confirm("Delete this task?"))
      return;

    await api.delete(`/tasks/${id}`);

    loadTasks();

  }

  return (

    <div>

      <h1>Tasks</h1>

      <input

        placeholder="Title"

        value={title}

        onChange={(e) => setTitle(e.target.value)}

      />

      <br /><br />

      <textarea

        placeholder="Description"

        value={description}

        onChange={(e) => setDescription(e.target.value)}

      />

      <br /><br />

      <select

        value={priority}

        onChange={(e) => setPriority(e.target.value)}

      >

        <option>High</option>

        <option>Medium</option>

        <option>Low</option>

      </select>

      <br /><br />

      <button onClick={createTask}>

        Create Task

      </button>

      <hr />

      {

        tasks
          .filter(task => !task.completed)
          .map(task => (

            <div className="card" key={task.id}>

              <h2>{task.title}</h2>

              <p style={{ marginTop: "10px", color: "#555" }}>
                {task.description}
              </p>

              <div className="taskFooter">

                <div>

                  <span className={`priority ${task.priority.toLowerCase()}`}>
                    {task.priority}
                  </span>

                  <span
                    style={{
                      marginLeft: "15px",
                      padding: "5px 10px",
                      borderRadius: "20px",
                      background: "#fef3c7",
                      color: "#92400e",
                      fontWeight: "bold"
                    }}
                  >
                    Pending
                  </span>

                </div>

                <div className="actions">

                  {!task.completed && (
                    <button onClick={() => completeTask(task.id)}>
                      ✅ Complete
                    </button>
                  )}

                  <button
                    className="deleteBtn"
                    onClick={() => deleteTask(task.id)}
                  >
                    🗑 Delete
                  </button>

                </div>

              </div>

            </div>

          ))

      }

    </div>

  );

}