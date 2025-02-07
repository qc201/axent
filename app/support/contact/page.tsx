"use client";

import React from "react";
import MaskText from "@/components/MaskText";
import Image from "next/image";
export default function Contact() {
  return (
    <div className="flex flex-col min-h-screen">
      <div className="flex  flex-grow items-center justify-center font-custom bg-contactHeader w-screen bg-cover sm:bg-center bg-top bg-no-repeat sm:min-h-[300px] min-h-[20vh] sm:bg-fixed">
        <div className=" flex items-center justify-center">
          <MaskText
            phrases={["Contact us"]}
            className="pl-10 sm:text-6xl text-2xl text-white font-extrabold items-center justify-center"
          />
        </div>
      </div>
      <div className="pt-3 flex flex-col items-center justify-center  font-custom bg-white  text-primary sm:text-lg text-sm font-thin min-h-[300px]">
        <div className="flex flex-row items-start justify-center">
          <div className="flex flex-col items-start gap-2">
            <div className="flex flex-row">
              <div className="pl-5">
                For dealer information, please contact us.
              </div>
            </div>
            <div className="flex flex-row">
              {/* <Image
                src="/icons/telephone-signal-svgrepo-com.svg"
                alt="telephone icon"
                width={18}
                height={18}
                loading="eager"
              /> */}
              <div className="pl-5">Tel: 949-250-4576</div>
            </div>
            <div className="flex flex-row">
              {/* <Image
                src="/icons/email-1573-svgrepo-com.svg"
                alt="email icon"
                width={15}
                height={15}
                loading="eager"
              /> */}
              <div className="pl-5">Email: support@axentproducts.com</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
