import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { worksCardData } from "../constants/data";
import { BiChevronRight } from "react-icons/bi";
import { BsArrowLeftShort, BsArrowRightShort } from "react-icons/bs";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./SwipperStyle.css";
// import 'swiper/swiper-bundle.min.css';

// import required modules
import { Navigation,  Mousewheel, Keyboard } from "swiper/modules";

export default function SlideCard() {
  return (
    <>
      <Swiper
        slidesPerView={3}
        spaceBetween={30}
        pagination={{
          clickable: false,
        }}
        navigation={{
          prevEl: ".swiper-button-prev",
          nextEl: ".swiper-button-next",
        }}
        // navigation={true}
        modules={[Navigation, Mousewheel, Keyboard]}
        className="mySwiper"
      >
        {worksCardData.map((data) => {
          return (
            <SwiperSlide>
              <div
                key={data.id}
                className="flexStart lg:w-auto md:w-[360px] sm:w-[300px] w-full flex-col sm:mr-8  sm:mb-16 mb-8 rounded-3xl px-10 py-12 drop-shadow-3xl bg-white"
              >
                <img src={data.img} className="mb-8" alt="card image" />
                <h3 className="font-bold sm:text-xl text-lg w-4/5 mb-2.5">
                  {data.title}
                </h3>
                <p className="sm:text-[16px] text-base mb-8">{data.desq}</p>
                <div className="inline-block px-8 py-1.5 border border-[#3B6BFA] rounded-[40px]">
                  <span className="flex items-center cursor-pointer">
                    Saber más <BiChevronRight />
                  </span>
                </div>
              </div>
            </SwiperSlide>
          );
        })}
        <div className="flex justify-between">
        <div className="swiper-button-prev">
          <span className="bg-white drop-shadow-xl text-[#757575] p-2 text-2xl rounded-md cursor-pointer">
            <BsArrowLeftShort />
          </span>
        </div>
        <div className="swiper-button-next">
          <span className="gradient drop-shadow-xl text-white p-2 text-2xl rounded-md sm:mr-4 cursor-pointer">
            <BsArrowRightShort />
          </span>
        </div>
        </div>
      </Swiper>
    </>
  );
}
