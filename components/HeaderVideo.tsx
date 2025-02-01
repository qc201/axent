export default function HeaderVideo() {


  //const videoUrl = "/videos/200911_Intro_1920x850.mp4";
  const videoUrl = "https://player.vimeo.com/video/1052447153?h=a7582bca68&amp;badge=0&amp;player_id=0&amp;app_id=58479&muted=1&autoplay=1&controls=0&loop=1"
  return (
<div className="w-full h-screen overflow-hidden">
  <div className="relative w-full h-full">
    <iframe 
      className="absolute top-1/2 left-1/2 w-[177.77vh] h-screen -translate-x-1/2 -translate-y-1/2"
      src={videoUrl} 
      frameBorder="0" 
      allow="autoplay"
    ></iframe>
  </div>
</div>
  );
}



{/* <div style="padding:56.25% 0 0 0;position:relative;"><iframe src="https://player.vimeo.com/video/1052447153?h=a7582bca68&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479" frameborder="0" allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media" style="position:absolute;top:0;left:0;width:100%;height:100%;" title="intro-1920_1080"></iframe></div><script src="https://player.vimeo.com/api/player.js"></script> */}