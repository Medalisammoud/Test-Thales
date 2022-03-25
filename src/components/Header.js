import React from "react";

//****************** */ import Images
import logo from "../assets/logo.jpg";
import search from "../assets/Search.png";
import notif from "../assets/bell.png";
import message from "../assets/message.png";
import toggle from "../assets/toggle.png";

const Header = () => {
  return (
    <div className="grid grid-cols-4 gap-4 h-20 lg:ml-36">
      <div className="m-2 h-12 w-12 bg-light-gray shadow-md rounded-lg flex justify-center items-center visible lg:invisible lg:absolute">
        <img src={toggle} alt="toggle" className="h-6 w-6" />
      </div>
      {/*********** Logo And Email Administrateur */}
      <div className="p-4 mr-20 max-w-sm mx-auto flex items-center space-x-4 invisible lg:visible">
        <div className="shrink-0">
          <img
            className="h-16 w-16 shadow-lg rounded-xl"
            src={logo}
            alt="Chris Brown"
          />
        </div>
        <div>
          <div className="text-base font-medium text-black pt-1">
            Chris Brown
          </div>
          <p className="text-slate-500 text-xs pb-1">Super Admin</p>
          <p className="text-slate-500 text-sm">Chris.Brown@gmail.com</p>
        </div>
      </div>
      {/********************* Bar Search */}
      <div>
        <label className="relative block -ml-32 lg:ml-20 mt-2 lg:mt-8 lg:w-80 w-56">
          <span className="absolute inset-y-0 left-0 flex items-center pl-2">
            <img
              className="h-5 w-5 "
              viewBox="0 0 20 20"
              src={search}
              alt="Search"
            />
          </span>
          <input
            className="placeholder:italic placeholder:text-slate-400 block bg-white lg:bg-light-gray w-full border border-slate-300 rounded-md py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm"
            placeholder="Search"
            type="text"
            name="search"
          />
        </label>
      </div>
      {/***************** div icons messenger */}
      <div className="flex flex-row mt-4 lg:mt-8 lg:ml-44 ">
        <div className="h-6 lg:h-10 w-8 lg:w-12 flex justify-center items-center shadow-lg bg-white rounded-xl ml-2 lg:ml-10">
          <img
            src={notif}
            className="h-4 lg:h-6 w-4 lg:w-6"
            alt="Notification"
          />
        </div>
        <div className="h-10 w-12 flex justify-center items-center shadow-lg bg-white rounded-xl ml-10 invisible sm:visible">
          <img src={message} className="h-6 w-6 " alt="Message" />
        </div>
      </div>
      <div className="h-10 w-10 rounded-xl bg-dark-blue mt-8 shadow-lg flex justify-center items-center ml-36 invisible sm:visible">
        <p className="text-slate-50 text-lg font-serif">i</p>
      </div>
    </div>
  );
};

export default Header;
