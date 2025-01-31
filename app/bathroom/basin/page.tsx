'use client'
import { data } from "../../../lib/data"; //all product data in lib
import { ProductInfo } from "@/types/global";
import MaskText from "@/components/MaskText";
import ProductCover from "@/components/ProductCover";

export default function Basin() {
  // Filter the data where the category is "regular"

  const basinData = data.filter(
    (d: ProductInfo) => d.category === "basin"
  );

  //4 basin and seat product in total 01/27/2025
  // category page will have x-axis margin of 40 for computer, 10 for cellphone

  return (
    <div>
      <div className="flex items-center justify-center font-custom bg-fixed bg-basinHeader w-screen bg-cover bg-center bg-no-repeat sm:min-h-[1000px] min-h-[600px]">
        <MaskText
          phrases={["Washbasins & Vanities"]}
          className="text-6xl text-white font-extrabold"
        />
      </div>
      <div className="grid grid-cols-2  gap-6">

        {/* one c above counter sq*/}
        <div className="flex flex-col h-full">
          <ProductCover
            imgUrl={basinData[0].coverSrc}
            imgAlt={basinData[0].imgAlt}
            linkTo="/bathroom/basin/one-square"
            width={500}
            height={500}
            model={basinData[0].name}
            className="w-full h-full"
            sku={basinData[0].sku}
          />
        </div>

        {/* one c above counter rd */}
        <div className="flex flex-col h-full">
          <ProductCover
            imgUrl={basinData[1].coverSrc}
            imgAlt={basinData[1].imgAlt}
            linkTo="/bathroom/basin/one-round"
            width={500}
            height={500}
            model={basinData[1].name}
            sku={basinData[1].sku}
          /></div>

        {/* one c above counter rect  */}
        <div className="flex flex-col h-full">
          <ProductCover
            imgUrl={basinData[2].coverSrc}
            imgAlt={basinData[2].imgAlt}
            linkTo="/bathroom/basin/one-rect"
            width={500}
            height={500}
            model={basinData[2].name}
            sku={basinData[2].sku}
          /></div>

        {/* annie */}
        <div className="flex flex-col h-full">
          <ProductCover
            imgUrl={basinData[3].coverSrc}
            imgAlt={basinData[3].imgAlt}
            linkTo="/bathroom/basin/annie"
            width={500}
            height={500}
            model={basinData[3].name}
            sku={basinData[3].sku}
          /></div>
        {/* reuss */}
      </div>

    </div>



  );
}
