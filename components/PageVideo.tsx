type Prop = { videoUrl: string };

export default function PageVideo({ videoUrl }: Prop) {
  return (
    <div className="relative w-full h-full overflow-hidden">
      {/* Video for large screens (full width) */}
      <div className="aspect-w-16 aspect-h-9">
        <iframe
          src={`${videoUrl};badge=0&amp;player_id=0&amp;app_id=58479&muted=1&autoplay=1&controls=0&loop=1`}
          frameBorder="0"
          allow="autoplay"
        ></iframe>
      </div>
      {/* <video
        className=" w-full h-full object-contain"
        autoPlay
        loop
        muted
        src={videoUrl}
      /> */}
    </div>
  );
}
