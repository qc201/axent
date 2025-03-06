"use client";
import { data } from "../../../lib/data"; //all product data in lib
import { ProductInfo } from "@/types/global";
import MaskText from "@/components/MaskText";
import InfoCard from "@/components/InfoCard";

export default function Regular() {
  // Filter the data where the category is "regular"

  const regularData = data.filter((d: ProductInfo) => d.category === "regular");

  //5 regular product in total 01/27/2025
  // category page will have x-axis margin of 40 for computer, 10 for cellphone

  return (
    <div>
      <div className="flex items-center justify-center font-custom sm:bg-fixed bg-regularHeader w-screen bg-cover bg-center bg-no-repeat sm:min-h-[1000px] min-h-[600px]">
        <MaskText
          phrases={["Toilets"]}
          className="text-6xl text-white font-extrabold"
        />
      </div>
      <div className="grid md:grid-cols-4 grid-cols-2  gap-6 md:px-20 sm:px-10 px-5 py-10">
        {regularData.map((data, index) => (
                    <InfoCard
                      key={data.id}
                      name={data.name}
                      imgUrl={data.coverSrc}
                      linkTo={data.linkTo}
                      sku={data.sku}
                      unavailable={data.unavailable}
                    />
                  ))}
      </div>
    </div>
  );
}
