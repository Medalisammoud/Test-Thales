import React from "react";

const InputTextarea = () => {
  return (
    <div className="flex justify-center h-3/4 w-11/12">
      <div className="mb-3  h-3/4 w-11/12">
        <label
          for="ControlTextarea"
          className="form-label inline-block mb-2 text-sm font-medium text-black"
        >
          Example textarea
        </label>
        <textarea
          className="
        form-control
        block
        w-full
        px-3
        py-1.5
        text-base
        font-normal
        text-gray-700
        bg-light-gray bg-clip-padding
        border border-solid border-gray-300
        rounded-lg
        
        m-0
        focus:text-gray-700 focus:bg-white  focus:outline-none
      "
          id="ControlTextarea"
          rows="4"
          placeholder="Probleme Is"
        ></textarea>
      </div>
    </div>
  );
};

export default InputTextarea;
