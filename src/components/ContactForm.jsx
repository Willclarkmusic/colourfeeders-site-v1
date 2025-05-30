import { useForm, ValidationError } from "@formspree/react";
import { useState } from "react";
import { IoMdClose } from "react-icons/io";

const ContactComponent = () => {
    const [visible, setVisible] = useState(false);
    console.log();

    const swapVisible = () => {
        setVisible(!visible);
    };

    return (
        <div className="flex font-light overflow-hidden">
            {!visible ? (
                <ContactButton swapVisible={swapVisible} visible={visible} />
            ) : (
                <ContactForm swapVisible={swapVisible} visible={visible} />
            )}
        </div>
    );
};

const ContactButton = ({ visible, swapVisible }) => {
    return (
        <button
            onClick={swapVisible}
            className={`absolute z-1 top-20 lg:left-[80%] left-[10%] text-white p-2 transition-all duration-500 cursor-pointer 
                    hover:border-white border-black border-b-1 hover:text-shadow-blue-500 text-shadow-sm text-6xl lg:text-xl ${
                        visible ? "opacity-0" : "opacity-100"
                    }`}
        >
            Contact
        </button>
    );
};

const ContactForm = ({ visible, swapVisible }) => {
    return (
        <div
            className={`absolute lg:right-10 lg:top-10 h-full lg:h-auto justify-items-start w-full lg:max-w-[450px] transition-all duration-500 space-y-5 p-2 z-50
                bg-[rgb(173,173,173)] ${visible ? "opacity-100" : "opacity-0"}`}
        >
            <button
                onClick={swapVisible}
                className={`border-1 p-2 cursor-pointer text-black text-6xl lg:text-xl`}
            >
                <IoMdClose />
            </button>
            <div className="w-full justify-items-start px-14">
                <h1 className="text-black font-bold text-8xl lg:text-5xl  font-primary">
                    Get in Touch
                </h1>

                <h1 className="text-black text-left text-4xl lg:text-xl lg:w-60 pt-2 font-extralight font-secondary ">
                    Contact us to discuss your project’s tech needs...
                </h1>
            </div>
            <Form />{" "}
        </div>
    );
};

const Form = () => {
    const [state, handleSubmit] = useForm("xdkzndrg");
    if (state.succeeded) {
        return <p>Message Sent</p>;
    }
    return (
        <form
            onSubmit={handleSubmit}
            className="space-y-5 text-white place-items-center text-5xl lg:text-lg p-4 size-full"
        >
            <div className="flex flex-row w-[95%] py-2 pb-0 border-b-1 border-white">
                <label htmlFor="name" className="p-2">
                    Name
                </label>
                <input id="name" type="text" name="name" className="grow p-2" />
                <ValidationError
                    prefix="Name"
                    field="name"
                    errors={state.errors}
                />
            </div>
            <div className="flex flex-row w-[95%] py-2 pb-0 border-b-1 border-white">
                <label htmlFor="email" className="p-2">
                    Email
                </label>
                <input
                    id="email"
                    type="email"
                    name="email"
                    className="grow p-2"
                />
                <ValidationError
                    prefix="Email"
                    field="email"
                    errors={state.errors}
                />
            </div>
            <div className="w-full h-full lg:h-full p-2 ">
                <label className="flex flex-row p-2 px-8">Message</label>
                <textarea
                    name="message"
                    className=" h-200 w-[85vw] lg:h-60 lg:w-[100%] rounded-xl bg-[rgb(191,191,191)] p-2"
                />
                <ValidationError
                    prefix="Message"
                    field="message"
                    errors={state.errors}
                />
            </div>
            <button
                id="standbutton"
                className="py-2 px-6 bg-black cursor-pointer flex justify-self-start mx-10"
                type="submit"
                disabled={state.submitting}
            >
                Submit
            </button>
        </form>
    );
};

export default ContactComponent;
