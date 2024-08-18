import Image from "next/image";
import heroPng from "../assets/images/hero.png";
import { Icon } from "@iconify/react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import Heading from "@/components/shared/heading";

export default function Home() {
  const curr = 2;
  return (
    <div className="container space-y-20">
      <div className="w-full bg-black">
        <div className="flex items-center justify-around gap-10 p-10">
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
        <div className="max-w-md mx-auto flex items-center justify-center pb-5">
          {[1, 2, 3, 4, 5].map((_, index) => (
            <div
              key={index}
              className={cn(
                "w-4 h-4 rounded-full border-2",
                curr === index
                  ? "border-white bg-primary"
                  : "border-black bg-gray-500"
              )}
            />
          ))}
        </div>
      </div>

      <div className="space-y-5">
        <Heading text="Today’s" />
        <div className="flex justify-between items-center gap-5">
          <div className="flex items-center gap-x-20">
            <h4 className="text-4xl">Flash Sales</h4>
            <div className="flex items-center gap-4">
              <div>
                <p className="text-xs">Days</p>
                <h2 className="text-2xl">03</h2>
              </div>
              <p className="text-primary text-lg font-bold">:</p>
              <div>
                <p className="text-xs">Hours</p>
                <h2 className="text-2xl">23</h2>
              </div>
              <p className="text-primary text-lg font-bold">:</p>
              <div>
                <p className="text-xs">Minutes</p>
                <h2 className="text-2xl">10</h2>
              </div>
              <p className="text-primary text-lg font-bold">:</p>
              <div>
                <p className="text-xs">Seconds</p>
                <h2 className="text-2xl">56</h2>
              </div>
            </div>
          </div>

          <div className="space-x-2">
            <Button size="icon" variant="outline">
              <Icon icon="formkit:arrowleft" />
            </Button>
            <Button size="icon" variant="outline">
              <Icon icon="formkit:arrowright" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
