import { data } from "../../../lib/data"; //all product data in lib
import { ProductInfo } from "@/types/global";
import CollectionCover from "@/components/CollectionCover";

export default function Intelligent() {
  // Filter the data where the category is "intelligent"
  const intelligentData = data.filter(
    (d: ProductInfo) => d.category === "intelligent"
  );

  return (
    <div className="flex flex-row">
      <CollectionCover
        imgUrl={intelligentData[0].coverSrc}
        imgAlt={intelligentData[0].coverAlt}
        linkTo="/products/sli/sli5200"
        width={500}
        height={400}
        model="SLi5200"
      />
      <CollectionCover
        imgUrl={intelligentData[1].coverSrc}
        imgAlt={intelligentData[1].coverAlt}
        linkTo="/products/sli/sli5200"
        width={500}
        height={400}
        model="SLi5200"
      />
    </div>
  );
}
