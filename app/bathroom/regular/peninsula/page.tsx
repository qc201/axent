"use client";
import ProductSketch from "@/components/ProductSketch";
import FeatureCard from "@/components/FeatureCard";
import { data } from "../../../../lib/data"; //all product data in lib

export default function Peninsula() {
  const peninsulaData = data.find((item) => item.id === 8);

  if (!peninsulaData) {
    throw new Error("Product with ID 7 not found!");
  }
  const combinedValues = [
    ...(peninsulaData.configuration?.outlook ?? []),
    ...(peninsulaData.configuration?.watertank ?? []),
    ...(peninsulaData.configuration?.cleaning ?? []),
    ...(peninsulaData.configuration?.seatlid ?? []),
  ];
  return (
    <div className="pt-20 sm:pt-16 sm:px-[10vw]">
      <ProductSketch
        title={peninsulaData.name}
        subtitle={peninsulaData.subtitle}
        description={peninsulaData.details}
        sketchImgs={peninsulaData.sketchImg}
      />
      <FeatureCard
        spec={peninsulaData.specification}
        manual={peninsulaData.manual}
        install={peninsulaData.install}
        sku={peninsulaData.sku}
        collectionName={
          peninsulaData.collection === null ? "" : peninsulaData.collection
        }
        productImgUrl={peninsulaData.imgSrc}
        productImgAlt="sli 1000"
        productImgHeight={500}
        productImgWidth={500}
        dimensions={
          peninsulaData.features.dimensions === undefined
            ? ""
            : peninsulaData.features.dimensions
        }
        weight={
          peninsulaData.features.weight === undefined
            ? ""
            : peninsulaData.features.weight
        }
        finish={peninsulaData.features.material}
        color={peninsulaData.features.color}
        consumption={
          peninsulaData.features.water === null
            ? ""
            : peninsulaData.features.water
        }
        configurations={combinedValues}
      />
    </div>
  );
}
