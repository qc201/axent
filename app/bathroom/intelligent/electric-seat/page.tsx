"use client";
import ProductSketch from "@/components/ProductSketch";
import FeatureCard from "@/components/FeatureCard";
import { data } from "../../../../lib/data"; //all product data in lib

import MaskText from "@/components/MaskText";

export default function ElectricSeat() {
  const electricSeatData = data[3];
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
        <div className="pt-10 flex flex-col sm:flex-row-reverse  w-full justify-between sm:items-end">
          <MaskText
            className="my-5  sm:my-10"
            phrases={[
              "Intelligent Technology for 180° Degrees of Clean",
              "The Milton intelligent bidet seat offers fully customizable rear and front cleansing options. Additional oscillating, pulsating massage and aerated bubbly water infusion technology are just a few of the customizable features you can personalize and program into your Milton intelligent bidet.",
            ]}
          />
        </div>

        <div className="pt-10 flex flex-col sm:flex-row w-full justify-between sm:items-end sm:text-end">
          <MaskText
            className="w-full sm:ml-10  my-5  sm:my-10"
            phrases={[
              "Instant Comfort",
              "Unlike clunky bidet models that require tank water heating systems, the Milton intelligent bidet seat features instant water heating technology to reduce your water demands while ensuring a luxurious and comfortably warm bidet cleansing experience. This instant heating technology also lends its space-saving benefits to the Milton’s slim, modern design.",
            ]}
          />
        </div>

        <div className="pt-10 flex flex-col sm:flex-row-reverse w-full max-h-[500px] justify-end sm:items-end overflow-hidden">
          <MaskText
            className=" my-5  sm:my-10"
            phrases={[
              "Expertly Designed for Durability",
              "From heavy load-bearing lids to quick release and easy to clean bidet seats, the Milton is expertly designed to meet all of your bathroom needs.",
            ]}
          />
        </div>
        <div className="pt-10 flex flex-col sm:flex-row w-full justify-between sm:items-end sm:text-end">
          <MaskText
            className="w-full sm:ml-10  my-5  sm:my-10"
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
