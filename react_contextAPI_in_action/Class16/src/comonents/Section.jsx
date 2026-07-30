import React from "react";
import axios from "axios";

const Section = () => {
  return (
    <div className="w-full h-[37rem] rounded-2xl  mt-10 flex flex-row">
      <div className=" w-[60%]  py-20 flex flex-col  justify-center ">
        <h1 className="text-8xl mt-25 ml-20 font-bold text-gray-900">
          Fashion
        </h1>
        <h2 className="text-9xl ml-20 font-extrabold text-gray-900">
          For SALE !!
        </h2>
        <button className="w-fit h-fit cursor-pointer bg-black/60 px-4 font-medium text-amber-50  ml-20 mt-8 py-3 rounded-4xl items-center m">
          Explore Product
          <span className="px-[0.3rem] py-[0.2rem] ml-2 rounded-[50%] bg-amber-50 text-gray-800">
            <i class="ri-arrow-right-up-long-line"></i>
          </span>
        </button>
      </div>
      <div className=" w-[50%]">
        <img src="./public/shopping2.jpg" className="w-full h-full"></img>
        <img src="" className=""></img>
      </div>
    </div>
  );
};

export default Section;
