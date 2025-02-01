import React from 'react'



type Props = {
    imgsrc: string;
};


export default function InfoCard({ imgsrc }: Props) {
    return (
        <div className="relative group bg-gray-200 h-[400px] shadow-lg overflow-hidden">
            <img className="w-full h-full group-hover:h-64 object-cover  transition-all delay-150 duration-300 ease" src={imgsrc} />
            <div className="bg-gray-100 dark:bg-gray-700 w-full h-40 absolute left-0 bottom-0 sm:-mb-12 group-hover:mb-0  transition-all delay-150 duration-300 ease">
                <div className="p-6">
                    <div className="capitalize flex items-center justify-between gap-4">
                        <div>
                            <h2 className="text-red-600 text-lg font-bold">Air Jordan 6 Retro</h2>
                            <p className="dark:text-gray-100">men's shoes</p>
                        </div>
                        <div>
                            <p className="text-3xl font-bold dark:text-gray-100">$200</p>
                        </div>
                    </div>
                    <div className="block mt-4">
                        <div className="absolute bottom-2 left-5">
                            <button className="bg-red-600 text-gray-100 font-medium py-2.5 px-4 rounded-xl opacity-90 hover:opacity-100">Add to cart</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
