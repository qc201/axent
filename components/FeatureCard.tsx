"use client";
import React from "react";
import Image from "next/image";
import PdfViewer from "./PdfViewer";

type Props = {
    collectionName: string;
    productImgUrl: string;
    productImgAlt: string;
    productImgHeight: number;
    productImgWidth: number;
    dimensions: string;
    weight: string;
    finish: string;
    color: string;
    consumption?: string;
    configurations?: string[];
    sku: string;
};

export default function FeatureCard({
    collectionName,
    productImgUrl,
    productImgAlt,
    productImgHeight,
    productImgWidth,
    dimensions,
    weight,
    finish,
    color,
    sku,
    consumption = "",
    configurations = [],
}: Props) {
    return (
        <div className="flex flex-col pt-10 md:flex-row md:items-start md:px-5 md:pt-20">
            <div className="w-[100vw] md:w-[50vw] flex items-center justify-center">
                <Image
                    src={productImgUrl}
                    alt={productImgAlt}
                    width={productImgWidth}
                    height={productImgHeight}
                    className="object-contain"
                />
            </div>

            <div className="text-lg text-primary font-thin  md:text-xl md:w-1/2 md:ml-20">
                <div className="flex flex-row justify-between pb-10">
                    <PdfViewer pdfUrl="" title="SPECIFICATIONS" />
                    <PdfViewer pdfUrl="" title="USER MANUAL" />
                </div>
                <ul className="list-disc list-inside md:space-y-2">
                    <li className="">SKU: {sku}</li>
                    <li className="">Dimensions: {dimensions}</li>

                    <li className="">Weight: {weight}</li>
                    {collectionName === "SLi Collection" && (
                        <li className="">
                            Material Finish: Vitreous China, ABS Scratch Resistant Lid and
                            Micro Shield
                            <span>
                                <sup>TM</sup>
                            </span>{" "}
                            Antibacterial Glaze.
                        </li>
                    )}
                    {collectionName !== "SLi Collection" && (
                        <li className="">Material Finish: {finish}</li>
                    )}
                    <li className="">Color: {color}</li>
                    {consumption !== "" && (
                        <li className="">Water Consumption: {consumption}</li>
                    )}
                    <hr className="mt-10" />
                    {configurations !== undefined && configurations.length > 0 && (
                        <ul className="grid grid-cols-2 text-sm pt-10 md:pt-0">
                            {configurations.map((item, index) => (
                                <li key={index}>{item}</li>
                            ))}
                        </ul>
                    )}
                </ul>
            </div>
        </div>
    );
}