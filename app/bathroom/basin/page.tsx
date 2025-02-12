"use client";
import { data } from "../../../lib/data"; //all product data in lib
import { ProductInfo } from "@/types/global";
import MaskText from "@/components/MaskText";
import InfoCard from "@/components/InfoCard";

export default function Basin() {
  // Filter the data where the category is "regular"

  const basinData = data.filter((d: ProductInfo) => d.category === "basin");

  //4 basin and seat product in total 01/27/2025
  // category page will have x-axis margin of 40 for computer, 10 for cellphone

  return (
    <div>
      <div className="flex items-center justify-center font-custom sm:bg-fixed bg-basinHeader w-screen bg-cover bg-right sm:bg-center  bg-no-repeat sm:min-h-[1000px] min-h-[600px]">
        <MaskText
          phrases={["Washbasins & Vanities"]}
          className="text-6xl text-white font-extrabold"
        />
      </div>
      <div className="grid md:grid-cols-4 grid-cols-2  gap-6 md:px-20 sm:px-10 px-5 py-10">
        {/* one c above counter sq*/}
        <InfoCard
          name={basinData[0].name}
          imgUrl={basinData[0].coverSrc}
          linkTo="/bathroom/basin/one-square"
          sku={basinData[0].sku}
        />
        {/* one c above counter rd */}
        <InfoCard
          name={basinData[1].name}
          imgUrl={basinData[1].coverSrc}
          linkTo="/bathroom/basin/one-round"
          sku={basinData[1].sku}
        />
        {/* one c above counter rect  */}
        <InfoCard
          name={basinData[2].name}
          imgUrl={basinData[2].coverSrc}
          linkTo="/bathroom/basin/one-rect"
          sku={basinData[2].sku}
        />
        {/* annie */}
        <InfoCard
          name={basinData[3].name}
          imgUrl={basinData[3].coverSrc}
          linkTo="/bathroom/basin/annie"
          sku={basinData[3].sku}
        />
      </div>
    </div>
  );
}
