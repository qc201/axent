"use client";
import ProductSketch from "@/components/ProductSketch";
import FeatureCard from "@/components/FeatureCard";
import { data } from "../../../../lib/data"; //all product data in lib

export default function BidetSeat() {
  const bidentSeatData = data[14];
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
    </div>
  );
}
