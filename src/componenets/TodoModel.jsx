import { useState } from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

const TodoModel = ({ modalData, setTodoModal }) => {
  const [form, setForm] = useState({
    name: modalData.name ? modalData.name : "",
    description: modalData.description ? modalData.description : "",
    priority: modalData.priority ? modalData.priority : "",
  });

  const isvalid =
    form.name.trim() !== "" &&
    form.description.trim() !== "" &&
    form.priority.trim() !== ""
      ? false
      : true;
      
  return (
    <div className="fixed inset-0 z-[1000] !mt-0 grid place-items-center overflow-auto bg-violet-400 bg-opacity-10 backdrop-blur-sm">
      <div className="w-11/12 max-w-[350px] rounded-lg border gap-2 flex justify-center items-center flex-col border-richblack-400 bg-violet-600 bg-opacity-75 p-6">
        <p className="text-2xl text-white font-semibold text-gray">
          {modalData?.text1}
        </p>

        <input
          type="text"
          name="name"
          value={form.name}
          onChange={(e) => setForm({ ...form, name: e.target.value })}
          placeholder="Enter the Task Name"
          className="w-full h-10 rounded-lg  mt-3 border border-richblack-400 p-2 placeholder:pr-2 "
        />
        <input
          type="text"
          name="description"
          value={form.description}
          onChange={(e) => setForm({ ...form, description: e.target.value })}
          placeholder="Enter the Task Description"
          className="w-full h-10 rounded-lg border border-richblack-400 p-2 placeholder:pr-2 "
        />

        <div>
          <FormControl
            sx={{ m: 2, width: 300, background: "white", borderRadius: "10px" }}
            size="small"
          >
            <InputLabel id="demo-select-small-label">
              Set Task Priority
            </InputLabel>
            <Select
              labelId="demo-select-small-label"
              id="demo-select-small"
              value={form.priority}
              label="priority"
              placeholder="Set priority"
              className="placholder:text-black"
              onChange={(event) =>
                setForm({ ...form, priority: event.target.value })
              }
            >
              <MenuItem value="">
                <em>None</em>
              </MenuItem>
              <MenuItem value={"Low"}>Low</MenuItem>
              <MenuItem value={"High"}>High</MenuItem>
              <MenuItem value={"Completed"}>Completed</MenuItem>
            </Select>
          </FormControl>
        </div>
        <div className=" flex  justify-center items-center gap-2 ">
          <button
            disabled={isvalid}
            className={`p-2 rounded-lg text-white  ${
              isvalid ? "bg-yellow-500" : "bg-green-500"
            } flex items-center justify-center`}
            onClick={() => {
              modalData.onSumbit(form, modalData?.id);
              setTodoModal(null);
            }}
          >
            Submit
          </button>
          <button
            className="p-2 rounded-lg bg-red-500 text-white flex items-center justify-center"
            onClick={() => {
              setTodoModal(null);
            }}
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default TodoModel;
