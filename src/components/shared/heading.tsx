import React from "react";

function Heading({ text }: { text: string }) {
  return (
    <div className="flex items-center gap-4 text-primary font-semibold">
      <div className="h-8 w-5 rounded-sm bg-primary" />
      <h6>{text}</h6>
    </div>
  );
}

export default Heading;
