import { Icon } from "@iconify/react";
import { Button } from "@/components/ui/button";
import Heading from "@/components/shared/heading";
import Hero from "@/components/shared/hero";
import Category from "@/components/shared/category";
import Products from "@/components/shared/products";
import { TProducts } from "../../types";
import image1 from "@/assets/images/ideapad-gaming-3i-01-500x500 1.png";
import image2 from "@/assets/images/ak-900-01-500x500 1.png";
import image3 from "@/assets/images/547953_9C2ST_8746_001_082_0000_Light-Gucci-Savoy-medium-duffle-bag 1.png";
import image4 from "@/assets/images/Copa_Sense 1.png";
import image5 from "@/assets/images/New-Mercedes-Benz-Gtr-Licensed-Ride-on-Car-Kids-Electric-Toy-Car 1.png";
import image6 from "@/assets/images/69-694768_amazon-echo-png-clipart-transparent-amazon-echo-png 1.png";

export default function Home() {
  return (
    <div className="space-y-20">
      <div className="w-full bg-black md:container">
        <Hero />
      </div>

      <div className="container space-y-20">
        <div className="space-y-5">
          <Heading text="Today’s" />
          <div className="flex justify-between items-center gap-5 flex-col md:flex-row">
            <div className="flex items-center gap-x-20 flex-col md:flex-row">
              <h2 className="text-4xl">Flash Sales</h2>
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

            <div className="space-x-2">
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
          <Products data={PRODUCTS} />

          <div className="flex justify-center py-5">
            <Button>View All Products</Button>
          </div>

          <hr />
        </div>

        <div className="space-y-5">
          <Heading text="Categories" />
          <div className="flex justify-between items-center gap-5">
            <h2 className="text-4xl">Browse by Categories</h2>
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
            <h2 className="text-4xl">Best Selling Products</h2>
            <Button>View All</Button>
          </div>
          <Products data={BEST_PRODUCTS} />
        </div>
      </div>
    </div>
  );
}
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
const PRODUCTS: TProducts[] = [
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
