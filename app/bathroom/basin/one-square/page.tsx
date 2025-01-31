"use client";
import ProductSketch from "@/components/ProductSketch";
import FeatureCard from "@/components/FeatureCard";
import { data } from "../../../../lib/data"; //all product data in lib
import { ProductInfo } from "@/types/global";
import Image from "next/image";
import PageVideo from "@/components/PageVideo";
import MaskText from "@/components/MaskText";

export default function OneSquare() {
    const oneSquareData = data[10];
    const combinedValues = [
        ...(oneSquareData.configuration?.outlook ?? []),
        ...(oneSquareData.configuration?.watertank ?? []),
        ...(oneSquareData.configuration?.cleaning ?? []),
        ...(oneSquareData.configuration?.seatlid ?? []),
    ];
    return (
        <div className="pt-20 sm:pt-16 sm:px-[10vw]">
            <ProductSketch
                title={oneSquareData.name}
                subtitle={oneSquareData.subtitle}
                description={oneSquareData.details}
                sketchImgs={oneSquareData.sketchImg}
            />
            <FeatureCard
                sku={oneSquareData.sku}
                collectionName={
                    oneSquareData.collection === null ? "" : oneSquareData.collection
                }
                productImgUrl={oneSquareData.imgSrc}
                productImgAlt="sli 1000"
                productImgHeight={500}
                productImgWidth={500}
                dimensions={
                    oneSquareData.features.dimensions === undefined
                        ? ""
                        : oneSquareData.features.dimensions
                }
                weight={
                    oneSquareData.features.weight === undefined
                        ? ""
                        : oneSquareData.features.weight
                }
                finish={oneSquareData.features.material}
                color={oneSquareData.features.color}
                consumption={
                    oneSquareData.features.water === null ? "" : oneSquareData.features.water
                }
                configurations={combinedValues}
            />


        </div>
    );
}