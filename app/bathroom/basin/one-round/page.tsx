"use client";
import ProductSketch from "@/components/ProductSketch";
import FeatureCard from "@/components/FeatureCard";
import { data } from "../../../../lib/data"; //all product data in lib

export default function OneRound() {
  const oneRoundData = data.find((item) => item.id === 12);

  if (!oneRoundData) {
    throw new Error("Product with ID 7 not found!");
  }
  const combinedValues = [
    ...(oneRoundData.configuration?.outlook ?? []),
    ...(oneRoundData.configuration?.watertank ?? []),
    ...(oneRoundData.configuration?.cleaning ?? []),
    ...(oneRoundData.configuration?.seatlid ?? []),
  ];
  return (
    <div className="pt-20 sm:pt-16 sm:px-[10vw]">
      <ProductSketch
        title={oneRoundData.name}
        subtitle={oneRoundData.subtitle}
        description={oneRoundData.details}
        sketchImgs={oneRoundData.sketchImg}
      />
      <FeatureCard
        spec={oneRoundData.specification}
        manual={oneRoundData.manual}
        install={oneRoundData.install}
        sku={oneRoundData.sku}
        collectionName={
          oneRoundData.collection === null ? "" : oneRoundData.collection
        }
        productImgUrl={oneRoundData.imgSrc}
        productImgAlt="sli 1000"
        productImgHeight={500}
        productImgWidth={500}
        dimensions={
          oneRoundData.features.dimensions === undefined
            ? ""
            : oneRoundData.features.dimensions
        }
        weight={
          oneRoundData.features.weight === undefined
            ? ""
            : oneRoundData.features.weight
        }
        finish={oneRoundData.features.material}
        color={oneRoundData.features.color}
        consumption={
          oneRoundData.features.water === null
            ? ""
            : oneRoundData.features.water
        }
        configurations={combinedValues}
      />
    </div>
  );
}
