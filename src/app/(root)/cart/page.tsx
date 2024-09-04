import BreadcrumbCard from "@/components/shared/Breadcrumb";
import React from "react";
import { TProducts } from "../../../../types";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Minus, Plus } from "lucide-react";
import { Icon } from "@iconify/react";
import { BEST_PRODUCTS } from "../page";

function Cart() {
  const breadcrumbs = [
    { name: "Home", icon: true },
    { name: "Cart", icon: false },
  ];
  return (
    <div className="container py-5 space-y-5">
      <BreadcrumbCard list={breadcrumbs} />

      <h2 className="text-2xl uppercase md:text-4xl">Your Cart</h2>

      <div className="flex gap-5 flex-col md:flex-row">
        <div className="basis-full space-y-4 md:basis-2/3">
          {BEST_PRODUCTS.slice(0, 3).map((product: TProducts, index) => (
            <div
              key={index}
              className="flex justify-between items-center border rounded-md p-2"
            >
              <div className="flex items-center gap-2 basis-2/5">
                <div>
                  <Image src={product.image} alt="" width={50} />
                </div>

                <div className="space-y-2">
                  <h6>{product.name}</h6>
                  <h2>${product.price}</h2>
                </div>
              </div>

              <div className="flex border rounded-sm overflow-hidden w-fit gap-6 items-center">
                <Button
                  variant="outline"
                  size="sm"
                  className="rounded-none border-y-0 border-l-0"
                >
                  <Minus size={15} />
                </Button>
                <p className="text-sm">1</p>
                <Button
                  variant="outline"
                  size="sm"
                  className="rounded-none border-y-0 border-r-0"
                >
                  <Plus size={15} />
                </Button>
              </div>
              <Button
                variant="ghost"
                size="icon"
                className="text-red-500 hover:text-red-500"
              >
                <Icon icon="material-symbols:delete" className="text-xl" />
              </Button>
            </div>
          ))}
        </div>
        <div className="basis-full border rounded-md space-y-4 p-2 md:basis-1/3">
          <h2 className="text-xl">Order Summary</h2>
          <div className="flex gap-4 items-center justify-between">
            <p className="text-gray-400">Subtotal:</p>
            <h2>$250</h2>
          </div>
          <div className="flex gap-4 items-center justify-between">
            <p className="text-gray-400">Discount (-20%):</p>
            <h2 className="text-red-500">-$250</h2>
          </div>
          <div className="flex gap-4 items-center justify-between">
            <p className="text-gray-400">Delivery Fee:</p>
            <h2>$15</h2>
          </div>
          <hr />
          <div className="flex gap-4 items-center justify-between">
            <p className="text-lg">Total:</p>
            <h2 className="text-xl">$150</h2>
          </div>
          <div className="flex gap-2">
            <div className="flex items-center w-full pl-2 bg-gray-100 rounded-md">
              <Icon icon="tabler:tag" className="text-lg text-gray-500" />
              <input
                className="flex h-8 w-full rounded-md border-none bg-inherit px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50"
                placeholder="Add promo code"
              />
            </div>
            <Button>Apply</Button>
          </div>
          <Button className="w-full">
            Go to Checkout{" "}
            <Icon icon="formkit:arrowright" className="text-sm" />
          </Button>
        </div>
      </div>
    </div>
  );
}

export default Cart;
