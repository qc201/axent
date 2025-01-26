type Props = {
  title: string;
  description: string;
  videosrc: string;
};
export default function VideoCardTextLeft({
  title,
  description,
  videosrc,
}: Props) {
  return (
    <div className="sm:px-40 sm:flex sm:flex-row sm:gap-5 pt-10">
      <div className="sm:order-2 sm:w-4/5 relative w-full h-[200px] overflow-hidden sm:h-[480px]">
        <video
          className="absolute top-0 left-0 w-screen h-full object-cover"
          autoPlay
          loop
          muted
          src={videosrc}
        />
      </div>
      <div className="sm:w-1/5 sm:order-1 font-custom text-primary">
        <div className="font-black text-xl py-2 sm:pb-5">{title}</div>
        <div className="font-thin text-xl">{description}</div>
      </div>
    </div>
  );
}
