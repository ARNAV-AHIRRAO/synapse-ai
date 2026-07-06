import { Link, useLocation } from "react-router-dom";

export default function Sidebar() {

  const location = useLocation();

  const menu = [
    { name: "Dashboard", path: "/" },
    { name: "AI Copilot", path: "/copilot" },
    { name: "Tasks", path: "/tasks" },
  ];

  return (
    <div className="sidebar">

      <h1>🧠 SynapseAI</h1>

      <p className="subtitle">Employee Copilot</p>

      {menu.map(item => (
        <Link
          key={item.path}
          to={item.path}
          className={location.pathname === item.path ? "active" : ""}
        >
          {item.name}
        </Link>
      ))}

    </div>
  );
}