'use client'
import { data } from "../../../lib/data"; //all product data in lib
import { ProductInfo } from "@/types/global";
import CollectionCover from "@/components/CollectionCover";
import MaskText from "@/components/MaskText";

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
      <div className="flex flex-col gap-5 pt-10 mx-10 sm:mx-60">
        <div className="flex flex-row items-center justify-between">

          <CollectionCover
            imgUrl={basinData[0].coverSrc}
            imgAlt={basinData[0].imgAlt}
            linkTo="/products/sli/sli5400"
            width={1500}
            height={500}
            model={basinData[0].name}
          />
          <CollectionCover
            imgUrl={basinData[1].coverSrc}
            imgAlt={basinData[1].imgAlt}
            linkTo="/products/sli/sli5400"
            width={1500}
            height={500}
            model={basinData[1].name}
          />
        </div>
        <div className="flex flex-row items-center justify-between">
          <CollectionCover
            imgUrl={basinData[2].coverSrc}
            imgAlt={basinData[2].imgAlt}
            linkTo="/products/sli/sli5400"
            width={1500}
            height={500}
            model={basinData[2].name}
          />
          <CollectionCover
            imgUrl={basinData[3].coverSrc}
            imgAlt={basinData[3].imgAlt}
            linkTo="/products/sli/sli5400"
            width={1500}
            height={500}
            model={basinData[3].name}
          /></div>
      </div>



    </div>



  );
}
