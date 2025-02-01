"use client";
import ProductSketch from "@/components/ProductSketch";
import FeatureCard from "@/components/FeatureCard";
import { data } from "../../../../lib/data"; //all product data in lib


export default function Reuss() {
    const reussData = data[15];
    const combinedValues = [
        ...(reussData.configuration?.outlook ?? []),
        ...(reussData.configuration?.watertank ?? []),
        ...(reussData.configuration?.cleaning ?? []),
        ...(reussData.configuration?.seatlid ?? []),
    ];
    return (
        <div className="pt-20 sm:pt-16 sm:px-[10vw]">
            <ProductSketch
                title={reussData.name}
                subtitle={reussData.subtitle}
                description={reussData.details}
                sketchImgs={reussData.sketchImg}
            />
            <FeatureCard
                sku={reussData.sku}
                collectionName={
                    reussData.collection === null ? "" : reussData.collection
                }
                productImgUrl={reussData.imgSrc}
                productImgAlt="sli 1000"
                productImgHeight={500}
                productImgWidth={500}
                dimensions={
                    reussData.features.dimensions === undefined
                        ? ""
                        : reussData.features.dimensions
                }
                weight={
                    reussData.features.weight === undefined
                        ? ""
                        : reussData.features.weight
                }
                finish={reussData.features.material}
                color={reussData.features.color}
                consumption={
                    reussData.features.water === null ? "" : reussData.features.water
                }
                configurations={combinedValues}
            />


        </div>
    );
}
