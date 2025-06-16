import React, { useState } from "react";
import Navbar from "../componenets/Navbar";
import Sidebar from "../componenets/Sidebar";
import Dashboard from "./Dashboard";
import TodoModel from "../componenets/TodoModel";

const Home = () => {
  const [todoModal, setTodoModal] = useState(null);
  return (
    <div className="flex w-[100%] flex-col">
      <Navbar />
      <div className="flex mx-[2%]">
        <Sidebar />
        <Dashboard setTodoModal={setTodoModal} />
      </div>

      {todoModal && (
        <TodoModel setTodoModal={setTodoModal} modalData={todoModal} />
      )}
    </div>
  );
};

export default Home;
