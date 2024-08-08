import SearchBreedForm from "@/app/components/forms/searchBreedForm";
import { getDogBreedImage, getDogImage } from "@/app/libs/helper/getDogByBreed";
import { revalidatePath, revalidateTag } from "next/cache";
import Image from "next/image";
import React from "react";
import FormButton from "../components/ui/formButton";
import LikeButton from "../components/ui/likeButton";

const page = async () => {
  type DogData = {
    message: string;
    status: string;
  };
  const res = await fetch("https://dog.ceo/api/breeds/list/all");
  const breedData: DogData = await res.json();
  const breedList = Object.keys(breedData.message);
  const data: DogData = await getDogImage();
  return (
    <div className="flex h-[calc(100vh-70px)] flex-col items-center justify-center gap-8 bg-slate-50">
      <div className="flex h-3/4 w-3/4 flex-row bg-white p-4 shadow-md">
        <div className="flex h-full w-1/2 flex-col items-center justify-between">
          <SearchBreedForm dogList={breedList} />
          <form
            action={async () => {
              "use server";
              revalidateTag("/dogs");
            }}
          >
            <FormButton>Foto Random</FormButton>
          </form>
        </div>

        <div className="relative h-full w-full">
          <Image src={data.message} alt={data.message} fill quality={100} />
          <LikeButton />
        </div>
      </div>
    </div>
  );
};

export default page;
