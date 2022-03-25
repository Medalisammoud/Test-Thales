import React from "react";
// imoprtation des images
import menu from "../assets/menu.png";
import fire from "../assets/fire.png";
import shop from "../assets/shop.png";
import check from "../assets/check.png";
import card from "../assets/card.png";
import parmetre from "../assets/config.png";
import facebook from "../assets/facebook.png";
import linkedin from "../assets/linkedin.png";
import google from "../assets/google.png";
import logout from "../assets/logout.png";
import open from "../assets/open.png";

const SideBar = () => {
  return (
    <div className="bg-light-blue lg:w-28 absolute lg:h-200 flex flex-col items-center justify-around invisible sm:visible ">
      <div className="bg-white h-80 w-12 flex flex-col items-center justify-center mt-12 rounded-md">
        <img src={menu} alt="menu" className="w-4  mb-10" />
        <img src={fire} alt="fire" className="w-4  mb-10 " />
        <img src={shop} alt="shop" className="w-4 mb-10 " />
        <img src={check} alt="check" className="w-4 mb-10 " />
        <img src={card} alt="card" className="w-4 mb-10 " />
        <img src={parmetre} alt="parmetre" className="w-4" />
      </div>
      <div className="bg-white h-40 w-12 flex flex-col items-center justify-center rounded-md">
        <div className="bg-light-blue w-8 h-8 rounded-md mb-5 flex flex-row items-center justify-center">
          <img src={facebook} alt="facebook" className="w-4 " />
        </div>
        <div className="bg-light-blue w-8 h-8 rounded-md mb-5 flex flex-row items-center justify-center">
          <img src={linkedin} alt="linkedin" className="w-4 " />
        </div>
        <div className="bg-light-blue w-8 h-8 rounded-md flex flex-row items-center justify-center">
          <img src={google} alt="google" className="w-4 " />
        </div>
      </div>
      <div className="bg-white h-10 w-10 rounded-md flex flex-row items-center justify-center">
        <img src={logout} alt="logout" className="w-4 bg-light-gray" />
      </div>
      <img src={open} alt="open" />
    </div>
  );
};

export default SideBar;
