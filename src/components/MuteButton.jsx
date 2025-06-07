import { HiMiniSpeakerXMark, HiMiniSpeakerWave } from "react-icons/hi2";

const MuteButton = ({ mute, setMute }) => {
    const mutePressed = () => {
        setMute(!mute);
    };

    return (
        <div className="absolute z-1 bottom-[40%] right-[10%] lg:bottom-[15%] lg:left-[15%] backdrop-blur-xl w-10">
            <button
                onClick={mutePressed}
                className="flex cursor-pointer p-2 text-3xl sm:text-6xl lg:text-2xl"
            >
                {mute ? <HiMiniSpeakerXMark /> : <HiMiniSpeakerWave />}
            </button>
        </div>
    );
};

export default MuteButton;
