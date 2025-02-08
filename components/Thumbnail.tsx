import Image from "next/image";
import Link from "next/link";

type Props = {
  imgsrc: string;
  title: string;
  imgalt: string;
  pagelink: string;
};

export default function Thumbnail({ imgsrc, title, imgalt, pagelink }: Props) {
  return (
    <div className="group flex flex-col items-center mt-5">
      <div className="overflow-hidden">
        <Image
          src={imgsrc}
          alt={imgalt}
          width="200"
          height="100"
          className="object-cover group-hover:scale-110 transition-all duration-1000 cursor-pointer"
        />
      </div>
      <div className="text-primary font-custom text-sm transition-all duration-500">
        <div>
          <span className="bg-left-bottom bg-gradient-to-r from-primary to-primary bg-[length:0%_1px] bg-no-repeat group-hover:bg-[length:100%_1px] transition-all duration-500 ease-out">
            <span>{title}</span>
          </span>
        </div>
      </div>
    </div>
  );
}
