import { useState } from "react";
import { GoInfo } from "react-icons/go";
import { IoMdClose } from "react-icons/io";
import { FaYoutube } from "react-icons/fa";
import { ImNewTab } from "react-icons/im";
import { FaInstagram } from "react-icons/fa";

export const InfoComponent = () => {
    const [infoVisible, setInfoVisible] = useState(false);
    const swapVisible = () => {
        setInfoVisible(!infoVisible);
    };

    return (
        <div className="flex font-light overflow-hidden">
            <InfoButton swapVisible={swapVisible} />
            {infoVisible ? (
                <InfoCard visible={infoVisible} swapVisible={swapVisible} />
            ) : (
                <></>
            )}
        </div>
    );
};

const InfoButton = ({ swapVisible }) => {
    return (
        <div className="absolute  z-1 bottom-[40%] left-[80%] lg:bottom-[15%] lg:left-[75%] backdrop-blur-xl w-10">
            <button
                onClick={swapVisible}
                className="flex cursor-pointer p-2 text-3xl sm:text-6xl lg:text-2xl"
            >
                <GoInfo />
            </button>
        </div>
    );
};

const InfoCard = ({ visible, swapVisible }) => {
    const openInNewTab = (url) => {
        window.open(url, "_blank", "noopener,noreferrer");
    };

    return (
        <div
            className={`absolute overflow-hidden w-full h-[100vh] lg:left-[70%] lg:top-20 lg:h-auto lg:max-w-[450px] 
                    rounded-sm transition-all duration-500 p-2 z-50 bg-[rgb(160,160,160)] ${
                        visible ? "opacity-100" : "opacity-0"
                    }`}
        >
            <button
                onClick={swapVisible}
                className={`border-1 p-2 m-10 lg:m-2 cursor-pointer text-black text-6xl lg:text-xl`}
            >
                <IoMdClose />
            </button>
            <div className="w-full justify-items-start lg:px-10 px-14 mt-20 lg:mt-2">
                <h1 className="text-black font-bold text-8xl lg:text-3xl font-primary">
                    About
                </h1>

                <h1 className="text-black text-left text-4xl lg:text-xl lg:w-full pt-2 font-extralight font-secondary ">
                    Colour Feeders is an innovative arts and technology company
                    that supplies computing solutions and infrastructure design
                    for interactive experiences.
                </h1>
            </div>
            <div className="w-full justify-items-start px-10 mt-20 lg:mt-2">
                <h1 className="text-black font-bold text-6xl lg:text-2xl mt-14 font-primary">
                    Projects
                </h1>
                <h2 className="text-black font-thin text-4xl lg:text-xl font-secondary">
                    In order of appearance
                </h2>
            </div>
            <div className="overflow-y-auto w-[90%] lg:h-[38vh] max-h-[60vh] bg-[rgb(100,100,100)] rounded-sm justify-self-center my-4 ">
                {VideoCredits.map((item, key) => (
                    <div className="grid grid-cols-5 grid-rows-2  justify-items-start px-4 lg:py-4 border-b-1 py-10 ">
                        <div className="col-span-4 row-span-1 flex flex-row w-full justify-items-end">
                            <h2 className="text-3xl lg:text-sm font-semibold">
                                {item.Project}
                            </h2>
                            <h2 className="px-2 text-3xl lg:text-sm"> | </h2>
                            <h2 className="text-3xl lg:text-sm">
                                {item.Colab}
                            </h2>
                        </div>
                        <div className="justify-self-center col-span-1 row-span-2 grid-cols-2">
                            <button
                                onClick={() => openInNewTab(item.Src1)}
                                className={`lg:px-2 px-3 pb-3 text-6xl lg:text-2xl hover:cursor-pointer col-span-1 ${item.Color1}`}
                            >
                                {item.Icon1}
                            </button>
                            {item.Src2 ? (
                                <button
                                    onClick={() => openInNewTab(item.Src2)}
                                    className={`px-2 text-6xl lg:text-2xl hover:cursor-pointer  col-span-1 ${item.Color2}`}
                                >
                                    {item.Icon2}
                                </button>
                            ) : (
                                <div
                                    className={`px-2 text-6xl lg:text-2xl hover:cursor-pointer  col-span-1`}
                                ></div>
                            )}
                        </div>
                        <h2 className="text-2xl  lg:text-xs px-4 row-span-1 col-span-4">
                            <b className="font-semibold">Role:</b> {item.Role}
                        </h2>
                    </div>
                ))}
            </div>
        </div>
    );
};

const VideoCredits = [
    {
        Project: "Playalchemist Pyramid",
        Colab: "Playalchemist",
        Role: "System Architecture | Deployment",
        Icon1: <FaYoutube />,
        Src1: "https://www.youtube.com/watch?v=Hm6hIfPZ-b8",
        Color1: "hover:text-red-600",
        Icon2: <ImNewTab />,
        Src2: "https://www.playalchemist.com/",
        Color2: "hover:text-blue-200",
    },
    {
        Project: "Menagerie 2017-23",
        Colab: "The MidwaySF",
        Role: "Stage CAD Design | VJ",
        Icon1: <FaYoutube />,
        Src1: "https://www.youtube.com/watch?v=2E0jmG7o_yg",
        Color1: "hover:text-red-600",
        Icon2: <ImNewTab />,
        Src2: "https://themidwaysf.com/",
        Color2: "hover:text-blue-200",
    },
    {
        Project: "360 Projection Mapping",
        Colab: "The Kazbah",
        Role: "Projection Mapping | Video Content",
        Icon1: <FaYoutube />,
        Src1: "https://www.kazbah.org/",
        Color1: "hover:text-red-600",
        Icon2: <ImNewTab />,
        Src2: "https://www.kazbah.org/",
        Color2: "hover:text-blue-200",
    },
    {
        Project: "The Man: Burning Man 2018",
        Colab: "IAMAI",
        Role: "System Architecture | Deployment",
        Icon1: <FaYoutube />,
        Src1: "https://www.youtube.com/watch?v=nnIpOtKjHw4&t=1s",
        Color1: "hover:text-red-600",
        Icon2: <ImNewTab />,
        Src2: "https://astralprojekt.com/",
        Color2: "hover:text-blue-200",
    },
    {
        Project: "New Nature",
        Colab: "Marpi Studio",
        Role: "Technical Direction | System Architecture",
        Icon1: <FaYoutube />,
        Src1: "https://www.marpi.studio/exhibitions/paleoalto",
        Color1: "hover:text-red-600",
        Icon2: (
            <img
                src="/marpi.svg"
                className="size-14 lg:size-8 brightness-0 invert"
            />
        ),
        Src2: "https://www.marpi.studio/",
        Color2: "hover:text-blue-200",
    },
    {
        Project: "Real-time Render Farms",
        Colab: "Artechouse",
        Role: "System Architecture | Projection ",
        Icon1: <FaInstagram />,
        Src1: "https://www.instagram.com/artechouse/?hl=en",
        Color1: "hover:text-fuchsia-700",
        Icon2: <ImNewTab />,
        Src2: "https://www.artechouse.com/",
        Color2: "hover:text-blue-200",
    },
    {
        Project: "Palealto",
        Colab: "Marpi Studio",
        Role: "Technical Direction | CAD Design | System Architecture",
        Icon1: <FaYoutube />,
        Src1: "https://www.marpi.studio/exhibitions/paleoalto",
        Color1: "hover:text-red-600",
        Icon2: (
            <img
                src="/marpi.svg"
                className="size-14 lg:size-8 brightness-0 invert"
            />
        ),
        Src2: "https://www.marpi.studio/",
        Color2: "hover:text-blue-200",
    },
];
