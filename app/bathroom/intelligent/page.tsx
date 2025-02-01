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

  //8 intellygent product in total 01/27/2025
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
        {/* axent-1-c-p */}
        <InfoCard
          name={intelligentData[0].name}
          imgUrl={intelligentData[0].coverSrc}
          linkTo="/bathroom/intelligent/one-c-plus"
          sku={intelligentData[0].sku}
        />
        {/* axent-1-p */}
        <InfoCard
          name={intelligentData[1].name}
          imgUrl={intelligentData[1].coverSrc}
          linkTo="/bathroom/intelligent/one-plus"
          sku={intelligentData[1].sku}
        />
        {/* mint-1 */}
        <InfoCard
          name={intelligentData[6].name}
          imgUrl={intelligentData[6].coverSrc}
          linkTo="/bathroom/mint/mint-one"
          sku={intelligentData[6].sku}
        />
        {/* image 4 mint-2*/}
        <InfoCard
          name={intelligentData[7].name}
          imgUrl={intelligentData[7].coverSrc}
          linkTo="/bathroom/mint/mint-two"
          sku={intelligentData[7].sku}
        />
        {/* image 5 infinity */}
        <InfoCard
          name={intelligentData[4].name}
          imgUrl={intelligentData[4].coverSrc}
          linkTo="/bathroom/intelligent/infinity"
          sku={intelligentData[4].sku}
        />
        {/* image8-9 seats*/}
        <InfoCard
          name={intelligentData[2].name}
          imgUrl={intelligentData[2].coverSrc}
          linkTo="/bathroom/intelligent/milton"
          sku={intelligentData[2].sku}
        />
        <InfoCard
          name={intelligentData[3].name}
          imgUrl={intelligentData[3].coverSrc}
          linkTo="/bathroom/intelligent/electric-seat"
          sku={intelligentData[3].sku}
        />
      </div>
    </div>
  );
}
