import React from "react";
import { Icon } from "@iconify/react";

function Service() {
  return (
    <div className="flex items-center gap-10 justify-center flex-col md:flex-row">
      <div className="flex flex-col items-center justify-center gap-2">
        <div className="h-20 w-20 flex justify-center items-center rounded-full border">
          <div className="h-14 w-14 flex justify-center items-center rounded-full bg-primary text-white">
            <Icon icon="carbon:delivery" className="text-2xl" />
          </div>
        </div>
        <div className="text-center space-y-1">
          <h2 className="text-base">FREE AND FAST DELIVERY</h2>
          <p className="text-xs font-light">
            Free delivery for all orders over $140
          </p>
        </div>
      </div>
      <div className="flex flex-col items-center justify-center gap-2">
        <div className="h-20 w-20 flex justify-center items-center rounded-full border">
          <div className="h-14 w-14 flex justify-center items-center rounded-full bg-primary text-white">
            <Icon icon="teenyicons:headset-outline" className="text-2xl" />
          </div>
        </div>
        <div className="text-center space-y-1">
          <h2 className="text-base">24/7 CUSTOMER SERVICE</h2>
          <p className="text-xs font-light">Friendly 24/7 customer support</p>
        </div>
      </div>
      <div className="flex flex-col items-center justify-center gap-2">
        <div className="h-20 w-20 flex justify-center items-center rounded-full border">
          <div className="h-14 w-14 flex justify-center items-center rounded-full bg-primary text-white">
            <Icon icon="gala:secure" className="text-2xl" />
          </div>
        </div>
        <div className="text-center space-y-1">
          <h2 className="text-base">MONEY BACK GUARANTEE</h2>
          <p className="text-xs font-light">We reurn money within 30 days</p>
        </div>
      </div>
    </div>
  );
}

export default Service;
