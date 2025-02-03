"use client";

import React from "react";
import MaskText from "@/components/MaskText";
import Image from "next/image";
export default function Contact() {
  return (
    <div>
      <div className="flex items-center justify-center font-custom bg-contactHeader w-screen bg-cover bg-center bg-no-repeat sm:min-h-[1000px] min-h-[600px] sm:bg-fixed">
        <MaskText
          phrases={["CONTACT US"]}
          className="sm:text-6xl text-2xl text-white font-extrabold items-center justify-center"
        />
      </div>
      <div className="sm:p-40 flex flex-col items-center justify-center  font-custom bg-white  text-primary sm:text-lg text-sm font-thin min-h-[300px]">
        <div className="flex flex-col items-start gap-2">
          <div className="flex flex-row">
            <Image
              src="/icons/contact-location-svgrepo-com.svg"
              alt="location icon"
              width={20}
              height={20}
              loading="eager"
            />
            <div className="pl-5">3 Musick, Irvine, CA 92618</div>
          </div>
          <div className="flex flex-row">
            <Image
              src="/icons/telephone-signal-svgrepo-com.svg"
              alt="telephone icon"
              width={18}
              height={18}
              loading="eager"
            />
            <div className="pl-5">Telephone: 1-800-769-4857</div>
          </div>
          <div className="flex flex-row">
            <Image
              src="/icons/email-1573-svgrepo-com.svg"
              alt="email icon"
              width={15}
              height={15}
              loading="eager"
            />
            <div className="pl-5"> Email: support@axentproducts.com</div>
          </div>
        </div>
      </div>
    </div>
  );
}
