"use client";
import ProductSketch from "@/components/ProductSketch";
import FeatureCard from "@/components/FeatureCard";
import { data } from "../../../../lib/data"; //all product data in lib
import Image from "next/image";
import PageVideo from "@/components/PageVideo";
import MaskText from "@/components/MaskText";

export default function Stella() {
  const stellaData = data.find((item) => item.id === 10);

  if (!stellaData) {
    throw new Error("Product with ID 7 not found!");
  }
  const combinedValues = [
    ...(stellaData.configuration?.outlook ?? []),
    ...(stellaData.configuration?.watertank ?? []),
    ...(stellaData.configuration?.cleaning ?? []),
    ...(stellaData.configuration?.seatlid ?? []),
  ];
  return (
    <div className="pt-20 md:pt-16 md:px-[10vw]">
      <ProductSketch
        title={stellaData.name}
        subtitle={stellaData.subtitle}
        description={stellaData.details}
        sketchImgs={stellaData.sketchImg}
      />
      <FeatureCard
        unavailable={true}
        spec={stellaData.specification}
        manual={stellaData.manual}
        install={stellaData.install}
        sku={stellaData.sku}
        collectionName={
          stellaData.collection === null ? "" : stellaData.collection
        }
        productImgUrl={stellaData.imgSrc}
        productImgAlt="sli 1000"
        productImgHeight={500}
        productImgWidth={500}
        dimensions={
          stellaData.features.dimensions === undefined
            ? ""
            : stellaData.features.dimensions
        }
        weight={
          stellaData.features.weight === undefined
            ? ""
            : stellaData.features.weight
        }
        finish={stellaData.features.material}
        color={stellaData.features.color}
        consumption={
          stellaData.features.water === null ? "" : stellaData.features.water
        }
        configurations={combinedValues}
      />
      {/* live image and video */}
      <div className="flex flex-col items-center justify-center font-custom font-thin text-primary text-sm md:text-2xl">
        <div className="pt-10 flex flex-col md:flex-row-reverse  w-full justify-between md:items-start">
          <div className="md:basis-2/3">
            <PageVideo videoUrl="https://player.vimeo.com/video/1052444445?h=d6ff2856e4" />
          </div>
          <MaskText
            className="md:basis-2/3 my-5 md:mx-0 mx-5"
            phrases={[
              "Kirin Pressure-assisted Flush System",
              "REGATTA One-piece Toilet ensures precise and powerful flushes regardless of water pressure while effectively conserving water resources.",
            ]}
          />
        </div>

        <div className="flex flex-col md:flex-row w-full justify-between md:items-end md:text-end">
          <div className="md:w-1/2">
            <Image
              className="w-full"
              src={"/products_img/stella-3.png"}
              alt={stellaData.name}
              width={400}
              height={500}
            />
          </div>
          <div className="md:w-1/2">
            <MaskText
              className="w-full md:ml-10 md:mx-0 mx-5"
              phrases={[
                "Antibacterial Easy-to-clean Glaze",
                "Integrated with nano-grade antibacterial technology, The glaze can effectively eliminate harmful bacteria and will resist dirt accumulation while maintaining a hygienic toilet interior.",
              ]}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
