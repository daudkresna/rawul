import React from "react";
import DogFactContainer from "../components/dogFactContainer";

const page = async () => {
  type Data = {
    data: FactData[];
  };
  type FactData = {
    id: string;
    type: string;
    attributes: {
      body: string;
    };
  };
  const res = await fetch("https://dogapi.dog/api/v2/facts", {
    cache: "no-cache",
    next: {
      tags: ["fact"],
    },
  });
  const fact: Data = await res.json();
  console.log(fact.data[0].attributes.body);
  return (
    <div className="flex h-[calc(100vh-70px)] items-center justify-center bg-slate-50">
      <DogFactContainer fact={fact.data[0].attributes.body} />
    </div>
  );
};

export default page;
