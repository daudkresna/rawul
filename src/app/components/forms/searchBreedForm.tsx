"use client";

import { useRouter } from "next/navigation";
import React, { useEffect, useRef, useState } from "react";
import { ReactSearchAutocomplete } from "react-search-autocomplete";

type Breed = {
  id: number;
  name: string;
};

const SearchBreedForm = ({ dogList }: { dogList: string[] }) => {
  const router = useRouter();
  const inpuRef = useRef<HTMLInputElement>(null);
  const [breed, setBreed] = useState<string>("");
  const [breedList, setBreedList] = useState<string[]>(dogList);
  const [showBreedList, setShowBreedList] = useState<boolean>(false);
  const toPascalCase = (str: string): string =>
    (str.match(/[a-zA-Z0-9]+/g) || [])
      .map((w) => `${w.charAt(0).toUpperCase()}${w.slice(1)}`)
      .join("");

  useEffect(() => {
    if (breed != "") {
      let newBreedList = dogList.filter((item) => item.includes(breed));
      if (newBreedList.length > 0 && !newBreedList.includes(breed)) {
        setBreedList(newBreedList);
        setShowBreedList(true);
      } else {
        setShowBreedList(false);
      }
    }
    return () => {
      setBreedList(dogList);
    };
  }, [breed]);

  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setBreed(e.target.value);
  };
  return (
    <form
      autoComplete="off"
      action=""
      className="flex flex-col gap-8"
      onSubmit={(e: React.FormEvent) => {
        e.preventDefault();
        router.push(`/dogs/${breed.toLowerCase()}`);
      }}
    >
      <div className="relative">
        <input
          type="text"
          name="search"
          id="search"
          placeholder="Cari Ras Favoritmu"
          className="bg-gray-300 p-2"
          onChange={handleOnChange}
          value={breed}
          ref={inpuRef}
        />
        <div
          className={`absolute -bottom-0 z-10 w-full translate-y-full bg-gray-300 ${showBreedList ? "static" : "hidden"}`}
        >
          <ul className="max-h-20 overflow-scroll">
            {breedList.map((breed, index) => (
              <li
                key={index}
                onClick={() => {
                  setBreed(breed);
                  setBreedList([]);
                  inpuRef.current?.focus();
                }}
              >
                {toPascalCase(breed)}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </form>
  );
};

export default SearchBreedForm;
