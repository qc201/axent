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
      <div className="sm:order-2 sm:w-3/5 relative w-full h-[200px] overflow-hidden sm:h-[360px]">
        <div className="aspect-w-16 aspect-h-9">
          <iframe src={videosrc} frameBorder="0" allow="autoplay"></iframe>
        </div>
      </div>
      <div className="sm:w-2/5 sm:order-1 font-custom text-primary">
        <div className="font-black text-xl py-2 sm:pb-5">{title}</div>
        <div className="font-thin text-xl">{description}</div>
      </div>
    </div>
  );
}
