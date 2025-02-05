"use client";
import React from "react";
import Image from "next/image";
import PdfViewer from "./PdfViewer";

type Props = {
  collectionName?: string;
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
  overFlow?: string;
  drainageMode?: string;
  spec: string;
  manual: string;
  install: string;
  unavailable?: boolean;
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
  overFlow,
  drainageMode,
  consumption = "",
  configurations = [],
  spec,
  manual,
  install,
  unavailable,
}: Props) {
  return (
    <div className="flex flex-col pt-10 md:flex-row md:items-start md:px-5 md:pt-20">
      <div className="w-[100vw] md:w-[50vw] flex items-center justify-center">
        <div className="relative">
          {unavailable && <span className="bg-alarm z-20 text-white px-2 py-1 absolute top-0 right-0 text-xs  md:tex t-sm rounded-bl-md font-custom">coming soon</span>
          }
        <Image
          src={productImgUrl}
          alt={productImgAlt}
          width={productImgWidth}
          height={productImgHeight}
          className="object-contain"
        />
        </div></div>

      <div className="text-lg text-primary font-thin  md:text-xl md:w-1/2 md:ml-20">
        <div className="flex flex-col justify-between pb-10">
          <PdfViewer pdfUrl={spec} title="SPECIFICATIONS" />
          <PdfViewer pdfUrl={manual} title="USER MANUAL" />
          <PdfViewer pdfUrl={install} title="INSTALLATION INSTRUCTIONS" />
        </div>
        <ul className="list-disc list-inside md:space-y-2">
          <li className="">SKU: {sku}</li>
          <li className="">Dimensions: {dimensions}</li>

          {weight !== "?" && <li className="">Weight: {weight}</li>}
          {overFlow !== undefined && (
            <li className="">Overflow Hole: {overFlow}</li>
          )}
          {drainageMode !== undefined && (
            <li className="">Drainage Mode: {drainageMode}</li>
          )}

          <li className="">Material Finish: {finish}</li>

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
