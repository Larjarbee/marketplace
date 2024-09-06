import { Icon } from "@iconify/react";
import { Button } from "@/components/ui/button";
import Heading from "@/components/shared/heading";
import Hero from "@/components/shared/hero";
import Category from "@/components/shared/category";
import Products from "@/components/shared/products";
import perfumePng from "@/assets/images/perfume.png";
import speakerPng from "@/assets/images/speaker.png";
import psPng from "@/assets/images/ps5-slim-goedkope-playstation_large 1.png";
import womanPng from "@/assets/images/attractive-woman-wearing-hat-posing-black-background 1.png";
import Image from "next/image";
import ProductList from "@/components/shared/product-list";
import Service from "@/components/shared/service";
import Link from "next/link";
import { PRODUCTS } from "@/constants/data";

export default async function Home() {
  return (
    <div className="space-y-20">
      <div className="w-full bg-black md:container">
        <Hero />
      </div>

      <div className="container space-y-20">
        <div className="space-y-5">
          <Heading text="Today’s" />
          <div className="flex justify-between items-start gap-5 flex-col md:items-center md:flex-row">
            <div className="flex items-start gap-5 flex-col md:flex-row md:items-center md:gap-20">
              <div className="flex justify-between items-center gap-10 md:gap-16">
                <h2 className="text-4xl">Flash Sales</h2>
                <div className="space-x-2 md:hidden">
                  <Button
                    className="swiper-btn-prev after:content-none"
                    size="icon"
                    variant="outline"
                  >
                    <Icon icon="formkit:arrowleft" />
                  </Button>
                  <Button
                    className="swiper-btn-next after:content-none"
                    size="icon"
                    variant="outline"
                  >
                    <Icon icon="formkit:arrowright" />
                  </Button>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div>
                  <p className="text-xs">Days</p>
                  <h2 className="text-2xl">03</h2>
                </div>
                <p className="text-primary text-lg font-bold">:</p>
                <div>
                  <p className="text-xs">Hours</p>
                  <h2 className="text-2xl">23</h2>
                </div>
                <p className="text-primary text-lg font-bold">:</p>
                <div>
                  <p className="text-xs">Minutes</p>
                  <h2 className="text-2xl">10</h2>
                </div>
                <p className="text-primary text-lg font-bold">:</p>
                <div>
                  <p className="text-xs">Seconds</p>
                  <h2 className="text-2xl">56</h2>
                </div>
              </div>
            </div>

            <div className="space-x-2 hidden md:block">
              <Button
                className="swiper-btn-prev after:content-none"
                size="icon"
                variant="outline"
              >
                <Icon icon="formkit:arrowleft" />
              </Button>
              <Button
                className="swiper-btn-next after:content-none"
                size="icon"
                variant="outline"
              >
                <Icon icon="formkit:arrowright" />
              </Button>
            </div>
          </div>
          <Products
            data={PRODUCTS.filter((product) => product.promo)}
            nextEl=".swiper-btn-next"
            prevEl=".swiper-btn-prev"
          />

          <div className="flex justify-center py-5">
            <Link href="/products/">
              <Button>View All Products</Button>
            </Link>
          </div>

          <hr />
        </div>

        <div className="space-y-5">
          <Heading text="Categories" />
          <div className="flex justify-between items-center gap-5">
            <h2 className="text-xl md:text-4xl">Browse by Categories</h2>
            <div className="space-x-2">
              <Button
                className="swiper-button-prev after:content-none"
                size="icon"
                variant="outline"
              >
                <Icon icon="formkit:arrowleft" />
              </Button>
              <Button
                className="swiper-button-next after:content-none"
                size="icon"
                variant="outline"
              >
                <Icon icon="formkit:arrowright" />
              </Button>
            </div>
          </div>
          <Category />
        </div>

        <div className="space-y-5">
          <Heading text="This Month" />
          <div className="flex justify-between items-center gap-5">
            <h2 className="text-xl md:text-4xl">Best Selling Products</h2>
            <div className="space-x-2">
              <Button
                className="btn-prev after:content-none"
                size="icon"
                variant="outline"
              >
                <Icon icon="formkit:arrowleft" />
              </Button>
              <Button
                className="btn-next after:content-none"
                size="icon"
                variant="outline"
              >
                <Icon icon="formkit:arrowright" />
              </Button>
            </div>
          </div>
          <Products
            data={PRODUCTS.toReversed()}
            nextEl=".btn-next"
            prevEl=".btn-prev"
          />
        </div>

        <div className="space-y-5">
          <Heading text="Featured" />
          <h2 className="text-xl md:text-4xl">New Arrival</h2>

          <div className="grid grid-cols-1 gap-5 md:grid-cols-4">
            <div className="relative col-span-1 row-span-1 bg-black flex flex-col justify-end md:col-span-2 md:row-span-2">
              <div className="flex-1" />
              <Image src={psPng} alt="" className="mx-auto" />
              <div className="absolute text-gray-300 max-w-64 left-6 bottom-4">
                <h2 className="text-2xl">PlayStation 5</h2>
                <p className="pt-2 font-light">
                  Black and White version of the PS5 coming out on sale.
                </p>
                <Button variant="link" className="p-0">
                  Shop Now
                </Button>
              </div>
            </div>
            <div className="col-span-1 relative bg-black flex justify-end md:col-span-2">
              <div className="absolute text-gray-300 max-w-64 left-6 bottom-4">
                <h2 className="text-2xl">Women’s Collections</h2>
                <p className="pt-2 font-light">
                  Featured woman collections that give you another vibe.
                </p>
                <Button variant="link" className="p-0">
                  Shop Now
                </Button>
              </div>
              <Image src={womanPng} alt="" />
            </div>
            <div className="bg-black p-10 relative">
              <Image src={speakerPng} alt="" className="mx-auto" />
              <div className="absolute text-gray-300 max-w-64 left-6 bottom-4">
                <h2 className="text-2xl">Speakers</h2>
                <p className="pt-2 font-light">Amazon wireless speakers</p>
                <Button variant="link" className="p-0">
                  Shop Now
                </Button>
              </div>
            </div>
            <div className="bg-black p-10 relative">
              <Image src={perfumePng} alt="" className="mx-auto" />
              <div className="absolute text-gray-300 max-w-64 left-6 bottom-4">
                <h2 className="text-2xl">Perfume</h2>
                <p className="pt-2 font-light">GUCCI INTENSE OUD EDP</p>
                <Button variant="link" className="p-0">
                  Shop Now
                </Button>
              </div>
            </div>
          </div>
        </div>

        <div className="space-y-5">
          <Heading text="Our Products" />
          <h2 className="text-xl md:text-4xl">Explore Our Products</h2>

          <div className="grid grid-cols-1 gap-5 md:grid-cols-4">
            {PRODUCTS?.slice(0, 8).map((product, index) => (
              <ProductList key={index} {...product} />
            ))}
          </div>
          <div className="flex justify-center pt-5">
            <Link href="/products/">
              <Button>View All Products</Button>
            </Link>
          </div>
        </div>

        <Service />
      </div>
    </div>
  );
}
