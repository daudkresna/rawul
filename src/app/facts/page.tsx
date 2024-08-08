import React from "react";
import DogFactContainer from "../components/dogFactContainer";

const page = async () => {
  const res = await fetch("https://dog-api.kinduff.com/api/facts", {
    cache: "no-cache",
    next: {
      tags: ["fact"],
    },
  });
  const fact = await res.json();
  console.log(fact);
  return (
    <div className="flex h-[calc(100vh-70px)] items-center justify-center bg-slate-50">
      <DogFactContainer fact={fact.facts[0]} />
    </div>
  );
};

export default page;
