import Heading from "@/components/shared/heading";
import ProductList from "@/components/shared/product-list";
import { PRODUCTS } from "@/constants/data";
import React from "react";

function RelatedItem() {
  return (
    <div className="space-y-5 pt-10">
      <Heading text="Related Item" />

      <div className="grid grid-cols-1 gap-5 md:grid-cols-4">
        {PRODUCTS?.splice(0, 8).map((product) => (
          <ProductList key={product.id} {...product} />
        ))}
      </div>
    </div>
  );
}

export default RelatedItem;
