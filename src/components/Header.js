import React from "react";

//****************** */ import Images
import logo from "../assets/logo.jpg";
import search from "../assets/Search.png";
import notif from "../assets/bell.png";
import message from "../assets/message.png";

const Header = () => {
  return (
    <div className="grid grid-cols-4 gap-4 h-20 ml-36">
      {/*********** Logo And Email Administrateur */}
      <div className="p-4 mr-20 max-w-sm mx-auto flex items-center space-x-4">
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
        <label className="relative block ml-20 mt-8 w-80">
          <span className="absolute inset-y-0 left-0 flex items-center pl-2">
            <img
              className="h-5 w-5 "
              viewBox="0 0 20 20"
              src={search}
              alt="Search"
            />
          </span>
          <input
            className="placeholder:italic placeholder:text-slate-400 block bg-light-gray w-full border border-slate-300 rounded-md py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm"
            placeholder="Search for anything..."
            type="text"
            name="search"
          />
        </label>
      </div>
      {/***************** div icons messenger */}
      <div className="flex flex-row mt-8 ml-44">
        <div className="h-10 w-12 flex justify-center items-center shadow-lg bg-white rounded-xl ml-10">
          <img src={notif} className="h-6 w-6" alt="Notification" />
        </div>
        <div className="h-10 w-12 flex justify-center items-center shadow-lg bg-white rounded-xl ml-10">
          <img src={message} className="h-6 w-6 " alt="Message" />
        </div>
      </div>
      <div className="h-10 w-10 rounded-xl bg-dark-blue mt-8 shadow-lg flex justify-center items-center ml-36">
        <p className="text-slate-50 text-lg font-serif">i</p>
      </div>
    </div>
  );
};

export default Header;
