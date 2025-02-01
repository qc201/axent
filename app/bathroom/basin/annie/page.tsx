"use client";
import ProductSketch from "@/components/ProductSketch";
import FeatureCard from "@/components/FeatureCard";
import { data } from "../../../../lib/data"; //all product data in lib

export default function Annie() {
  const annieData = data[13];
  const combinedValues = [
    ...(annieData.configuration?.outlook ?? []),
    ...(annieData.configuration?.watertank ?? []),
    ...(annieData.configuration?.cleaning ?? []),
    ...(annieData.configuration?.seatlid ?? []),
  ];
  return (
    <div className="pt-20 sm:pt-16 sm:px-[10vw]">
      <ProductSketch
        title={annieData.name}
        subtitle={annieData.subtitle}
        description={annieData.details}
        sketchImgs={annieData.sketchImg}
      />
      <FeatureCard
        spec={annieData.specification}
        manual={annieData.manual}
        install={annieData.install}
        sku={annieData.sku}
        collectionName={
          annieData.collection === null ? "" : annieData.collection
        }
        productImgUrl={annieData.imgSrc}
        productImgAlt="sli 1000"
        productImgHeight={500}
        productImgWidth={500}
        dimensions={
          annieData.features.dimensions === undefined
            ? ""
            : annieData.features.dimensions
        }
        weight={
          annieData.features.weight === undefined
            ? ""
            : annieData.features.weight
        }
        finish={annieData.features.material}
        color={annieData.features.color}
        consumption={
          annieData.features.water === null ? "" : annieData.features.water
        }
        configurations={combinedValues}
      />
    </div>
  );
}
