"use client";
import BreadcrumbCard from "@/components/shared/Breadcrumb";
import React from "react";
import { OUR_PRODUCTS } from "../page";
import ProductList from "@/components/shared/product-list";
import { Button } from "@/components/ui/button";
import { Icon } from "@iconify/react";
import { Form } from "@/components/ui/form";
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
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

function Products() {
  const form = useForm();

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
              <RadioGroup defaultValue="all">
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="all" id="r1" />
                  <Label htmlFor="r1">Show all</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="with_discount" id="r2" />
                  <Label htmlFor="r2">With discount</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="without_discount" id="r3" />
                  <Label htmlFor="r3">Without discount</Label>
                </div>
              </RadioGroup>

              <h2>Rating</h2>
              <RadioGroup>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="four_above" id="r1" />
                  <Ratings rating={4} size={15} />
                  <Label htmlFor="r1">& above</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="three_above" id="r2" />
                  <Ratings rating={3} size={15} />
                  <Label htmlFor="r2">& above</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="two_above" id="r3" />
                  <Ratings rating={2} size={15} />
                  <Label htmlFor="r3">& above</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="one_above" id="r4" />
                  <Ratings rating={1} size={15} />
                  <Label htmlFor="r4">& above</Label>
                </div>
              </RadioGroup>
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

            {/* <Button variant="ghost" size="icon" className="md:hidden">
              <Icon icon="mage:filter" className="text-lg" />
            </Button> */}
            <Dialog>
              <DialogTrigger>
                <Icon icon="mage:filter" className="text-lg" />
              </DialogTrigger>
              <DialogContent className="h-full">
                <div className="space-y-4">
                  <h2 className="text-lg">filters</h2>
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
                      <RadioGroup defaultValue="all">
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="all" id="r1" />
                          <Label htmlFor="r1">Show all</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="with_discount" id="r2" />
                          <Label htmlFor="r2">With discount</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="without_discount" id="r3" />
                          <Label htmlFor="r3">Without discount</Label>
                        </div>
                      </RadioGroup>

                      <h2>Rating</h2>
                      <RadioGroup>
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="four_above" id="r1" />
                          <Ratings rating={4} size={15} />
                          <Label htmlFor="r1">& above</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="three_above" id="r2" />
                          <Ratings rating={3} size={15} />
                          <Label htmlFor="r2">& above</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="two_above" id="r3" />
                          <Ratings rating={2} size={15} />
                          <Label htmlFor="r3">& above</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <RadioGroupItem value="one_above" id="r4" />
                          <Ratings rating={1} size={15} />
                          <Label htmlFor="r4">& above</Label>
                        </div>
                      </RadioGroup>
                    </form>
                  </Form>
                  <Button className="w-1/3">Apply</Button>
                </div>
              </DialogContent>
            </Dialog>
          </div>
          <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
            {OUR_PRODUCTS?.map((product, index) => (
              <ProductList key={index} {...product} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Products;
