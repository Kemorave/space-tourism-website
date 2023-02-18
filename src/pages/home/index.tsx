import React from "react";
import { useNavigate, useNavigation } from "react-router-dom";
import Transitions from "../../components/transitions";

const Home = () => {
  const navigation = useNavigate();
  return (
    <Transitions>
      <section
        key={"home"}
        className="  animate-area 
        md:bg-[url('../public/assets/home/background-home-tablet.jpg')]
         lg:bg-[url('../public/assets/home/background-home-desktop.jpg')]
         bg-[url('../public/assets/home/background-home-mobile.jpg')] bg-no-repeat bg-center bg-cover   h-[100vh]  md:p-10"
      >
        <div className="flex  flex-col  mb-24 md:mb-0  text-center gap-10 lg:gap-0 lg:text-start lg:grid lg:grid-cols-2  pt-36 h-full justify-items-center items-center ">
          <div className="flex flex-col w-fit md:px-24 px-10">
            <h5>SO, YOU WANT TO TRAVEL TO</h5>
            <h1  className="mb-2 md:mb-0">SPACE</h1>
            <p>
              Let’s face it; if you want to go to space, you might as well
              genuinely go to outer space and not hover kind of on the edge of
              it. Well sit back, and relax because we’ll give you a truly out of
              this world experience!
            </p>
          </div>
          <div className="hover:bg-[#ffffff10] animate-swap mt-auto  mb-24 flex duration-500 w-[18rem] h-[18rem] md:w-[22rem] md:h-[22rem] transition-colors  rounded-full">
            <button
              onClick={() => navigation("destination/")}
              className="bg-white m-auto  text-center w-[10rem] h-[10rem] md:w-[15rem] md:h-[15rem] rounded-full"
            >
              <h3 className="text-black ">Explore</h3>
            </button>
          </div>
        </div>
      </section>
    </Transitions>
  );
};

export default Home;
