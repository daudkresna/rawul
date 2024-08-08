import React from "react";
import DogCard from "./ui/dogCard";

const BreedSection = () => {
  type DogImage = {
    key: number;
    label: string;
    url: string;
  };
  const breedSection: DogImage[] = [
    {
      key: 1,
      label: "Bulldog",
      url: "/dogs/bulldog.jpg",
    },
    {
      key: 2,
      label: "Doberman",
      url: "/dogs/doberman.jpg",
    },
    {
      key: 3,
      label: "Husky",
      url: "/dogs/husky.jpg",
    },
    {
      key: 4,
      label: "Chow Chow",
      url: "/dogs/chowchow.jpg",
    },
    {
      key: 5,
      label: "Poodle",
      url: "/dogs/poodle.jpg",
    },
    {
      key: 6,
      label: "Shiba",
      url: "/dogs/shiba.jpg",
    },
    {
      key: 7,
      label: "Chihuahua",
      url: "/dogs/chihuahua.jpg",
    },
    {
      key: 8,
      label: "Corgi",
      url: "/dogs/corgi.jpg",
    },
  ];
  return (
    <div className="overflow-hidden bg-[#CCD5AE] py-8 md:px-16 md:py-8">
      <h1 className="mb-8 block text-center text-4xl font-medium text-white">
        Meet The <span className="font-bold text-[#FEFAE0]">Dogs</span>
      </h1>
      <div className="grid grid-cols-2 items-center justify-center gap-4 text-center sm:grid-cols-3 md:grid-cols-4 md:grid-rows-2">
        {breedSection.map((breed) => (
          <DogCard label={breed.label} src={breed.url} key={breed.key} />
        ))}
      </div>
    </div>
  );
};

export default BreedSection;
