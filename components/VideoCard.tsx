type Props = {
  title: string;
  description: string;
  videosrc: string;
};

import React from "react";

export default function VideoCard({ title, description, videosrc }: Props) {
  return (
    <div className="flex justify-center font-custom text-primary ">
      <div className="rounded-lg shadow-lg bg-white">
        <div className="aspect-w-16 aspect-h-9 sm:w-96 w-screen">
          <iframe src={videosrc} frameBorder="0" allow="fullscreen"></iframe>
        </div>
        <div className="pl-5">
          <h5 className="text-lg font-black mb-2">{title}</h5>
          <p className=" text-sm font-thin mb-4">{description}</p>
        </div>
      </div>
    </div>
  );
}
