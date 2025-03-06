import React from "react";
import slugify from "@/lib/slugify";

export default function NewsPreview() {
  const title = slugify(
    "AXENT Switzerland Showcases Innovative Bathroom Solutions at ICFF 2022 in New York"
  );
  // console.log(title);
  return (
    <div className="news-container sm:px-60 px-5 sm:pt-16 pt-20 font-custom text-primary flex flex-col justify-center items-center">
      <div className="title pt-20 font-extrabold text-3xl ">
        AXENT Showcases Cutting-Edge Innovations at KBIS 2025: Redefining Smart Bathroom Solutions
      </div>
      <div className="relative w-full h-full overflow-hidden">
        <div className="aspect-w-16 aspect-h-9">
          <iframe
            src="https://player.vimeo.com/video/1063322035"
            frameBorder="0"
            allow="fullscreen"
            width="800"
            height="500"
          ></iframe>
        </div>
      </div>
      <div className="news-content pt-10 font-thin text-lg">
        Las Vegas, NV – The Kitchen & Bath Industry Show (KBIS) 2025 is abuzz with excitement as AXENT, a global leader in intelligent bathroom solutions, showcases its latest innovations designed to transform the industry. The company, known for its commitment to cutting-edge technology, premium design, and user-centric experiences, is introducing groundbreaking products that set new standards in both aesthetics and performance.
      </div>

      <div className="cover-img pt-10 w-full flex flex-col items-center ">
        <img src="/blog_img/kbis2025-1.jpg" alt="cover image" className="w-full h-full object-contain" />
        <div className="pt-5 font-thin text-sm ">Keith Dagarin, VP of Sales (US) of AXENT SWITZERLAND</div>
      </div>



      <div className="news-content pt-10 font-thin text-lg">
        Keith Dagarin, Vice President of Sales (US) at AXENT, expressed his enthusiasm about the brand’s growing presence in North America. “I’ve been with the company for nine years now, and we have a growing segment of business with a lot of new dealers, architects, builders, and designers who are really adopting our products. They love the designs, the performance, and the quality,” he said. Dagarin emphasized how the U.S. and Canadian markets are increasingly embracing AXENT’s intelligent bathroom solutions, marking a new era for the company in the region.
      </div>
      <div className="news-content pt-10 font-thin text-lg">
        Among the standout products introduced at KBIS 2025 is the AXENT One C+, alongside the Infinity and Novia collections. These innovations are designed to revolutionize the industry with their intelligent functionalities and sleek aesthetics. “The design is phenomenal, it’s very innovative, and our customers appreciate the ease of access to service and support,” Dagarin added. A key highlight of AXENT’s latest developments is the Kirin Flushing System, a powerful yet ultra-quiet flushing technology set to redefine efficiency and comfort in modern restrooms.
      </div>

      <div className="cover-img pt-10 w-full flex flex-col items-center ">
        <img src="/blog_img/kbis2025-2.jpg" alt="cover image" className="w-full h-full object-contain" />
        <div className="pt-5 font-thin text-sm ">Jasmine Liu, General Manger of AXENT SWITZERLAND</div>
      </div>

      <div className="news-content pt-10 font-thin text-lg">
        Jasmine Liu, General Manger of AXENT, reaffirmed the company’s vision of continuous improvement. “Research and development is the core of our foundation. We strive to produce the most cutting-edge products that excite our customers while bringing undeniable joy and quality to their lives,” she stated. Liu emphasized that AXENT aims not just to follow industry trends but to set them. “Performance and design coupled together are going to put us ahead of our competition. In the near future, everything will be able to serve your demands in a way that enhances comfort and usability.”
      </div>

      <div className="cover-img pt-10 w-full flex flex-col items-center ">
        <img src="/blog_img/kbis2025-3.jpg" alt="cover image" className="w-full h-full object-contain" />
        <div className="pt-5 font-thin text-sm ">Arthur Eisenkrein, Chief Design Officer of AXENT SWITZERLAND</div>
      </div>
      <div className="news-content pt-10 font-thin text-lg">
        At the heart of AXENT’s latest innovations is the Novia Collection, a product line driven by the principles of user-centric design and seamless technological integration. Chief Design Officer Arthur Eisenkrein highlighted the philosophy behind the collection: “Our main focus is our customers – caring and beauty are at the core of Novia. We are a technology-driven company, but technology means nothing without design. It goes hand in hand.” He further elaborated on the growing trend of all-in-one bidets and intelligent shower toilets, emphasizing how AXENT prioritizes user experience over technological complexity. “Technology should be behind the wall or inside the product, enhancing comfort rather than overwhelming the user,” Eisenkrein noted.
      </div>

      <div className="news-content pt-10 font-thin text-lg">
        A key trend highlighted by AXENT at KBIS 2025 is the growing demand for personalized design in bathroom aesthetics. “We’re starting to integrate color because designers are tired of white,” Dagarin observed. “They want to do something different, and this is great for our market and company.” This shift toward customization aligns with AXENT’s broader vision of combining technological sophistication with adaptable, stylish solutions for modern consumers.
      </div>
      <div className="cover-img pt-10 w-full flex flex-col items-center ">
        <img src="/blog_img/kbis2025-4.jpg" alt="cover image" className="w-full h-full object-contain" />
        <div className="pt-5 font-thin text-sm ">AXENT SWITZERLAND booth at KBIS2025</div>
      </div>

      <div className="news-content pt-10 font-thin text-lg">
        As AXENT continues to lead the smart bathroom revolution, the company remains committed to blending performance, design, and innovation to deliver unparalleled user experiences. With a robust lineup of intelligent products, cutting-edge flushing systems, and an unwavering dedication to customer needs, AXENT is poised to redefine the future of bathroom technology.
      </div>

      <div className="news-content pt-10 font-thin text-lg">
        With its presence at KBIS 2025, AXENT reaffirms its mission to not only meet consumer expectations but to exceed them—setting the trends that will shape the industry for years to come.
      </div>
    </div>
  );
}
