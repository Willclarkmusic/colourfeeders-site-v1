import Typewriter from "typewriter-effect";

const TitleCard = () => {
    const strings = [
        "Tech Art Infrastructure",
        "Computing Solutions",
        "Enterprise Server Farms",
        "Render Farm Construction",
        "Event Design",
        "Software Development",
        "Web Development",
        "Digital Media Deployment",
    ];

    return (
        <div className="absolute z-10 lg:top-[70%] lg:left-[65%] top-[70%] left-[10%] font-extralight">
            <div className="flex-row backdrop-blur-xl p-3 w-[100%] font-primary font-normal">
                <h1 className="text-4xl text-8xl lg:text-6xl">
                    Colour Feeders
                </h1>
                <div className="flex p-6 lg:p-3 text-4xl lg:text-sm md:text-md font-secondary">
                    <Typewriter
                        options={{
                            strings: strings,
                            autoStart: true,
                            loop: true,
                            cursor: "_",
                            delay: 60,
                            pauseFor: 2000,
                        }}
                    />
                </div>
            </div>
        </div>
    );
};

export default TitleCard;
