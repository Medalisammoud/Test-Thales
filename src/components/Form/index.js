import React from "react";
import Checkbox from "./Checkbox";
import InputTextarea from "./InputTextarea";
import ListSelect from "./ListSelect";
import UploadPhoto from "./UploadPhoto";

const Form = () => {
  return (
    <div className=" flex flex-col items-center max-w-4xl h-100 bg-white rounded-xl shadow-lg ml-48 mt-10">
      {/********************** Title And Paragraphe */}
      <div className="pt-2">
        <p className="text-2xl font-bold text-black">Reclamation</p>
      </div>
      <div className="pl-8 pt-2 w-11/12">
        <p>
          Action de s'adresser à l'autorité pour se plaindre de quelque chose,
          pour protester, signaler une malfaçon, etc. Bureau des réclamations.
          2. Action de réclamer quelque chose auquel on estime avoir droit ;
        </p>
      </div>
      {/********************************* Div Select Formulaire */}
      <ListSelect />
      {/********************************* Div upload file */}
      <UploadPhoto />
      {/********************************* Div Input textarea */}
      <InputTextarea />
      {/********************************* Div CheckBox */}
      <Checkbox />
      {/********************************* Div Button */}
      <button className="bg-blue-primary hover:bg-blue-700 text-white font-bold w-32 mt-12 mb-8 py-2 px-4 rounded">
        Send
      </button>
    </div>
  );
};

export default Form;
