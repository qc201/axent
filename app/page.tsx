import HeaderVideo from "@/components/HeaderVideo";
import SeriesContainer from "@/components/SeriesContainer";
import VideoCardTextLeft from "@/components/VideoCardTextLeft";
import VideoCardTextRight from "@/components/VideoCardTextRight";
import InfoCard from "@/components/InfoCard";
import { ProductInfo } from "@/types/global";
import { data } from "@/lib/data";

const regularData = data.filter((d: ProductInfo) => d.category === "regular");
export default function Home() {
  const video1src = "/videos/Kirin.mp4";
  const video2src = "/videos/one_dial.mp4";
  const video3src = "/videos/hygienic.mp4";
  return (
    <main>
      <HeaderVideo />

      {/* <div className="flex justify-center items-center h-[200px] w-screen bg-center pt-30 bg-techStyle bg-fixed bg-cover bg-no-repeat sm:h-[400px] sm:w-screen">
        <div className=" text-white font-custom font-black text-2xl sm:text-4xl ">
          Intelligent Technologies
        </div>
      </div> */}
      <div className="text-primary font-thin font-custom  pt-10 sm:px-40 sm:pt-20 text-xl">
        AXENT, with its ultimate technologies, continuously overturns,
        surpasses, leads, and rewrites the history of the bathroom industry.
      </div>
      <VideoCardTextRight
        title="Kirin Pressure-assisted Flush Technology"
        description="Incorporating advanced air-energy accumulator boosting technology, it ensures that every flush demonstrates exceptional power and force. With an ultra-low flushing volume of 3.8L / 1 Gal., it exemplifies its remarkable environmental protection and energy-saving characteristics. "
        videosrc={video1src}
      />
      <VideoCardTextLeft
        title="ONE.DIAL Technology"
        description="It is seamlessly integrated with the Intelligent toilet. The user can effortlessly adjust parameters such as water flow intensity and temperature during the flushing process by a simple twist and press of the control knob. "
        videosrc={video2src}
      />
      <VideoCardTextRight
        title="Intelligent Toilet Technology"
        description="It boasts intelligent features including rear wash and front wash, seat heating, off-seat auto flush, and proximity-activated lid opening. All these features comprehensively deliver a hygienic, comfortable, and convenient cleansing experience to users.​"
        videosrc={video3src}
      />
    </main>
  );
}
