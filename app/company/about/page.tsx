"use client";
import MaskText from "@/components/MaskText";
import React from "react";
import Image from "next/image";
import VideoCardTextLeft from "@/components/VideoCardTextLeft";
import VideoCardTextRight from "@/components/VideoCardTextRight";
import { refData } from "@/lib/refData";
import ReferenceCard from "@/components/ReferenceCard";

export default function About() {
  const video1src =
    "https://player.vimeo.com/video/1052444445?h=d6ff2856e4;badge=0&amp;player_id=0&amp;app_id=58479&muted=1&autoplay=1&controls=0&loop=1";
  const video2src =
    "https://player.vimeo.com/video/1052444467?h=ab2b0d295e;badge=0&amp;player_id=0&amp;app_id=58479&muted=1&autoplay=1&controls=0&loop=1";
  const video3src =
    "https://player.vimeo.com/video/1052444501?h=f50df54449;badge=0&amp;player_id=0&amp;app_id=58479&muted=1&autoplay=1&controls=0&loop=1";
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

      {/* technologies */}
      <div className="bg-primary pt-10">
        <div className="flex items-center justify-center">
          <MaskText
            phrases={["INTELLIGENT TECHNOLOGIES"]}
            className="pb-10 sm:text-6xl text-3xl text-white font-extrabold"
          />
        </div>

        <VideoCardTextRight
          className="text-white"
          title="Kirin Pressure-assisted Flush Technology"
          description="Incorporating advanced air-energy accumulator boosting technology, it ensures that every flush demonstrates exceptional power and force. With an ultra-low flushing volume of 3.8L / 1 Gal., it exemplifies its remarkable environmental protection and energy-saving characteristics. "
          videosrc={video1src}
        />
        <VideoCardTextLeft
          className="text-white"
          title="ONE.DIAL Technology"
          description="It is seamlessly integrated with the Intelligent toilet. The user can effortlessly adjust parameters such as water flow intensity and temperature during the flushing process by a simple twist and press of the control knob. "
          videosrc={video2src}
        />
        <div className="sm:px-40 sm:flex sm:flex-row-reverse sm:gap-5 sm:pt-10 font-custom">
          <div className="sm:order-2 sm:w-3/5 relative w-full h-[200px] overflow-hidden sm:h-[360px]">
            <img
              className="h-[300px] w-full object-contain"
              src="/live_img/foam_16_9.png"
            />
          </div>
          <div className="sm:w-2/5 sm:order-1 font-custom text-white sm:text-end">
            <div className="font-black text-xl py-2 sm:pb-5">FOAM GUARD</div>
            <div className="font-thin text-xl ">
              Upon sensing human touch, it automatically generates a layer of
              dense foam to cover the water seal surface. This offers four-fold
              protection—splash prevention, odor isolation, anti-contamination,
              and bacteria suppression—ensuring comprehen- sive health
              safeguarding for users. With a magnetic rear cover for easy
              access, the system is compatible with various foamable liquids,
              allowing users to customize their foam experience freely.
            </div>
          </div>
        </div>

        <div className="pb-10 sm:px-40 sm:flex sm:flex-row items-end justify-between sm:gap-5 sm:pt-5 font-custom">
          <div className="sm:order-2 sm:w-3/5  sm:pl-20 relative w-full overflow-hidden h-[300px] sm:h-[360px]">
            <img
              className="h-96 w-full object-contain"
              src="/live_img/app.png"
            />
          </div>
          <div className="sm:w-2/5 sm:order-1 font-custom text-white ">
            <div className="font-black text-xl py-2 sm:pb-5"> APP CONTROL</div>
            <div className="font-thin text-xl ">
              Independently designed and developed by AXENT, this App is
              tailored for use with the smart toilet. The seamless remote
              control offers ease of use and peace of mind to its users.
            </div>
          </div>
        </div>
      </div>

      <div className="pt-40 sm:px-20">
        <div className="flex items-center justify-center">
          <MaskText
            phrases={["References"]}
            className="pb-10 sm:text-6xl text-3xl text-primary font-extrabold"
          />
        </div>

        <div className="grid sm:grid-cols-2 sm:gap-5 grid-cols-1">
          {refData.map((info, index) => (
            <ReferenceCard
              key={index}
              imgsrc={info.imgsrc[0]}
              title={info.title}
              imgalt={info.title}
              description={info.description}
              pagelink={info.pagelink}
              category={info.category}
              location={info.location}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
