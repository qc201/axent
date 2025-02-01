import React from "react";
import PdfViewer from "./PdfViewer";

export default function DocCard() {
  return (
    <div className="w-64 shadow-md duration-300 hover:shadow-xl">
      <img
        className="rounded-lg h-32 w-full object-contain hover:scale-105 duration-1000"
        src="/products_img/infinity-sq.png"
      />

      <div className="flex flex-col text-primary group-hover:text-black capitalize justify-center items-center">
        <h2 className="text-lg font-black">handbag</h2>
        <h3 className="text-sm font-thin">price</h3>
      </div>

      <div className="flex flex-col">
        <PdfViewer pdfUrl={"123"} title={"Specification sheet"} />
        <PdfViewer pdfUrl={"d"} title={"User manual"} />
        <PdfViewer pdfUrl={""} title={"Installation instruction"} />
      </div>
    </div>
  );
}
