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
      <div className="grid sm:grid-cols-4 grid-cols-2  sm:gap-6 gap-2 sm:px-20 px-5 py-10">
        {/* primus */}
        <InfoCard
          name={regularData[0].name}
          imgUrl={regularData[0].coverSrc}
          linkTo="/bathroom/regular/primus"
          sku={regularData[0].sku}
        />

        {/* stella */}
        <InfoCard
          name={regularData[3].name}
          imgUrl={regularData[3].coverSrc}
          linkTo="/bathroom/regular/stella"
          sku={regularData[3].sku}
        />

        {/* peninsula */}
        <InfoCard
          name={regularData[1].name}
          imgUrl={regularData[1].coverSrc}
          linkTo="/bathroom/regular/peninsula"
          sku={regularData[1].sku}
        />

        {/* alton */}
        <InfoCard
          name={regularData[2].name}
          imgUrl={regularData[2].coverSrc}
          linkTo="/bathroom/regular/alton"
          sku={regularData[2].sku}
        />

        {/* reuss */}
        <InfoCard
          name={regularData[4].name}
          imgUrl={regularData[4].coverSrc}
          linkTo="/bathroom/regular/reuss"
          sku={regularData[4].sku}
        />
      </div>
    </div>
  );
}
