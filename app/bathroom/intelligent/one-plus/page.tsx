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
    <div className="pt-20 md:pt-16 md:px-[10vw]">
      <ProductSketch
        title={onePlusData.name}
        subtitle={onePlusData.subtitle}
        description={onePlusData.details}
        sketchImgs={onePlusData.sketchImg}
      />
      <FeatureCard
        spec={onePlusData.specification}
        manual={onePlusData.manual}
        install={onePlusData.install}
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
      <div className="flex flex-col items-center justify-center font-custom font-thin text-primary text-sm md:text-2xl">
        <PageVideo videoUrl="https://player.vimeo.com/video/1052444433?h=f2ae321d97" />
        <MaskText
          className="mx-5 my-5 md:mx-20 md:my-10"
          phrases={[
            "True excellence is an inherent uniqueness. The AXENT.ONE Intelligent Toilet revolutionizes convenience with its ONE.DIAL, allowing for seamless adjustment of water flow and temperature during the flushing process —as intuitive as turning the crown of a Swiss watch.",
          ]}
        />

        <div className="flex flex-col md:flex-row w-full justify-between md:items-end md:text-end">
          <div className="basis-1/2">
            <Image
              src={"/products_img/one-plus-flush.png"}
              alt={onePlusData.name}
              width={500}
              height={400}
              className="w-full h-full object-cover "
            />
          </div>
          <div className="basis-1/2">
            <MaskText
              className=" my-5  md:my-10 md:text-end md:mx-0 mx-5"
              phrases={[
                "Powerful Flush, Ultra-quiet, Bacteria-free, Always clean, Dual-flush with First-class Water Efficiency.",
              ]}
            />
          </div>
        </div>

        <div className="pt-10 flex flex-col md:flex-row-reverse  w-full justify-between md:items-start">
          <div className="md:basis-2/3">
            <PageVideo videoUrl="https://player.vimeo.com/video/1052444501?h=f50df54449" />
          </div>
          <MaskText
            className="md:basis-2/3 my-5  md:my-10 md:mx-0 mx-5"
            phrases={[
              "Gentle Cleansing, Intimate Understanding",
              "Five Cleansing Modes, Warm Air Dry, Eco-friendly & Energy-saving Seat, Bubble Care.",
            ]}
          />
        </div>

        <div className="flex flex-col md:flex-row w-full justify-between md:items-end md:text-end">
          <div className="md:w-2/3">
            <Image
              src={"/products_img/one-plus-4.png"}
              alt={onePlusData.name}
              width={600}
              height={600}
              className="w-full object-cover"
            />
          </div>
          <div className="md:w-1/3">
            <MaskText
              className="w-full md:ml-10  my-5  md:my-10 md:mx-0 mx-5"
              phrases={[
                " Always Clean, Freshness Abounds",
                "Triple-Barrier Nanotechnology, Antibacterial Nozzle. Intelligent Deodorization with Pure Diatomaceous Earth. Rimfree Ceramic Design. Dual Antibacterial Protection",
              ]}
            />
          </div>
        </div>

        <div className="pt-10 flex flex-col md:flex-row-reverse w-full justify-between md:items-start">
          <div className="md:w-screen">
            <Image
              src={"/products_img/one-c-plus-safe.png"}
              alt={onePlusData.name}
              width={500}
              height={600}
              className="object-cover w-full"
            />
          </div>
          <MaskText
            className=" my-5  md:my-10 md:mx-0 mx-5"
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
