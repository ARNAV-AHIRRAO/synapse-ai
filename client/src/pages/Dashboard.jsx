import { useEffect, useState } from "react";
import api from "../services/api";

export default function Dashboard() {

    const [tasks, setTasks] = useState([]);

    useEffect(() => {
        load();
    }, []);

    async function load() {
        const res = await api.get("/tasks/");
        setTasks(res.data);
    }

    const total = tasks.length;
    const completed = tasks.filter(t => t.completed).length;
    const pending = total - completed;

    return (

        <div>

            <h1>👋 Welcome Back</h1>

            <div className="card">

                <h2>🤖 AI Productivity Score</h2>

                <h1 style={{ fontSize: "60px", color: "#2563eb" }}>

                    94%

                </h1>

                <p>

                    Based on today's pending tasks and workload.

                </p>

            </div>

            <p>AI Employee Copilot Dashboard</p>

            <div className="stats">

                <div className="statCard">
                    <h2>{total}</h2>
                    <p>Total Tasks</p>
                </div>

                <div className="statCard">
                    <h2>{pending}</h2>
                    <p>Pending</p>
                </div>

                <div className="statCard">
                    <h2>{completed}</h2>
                    <p>Completed</p>
                </div>

            </div>

            <div className="card">

                <h2>📋 Recent Tasks</h2>

                {

                    tasks.map(task => (

                        <div key={task.id}>

                            <h3>{task.title}</h3>

                            <p>{task.description}</p>

                            <small>{task.priority}</small>

                            <hr />

                        </div>

                    ))

                }

            </div>

        </div>

    );

}