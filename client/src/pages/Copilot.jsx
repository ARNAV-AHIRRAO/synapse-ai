import { useState } from "react";
import api from "../services/api";

export default function Copilot() {

    const [prompt, setPrompt] = useState("");
    const [response, setResponse] = useState("");
    const [loading, setLoading] = useState(false);

    async function ask() {

        setLoading(true);

        try {

            const res = await api.post("/ai/", {
                type: "planner",
                prompt
            });

            setResponse(res.data.response);

        } catch (err) {

            setResponse("Error connecting to AI.");

        }

        setLoading(false);

    }

    return (

        <div>

            <h1>🤖 AI Employee Copilot</h1>

            <div className="card">

                <textarea
                    rows="8"
                    placeholder="
                        Plan my day:
                        - Finish proposal
                        - Client meeting at 2 PM
                        - Reply to emails
                        - Review PRs"
                    value={prompt}
                    onChange={(e) => setPrompt(e.target.value)}
                />

                <button onClick={ask}>

                    {loading ? "Thinking..." : "Ask AI"}

                </button>

            </div>

            <div className="card">

                <h2>AI Response</h2>

                <pre>{response}</pre>

                <p>✨ Generated using Google Gemini AI</p>

            </div>

        </div>

    );

}