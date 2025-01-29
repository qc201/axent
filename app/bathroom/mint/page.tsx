"use client";
import { data } from "../../../lib/data"; //all product data in lib
import { ProductInfo } from "@/types/global";
import CollectionCover from "@/components/CollectionCover";
import MaskText from "@/components/MaskText";

export default function Mint() {
  // Filter the data where the category is "intelligent"
  const mintData = data.filter((d: ProductInfo) => d.category === "mint");
  console.log(mintData.length);
  //8 intellygent product in total 01/27/2025
  // category page will have x-axis margin of 40 for computer, 10 for cellphone

  return (
    <div>
      <div className="font-custom flex items-center justify-center bg-fixed bg-mintHeader w-screen bg-cover bg-center bg-no-repeat sm:min-h-[1000px] min-h-[600px]">
        <MaskText
          phrases={["AXENT-MINT"]}
          className="text-6xl text-white font-extrabold"
        />
      </div>
      <MaskText
        className="flex flex-col gap-1 pt-10 mx-10 sm:mx-20 text-primary font-custom font-thin text-xl"
        phrases={[
          "AXENT-Mint inherits the AXENT Group's philosophy of combining aesthetics with cutting edge technology. ",
          "We cater to the needs of vibrant people in this new era. With a consumer-centric approach,",
          "we tailor high-quality smart home products to allow a refined sense of harmony into daily life.",
        ]}
      />
      <div className="sm:mt-10 font-custom flex items-center justify-center bg-fixed bg-tubGril w-screen bg-cover bg-center bg-no-repeat sm:min-h-[1000px] min-h-[600px]">
        <MaskText
          phrases={["LOHAS Aesthetics"]}
          className="text-6xl text-white font-extrabold"
        />
      </div>
      <div className="flex flex-col">
        <MaskText
          className="w-full flex flex-col sm:items-start sm:justify-start justify-center items-center gap-5 pt-10 mx-10 sm:mx-20 text-primary font-custom font-thin text-xl"
          phrases={[
            "AXENT-MINT embraces LOHAS aesthetics. We are optimistic, inclusive, and eager to explore new ideas. With diverse designs and colorful creativity, we shape a colorful world with AXENT-MINT characteristics. ",
          ]}
        />
        <div className="flex justify-end">
          <div className="sm:w-1/2 w-full">
            <MaskText
              className="gap-5 pt-10  text-primary font-custom font-thin text-xl"
              phrases={[
                "Who says bathroom spaces can only be plain and ordinary?",
                "AXENT-MINT joins hands with international masters to redefine what a fashionable bathroom space is. Designed for ease and comfort, for more interesting living spaces, and for showcasing personal freedom. Let beautiful designs become part of everyday life, and embrace the vogue.",
              ]}
            />
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-5 pt-10 mx-10 sm:mx-60">
        {/* axent-1-c-p */}
        <div className="flex flex-col  gap-10">
          <CollectionCover
            imgUrl={mintData[0].coverSrc}
            imgAlt={mintData[0].imgAlt}
            linkTo="/bathroom/intelligent/one-c-plus"
            width={1500}
            height={500}
            model={mintData[0].name}
          />

          <div className="flex flex-row items-end justify-between gap-1">
            {/* axent-1-p */}
            <CollectionCover
              imgUrl={mintData[1].coverSrc}
              imgAlt={mintData[1].imgAlt}
              linkTo="/bathroom/intelligent/one-plus"
              width={600}
              height={400}
              model={mintData[1].name}
            />
            {/* mint-1 */}
          </div>
        </div>
      </div>
    </div>
  );
}
