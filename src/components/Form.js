import React from "react";
import ListSelect from "./ListSelect";

const Form = () => {
  return (
    <div className=" flex flex-col items-center max-w-4xl h-100 bg-white rounded-xl shadow-lg ml-48 mt-20">
      {/********************** Title And Paragraphe */}
      <div className="pt-5">
        <p className="text-2xl font-bold text-black">Reclamation</p>
      </div>
      <div className="pl-8 pt-2 w-11/12">
        <p>
          Action de s'adresser à l'autorité pour se plaindre de quelque chose,
          pour protester, signaler une malfaçon, etc. Bureau des réclamations.
          2. Action de réclamer quelque chose auquel on estime avoir droit ;
          demande, lettre par laquelle on réclame. Réclamation de dommages et
          intérêts.
        </p>
      </div>
      {/********************************* Div Select Formulaire */}
      <ListSelect />
    </div>
  );
};

export default Form;
