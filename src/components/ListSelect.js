import React from "react";

const ListSelect = () => {
  return (
    <div className="grid grid-cols-2 gap-2 mt-10">
      {/********************************* List Select Nom Produit */}
      <div className="ml-12">
        <p className="text-sm font-medium text-black">Nom du Produit</p>
        <div className="flex justify-center">
          <div className="mb-3 xl:w-80">
            <select
              className="form-select block w-full px-3 py-1.5 text-base font-normal shadow-lg text-gray-700 bg-light-gray bg-clip-padding bg-no-repeat  border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-light-gray focus:outline-none"
              aria-label="Thales air Mini"
            >
              <option selected>Thales air Mini</option>
              <option value="1">One</option>
              <option value="2">Two</option>
              <option value="3">Three</option>
            </select>
          </div>
        </div>
      </div>
      {/********************************* List Select Type de Reclamation */}
      <div className="ml-12">
        <p className="text-sm font-medium text-black">Type de Reclamation</p>
        <div className="flex justify-center">
          <div className="mb-3 xl:w-80">
            <select
              className="form-select block w-full px-3 py-1.5 text-base font-normal shadow-lg text-gray-700 bg-light-gray bg-clip-padding bg-no-repeat  border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-light-gray focus:outline-none"
              aria-label="Probleme Technique"
            >
              <option selected>Probleme Technique</option>
              <option value="1">One</option>
              <option value="2">Two</option>
              <option value="3">Three</option>
            </select>
          </div>
        </div>
      </div>
      {/********************************* List Select Location */}
      <div className="ml-12">
        <p className="text-sm font-medium text-black">Location</p>
        <div className="flex justify-center">
          <div className="mb-3 xl:w-80">
            <select
              className="form-select block w-full px-3 py-1.5 text-base font-normal shadow-lg text-gray-700 bg-light-gray bg-clip-padding bg-no-repeat  border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-light-gray focus:outline-none"
              aria-label="Nabeul, Tunisia"
            >
              <option selected>Nabeul, Tunisia</option>
              <option value="1">One</option>
              <option value="2">Two</option>
              <option value="3">Three</option>
            </select>
          </div>
        </div>
      </div>
      {/********************************* List Select Code Postal */}
      <div className="ml-12">
        <p className="text-sm font-medium text-black">Code Postal</p>
        <div className="flex">
          <div className="mb-3 xl:w-16">
            <select
              className="form-select block w-full px-3 py-1.5 text-base font-normal shadow-lg text-gray-700 bg-light-gray bg-clip-padding bg-no-repeat  border-gray-700 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-light-gray"
              aria-label="80"
            >
              <option selected>80</option>
              <option value="1">81</option>
              <option value="2">82</option>
              <option value="3">83</option>
            </select>
          </div>
          <input
            className="text-gray-700 bg-light-gray shadow-lg h-9 w-14 rounded border-gray-700 focus:text-gray-700 focus:bg-light-gray text-center"
            placeholder="50"
            type="text"
            name="Postal"
          />
        </div>
      </div>
    </div>
  );
};

export default ListSelect;
