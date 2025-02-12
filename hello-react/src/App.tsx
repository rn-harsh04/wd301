// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
//import './App.css'
import React from "react";
import TaskCard from "./TaskCard";

function App() {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Smarter Tasks</h1>
      <p className="text-lg font-semibold">
        Project: <span className="font-normal">Graduation Final Year Project (Revamp College Website)</span>
      </p>
      
      <div className="grid grid-cols-2 gap-4 mt-6">
        {/* Pending Section */}
        <div className="border rounded-lg p-4">
          <h2 className="text-xl font-bold mb-2">Pending</h2>
          <TaskCard 
            title="Build the website with static content"
            dueDate="10th April"
            assigneeName="Rohit S"
          />
          <TaskCard 
            title="Add a blog"
            dueDate="22nd March"
            assigneeName="Rohit M"
          />
          <button className="mt-2 p-2 bg-gray-200 text-gray-600 rounded">+ New Task</button>
        </div>

        {/* Done Section */}
        <div className="border rounded-lg p-4">
          <h2 className="text-xl font-bold mb-2">Done</h2>
          <TaskCard 
            title="Design the mockup"
            completedAtDate="10th April"
            assigneeName="Rohit M"
          />
          <TaskCard 
            title="Get the approval from principal"
            completedAtDate="20th April"
            assigneeName="Ajay S"
          />
        </div>
      </div>
    </div>
  );
}

export default App;
