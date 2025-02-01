"use client";

import CollectionCover from "@/components/CollectionCover";
import MaskText from "@/components/MaskText";
import Image from "next/image";


export default function Novia() {


  // category page will have x-axis margin of 40 for computer, 10 for cellphone
  return (
    <div>
      <div className="font-custom flex flex-col items-center justify-center bg-fixed bg-noviaHeader w-screen bg-cover bg-center bg-no-repeat sm:min-h-[1000px] min-h-[600px]">
        <MaskText
          phrases={["AXENT.NOVIA"]}
          className="sm:text-6xl text-4xl text-white font-extrabold "
        />
        <MaskText
          className="flex flex-col pt-10 mx-5 sm:mx-20 text-white font-custom font-black sm:text-lg text-md"
          phrases={["COMING SOON..."]}
        />
      </div>
      <MaskText
        className="gap-1 flex flex-col py-10 mx-5 sm:mx-20 text-primary font-custom font-black sm:text-5xl text-lg"
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
          className="sm:w-1/2 w-4/5 object-contain"
        />
      </div>

      <div className="sm:mt-10 font-custom flex items-center justify-center bg-fixed bg-noviaTub w-screen bg-cover bg-center bg-no-repeat sm:min-h-[1000px] min-h-[600px]">
        <MaskText
          phrases={["A bathtub with more than meets the eye"]}
          className="text-6xl text-white font-extrabold"
        />
      </div>

      {/* tub under pollar light */}
      <div className="flex sm:flex-row flex-col-reverse items-center justify-center sm:items-end sm:justify-between p-10">
        <MaskText
          phrases={["The Faucet-Free Spa Experience of the Future"]}
          className="sm:text-6xl text-xl text-primary font-extrabold"
        />
        <Image
          src={"/products_img/novia-1.png"}
          alt={"tub under pollar light "}
          width={600}
          height={1024}
          className="sm:w-1/2 w-4/5 object-contain"
        />
      </div>

      {/* novia tub in black and white background */}
      <div className="bg-noviaBlackWhite bg-cover bg-fixed bg-center  bg-no-repeat sm:min-h-[600px] min-h-[600px]">
        <div className="flex justify-start items-end">
          <div className="w-2/5 ">
            <MaskText
              className="w-full flex flex-col items-start justify-start  gap-1 pt-10  sm:mx-20 text-white font-custom font-thin sm:text-xl text-lg"
              phrases={[
                "Its faucet-less design lends to the bathtub’s revolutionary concept – that is a bathtub with more than meets the eye. From a single center the tub can fill, drain and produce a luxurious massaging bathing experience. The innovative design vision to introduce more functionality in a chicer, more artful manner, is compliments of AXENT’s newest design partner, Mr.Arthur Eisenkrein. ",
              ]}
            />
          </div>
        </div>
      </div>


      {/* view novia products section */}
      <div className="mt-10 sm:px-40 ">
        <div className="flex items-center justify-center py-10">
          <MaskText
            phrases={["VIEW NOVIA SERIES"]}
            className="sm:text-6xl text-xl text-primary font-extrabold"
          />
        </div>

        <div className="grid sm:grid-cols-4 grid-cols-3 overflow-hidden">
          {/*shower*/}
          <CollectionCover
            imgUrl="/products_img/novia-shower-gun.png"
              imgAlt="novia shower product"
              linkTo="/bathroom/novia"
            width={300}
            height={300}
              model="NOVIA SHOWER"
            className="w-full sm:h-[300px] h-[200px] object-cover"
            />

          {/*mixer*/}

          <CollectionCover
            imgUrl="/products_img/novia-mixer-gun.png"
              imgAlt="novia shower product"
              linkTo="/bathroom/novia"
            width={300}
            height={300}
              model="NOVIA MIXER"
            className="w-full sm:h-[300px] h-[200px] object-cover"
            />

          {/*soap*/}

          <CollectionCover
            imgUrl="/products_img/novia-soap-dish-gun.png"
              imgAlt="novia shower product"
              linkTo="/bathroom/novia"
            width={300}
            height={300}
            model="NOVIA SOAP DISH"
            className="w-full sm:h-[300px] h-[200px] object-cover"
            />

          {/*tissue holder*/}

          <CollectionCover
            imgUrl="/products_img/novia-tissue-holder-gun.png"
              imgAlt="novia shower product"
              linkTo="/bathroom/novia"
            width={300}
            height={300}
            model="NOVIA TISSUE HOLDER"
            className="w-full sm:h-[300px] h-[200px] object-cover"
            />

          {/*shelf*/}
          <CollectionCover
            imgUrl="/products_img/novia-shelf-gun.png"
              imgAlt="novia shower product"
              linkTo="/bathroom/novia"
            width={300}
            height={300}
              model="NOVIA MIXER"
            className="w-full sm:h-[300px] h-[200px] object-cover"
            />

          {/*couple*/}
          <CollectionCover
            imgUrl="/products_img/novia-couple-gun.png"
              imgAlt="novia shower product"
              linkTo="/bathroom/novia"
            width={300}
            height={300}
            model="NOVIA COUPLE"
            className="w-full sm:h-[300px] h-[200px] object-cover"
            />

          {/*bath towel holder*/}
          <CollectionCover
            imgUrl="/products_img/novia-bath-towel-gun.png"
              imgAlt="novia shower product"
              linkTo="/bathroom/novia"
            width={300}
            height={300}
            model="NOVIA BATH TOWEL"
            className="w-full sm:h-[300px] h-[200px] object-cover"
            />

          {/* towel racks*/}
          <CollectionCover
            imgUrl="/products_img/novia-towel-rack-gun.png"
              imgAlt="novia shower product"
              linkTo="/bathroom/novia"
            width={300}
            height={300}
            model="NOVIA TOWEL RACK"
            className="w-full sm:h-[300px] h-[200px] object-cover"
            />

          {/* cabinet*/}
          <CollectionCover
            imgUrl="/products_img/novia-bath-cabinet-gold.png"
              imgAlt="novia shower product"
              linkTo="/bathroom/novia"
            width={300}
            height={300}
            model="NOVIA CABINET"
            className="w-full sm:h-[300px] h-[200px] object-cover"
            />

          {/* intelligent toilet*/}
          <CollectionCover
            imgUrl="/products_img/novia-intelligent-toilet-gold.png"
              imgAlt="novia shower product"
              linkTo="/bathroom/novia"
            width={300}
            height={300}
            model="NOVIA INTELLIGENT TOILET"
            className="w-full sm:h-[300px] h-[200px] object-cover"
            />

          {/* wall hang toilet*/}
            <CollectionCover

            imgUrl="/products_img/novia-wall-hang-white.png"
              imgAlt="novia shower product"
              linkTo="/bathroom/novia"
            width={300}
            height={300}
            model="NOVIA TOILET"
            className="w-full sm:h-[300px] h-[200px] object-cover"
          />
        </div>
      </div>
    </div>
  );
}
