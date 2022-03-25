import React from "react";

const UploadPhoto = () => {
  return (
    <div className="h-3/4 w-11/12 ">
      <p className="text-sm font-medium pl-6 text-black">Upload Probleme</p>
      <div className=" p-6  flex flex-col">
        <div className="border-dashed border-2 rounded-lg h-3/4 border-gray-400 bg-light-gray py-12 flex flex-col justify-center items-center">
          <p className="mb-3 font-semibold text-gray-500 flex flex-wrap justify-center">
            <span> Drop your photo here or </span>
            <button id="button" className="ml-2 font-medium text-blue-700">
              Browser
            </button>
            &nbsp;
          </p>
          <span className="text-gray-500">Max file size 10MB</span>
          <input id="hidden-input" type="file" multiple className="hidden" />
        </div>
      </div>
    </div>
  );
};

export default UploadPhoto;
