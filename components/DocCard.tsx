import React from "react";
import PdfViewer from "./PdfViewer";

type Props = {
  name: string;
  imgUrl: string;
  sku: string;
  spec: string;
  install: string;
  manual: string;
};

export default function DocCard({
  name,
  imgUrl,
  sku,
  install,
  spec,
  manual,
}: Props) {
  return (
    <div className="w-64 shadow-md duration-300 hover:shadow-xl">
      <img
        className="rounded-lg h-32 w-full object-contain hover:scale-105 duration-1000"
        src={imgUrl}
        alt={name}
      />

      <div className="flex flex-col text-primary group-hover:text-black capitalize justify-center items-center">
        <h2 className="text-lg font-black">{name}</h2>
        <h3 className="text-sm font-thin">{sku}</h3>
      </div>

      <div className="flex flex-col">
        <PdfViewer pdfUrl={spec} title={"Specification sheet"} />
        <PdfViewer pdfUrl={manual} title={"User manual"} />
        <PdfViewer pdfUrl={install} title={"Installation instruction"} />
      </div>
    </div>
  );
}
