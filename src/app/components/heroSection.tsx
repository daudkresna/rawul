import Image from "next/image";
import React from "react";

const HeroSection = () => {
  return (
    <section className="flex h-[calc(100vh-70px)] flex-col items-center justify-center gap-8 overflow-hidden bg-slate-50 px-16 py-8 md:flex-row md:px-24">
      <div className="flex h-1/4 w-full flex-col text-wrap md:-mt-16 md:w-1/2">
        <h1 className="text-2xl font-extrabold text-black sm:text-3xl md:text-5xl md:leading-tight">
          CUTE{" "}
          <span className="text-[#D4A372] underline underline-offset-8">
            DOG PICS AND FACTS
          </span>{" "}
          FOR YOU
        </h1>
        <h3 className="text-gray-400">
          Temukan foto dan fakta anjing kesukaanmu.
        </h3>
      </div>
      <div className="h-1/2 w-full sm:h-3/4 md:h-full md:w-1/2">
        <Image
          src="/hero-dog.jpg"
          alt="Smiling Dog"
          width={500}
          height={500}
          quality={100}
          className="h-full w-full object-cover object-center md:object-cover"
        />
      </div>
    </section>
  );
};

export default HeroSection;
