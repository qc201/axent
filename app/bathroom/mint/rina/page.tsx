"use client";
import ProductSketch from "@/components/ProductSketch";
import FeatureCard from "@/components/FeatureCard";
import { data } from "../../../../lib/data"; //all product data in lib
import Image from "next/image";
import MaskText from "@/components/MaskText";

export default function Rina() {
  const rinaData = data.find((item) => item.id === 21);

  if (!rinaData) {
    throw new Error("Product with ID 7 not found!");
  }
  const combinedValues = [
    ...(rinaData.configuration?.outlook ?? []),
    ...(rinaData.configuration?.watertank ?? []),
    ...(rinaData.configuration?.cleaning ?? []),
    ...(rinaData.configuration?.seatlid ?? []),
  ];
  return (
    <div className="pt-20 md:pt-16 md:px-[10vw]">
      <ProductSketch
        title={rinaData.name}
        subtitle={rinaData.subtitle}
        description={rinaData.details}
        sketchImgs={rinaData.sketchImg}
      />
      <FeatureCard
        spec={rinaData.specification}
        manual={rinaData.manual}
        install={rinaData.install}
        sku={rinaData.sku}
        collectionName={rinaData.collection === null ? "" : rinaData.collection}
        productImgUrl={rinaData.imgSrc}
        productImgAlt="sli 1000"
        productImgHeight={500}
        productImgWidth={500}
        dimensions={
          rinaData.features.dimensions === undefined
            ? ""
            : rinaData.features.dimensions
        }
        weight={
          rinaData.features.weight === undefined ? "" : rinaData.features.weight
        }
        finish={rinaData.features.material}
        color={rinaData.features.color}
        consumption={
          rinaData.features.water === null ? "" : rinaData.features.water
        }
        configurations={combinedValues}
      />

      {/* live image and video */}
      <div className="flex flex-col items-center justify-center font-custom font-thin text-primary text-sm md:text-2xl">
        <div className="md:pt-10 flex flex-col w-full justify-between md:items-center">
          <Image
            src={"/products_img/rina-1.png"}
            alt={rinaData.name}
            width={1920}
            height={1080}
          />
          <MaskText
            className=" my-5  md:my-10 md:mx-0 mx-5"
            phrases={[
              "Switching Seamlessly Among Three Splash",
              "Enjoy the Skin-refreshing Micro-bubble Water that deeply hydrates your skin, the Fine Shower Water that offers a delicate touch, and the invigorating Cleansing Water that provides robust cleaning power. Bid farewell to monotonous shower routines, and embrace the multifaceted joys of bathing.",
            ]}
          />
        </div>

        <div className="flex flex-col md:flex-row-reverse w-full justify-between md:items-end">
          <Image
            src={"/products_img/rina-3.png"}
            alt={rinaData.name}
            width={600}
            height={400}
          />
          <MaskText
            className=" my-5  md:my-10 md:mx-0 mx-5"
            phrases={[
              " Perfume Co-created by International Perfume Masters Embrace Moments of Healing",
              "As the perfume blends with the water, it gently diffuses across your skin. A subtle aroma envelops every inch of your skin, immersing you in a bath of scent and soothing the fatigue of the day.",
            ]}
          />
        </div>

        <div className="md:pt-10 flex flex-col md:flex-row w-full justify-between md:items-end md:text-end">
          <Image
            src={"/products_img/rina-cover.png"}
            alt={rinaData.name}
            width={600}
            height={300}
          />
          <MaskText
            className="w-full md:ml-10  my-5  md:my-10 md:mx-0 mx-5"
            phrases={[
              'To help women better cleanse their skin during bathing, MINT has developed “Micro-grade or Nano-grade Bubble Water" with a diameter as minute as 0.001mm. It is as delicate as mist, gentle and non-irritatin',
              "A lot of fine, dense water droplets emerge to create a refreshing surge that invigorates the senses. Simulta- neously, the skin becomes tender, revealing a unique sense of purity.",
            ]}
          />
        </div>
      </div>
    </div>
  );
}
