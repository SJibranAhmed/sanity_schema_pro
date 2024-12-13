import * as React from "react";

import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { GrLanguage } from "react-icons/gr";
import { BsGraphUpArrow } from "react-icons/bs";
import { SlBookOpen } from "react-icons/sl";
import { CgPerformance } from "react-icons/cg";
import { ImProfile } from "react-icons/im";

export default function CarouselDemo() {
  
const items = [
    { name: "language", icon: <GrLanguage size={50} />, color: "#4A90E2" },
    { name: "business", icon: <BsGraphUpArrow size={50} />, color: "#50E3C2" },
    { name: "lecture", icon: <SlBookOpen size={50} />, color: "#F5A623" },
    { name: "Performance", icon: <CgPerformance size={50} />, color: "#D0021B" },
    { name: "Profile", icon: <ImProfile size={50} />, color: "#8B572A" },
  ];
  return (
    <Carousel className="w-[500px] max-md:w-[240px] flex items-center">
      <CarouselContent>
        {items.map((data, index) => (
          <CarouselItem key={index}>
            <div className="p-1 max-md:pl-5">
              <Card className="flex justify-center text-white" style={{ backgroundColor: data.color }}>
                <CardContent className="flex flex-col aspect-square h-[130px]  items-center justify-center p-6">
                    {data.icon}
                    <h1>{data.name}</h1>
  
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
}
