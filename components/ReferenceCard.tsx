import React from "react";
import Link from "next/link";

type Props = {
  imgsrc: string;
  title: string;
  imgalt: string;
  description: string;
  pagelink: string;
  category: string;
  location: string;
};

export default function ReferenceCard({
  imgsrc,
  title,
  imgalt,
  pagelink,
  description,
  category,
  location,
}: Props) {
  const shortStr = description.slice(0, 50);
  return (
    <div className="group relative rounded overflow-hidden flex flex-col justify-center items-center sm:w-96 sm:h-96 mx-auto w-80 h-96 font-custom text-primary ">
      {" "}
      <Link href={pagelink}>
        <div className="sm:w-96 sm:h-80 h-60 overflow-hidden">
          <img
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
            src={imgsrc}
            alt={imgalt}
          />
        </div>
        <div className="relative sm:w-80 w-72 bg-white pt-5 pb-16 sm:-mt-8 -mt-5 z-10 shadow-lg">
          <div className="font-black text-lg inline-block hover:text-black transition-colors duration-500 ease-in-out mb-2">
            {title}
          </div>
          <p className="text-sm text-thin">{location}</p>
          <p className="text-gray-500 text-sm text-thin">{shortStr} ...</p>
          <div className="text-xs text-alarm transition-colors duration-500 ease-in-out">
            | {category}
          </div>
        </div>
      </Link>
    </div>
  );
}
