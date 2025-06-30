import { useState, useEffect } from "react";
import VideoScene from "../components/VideoBox";
import TitleCard from "../components/TitleCard";
import MuteButton from "../components/MuteButton";
import ContactComponent from "../components/ContactForm";
import { VideoPlayer } from "../components/VideoPlayer";
import { InfoComponent } from "../components/InfoComponent";

const Home = () => {
    const [showContact, setShowContact] = useState();
    const [mute, setMute] = useState(true);
    const [isMobile, setIsMobile] = useState(window.innerWidth < 1000);

    const handleResize = () => {
        setIsMobile(window.innerWidth < 1000);
    };
    useEffect(() => {
        console.log(window.innerWidth);
        console.log(isMobile);
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    return (
        <div className="size-full bg-black">
            <TitleCard />
            <ContactComponent />
            <MuteButton mute={mute} setMute={setMute} />
            <InfoComponent />

            {!isMobile ? (
                <VideoScene mute={mute} setMute={setMute} />
            ) : (
                <VideoPlayer mute={mute} setMute={setMute} />
            )}
        </div>
    );
};

export default Home;
