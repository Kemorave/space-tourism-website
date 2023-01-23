import React from "react";
import { NavLink } from 'react-router-dom';

export function NavItem(props: {keepInline?:boolean,onClick?:Function, lable: string; to: string; index: string; }) {
  return (
    <li className="h-fit">
      <NavLink onClick={()=>{
        props.onClick?.();
        }} className={(state) => `${props.keepInline?"mt-10  pb-1":"mt-10  pb-10"}  ${(state.isActive ? "nav-active block" : "nav-text block")}`} to={props.to}>
        <span className={props.keepInline?'numberic':`numberic hidden lg:inline`}>{props.index} </span> {props.lable}
      </NavLink>
    </li>
  );
}
