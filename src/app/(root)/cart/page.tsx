"use client";
import BreadcrumbCard from "@/components/shared/Breadcrumb";
import React from "react";
import { TCart } from "../../../../types";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Minus, Plus } from "lucide-react";
import { Icon } from "@iconify/react";
import { useAppDispatch, useAppSelector } from "@/hooks/useStore";
import {
  addItemToCart,
  deleteItemFromCart,
  removeItemFromCart,
  defaultCartState,
} from "@/store/cartSlice";
import { toast } from "sonner";
import { useRouter } from "next/navigation";
import { PaystackButton } from "react-paystack";

function Cart() {
  const router = useRouter();
  const cartItems = useAppSelector((state) => state.cart.items);
  const totalPrice = useAppSelector((state) => state.cart.totalPrice);

  const delivery_fee = 15;

  const dispatch = useAppDispatch();

  const handleCartDelete = (id: string) => {
    dispatch(deleteItemFromCart(id));
    toast.error("Item deleted successfully");
  };
  const handleCartRemoveItem = (id: string) => {
    dispatch(removeItemFromCart(id));
    toast.error("Item removed successfully");
  };

  const addToCart = (product: TCart) => {
    dispatch(
      addItemToCart({
        ...product,
        quantity: 1,
      })
    );
    toast.success("Item added successfully");
  };

  const componentProps = {
    email: "larjar@gmail.com",
    amount: (totalPrice + delivery_fee) * 100,
    publicKey: process.env.NEXT_PUBLIC_PAYSTACK_API_KEY || "",
    onSuccess: () => {
      router.push("/cart");
      dispatch(defaultCartState());
    },
  };

  const breadcrumbs = [
    { name: "Home", icon: true },
    { name: "Cart", icon: false },
  ];
  return (
    <div className="container py-5 space-y-5">
      <BreadcrumbCard list={breadcrumbs} />

      <h2 className="text-2xl uppercase md:text-4xl">Your Cart</h2>

      {!!cartItems.length ? (
        <div className="flex gap-5 flex-col md:flex-row">
          <div className="basis-full space-y-4 md:basis-2/3">
            {cartItems?.map((product: TCart) => (
              <div
                key={product.id}
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
                    onClick={() => handleCartRemoveItem(product.id)}
                  >
                    <Minus size={15} />
                  </Button>
                  <p className="text-sm">{product.quantity}</p>
                  <Button
                    variant="outline"
                    size="sm"
                    className="rounded-none border-y-0 border-r-0"
                    onClick={() => addToCart(product)}
                  >
                    <Plus size={15} />
                  </Button>
                </div>
                <Button
                  variant="ghost"
                  size="icon"
                  className="text-red-500 hover:text-red-500"
                  onClick={() => handleCartDelete(product.id)}
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
              <h2>${totalPrice.toLocaleString()}</h2>
            </div>
            <div className="flex gap-4 items-center justify-between">
              <p className="text-gray-400">Discount (-20%):</p>
              <h2 className="text-red-500">
                -$
                {cartItems
                  .reduce(
                    (cur, num) => (num?.discount ? cur + num.discount : cur),
                    0
                  )
                  .toLocaleString()}
              </h2>
            </div>
            <div className="flex gap-4 items-center justify-between">
              <p className="text-gray-400">Delivery Fee:</p>
              <h2>$15</h2>
            </div>
            <hr />
            <div className="flex gap-4 items-center justify-between">
              <p className="text-lg">Total:</p>
              <h2 className="text-xl">
                ${(totalPrice + delivery_fee).toLocaleString()}
              </h2>
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
            <PaystackButton
              {...componentProps}
              className="w-full bg-primary h-10 px-4 py-2 text-primary-foreground inline-flex items-center rounded-sm justify-center whitespace-nowrap text-sm font-light ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-primary/90"
            >
              Go to Checkout{" "}
              <Icon icon="formkit:arrowright" className="text-sm" />
            </PaystackButton>
          </div>
        </div>
      ) : (
        <p className="text-center text-xl">Cart is empty</p>
      )}
    </div>
  );
}

export default Cart;
