"use client";
import BreadcrumbCard from "@/components/shared/Breadcrumb";
import React from "react";
import ProductList from "@/components/shared/product-list";
import { Button } from "@/components/ui/button";
import { Icon } from "@iconify/react";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
} from "@/components/ui/form";
import { useForm } from "react-hook-form";
import FormInput from "@/components/ui/form-input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Ratings } from "@/components/ui/rating";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { PRODUCTS } from "@/constants/data";
import { useRouter, useSearchParams } from "next/navigation";

function Products() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const search = searchParams.get("search");
  const discountParams = searchParams.get("discount");
  const ratingParams = searchParams.get("rating");

  const form = useForm({
    defaultValues: {
      min_price: "",
      max_price: "",
      discount: discountParams || "",
      rating: ratingParams || "",
    },
  });

  const min_price = form.watch("min_price");
  const max_price = form.watch("max_price");
  const rating = form.watch("rating");
  const discount = form.watch("discount");

  const filteredSearch = PRODUCTS.filter((p) =>
    p.name.toLowerCase().includes((search as string) || "")
  );

  const filteredPrice = filteredSearch.filter((p) => {
    if (max_price !== "" && max_price !== "") {
      return p.price >= Number(min_price) && p.price < Number(max_price);
    }
    return p;
  });

  let filteredDiscount;
  switch (discount) {
    case "with_discount":
      filteredDiscount = filteredPrice.filter((p) => p.promo);
      break;
    case "without_discount":
      filteredDiscount = filteredPrice.filter((p) => !p.promo);
      break;
    default:
      filteredDiscount = filteredPrice;
      break;
  }

  let filteredRating;
  switch (rating) {
    case "four_above":
      filteredRating = filteredDiscount.filter((p) => p.rating >= 4);
      break;
    case "three_above":
      filteredRating = filteredDiscount.filter((p) => p.rating >= 3);
      break;
    case "two_above":
      filteredRating = filteredDiscount.filter((p) => p.rating >= 2);
      break;
    case "one_above":
      filteredRating = filteredDiscount.filter((p) => p.rating >= 1);
      break;
    default:
      filteredRating = filteredDiscount;
      break;
  }

  const filteredProducts = filteredRating;

  const breadcrumbs = [
    { name: "Home", icon: true },
    { name: "Products", icon: false },
  ];

  return (
    <div className="container py-5 space-y-5">
      <BreadcrumbCard list={breadcrumbs} />

      <div className="flex gap-5">
        <div className="hidden basis-full space-y-4 border rounded-md p-4 md:basis-1/5 md:block">
          <div className="flex justify-between items-center">
            <h2 className="text-lg">filters</h2>
            <Icon icon="mage:filter" className="text-lg" />
          </div>
          <hr />

          <Form {...form}>
            <form className="space-y-4">
              <h2>Price, ₦ </h2>
              <div className="flex items-center gap-2">
                <FormInput name="min_price" label="Min Price" />
                <p>-</p>
                <FormInput name="max_price" label="Max Price" />
              </div>

              <h2>Discount</h2>
              <FormField
                control={form.control}
                name="discount"
                render={({ field }) => (
                  <FormItem className="space-y-3">
                    <FormControl>
                      <RadioGroup
                        onValueChange={field.onChange}
                        defaultValue={field.value}
                        className="flex flex-col space-y-1"
                      >
                        <FormItem className="flex items-center space-x-2 space-y-0">
                          <FormControl>
                            <RadioGroupItem
                              value="all"
                              onClick={() =>
                                router.push(
                                  `?${new URLSearchParams({
                                    discount: "all",
                                    rating: ratingParams || "",
                                  })}`
                                )
                              }
                            />
                          </FormControl>
                          <FormLabel className="font-normal">
                            Show all
                          </FormLabel>
                        </FormItem>
                        <FormItem className="flex items-center space-x-2 space-y-0">
                          <FormControl>
                            <RadioGroupItem
                              value="with_discount"
                              onClick={() =>
                                router.push(
                                  `?${new URLSearchParams({
                                    discount: "with_discount",
                                    rating: ratingParams || "",
                                  })}`
                                )
                              }
                            />
                          </FormControl>
                          <FormLabel className="font-normal">
                            With discount
                          </FormLabel>
                        </FormItem>
                        <FormItem className="flex items-center space-x-2 space-y-0">
                          <FormControl>
                            <RadioGroupItem
                              value="without_discount"
                              onClick={() =>
                                router.push(
                                  `?${new URLSearchParams({
                                    discount: "without_discount",
                                    rating: ratingParams || "",
                                  })}`
                                )
                              }
                            />
                          </FormControl>
                          <FormLabel className="font-normal">
                            Without discount
                          </FormLabel>
                        </FormItem>
                      </RadioGroup>
                    </FormControl>
                  </FormItem>
                )}
              />

              <h2>Rating</h2>
              <FormField
                control={form.control}
                name="rating"
                render={({ field }) => (
                  <FormItem className="space-y-3">
                    <FormControl>
                      <RadioGroup
                        onValueChange={field.onChange}
                        defaultValue={field.value}
                        className="flex flex-col space-y-1"
                      >
                        {[
                          "four_above",
                          "three_above",
                          "two_above",
                          "one_above",
                        ].map((el, index) => (
                          <FormItem
                            key={index}
                            className="flex items-center space-x-2 space-y-0"
                          >
                            <FormControl>
                              <RadioGroupItem
                                value={el}
                                onClick={() =>
                                  router.push(
                                    `?${new URLSearchParams({
                                      discount: discountParams || "",
                                      rating: el,
                                    })}`
                                  )
                                }
                              />
                            </FormControl>
                            <Ratings rating={4} size={15} />
                            <FormLabel className="font-normal">
                              & above
                            </FormLabel>
                          </FormItem>
                        ))}
                      </RadioGroup>
                    </FormControl>
                  </FormItem>
                )}
              />
            </form>
          </Form>
        </div>
        <div className="basis-full space-y-4 md:basis-4/5">
          <div className="flex justify-between items-center">
            <h2 className="text-xl">Casual</h2>
            <div className="hidden md:block">
              <Select defaultValue="popular">
                <SelectTrigger className="w-fit flex items-center gap-2">
                  <h6 className="text-gray-500">Sort by:</h6>
                  <SelectValue placeholder="Select" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="popular">Most Popular</SelectItem>
                  <SelectItem value="newest">Newest Arrivals</SelectItem>
                  <SelectItem value="highest">Highest Price</SelectItem>
                  <SelectItem value="lowest">Lowest Price</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="md:hidden">
              <Dialog>
                <DialogTrigger>
                  <Icon icon="mage:filter" className="text-lg" />
                </DialogTrigger>
                <DialogContent className="h-full">
                  <div className="space-y-4">
                    <DialogHeader>
                      <DialogTitle className="text-lg text-start">
                        filters
                      </DialogTitle>
                    </DialogHeader>
                    <hr />
                    <Form {...form}>
                      <form className="space-y-4">
                        <h2>Price, ₦ </h2>
                        <div className="flex items-center gap-2">
                          <FormInput name="min_price" label="Min Price" />
                          <p>-</p>
                          <FormInput name="max_price" label="Max Price" />
                        </div>

                        <h2>Discount</h2>
                        <FormField
                          control={form.control}
                          name="discount"
                          render={({ field }) => (
                            <FormItem className="space-y-3">
                              <FormControl>
                                <RadioGroup
                                  onValueChange={field.onChange}
                                  defaultValue={field.value}
                                  className="flex flex-col space-y-1"
                                >
                                  <FormItem className="flex items-center space-x-2 space-y-0">
                                    <FormControl>
                                      <RadioGroupItem
                                        value="all"
                                        onClick={() =>
                                          router.push(
                                            `?${new URLSearchParams({
                                              discount: "all",
                                              rating: ratingParams || "",
                                            })}`
                                          )
                                        }
                                      />
                                    </FormControl>
                                    <FormLabel className="font-normal">
                                      Show all
                                    </FormLabel>
                                  </FormItem>
                                  <FormItem className="flex items-center space-x-2 space-y-0">
                                    <FormControl>
                                      <RadioGroupItem
                                        value="with_discount"
                                        onClick={() =>
                                          router.push(
                                            `?${new URLSearchParams({
                                              discount: "with_discount",
                                              rating: ratingParams || "",
                                            })}`
                                          )
                                        }
                                      />
                                    </FormControl>
                                    <FormLabel className="font-normal">
                                      With discount
                                    </FormLabel>
                                  </FormItem>
                                  <FormItem className="flex items-center space-x-2 space-y-0">
                                    <FormControl>
                                      <RadioGroupItem
                                        value="without_discount"
                                        onClick={() =>
                                          router.push(
                                            `?${new URLSearchParams({
                                              discount: "without_discount",
                                              rating: ratingParams || "",
                                            })}`
                                          )
                                        }
                                      />
                                    </FormControl>
                                    <FormLabel className="font-normal">
                                      Without discount
                                    </FormLabel>
                                  </FormItem>
                                </RadioGroup>
                              </FormControl>
                            </FormItem>
                          )}
                        />

                        <h2>Rating</h2>
                        <FormField
                          control={form.control}
                          name="rating"
                          render={({ field }) => (
                            <FormItem className="space-y-3">
                              <FormControl>
                                <RadioGroup
                                  onValueChange={field.onChange}
                                  defaultValue={field.value}
                                  className="flex flex-col space-y-1"
                                >
                                  {[
                                    "four_above",
                                    "three_above",
                                    "two_above",
                                    "one_above",
                                  ].map((el, index) => (
                                    <FormItem
                                      key={index}
                                      className="flex items-center space-x-2 space-y-0"
                                    >
                                      <FormControl>
                                        <RadioGroupItem
                                          value={el}
                                          onClick={() =>
                                            router.push(
                                              `?${new URLSearchParams({
                                                discount: discountParams || "",
                                                rating: el,
                                              })}`
                                            )
                                          }
                                        />
                                      </FormControl>
                                      <Ratings rating={4} size={15} />
                                      <FormLabel className="font-normal">
                                        & above
                                      </FormLabel>
                                    </FormItem>
                                  ))}
                                </RadioGroup>
                              </FormControl>
                            </FormItem>
                          )}
                        />
                      </form>
                    </Form>
                    <br />
                    <DialogClose className="w-full bg-primary text-white py-3 rounded-md">
                      Apply
                    </DialogClose>
                  </div>
                </DialogContent>
              </Dialog>
            </div>
          </div>
          {!!filteredProducts.length ? (
            <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
              {filteredProducts?.map((product, index) => (
                <ProductList key={index} {...product} />
              ))}
            </div>
          ) : (
            <p className="text-center text-lg">Item not found</p>
          )}
        </div>
      </div>
    </div>
  );
}

export default Products;
