"use client";
import React from "react";
import { refData } from "@/lib/refData";
import Carousel from "@/components/Carousel";
import MaskText from "@/components/MaskText";

export default function HaitangBayMangroveResort() {
  const data = refData.find(d => d.id === 2)!;
  return (
    <div className="pt-16 font-custom text-primary">
      <div className="flex flex-col items-center justify-center">
        <MaskText
          phrases={[data.title]}
          className="pt-10 pb-5 sm:text-6xl text-3xl text-primary font-extrabold items-center justify-center"
        />
        <div className="font-thin text-lg">
          {data.location} {" | "} {data.category}
        </div>
      </div>

      <div className="pt-16 sm:px-40">
        <Carousel images={data.imgsrc} />
      </div>

      <div className="sm:px-40 px-5 py-10">
        <div className="font-black text-lg">Description</div>
        {data.description.map((p, index) => (
          <div key={index} className="font-thin text-lg"><div className="font-thin text-lg">{p}</div></div>
        ))}
      </div>
      <div className="sm:px-40 px-5 pb-10">
        <div className="font-black text-lg">Products used</div>
        {data.products.map((p, index) => (
          <div key={index} className="font-thin text-lg">{p}</div>
        ))}
      </div>
    </div>
  );
}
