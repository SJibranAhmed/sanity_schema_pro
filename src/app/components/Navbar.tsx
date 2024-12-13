import React from "react";
import Social from "./Social"; // Component to display social media links/icons
import { BiMenu, BiSearch, BiShoppingBag } from "react-icons/bi"; // Icons for menu, search, and shopping bag
import Image from "next/image"; // Next.js optimized image component

const Navbar = () => {
  return (
    <header>
      {/* Social media bar at the top */}
      <Social />
      {/* Navigation bar */}
      <nav className="flex px-40 max-md:px-2 items-center justify-between py-6 border-b-2">
        {/* Hamburger menu icon for mobile view */}
        <div className="hidden max-md:flex">
          <BiMenu size={30} />
        </div>

        {/* Logo section */}
        <div className="logo flex gap-3 justify-center items-center">
          {/* Company logo */}
          <Image src={"/logo2.png"} alt="Company Logo" width={50} height={40} />
          {/* Company name */}
          <h1 className="uppercase text-3xl font-medium">edubin</h1>
        </div>

        {/* Navigation links and action icons */}
        <div className="flex">
          {/* Navigation links for desktop view */}
          <ul className="flex gap-6 px-3 uppercase max-md:hidden">
            {/* Individual navigation items */}
            <li className="cursor-pointer hover:text-hoverColor focus:bg-hoverColor">
              home
            </li>
            <li className="cursor-pointer hover:text-hoverColor">pages</li>
            <li className="cursor-pointer hover:text-hoverColor">courses</li>
            <li className="cursor-pointer hover:text-hoverColor">events</li>
            <li className="cursor-pointer hover:text-hoverColor">teachers</li>
            <li className="cursor-pointer hover:text-hoverColor">blogs</li>
            <li className="cursor-pointer hover:text-hoverColor">shop</li>
            <li className="cursor-pointer hover:text-hoverColor">contact</li>
          </ul>

          {/* Action icons: search and shopping bag */}
          <div className="srch flex w-[70px] gap-3 justify-center">
            <BiSearch size={25} className="hover:text-hoverColor" />
            <BiShoppingBag size={25} className="hover:text-hoverColor" />
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
