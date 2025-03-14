"use client";
import ProductSketch from "@/components/ProductSketch";
import FeatureCard from "@/components/FeatureCard";
import { data } from "../../../../lib/data"; //all product data in lib

export default function Alton() {
  const altonData = data.find((item) => item.id === 9);

  if (!altonData) {
    throw new Error("Product with ID 7 not found!");
  }
  const combinedValues = [
    ...(altonData.configuration?.outlook ?? []),
    ...(altonData.configuration?.watertank ?? []),
    ...(altonData.configuration?.cleaning ?? []),
    ...(altonData.configuration?.seatlid ?? []),
  ];
  return (
    <div className="pt-20 sm:pt-16 sm:px-[10vw]">
      <ProductSketch
        title={altonData.name}
        subtitle={altonData.subtitle}
        description={altonData.details}
        sketchImgs={altonData.sketchImg}
      />
      <FeatureCard
        spec={altonData.specification}
        manual={altonData.manual}
        install={altonData.install}
        sku={altonData.sku}
        collectionName={
          altonData.collection === null ? "" : altonData.collection
        }
        productImgUrl={altonData.imgSrc}
        productImgAlt="sli 1000"
        productImgHeight={500}
        productImgWidth={500}
        dimensions={
          altonData.features.dimensions === undefined
            ? ""
            : altonData.features.dimensions
        }
        weight={
          altonData.features.weight === undefined
            ? ""
            : altonData.features.weight
        }
        finish={altonData.features.material}
        color={altonData.features.color}
        consumption={
          altonData.features.water === null ? "" : altonData.features.water
        }
        configurations={combinedValues}
      />
    </div>
  );
}
