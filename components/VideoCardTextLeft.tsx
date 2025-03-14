import classNames from "classnames";

type Props = {
  title: string;
  description: string;
  videosrc: string;
  className?: string;
  id: string;
};
export default function VideoCardTextLeft({
  title,
  description,
  videosrc,
  className,
  id,
}: Props) {
  return (
    <div className={classNames(className)}>
      <div className="md:px-40 md:flex md:flex-row md:gap-5 pt-10 font-custom">
        <div className="md:order-2 md:w-3/5 relative w-full h-[200px] overflow-hidden md:h-[360px]">
          <div className="aspect-w-16 aspect-h-9">
            <iframe
              id={id}
              src={videosrc}
              frameBorder="0"
              allow="autoplay"
            ></iframe>
          </div>
        </div>
        <div className="md:w-2/5 md:order-1 font-custom">
          <div className="font-black text-xl py-2 md:pb-5">{title}</div>
          <div className="font-thin text-xl">{description}</div>
        </div>
      </div>
    </div>
  );
}
