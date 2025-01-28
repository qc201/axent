'use client'
import ProductSketch from "@/components/ProductSketch";
import FeatureCard from "@/components/FeatureCard";
import { data } from "../../../../lib/data"; //all product data in lib
import { ProductInfo } from "@/types/global";
import Image from "next/image";
import PageVideo from "@/components/PageVideo";
import MaskText from "@/components/MaskText";

export default function OneCPlus() {
    const oneCPlusData = data[0]
    const combinedValues = [
        ...(oneCPlusData.configuration?.outlook ?? []),
        ...(oneCPlusData.configuration?.watertank ?? []),
        ...(oneCPlusData.configuration?.cleaning ?? []),
        ...(oneCPlusData.configuration?.seatlid ?? [])
    ];
    return (
        <div className="pt-20 sm:pt-16 sm:px-20">
            <ProductSketch
                title={oneCPlusData.name}
                subtitle={oneCPlusData.subtitle}
                description={oneCPlusData.details}
                sketchImgs={oneCPlusData.sketchImg}
            />
            <FeatureCard
                collectionName={oneCPlusData.collection === null ? "" : oneCPlusData.collection}
                productImgUrl={oneCPlusData.imgSrc}
                productImgAlt="sli 1000"
                productImgHeight={500}
                productImgWidth={500}
                dimensions={oneCPlusData.features.dimensions === undefined ? "" : oneCPlusData.features.dimensions}
                weight={oneCPlusData.features.weight === undefined ? "" : oneCPlusData.features.weight}
                finish={oneCPlusData.features.material}
                color={oneCPlusData.features.color}
                consumption={oneCPlusData.features.water === null ? "" : oneCPlusData.features.water}
                configurations={
                    combinedValues
                }
            />

            {/* live image and video */}
            <div className="flex flex-col items-center justify-center font-custom font-thin text-primary text-sm sm:text-xl">
                <PageVideo videoUrl="/videos/one-c-plus-video.mp4" />
                <MaskText className="mx-5 my-5 sm:mx-40 sm:my-10" phrases={["Merging Italian iconic design with cutting-edge technology, and equipped with Kirin Pressure-assisted Flush System, it features both water-saving efficiency and robust performance. Intelligent features such as auto open embody people-centered care in every detail, crafting an elegant and comfortable private space."]} />
                <Image className="w-screen" src={"/products_img/one-c-plus-3.png"} alt={oneCPlusData.name} width={1024} height={600} />
            </div>
        </div>
    )
}