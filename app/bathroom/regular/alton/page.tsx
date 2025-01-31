"use client";
import ProductSketch from "@/components/ProductSketch";
import FeatureCard from "@/components/FeatureCard";
import { data } from "../../../../lib/data"; //all product data in lib
import { ProductInfo } from "@/types/global";
import Image from "next/image";
import PageVideo from "@/components/PageVideo";
import MaskText from "@/components/MaskText";

export default function Alton() {
    const altonData = data[8];
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
