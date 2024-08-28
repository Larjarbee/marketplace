import BreadcrumbCard from "@/components/shared/Breadcrumb";
import React from "react";
import { OUR_PRODUCTS } from "../page";
import ProductList from "@/components/shared/product-list";
import { Button } from "@/components/ui/button";
import { Icon } from "@iconify/react";

function Products() {
  const breadcrumbs = [
    { name: "Home", icon: true },
    { name: "Products", icon: false },
  ];

  return (
    <div className="container py-5 space-y-5">
      <BreadcrumbCard list={breadcrumbs} />

      <div className="flex gap-5">
        <div className="hidden basis-full space-y-4 md:basis-1/5 md:block">
          <div className="border rounded-md p-4">
            <h6>filter</h6>
          </div>
        </div>
        <div className="basis-full space-y-4 md:basis-4/5">
          <div className="flex justify-between items-center">
            <h2 className="text-xl">Casual</h2>
            <Button variant="ghost" size="icon" className="md:hidden">
              <Icon icon="mage:filter" className="text-lg" />
            </Button>
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
