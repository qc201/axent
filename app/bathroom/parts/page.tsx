'use client'
import { data } from "../../../lib/data"; //all product data in lib
import { ProductInfo } from "@/types/global";
import CollectionCover from "@/components/CollectionCover";
import MaskText from "@/components/MaskText";

export default function Parts() {
    // Filter the data where the category is "regular"

    const partsData = data.filter(
        (d: ProductInfo) => d.category === "parts"
    );
    // console.log(partsData.length)

    //2 parts product in total 01/27/2025
    // category page will have x-axis margin of 40 for computer, 10 for cellphone

    return (
        <div>
            <div className="flex items-center justify-center font-custom bg-fixed bg-partsHeader w-screen bg-cover bg-center bg-no-repeat sm:min-h-[1000px] min-h-[600px]">
                <MaskText
                    phrases={["Parts & Seats"]}
                    className="text-6xl text-white font-extrabold"
                />
            </div>
            <div className="flex flex-col gap-5 pt-10 mx-10 sm:mx-60">

                <CollectionCover
                    imgUrl="/products_img/primus-color-strip-black.png"
                    imgAlt={partsData[1].imgAlt}
                    linkTo="/products/sli/sli5400"
                    width={300}
                    height={500}
                    model={partsData[1].name}
                />
                <CollectionCover
                    imgUrl="/products_img/primus-color-strip-gold.png"
                    imgAlt={partsData[1].imgAlt}
                    linkTo="/products/sli/sli5400"
                    width={300}
                    height={500}
                    model={partsData[1].name}
                />
                <CollectionCover
                    imgUrl="/products_img/primus-color-strip-silver.png"
                    imgAlt={partsData[1].imgAlt}
                    linkTo="/products/sli/sli5400"
                    width={300}
                    height={500}
                    model={partsData[1].name}
                />
                <CollectionCover
                    imgUrl="/products_img/primus-color-strip-gray.png"
                    imgAlt={partsData[1].imgAlt}
                    linkTo="/products/sli/sli5400"
                    width={300}
                    height={500}
                    model={partsData[1].name}
                />
                <CollectionCover
                    imgUrl="/products_img/primus-color-strip-rose.png"
                    imgAlt={partsData[1].imgAlt}
                    linkTo="/products/sli/sli5400"
                    width={300}
                    height={500}
                    model={partsData[1].name}
                />

            </div>
        </div>
    );
}
