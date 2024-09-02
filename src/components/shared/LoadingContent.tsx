import React from "react";
import { Icon } from "@iconify/react";

export default function LoadingContent() {
  return (
    <div className="flex gap-2 mt-10 items-center justify-center text-4xl h-full w-full">
      <Icon icon="line-md:loading-loop" className="text-2xl" />
    </div>
  );
}
