import ButtonCard from "./ButtonCard";

export default function SeriesContainer() {
  return (
    <div className=" bg-primary flex flex-col sm:gap-10 sm:flex-row justify-center gap-0 relative sm:py-20">
      <ButtonCard
        imgsrc="/series_img/one-plus-feature.png"
        imgalt=""
        title="AXENT.ONE PLUS"
        pagelink=""
      />
      <ButtonCard
        imgsrc="/series_img/one-c-plus-600_800.png"
        imgalt=""
        title="AXENT.ONE C PLUS"
        pagelink=""
      />
      <ButtonCard
        imgsrc="/series_img/primus-600_800.png"
        imgalt=""
        title="PRIMUS"
        pagelink=""
      />
    </div>
  );
}
