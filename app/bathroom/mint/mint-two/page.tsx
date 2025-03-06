"use client";
import ProductSketch from "@/components/ProductSketch";
import FeatureCard from "@/components/FeatureCard";
import { data } from "../../../../lib/data"; //all product data in lib
import Image from "next/image";
import PageVideo from "@/components/PageVideo";
import MaskText from "@/components/MaskText";

export default function MintTwo() {
  const mintTwoData = data.find((item) => item.id === 19);

  if (!mintTwoData) {
    throw new Error("Product with ID 7 not found!");
  }
  const combinedValues = [
    ...(mintTwoData.configuration?.outlook ?? []),
    ...(mintTwoData.configuration?.watertank ?? []),
    ...(mintTwoData.configuration?.cleaning ?? []),
    ...(mintTwoData.configuration?.seatlid ?? []),
  ];
  return (
    <div className="pt-20 md:pt-16 md:px-[10vw]">
      <ProductSketch
        title={mintTwoData.name}
        subtitle={mintTwoData.subtitle}
        description={mintTwoData.details}
        sketchImgs={mintTwoData.sketchImg}
      />
      <FeatureCard
        unavailable={mintTwoData.unavailable}
        spec={mintTwoData.specification}
        manual={mintTwoData.manual}
        install={mintTwoData.install}
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
          mintTwoData.features.water === null ? "" : mintTwoData.features.water
        }
        configurations={combinedValues}
      />

      {/* live image and video */}
      <div className="flex flex-col items-center justify-center font-custom font-thin text-primary text-sm md:text-2xl">
        <div className="md:pt-10 flex flex-col md:flex-row-reverse  md:items-end">
          <Image
            src={"/products_img/mint-two-2.png"}
            alt={mintTwoData.name}
            width={600}
            height={400}
          />
          <MaskText
            className=" my-5  md:my-10 md:mx-0 mx-5"
            phrases={[
              "Foam Guard Technology",
              "More Than Just an Odor, Splash, and Residue Barrier",
            ]}
          />
        </div>

        <div className="flex flex-col md:flex-row   md:items-end md:text-end">
          <Image
            src={"/products_img/mint-two-GD.png"}
            alt={mintTwoData.name}
            width={600}
            height={300}
            className="object-cover"
          />
          <MaskText
            className="w-full md:ml-10  my-5  md:my-10 md:mx-0 mx-5"
            phrases={[
              "Hands-free",
              "Precision microwave sensing technology ensures accurate distance recognition, avoiding unnecessary touches. Approach the toilet, and the lid raises effortlessly, moving with fluid grace. Thoughtful considerations extend to an automatic flush upon leaving the seat or triggering, catering to every conceivable need.",
            ]}
          />
        </div>

        <div className="md:mt-10">
          <PageVideo videoUrl="https://player.vimeo.com/video/1052444481?h=106f7e854f" />
          <MaskText
            className="md:mx-20 md:my-10 md:text-4xl my-1 w-full flex flex-col items-start justify-start font-black"
            phrases={[
              "Kirin Pressure-assisted Flush Technology",
              "A Leap in Performance Across All Dimensions",
            ]}
          />
        </div>
        <div className="pt-10 flex flex-row justify-between overflow-hidden">
          <div className="w-full md:w-1/3 h-80">
            <Image
              src={"/products_img/mint-two-5.png"}
              alt={mintTwoData.name}
              width={300}
              height={300}
              className=" w-full h-full object-cover"
            />
          </div>
          <div className="w-full md:w-1/3 h-80">
            <Image
              src={"/products_img/mint-two-6.png"}
              alt={mintTwoData.name}
              width={300}
              height={300}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="w-full md:w-1/3">
            <MaskText
              className="text-sm md:my-1 w-full flex flex-col items-start justify-start font-thin"
              phrases={[
                "Pure Screen Digital Display Intelligent Control System True Intelligence, True Care",
                "True Intelligence Embodies Not Only Understanding of You, But Also of Your Family",
              ]}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
