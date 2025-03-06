"use client";
import ProductSketch from "@/components/ProductSketch";
import FeatureCard from "@/components/FeatureCard";
import { data } from "../../../../lib/data"; //all product data in lib
import Image from "next/image";

export default function BidetSeatFB106() {
  const bidentSeatData = data.find((item) => item.id === 15);

  if (!bidentSeatData) {
    throw new Error("Product with ID 7 not found!");
  }
  const combinedValues = [
    ...(bidentSeatData.configuration?.outlook ?? []),
    ...(bidentSeatData.configuration?.watertank ?? []),
    ...(bidentSeatData.configuration?.cleaning ?? []),
    ...(bidentSeatData.configuration?.seatlid ?? []),
  ];
  return (
    <div className="pt-20 sm:pt-16 sm:px-[10vw]">
      <ProductSketch
        title={bidentSeatData.name}
        subtitle={bidentSeatData.subtitle}
        description={bidentSeatData.details}
        sketchImgs={bidentSeatData.sketchImg}
      />
      <FeatureCard
        spec={bidentSeatData.specification}
        manual={bidentSeatData.manual}
        install={bidentSeatData.install}
        sku={bidentSeatData.sku}
        collectionName={
          bidentSeatData.collection === null ? "" : bidentSeatData.collection
        }
        productImgUrl={bidentSeatData.imgSrc}
        productImgAlt="sli 1000"
        productImgHeight={500}
        productImgWidth={500}
        dimensions={
          bidentSeatData.features.dimensions === undefined
            ? ""
            : bidentSeatData.features.dimensions
        }
        weight={
          bidentSeatData.features.weight === undefined
            ? ""
            : bidentSeatData.features.weight
        }
        finish={bidentSeatData.features.material}
        color={bidentSeatData.features.color}
        consumption={
          bidentSeatData.features.water === null
            ? ""
            : bidentSeatData.features.water
        }
        configurations={combinedValues}
      />
      <div className="flex flex-col sm:flex-row-reverse w-full justify-between sm:items-end">
        <Image
          className="sm:w-1/2 h-full object-cover"
          src={"/products_img/bidet-seat-fb106-3.png"}
          alt={bidentSeatData.name}
          width={1080}
          height={1080}
        />
      </div>
      <div className="flex flex-col sm:flex-row w-full justify-between sm:items-start">
        <Image
          className="sm:w-1/2 h-full object-contain"
          src={"/products_img/bidet-seat-fb106-1.png"}
          alt={bidentSeatData.name}
          width={1080}
          height={1920}
        />
      </div>
    </div>
  );
}
