import React from "react";
import { useDraggable } from "@dnd-kit/core";
import { BsThreeDotsVertical } from "react-icons/bs";
import { useState } from "react";
import { LiaCommentSolid } from "react-icons/lia";
import { AiTwotoneDelete } from "react-icons/ai";
import { GrEdit } from "react-icons/gr";
import { LuFiles } from "react-icons/lu";
import img1 from "../assets/img1.png";
import img3 from "../assets/img3.png";
import img4 from "../assets/img4.png";
import { BiPlus } from "react-icons/bi";

const TodoCard = ({
    task,
    addsubsection,
    setTodoModal,
    editdetails,
    deletesubsection,
  }) => {
    const [subsection, setSubsection] = useState("");
  const [isInputFocused, setInputFocused] = useState(false);

  const { attributes, listeners, setNodeRef, transform } = useDraggable({
    id: task.id,
    disabled: isInputFocused,
  });

  const style = transform
    ? {
        transform: `translate(${transform.x}px, ${transform.y}px)`,
      }
    : undefined;

  function handleClick(event) {
    event.stopPropagation();
    const id = task.id;
    const data = { id: id, subsection: subsection };
    addsubsection(data);
    setSubsection("");
  }

  return (
    <div
      ref={setNodeRef}
      {...listeners}
      {...attributes}
      className="cursor-grab rounded-lg bg-white hover:border-[2px] border-gray p-4 flex flex-col   gap-2 justify-center items-start  shadow-sm hover:shadow-md "
      style={style}
    >
      <div className="flex w-full justify-between items-center">
        <div
          className={`rounded-md px-4 py-1 ${
            task.priority === "Low"
              ? "text-orange-600 bg-orange-200"
              : task.priority === "High"
              ? "text-red-600 bg-red-200"
              : "text-green-600 bg-green-200"
          }`}
        >
          {task.priority}
        </div>
        <BsThreeDotsVertical size={20} />
      </div>

      <div className="font-bold flex justify-start gap-2 items-center">
        <p>{task.title}</p>
        <div
          onPointerDown={(e) => e.stopPropagation()}
          onClick={() =>
            setTodoModal({
              text1: "Edit Your Task",
              id: task.id,
              name: task.title,
              description: task.description,
              priority: task.priority,
              onSumbit: editdetails,
            })
          }
        >
          <GrEdit
            size={15}
            color="#5030E5"
            className="hover:scale-95 cursor-pointer"
            onPointerDown={(e) => e.stopPropagation()}
          />
        </div>
      </div>
      <div className=" text-sm font-normal text-[#787486]">{task.description}</div>
      <div className="flex  w-full justify-between items-center">
        <input
          type="text"
          placeholder="Add Subtask"
          name="subsection"
          value={subsection}
          onChange={(event) => setSubsection(event.target.value)}
          onPointerDown={(e) => e.stopPropagation()}
          onFocus={() => setInputFocused(true)}
          onBlur={() => setInputFocused(false)}
          className="bg-gray-100 placeholder:pl-2 p-1 pl-2 active:border-[2px] border-black placeholder:font-light placeholder:text-gray w-[80%]  rounded-md"
        />

        <div
          onPointerDown={(e) => e.stopPropagation()}
          onClick={handleClick}
          className="hover:scale-90"
        >
          <BiPlus
            size={30}
            color="#5030E5"
            className="bg-[#5030E5] bg-opacity-30 p-1 rounded-md cursor-pointer"
          />
        </div>
      </div>
      {task?.subtask?.length > 0 ? (
        <div className="flex flex-col justify-start items-start gap-2">
          {task.subtask?.map((item, index) => {
            return (
              <div
                key={index}
                className=" flex justify-center items-center gap-2"
              >
                <p className="text-sm  text-[#787486]">{item}</p>
                <AiTwotoneDelete
                  size={20}
                  onPointerDown={(e) => e.stopPropagation()}
                  color="#5030E5"
                  onClick={() => deletesubsection({ id: task.id, index })}
                  className="hover:scale-90 cursor-pointer "
                />
              </div>
            );
          })}
        </div>
      ) : (
        ""
      )}
      <div className="flex relative  w-full mt-3 gap-3  flex-col items-start lg:flex-row justify-between lg:items-center">
        <div className="flex   justify-center items-center ">
          <img
            src={img1}
            alt="logo"
            className="w-[25px] absolute left-0 h-[25px] rounded-full"
          />
          <img
            src={img4}
            alt="logo"
            className="w-[25px] absolute left-4 h-[25px] rounded-full"
          />
          <img
            src={img3}
            alt="logo"
            className="w-[25px]  absolute left-8 h-[25px] rounded-full"
          />
        </div>
        <div className="flex w-full flex-col text-[#787486] lg:flex-row items-start gap-2 justify-end lg:items-center">
          <div className="flex justify-center  text-sm font-light items-center gap-1">
            <LiaCommentSolid size={15} />
            <p >10 Comments</p>
          </div>
          <div className="flex justify-center text-sm font-light  items-center gap-1">
            <LuFiles size={15} />
            <p>3 Files</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TodoCard;
