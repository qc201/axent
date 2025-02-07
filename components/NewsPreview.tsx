import React from "react";
import slugify from "@/lib/slugify";


export default function NewsPreview() {
  const title = slugify("AXENT Switzerland to Unveil Cutting-Edge Bathroom Innovations at KBIS 2024 in Las Vegas");
  console.log(title)
  return <div className="news-container sm:px-60 px-5 sm:pt-16 pt-20 font-custom text-primary flex flex-col justify-center items-center">
    <div className="title pt-20 font-extrabold text-3xl ">

      AXENT Switzerland to Unveil Cutting-Edge Bathroom Innovations at KBIS 2024 in Las Vegas
    </div>

    <div className="cover-img pt-10 sm:w-full w-screen flex flex-col items-center ">
      <img src="/blog_img/kbis2024.png" alt="cover image" className="w-full h-full object-contain" />
    </div>

    <div className="news-content pt-10 font-thin text-lg">
      The Kitchen & Bath Industry Show (KBIS) 2024, held in Las Vegas, Nevada, marked a significant milestone as the largest annual kitchen and bath event to date. The show featured a record-breaking number of exhibitors and attendees, highlighting the industry's latest innovations and trends.
    </div>

    <div className="flex justify-center font-custom text-primary ">
      <div className="aspect-w-16 aspect-h-9 sm:w-96 w-screen">
        <iframe src="https://player.vimeo.com/video/1054334050?h=775685778c" frameBorder="0" allow="fullscreen"></iframe>
      </div>
    </div>
    <div className="news-content pt-10 font-thin text-lg">
      Building on the enthusiasm from previous years, AXENT returns to KBIS with a range of innovative products designed to enhance modern living. Among the highlights is the award-winning AXENT.ONE C Plus intelligent toilet, which offers features such as rear and front cleansing, adjustable seat warming, warm-air drying, an intuitive nightlight, and a convenient remote control. Users can also operate the toilet via a mobile app, providing three distinct methods of control—a notable advantage over competitors.


    </div>
    <div className="news-content pt-10 font-thin text-lg">
      AXENT's participation in KBIS 2024 underscores its dedication to expanding its presence in the North American market. The company anticipates that the exposure and connections made during the show will lead to increased sales and market share across the region.
    </div>
  </div>
}
