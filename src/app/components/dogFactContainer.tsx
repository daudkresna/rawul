import React, { useEffect, useState } from "react";
import FormButton from "./ui/formButton";
import { getFact } from "../actions/actions";

const DogFactContainer = ({ fact }: { fact: string }) => {
  // interface Fact {
  //   fact: string;
  //   status: number;
  // }
  // const [dogFact, setDogFact] = useState<Fact>({ fact: "", status: 0 });

  // useEffect(() => {
  //   fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/dog-fact`).then((res) => {
  //     res.json().then((data) => {
  //       setDogFact(data);
  //     });
  //   });
  // }, []);

  // function handleClick() {
  //   fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/dog-fact`).then((res) => {
  //     res.json().then((data) => {
  //       setDogFact(data);
  //     });
  //   });
  // }
  console.log(fact);
  return (
    <>
      <div className="flex h-3/4 w-3/4 flex-col items-center justify-around gap-4 bg-white p-6 shadow-lg">
        <div className="h-1/2">
          <h3>{fact}</h3>
        </div>
        <form action={getFact}>
          <FormButton>Get New Facts</FormButton>
        </form>
      </div>
    </>
  );
};

export default DogFactContainer;
