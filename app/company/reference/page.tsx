"use client";
import React from "react";
import { refData } from "@/lib/refData";
import ReferenceCard from "@/components/ReferenceCard";
import MaskText from "@/components/MaskText";

export default function Reference() {
  return (
    <div className="pt-40 sm:px-40 ">
      <div className="flex items-center justify-center">
        <MaskText
          phrases={["References"]}
          className="pb-10 sm:text-6xl text-3xl text-primary font-extrabold items-center justify-center"
        />
      </div>

      <div className="grid sm:grid-cols-2 sm:gap-5 grid-cols-1">
        {refData.map((info, index) => (
          <ReferenceCard
            key={index}
            imgsrc={info.imgsrc[0]}
            title={info.title}
            imgalt={info.title}
            description={info.description[0]}
            pagelink={info.pagelink}
            category={info.category}
            location={info.location}
          />
        ))}
      </div>
    </div>
  );
}
