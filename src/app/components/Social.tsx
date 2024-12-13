import { client } from "@/sanity/lib/client";
import React from "react";
import { BiEnvelope } from "react-icons/bi";
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";
import { PiPhone } from "react-icons/pi";

interface dataT {
  email: string;
  phone: string;
}
const Social = async () => {
  const query = `*[_type == 'header']{
  email,
    phone,
}[0]`;

  const data: dataT = await client.fetch(query);

  return (
    <main className="bg-mainColor w-full h-[65px] py-2 max-md:h-auto max-md:flex-wrap max-md:justify-center  text-white flex justify-between items-center px-40 max-md:px-4">
      <div className="leftSide flex">
        <div className="cont flex items-center">
          <BiEnvelope />
          <span className="ml-1">{data.email}</span>
        </div>
        <div className="cont flex items-center ml-4">
          <PiPhone />
          <span className="ml-1">{data.phone}</span>
        </div>
      </div>
      <div className="righttSide  flex">
        <div className="social flex max-md:flex-col max-md:gap-3 justify-center items-center">
          <div className="flex justify-center items-center">
            <span>Follow us:</span>
            <span className="flex gap-3 ml-2">
              <FaFacebook className="cursor-pointer hover:text-hoverColor hover:scale-125" />
              <FaTwitter className="cursor-pointer hover:text-hoverColor hover:scale-125" />
              <FaLinkedin className="cursor-pointer hover:text-hoverColor hover:scale-125" />
              <FaInstagram className="cursor-pointer hover:text-hoverColor hover:scale-125" />
            </span>
          </div>
          <div className="logReg text-hoverColor">
            <span className=" ml-5 max-md:text-[20px] cursor-pointer">
              Login / Register
            </span>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Social;
