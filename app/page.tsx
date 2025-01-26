import Link from "next/link";
import { PageWrapper } from "@/components/PageWrapper";
import HeaderVideo from "@/components/HeaderVideo";
import SeriesContainer from "@/components/SeriesContainer";
import CardLeftText from "@/components/CardLeftText";
import CardRightText from "@/components/CardRightText";
import VideoCardTextLeft from "@/components/VideoCardTextLeft";
import VideoCardTextRight from "@/components/VideoCardTextRight";

export default function Home() {
  const video1src = "/videos/Kirin.mp4";
  const video2src = "/videos/one_dial.mp4";
  const video3src = "/videos/hygienic.mp4";
  return (
    <PageWrapper>
      <main className="snap-y">
        <HeaderVideo />
        <SeriesContainer />
        <div className="felx flex justify-center items-center h-[200px] w-screen bg-center pt-30 bg-techStyle bg-fixed bg-cover bg-no-repeat sm:h-[400px] sm:w-screen">
          <div className=" text-primary font-custom font-black text-2xl sm:text-4xl">
            Intelligent Technologies
          </div>
        </div>
        <div className="text-primary font-thin font-custom  pt-10 sm:px-40 sm:pt-20 text-xl">
          AXENT, with its ultimate technologies, continuously overturns,
          surpasses, leads, and rewrites the history of the bathroom industry.
        </div>
        <VideoCardTextLeft
          title="0000000000000"
          description="Expels unpleasant odors rapidly contributing to an enhanced bathroom experience."
          videosrc={video3src}
        />
        <VideoCardTextRight
          title="0000000000000"
          description="Expels unpleasant odors rapidly contributing to an enhanced bathroom experience."
          videosrc={video3src}
        />
      </main>
    </PageWrapper>
  );
}
