import React from "react";
import { refData } from "@/lib/refData";
import ReferenceCard from "@/components/ReferenceCard";

export default function Reference() {
  return (
    <div className="pt-16 sm:px-20 grid sm:grid-cols-2 sm:gap-5 grid-cols-1">
      {refData.map((info, index) => (
        <ReferenceCard
          key={index}
          imgsrc={info.imgsrc[0]}
          title={info.title}
          imgalt={info.title}
          description={info.description}
          pagelink={info.pagelink}
          category={info.category}
          location={info.location}
        />
      ))}
    </div>
  );
}
