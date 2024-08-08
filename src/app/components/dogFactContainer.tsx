"use client";
import React, { useEffect, useState } from "react";
import { getDogFacts } from "../libs/helper/getDogFacts";

const DogFactContainer = () => {
  interface Fact {
    fact: string;
    status: number;
  }
  const [dogFact, setDogFact] = useState<Fact>({ fact: "", status: 0 });

  useEffect(() => {
    fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/dog-fact`).then((res) => {
      res.json().then((data) => {
        console.log(data);
        setDogFact(data);
      });
    });
  }, []);

  function handleClick() {
    fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/dog-fact`).then((res) => {
      res.json().then((data) => {
        console.log(data);
        setDogFact(data);
      });
    });
  }
  return (
    <>
      <div className="flex flex-col items-center justify-center gap-4">
        {dogFact && <h3>{dogFact.fact}</h3>}
        <button onClick={handleClick}>KLIK GW</button>
      </div>
    </>
  );
};

export default DogFactContainer;
