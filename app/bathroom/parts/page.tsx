"use client";
import { data } from "../../../lib/data"; //all product data in lib
import { ProductInfo } from "@/types/global";
import InfoCard from "@/components/InfoCard";
import MaskText from "@/components/MaskText";

export default function Parts() {
  // Filter the data where the category is "regular"

  const partsData = data.filter((d: ProductInfo) => d.category === "parts");
  // console.log(partsData.length)

  //2 parts product in total 01/27/2025
  // category page will have x-axis margin of 40 for computer, 10 for cellphone

  return (
    <div>
      <div className="flex items-center justify-center font-custom bg-fixed bg-partsHeader w-screen bg-cover bg-center bg-no-repeat sm:min-h-[1000px] min-h-[600px]">
        <MaskText
          phrases={["Parts & Seats"]}
          className="text-6xl text-white font-extrabold"
        />
      </div>
      <div className="grid sm:grid-cols-4 grid-cols-2  gap-6 sm:px-20 py-10">
        {partsData.map((data, index) => (
          <InfoCard
            key={data.name}
            name={data.name}
            imgUrl={data.coverSrc}
            linkTo={data.linkTo}
            sku={data.sku}
          />
        ))}
      </div>
    </div>
  );
}
