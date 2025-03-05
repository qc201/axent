import React from "react";
import Link from "next/link";

type Props = {
  name: string;
  imgUrl: string;
  linkTo: string;
  sku: string;
  unavailable?: boolean;
};

export default function InfoCard({
  name,
  imgUrl,
  linkTo,
  sku,
  unavailable,
}: Props) {
  return (
    <div className="group text-primary font-custom h-96">
      {linkTo !== "" ? (
        <Link href={linkTo}>
          <div className="cursor-pointer relative flex flex-col md:my-6 sm:my-2 bg-white shadow-sm md:w-60 sm:w-48 w-40 group-hover:shadow-2xl transition-shadow duration-300 h-96 ">
            {unavailable && (
              <span className="bg-primary z-20 text-white px-2 py-1 absolute top-0 right-0 text-xs  md:tex t-sm rounded-bl-md font-custom">
                coming soon
              </span>
            )}
            <div className="h-3/5">
              <div className="relative m-2.5 overflow-hidden text-white">
                <img
                  className="object-contain w-full h-56 transition-transform  duration-500 ease-[cubic-bezier(0.25, 1, 0.5, 1)] transform group-hover:scale-90"
                  src={imgUrl}
                  alt={sku}
                />
              </div>
            </div>
            <div className="h-2/5 px-4 pb-4 pt-0 mt-0 flex flex-col items-center justify-between">
              <div className="px-4">
                <h6 className="mb-0  group-hover:text-black md:text-lg text-sm font-semibold">
                  {name}
                </h6>
                <p className=" group-hover:text-black leading-normal md:text-sm text-xs font-thin">
                  {sku}
                </p>
              </div>
              <div className="w-full rounded-md bg-primary  py-2 px-4 border border-transparent text-center text-white transition-all shadow-md group-hover:shadow-lg focus:bg-slate-700 focus:shadow-none active:bg-slate-700 group-hover:bg-slate-700 active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none sm:text-sm text-xs font-semibold ">
                Learn more
              </div>
            </div>
          </div>
        </Link>
      ) : (
        <div>
          <div className="cursor-pointer relative flex flex-col md:my-6 sm:my-2 bg-white shadow-sm md:w-60 sm:w-48 w-40 group-hover:shadow-2xl transition-shadow duration-300 h-96">
            {unavailable && (
              <span className="bg-primary z-20 text-white px-2 py-1 absolute top-0 right-0 text-xs  md:tex t-sm rounded-bl-md font-custom">
                coming soon
              </span>
            )}
            <div className="h-3/5 ">
              <div className="relative m-2.5 overflow-hidden text-white">
                <img
                  className="object-contain w-full h-56  transition-transform  duration-500 ease-[cubic-bezier(0.25, 1, 0.5, 1)] transform group-hover:scale-90"
                  src={imgUrl}
                  alt={sku}
                />
              </div>
            </div>
            <div className="h-2/5 px-4 pb-4 pt-0 mt-0 flex flex-col items-center justify-between">
              <div className="px-4">
                <h6 className="mb-0  group-hover:text-black md:text-lg text-sm font-semibold">
                  {name}
                </h6>
                <p className=" group-hover:text-black leading-normal md:text-sm text-xs font-thin">
                  {sku}
                </p>
              </div>
              <div className="w-full rounded-md bg-gray-500  py-2 px-4 border border-transparent text-center text-white transition-all shadow-md group-hover:shadow-lg focus:bg-slate-700 focus:shadow-none active:bg-slate-700 group-hover:bg-slate-700 active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none sm:text-sm text-xs font-semibold ">
                Details Coming Soon
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
