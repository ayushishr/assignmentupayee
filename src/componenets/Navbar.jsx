import React from "react";
import logo from "../assets/logo.png";
import { RxDoubleArrowLeft } from "react-icons/rx";
import { CiCalendar, CiSearch } from "react-icons/ci";
import { CiSquareQuestion } from "react-icons/ci";
import { IoMdNotificationsOutline } from "react-icons/io";
import { RiArrowDownSLine } from "react-icons/ri";
import { useAuth0 } from "@auth0/auth0-react";
import { useDispatch } from "react-redux";
import { toggleMenu } from "../utils/appSlice";

const Navbar = () => {
  const dispatch = useDispatch();
  const { logout } = useAuth0();
  const { user} = useAuth0();
  const toggleMenuHandler = () => {
    dispatch(toggleMenu());
  };

  const logoutUri =
  process.env.NODE_ENV === "development"
    ? import.meta.env.VITE_LOGOUT_URI
    : import.meta.env.VITE_LOGOUT_URI_PROD;
  return (
    <div className="w-full  h-[80px]  flex items-center justify-center  border-b-gray-300  border-b-[2px]">
      <div className="mx-[2%]  w-full h-full  flex  justify-start  items-center">
        <div className=" h-full sm:w-[50%]   md:w-[20%] border-r-gray-300 border-r-2  flex  gap-5 justify-between items-center">
          <div className="flex flex-row justify-start items-center gap-2">
            <img src={logo} alt="logo " className="w-[20px] h-[20px]" />
            <p className="font-semibold"> Project M.</p>
          </div>
          <div className=" pr-4 cursor-pointer" onClick={() => toggleMenuHandler()}>
            <RxDoubleArrowLeft size={20} color="gray" />
          </div>
        </div>

        <div className="w-full px-4 flex  flex-row   justify-end md:justify-between items-center ">
          <div className="hidden md:flex items-center">
            <div
              className="absolute   pl-3  hover:scale-90 "
            >
              <CiSearch color="gray" size={20} />
            </div>

            <input
              type="text"
              placeholder="Search for anything ..."
              className="bg-[#F5F5F5] text-gray placeholder-slate-600 placeholder:text-sm  placeholder:p-3   px-[40px] py-2  rounded-[0.5rem]   w-[100px] md:w-[24rem] "
            />
          </div>
          <div className=" flex justify-center items-center gap-8 ">
            <div className="  hidden md:flex justify-center items-center gap-4">
              <CiCalendar size={20} color="gray"/>
              <CiSquareQuestion size={20} color="gray"/>
              <IoMdNotificationsOutline size={20} color="gray"/>
            </div>
            <div className="flex justify-center items-center gap-4">
              <div className="hidden md:flex flex-col justify-center items-end text-sm">
                <p className=" font-bold text-xs lg:text-md">{user.name}</p>
                <p className="font-light text-gray-600 hidden sm:flex">Rajasthan, India</p>
              </div>
              <img
                src={user.picture}
                loading="lazy"
                className="w-10 h-10 rounded-full"
              />
              <RiArrowDownSLine size={20} className="hidden md:flex" />
              <div
              className=" bg-[#5030E5] text-white p-3 justify-center cursor-pointer rounded-lg text-sm items-center flex"
              onClick={() =>
                logout({
                  logoutParams: { returnTo: logoutUri },
                })
              }
            >
              Logout
            </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
