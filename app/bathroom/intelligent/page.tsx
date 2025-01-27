'use client'
import { data } from "../../../lib/data"; //all product data in lib
import { ProductInfo } from "@/types/global";
import CollectionCover from "@/components/CollectionCover";
import MaskText from "@/components/MaskText";

export default function Intelligent() {
  // Filter the data where the category is "intelligent"
  const intelligentData = data.filter(
    (d: ProductInfo) => d.category === "intelligent"
  );

  //8 intellygent product in total 01/27/2025
  // category page will have x-axis margin of 40 for computer, 10 for cellphone

  return (
    <div>
      <div className="flex items-center justify-center font-custom bg-fixed bg-intelligentHeader w-screen bg-cover bg-center bg-no-repeat sm:min-h-[1000px] min-h-[600px]">
        <MaskText
          phrases={["Intelligent Toilets & Seats"]}
          className="text-6xl text-white font-extrabold"
        />
      </div>

      image 1-3
      <div className="flex flex-col gap-5 pt-10 mx-10 sm:mx-40">

          <CollectionCover
            imgUrl={intelligentData[0].coverSrc}
            imgAlt={intelligentData[0].imgAlt}
            linkTo="/products/sli/sli5400"
            width={400}
            height={300}
          model={intelligentData[0].name}
          />


          <CollectionCover
            imgUrl={intelligentData[1].coverSrc}
            imgAlt={intelligentData[1].imgAlt}
            linkTo="/products/sli/sli5200"
            width={300}
            height={400}
          model={intelligentData[1].name}
        />
        <CollectionCover
          imgUrl={intelligentData[2].coverSrc}
          imgAlt={intelligentData[2].imgAlt}
          linkTo="/products/sli/sli4000"
          width={400}
          height={300}
          model={intelligentData[2].name}
        />
        <CollectionCover
          imgUrl={intelligentData[3].coverSrc}
          imgAlt={intelligentData[3].imgAlt}
          linkTo="/products/sli/sli4000"
          width={400}
          height={300}
          model={intelligentData[3].name}
        />
        <CollectionCover
          imgUrl={intelligentData[4].coverSrc}
          imgAlt={intelligentData[4].imgAlt}
          linkTo="/products/sli/sli4000"
          width={400}
          height={300}
          model={intelligentData[4].aliases}
        />
        <CollectionCover
          imgUrl={intelligentData[5].coverSrc}
          imgAlt={intelligentData[5].imgAlt}
          linkTo="/products/sli/sli4000"
          width={400}
          height={300}
          model={intelligentData[5].aliases}
        />
        <CollectionCover
          imgUrl={intelligentData[6].coverSrc}
          imgAlt={intelligentData[6].imgAlt}
          linkTo="/products/sli/sli4000"
          width={400}
          height={300}
          model={intelligentData[6].name}
        />
        <CollectionCover
          imgUrl={intelligentData[7].coverSrc}
          imgAlt={intelligentData[7].imgAlt}
            linkTo="/products/sli/sli4000"
            width={400}
            height={300}
          model={intelligentData[7].name}
          />
          <CollectionCover
          imgUrl={intelligentData[8].coverSrc}
          imgAlt={intelligentData[8].imgAlt}
            linkTo="/products/sli/sli4000"
            width={400}
            height={300}
          model={intelligentData[8].name}
          />

      </div>
    </div>
  );
}
