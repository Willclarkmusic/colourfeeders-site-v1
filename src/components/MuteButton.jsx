import { HiMiniSpeakerXMark, HiMiniSpeakerWave } from "react-icons/hi2";

const MuteButton = ({ mute, setMute }) => {
    const mutePressed = () => {
        setMute(!mute);
    };

    return (
        <div className="absolute z-50 bottom-[10%] left-[10%] lg:bottom-[15%] lg:left-[15%] backdrop-blur-xl">
            <button
                onClick={mutePressed}
                className="cursor-pointer p-2 text-6xl lg:text-2xl"
            >
                {mute ? <HiMiniSpeakerXMark /> : <HiMiniSpeakerWave />}
            </button>
        </div>
    );
};

export default MuteButton;
