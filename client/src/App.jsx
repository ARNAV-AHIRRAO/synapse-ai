import { Routes, Route } from "react-router-dom";

import Sidebar from "./components/Sidebar";

import Dashboard from "./pages/Dashboard";
import Copilot from "./pages/Copilot";
import Tasks from "./pages/Tasks";

import "./App.css";

function App() {
  return (
    <div className="app">

      <Sidebar />

      <div className="content">

        <Routes>

          <Route path="/" element={<Dashboard />} />

          <Route path="/copilot" element={<Copilot />} />

          <Route path="/tasks" element={<Tasks />} />

        </Routes>

      </div>

    </div>
  );
}

export default App;