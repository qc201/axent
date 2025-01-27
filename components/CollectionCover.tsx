import Image from "next/image";
import Link from "next/link";
import classNames from "classnames"; // Import the classnames library

type Props = {
  model: string;
  imgUrl: string;
  imgAlt: string;
  width: number;
  height: number;
  linkTo: string;
  className?: string;
};

export default function CollectionCover({
  model,
  imgUrl,
  imgAlt,
  width,
  height,
  linkTo,
  className = "",
}: Props) {
  return (
    <>
      <Link
        href={linkTo}
        className={classNames("yourDefaultTextClassName", className)}
      >
        <div className="group relative flex items-center justify-center w-full h-full">
          <Image
            width={width}
            height={height}
            src={imgUrl}
            alt={imgAlt}
            className=" group-hover:scale-95 ease-in duration-300 object-contain"
          />
          {/*  */}
          <div className="opacity-80 sm:opacity-0 group-hover:opacity-80 transition-opacity ease-in-out duration-500 absolute z-50 cursor-pointer">
            <p className=" text-sm text-primary py-2 px-4 font-custom font-thin bg-white rounded-3xl md:text-lg">
              VIEW {model}
            </p>
          </div>
        </div>
      </Link>
    </>
  );
}
