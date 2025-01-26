import Image from "next/image";
import Link from "next/link";

type Props = {
  imgsrc: string;
  title: string;
  imgalt: string;
  pagelink: string;
};

export default function ButtonCard({ imgsrc, title, imgalt, pagelink }: Props) {
  return (
    <div className="group flex flex-col items-center snap-start sticky top-0">
      <div className="overflow-hidden">
        <Image
          src={imgsrc}
          alt={imgalt}
          width="300"
          height="400"
          className="w-full h-screen sm:h-[300px] object-cover group-hover:scale-110 transition-all duration-1000 cursor-pointer"
        />
      </div>
      <div className="group-hover:bg-gray-500 bg-primary sm:bg-transparent text-white text-lg font-black sm:font-thin font-custom transition-all duration-500 absolute bottom-20 sm:text-sm  border-primary border-1 p-2 rounded-lg sm:bottom-10">
        <Link href={pagelink}>{title}</Link>
      </div>
    </div>
  );
}
