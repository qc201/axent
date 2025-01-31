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
    sku: string;
};

export default function ProductCover({
    model,
    imgUrl,
    imgAlt,
    width,
    height,
    linkTo,
    className = "",
    sku
}: Props) {
    return (
        <div className="shadow-md w-full flex flex-col items-center overflow-hidden h-full">
            <Link href={linkTo} className={classNames("yourDefaultTextClassName", className)}>
                <div className="text-primary group relative flex flex-col items-center w-full h-full">

                    {/* Image Container - Ensures equal height */}
                    <div className="relative w-full flex-grow max-h-[250px] flex items-center justify-center">
                        <Image
                            width={width}
                            height={height}
                            src={imgUrl}
                            alt={imgAlt}
                            className="group-hover:scale-95 ease-in duration-300 max-w-full max-h-full object-contain"
                        />
                    </div>

                    {/* Model & SKU - Fixed min height to align */}
                    <div className="flex flex-col items-center justify-center min-h-[80px] mt-auto w-full">
                        <div className="font-black sm:text-2xl text-sm">{model}</div>
                        <div className="font-thin sm:text-lg text-xs">{sku}</div>
                    </div>

                    {/* Hover Effect */}
                    <div className="opacity-30 sm:opacity-0 group-hover:opacity-80 transition-opacity ease-in-out duration-500 absolute z-50 cursor-pointer">
                        <p className="text-xs py-2 px-4 font-custom font-thin bg-white rounded-3xl md:text-lg">
                            VIEW {model}
                        </p>
                    </div>
                </div>
            </Link>
        </div>
    );
}
