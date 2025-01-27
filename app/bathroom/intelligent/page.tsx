import { data } from "../../../lib/data"; //all product data in lib
import { ProductInfo } from "@/types/global";
import CollectionCover from "@/components/CollectionCover";

export default function Intelligent() {
  // Filter the data where the category is "intelligent"
  const intelligentData = data.filter(
    (d: ProductInfo) => d.category === "intelligent"
  );

  return (
    <div>
      <div className="flex flex-col gap-5 pt-10">
        <div className="basis-1/2">
          <CollectionCover
            imgUrl={intelligentData[0].coverSrc}
            imgAlt={intelligentData[0].imgAlt}
            linkTo="/products/sli/sli5400"
            width={400}
            height={300}
            model="SLi5400"
          />
        </div>
        <div className="basis-1/2 flex flex-row justify-between">
          <CollectionCover
            imgUrl={intelligentData[1].coverSrc}
            imgAlt={intelligentData[1].imgAlt}
            linkTo="/products/sli/sli5200"
            width={300}
            height={400}
            model="SLi5200"
          />
          <CollectionCover
            imgUrl={intelligentData[0].coverSrc}
            imgAlt={intelligentData[0].imgAlt}
            linkTo="/products/sli/sli4000"
            width={400}
            height={300}
            model="SLi4000"
          />
        </div>
      </div>
    </div>
  );
}
