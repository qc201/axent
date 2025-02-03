"use client";
import { data } from "../../../lib/data"; //all product data in lib
import { ProductInfo } from "@/types/global";
import CollectionCover from "@/components/CollectionCover";
import MaskText from "@/components/MaskText";
import InfoCard from "@/components/InfoCard";

export default function Intelligent() {
  // Filter the data where the category is "intelligent"
  const intelligentData = data.filter(
    (d: ProductInfo) => d.category === "intelligent"
  );

  // category page will have x-axis margin of 40 for computer, 10 for cellphone

  return (
    <div>
      <div className="flex items-center justify-center font-custom sm:bg-fixed bg-intelligentHeader w-screen bg-cover bg-center bg-no-repeat sm:min-h-[1000px] min-h-[600px]">
        <MaskText
          phrases={["Intelligent Toilets & Seats"]}
          className="text-6xl text-white font-extrabold"
        />
      </div>

      <div className="grid sm:grid-cols-4 grid-cols-2  gap-6 sm:px-20 py-10">
        {intelligentData.map((data, index) => (
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
