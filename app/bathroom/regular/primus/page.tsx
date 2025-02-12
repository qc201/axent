"use client";
import ProductSketch from "@/components/ProductSketch";
import FeatureCard from "@/components/FeatureCard";
import { data } from "../../../../lib/data"; //all product data in lib
import Image from "next/image";
import PageVideo from "@/components/PageVideo";
import MaskText from "@/components/MaskText";

export default function Primus() {
  const primusData = data[6];
  const combinedValues = [
    ...(primusData.configuration?.outlook ?? []),
    ...(primusData.configuration?.watertank ?? []),
    ...(primusData.configuration?.cleaning ?? []),
    ...(primusData.configuration?.seatlid ?? []),
  ];
  return (
    <div className="pt-20 md:pt-16 md:px-[10vw]">
      <ProductSketch
        title={primusData.name}
        subtitle={primusData.subtitle}
        description={primusData.details}
        sketchImgs={primusData.sketchImg}
      />
      <FeatureCard
        spec={primusData.specification}
        manual={primusData.manual}
        install={primusData.install}
        sku={primusData.sku}
        collectionName={
          primusData.collection === null ? "" : primusData.collection
        }
        productImgUrl={primusData.imgSrc}
        productImgAlt="sli 1000"
        productImgHeight={500}
        productImgWidth={500}
        dimensions={
          primusData.features.dimensions === undefined
            ? ""
            : primusData.features.dimensions
        }
        weight={
          primusData.features.weight === undefined
            ? ""
            : primusData.features.weight
        }
        finish={primusData.features.material}
        color={primusData.features.color}
        consumption={
          primusData.features.water === null ? "" : primusData.features.water
        }
        configurations={combinedValues}
      />
      {/* live image and video */}
      <div className="flex flex-col items-center justify-center font-custom font-thin text-primary text-sm md:text-2xl">
        <div className="flex md:flex-row flex-col items-center justify-center">
          <div className="flex flex-col justify-center items-center">
            <Image
              className="w-full"
              src={"/products_img/primus-color-strip-black.png"}
              alt={primusData.name}
              width={200}
              height={200}
            />
            <div className="text-xs font-custom font-thin text-primary">
              W330-D005(Mate Black)
            </div>
          </div>
          <div className="flex flex-col justify-center items-center">
            <Image
              className="w-full"
              src={"/products_img/primus-color-strip-gold.png"}
              alt={primusData.name}
              width={200}
              height={200}
            />
            <div className="text-xs font-custom font-thin text-primary">
              W330-D002(Champagne Gold)
            </div>
          </div>
          <div className="flex flex-col justify-center items-center">
            <Image
              className="w-full"
              src={"/products_img/primus-color-strip-silver.png"}
              alt={primusData.name}
              width={220}
              height={200}
            />
            <div className="text-xs font-custom font-thin text-primary">
              W330-D004(White)
            </div>
          </div>
          <div className="flex flex-col justify-center items-center">
            <Image
              className="w-full"
              src={"/products_img/primus-color-strip-gray.png"}
              alt={primusData.name}
              width={220}
              height={200}
            />
            <div className="text-xs font-custom font-thin text-primary">
              W330-D001(Space Silver)
            </div>
          </div>
          <div className="flex flex-col justify-center items-center">
            <Image
              className="w-full"
              src={"/products_img/primus-color-strip-rose.png"}
              alt={primusData.name}
              width={220}
              height={200}
            />
            <div className="text-xs font-custom font-thin text-primary">
              W330-D003(Rose Gold)
            </div>
          </div>
        </div>
        <div className="pt-10 flex flex-col md:flex-row-reverse  w-full justify-between md:items-start">
          <div className="md:basis-2/3">
            <PageVideo videoUrl="https://player.vimeo.com/video/1052444445?h=d6ff2856e4" />
          </div>
          <MaskText
            className="md:basis-2/3 my-5 md:mx-0 mx-5"
            phrases={[
              "Kirin Pressure-assisted Flush System",
              "Equipped with the efficient Kirin Flush System, it effortlessly tackles all stains to ensure pristine cleanli- ness after every use.",
            ]}
          />
        </div>

        <div className="flex flex-col md:flex-row w-full justify-between md:items-end md:text-end">
          <div className="md:basis-1/2">
            <Image
              className="w-full"
              src={"/products_img/primus-hand.png"}
              alt={primusData.name}
              width={400}
              height={500}
            />
          </div>
          <div className="md:basis-1/2 pt-10">
            <MaskText
              className="w-full md:mx-0 mx-5"
              phrases={[
                "Antibacterial Easy-to-clean Glaze",
                "The seat surface, made of antibacterial material, maintains cleanliness and hygiene even after prolonged use, providing you with greater peace of mind.",
              ]}
            />
          </div>
        </div>

        <div className="pt-10 flex flex-col md:flex-row-reverse w-full justify-between md:items-end">
          <div className="md:w-1/2 w-full">
            <Image
              className="w-full object-contain"
              src={"/products_img/primus-seat.png"}
              alt={primusData.name}
              width={400}
              height={500}
            />
          </div>
          <div className="md:w-1/2 pt-10 text-start md:mx-0 mx-5 ">
            <MaskText
              className="w-full"
              phrases={[
                "Entire Trap-way Glazing",
                "The interior walls of the entire Trap-way are coated with a smooth glaze, thus reducing residue and facilitating smoother flushing and easier maintenance.",
              ]}
            />
          </div>
        </div>

        <div className="pt-10 flex flex-col md:flex-row w-full justify-between md:items-end md:text-end">
          <Image
            className="w-full"
            src={"/products_img/primus-3.png"}
            alt={primusData.name}
            width={400}
            height={500}
          />
        </div>
      </div>
    </div>
  );
}
