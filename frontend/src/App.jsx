import React, { useState } from "react";
import Header from "./components/Header";
import Tasks from "./components/Tasks";
import Reports from "./components/Reports";
import Graphs from "./components/Graphs";

function App() {
  const [page, setPage] = useState("tasks");

  return (
    <div>
      <Header setPage={setPage} />

      {page === "tasks" && <Tasks />}
      {page === "reports" && <Reports />}
      {page === "graphs" && <Graphs />}
    </div>
  );
}

export default App;
