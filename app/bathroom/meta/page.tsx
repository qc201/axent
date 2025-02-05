"use client";
import React from "react";
import PageVideo from "@/components/PageVideo";
import MaskText from "@/components/MaskText";

export default function Meta() {
  //video exceed git limit
  // category page will have x-axis margin of 40 for computer, 10 for cellphone
  return (
    <div className="sm:pt-0 pt-20 min-h-screen">
      <PageVideo
        videoUrl={"https://player.vimeo.com/video/1052181364?h=955ac5b00e"}
      />
      <div className="flex flex-col items-center justify-center">
        <MaskText
          phrases={["AXENT.META"]}
          className="pt-10 sm:text-6xl text-3xl text-primary font-extrabold"
        />
        <MaskText
          phrases={["COMING SOON..."]}
          className="pt-10 sm:text-6xl text-3xl text-primary font-extrabold"
        />
      </div>
    </div>
  );
}
