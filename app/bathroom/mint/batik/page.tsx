"use client";
import ProductSketch from "@/components/ProductSketch";
import FeatureCard from "@/components/FeatureCard";
import { data } from "../../../../lib/data"; //all product data in lib
import Image from "next/image";
import MaskText from "@/components/MaskText";

export default function Batik() {
  const batikData = data.find((item) => item.id === 20);

  if (!batikData) {
    throw new Error("Product with ID 7 not found!");
  }
  const combinedValues = [
    ...(batikData.configuration?.outlook ?? []),
    ...(batikData.configuration?.watertank ?? []),
    ...(batikData.configuration?.cleaning ?? []),
    ...(batikData.configuration?.seatlid ?? []),
  ];
  return (
    <div className="pt-20 md:pt-16 md:px-[10vw]">
      <div className="bg-white pt-10">
        <div className="relative font-custom">
          <MaskText
            phrases={["Batik Bathtub"]}
            className="text-3xl md:text-6xl text-primary font-extrabold md:pl-10"
          />
          <MaskText
            phrases={["Elegant Simplicity, Tailored to Your Taste"]}
            className="text-lg md:text-3xl text-primary font-bold md:pl-10"
          />
        </div>
        <div className="flex flex-row justify-around items-center px-10 md:px-20">
          <div className="flex justify-cente ">
            <Image
              src="/products_img/batik-s-t0151.png"
              alt={"ProductSketch"}
              width={1600}
              height={900}
              className="w-auto"
            />
          </div>
          <div className="flex justify-cente border-l border-gray-400">
            <Image
              src="/products_img/batik-s-t0159.png"
              alt={"ProductSketch"}
              width={1600}
              height={900}
              className="w-auto"
            />
          </div>
          <div className="flex justify-cente border-l border-gray-400">
            <Image
              src="/products_img/batik-s-t0167.png"
              alt={"ProductSketch"}
              width={1600}
              height={900}
              className="w-auto"
            />
          </div>
        </div>
        <div className="flex w-full px-1 md:px-5">
          <p className="text-l text-primary font-thin md:text-xl md:pt-10">
            {batikData.details}
          </p>
        </div>
      </div>

      <FeatureCard
        spec={batikData.specification}
        manual={batikData.manual}
        install={batikData.install}
        sku={batikData.sku}
        collectionName={
          batikData.collection === null ? "" : batikData.collection
        }
        productImgUrl={batikData.imgSrc}
        productImgAlt="sli 1000"
        productImgHeight={500}
        productImgWidth={500}
        dimensions={
          batikData.features.dimensions === undefined
            ? ""
            : batikData.features.dimensions
        }
        overFlow={
          batikData.features.overFlow === undefined
            ? ""
            : batikData.features.overFlow
        }
        drainageMode={
          batikData.features.drainageMode === undefined
            ? ""
            : batikData.features.drainageMode
        }
        weight={
          batikData.features.weight === undefined
            ? ""
            : batikData.features.weight
        }
        capacity={
          batikData.features.capacity === undefined
            ? ""
            : batikData.features.capacity
        }
        finish={batikData.features.material}
        color={batikData.features.color}
        consumption={
          batikData.features.water === null ? "" : batikData.features.water
        }
        configurations={combinedValues}
      />

      {/* live image and video */}
      <div className="flex flex-col items-center justify-center font-custom font-thin text-primary text-sm md:text-2xl">
        <div className="flex flex-row justify-between overflow-hidden">
          <div className="w-full md:w-1/3 md:h-80">
            <Image
              src={"/products_img/batik-blue.png"}
              alt={batikData.name}
              width={300}
              height={300}
              className=" w-full h-full object-contain"
            />
          </div>
          <div className="w-full md:w-1/3 md:h-80">
            <Image
              src={"/products_img/batik-black.png"}
              alt={batikData.name}
              width={200}
              height={300}
              className="w-full h-full object-contain"
            />
          </div>
          <div className="w-full md:w-1/3 md:h-80">
            <Image
              src={"/products_img/batik-p.png"}
              alt={batikData.name}
              width={300}
              height={300}
              className="w-full h-full object-contain"
            />
          </div>
        </div>

        <div className="md:pt-10 flex flex-col md:flex-row-reverse w-full justify-between md:items-end">
          <Image
            src={"/products_img/batik-2.png"}
            alt={batikData.name}
            width={600}
            height={400}
          />
          <MaskText
            className=" my-5  md:my-10 md:mx-0 mx-5"
            phrases={[
              "Elegant Simplicity, Tailored to Your Taste",
              "The bathtub boasts a plump and rounded silhouette, exuding elegance and grandeur. The ultra-thin edge of the bathtub adds to its aesthetic appeal, creating a more spacious and airy ambiance. Crafted from a single mold, its seamless design prevents dirt and grime from accumulating, making it easy to clean.",
            ]}
          />
        </div>

        <div className="pt-10 flex flex-col md:flex-row w-full justify-between md:items-end md:text-end">
          <Image
            src={"/products_img/batik-3.png"}
            alt={batikData.name}
            width={600}
            height={300}
          />
          <MaskText
            className="w-full md:ml-10  my-5  md:my-10 md:mx-0 mx-5"
            phrases={[
              "Indulgent Soaking, Tailored to Your Desire",
              "Designed specifically for relaxation, the bathtub ensures every part of your body is thoroughly pampered. With a strip-shaped overflow drain, it prevents water from spilling over.",
            ]}
          />
        </div>

        <div className="flex flex-col md:flex-row-reverse w-full justify-between md:items-end">
          <Image
            src={"/products_img/batik-1.png"}
            alt={batikData.name}
            width={600}
            height={400}
          />
          <MaskText
            className="md:mr-5 my-5  md:my-10 md:mx-0 mx-5"
            phrases={[
              "Durability, Skin-friendliness, Long-lasting Warmth Retention",
              "Crafted from high-quality acrylic material specifically certified for bathtubs by the EU, it boasts a smooth and soft texture that is both skin-friendly and slip-resistant. With exceptional weather resistance, it retains its pristine whiteness and sturdy construction even after prolonged use. Our proprietary, high-quality resin ensures superior thermal insulation, locking in warmth for an extended period.",
            ]}
          />
        </div>
      </div>
    </div>
  );
}
