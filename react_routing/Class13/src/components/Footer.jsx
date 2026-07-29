import React from "react";
import { NavLink, useNavigate } from "react-router-dom";

const Footer = () => {
  /*-----bg-[radial-gradient(circle,#27464D_10%,#040608_100%)]----*/
  const navigate = useNavigate();

  return (
    <div className="w-full  py-7 py-10 mt-12 flex flex-row justify-between mb-10 flex flex-row gap-5  text-amber-50 px-8 py-2.5 rounded-4xl bg-white/10 backdrop-blur-xl border border-white/20">
      <div className="text-amber-50 flex flex-col gap-5 text-xl">
        <h1 className="text-[1rem] underline text-blue-800 ">
          Link<i class="ri-arrow-right-down-line"></i>
        </h1>
        <NavLink
          to="/about"
          style={({ isActive }) => ({ color: isActive ? "#C7A550" : "white" })}
        >
          About
        </NavLink>
        <NavLink
          to="/services"
          style={({ isActive }) => ({ color: isActive ? "#C7A550" : "white" })}
        >
          Services
        </NavLink>
        <NavLink
          to="/projects"
          style={({ isActive }) => ({ color: isActive ? "#C7A550" : "white" })}
        >
          Project
        </NavLink>
        <NavLink
          to="/process"
          style={({ isActive }) => ({ color: isActive ? "#C7A550" : "white" })}
        >
          Process
        </NavLink>
        <NavLink
          to="/testimonials"
          style={({ isActive }) => ({ color: isActive ? "#C7A550" : "white" })}
        >
          Testimonial
        </NavLink>
        <NavLink
          to="/faqs"
          style={({ isActive }) => ({ color: isActive ? "#C7A550" : "white" })}
        >
          FAQS
        </NavLink>
      </div>
      <div>
        <video
          src="./public/video/googlemap.mp4"
          autoPlay
          loop
          muted
          className="w-full h-[20rem] rounded-2xl"
        ></video>
      </div>
      <div>
        <button
          className="w-fit h-fit cursor-pointer bg-[#C7A550] px-2 font-medium text-amber-50  py-2.5 rounded-4xl "
          onClick={() => {
            navigate("/projects");
          }}
        >
          Explore Projects
          <span className="px-[0.3rem] py-[0.2rem] rounded-[50%] bg-amber-50 text-[#C7A550]">
            <i class="ri-arrow-right-up-long-line"></i>
          </span>
        </button>
      </div>
    </div>
  );
};

export default Footer;
