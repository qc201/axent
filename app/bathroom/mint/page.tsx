"use client";
import { data } from "../../../lib/data"; //all product data in lib
import { ProductInfo } from "@/types/global";
import CollectionCover from "@/components/CollectionCover";
import MaskText from "@/components/MaskText";
import Image from "next/image";

export default function Mint() {
  // Filter the data where the category is "mint" and line is "mint"
  const mintData = data.filter(
    (d: ProductInfo) => d.category === "mint" || d.collection === "mint"
  );

  // category page will have x-axis margin of 40 for computer, 10 for cellphone

  return (
    <div>
      <div className="flex items-center justify-center font-custom bg-mintHeader w-screen bg-cover bg-center bg-no-repeat sm:min-h-[1000px] min-h-[600px] sm:bg-fixed">
        <MaskText
          phrases={["AXENT-MINT"]}
          className="sm:text-6xl text-3xl text-white font-extrabold items-center justify-center"
        />
      </div>
      <MaskText
        className="relative -z-40 flex flex-col pt-10 mx-5 sm:mx-20 text-primary font-custom font-thin sm:text-xl text-lg"
        phrases={[
          "AXENT-Mint inherits the AXENT Group's philosophy of combining aesthetics with cutting edge technology. ",
          "We cater to the needs of vibrant people in this new era. With a consumer-centric approach,",
          "we tailor high-quality smart home products to allow a refined sense of harmony into daily life.",
        ]}
      />
      <div className="flex items-center justify-center font-custom bg-tubGril w-screen bg-cover bg-center bg-no-repeat sm:min-h-[1000px] min-h-[600px] sm:bg-fixed">
        <MaskText
          phrases={["LOHAS Aesthetics"]}
          className="text-6xl text-white font-extrabold"
        />
      </div>

      {/* girl in yellow outfit with toilet  */}
      <div className="bg-toiletGril sm:flex block -z-10 bg-cover sm:bg-fixed  bg-center  bg-no-repeat sm:min-h-[1000px] min-h-[600px]">
        <div className="flex sm:justify-start sm:items-end justify-center items-center">
          <div className="sm:w-1/2 w-full">
            <MaskText
              className="w-full flex flex-col sm:items-start sm:justify-start justify-center items-center gap-5 pt-10  sm:mx-20 text-primary font-custom font-thin sm:text-xl text-lg"
              phrases={[
                "AXENT-MINT embraces LOHAS aesthetics. We are optimistic, inclusive, and eager to explore new ideas. With diverse designs and colorful creativity, we shape a colorful world with AXENT-MINT characteristics. ",
                "Who says bathroom spaces can only be plain and ordinary?",
                "AXENT-MINT joins hands with international masters to redefine what a fashionable bathroom space is. Designed for ease and comfort, for more interesting living spaces, and for showcasing personal freedom. Let beautiful designs become part of everyday life, and embrace the vogue.",
              ]}
            />
          </div>
        </div>
      </div>
      {/* white tub by window with green background */}
      <div className="flex items-center justify-center p-10">
        <Image
          src={"/live_img/mint-tub-white-green-background.png"}
          alt={"white tub by window with green background"}
          width={600}
          height={1024}
          className="sm:w-1/2 w-4/5 object-contain"
        />
      </div>

      <MaskText
        className="flex flex-col pt-10 mx-5 sm:mx-20 text-primary font-custom font-black sm:text-xl text-lg"
        phrases={["Color Philosophy"]}
      />
      <MaskText
        className="flex flex-col mx-5 sm:mx-20 text-primary font-custom font-thin sm:text-xl text-lg"
        phrases={[
          "Color symbolizes one's passion for life. Stimulating the brain through visual nerves, it secretes dopamine, a neurotransmitter that brings joy. Refraining from the monotonous visual expression of traditional bathroom products,AXENT-MINT aims to bring more vitality to life and make every day colorful.",
        ]}
      />

      {/* view mint products section */}
      <div className="mt-10 sm:px-40">
        <div className="flex flex-row sm:w-1/2">
          {/* mint-one */}
          <CollectionCover
            className="w-full object-cover"
            imgUrl={mintData[0].coverSrc}
            imgAlt={mintData[0].imgAlt}
            linkTo="/bathroom/mint/mint-one"
            width={600}
            height={1024}
            model={mintData[0].name}
          />
        </div>
        {/* mint-two */}
        <div className="sm:pt-10 flex flex-row items-end sm:justify-end">
          <CollectionCover
            imgUrl={mintData[1].coverSrc}
            imgAlt={mintData[1].imgAlt}
            linkTo="/bathroom/mint/mint-two"
            width={600}
            height={300}
            model={mintData[1].name}
          />
        </div>

        {/* rina */}
        <div className="sm:pt-10 flex flex-row items-end justify-between gap-1 sm:w-1/2">
          <CollectionCover
            imgUrl={mintData[3].coverSrc}
            imgAlt={mintData[3].imgAlt}
            linkTo="/bathroom/mint/rina"
            width={1024}
            height={400}
            model={mintData[3].name}
          />
        </div>

        {/* batik tub */}
        <div className="sm:pt-10  flex flex-row items-center justify-between w-full">
          <CollectionCover
            imgUrl="/products_img/batik-cover.png"
            imgAlt={mintData[2].imgAlt}
            linkTo="/bathroom/mint/batik"
            width={1980}
            height={600}
            model={mintData[2].name}
            className="w-full"
          />
        </div>
      </div>
    </div>
  );
}
