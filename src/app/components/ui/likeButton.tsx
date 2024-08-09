"use client";
import React, { useState } from "react";

const LikeButton = () => {
  const [like, setLike] = useState<boolean>(false);
  const handleClick = (): void => {
    setLike((prev) => !prev);
  };
  return (
    <div className="absolute bottom-2 right-2 rounded-full bg-white p-2">
      <button
        className={`${like ? "grayscale-0" : "grayscale"} duration-100 ease-in`}
        onClick={handleClick}
      >
        ❤️
      </button>
    </div>
  );
};

export default LikeButton;
