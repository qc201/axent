'use client'
import React, { useState, useEffect } from 'react';
import Loading from './Loading';

export default function HeaderVideo() {
  const videoUrl =
    "https://player.vimeo.com/video/1052447153?h=a7582bca68&amp;badge=0&amp;player_id=0&amp;app_id=58479&muted=1&autoplay=1&controls=0&loop=1&autopause=0&dnt=1";

  const [isLoading, setIsLoading] = useState(true);


  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 5000); //

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="w-full h-screen overflow-hidden relative">
      {/*x logo appears on top for 3 seconds */}
      {isLoading && (
        <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center bg-opacity-50 z-10">
          <Loading />
        </div>
      )}
      <iframe
        className="absolute top-1/2 left-1/2 w-[177.77vh] h-screen -translate-x-1/2 -translate-y-1/2"
        src={videoUrl}
        frameBorder="0"
        allow="autoplay"
      ></iframe>

    </div>
  );
}


{
  /* <div style="padding:56.25% 0 0 0;position:relative;"><iframe src="https://player.vimeo.com/video/1052447153?h=a7582bca68&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479" frameborder="0" allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media" style="position:absolute;top:0;left:0;width:100%;height:100%;" title="intro-1920_1080"></iframe></div><script src="https://player.vimeo.com/api/player.js"></script> */
}
