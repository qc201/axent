"use client";
import React from "react";

interface PdfViewerProps {
  pdfUrl: string;
  title: string;
  fontSize?: string;
  iconSize?: string;
}

const PdfViewer: React.FC<PdfViewerProps> = ({
  pdfUrl,
  title,
  fontSize = "text-xs",
  iconSize = "20",
}) => {
  const openPdfViewer = () => {
    window.open(pdfUrl, "_blank");
  };

  return (
    pdfUrl !== "" && (
      <div className="group p-1">
        <div className="flex bg-primary items-center justify-center">
          <button
            className={`relative text-white font-custom font-black py-1 px-2 transition-transform duration-1000 ${fontSize}`}
            onClick={openPdfViewer}
          >
            {title}{" "}
            <span className="sm:opacity-30 sm:group-hover:opacity-100 duration-300 inline-block ">
              <svg
                width={iconSize}
                height={iconSize}
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className={`stroke-white`}
              >
                <path
                  d="M5 12V6C5 5.44772 5.44772 5 6 5H18C18.5523 5 19 5.44772 19 6V18C19 18.5523 18.5523 19 18 19H12M8.11111 12H12M12 12V15.8889M12 12L5 19"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </span>
          </button>
        </div>
      </div>
    )
  );
};

export default PdfViewer;
