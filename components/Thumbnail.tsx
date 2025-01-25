"use client";
import Image from "next/image";
import Link from "next/link";

type Props = {
  imgsrc: string;
  title: string;
  imgalt: string;
  pagelink: string;
};

export default function Thumbnail({ imgsrc, title, imgalt, pagelink }: Props) {
  const img1 = "/";
  return (
    <div className="flex flex-col items-center mt-5">
      <Image src={imgsrc} alt={imgalt} width="200" height="200" />
      <div className="font-custom text-sm font-thin">
        <Link href={pagelink}>{title}</Link>
      </div>
    </div>
  );
}
