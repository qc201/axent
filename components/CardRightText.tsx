import React from "react";
type Props = {
  title: string;
  description: string;
  videosrc: string;
};

export default function CardRightText({ title, description, videosrc }: Props) {
  return (
    <div className="bg-white pt-20 relative md:flex md:flex-row md:space-x-8 md:ml-12 md:mr-20">
      <div className="card-text pr-1 flex flex-col items-end text-end md:w-1/3 md:flex-grow md:order-last">
        <div className="flex-col">
          <h2 className="text-xl pb-2 font-light">{title}</h2>
          <p className="w-60 pb-5">{description}</p>
        </div>
        <div className="hidden md:inline-block flex-col absolute bottom-0 group">
          <button className="bottom-0 border rounded-md transition ease-in delay-100 group-hover:bg-primary">
            <p className="text-l mx-2 text-primary transition ease-in delay-100 group-hover:text-white">
              EXPLORE
            </p>
          </button>
        </div>
      </div>
      <div className="card-video md:w-2/3 md:order-frist">
        <iframe
          src={videosrc}
          width="1600px"
          height="900px"
          className="w-full h-full object-cover"
          style={{ aspectRatio: "16/9" }}
        />
      </div>
    </div>
  );
}
