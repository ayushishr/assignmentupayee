import React, { useState } from "react";
import profile from "../assets/profile.png";
import img1 from "../assets/img1.png";
import img2 from "../assets/img2.png";
import img3 from "../assets/img3.png";
import img4 from "../assets/img4.png";
import { MdEdit } from "react-icons/md";
import { CiFilter, CiLink } from "react-icons/ci";
import { IoIosAdd } from "react-icons/io";
import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import dayjs from "dayjs";
import { MdOutlinePersonAddAlt } from "react-icons/md";
import { PiEqualsFill } from "react-icons/pi";
import { CgMenuGridO } from "react-icons/cg";
import Todo from "../componenets/Todo";
import { useSelector } from "react-redux";

const Dashboard = ({ setTodoModal }) => {
  const isMenuOpen = useSelector((store) => store.app.isMenuOpen);
  const [Filter, setFilter] = useState(null);
  const [date, setdate] = useState(dayjs());

  const handleChange = (event) => {
    setFilter(event.target.value);
  };
  return (
    <div className={`h-full ${isMenuOpen ? 'hidden' : ''}  md:flex justify-center mt-8  item-center w-full`}>
      <div className=" w-[96%] mx-4 h-full flex  flex-col gap-5 justify-center items-center ">
        <div className="w-full  flex justify-between  pr-[60px] items-center">
          <div className="flex font-semibold  text-4xl  items-center justify-center gap-3">
            <h1 >Mobile-App</h1>
            <div className="p-1 bg-violet-200   cursor-pointer rounded-md">
              <MdEdit size={10} color="#5030E5" />
            </div>
            <div className="p-1 bg-violet-200 cursor-pointer rounded-md">
              <CiLink size={10} color="#5030E5" />
            </div>
          </div>

          <div className=" hidden md:flex justify-center items-center gap-3">
            <div className="p-1 bg-violet-200 cursor-pointer rounded-md">
              <IoIosAdd size={10} />
            </div>
            <p className="text-violet-600 cursor-pointer">Invite </p>
            <div className="relative flex justify-center items-center">
              <img src={img1} alt="logo" className="   w-[30px] h-[30px]" />
              <img
                src={img2}
                alt="logo"
                className="  absolute left-5 z-10  w-[30px] h-[30px]"
              />
              <img
                src={img3}
                alt="logo"
                className=" absolute z-20 left-10  w-[30px] h-[30px]"
              />
              <img
                src={img4}
                alt="logo"
                className=" absolute z-30 left-16 w-[30px] h-[30px]"
              />
              <div className="flex justify-center absolute left-20 z-40 w-[30px] h-[30px] bg-red-300 items-center  rounded-2xl">
                <p className="text-xs">+2</p>
              </div>
            </div>
          </div>
        </div>

        <div className="w-full  flex  justify-between  items-start">
          <div className="flex  flex-col sm:flex-row items-start justify-center sm:items-center gap-4">
            <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
              <InputLabel id="demo-select-small-label text-xs">
                <div className="flex items-center">
                  <CiFilter />
                  Filter
                </div>
              </InputLabel>
              <Select
                labelId="demo-select-small-label"
                id="demo-select-small"
                value={Filter}
                label="Filter"
                onChange={handleChange}
              >
                <MenuItem value={null}>
                  <em>None</em>
                </MenuItem>
                <MenuItem value={"Low"}>Low</MenuItem>
                <MenuItem value={"High"}>High</MenuItem>
                <MenuItem value={"Completed"}>Completed</MenuItem>
              </Select>
            </FormControl>

            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DemoContainer components={["DatePicker"]}>
                <DatePicker
                  label="Date"
                  name="startDate"
                  defaultValue={dayjs()}
                  onChange={(newValue) => setdate(newValue)}
                  slotProps={{
                    textField: {
                      sx: {
                        width: "60px",
                        "& .MuiInputBase-root": {
                          height: "46px",
                          fontSize: "0.8rem",
                        },
                      },
                      size: "small",
                    },
                  }}
                />
              </DemoContainer>
            </LocalizationProvider>

          </div>

          <div className=" hidden md:flex justify-center items-center gap-2 ">
            <div className="flex justify-center items-center pr-5  border-r-[2px] border-r-gray-300">
              <button className="p-2 rounded-md text-sm flex gap-2 border-[2px]  bg-pu border-gray-300 justify-center items-center">
                <MdOutlinePersonAddAlt size={18} color="#787486" />
                <p className="text-gray-600">Share</p>
              </button>
            </div>
            <PiEqualsFill size={30} color="#5030E5" />
            <CgMenuGridO size={25} color="#787486" />
          </div>
        </div>
        <Todo setTodoModal={setTodoModal} Filter={Filter} />
      </div>
    </div>
  );
};

export default Dashboard;
