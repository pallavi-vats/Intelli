import React, { useState } from "react";
import { Search, Bell } from "lucide-react";

import Tasks from "./Tasks";
import Reports from "./Reports";
import Graphs from "./Graphs";

export default function Header() {
  const [page, setPage] = useState("task");

  return (
    <div className="min-h-screen bg-black text-white">

      {/* HEADER */}
      <header className="w-full bg-[#0E0E0E] shadow-md">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">

          {/* LOGO */}
          <div className="text-2xl font-bold text-[#2EC866]">
            Intelli
          </div>

          {/* NAVIGATION */}
          <nav className="hidden md:flex items-center space-x-8 text-gray-300 font-medium">

            <button
              onClick={() => setPage("task")}
              className={`transition ${page === "task" ? "text-[#2EC866] font-semibold" : "hover:text-[#2EC866]"}`}
            >
              Task
            </button>

            <button
              onClick={() => setPage("report")}
              className={`transition ${page === "report" ? "text-[#2EC866] font-semibold" : "hover:text-[#2EC866]"}`}
            >
              Report
            </button>

            <button
              onClick={() => setPage("graph")}
              className={`transition ${page === "graph" ? "text-[#2EC866] font-semibold" : "hover:text-[#2EC866]"}`}
            >
              Graph
            </button>

          </nav>

          {/* RIGHT SIDE */}
          <div className="flex items-center space-x-4">

            <div className="relative">
              <input
                type="text"
                placeholder="Search..."
                className="bg-[#1A1A1A] text-gray-200 border border-[#2A2A2A] rounded-lg 
                pl-10 pr-4 py-2 text-sm focus:ring-2 focus:ring-[#2EC866] focus:outline-none w-40"
              />
              <Search className="absolute left-3 top-2.5 w-4 text-gray-400" />
            </div>

            <div className="p-2 rounded-lg hover:bg-[#1A1A1A] cursor-pointer">
              <Bell className="w-5 text-gray-300 hover:text-[#2EC866]" />
            </div>

            <img
              src="https://i.pravatar.cc/40"
              alt="profile"
              className="w-9 h-9 rounded-full border border-[#2EC866] hover:border-white transition"
            />
          </div>
        </div>
      </header>

      {/* PAGE SWITCHING */}
      {page === "task" && <Tasks />}
      {page === "report" && <Reports />}
      {page === "graph" && <Graphs />}

    </div>
  );
}
