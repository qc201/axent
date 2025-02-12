import Link from "next/link";
import React from "react";

type Props = {
  imgsrc: string;
  title: string;
  subTitle: string;
  intro: string;
  imgalt: string;
  pagelink: string;
  available: boolean;
};
export default function RevealCard({
  imgsrc,
  title,
  imgalt,
  pagelink,
  subTitle,
  intro,
  available,
}: Props) {
  return (
    <Link href={pagelink}>
      <div className="font-custom relative h-96 md:w-96 sm:w-64 w-screen md:mt-10 sm:mt-5 md:px-5 mx-auto  py-8 group bg-gray-200 overflow-hidden shadow-xl">
        {!available && (
          <div className="absolute right-0 top-0 h-16 w-16 z-20">
            <div className="absolute transform rotate-45 bg-primary text-center text-white  py-1 right-[-35px] top-[32px] w-[170px] font-custom font-thin">
              coming soon
            </div>
          </div>
        )}
        <img
          src={imgsrc}
          alt={imgalt}
          className="absolute w-full h-full inset-0 object-cover"
        />
        <div className="absolute inset-0 w-full h-full bg-black bg-opacity-0 transition duration-500 backdrop-filter group-hover:bg-opacity-20 group-hover:backdrop-blur"></div>
        <div className="absolute inset-x-5 text-white">
          <h2 className="text-xl font-black mb-2">{title}</h2>
          <p className="text-sm font-thin uppercase tracking-wider mb-6">
            {subTitle}
          </p>
          <p className="hidden group-hover:block text-sm font-thin">{intro}</p>
        </div>
        <div className="absolute inset-x-5 bottom-8 py-3 rounded-xs font-black bg-white shadow-lg md:hidden transition duration-200 hover:bg-gray-300 group-hover:block">
          <div className="flex flex-row items-center justify-center">
            Learn more
          </div>
        </div>
      </div>
    </Link>
  );
}
