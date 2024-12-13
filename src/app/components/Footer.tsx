import React from "react";
import Image from "next/image";

const Footer = () => {
  return (
    // Footer section with background color and height for desktop and mobile views
    <section className="bg-mainColor h-[40vh] max-md:h-[70vh]">
      {/* Footer content positioned at the bottom with responsive alignment */}
      <footer className="text-white relative top-32 max-md:top-80">
        {/* Logo and text container */}
        <div className="logo flex flex-col gap-3 justify-center items-center">
          {/* Company logo */}
          <Image src={"/logo2.png"} alt="Company Logo" width={50} height={40} />
          {/* Company name */}
          <h1 className="uppercase text-3xl font-medium text-hoverColor">edubin</h1>
          {/* Copyright notice */}
          <p className="px-2 text-center">
            Copyright © 2024 Your Company Name. All rights reserved.
            Unauthorized use is prohibited.
          </p>
        </div>
      </footer>
    </section>
  );
};

export default Footer;

