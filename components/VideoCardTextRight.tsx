type Props = {
  title: string;
  description: string;
  videosrc: string;
};
export default function VideoCardTextRight({
  title,
  description,
  videosrc,
}: Props) {
  return (
    <div className="pt-10 sm:px-40 sm:flex sm:flex-row sm:gap-5">
      <div className="sm:w-4/5 relative w-full h-[200px] overflow-hidden sm:h-[480px]">
        <video
          className="absolute top-0 left-0 w-screen h-full object-cover"
          autoPlay
          loop
          muted
          src={videosrc}
        />
      </div>
      <div className="sm:w-1/5 font-custom text-primary text-end sm:flex sm:flex-col">
        <div className="font-black text-xl py-2 sm:pb-5">{title}</div>
        <div className="font-thin text-xl sm:pt-0 sm:pb-0">{description}</div>
      </div>
    </div>
  );
}
