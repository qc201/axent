"use client";
import ProductSketch from "@/components/ProductSketch";
import FeatureCard from "@/components/FeatureCard";
import { data } from "../../../../lib/data"; //all product data in lib
import Image from "next/image";
import PageVideo from "@/components/PageVideo";
import MaskText from "@/components/MaskText";

export default function MintTwo() {
    const mintTwoData = data[18];
    const combinedValues = [
        ...(mintTwoData.configuration?.outlook ?? []),
        ...(mintTwoData.configuration?.watertank ?? []),
        ...(mintTwoData.configuration?.cleaning ?? []),
        ...(mintTwoData.configuration?.seatlid ?? []),
    ];
    return (
        <div className="pt-20 sm:pt-16 sm:px-[10vw]">
            <ProductSketch
                title={mintTwoData.name}
                subtitle={mintTwoData.subtitle}
                description={mintTwoData.details}
                sketchImgs={mintTwoData.sketchImg}
            />
            <FeatureCard
                sku={mintTwoData.sku}
                collectionName={
                    mintTwoData.collection === null ? "" : mintTwoData.collection
                }
                productImgUrl={mintTwoData.imgSrc}
                productImgAlt="sli 1000"
                productImgHeight={500}
                productImgWidth={500}
                dimensions={
                    mintTwoData.features.dimensions === undefined
                        ? ""
                        : mintTwoData.features.dimensions
                }
                weight={
                    mintTwoData.features.weight === undefined
                        ? ""
                        : mintTwoData.features.weight
                }
                finish={mintTwoData.features.material}
                color={mintTwoData.features.color}
                consumption={
                    mintTwoData.features.water === null
                        ? ""
                        : mintTwoData.features.water
                }
                configurations={combinedValues}
            />

            {/* live image and video */}
            <div className="flex flex-col items-center justify-center font-custom font-thin text-primary text-sm sm:text-2xl">

                <div className="sm:pt-10 flex flex-col sm:flex-row-reverse w-full justify-between sm:items-end">
                    <Image
                        src={"/products_img/mint-two-2.png"}
                        alt={mintTwoData.name}
                        width={600}
                        height={400}
                    />
                    <MaskText
                        className=" my-5  sm:my-10"
                        phrases={[
                            "Upgrade of Foam Guard Black Technology",
                            "More Than Just an Odor, Splash, and Residue Barrier",
                        ]}
                    />
                </div>

                <div className="flex flex-col sm:flex-row w-full justify-between sm:items-end sm:text-end">
                    <Image
                        src={"/products_img/mint-two-GD.png"}
                        alt={mintTwoData.name}
                        width={600}
                        height={300}
                    />
                    <MaskText
                        className="w-full sm:ml-10  my-5  sm:my-10"
                        phrases={[
                            "Hands-free",
                            "Precision microwave sensing technology ensures accurate distance recognition, avoiding unnecessary touches. Approach the toilet, and the lid raises effortlessly, moving with fluid grace. Thoughtful considerations extend to an automatic flush upon leaving the seat or triggering, catering to every conceivable need."
                        ]}
                    />
                </div>

                <div className="sm:mt-10">
                    <PageVideo videoUrl="/videos/Kirin.mp4" />
                    <MaskText
                        className="sm:mx-20 sm:my-10 sm:text-4xl my-1 w-full flex flex-col items-start justify-start font-black"
                        phrases={[
                            "Kirin Pressure-assisted Flush Technology", "A Leap in Performance Across All Dimensions",
                        ]}
                    />
                </div>
                <div className="flex flex-row justify-between overflow-hidden">
                    <div className="w-full sm:w-1/4 h-80">
                        <Image
                            src={"/products_img/mint-two-5.png"}
                            alt={mintTwoData.name}
                            width={300}
                            height={300}
                            className=" w-full h-full object-cover"
                        />
                    </div>
                    <div className="w-full sm:w-1/4 h-80">
                        <Image
                            src={"/products_img/mint-two-6.png"}
                            alt={mintTwoData.name}
                            width={300}
                            height={300}
                            className="w-full h-full object-cover"
                        /></div>
                    <div className="w-full sm:w-1/4">
                        <MaskText
                            className="text-sm sm:my-1 w-full flex flex-col items-start justify-start font-thin"
                            phrases={[
                                "Pure Screen Digital Display Intelligent Control System True Intelligence, True Care", "True Intelligence Embodies Not Only Understanding of You, But Also of Your Family"
                            ]}
                        />
                    </div>

                </div>

            </div>
        </div>
    );
}
