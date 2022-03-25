import React from "react";

const Checkbox = () => {
  return (
    <div className="mr-40">
      <p className="text-sm font-medium text-black">Contact Moi Par</p>
      <div className="flex">
        <div className="form-check">
          <input
            className="form-check-input appearance-none h-4 w-4 border border-gray-300 rounded-sm bg-light-gray checked:bg-black focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
            type="checkbox"
            value=""
            id="flexCheckDefault"
          />
          <label
            className="form-check-label inline-block text-gray-800"
            for="flexCheckDefault"
          >
            Par Le platform
          </label>
        </div>
        <div className="form-check  ml-14">
          <input
            className="form-check-input appearance-none h-4 w-4 border border-gray-300 rounded-sm bg-light-gray checked:bg-black  focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
            type="checkbox"
            value=""
            id="flexCheckDefault"
          />
          <label
            className="form-check-label inline-block text-gray-800"
            for="flexCheckDefault"
          >
            Par Telephone
          </label>
        </div>
        <div className="form-check  ml-14">
          <input
            className="form-check-input appearance-none h-4 w-4 border border-gray-300 rounded-sm bg-light-gray checked:bg-black  focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
            type="checkbox"
            value=""
            id="flexCheckDefault"
          />
          <label
            className="form-check-label inline-block text-gray-800"
            for="flexCheckDefault"
          >
            Par Email
          </label>
        </div>
        <div className="form-check  ml-14">
          <input
            className="form-check-input appearance-none h-4 w-4 border border-gray-300 rounded-sm bg-light-gray checked:bg-black  focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
            type="checkbox"
            value=""
            id="flexCheckDefault"
          />
          <label
            className="form-check-label inline-block text-gray-800"
            for="flexCheckDefault"
          >
            Sur Place
          </label>
        </div>
      </div>
    </div>
  );
};

export default Checkbox;
