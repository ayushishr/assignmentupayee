import React from "react";
import { useState } from "react";
import Column from "./Column";
import { DndContext } from "@dnd-kit/core";
import { v4 as uuidv4 } from "uuid";
import { useDispatch, useSelector } from "react-redux";
import { setAllTasks } from "../utils/taskSlice";

const COLUMNS = [
  { id: "TODO", title: "To Do", color: "[#5030E5]" },
  { id: "IN_PROGRESS", title: "On Progress", color: "orange-300" },
  { id: "DONE", title: "Done", color: "green-300" },
];

const Todo = ({ setTodoModal, Filter }) => {
  const dispatch = useDispatch();
  const { AllTasks } = useSelector((state) => state.tasks);

  const [tasks, setTasks] = useState(AllTasks);

  const handleAdd = (data) => {
    const { name, description, priority } = data;
    if (
      name.trim() === "" ||
      description.trim() === "" ||
      priority.trim() === ""
    ) {
      toast.error("fill all the fields");
      return;
    }
    const newtask = {
      id: uuidv4(),
      title: name,
      description: description,
      status: "TODO",
      priority: priority,
      subtask: [],
    };
    const currtask = [...tasks, newtask];
    dispatch(setAllTasks(currtask));
    setTasks(currtask);
  };

  const editdetails = (data, id) => {
    const { name, description, priority } = data;
    if (
      name.trim() === "" ||
      description.trim() === "" ||
      priority.trim() === ""
    ) {
      toast.error("fill all the fields");
      return;
    }
    const taskid = id;

    const currtask = tasks.map((task) =>
      task.id === taskid
        ? {
            ...task,
            title: name,
            description: description,
            priority: priority,
          }
        : task
    );

    dispatch(setAllTasks(currtask));
    setTasks(currtask);
  };

  const addsubsection = ({ id, subsection }) => {
    const taskid = id;
    const task = tasks.find((item) => item.id === taskid);
    const subtask = task?.subtask ? [...task.subtask] : [];
    if (subsection.trim() === "") {
      return;
    }
    subtask.push(subsection);

    const currtask = tasks.map((task) =>
      task.id === taskid
        ? {
            ...task,
            subtask: subtask,
          }
        : task
    );

    dispatch(setAllTasks(currtask));
    setTasks(currtask);
  };

  const deletesubsection = ({ id, index }) => {
    const taskid = id;
    const task = tasks.find((item) => item.id === taskid);
    const subtask = task?.subtask ? [...task.subtask] : [];
    let newsubtask = null;
    if (subtask.length > 0) {
      newsubtask = subtask?.filter((item, ind) => ind !== index);
    }

    const currtask = tasks.map((task) =>
      task.id === taskid
        ? {
            ...task,
            subtask: newsubtask,
          }
        : task
    );

    dispatch(setAllTasks(currtask));
    setTasks(currtask);
  };

  function handleDragEnd(event) {
    const { active, over } = event;

    if (!over) return;

    const taskId = active.id;
    const newStatus = over.id;

    const task = tasks?.filter((item) => item.id === taskId);

    if (task[0].status !== newStatus) {
      const currtask = tasks.map((task) =>
        task.id === taskId
          ? {
              ...task,
              status: newStatus,
            }
          : task
      );

      dispatch(setAllTasks(currtask));
      setTasks(currtask);
    } else if (task[0].status === newStatus) {
      const newarr = tasks?.filter((item) => item.id !== taskId);

      newarr.push(task[0]);
      dispatch(setAllTasks(newarr));
      setTasks(newarr);
    }
  }

  return (
    <div className=" w-full mt-4 ">
      <div className="flex flex-col  md:flex-row gap-8">
        <DndContext onDragEnd={handleDragEnd}>
          {COLUMNS.map((column) => {
            return (
              <Column
                key={column.id}
                column={column}
                tasks={tasks.filter((task) => task.status === column.id)}
                addsubsection={addsubsection}
                setTodoModal={setTodoModal}
                editdetails={editdetails}
                handleAdd={handleAdd}
                deletesubsection={deletesubsection}
                Filter={Filter}
              />
            );
          })}
        </DndContext>
      </div>
    </div>
  );
};

export default Todo;
