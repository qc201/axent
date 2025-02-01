import React from "react";
import Link from "next/link";

type Props = {
  name: string;
  imgUrl: string;
  linkTo: string;
  sku: string;
};

export default function InfoCard({ name, imgUrl, linkTo, sku }: Props) {
  return (
    <div className="group text-primary">
      <div className="cursor-pointer relative flex flex-col my-6 bg-white shadow-sm sm:w-60 w-40 group-hover:shadow-2xl transition-shadow duration-300 h-full justify-between">
        <div>
          <div className="relative h-48 m-2.5 overflow-hidden text-white">
            <img
              className="transition-transform duration-500 ease-[cubic-bezier(0.25, 1, 0.5, 1)] transform group-hover:scale-110"
              src={imgUrl}
              alt={sku}
            />
          </div>
          <div className="px-4">
            <h6 className="mb-0  group-hover:text-black sm:text-xl text-sm font-semibold">
              {name}
            </h6>
            <p className=" group-hover:text-black leading-normal sm:text-xl text-xs font-thin">
              {sku}
            </p>
          </div>
        </div>
        <div className="visit px-4 pb-4 pt-0 mt-0 flex justify-center items-center">
          <Link
            href={linkTo}
            className="rounded-md bg-primary py-2 px-4 border border-transparent text-center text-white transition-all shadow-md group-hover:shadow-lg focus:bg-slate-700 focus:shadow-none active:bg-slate-700 group-hover:bg-slate-700 active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none sm:text-sm text-xs font-semibold "
            type="button"
          >
            Learn more
          </Link>
        </div>
      </div>
    </div>
  );
}
