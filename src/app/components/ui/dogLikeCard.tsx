"use client";
import Image from "next/image";
import React, { useState } from "react";
import LikeButton from "./likeButton";

const DogLikeCard = ({ src }: { src: string }) => {
  const [dogImage, setDogImage] = useState(src);
  const [like, setLike] = useState(false);
  const handleClick = (): void => {
    console.log(like);
    setLike(!like);
  };
  return (
    <div className="relative h-full w-full">
      <Image src={src} alt={src} fill quality={100} />
      <div className="absolute bottom-2 right-2 rounded-full bg-white p-2">
        <button
          className={`${like ? "grayscale-0" : "grayscale"} duration-100 ease-in`}
          onClick={handleClick}
        >
          ❤️
        </button>
      </div>
    </div>
  );
};

export default DogLikeCard;
