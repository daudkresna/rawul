"use client";
import Image from "next/image";
import React, { useState } from "react";

const DogCard = ({ src, label }: { src: string; label: string }) => {
  const [hover, isHover] = useState<boolean>(false);
  return (
    <div
      className="relative h-[200px] w-[200px] bg-blue-50 duration-300 ease-in-out hover:shadow-lg"
      onMouseEnter={() => isHover(true)}
      onMouseLeave={() => isHover(false)}
    >
      <Image
        src={src}
        width={200}
        height={200}
        quality={100}
        className="h-full w-full object-cover object-center"
        alt={label}
      />
      <div
        className={`absolute bottom-0 w-full origin-bottom bg-[#FAF6D7] p-2 duration-300 ease-in-out ${hover ? "scale-y-100" : "scale-y-0"}`}
      >
        <p className="font-xl text-center font-semibold">{label}</p>
      </div>
    </div>
  );
};

export default DogCard;
