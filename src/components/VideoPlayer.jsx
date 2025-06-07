export const VideoPlayer = ({ mute, setMute }) => {
    const videoUrl = "https://videos.colourfeeders.com/CF-Reel-2025-web.mp4";

    return (
        <div className=" absolute top-[25vh]  overflow-y">
            <video className="w-full h-full" muted={mute} autoPlay>
                <source src={videoUrl} type="video/mp4" />
            </video>
        </div>
    );
};
