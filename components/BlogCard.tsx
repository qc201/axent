import React from "react";

type Props = {
  imgsrc: string;
  releaseDate: string;
  title: string;
  location: string;
  content: string;
  pagelink: string;
};

export default function BlogCard({
  imgsrc,
  releaseDate,
  title,
  location,
  content,
  pagelink,
}: Props) {
  const shortStr = content.slice(0, 50);
  return (
    <div className=" group cursor-pointer relative rounded overflow-hidden flex md:flex-row flex-col items-center mx-auto font-custom text-primary py-5">
      <div className="md:ml-10 md:w-3/5 w-screen  overflow-hidden">
        <img
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
          src={imgsrc}
          alt={title}
        />
      </div>
      <div className="md:-ml-20 pl-2 relative md:w-2/5 md:h-80 flex flex-col items-start justify-center bg-white  z-10 shadow-lg font-custom text-primary">
        <p className="text-sm text-thin text-gray-500 text-thin pb-2">
          {releaseDate}
        </p>
        <div className="font-black text-2xl inline-block hover:text-black transition-colors duration-500 ease-in-out mb-2 pb-5">
          {title}
        </div>
        <p className="text-sm text-thin">{location}</p>
        <p className="text-gray-500 text-sm text-thin">{shortStr} ...</p>
      </div>{" "}
    </div>
  );
}
