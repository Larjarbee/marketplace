"use client";
import React from "react";
import ProductList from "./product-list";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Navigation } from "swiper/modules";
import { TProducts } from "../../../types";

function Products({ data }: { data: TProducts[] }) {
  return (
    <div>
      <Swiper
        slidesPerView={1}
        spaceBetween={10}
        navigation={{
          nextEl: ".swiper-btn-next",
          prevEl: ".swiper-btn-prev",
          clickable: true,
        }}
        breakpoints={{
          640: {
            slidesPerView: 2,
            spaceBetween: 10,
          },
          768: {
            slidesPerView: 3,
            spaceBetween: 20,
          },
          1024: {
            slidesPerView: 4,
            spaceBetween: 30,
          },
        }}
        modules={[Navigation]}
        className="mySwiper"
      >
        {data?.map((product, index) => (
          <SwiperSlide key={index}>
            <ProductList key={index} {...product} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default Products;
