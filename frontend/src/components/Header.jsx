import React from "react";
import "../css/header.css";

function Header({ setPage }) {
  return (
    <header className="header-container">
      
      <nav className="nav-left">
        <button onClick={() => setPage("tasks")}>Tasks</button>
        <button onClick={() => setPage("reports")}>Reports</button>
        <button onClick={() => setPage("graphs")}>Graphs</button>
      </nav>

      <div className="nav-right">
        <input type="text" placeholder="Search..." />
        <button>Speak</button>
      </div>

    </header>
  );
}

export default Header;
