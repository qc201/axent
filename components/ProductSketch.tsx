"use client";
import React from "react";
import Image from "next/image";
import MaskText from "./MaskText";

type Prop = {
    title: string;
    subtitle: string;
    description: string;
    sketchImgs: string[];
    note?: string;
};

export default function ProductSketch({
    title,
    subtitle,
    description,
    sketchImgs,
    note = "",
}: Prop) {


    const basisClass =
        sketchImgs.length === 2
            ? "basis-1/2"
            : sketchImgs.length === 3
                ? "basis-1/3"
                : sketchImgs.length === 4
                    ? "basis-1/4"
                    : "basis-full";

    return (

        <div className="bg-white pt-10">
            <div className="relative font-custom">
                <MaskText
                    phrases={[title]}
                    className="text-3xl sm:text-6xl text-primary font-extrabold md:pl-10"
                />
                <MaskText
                    phrases={[subtitle]}
                    className="text-lg sm:text-3xl text-primary font-bold md:pl-10"
                />
            </div>
            <div className="flex flex-row justify-around items-center px-10 md:px-20">
                {sketchImgs.map((imageSrc, index) => (
                    <div key={index} className={`flex justify-center ${basisClass}`}>
                        <Image
                            src={imageSrc}
                            alt={`Image ${index + 1}`}
                            width={1600}
                            height={900}
                            className="w-auto"
                        />
                    </div>
                ))}


            </div>
            {note !== "" && (
                <p className="text-xs text-primary font-thin py-5 flex justify-center md:py-10 ">
                    {note}
                </p>
            )}
            <div className="flex w-full px-1 md:px-5">
                <p className="text-l text-primary font-thin md:text-xl md:pt-10">
                    {description}
                </p>
            </div>
        </div>
    );
}