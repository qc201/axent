"use client";
import ProductSketch from "@/components/ProductSketch";
import FeatureCard from "@/components/FeatureCard";
import { data } from "../../../../lib/data"; //all product data in lib
import { ProductInfo } from "@/types/global";
import Image from "next/image";
import PageVideo from "@/components/PageVideo";
import MaskText from "@/components/MaskText";

export default function OneRect() {
    const OneRect = data[12];
    const combinedValues = [
        ...(OneRect.configuration?.outlook ?? []),
        ...(OneRect.configuration?.watertank ?? []),
        ...(OneRect.configuration?.cleaning ?? []),
        ...(OneRect.configuration?.seatlid ?? []),
    ];
    return (
        <div className="pt-20 sm:pt-16 sm:px-[10vw]">
            <ProductSketch
                title={OneRect.name}
                subtitle={OneRect.subtitle}
                description={OneRect.details}
                sketchImgs={OneRect.sketchImg}
            />
            <FeatureCard
                sku={OneRect.sku}
                collectionName={
                    OneRect.collection === null ? "" : OneRect.collection
                }
                productImgUrl={OneRect.imgSrc}
                productImgAlt="sli 1000"
                productImgHeight={500}
                productImgWidth={500}
                dimensions={
                    OneRect.features.dimensions === undefined
                        ? ""
                        : OneRect.features.dimensions
                }
                weight={
                    OneRect.features.weight === undefined
                        ? ""
                        : OneRect.features.weight
                }
                finish={OneRect.features.material}
                color={OneRect.features.color}
                consumption={
                    OneRect.features.water === null ? "" : OneRect.features.water
                }
                configurations={combinedValues}
            />


        </div>
    );
}