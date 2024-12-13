import React from "react";
import CarouselDemo from "./Carousel";

const Platform = () => {
  return (
    <main className="bg-black/50 px-5 py-8 grid grid-cols-3 gap-2 border">
      {/* Left side: Heading with animation */}
      <div
        className="leftSide col-span-1 max-md:col-span-3"
        
      >
        <h1 className="text-3xl max-md:text-4xl max-md:text-center leading-9 font-bold tracking-wide text-white px-5 max-md:px-0">
          Best platform <br /> to learn <br /> everything
        </h1>
      </div>

      {/* Right side: Carousel */}
      <div className="rightSide ml-16 max-md:ml-0 col-span-2 flex max-md:justify-center max-md:col-span-3">
        <CarouselDemo />
      </div>
    </main>
  );
};

export default Platform;
