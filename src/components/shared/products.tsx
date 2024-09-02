"use client";
import React from "react";
import ProductList from "./product-list";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Navigation } from "swiper/modules";
import { TProducts } from "../../../types";

type PropsType = { data: TProducts[]; nextEl: string; prevEl: string };

function Products({ data, nextEl, prevEl }: PropsType) {
  return (
    <div>
      <Swiper
        slidesPerView={1}
        spaceBetween={10}
        navigation={{
          nextEl: nextEl,
          prevEl: prevEl,
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
        {data?.map((product) => (
          <SwiperSlide key={product?.id}>
            <ProductList {...product} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default Products;
