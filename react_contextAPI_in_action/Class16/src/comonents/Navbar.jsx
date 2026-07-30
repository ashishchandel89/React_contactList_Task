import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="w-full h-fit flex flex-row justify-between ">
      <h1 className="text-4xl text-gray-800 font-semibold ">Shopping</h1>
      <div className="text-[1rem]  text-black flex flex-row gap-10 lex  ml-15 px-8 py-3.5 rounded-4xl bg-black/10 backdrop-blur-xl border border-white/20">
        <Link to="/">Home</Link>
        <Link to="/product">Products</Link>
        <Link to="/productdetail">Product Details</Link>
        <Link to="/contact">Contact</Link>
      </div>
      <button className="w-fit h-fit cursor-pointer bg-black/40 px-3 font-medium text-amber-50  py-2.5 rounded-4xl ">
        Explore Product
        <span className="px-[0.3rem] py-[0.2rem] ml-2 rounded-[50%] bg-amber-50 text-gray-800">
          <i class="ri-arrow-right-up-long-line"></i>
        </span>
      </button>
    </div>
  );
};

export default Navbar;
