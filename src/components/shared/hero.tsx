"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay, Pagination } from "swiper/modules";
import { Button } from "../ui/button";
import Image from "next/image";
import heroPng from "@/assets/images/hero.png";
import { Icon } from "@iconify/react";

function Hero() {
  return (
    <Swiper
      pagination={true}
      autoplay={{
        delay: 5000,
        disableOnInteraction: false,
      }}
      modules={[Pagination, Autoplay]}
      className="mySwiper"
    >
      {DATA.map((data, index) => (
        <SwiperSlide key={index}>
          <div className="flex items-center justify-between gap-10 p-10 flex-col md:flex-row">
            <div className="text-white space-y-5 basis-1/2">
              <div className="flex items-center gap-x-5 text-2xl md:text-5xl">
                <Icon icon={data.icon} />
                <h6>{data.title}</h6>
              </div>
              <h4 className="text-6xl font-semibold md:text-7xl">
                {data.description}
              </h4>
              <Button>
                Shop Now <Icon icon="formkit:arrowright" />
              </Button>
            </div>
            <div className="basis-1/2">
              <Image src={data.png} alt="" className="mx-auto" />
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}

export default Hero;

const DATA = [
  {
    icon: "mdi:apple",
    title: "iPhone 14 Series",
    description: "Up to 10% off Voucher",
    png: heroPng,
  },
  {
    icon: "mdi:apple",
    title: "iPhone 15 Series",
    description: "Up to 15% off Voucher",
    png: heroPng,
  },
];
