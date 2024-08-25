import { Icon } from "@iconify/react";
import { Button } from "@/components/ui/button";
import Heading from "@/components/shared/heading";
import Hero from "@/components/shared/hero";
import Category from "@/components/shared/category";
import Products from "@/components/shared/products";
import { TProducts } from "../../../types";
import image1 from "@/assets/images/ideapad-gaming-3i-01-500x500 1.png";
import image2 from "@/assets/images/ak-900-01-500x500 1.png";
import image3 from "@/assets/images/547953_9C2ST_8746_001_082_0000_Light-Gucci-Savoy-medium-duffle-bag 1.png";
import image4 from "@/assets/images/Copa_Sense 1.png";
import image5 from "@/assets/images/New-Mercedes-Benz-Gtr-Licensed-Ride-on-Car-Kids-Electric-Toy-Car 1.png";
import image6 from "@/assets/images/jacket.png";
import perfumePng from "@/assets/images/perfume.png";
import speakerPng from "@/assets/images/speaker.png";
import psPng from "@/assets/images/ps5-slim-goedkope-playstation_large 1.png";
import womanPng from "@/assets/images/attractive-woman-wearing-hat-posing-black-background 1.png";
import Image from "next/image";
import ProductList from "@/components/shared/product-list";
import Service from "@/components/shared/service";

export default function Home() {
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
              <div className="flex justify-between items-center gap-16">
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
            data={PRODUCTS}
            nextEl=".swiper-btn-next"
            prevEl=".swiper-btn-prev"
          />

          <div className="flex justify-center py-5">
            <Button>View All Products</Button>
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
            data={BEST_PRODUCTS}
            nextEl=".btn-next"
            prevEl=".btn-prev"
          />
          <div className="flex justify-center pt-5">
            <Button>View All</Button>
          </div>
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
            {OUR_PRODUCTS?.map((product, index) => (
              <ProductList key={index} {...product} />
            ))}
          </div>
          <div className="flex justify-center pt-5">
            <Button>View All</Button>
          </div>
        </div>

        <Service />
      </div>
    </div>
  );
}
const OUR_PRODUCTS: TProducts[] = [
  {
    name: "HAVIT HV-G92 Gamepad",
    price: 120,
    image: image1,
    rating: 3.5,
  },
  {
    name: "AK-900 Wired Keyboard",
    price: 970,
    image: image2,
    rating: 5,
  },
  {
    name: "Gucci duffle bag",
    price: 120,
    image: image3,
    rating: 4.5,
  },
  {
    name: "Jr. Zoom Soccer Cleats",
    price: 970,
    image: image4,
    rating: 5,
  },
  {
    name: "HAVIT HV-G92 Gamepad",
    price: 120,
    image: image5,
    rating: 2.5,
  },
  {
    name: "AK-900 Wired Keyboard",
    price: 970,
    image: image6,
    rating: 5,
  },
  {
    name: "AK-900 Wired Keyboard",
    price: 970,
    image: image2,
    rating: 5,
  },
  {
    name: "Gucci duffle bag",
    price: 120,
    image: image3,
    rating: 4.5,
  },
];
const BEST_PRODUCTS: TProducts[] = [
  {
    name: "HAVIT HV-G92 Gamepad",
    price: 120,
    off_price: 160,
    image: image1,
    rating: 3.5,
  },
  {
    name: "AK-900 Wired Keyboard",
    price: 970,
    off_price: 1200,
    image: image2,
    rating: 5,
  },
  {
    name: "Gucci duffle bag",
    price: 120,
    off_price: 160,
    image: image3,
    rating: 4.5,
  },
  {
    name: "Jr. Zoom Soccer Cleats",
    price: 970,
    off_price: 1200,
    image: image4,
    rating: 5,
  },
  {
    name: "HAVIT HV-G92 Gamepad",
    price: 120,
    off_price: 160,
    image: image5,
    rating: 2.5,
  },
  {
    name: "AK-900 Wired Keyboard",
    price: 970,
    off_price: 1200,
    image: image6,
    rating: 5,
  },
];
export const PRODUCTS: TProducts[] = [
  {
    name: "HAVIT HV-G92 Gamepad",
    price: 120,
    off_price: 160,
    percent: 20,
    image: image1,
    rating: 2.5,
  },
  {
    name: "AK-900 Wired Keyboard",
    price: 970,
    off_price: 1200,
    percent: 15,
    image: image2,
    rating: 5,
  },
  {
    name: "Gucci duffle bag",
    price: 120,
    off_price: 160,
    percent: 20,
    image: image3,
    rating: 4,
  },
  {
    name: "Jr. Zoom Soccer Cleats",
    price: 970,
    off_price: 1200,
    percent: 15,
    image: image4,
    rating: 5,
  },
  {
    name: "HAVIT HV-G92 Gamepad",
    price: 120,
    off_price: 160,
    percent: 20,
    image: image5,
    rating: 2.5,
  },
  {
    name: "AK-900 Wired Keyboard",
    price: 970,
    off_price: 1200,
    percent: 15,
    image: image6,
    rating: 5,
  },
];
