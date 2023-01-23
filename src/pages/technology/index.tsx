import React, { useContext, useState } from "react";
import Transitions from "../../components/transitions";
import App from "../../App";
import { Technology as TechnologyType } from "../../types/somthing";
import { Navigate, NavLink, Route, Router, Routes, useLocation } from "react-router-dom";
const DesktopMode = (props: { technologys: TechnologyType[] | undefined }) => {
  const technologys = props.technologys;
  return (
    <div className="lg:flex flex-col h-full hidden">
      <h5 className="uppercase pl-24  mb-5 text-xl">
        <span className="numberic-info">03</span> SPACE LAUNCH 101
      </h5>
      <div className="flex justify-between  items-center">
        <div className="flex  gap-10 ml-24">
          
      <SelectionList technologys={technologys} />
      <Info technologys={technologys} />
        </div>
      <ImagesRender technologys={technologys}  />
      </div>
      
    </div>
  );
};
const VerticalMode = (props: { technologys: TechnologyType[] | undefined }) => {
  const technologys = props.technologys;
  return (
    <div className="flex flex-col lg:hidden">
      <h5 className="uppercase mx-10 mb-5 text-xl">
        <span className="numberic-info">03</span> SPACE LAUNCH 101
      </h5>
      <ImagesRender technologys={technologys} desktop />
      <SelectionList technologys={technologys} />
      <Info technologys={technologys} />
    </div>
  );
};
const ImagesRender = (props: {
  desktop?: boolean;
  technologys: TechnologyType[] | undefined;
}) => {
  return (
    <Routes>
      {props.technologys?.map((mem, i) => (
        <Route
          key={`details${i}`}
          path={`${i == 0 ? "" : i}`}
          element={<Preveiw desktop={props.desktop??false} technology={mem} />}
        />
      ))}
    </Routes>
  );
};
const Preveiw = (props: {
  desktop: boolean;
  className?: string;
  technology: TechnologyType | null | undefined;
}) => {
  let technology = props.technology;
  return (
    <img
      className={`${props.className} animate-swap ${
        props.desktop ? "py-5" : "h-[20rem]"
      } justify-self-end object-contain my-auto`}
      src={
        props.desktop
          ? technology?.images.landscape
          : technology?.images.portrait
      }
    />
  );
};
const Info = (props: { technologys: TechnologyType[] | undefined }) => {
  let technologys = props.technologys;
  return (
    <Routes>
      {technologys?.map((mem, i) => (
        <Route
          key={`details${i}`}
          path={`${i == 0 ? "/" : i}`}
          element={
            <div className="flex lg:text-start items-center lg:items-start text-center h-full w-full animate-swap flex-col">
              <div className=" ">
                <p className="uppercase text-[0.81rem] lg:text-l md:mt-5 lg:mt-0  mb-2 lg:mb-0 text-xs opacity-90">
                  The terminology ...
                </p>
                <h4 className="uppercase md:text-[2.5rem] text-[1.80rem] tracking-widest  mb-3">
                  {mem.name}
                </h4>
                <p className="text-sm max-w-xs  lg:max-w-xs md:max-w-md leading-relaxed  pb-10 lg:pb-5 ">
                  {mem.description}
                </p>
              </div>
            </div>
          }
        />
      ))}
    </Routes>
  );
};
const SelectionList = (props: {
  technologys: TechnologyType[] | undefined;
}) => {
  const technologys = props.technologys;
  return (
    <div className="flex  lg:flex-col self-center my-10 lg:my-0  gap-5 ">
      {technologys?.map((mem, i) => (
        <div key={`details-link${i}`}>
          <NavLink
            className={(state) =>
              ` rounded-full text-center flex hover:border-gray-200 h-14 w-14 ${
                state.isActive
                  ? "bg-white text-black"
                  : "bg-transparent border-[1px] border-gray-500"
              } `
            }
            to={`${i == 0 ? "./" : i}`}
          >
            <p className="m-auto font-sans">{i + 1}</p>
          </NavLink>
        </div>
      ))}
    </div>
  );
};

const Technology = () => {
  const technologys = useContext(App.appDataContext)?.technology;
  
  const location = useLocation();
  return (
      <section
        key={"transitions"}
        className="animate-area pt-44 
        md:bg-[url('/assets/technology/background-technology-tablet.jpg')] 
        lg:bg-[url('/assets/technology/background-technology-desktop.jpg')] 
        bg-[url('/assets/technology/background-technology-tablet.jpg')]   h-[100vh] bg-center  "
      >
      {!location.pathname.endsWith("technology")?<></>:<Navigate   to="./" />}
        <VerticalMode technologys={technologys} />
        <DesktopMode technologys={technologys} />
        {/* <div className="lg:grid lg:grid-cols-2 flex flex-col  h-full justify-items-center items-center">
          <SelectionList technologys={technologys} />
          <ImagesRender desktop={false} technologys={technologys} />
        </div> */}
      </section>
  );
};

export default Technology;
