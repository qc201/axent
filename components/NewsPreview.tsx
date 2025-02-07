import React from "react";
import slugify from "@/lib/slugify";

export default function NewsPreview() {
  const title = slugify(
    "AXENT Switzerland Showcases Innovative Bathroom Solutions at ICFF 2022 in New York"
  );
  console.log(title);
  return (
    <div className="news-container sm:px-60 px-5 sm:pt-16 pt-20 font-custom text-primary flex flex-col justify-center items-center">
      <div className="title pt-20 font-extrabold text-3xl ">
        AXENT Switzerland Showcases Innovative Bathroom Solutions at ICFF 2022
        in New York
      </div>
      <div className="pt-10 flex justify-center font-custom text-primary">
        <div className="aspect-w-9 aspect-h-16 sm:w-[30vw] w-screen">
          <iframe
            src="https://player.vimeo.com/video/1054354106"
            frameBorder="0"
            allow="fullscreen"
          ></iframe>
        </div>
      </div>

      <div className="news-content pt-10 font-thin text-lg">
        AXENT Switzerland participated in the International Contemporary
        Furniture Fair (ICFF) in New York City, showcasing its innovative
        bathroom solutions to a global audience. The event, held at the Javits
        Center, is renowned for highlighting contemporary design and serves as a
        premier platform for international brands.
      </div>

      <div className="news-content pt-10 font-thin text-lg">
        At ICFF, AXENT introduced its latest advancements in bathroom
        technology, including the AXENT.One C and AXENT.One wall-hung toilets.
        These products feature tankless designs and offer functionalities such
        as rear and female wash, adjustable water temperature and flow rate,
        oscillating spray, warm air drying, seat heating, deodorization, and a
        night light. Users can control these features via a discreet remote
        control or through AXENT's dedicated smartphone app.
      </div>
    </div>
  );
}
