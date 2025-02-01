"use client";
import { data } from "../../../lib/data"; //all product data in lib
import { ProductInfo } from "@/types/global";
import MaskText from "@/components/MaskText";
import ProductCover from "@/components/ProductCover";

export default function Regular() {
  // Filter the data where the category is "regular"

  const regularData = data.filter((d: ProductInfo) => d.category === "regular");

  //5 regular product in total 01/27/2025
  // category page will have x-axis margin of 40 for computer, 10 for cellphone

  return (
    <div>
      <div className="flex items-center justify-center font-custom bg-fixed bg-regularHeader w-screen bg-cover sm:bg-center bg-right-bottom bg-no-repeat sm:min-h-[1000px] min-h-[600px]">
        <MaskText
          phrases={["Toilets"]}
          className="text-6xl text-white font-extrabold"
        />
      </div>

      <div className="sm:px-40 px-10 flex flex-row flex-wrap min-h-[400px] items-center justify-center">

        {/* primus */}
        <div className="sm:h-[600px] h-[300px] flex flex-col items-center justify-between p-10">
          <ProductCover
          imgUrl={regularData[0].coverSrc}
          imgAlt={regularData[0].imgAlt}
          linkTo="/bathroom/regular/primus"
            width={500}
          height={500}
          model={regularData[0].name}
            className="w-full h-full"
            sku={regularData[0].sku}
        />
        </div>

        {/* stella */}
        <div className="sm:h-[600px] h-[300px] flex flex-col items-center justify-between p-10">
          <ProductCover
            imgUrl={regularData[3].coverSrc}
            imgAlt={regularData[3].imgAlt}
            linkTo="/bathroom/regular/stella"
            width={500}
            height={500}
            model={regularData[3].name}
            sku={regularData[3].sku}
          /></div>

        {/* peninsula */}
        <div className="sm:h-[600px] h-[300px] flex flex-col items-center justify-between p-10">
          <ProductCover
            imgUrl={regularData[1].coverSrc}
            imgAlt={regularData[1].imgAlt}
            linkTo="/bathroom/regular/peninsula"
            width={500}
            height={500}
            model={regularData[1].name}
            sku={regularData[1].sku}
          /></div>

          {/* alton */}
        <div className="sm:h-[600px] h-[300px] flex flex-col items-center justify-between p-10">
          <ProductCover
            imgUrl={regularData[2].coverSrc}
            imgAlt={regularData[2].imgAlt}
            linkTo="/bathroom/regular/alton"
            width={500}
            height={500}
            model={regularData[2].name}
            sku={regularData[2].sku}
          /></div>
        {/* reuss */}
        <div className="sm:h-[600px] h-[300px] flex flex-col items-center justify-between p-10">
          <ProductCover
            imgUrl={regularData[4].coverSrc}
            imgAlt={regularData[4].imgAlt}
            linkTo="/bathroom/regular/reuss"
            width={500}
            height={500}
            model={regularData[4].name}
            sku={regularData[4].sku}
          /></div>
      </div>
    </div>
  );
}
