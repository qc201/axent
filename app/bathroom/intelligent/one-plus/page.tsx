"use client";
import ProductSketch from "@/components/ProductSketch";
import FeatureCard from "@/components/FeatureCard";
import { data } from "../../../../lib/data"; //all product data in lib
import { ProductInfo } from "@/types/global";
import Image from "next/image";
import PageVideo from "@/components/PageVideo";
import MaskText from "@/components/MaskText";

export default function OnePlus() {
  const onePlusData = data[1];
  const combinedValues = [
    ...(onePlusData.configuration?.outlook ?? []),
    ...(onePlusData.configuration?.watertank ?? []),
    ...(onePlusData.configuration?.cleaning ?? []),
    ...(onePlusData.configuration?.seatlid ?? []),
  ];
  return (
    <div className="pt-20 sm:pt-16 sm:px-[10vw]">
      <ProductSketch
        title={onePlusData.name}
        subtitle={onePlusData.subtitle}
        description={onePlusData.details}
        sketchImgs={onePlusData.sketchImg}
      />
      <FeatureCard
        sku={onePlusData.sku}
        collectionName={
          onePlusData.collection === null ? "" : onePlusData.collection
        }
        productImgUrl={onePlusData.imgSrc}
        productImgAlt="sli 1000"
        productImgHeight={500}
        productImgWidth={500}
        dimensions={
          onePlusData.features.dimensions === undefined
            ? ""
            : onePlusData.features.dimensions
        }
        weight={
          onePlusData.features.weight === undefined
            ? ""
            : onePlusData.features.weight
        }
        finish={onePlusData.features.material}
        color={onePlusData.features.color}
        consumption={
          onePlusData.features.water === null ? "" : onePlusData.features.water
        }
        configurations={combinedValues}
      />
      {/* live image and video */}
      <div className="flex flex-col items-center justify-center font-custom font-thin text-primary text-sm sm:text-2xl">
        <PageVideo videoUrl="/videos/one-plus-video.mp4" />
        <MaskText
          className="mx-5 my-5 sm:mx-20 sm:my-10"
          phrases={[
            "True excellence is an inherent uniqueness. The AXENT.ONE Intelligent Toilet revolutionizes convenience with its ONE.DIAL, allowing for seamless adjustment of water flow and temperature during the flushing process —as intuitive as turning the crown of a Swiss watch.",
          ]}
        />

        <div className="flex flex-col sm:flex-row w-full justify-between sm:items-start">
          <Image
            src={"/products_img/one-plus-flush.png"}
            alt={onePlusData.name}
            width={500}
            height={400}
            className="w-full h-full object-cover"
          />
          <MaskText
            className=" my-5  sm:my-10"
            phrases={[
              "AXENT.INFINITY Infinity Flush System",
              "Powerful Flush, Ultra-quiet, Bacteria-free, Always clean, Dual-flush with First-class Water Efficiency.",
            ]}
          />
        </div>

        <div className="pt-10 flex flex-col sm:flex-row-reverse  w-full justify-between sm:items-start">
          <div className="basis-2/3">
            <PageVideo videoUrl="/videos/hygienic.mp4" />
          </div>
          <MaskText
            className="basis-2/3 my-5  sm:my-10"
            phrases={[
              "Gentle Cleansing, Intimate Understanding",
              "Five Cleansing Modes, Warm Air Dry, Eco-friendly & Energy-saving Seat, Bubble Care.",
            ]}
          />
        </div>

        <div className="flex flex-col sm:flex-row w-full justify-between sm:items-end sm:text-end">
          <Image
            src={"/products_img/one-plus-4.png"}
            alt={onePlusData.name}
            width={600}
            height={600}
          />
          <MaskText
            className="w-full sm:ml-10  my-5  sm:my-10"
            phrases={[
              " Always Clean, Freshness Abounds",
              "Triple-Barrier Nanotechnology, Antibacterial Nozzle. Intelligent Deodorization with Pure Diatomaceous Earth. Rimfree Ceramic Design. Dual Antibacterial Protection",
            ]}
          />
        </div>

        <div className="pt-10 flex flex-col sm:flex-row-reverse w-full justify-between sm:items-start">
          <Image
            src={"/products_img/one-c-plus-safe.png"}
            alt={onePlusData.name}
            width={500}
            height={600}
          />
          <MaskText
            className="w-full  my-5  sm:my-10"
            phrases={[
              " Wireless Dual Controls, Thoughtful Care",
              "App control and a wireless multifunction remote control. A nighttime guard without disruption to sleep, it automatically turns on/off according to the ambient light.",
            ]}
          />
        </div>

        <Image
          className="pt-10 w-screen"
          src={"/products_img/one-plus-3.jpg"}
          alt={onePlusData.name}
          width={1024}
          height={600}
        />
      </div>
    </div>
  );
}
