"use client";

import DocCard from "@/components/DocCard";
import MaskText from "@/components/MaskText";
import VideoCard from "@/components/VideoCard";

export default function Tutorials() {
  return (
    <div className="pt-16 flex flex-col justify-center items-center">
      <MaskText
        phrases={["AXENT.ONE Intelligent Toilet Video Tutorials"]}
        className="font-custom text-primary sm:text-5xl text-xl font-extrabold py-10"
      />
      <div className="w-fit gap-6 mx-auto grid grid-cols-1 lg:grid-cols-3">
        <VideoCard
          title={"AXENT.ONE"}
          description={"Operation"}
          videosrc={"https://player.vimeo.com/video/1052649259?h=ec02d5770a"}
        />
        <VideoCard
          title={"AXENT.ONE"}
          description={"Service"}
          videosrc={"https://player.vimeo.com/video/1052649246?h=e7a3f784dd"}
        />
        <VideoCard
          title={"AXENT.ONE"}
          description={"App"}
          videosrc={"https://player.vimeo.com/video/1052649242?h=f988653e26"}
        />
        <VideoCard
          title={"AXENT.ONE"}
          description={"Cleaning"}
          videosrc={"https://player.vimeo.com/video/1052649235?h=57266be221"}
        />
        <VideoCard
          title={"AXENT.ONE"}
          description={"Remove seat and lid"}
          videosrc={"https://player.vimeo.com/video/1052649225?h=8095170d76"}
        />
      </div>
    </div>
  );
}
