import Link from "next/link";
import { PageWrapper } from "@/components/PageWrapper";
import HeaderVideo from "@/components/HeaderVideo";
import SeriesContainer from "@/components/SeriesContainer";
import CardLeftText from "@/components/CardLeftText";
import CardRightText from "@/components/CardRightText";

export default function Home() {
  /**
   * all video/image source should be replaced once vimeo setup
   * down below 6 constance
   */
  const video1src: string =
    "https://player.vimeo.com/video/898219112?badge=0&autopause=0&player_id=0&app_id=58479&muted=1&autoplay=1&controls=0&loop=1&picture-in-picture";
  const video2src: string =
    "https://player.vimeo.com/video/898219070?badge=0&autopause=0&player_id=0&app_id=58479&muted=1&autoplay=1&controls=0&loop=1&picture-in-picture";
  const video3src: string =
    "https://player.vimeo.com/video/898219138?badge=0&autopause=0&player_id=0&app_id=58479&muted=1&autoplay=1&controls=0&loop=1&picture-in-picture";

  return (
    <PageWrapper>
      <main className="snap-y">
        <HeaderVideo />
        <SeriesContainer />
        {/* <div className="qc-home-section-container relative">
          <CardLeftText
            title="F4 BASED PLATFORM"
            description="Developed in house, our new technology features a single board computer controller module for our intelligent toilets."
            videosrc={video1src}
          />
        </div>

        <div className="qc-home-section-container">
          <CardRightText
            title="SPRAY TECHNIQUE"
            description="Silver wand spray module is crafted around ultimate user comfort and spotless cleaning."
            videosrc={video2src}
          />
        </div>

        <div className="qc-home-section-container">
          <CardLeftText
            title="POWERFUL DEODORIZER"
            description="Expels unpleasant odors rapidly contributing to an enhanced bathroom experience."
            videosrc={video3src}
          />
        </div> */}
      </main>
    </PageWrapper>
  );
}
