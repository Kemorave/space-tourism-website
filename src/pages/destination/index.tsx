import React, { useContext, useState } from "react";
import Transitions from "../../components/transitions";
import App from "../../App";
import { Destination as DestinationType } from "../../types/somthing";
import { NavLink, Route, Router, Routes,Navigate  } from "react-router-dom";

import { useLocation } from "react-router-dom";
const Preveiw = (props: {
  destination: DestinationType | null | undefined;
}) => {
  let destination = props.destination;
  return (
    <div className="flex w-full text-start  h-full flex-col">
      <h5 className="uppercase text-xl md:self-start self-center mb-10 md:mb-0  -mt-10 md:-mt-0  mx-10 lg:mx-0">
        <span className="numberic-info">01</span> Pick your destination
      </h5>

        
      <img
        className="h-[20rem] self-center w-[20rem] my-auto"
        src={destination?.images.png}
      />
    </div>
  );
};
const SelectionList = (props: {
  destinations: DestinationType[] | undefined;
}) => {
  
  const location = useLocation();
  const destinations = props.destinations;
  return (
    <div className="flex flex-col lg:h-full  pt-5 mx-16 gap-5">
      
      {!location.pathname.endsWith("destination")?<></>:<Navigate   to="./" />}
      <div className="flex self-center lg:self-start">
        {destinations?.map((des, i) => (
          <div key={`details-link${i}`}>
            <NavLink
              className={(state) =>
                `block ${state.isActive ? "nav-active" : "nav-text"} pb-2 `
              }
              to={`${i == 0 ? "./" : i}`}
            >
              {des.name}
            </NavLink>
          </div>
        ))}
      </div>
   <Transitions>
   <Routes  location={location} key={location.pathname}>
        {destinations?.map((des, i) => (
          <Route
            key={`details${i}`}
            path={`${i == 0 ? "/" : i}`}
            element={
              <div className="flex  my-auto   flex-col">
                <h2 className="uppercase">{des.name}</h2>
                <p className="text-[1rem] leading-relaxed   px-1.5 lg:px-0 pb-5 lg:pb-0">
                  {des.description}
                </p>
                <div className="h-[1px] my-3 bg-slate-700" />
                <div className="flex mb-5 whitespace-nowrap self-center lg:self-stretch gap-24">
                  <div className="flex flex-col gap-2">
                    <h5 className="text-xs ">AVG. DISTANCE</h5>
                    <h4 className="font-thin"> {des.distance}</h4>
                  </div>
                  <div className="flex flex-col gap-2">
                    <h5 className="text-xs">EST. TRAVEL TIME</h5>
                    <h4 className="font-thin">{des.travel}</h4>
                  </div>
                </div>
              </div>
            }
          />
        ))}
      </Routes>
   </Transitions>
    </div>
  );
};
const Destination = () => {
  const location = useLocation()
   
  const destinations = useContext(App.appDataContext)?.destinations;
  return (
      <section
        key={"transitions"}
        className="animate-area  pt-44 
       bg-[url('/assets/destination/background-destination-tablet.jpg')] 
        lg:bg-[url('/assets/destination/background-destination-desktop.jpg')]  h-[100vh] bg-center "
      >
        <div className="lg:grid lg:grid-cols-2 flex flex-col lg:text-start text-center  h-full  lg:pl-24 items-center ">
          <Routes location={location} key={location.pathname}>
            {destinations?.map((des, i) => (
              <Route
                key={`details${i}`}
                path={`${i == 0 ? "" : i}`}
                element={<Preveiw destination={des} />}
              />
            ))}
          </Routes>
          <SelectionList destinations={destinations} />
        </div>
      </section>
  );
};

export default Destination;
