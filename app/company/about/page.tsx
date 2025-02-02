"use client";
import MaskText from "@/components/MaskText";
import React from "react";
import Image from "next/image";

export default function About() {
  return (
    <div>
      <div className="font-custom bg-aboutHeader w-screen bg-cover bg-center bg-no-repeat sm:min-h-[1000px] min-h-[600px] sm:bg-fixed flex items-center justify-end">
        <div className="pr-5 flex flex-col text-end">
          <MaskText
            phrases={["BRAND STORY"]}
            className="pb-10 sm:text-6xl text-3xl text-white font-extrabold items-center justify-center"
          />
          <MaskText
            phrases={[
              "IT STARTS WITH A DREAM.",
              "A DREAM OF EXCELLENCE, BEAUTY,",
              "SIMPLICITY AND SUSTAINABILITY.",
              "A DREAM OF REVOLUTION.",
            ]}
            className="sm:text-lg text-sm text-white font-thin items-center justify-center"
          />
        </div>
      </div>

      {/* honor */}
      <div className="sm:px-40 px-5 py-10 text-primary sm:text-lg text-sm font-thin bg-white">
        <p>
          We see our story beginning with an innovative spirit and dedication to
          our philosophy of ”rethinking the bath”. When revolutionizing the
          bathroom experience, we never question the possibilities but actively
          seek out the paths to realization. Abstaining from the complexity of
          traditional bathroom products, such as bulky water tanks and electric
          pumps, we are dedicated to reshaping bathroom spaces in a more
          eco-friendly and minimalist manner.
        </p>
        <p>
          At AXENT, we constantly refine our flushing system, improve efficiency
          and reduce energy consumption, aiming for a harmonious balance between
          the city and nature. Our persistence in innovation stems from our deep
          understanding of customers and keen insights into the environment. We
          provide innovative applications for the ever-changing living
          environment. With our expertise and exploratory spirit, AXENT's
          patented innovations and minimalist designs have become benchmarks in
          the industry.
        </p>
        <p>
          We believe that the pursuit of excellence is a manifestation of life
          attitude, rather than a mere quest for superiority. Originating from
          "EXCEL- LENT," "AXENT" integrates the ultimate spirit into every
          product. Founded in Rapperswil, Switzerland, in 2008, AXENT adheres to
          the brand philosophy of "Wisdom for Life," blending minimalist
          aesthetics with ultimate technologies to offer a comprehensive range
          of bathroom products, including cutting-edge smart toilets, bathtubs,
          sanitary wares, bathroom furniture, hardware accessories, and
          same-floor drainage systems. We create integrated smart bathroom
          spaces, providing holistic smart bathroom solutions for users
          worldwide.
        </p>
      </div>
      <div className="sm:p-20 p-5 flex sm:flex-row flex-col justify-between items-end bg-primary text-white">
        <div className="basis-1/2">
          <MaskText
            phrases={["BRAND HONORS"]}
            className="pb-10 sm:text-6xl text-3xl text-white font-extrabold items-center justify-center"
          />
          <p className="sm:text-lg text-sm font-thin">
            AXENT's products have garnered numerous prestigious awards,
            including the German iF Design Award, the Red Dot Design Award, the
            German Innovation Award, and the German ICONIC AWARDS. Since 2017,
            AXENT has been featured in the "The Major German Brands” annual
            publication for eight consecutive years, which is the only bathroom
            brand to retain this honor year after year. In its more than ten
            years of existence, AXENT has continuously emerged as a prominent
            force, earning the favor of numerous top-tier clients, architects,
            and designers. Praised as a brand miracle within the industry, AXENT
            has received countless accolades and recognitions, cementing its
            reputation as a leader in the field.
          </p>
        </div>
        <div className="pt-5 basis-1/2 bg-primary h-[200px]">
          <Image
            src={"/live_img/ brand-honor.png"}
            alt={"brand honor"}
            width={1024}
            height={438}
            className="h-full w-full object-contain"
          />
        </div>
      </div>
      {/* designer */}
      <div className="font-custom bg-designers w-screen bg-cover bg-center bg-no-repeat sm:min-h-[1000px] min-h-[300px] sm:bg-fixed flex items-end justify-end">
        <div className="pr-5 flex flex-col">
          <MaskText
            phrases={[" DESIGN AESTHETICS"]}
            className="pb-10 sm:text-6xl text-3xl text-primary font-extrabold"
          />
        </div>
      </div>
      <div className="bg-white sm:p-20 p-5 ">
        <p className="sm:text-lg text-sm font-thin">
          AXENT embraces the brand philosophy and design principle of "LESS IS
          MORE," integrating elegant Italian designs into its products and
          collaborating with internationally renowned designer teams to tailor
          high-end, private bathroom spaces for exclusive enjoyment. This
          cross-boundary collaboration not only ignites a dazzling spark between
          Western aesthetics and Eastern technologies but also profoundly
          transforms people's lifestyles. Our design team brings together a
          multitude of masterminds, including the principal collaborating design
          team of MATTEO THUN & ANTONIO RODRIGUEZ, Chief Design Officer Arthur
          Eisenkrein, as well as collaborating designers Steve Leung and Phoenix
          Design. Their wisdom and creativity have jointly shaped the unique
          charm and exceptional quality of AXENT products.
        </p>
      </div>
    </div>
  );
}
