import gsap from "gsap";
import { useEffect, useRef } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Overview = () => {
    const polaroidRef = useRef(null);
    useEffect(() => {
        gsap.fromTo(
            ".floating-icon",
            { rotate: -25 },
            {
                rotate: 25,
                scrollTrigger: {
                    trigger: "#next-section",
                    start: "top center",
                    end: "bottom center",
                    scrub: true,
                },
            }
        );

        gsap.fromTo(
            polaroidRef.current,
            { rotate: 15 },
            {
                rotate: -15,
                scrollTrigger: {
                    trigger: "#next-section",
                    start: "top center",
                    end: "bottom center",
                    scrub: true,
                },
            }
        );


        return () => {
            ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
        };
    }, []);

    return (
        <div className="h-screen w-full bg-neutral flex items-center justify-center relative">
            <img
                src="/headerbg.png"
                alt="icon1"
                className="floating-icon h-16 w-16 absolute top-[10%] left-[15%]"
            />
            <img
                src="/headerbg.png"
                alt="icon2"
                className="floating-icon h-12 w-12 absolute top-[40%] right-[20%]"
            />
            <img
                src="/headerbg.png"
                alt="icon3"
                className="floating-icon h-16 w-16 absolute bottom-[10%] left-1/2 transform -translate-x-1/2"
            />
            <img
                src="/headerbg.png"
                alt="icon4"
                className="floating-icon h-12 w-12 absolute bottom-[40%] left-[5%]"
            />
            <div ref={polaroidRef} className="relative h-96 w-80 p-5 bg-accent shadow-lg rounded-lg">
                <img
                    src="headerbg.png"
                    alt="Polaroid"
                    className="h-60 w-full object-cover rounded-md"
                />
                <h2 className="text-center font-poppins font-semibold text-lg mt-4">
                    <span className="text-xl font-bold">.</span> A Nest Built On Purpose{" "}
                    <span className="text-xl font-bold">.</span>
                </h2>
                <p className="text-center font-roboto text-sm mt-2 leading-snug">
                    At Terranest, we don’t just sell properties.
                    We help you find spaces that reflect comfort, belonging, and value.
                </p>
            </div>

            <div className="w-80 ml-20 text-accent">
                <h2 className="font-poppins text-5xl font-semibold leading-[3.5rem] text-left">
                    Homes Designed for Living
                </h2>
                <p className="font-roboto text-lg text-left mt-4 leading-relaxed">
                    From city apartments to peaceful retreats, our listings are curated
                    to help you invest in the right space — for today, and for your future.
                </p>
            </div>
        </div>
    );
};

export default Overview;
