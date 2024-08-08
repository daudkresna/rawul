import Link from "next/link";
import React from "react";
import NavItem from "./navItem";

const Navbar = () => {
  return (
    <div className="flex h-[70px] w-full items-center justify-between bg-slate-50 px-8 py-2">
      <div>
        <Link
          href={"/"}
          className="flex items-center justify-center gap-2 text-2xl font-bold"
        >
          Rawul
        </Link>
      </div>
      <div className="w-fit">
        <ul className="flex items-center justify-center gap-8">
          <li>
            <NavItem href="/dogs">Dogs</NavItem>
          </li>
          <li>
            <NavItem href="/facts">Facts</NavItem>
          </li>
        </ul>
      </div>
      <div>
        <button className="rounded-md bg-[#e9edca] px-4 py-2 duration-300 ease-in-out hover:bg-[#CCD5AE]">
          Login
        </button>
      </div>
    </div>
  );
};

export default Navbar;
