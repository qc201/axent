"use client";
import { data } from "../../../lib/data";
import { ProductInfo } from "@/types/global";
import CollectionCover from "@/components/CollectionCover";
import MaskText from "@/components/MaskText";
import Image from "next/image";
import InfoCard from "@/components/InfoCard";
import { PHASE_PRODUCTION_BUILD } from "next/dist/shared/lib/constants";

export default function Novia() {
  // category page will have x-axis margin of 40 for computer, 10 for cellphone
  const noviaData = data.filter((d: ProductInfo) => d.category === "novia");
  return (
    <div>
      <div className="font-custom flex flex-col items-center justify-center md:bg-fixed bg-noviaHeader w-screen md:bg-cover bg-contain bg-center bg-no-repeat md:min-h-[1000px] min-h-[300px]">
        <MaskText
          phrases={["AXENT.NOVIA"]}
          className="md:text-6xl text-4xl text-white font-extrabold "
        />
        <MaskText
          className="flex flex-col pt-10 mx-5 md:mx-20 text-white font-custom font-black md:text-lg text-md"
          phrases={["COMING SOON..."]}
        />
      </div>
      <MaskText
        className="gap-1 flex flex-col py-10 mx-5 md:mx-20 text-primary font-custom font-black md:text-5xl text-lg"
        phrases={[
          "A revolutionary masterpiece with a cool, sculpted profile and fully integrated, seamless intelligent functionality",
        ]}
      />
      <div className="flex items-center justify-center p-10">
        <Image
          src={"/products_img/novia-4.png"}
          alt={"white tub by window with green background"}
          width={400}
          height={600}
          className="md:w-1/2 w-4/5 object-contain"
        />
      </div>

      <div className="md:mt-10 font-custom flex items-center justify-center md:bg-fixed bg-noviaTub w-screen md:bg-cover bg-contain bg-center bg-no-repeat md:min-h-[1000px] min-h-[700px]">
        <MaskText
          phrases={["A bathtub with more than meets the eye"]}
          className="md:text-6xl text-xl text-white font-extrabold"
        />
      </div>

      {/* tub under pollar light */}
      <div className="flex md:flex-row flex-col-reverse items-center justify-center md:items-end md:justify-between p-10">
        <MaskText
          phrases={["The Faucet-Free Spa Experience of the Future"]}
          className="md:text-6xl text-xl text-primary font-extrabold"
        />
        <Image
          src={"/products_img/novia-1.png"}
          alt={"tub under pollar light "}
          width={600}
          height={1024}
          className="md:w-1/2 w-4/5 object-contain"
        />
      </div>

      {/* novia tub in black and white background */}
      <div className="bg-noviaBlackWhite bg-cover md:bg-fixed bg-center  bg-no-repeat md:min-h-[600px] min-h-[600px]">
        <div className="flex justify-start items-end">
          <div className="w-2/5 ">
            <MaskText
              className="w-full flex flex-col items-start justify-start  gap-1 pt-10  md:mx-20 text-white font-custom font-thin md:text-xl text-lg"
              phrases={[
                "Its faucet-less design lends to the bathtub’s revolutionary concept – that is a bathtub with more than meets the eye. From a single center the tub can fill, drain and produce a luxurious massaging bathing experience. The innovative design vision to introduce more functionality in a chicer, more artful manner, is compliments of AXENT’s newest design partner, Mr.Arthur Eisenkrein. ",
              ]}
            />
          </div>
        </div>
      </div>

      {/* view novia products section */}
      <div>
        <div className="flex items-center justify-center py-10">
          <MaskText
            phrases={["VIEW NOVIA COLLECTION"]}
            className="md:text-6xl text-xl text-primary font-extrabold"
          />
        </div>
        <div className="grid md:grid-cols-4 grid-cols-2  gap-6 md:px-20 sm:px-10 px-5 py-10">
          {noviaData.map((data, index) => (
            <InfoCard
              key={data.id}
              name={data.name}
              imgUrl={data.coverSrc}
              linkTo={data.linkTo}
              sku={data.sku}
              unavailable={data.unavailable}
            />
          ))}
        </div>

        {/* <div className="grid md:grid-cols-4 grid-cols-3 overflow-hidden">
        
          <CollectionCover
            imgUrl="/products_img/novia-shower-gun.png"
            imgAlt="novia shower product"
            linkTo="/bathroom/novia"
            width={300}
            height={300}
            model="NOVIA SHOWER"
            className="w-full md:h-[300px] h-[200px] object-cover"
          />

         

          <CollectionCover
            imgUrl="/products_img/novia-mixer-gun.png"
            imgAlt="novia shower product"
            linkTo="/bathroom/novia"
            width={300}
            height={300}
            model="NOVIA MIXER"
            className="w-full md:h-[300px] h-[200px] object-cover"
          />

       

          <CollectionCover
            imgUrl="/products_img/novia-soap-dish-gun.png"
            imgAlt="novia shower product"
            linkTo="/bathroom/novia"
            width={300}
            height={300}
            model="NOVIA SOAP DISH"
            className="w-full md:h-[300px] h-[200px] object-cover"
          />

        

          <CollectionCover
            imgUrl="/products_img/novia-tissue-holder-gun.png"
            imgAlt="novia shower product"
            linkTo="/bathroom/novia"
            width={300}
            height={300}
            model="NOVIA TISSUE HOLDER"
            className="w-full md:h-[300px] h-[200px] object-cover"
          />

        
          <CollectionCover
            imgUrl="/products_img/novia-shelf-gun.png"
            imgAlt="novia shower product"
            linkTo="/bathroom/novia"
            width={300}
            height={300}
            model="NOVIA MIXER"
            className="w-full md:h-[300px] h-[200px] object-cover"
          />

     
          <CollectionCover
            imgUrl="/products_img/novia-couple-gun.png"
            imgAlt="novia shower product"
            linkTo="/bathroom/novia"
            width={300}
            height={300}
            model="NOVIA COUPLE"
            className="w-full md:h-[300px] h-[200px] object-cover"
          />

     
          <CollectionCover
            imgUrl="/products_img/novia-bath-towel-gun.png"
            imgAlt="novia shower product"
            linkTo="/bathroom/novia"
            width={300}
            height={300}
            model="NOVIA BATH TOWEL"
            className="w-full md:h-[300px] h-[200px] object-cover"
          />

        
          <CollectionCover
            imgUrl="/products_img/novia-towel-rack-gun.png"
            imgAlt="novia shower product"
            linkTo="/bathroom/novia"
            width={300}
            height={300}
            model="NOVIA TOWEL RACK"
            className="w-full md:h-[300px] h-[200px] object-cover"
          />

         
          <CollectionCover
            imgUrl="/products_img/novia-bath-cabinet-gold.png"
            imgAlt="novia shower product"
            linkTo="/bathroom/novia"
            width={300}
            height={300}
            model="NOVIA CABINET"
            className="w-full md:h-[300px] h-[200px] object-cover"
          />

        
          <CollectionCover
            imgUrl="/products_img/novia-intelligent-toilet-gold.png"
            imgAlt="novia shower product"
            linkTo="/bathroom/novia"
            width={300}
            height={300}
            model="NOVIA INTELLIGENT TOILET"
            className="w-full md:h-[300px] h-[200px] object-cover"
          />

       
          <CollectionCover
            imgUrl="/products_img/novia-wall-hang-white.png"
            imgAlt="novia shower product"
            linkTo="/bathroom/novia"
            width={300}
            height={300}
            model="NOVIA TOILET"
            className="w-full md:h-[300px] h-[200px] object-cover"
          />

       
          <CollectionCover
            imgUrl="/products_img/novia-air-bathtub-cover.png"
            imgAlt="novia air bathtub"
            linkTo="/bathroom/novia/air-bathtub"
            width={300}
            height={300}
            model="NOVIA AIR BATHTUB"
            className="w-full md:h-[300px] h-[200px] object-cover"
          />
        </div> */}
      </div>
    </div>
  );
}
