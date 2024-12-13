import { Button } from "@/components/ui/button";
import Image from "next/image";
import React from "react";
import Platform from "./Platform";
import { client } from "@/sanity/lib/client";
import { urlFor } from "@/sanity/lib/image";

interface dataType {
  heading: string;
  paragraph: string;
  image: string; // Assuming it's a URL or an image reference
  leftButton: string;
  rightButton: string;
}

const Content = async () => {
  const query = `*[_type == 'content']{
    heading,
    paragraph,
    image,
    leftButton,
    rightButton,
  }[0]`;

  // Fetch data
  const data: dataType = await client.fetch(query);


  return (
    <section className="bg-gray-300 w-full h-[85vh] relative">
      <Image
        src={urlFor(data.image).url()}
        alt=""
        fill
        objectFit="cover"
        className="opacity-[0.9]"
      />
      <div className="absolute top-0 left-0 w-full h-full bg-black opacity-[0.4]"></div>

      <div
        className="absolute top-20 max-md:flex max-md:items-center max-md:flex-col max-md:p-4 text-white left-40 max-md:left-0 w-[600px] max-md:w-auto py-3 h-[50vh]"
       
      >
        <h1 className="text-6xl font-bold leading-[70px] max-md:text-4xl max-md:text-center">
          {data.heading}
        </h1>
        <p className="mt-5 max-md:text-center">
          {data.paragraph}
        </p>
        <div
          className="btn flex max-md:flex-col max-md:w-full gap-5 mt-10"
          
        >
          <Button
            className="capitalize rounded-sm px-8 py-6 text-[18px] font-normal"
            variant={"secondary"}
          >
            {data.leftButton}
          </Button>
          <Button
            className="capitalize rounded-sm px-8 py-6 text-[18px] font-normal"
            variant={"secondary"}
          >
            {data.rightButton}
          </Button>
        </div>
      </div>

      <div className="platform absolute left-1/2 transform -translate-x-1/2 w-[70%] max-md:w-[95%] max-md:-bottom-72 -bottom-24">
        <Platform />
      </div>
    </section>
  );
};

export default Content;
