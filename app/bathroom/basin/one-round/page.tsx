"use client";
import ProductSketch from "@/components/ProductSketch";
import FeatureCard from "@/components/FeatureCard";
import { data } from "../../../../lib/data"; //all product data in lib
import { ProductInfo } from "@/types/global";
import Image from "next/image";
import PageVideo from "@/components/PageVideo";
import MaskText from "@/components/MaskText";

export default function OneRound() {
    const oneRoundData = data[11];
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
                    oneRoundData.features.water === null ? "" : oneRoundData.features.water
                }
                configurations={combinedValues}
            />


        </div>
    );
}