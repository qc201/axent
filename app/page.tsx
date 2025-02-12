import HeaderVideo from "@/components/HeaderVideo";
import SeriesContainer from "@/components/SeriesContainer";
import VideoCardTextLeft from "@/components/VideoCardTextLeft";
import VideoCardTextRight from "@/components/VideoCardTextRight";
import { ProductInfo } from "@/types/global";
import { data } from "@/lib/data";
import RevealCard from "@/components/RevealCard";
const regularData = data.filter((d: ProductInfo) => d.category === "regular");
export default function Home() {
  const video1src =
    "https://player.vimeo.com/video/1052444481?h=106f7e854f;badge=0&amp;player_id=1&amp;app_id=58479&muted=1&autoplay=1&controls=0&loop=1&autopause=0&dnt=1";
  const video2src =
    "https://player.vimeo.com/video/1052444467?h=ab2b0d295e;badge=0&amp;player_id=2&amp;app_id=58479&muted=1&autoplay=1&controls=0&loop=1&autopause=0&dnt=1";
  const video3src =
    "https://player.vimeo.com/video/1052444501?h=f50df54449;badge=0&amp;player_id=3&amp;app_id=58479&muted=1&autoplay=1&controls=0&loop=1&autopause=0&dnt=1";
  const video4src =
    "https://player.vimeo.com/video/1053612766?h=0e8ac63f83;badge=0&amp;player_id=4&amp;app_id=58479&muted=1&autoplay=1&controls=0&loop=1&autopause=0&dnt=1";

  return (
    <main>
      <HeaderVideo />
      <div className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1  md:px-20 md:pt-10 md:mb-10 sm:mb-5">
        <RevealCard
          imgsrc={"/series_img/one-c-plus-600_800.png"}
          title={"AXENT.ONE C PLUS"}
          imgalt={"AXENT.ONE C PLUS"}
          pagelink={"/bathroom/intelligent/one-c-plus"}
          subTitle={"Ingelligent toilet with KIRIN Flush System"}
          intro={
            "This award-winning intelligent toilet is equipped with the latest smart-ware technology customize your AXENT.ONE C+ functions with the swipe of a sensor or click of a button. "
          }
          available={true}
        />

        <RevealCard
          available={true}
          imgsrc={"/live_img/basin-header-1024_600.png"}
          title={"AXENT.ONE PLUS"}
          imgalt={"AXENT.ONE PLUS"}
          pagelink={"/bathroom/intelligent/one-plus"}
          subTitle={"Ingelligent toilet with KIRIN Flush System"}
          intro={
            "Inspired by our success and lessons learned in Europe and Asia's notoriously condensed urban environments, we are introducing North America's most intuitive and space-saving toilet – the AXENT.ONE Plus wall-hung intelligent toilet."
          }
        />

        <RevealCard
          available={true}
          imgsrc={"/series_img/primus-600_800.png"}
          title={"Primus"}
          imgalt={"Primus"}
          pagelink={"/bathroom/regular/primus"}
          subTitle={"Minimalist Lifestyle with Kirin Flush"}
          intro={
            "Adopting an aesthetically pleasing streamlined design and a sleek flat white exterior, it aligns with modern home aesthetics. The efficient Kirin Flush System ensures pristine cleanliness after every use, offering the enjoyment of a comfortable life."
          }
        />

        <RevealCard
          available={true}
          imgsrc={"/live_img/mint-header-1024_600.png"}
          title={"AXENT.MINT"}
          imgalt={"mint"}
          pagelink={"/bathroom/mint"}
          subTitle={
            "AXENT-Mint inherits the AXENT Group's philosophy of combining aesthetics with cutting edge technology."
          }
          intro={
            "AXENT-MINT embraces LOHAS aesthetics. We are optimistic, inclusive, and eager to explore new ideas. With diverse designs and colorful creativity, we shape a colorful world with AXENT-MINT characteristics."
          }
        />

        <RevealCard
          available={false}
          imgsrc={"/products_img/novia-cover-1024_600.png"}
          title={"NOVIA"}
          imgalt={"NOVIA"}
          pagelink={"/bathroom/novia"}
          subTitle={"The Faucet-Free Spa Experience of the Future"}
          intro={
            "A revolutionary masterpiece with a cool, sculpted profile and fully integrated, seamless intelligent functionality "
          }
        />

        <RevealCard
          available={false}
          imgsrc={"/products_img/meta-cover.png"}
          title={"META"}
          imgalt={"META"}
          pagelink={"/bathroom/meta"}
          subTitle={"COMING SOON..."}
          intro={" "}
        />
      </div>
      <div className="pt-10 flex justify-center items-center h-[300px] w-screen bg-center pt-30 bg-techStyle sm:bg-fixed bg-cover bg-no-repeat sm:h-[400px] sm:w-screen">
        <div className=" text-white font-custom font-black text-2xl sm:text-4xl ">
          Intelligent Technologies
        </div>
      </div>
      <div className="text-primary font-thin font-custom  pt-10 md:px-40 sm:px-5 md:pt-20 text-xl">
        AXENT, with its ultimate technologies, continuously overturns,
        surpasses, leads, and rewrites the history of the bathroom industry.
      </div>
      <VideoCardTextRight
        id="1"
        className="text-primary"
        title="Kirin Pressure-assisted Flush Technology"
        description="Incorporating advanced air-energy accumulator boosting technology, it ensures that every flush demonstrates exceptional power and force. With an ultra-low flushing volume of 3.8L / 1 Gal., it exemplifies its remarkable environmental protection and energy-saving characteristics. "
        videosrc={video1src}
      />
      <VideoCardTextLeft
        id="2"
        className="text-primary"
        title="ONE.DIAL Technology"
        description="It is seamlessly integrated with the Intelligent toilet. The user can effortlessly adjust parameters such as water flow intensity and temperature during the flushing process by a simple twist and press of the control knob. "
        videosrc={video2src}
      />
      <VideoCardTextRight
        id="3"
        className="text-primary"
        title="Intelligent Toilet Technology"
        description="It boasts intelligent features including rear wash and front wash, seat heating, off-seat auto flush, and proximity-activated lid opening. All these features comprehensively deliver a hygienic, comfortable, and convenient cleansing experience to users.​"
        videosrc={video3src}
      />
      <VideoCardTextLeft
        id="4"
        className="text-primary"
        title="App Control"
        description="Independently designed and developed by AXENT, this App is tailored for use with the smart toilet. The seamless remote control offers ease of use and peace of mind to its users."
        videosrc={video4src}
      />
    </main>
  );
}
