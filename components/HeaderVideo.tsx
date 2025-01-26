export default function HeaderVideo() {
  //   const videoUrl =
  //     "https://axentbath.us/wp-content/uploads/2021/01/200911_bathroom_series_1920x850.mp4";
  const videoUrl = "/videos/200911_Intro_1920x850.mp4";
  return (
    <div className="relative w-full h-screen overflow-hidden">
      {/* Video for large screens (full width) */}
      <video
        className="absolute top-0 left-0 w-full h-full object-cover md:hidden"
        autoPlay
        loop
        muted
        src={videoUrl}
      />

      {/* Video for smaller screens (mobile) */}
      <video
        className="absolute top-0 left-0 w-full h-screen object-cover md:block"
        autoPlay
        loop
        muted
        style={{ objectPosition: "center center" }} // This ensures the center part of the video is shown
        src={videoUrl}
      />
    </div>
  );
}
