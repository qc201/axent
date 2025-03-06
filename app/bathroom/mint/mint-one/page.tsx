"use client";
import ProductSketch from "@/components/ProductSketch";
import FeatureCard from "@/components/FeatureCard";
import { data } from "../../../../lib/data"; //all product data in lib
import Image from "next/image";
import PageVideo from "@/components/PageVideo";
import MaskText from "@/components/MaskText";

export default function MintOne() {
  const mintOneData = data.find((item) => item.id === 18);

  if (!mintOneData) {
    throw new Error("Product with ID 7 not found!");
  }
  const combinedValues = [
    ...(mintOneData.configuration?.outlook ?? []),
    ...(mintOneData.configuration?.watertank ?? []),
    ...(mintOneData.configuration?.cleaning ?? []),
    ...(mintOneData.configuration?.seatlid ?? []),
  ];
  return (
    <div className="pt-20 md:pt-16 md:px-[10vw]">
      <ProductSketch
        title={mintOneData.name}
        subtitle={mintOneData.subtitle}
        description={mintOneData.details}
        sketchImgs={mintOneData.sketchImg}
      />
      <FeatureCard
        spec={mintOneData.specification}
        manual={mintOneData.manual}
        install={mintOneData.install}
        sku={mintOneData.sku}
        collectionName={
          mintOneData.collection === null ? "" : mintOneData.collection
        }
        productImgUrl={mintOneData.imgSrc}
        productImgAlt="sli 1000"
        productImgHeight={500}
        productImgWidth={500}
        dimensions={
          mintOneData.features.dimensions === undefined
            ? ""
            : mintOneData.features.dimensions
        }
        weight={
          mintOneData.features.weight === undefined
            ? ""
            : mintOneData.features.weight
        }
        finish={mintOneData.features.material}
        color={mintOneData.features.color}
        consumption={
          mintOneData.features.water === null ? "" : mintOneData.features.water
        }
        configurations={combinedValues}
      />

      {/* live image and video */}
      <div className="flex flex-col items-center justify-center font-custom font-thin text-primary text-sm md:text-2xl">
        <div className="md:pt-10 flex flex-col md:flex-row-reverse w-full justify-between md:items-end">
          <Image
            src={"/products_img/mint-one-3.png"}
            alt={mintOneData.name}
            width={600}
            height={400}
          />
          <MaskText
            className=" my-5  md:my-10 md:mx-0 mx-5"
            phrases={[
              "A Minimalist Exterior Eternally Elegant and Stylish",
              "The flat-panel design exudes a bold sense of avant-garde aesthetics, while the subtly curved ceramic body infuses the rectilinear form with a touch of softness and elegance. Adorned with silver accents against a pristine white backdrop, the overall meticulous design resembles a treasure of artistic merit.",
            ]}
          />
        </div>

        <div className="md:mt-10">
          <div className="md:px-[10vw] w-screen ">
            <PageVideo videoUrl="https://player.vimeo.com/video/1052444481?h=106f7e854f" />
          </div>
          <MaskText
            className="md:mx-20 md:my-20  mx-5 md:text-4xl my-1 w-full flex flex-col items-start justify-start font-black"
            phrases={[
              "Kirin Pressure-assisted Flush Technology",
              "A Leap in Performance Across All Dimensions",
            ]}
          />
        </div>

        <div className="flex flex-col md:flex-row w-full justify-between md:items-end md:text-end">
          <Image
            src={"/products_img/mint-one-4.png"}
            alt={mintOneData.name}
            width={1024}
            height={600}
          />
          <MaskText
            className="w-full md:ml-10  my-5  md:my-10 md:mx-0 mx-5"
            phrases={[
              "Experience Effortless Grace",
              "Embrace Intelligent Living Instantly",
              "Efficient Warm Air Dry Motor",
              "Hygiene and Sterilization Achieved in One Step",
            ]}
          />
        </div>
      </div>
    </div>
  );
}
