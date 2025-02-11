"use client";
import ProductSketch from "@/components/ProductSketch";
import FeatureCard from "@/components/FeatureCard";
import { data } from "../../../../lib/data"; //all product data in lib
import Image from "next/image";
import PageVideo from "@/components/PageVideo";
import MaskText from "@/components/MaskText";

export default function OneCPlus() {
  const oneCPlusData = data[0];
  const combinedValues = [
    ...(oneCPlusData.configuration?.outlook ?? []),
    ...(oneCPlusData.configuration?.watertank ?? []),
    ...(oneCPlusData.configuration?.cleaning ?? []),
    ...(oneCPlusData.configuration?.seatlid ?? []),
  ];
  return (
    <div className="pt-20 sm:pt-16 sm:px-[10vw]">
      <ProductSketch
        title={oneCPlusData.name}
        subtitle={oneCPlusData.subtitle}
        description={oneCPlusData.details}
        sketchImgs={oneCPlusData.sketchImg}
      />
      <FeatureCard
        spec={oneCPlusData.specification}
        manual={oneCPlusData.manual}
        install={oneCPlusData.install}
        sku={oneCPlusData.sku}
        collectionName={
          oneCPlusData.collection === null ? "" : oneCPlusData.collection
        }
        productImgUrl={oneCPlusData.imgSrc}
        productImgAlt={oneCPlusData.name}
        productImgHeight={500}
        productImgWidth={500}
        dimensions={
          oneCPlusData.features.dimensions === undefined
            ? ""
            : oneCPlusData.features.dimensions
        }
        weight={
          oneCPlusData.features.weight === undefined
            ? ""
            : oneCPlusData.features.weight
        }
        finish={oneCPlusData.features.material}
        color={oneCPlusData.features.color}
        consumption={
          oneCPlusData.features.water === null
            ? ""
            : oneCPlusData.features.water
        }
        configurations={combinedValues}
      />

      {/* live image and video */}
      <div className="flex flex-col items-center justify-center font-custom font-thin text-primary text-sm sm:text-2xl">
        {/* <PageVideo videoUrl="https://player.vimeo.com/video/1052444453?h=ee7556a879" /> */}
        <MaskText
          className="mx-5 my-5 sm:mx-20 sm:my-10"
          phrases={[
            "Merging Italian iconic design with cutting-edge technology, and equipped with Kirin Pressure-assisted Flush System, it features both water-saving efficiency and robust performance. Intelligent features such as auto open embody people-centered care in every detail, crafting an elegant and comfortable private space.",
          ]}
        />

        <div className="flex flex-col sm:flex-row w-full justify-between sm:items-end">
          <Image
            src={"/products_img/one-c-plus-powerfullflush.png"}
            alt={oneCPlusData.name}
            width={600}
            height={400}
          />
          <MaskText
            className="my-5  sm:my-10 sm:mx-0 mx-5 sm:ml-10"
            phrases={[
              "Air-pressurized Powerful Flush",
              "AXENT Kirin Pressure-assisted Flush System functions well in high-rise buildings, old construc- tions, and water usage peaks. Each Flush requires only 1 Gal of water, much lower than international standards. It flushes normally even during power outages.",
            ]}
          />
        </div>

        <div className="pt-10 flex flex-col sm:flex-row-reverse w-full justify-between sm:items-end">
          <Image
            src={"/products_img/one-c-plus-one-dial.png"}
            alt={oneCPlusData.name}
            width={600}
            height={400}
          />
          <MaskText
            className=" my-5  sm:my-10 sm:mx-0 mx-5 sm:mr-10"
            phrases={[
              "People-centric Smart Controls",
              "Auto open and seat adjustment means convenience and hygiene without bending over. The ONE.DIAL simplifies operations, making it easy for the elderly and children to use.",
            ]}
          />
        </div>

        <div className="flex flex-col sm:flex-row w-full justify-between sm:items-end sm:text-end">
          <Image
            src={"/products_img/one-c-plus-comfort.png"}
            alt={oneCPlusData.name}
            width={1024}
            height={600}
          />
          <MaskText
            className="w-full sm:ml-10  my-5  sm:my-10 sm:mx-0 mx-5"
            phrases={[
              "Intelligent Cleansing for Ultimate Comfort",
              "AXENT Bubble Care Technology mixes water and air in a perfect ratio for gentle skin care. Five cleansing modes cater to diverse needs, ensuring thorough cleanliness and comfort. The four-barrier nozzle effectively eliminates bacteria, guaranteeing safe cleansing.",
            ]}
          />
        </div>

        <div className="flex flex-col sm:flex-row-reverse w-full justify-between sm:items-end">
          <Image
            src={"/products_img/one-c-plus-care.png"}
            alt={oneCPlusData.name}
            width={600}
            height={400}
          />
          <MaskText
            className=" my-5  sm:my-10 sm:mr-10 sm:mx-0 mx-5"
            phrases={[
              "Thoughtful Care, Just for You",
              "Warm air drying with a delicate touch, five-grade adjustable air temperature.With five seat temperature settings and eco-friendly seat heating functions, it autonomously learns user habits to deliver personalized warmth. Intelligent deodorization with diatomaceous earth, providing powerful purification and ensuring freshness at all times.",
            ]}
          />
        </div>

        <div className="flex flex-col sm:flex-row w-full justify-between sm:items-end sm:text-end">
          <Image
            src={"/products_img/one-c-plus-safe.png"}
            alt={oneCPlusData.name}
            width={600}
            height={600}
          />
          <MaskText
            className="w-full sm:ml-10 my-5  sm:my-10 sm:mx-0 mx-5"
            phrases={[
              "Safe, Convenient and Gentle Protection",
              "A nighttime guard with gentle light and without disruption to sleep. Wireless Dual Controls (App Control and Remote Control) put all functions at your fingertips. IPX4 waterproof and moisture-resistant features provide quadruple protection for electricity and water usage, ensuring comprehensive safety.",
            ]}
          />
        </div>
      </div>
    </div>
  );
}
