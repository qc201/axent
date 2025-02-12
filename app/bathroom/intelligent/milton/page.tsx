"use client";
import ProductSketch from "@/components/ProductSketch";
import FeatureCard from "@/components/FeatureCard";
import { data } from "../../../../lib/data"; //all product data in lib
import Image from "next/image";
import MaskText from "@/components/MaskText";

export default function Milton() {
  const miltonData = data[2];
  const combinedValues = [
    ...(miltonData.configuration?.outlook ?? []),
    ...(miltonData.configuration?.watertank ?? []),
    ...(miltonData.configuration?.cleaning ?? []),
    ...(miltonData.configuration?.seatlid ?? []),
  ];
  return (
    <div className="pt-20 md:pt-16 md:px-[10vw]">
      <ProductSketch
        title={miltonData.name}
        subtitle={miltonData.subtitle}
        description={miltonData.details}
        sketchImgs={miltonData.sketchImg}
      />
      <FeatureCard
        spec={miltonData.specification}
        manual={miltonData.manual}
        install={miltonData.install}
        sku={miltonData.sku}
        collectionName={
          miltonData.collection === null ? "" : miltonData.collection
        }
        productImgUrl={miltonData.imgSrc}
        productImgAlt="sli 1000"
        productImgHeight={500}
        productImgWidth={500}
        dimensions={
          miltonData.features.dimensions === undefined
            ? ""
            : miltonData.features.dimensions
        }
        weight={
          miltonData.features.weight === undefined
            ? ""
            : miltonData.features.weight
        }
        finish={miltonData.features.material}
        color={miltonData.features.color}
        consumption={
          miltonData.features.water === null ? "" : miltonData.features.water
        }
        configurations={combinedValues}
      />

      {/* live image and video */}
      <div className="flex flex-col items-center justify-center font-custom font-thin text-primary text-sm md:text-2xl">
        <div className="pt-10 flex flex-col md:flex-row-reverse  w-full justify-between md:items-end">
          <Image
            src={"/products_img/electric-seat-uv-1.png"}
            alt={miltonData.name}
            width={600}
            height={600}
          />
          <MaskText
            className="my-5  md:my-10 md:mx-0 mx-5"
            phrases={[
              "Intelligent Technology for 180° Degrees of Clean",
              "The Milton intelligent bidet seat offers fully customizable rear and front cleansing options. Additional oscillating, pulsating massage and aerated bubbly water infusion technology are just a few of the customizable features you can personalize and program into your Milton intelligent bidet.",
            ]}
          />
        </div>

        <div className="pt-10 flex flex-col md:flex-row w-full justify-between md:items-end md:text-end">
          <Image
            src={"/products_img/electric-seat-uv-2.jpg"}
            alt={miltonData.name}
            width={600}
            height={600}
          />
          <MaskText
            className="w-full md:ml-10  my-5  md:my-10 md:mx-0 mx-5"
            phrases={[
              "Instant Comfort",
              "Unlike clunky bidet models that require tank water heating systems, the Milton intelligent bidet seat features instant water heating technology to reduce your water demands while ensuring a luxurious and comfortably warm bidet cleansing experience. This instant heating technology also lends its space-saving benefits to the Milton’s slim, modern design.",
            ]}
          />
        </div>

        <div className="pt-10 flex flex-col md:flex-row-reverse w-full max-h-[500px] justify-end md:items-end overflow-hidden">
          <Image
            src={"/products_img/electric-seat-uv-3.jpg"}
            alt={miltonData.name}
            width={300}
            height={300}
            className="w-full h-full object-contain"
          />
          <MaskText
            className=" my-5  md:my-10 md:mx-0 mx-5"
            phrases={[
              "Expertly Designed for Durability",
              "From heavy load-bearing lids to quick release and easy to clean bidet seats, the Milton is expertly designed to meet all of your bathroom needs.",
            ]}
          />
        </div>
        <div className="pt-10 flex flex-col md:flex-row w-full justify-between md:items-end md:text-end">
          <Image
            src={"/products_img/electric-seat-uv-4.jpg"}
            alt={miltonData.name}
            width={600}
            height={600}
          />
          <MaskText
            className="w-full md:ml-10  my-5  md:my-10 md:mx-0 mx-5"
            phrases={[
              "Eco-Friendly",
              "AXENT’s bidet solutions reduce your dependence on toilet paper-a known contaminant of harmful chemicals responsible for clogging up toilets and community sewer systems alike. AXENT’s intelligent bidet seats offer a gentler, more simple and sanitary solution for bathroom cleansing with the feel good benefit of reducing one’s impact on the environment.",
            ]}
          />
        </div>
      </div>
    </div>
  );
}
