"use client";
import React from "react";
import { useFormStatus } from "react-dom";

const FormButton = ({ children }: { children: React.ReactNode }) => {
  const { pending } = useFormStatus();
  return (
    <button
      className={`p-2 ${pending ? "border-4 border-gray-400 bg-gray-400" : "border-4 border-[#CCD5AE] bg-transparent text-black duration-300 ease-in-out hover:bg-[#CCD5AE]"} rounded-md`}
      disabled={pending}
      type="submit"
    >
      {pending ? "Loading..." : children}
    </button>
  );
};

export default FormButton;
