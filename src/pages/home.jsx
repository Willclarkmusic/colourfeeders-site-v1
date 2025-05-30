import { useState } from "react";
import VideoScene from "../components/VideoBox";
import TitleCard from "../components/TitleCard";
import MuteButton from "../components/MuteButton";
import ContactComponent from "../components/ContactForm";

const Home = () => {
    const [showContact, setShowContact] = useState(false);
    const [mute, setMute] = useState(true);
    return (
        <div className="size-full bg-black">
            <TitleCard />
            <ContactComponent />
            <MuteButton mute={mute} setMute={setMute} />
            <VideoScene mute={mute} setMute={setMute} />
        </div>
    );
};

export default Home;
