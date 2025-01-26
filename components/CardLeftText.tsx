type Props = {
  title: string;
  description: string;
  videosrc: string;
};
export default function CardLeftText({ title, description, videosrc }: Props) {
  return (
    <div className="bg-white pt-20 relative sm:flex sm:flex-row sm:items-start md:justify-start sm:mx-30 h-full">
      <div className="card-text pl-1 flex flex-col items-start md:w-1/3 md:flex-grow md:order-first">
        <div className="flex-col">
          <h2 className="text-xl pb-2 font-light">{title}</h2>
          <p className="w-60 pb-5">{description}</p>
        </div>
      </div>
      <div className="card-video md:w-2/3 md:order-frist">
        <div className="relative w-full h-[200px] overflow-hidden sm:h-[480px]">
          <video
            className="absolute top-0 left-0 w-screen h-full object-cover"
            autoPlay
            loop
            muted
            src={videosrc}
          />
        </div>
      </div>
    </div>
  );
}
