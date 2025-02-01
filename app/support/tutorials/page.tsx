"use client";

import DocCard from "@/components/DocCard";
import MaskText from "@/components/MaskText";
import { data } from "@/lib/data";

export default function Tutorials() {
  return (
    <div className="pt-16 flex flex-col justify-center items-center">
      <MaskText
        phrases={["DOWNLOAD CENTER"]}
        className="font-custom text-primary sm:text-5xl text-xl font-extrabold py-10"
      />
      <div className="w-fit gap-6 mx-auto grid grid-cols-1 lg:grid-cols-3 sm:grid-cols-2">
        {data.map((d, index) => {
          if (d.specification !== "" || d.install !== "" || d.manual !== "")
            return (
              <DocCard
                key={index}
                name={d.name}
                sku={d.sku}
                imgUrl={d.coverSrc}
                spec={d.specification}
                install={d.install}
                manual={d.manual}
              />
            );
        })}
      </div>
    </div>
  );
}
