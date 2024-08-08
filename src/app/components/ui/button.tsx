"use client";
import React from "react";

const Button = ({
  text,
  handleClick,
}: {
  text: string;
  handleClick: () => void;
}) => {
  return (
    <button
      className="bg-blue-300 p-2"
      onClick={async () => await handleClick()}
    >
      {text}
    </button>
  );
};

export default Button;
