import BreadcrumbCard from "@/components/shared/Breadcrumb";
import React from "react";
import img from "@/assets/images/image 63.png";
import img1 from "@/assets/images/image 57.png";
import img2 from "@/assets/images/image 58.png";
import img3 from "@/assets/images/image 59.png";
import img4 from "@/assets/images/image 61.png";
import Image from "next/image";
import { Ratings } from "@/components/ui/rating";
import { Button } from "@/components/ui/button";
import { Minus, Plus } from "lucide-react";
import { Icon } from "@iconify/react";
import Heading from "@/components/shared/heading";
import ProductList from "@/components/shared/product-list";
import { PRODUCTS } from "@/constants/data";

function ProductDetail() {
  const breadcrumbs = [
    { name: "Account", icon: true },
    { name: "Gaming", icon: true },
    { name: "Ps console", icon: false },
  ];
  return (
    <div className="container py-5 space-y-5">
      <BreadcrumbCard list={breadcrumbs} />

      <div className="flex items-center gap-10 max-w-6xl mx-auto flex-col md:flex-row">
        <div className="basis-full flex gap-2 md:basis-2/3">
          <div className="space-y-2">
            {[img1, img2, img3, img4].map((img, index) => (
              <div key={index} className="p-8 bg-gray-100">
                <Image src={img} alt="" width={100} />
              </div>
            ))}
          </div>

          <div className="p-14 w-full bg-gray-100 flex items-center justify-center">
            <Image src={img} alt="" width={400} />
          </div>
        </div>
        <div className="basis-full space-y-4 md:basis-1/3">
          <h2 className="text-xl">Havic HV G-92 Gamepad</h2>
          <div className="flex gap-2">
            <Ratings rating={4.5} size={15} />
            <p className="text-gray-400">(35 Reviews)</p> <p>|</p>
            <p className="text-green-400">In stock</p>
          </div>
          <h2 className="font-light text-xl">$192.00</h2>
          <h4>
            PlayStation 5 Controller Skin High quality vinyl with air channel
            adhesive for easy bubble free install & mess free removal Pressure
            sensitive.
          </h4>
          <hr />
          <div className="flex border rounded-sm overflow-hidden w-fit gap-6 items-center">
            <Button
              variant="outline"
              size="sm"
              className="rounded-none border-y-0 border-l-0"
            >
              <Minus size={15} />
            </Button>
            <p className="text-sm">0</p>
            <Button
              variant="outline"
              size="sm"
              className="rounded-none border-y-0 border-r-0"
            >
              <Plus size={15} />
            </Button>
          </div>

          <div className="flex gap-2">
            <Button className="w-1/2">Add to Cart</Button>
            <Button variant="outline">
              <Icon icon="solar:heart-outline" className="text-lg" />
            </Button>
          </div>

          <div className="border rounded-sm">
            <div className="px-5 py-2 flex gap-4 items-center">
              <Icon icon="carbon:delivery" className="text-2xl" />
              <div>
                <h2>Free Delivery</h2>
                <p>Enter your postal code for Delivery Availability</p>
              </div>
            </div>
            <hr />
            <div className="px-5 py-2 flex gap-4 items-center">
              <Icon icon="game-icons:recycle" className="text-2xl" />
              <div>
                <h2>Return Delivery</h2>
                <p>Free 30 Days Delivery Returns. Details</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="space-y-5 pt-10">
        <Heading text="Related Item" />

        <div className="grid grid-cols-1 gap-5 md:grid-cols-4">
          {PRODUCTS?.splice(0, 8).map((product, index) => (
            <ProductList key={index} {...product} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default ProductDetail;
