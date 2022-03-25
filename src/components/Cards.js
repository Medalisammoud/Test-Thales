import React from "react";
import produit from "../assets/produit.jpg";
import produit1 from "../assets/produit1.png";

const Cards = () => {
  return (
    <div className="mt-6 ml-6 flex flex-col justify-between">
      <div className="flex flex-col">
        <div className="bg-white h-64 w-80 rounded-lg shadow-lg mb-6">
          <img
            className="rounded-xl h-36 w-80 p-2"
            src={produit}
            alt="Produit"
          />
          <div className="mt-2 ml-3">
            <p className="text-sm text-black font-bold tracking-wider">
              Product Title
            </p>
            <p className="text-black text-xs">
              Lorem ipsum dolor sit amet. Sit nostrum quis qui dicta obcaecati.
            </p>
          </div>
          <div className="flex justify-center -mt-10">
            <buton className="bg-blue-primary text-center hover:bg-blue-700 text-white font-bold w-32 mt-12 mb-8 py-2 px-2 rounded">
              Voir Plus
            </buton>
          </div>
        </div>

        <div className="bg-white h-64 w-80 rounded-lg shadow-lg">
          <img
            className="rounded-xl h-36 w-80 p-2"
            src={produit}
            alt="Produit"
          />
          <div className="mt-2 ml-3">
            <p className="text-sm text-black font-bold tracking-wider">
              Product Title
            </p>
            <p className="text-black text-xs">
              Lorem ipsum dolor sit amet. Sit nostrum quis qui dicta obcaecati.
            </p>
          </div>
          <div className="flex justify-center -mt-10">
            <buton className="bg-blue-primary text-center hover:bg-blue-700 text-white font-bold w-32 mt-12 mb-8 py-2 px-2 rounded">
              Voir Plus
            </buton>
          </div>
        </div>
      </div>
      <div className="bg-white h-64 w-80 rounded-lg shadow-lg">
        <img
          className="rounded-xl h-36 w-80 p-2"
          src={produit1}
          alt="Produit"
        />
        <div className="mt-2 ml-3">
          <p className="text-sm text-black font-bold tracking-wider -mt-2">
            The revolution of smart product
          </p>
          <p className="text-gray-400 text-xs">By john Roberto</p>
          <p className="text-black text-xs mt-2">
            This will change the life of million of pepole.
          </p>
        </div>
        <div className="flex justify-center -mt-10">
          <buton className="bg-blue-primary text-center hover:bg-blue-700 text-white font-bold w-32 mt-12 mb-8 py-2 px-2 rounded">
            Voir Plus
          </buton>
        </div>
      </div>
    </div>
  );
};

export default Cards;
