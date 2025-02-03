'use client'
import React from 'react'
import PageVideo from '@/components/PageVideo';
import MaskText from '@/components/MaskText';

export default function Meta() {
    //video exceed git limit
    // category page will have x-axis margin of 40 for computer, 10 for cellphone
    return (
        <div className="min-h-screen">
            <PageVideo videoUrl={"https://player.vimeo.com/video/1052181364?h=955ac5b00e"} />
            <div className="pt-10 font-custom flex flex-col items-center justify-center w-screen bg-cover">
                <MaskText
                    phrases={["AXENT.META"]}
                    className="z-50 text-6xl text-primary font-extrabold "
                />
                <MaskText
                    className="flex flex-col pt-10 mx-5 sm:mx-20 text-primary font-custom font-black sm:text-lg text-md"
                    phrases={["COMING SOON..."]}
                />
            </div>
        </div>
    );
}

