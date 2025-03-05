"use client";
import ProductSketch from "@/components/ProductSketch";
import FeatureCard from "@/components/FeatureCard";
import { data } from "../../../../lib/data"; //all product data in lib
import Image from "next/image";
import MaskText from "@/components/MaskText";

export default function AirBathtub() {
  const productData = data.find((item) => item.id === 26);

  if (!productData) {
    throw new Error("Product with ID 26 not found!");
  }
  const combinedValues = [
    ...(productData.configuration?.outlook ?? []),
    ...(productData.configuration?.watertank ?? []),
    ...(productData.configuration?.cleaning ?? []),
    ...(productData.configuration?.seatlid ?? []),
  ];
  return (
    <div className="pt-20 md:pt-16 md:px-[10vw]">
      <ProductSketch
        title={productData.name}
        subtitle={productData.subtitle}
        description={productData.details}
        sketchImgs={productData.sketchImg}
      />
      <FeatureCard
        unavailable={true}
        spec={productData.specification}
        manual={productData.manual}
        install={productData.install}
        sku={productData.sku}
        collectionName={
          productData.collection === null ? "" : productData.collection
        }
        productImgUrl={productData.imgSrc}
        productImgAlt="sli 1000"
        productImgHeight={500}
        productImgWidth={500}
        dimensions={
          productData.features.dimensions === undefined
            ? ""
            : productData.features.dimensions
        }
        weight={
          productData.features.weight === undefined
            ? ""
            : productData.features.weight
        }
        finish={productData.features.material}
        color={productData.features.color}
        consumption={
          productData.features.water === null ? "" : productData.features.water
        }
        configurations={combinedValues}
      />
      {/* live image and video */}
      <div className="flex flex-col items-center justify-center font-custom font-thin text-primary text-sm md:text-2xl">
        <Image
          className="pt-10 w-screen"
          src={"/products_img/novia-air-bathtub-1.png"}
          alt={productData.name}
          width={1024}
          height={600}
        />

        <div className="pt-10 flex flex-col md:flex-row-reverse  w-full justify-between md:items-end">
          <Image
            src={"/products_img/novia-air-bathtub-2.png"}
            alt={productData.name}
            width={600}
            height={600}
          />
          <MaskText
            className="pt-5 md:pt-0 md:mx-0 mx-5"
            phrases={["SMART BATHTUB", "NEXT GENERATION"]}
          />
        </div>

        <div className="pt-10 flex flex-col md:flex-row w-full justify-between md:items-end md:text-end">
          <div className="md:basis-2/3">
            <Image
              src={"/products_img/novia-air-bathtub-3.png"}
              alt={productData.name}
              width={600}
              height={600}
            />
          </div>
          <div className="md:basis-1/3">
            <MaskText
              className="w-full  mt-5  md:my-10 md:mx-0 mx-5"
              phrases={[
                "UNLEASH THE BEAUTY AND HARMONY OF NATURE IN YOUR MOMENT",
              ]}
            />
          </div>
        </div>

        <div className="pt-10 flex flex-col md:flex-row-reverse w-full justify-between md:items-end">
          <div className="md:basis-1/2">
            <Image
              src={"/products_img/novia-air-bathtub-4.png"}
              alt={productData.name}
              width={500}
              height={400}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="md:basis-1/2">
            <MaskText
              className="pt-5 md:pt-0 md:mx-0 mx-5"
              phrases={["NOW, LET‘S CHAT", "QUESTIONS & COMMENTS ARE WELCOME"]}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
