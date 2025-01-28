'use client'
import { data } from "../../../lib/data"; //all product data in lib
import { ProductInfo } from "@/types/global";
import CollectionCover from "@/components/CollectionCover";
import MaskText from "@/components/MaskText";

export default function Regular() {
    // Filter the data where the category is "regular"

    const regularData = data.filter(
        (d: ProductInfo) => d.category === "regular"
    );


    //5 regular product in total 01/27/2025
    // category page will have x-axis margin of 40 for computer, 10 for cellphone

    return (
        <div>
            <div className="flex items-center justify-center font-custom bg-fixed bg-regularHeader w-screen bg-cover bg-center bg-no-repeat sm:min-h-[1000px] min-h-[600px]">
                <MaskText
                    phrases={["Toilets"]}
                    className="text-6xl text-white font-extrabold"
                />
            </div>
            <div className="flex flex-col gap-5 pt-10 mx-10 sm:mx-60">

                <CollectionCover
                    imgUrl={regularData[0].coverSrc}
                    imgAlt={regularData[0].imgAlt}
                    linkTo="/products/sli/sli5400"
                    width={1500}
                    height={500}
                    model={regularData[0].name}
                />
                <div className="flex flex-row items-end justify-center">
                    <CollectionCover
                        imgUrl={regularData[3].coverSrc}
                        imgAlt={regularData[3].imgAlt}
                        linkTo="/products/sli/sli5400"
                        width={800}
                        height={500}
                        model={regularData[3].name}
                    /></div>

                <div className="flex flex-row items-start justify-around">
                    <CollectionCover
                        imgUrl={regularData[1].coverSrc}
                        imgAlt={regularData[1].imgAlt}
                        linkTo="/products/sli/sli5400"
                        width={400}
                        height={700}
                        model={regularData[1].name}
                    />
                    <CollectionCover
                        imgUrl={regularData[2].coverSrc}
                        imgAlt={regularData[2].imgAlt}
                        linkTo="/products/sli/sli5400"
                        width={400}
                        height={700}
                        model={regularData[2].name}
                    />
                </div>
                <div className="flex flex-row items-end justify-end">

                    <CollectionCover
                        imgUrl={regularData[4].coverSrc}
                        imgAlt={regularData[4].imgAlt}
                        linkTo="/products/sli/sli5400"
                        width={500}
                        height={700}
                        model={regularData[4].name}
                    /></div>
            </div>
        </div>
    );
}
