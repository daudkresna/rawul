import React from "react";

const DogBreedCard = ({ breed }: { breed: string }) => {
  return (
    <div className="flex justify-center bg-white p-2 duration-300 ease-in-out before:w-4 before:bg-transparent hover:-translate-y-5 hover:shadow-md">
      <h1 className="text-lg font-semibold">{breed.toUpperCase()} </h1>
    </div>
  );
};

export default DogBreedCard;
