import Image from "next/image";
import heroPng from "../assets/images/hero.png";
import { Icon } from "@iconify/react";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div className="container">
      <div className="w-full bg-black flex items-center justify-around gap-10 p-10">
        <div className="text-white space-y-5">
          <div className="flex items-center gap-x-5 text-5xl">
            <Icon icon="mdi:apple" />
            <h6>iPhone 14 Series</h6>
          </div>
          <h4 className="text-7xl font-semibold">
            Up to 10% <br /> off Voucher
          </h4>
          <Button>
            Shop Now <Icon icon="formkit:arrowright" />
          </Button>
        </div>
        <Image src={heroPng} alt="" />
      </div>
    </div>
  );
}
