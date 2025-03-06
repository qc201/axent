"use client";
import { data } from "../../../lib/data"; //all product data in lib
import { ProductInfo } from "@/types/global";
import MaskText from "@/components/MaskText";
import InfoCard from "@/components/InfoCard";

export default function Bathtub() {
  const tubData = data.filter((d: ProductInfo) => d.category === "tub");

  return (
    <div>
      <div className="flex items-center justify-center font-custom sm:bg-fixed bg-tubHeader w-screen bg-cover bg-right sm:bg-center  bg-no-repeat sm:min-h-[1000px] min-h-[600px]">
        <MaskText
          phrases={["Bathtub"]}
          className="text-6xl text-white font-extrabold"
        />
      </div>
      <div className="grid md:grid-cols-4 grid-cols-2  gap-6 md:px-20 sm:px-10 px-5 py-10">
        {/* mint batik*/}
        <InfoCard
          name={tubData[0].name}
          imgUrl={tubData[0].coverSrc}
          linkTo={tubData[0].linkTo}
          sku={tubData[0].sku}
          unavailable={tubData[0].unavailable}
        />
        {/* novia air bathtub */}
        <InfoCard
          name={tubData[1].name}
          imgUrl={tubData[1].coverSrc}
          linkTo={tubData[1].linkTo}
          sku={tubData[1].sku}
          unavailable={tubData[1].unavailable}
        />
      </div>
    </div>
  );
}
