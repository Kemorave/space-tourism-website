import React, { useContext, useState } from "react";
import Transitions from "../../components/transitions";
import App from "../../App";
import { Crew as CrewType } from "../../types/somthing";
import { Navigate, NavigateFunction, NavLink, Route, Router, Routes, useLocation, useNavigate, useNavigation } from "react-router-dom";
import { useSwipeable } from "react-swipeable";
const Preveiw = (props: { crew: CrewType | null | undefined }) => {
  let crew = props.crew;
  return (
    <img
      className=" animate-swap md:h-[50vh] lg:h-[70vh] h-[40vh] lg:mt-auto self-end justify-self-start object-contain mt-auto"
      src={crew?.images.webp}
    />
  );
};
const SelectionList = (props: { crews: CrewType[] | undefined }) => {
  const crews = props.crews;
  return (
    <div className="flex lg:pl-24 md:pl-10 md:flex-col flex-col-reverse w-full h-full   ">
      <div className=" h-full w-full my-auto justify-self-end ">
        <Routes>
          {crews?.map((mem, i) => (
            <Route
              key={`details${i}`}
              path={`${i == 0 ? "/" : i}`}
              element={
                <div className="flex h-full w-full flex-col">
                  <h5 className="uppercase hidden md:block self-center md:self-start  text-xl">
                    <span className="numberic-info">02</span> MEET YOUR CREW
                  </h5>
                  <div className="lg:my-auto self-center lg:self-start mt-10">
                    <h4 className="uppercase text-[1.6rem] lg:text-[1.0rem] opacity-50">
                      {mem.role}
                    </h4>
                    <h4 className="uppercase text-[2.0rem] tracking-widest  mb-3">
                      {mem.name}
                    </h4>
                    <p className="text-sm opacity-80 max-w-sm px-2 mb-10 lg:mb-0 leading-relaxed ">
                      {mem.bio}
                    </p>
                  </div>
                </div>
              }
            />
          ))}
        </Routes>
      </div>
      <div className="flex  gap-4 mt-10 md:mt-5 lg:mt-0  self-center lg:self-start md:mb-16 ">
        {crews?.map((mem, i) => (
          <div key={`details-link${i}`}>
            <NavLink
              className={(state) =>
                `block rounded-full h-3 w-3  hover:bg-[#FFFFFF80] ${
                  state.isActive ? "bg-white" : "bg-[#bbbbbb48]"
                } `
              }
              to={`${i == 0 ? "./" : i}`}
            ></NavLink>
          </div>
        ))}
      </div>
    </div>
  );
};

const next=(current:number,nav:NavigateFunction,crews:CrewType[]|undefined)=>{
     
  if(current+1>=(crews?.length??0))
  return;
  nav(`./${++current}`)
  }
  const prev=(current:number,nav:NavigateFunction,crews:CrewType[]|undefined)=>{
     
    if(current-1<0)
    return;
    nav(`./${(--current)==0?'/':current}`)
    }
const Crew = () => {
  
  const navigation=useNavigate();
  const crews = useContext(App.appDataContext)?.crew;
  const location = useLocation();
  let locs = location.pathname.split('/');
  let key:number= Number.parseInt(locs.at(locs.length-1)??'');
  
   if(Number.isNaN(key)||key.toString()==='NaN')
  {key=0;}
  console.log(key);
 
  const handlers = useSwipeable({
   onSwipedRight : (eventData) => {
      prev(key,navigation,crews);
    }, onSwipedLeft : (eventData) => {
      next(key,navigation,crews);
    },
  }); 
  return (
      <section
        key={"transitions"}
        className="pt-44 animate-area
        md:bg-[url('/assets/crew/background-crew-tablet.jpg')] 
        lg:bg-[url('/assets/crew/background-crew-desktop.jpg')] 
        bg-[url('/assets/crew/background-crew-tablet.jpg')]  h-[100vh] bg-center  "
      >
      {!location.pathname.endsWith("crew")?<></>:<Navigate   to="./" />}
        <div  {...handlers} className="lg:grid  lg:grid-cols-2 flex flex-col lg:text-start text-center h-full justify-items-center items-center">
          <div className="flex flex-col md:hidden ">
            <h5 className="uppercase mb-10 -mt-10 self-center md:self-start  text-xl">
              <span className="numberic-info">02</span> MEET YOUR CREW
            </h5>
            <Routes>
              {crews?.map((mem, i) => (
                <Route
                  key={`details${i}`}
                  path={`${i == 0 ? "" : i}`}
                  element={<Preveiw crew={mem} />}
                />
              ))}
            </Routes>
            <div className="h-[1px] bg-gray-500 -mx-10" />
          </div>
          <SelectionList crews={crews} />
          <div className="hidden  md:block ">
            <Routes>
              {crews?.map((mem, i) => (
                <Route
                  key={`details${i}`}
                  path={`${i == 0 ? "" : i}`}
                  element={<Preveiw crew={mem} />}
                />
              ))}
            </Routes>
          </div>
        </div>
      </section>
  );
};

export default Crew;
