"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useState } from "react";

export const NavItem = ({
  children,
  href,
}: {
  children: React.ReactNode;
  href: string;
}) => {
  const pathname: string = usePathname();
  const [hover, setHover] = useState(false);
  // const showBox = hover && Box;
  return (
    <Link
      href={href}
      className={`${pathname === href ? `text-black after:scale-x-0` : ""} ${
        hover && pathname != href ? "after:scale-x-100" : "after:scale-x-0"
      } text-black relative after:absolute after:w-full after:h-0.5 after:rounded-md after:origin-left after:left-0 after:-bottom-2 after:bg-[#D4A372] duration-300 after:ease-out after:transition-transform`}
      onMouseEnter={() => {
        setHover((prev) => !prev);
      }}
      onMouseLeave={() => {
        setHover((prev) => !prev);
      }}
    >
      {children}
    </Link>
  );
};

// const Box = () => {
//   return (
//     <div className="absolute top-6 left-1/2 -translate-x-1/2 size-20 bg-gray-300"></div>
//   );
// };

export default NavItem;
