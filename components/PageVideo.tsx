
type Prop = { videoUrl: string; }


export default function PageVideo({ videoUrl }: Prop) {



    return (
        <div className="relative w-full h-full overflow-hidden">
            {/* Video for large screens (full width) */}
            <video
                className=" w-full h-full object-contain"
                autoPlay
                loop
                muted
                src={videoUrl}
            />
        </div>
    );
}
