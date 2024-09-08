"use client";
import React from "react";
import { Button } from "../ui/button";
import { TProducts } from "../../../types";
import Image from "next/image";
import { Icon } from "@iconify/react";
import { Ratings } from "../ui/rating";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { useAppDispatch } from "@/hooks/useStore";
import { addItemToCart } from "@/store/cartSlice";
import { toast } from "sonner";

function ProductList(data: TProducts) {
  const dispatch = useAppDispatch();

  const addToCart = () => {
    dispatch(
      addItemToCart({
        id: data.id,
        name: data.name,
        quantity: 1,
        discount: data.discount,
        price: data.price,
        image: data.image,
      })
    );
    toast.success("Item added successfully");
  };

  return (
    <div className="space-y-2">
      <div className="relative bg-gray-100 space-y-5 rounded-sm overflow-hidden">
        {data?.percent && (
          <div className="absolute left-2 top-2 px-4 py-2 bg-primary rounded-md text-white text-xs font-light text-center w-fit">
            <p>-{data?.percent}%</p>
          </div>
        )}
        <div
          className={cn(
            "absolute right-2 flex flex-col gap-1",
            data?.percent ? "top-0" : "top-4"
          )}
        >
          <Button size="icon" className="bg-white text-black hover:text-white">
            <Icon icon="solar:heart-outline" className="text-lg" />
          </Button>
          <Link href={`/products/${data.id}`}>
            <Button
              size="icon"
              className="bg-white text-black hover:text-white"
            >
              <Icon icon="formkit:eye" className="text-lg" />
            </Button>
          </Link>
        </div>
        <div className="h-48 flex items-center justify-center">
          <Image
            src={data?.image}
            alt={data?.name}
            className="m-auto object-contain"
            width={100}
            height={80}
          />
        </div>
        <Button
          onClick={addToCart}
          className="w-full bg-black hover:bg-black/70"
        >
          Add To Cart
        </Button>
      </div>
      <h2>{data?.name}</h2>
      {data?.discount ? (
        <>
          <div className="flex gap-2">
            <p className="text-red-500">₦{data?.price.toLocaleString()}</p>
            <p className="text-gray-400 line-through">
              ₦{data?.discount.toLocaleString()}
            </p>
          </div>
          <div className="flex gap-2">
            <Ratings rating={data?.rating} size={15} />
            <p className="text-gray-400">(35)</p>
          </div>
        </>
      ) : (
        <>
          <div className="flex gap-2">
            <p className="text-red-500">₦{data?.price.toLocaleString()}</p>
            <div className="flex gap-2">
              <Ratings rating={data?.rating} size={15} />
              <p className="text-gray-400">(35)</p>
            </div>
          </div>
        </>
      )}
    </div>
  );
}

export default ProductList;
