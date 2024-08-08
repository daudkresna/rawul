"use client";
import React, { useState } from "react";
import ToolTip from "./tooltip";

export const DogFactText = ({ text }: { text: string }) => {
  const [hover, setHover] = useState<boolean>(false);
  return (
    <h3
      className="text-sm truncate cursor-default"
      onMouseEnter={(state) => {
        setHover(true);
        console.log(hover);
      }}
      onMouseLeave={(state) => {
        setHover(false);
        console.log(hover);
      }}
    >
      {text}

      {/* {hover && <ToolTip text={text} hover={hover} />} */}
      <ToolTip text={text} hover={hover} />
    </h3>
  );
};
