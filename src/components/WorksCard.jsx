import React from "react";

import { BiChevronRight } from "react-icons/bi";
import { BsArrowLeftShort, BsArrowRightShort } from "react-icons/bs";
import shape from "../assets/Vector.png";
import { worksCardData } from "../constants/data";
import SlideCard from './SlideCard.jsx'

const WorksCard = () => {
  return (
    <section className="font-inter mt-28 mb-8 relative">
      <h1 className="font-semibold sm:text-[35px] xs:text-2xl text-xl text-center mb-12 drop-shadow-2xl">
        Works Everywhere You Do
      </h1>
      <img
        className="absolute right-0 top-6 md:visible invisible"
        src={shape}
        alt="shape img"
      />

      <div className="flex sm:flex-row flex-col items-center justify-between lg:flex-nowrap  sm:flex-wrap">
        <SlideCard/>
        
        
      </div>
      {/* <div className="flex justify-between">
        
      </div> */}
    </section>
  );
};

export default WorksCard;
