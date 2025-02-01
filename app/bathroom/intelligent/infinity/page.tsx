"use client";
import ProductSketch from "@/components/ProductSketch";
import FeatureCard from "@/components/FeatureCard";
import { data } from "../../../../lib/data"; //all product data in lib
import Image from "next/image";
import MaskText from "@/components/MaskText";

export default function Infinity() {
  const infinityData = data[4];
  const combinedValues = [
    ...(infinityData.configuration?.outlook ?? []),
    ...(infinityData.configuration?.watertank ?? []),
    ...(infinityData.configuration?.cleaning ?? []),
    ...(infinityData.configuration?.seatlid ?? []),
  ];
  return (
    <div className="pt-20 sm:pt-16 sm:px-[10vw]">
      <ProductSketch
        title={infinityData.name}
        subtitle={infinityData.subtitle}
        description={infinityData.details}
        sketchImgs={infinityData.sketchImg}
      />
      <FeatureCard
        spec={infinityData.specification}
        manual={infinityData.manual}
        install={infinityData.install}
        sku={infinityData.sku}
        collectionName={
          infinityData.collection === null ? "" : infinityData.collection
        }
        productImgUrl={infinityData.imgSrc}
        productImgAlt="sli 1000"
        productImgHeight={500}
        productImgWidth={500}
        dimensions={
          infinityData.features.dimensions === undefined
            ? ""
            : infinityData.features.dimensions
        }
        weight={
          infinityData.features.weight === undefined
            ? ""
            : infinityData.features.weight
        }
        finish={infinityData.features.material}
        color={infinityData.features.color}
        consumption={
          infinityData.features.water === null
            ? ""
            : infinityData.features.water
        }
        configurations={combinedValues}
      />
      {/* live image and video */}
      <div className="flex flex-col items-center justify-center font-custom font-thin text-primary text-sm sm:text-2xl">
        <Image
          className="pt-10 w-screen"
          src={"/products_img/infinity-1.png"}
          alt={infinityData.name}
          width={1024}
          height={600}
        />

        <div className="pt-10 flex flex-col sm:flex-row-reverse  w-full justify-between sm:items-end">
          <Image
            src={"/products_img/tech_style.jpg"}
            alt={infinityData.name}
            width={600}
            height={600}
          />
          <MaskText
            className="my-5  sm:my-10"
            phrases={[
              "Kirin Pressure-assisted Flush System",
              "Harnessing cutting-edge air-energy accumulator technology, integrated with dual-efficiency water-saving design, it guaran- tees a powerful flush with every use. Boasting a remarkably low water consumption of just 1 Gal per flush, it embodies the principles of environmental protection and energy conservation.",
            ]}
          />
        </div>

        <div className="pt-10 flex flex-col sm:flex-row w-full justify-between sm:items-end sm:text-end">
          <Image
            src={"/products_img/infinity-cover.jpg"}
            alt={infinityData.name}
            width={600}
            height={600}
          />
          <MaskText
            className="w-full sm:ml-10  my-5  sm:my-10"
            phrases={[
              "Unlimited Flushes Without Power",
              "Even during power outages, the AXENT.Infinity Intelligent Toilet maintains operational continuity through its built-in mechanical structure, ensuring continuous flushing and uncompromised convenience.",
            ]}
          />
        </div>

        <div className="pt-10 flex flex-col sm:flex-row-reverse w-full justify-between sm:items-end">
          <Image
            src={"/products_img/infinity-3.png"}
            alt={infinityData.name}
            width={500}
            height={400}
            className="w-full h-full object-cover"
          />
          <MaskText
            className=" my-5  sm:my-10"
            phrases={[
              " People-centric Design: Quality in Every Detail",
              "Bubble Care for Cleanness and Comfort. Antibacterial Seat. Intelligent Night Light. Soft-close Lid and Seat",
            ]}
          />
        </div>
      </div>
    </div>
  );
}
