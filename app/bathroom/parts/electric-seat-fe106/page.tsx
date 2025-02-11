"use client";
import ProductSketch from "@/components/ProductSketch";
import FeatureCard from "@/components/FeatureCard";
import { data } from "../../../../lib/data"; //all product data in lib
import Image from "next/image";
import MaskText from "@/components/MaskText";

export default function ElectricSeatFE106() {
  const electricSeatData = data.find((d) => d.id === 25);
  if (!electricSeatData) {
    throw new Error("Data with ID 25 is missing!");
  }
  const combinedValues = [
    ...(electricSeatData.configuration?.outlook ?? []),
    ...(electricSeatData.configuration?.watertank ?? []),
    ...(electricSeatData.configuration?.cleaning ?? []),
    ...(electricSeatData.configuration?.seatlid ?? []),
  ];
  return (
    <div className="pt-20 sm:pt-16 sm:px-[10vw]">
      <ProductSketch
        title={electricSeatData.name}
        subtitle={electricSeatData.subtitle}
        description={electricSeatData.details}
        sketchImgs={electricSeatData.sketchImg}
      />
      <FeatureCard
        spec={electricSeatData.specification}
        manual={electricSeatData.manual}
        install={electricSeatData.install}
        sku={electricSeatData.sku}
        collectionName={
          electricSeatData.collection === null
            ? ""
            : electricSeatData.collection
        }
        productImgUrl={electricSeatData.imgSrc}
        productImgAlt="sli 1000"
        productImgHeight={500}
        productImgWidth={500}
        dimensions={
          electricSeatData.features.dimensions === undefined
            ? ""
            : electricSeatData.features.dimensions
        }
        weight={
          electricSeatData.features.weight === undefined
            ? ""
            : electricSeatData.features.weight
        }
        finish={electricSeatData.features.material}
        color={electricSeatData.features.color}
        consumption={
          electricSeatData.features.water === null
            ? ""
            : electricSeatData.features.water
        }
        configurations={combinedValues}
      />

      {/* live image and video */}
      <div className="flex flex-col items-center justify-center font-custom font-thin text-primary text-sm sm:text-2xl">
        <div className="pt-10 flex flex-col sm:flex-row  w-full justify-between sm:items-end">
          <MaskText
            className="my-5  sm:my-10 sm:mx-0 mx-5"
            phrases={[
              "Intelligent Technology for 180° Degrees of Clean",
              "The V-Shape intelligent bidet seat offers fully customizable rear and front cleansing options. Additional shower oscillation, pulsating massage and aerated bubbly water infusion technology are just a few of the features you can personalize with the turn of the dial.",
            ]}
          />
          <Image
            className="sm:w-1/2 w-screen h-full object-cover"
            src={"/products_img/electric-seat-fe106-1.png"}
            alt={electricSeatData.name}
            width={1080}
            height={1080}
          />
        </div>

        <div className="pt-10 flex flex-col sm:flex-row w-full justify-between sm:items-end sm:text-end">
          <MaskText
            className="w-full sm:ml-10  my-5  sm:my-10 sm:mx-0 mx-5"
            phrases={[
              "Instant Comfort",
              "Unlike clunky bidet models that require big water reservoirs for heating bidet water, the V-Shape intelligent bidet seat features instant water heating technology that lends to the V-Shape minimalist profile. This instant water-warming technology also improves. Your water use efficiency while ensuring a luxurious and comfortably warm cleansing experience.",
            ]}
          />
        </div>

        <div className="pt-10 flex flex-col sm:flex-row-reverse w-full max-h-[500px] justify-end sm:items-end overflow-hidden">
          <MaskText
            className=" my-5  sm:my-10 sm:mx-0 mx-5"
            phrases={[
              "Expertly Designed for Durability",
              "From heavy load-bearing lids, to a quick release and easy to clean seat, the SLIMS is expertly designed to meet your bathroom needs. Don’t let the SLIMS sleek, minimalistic profile fool you, its ergonomically designed for comfort and lifetime durability. AXENT’s straight-from-the-manufacturer warranty.",
            ]}
          />
        </div>
        <div className="pt-10 flex flex-col sm:flex-row w-full justify-between sm:items-end sm:text-end">
          <MaskText
            className="w-full sm:ml-10  my-5  sm:my-10 sm:mx-0 mx-5"
            phrases={[
              "Eco-Friendly",
              "AXENT’s intelligent bidets reduce your dependence on toilet paper-a known contaminant of harmful chemicals responsible for clogging up toilets and community sewer systems alike. AXENT’s intelligent bidet seats offer a gentler, more simple and sanitary solution for bathroom cleansing with the feel good benefit of reducing your impact on the environment.",
            ]}
          />
        </div>
      </div>
    </div>
  );
}
