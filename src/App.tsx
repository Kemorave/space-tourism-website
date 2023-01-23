import { useState, useContext, createContext } from "react";
import { Outlet, Route, Routes } from "react-router-dom";
import "./App.css";
import Nav from "./components/nav";
import SplashScreen from "./components/splash-screen";
import Home from "./pages/home";
import { useGetAllDataQuery } from "./services/some_api";
import { AnimatePresence } from "framer-motion";

import { useLocation } from "react-router-dom";
import { FullData } from "./types/somthing";
import { NavItem } from "./components/NavItem";

const appDataContext = createContext<FullData | undefined | null>(null);
function App() {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const { isLoading, isError, isFetching, data, error } =
    useGetAllDataQuery(null);

  if (isLoading) {
    return <SplashScreen />;
  }
const onNavClic=()=>{
  setIsDrawerOpen(!isDrawerOpen)
};
  return (
    <appDataContext.Provider value={data}>
      <div>
        <div
          onClick={(e) => {
             
            if (e.currentTarget.tagName==="DIV") setIsDrawerOpen(!isDrawerOpen);
          }}
          className={`absolute   ${
            !isDrawerOpen
              ? "ease-linear duration-200  -translate-x-[100%]"
              : "ease-linear  duration-300   translate-x-0"
          } top-50 md:hidden  right-0 z-50 h-full  w-full bg-[#00000030]`}
        >
       <div className=" reverse w-full h-full">
       <div
            className={`flex  reverse  text-start gap-3 font-bold text-white p-5 bg-nav backdrop-blur-lg h-full w-[60%] flex-col`}
          >
            <button
              onClick={() => {
                setIsDrawerOpen(!isDrawerOpen);
              }}
              className="my-8 self-end"
            >
              <img alt="close" src="/assets/shared/icon-close.svg" />
            </button>
            <ul className="flex flex-col">
              <NavItem onClick={onNavClic} keepInline to="/" lable="Home" index="00" />
              <NavItem onClick={onNavClic}
                keepInline
                to="destination"
                lable="destination"
                index="01"
              />
              <NavItem onClick={onNavClic} keepInline to="crew" lable="crew" index="02" />
              <NavItem onClick={onNavClic}
                keepInline
                to="technology"
                lable="technology"
                index="03"
              />
            </ul>
          </div>
       </div>
        </div>
        <Nav isDrawerOpen={isDrawerOpen} setIsDrawerOpen={setIsDrawerOpen} />
        <main className="transition-all  h-full">
          <AnimatePresence mode="wait">
            <Outlet />
          </AnimatePresence>
        </main>
      </div>
    </appDataContext.Provider>
  );
}

export default { App, appDataContext };
