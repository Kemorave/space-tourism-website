import React from "react";
import {RelativeRoutingType, } from 'react-router-dom';
import { NavItem } from "./NavItem";
const Nav = (props:{isDrawerOpen:boolean,setIsDrawerOpen:React.Dispatch<React.SetStateAction<boolean>>}) => { 
  return (
    <nav className="flex  absolute z-10  opacity-100 top-0 w-full lg:px-10 lg:mt-10 justify-between items-center">
      <img
        className="m-10  md:mx-10 md:my-0 w-12 md:w-14 lg:w-10 animate-spin-show  hover:animate-pulse active:animate-ping"
        src="/space-tourism-website/assets/home/star.svg"
      /> 
      <div className="h-[1px] hidden lg:block z-10 -mr-10 w-full bg-white opacity-25" />
      <button
            className="md:hidden mx-10"
            onClick={() => {
              props.setIsDrawerOpen(!props.isDrawerOpen);
            }}
          >
            <img alt="menu" src="/space-tourism-website/assets/shared/icon-hamburger.svg" />
          </button>
      <ul className="  hidden md:flex lg:px-20 px-10  h-auto justify-items-center gap-2 md:gap-3 lg:gap-4 flex-row bg-nav backdrop-blur-lg ">
        <NavItem to="/" lable="Home" index="00" />
        <NavItem to="destination"   lable="destination" index="01" />
        <NavItem to="crew" lable="crew" index="02" />
        <NavItem to="technology" lable="technology" index="03" />
      </ul>
    </nav>
  );
};

export default Nav;
