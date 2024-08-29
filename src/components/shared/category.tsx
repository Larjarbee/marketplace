"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Navigation } from "swiper/modules";
import { TCategories } from "../../../types";
import Link from "next/link";
import { Icon } from "@iconify/react";

function Category() {
  return (
    <div>
      <Swiper
        slidesPerView={2}
        spaceBetween={10}
        navigation={{
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        }}
        breakpoints={{
          640: {
            slidesPerView: 2,
          },
          768: {
            slidesPerView: 4,
          },
          1024: {
            slidesPerView: 5,
            spaceBetween: 20,
          },
        }}
        modules={[Navigation]}
        className="mySwiper"
      >
        {CATEGORIES.map((category, index) => (
          <SwiperSlide key={index}>
            <Link
              href={category.path}
              className="flex justify-center items-center border rounded-md py-14 hover:bg-primary hover:text-white"
            >
              <div className="space-y-2 flex flex-col items-center justify-center">
                <Icon icon={category.icon} className="text-4xl" />
                <h4>{category.name}</h4>
              </div>
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default Category;

const CATEGORIES: TCategories[] = [
  {
    icon: "hugeicons:home-03",
    path: "/",
    name: "Home & Office",
  },
  {
    icon: "hugeicons:fridge",
    path: "/",
    name: "Appliances",
  },
  {
    icon: "carbon:fruit-bowl",
    path: "/",
    name: "Supermarket",
  },
  {
    icon: "teenyicons:computer-outline",
    path: "/",
    name: "Computers",
  },
  {
    icon: "ion:phone-portrait-outline",
    path: "/",
    name: "Phones",
  },
  {
    icon: "solar:gamepad-linear",
    path: "/",
    name: "Gaming",
  },
  {
    icon: "solar:camera-linear",
    path: "/",
    name: "Camera",
  },
  {
    icon: "healthicons:ppe-gown-outline",
    path: "/",
    name: "Fashion",
  },
];
