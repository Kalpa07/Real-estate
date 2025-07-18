import { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { TbArrowNarrowDownDashed } from "react-icons/tb";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

const Header = () => {
    const leftGateRef = useRef(null);
    const rightGateRef = useRef(null);
    const headerRef = useRef(null);
    const grassRef = useRef(null);
    const textRef = useRef(null);
    const arrowRef = useRef(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.set(headerRef.current, {
                x: 0,
                scaleX: 1,
                scaleY: 1,
            });

            gsap.set(grassRef.current, {
                x: 0,
                y: 0,
                scaleX: 1,
                scaleY: 1,
            });

            gsap.set(leftGateRef.current, {
                x: 40,
                scaleX: 1.5,
                scaleY: 1.5,
                transformOrigin: "bottom left",
            });

            gsap.set(rightGateRef.current, {
                x: -40,
                scaleX: 1.5,
                scaleY: 1.5,
                transformOrigin: "bottom right",
            });

       arrowRef.current.addEventListener("click", () => {
            gsap.to(window, {
                scrollTo: {
                y: "#next-section",
                offsetY: 0,
                snap:1
                },
                duration: 1,
                ease: "power2.inOut",
            });

            gsap.to(
                [
                headerRef.current,
                grassRef.current,
                leftGateRef.current,
                rightGateRef.current,
                textRef.current,
                arrowRef.current,
                ],
                {
                opacity: 0,
                duration: 0.5,
                pinSpacing: true,
                }
            );
            });

            const gateTL = gsap.timeline({
            scrollTrigger: {
                trigger: ".hero-section",
                start: "top top",
                end: "+=100%", 
                scrub: true,
                pin: true,
                snap: 1,
                pinSpacing: true,
                opacity:0
            },
            });

            gateTL.to(headerRef.current, {
                x: 0,
                opacity: 0.9,
                scaleX: 1.2,
                scaleY: 1.2,
                ease: "none",
            });

            gateTL.to(grassRef.current, {
                x: 0,
                y: 15,
                scaleX: 1,
                scaleY: 1,
                ease: "power2.inOut",
            }, "<");

            gateTL.to(leftGateRef.current, {
                x: 0,
                scaleX: 1.2,
                scaleY: 1.2,
                ease: "none",
            }, "<");

            gateTL.to(rightGateRef.current, {
                x: 0,
                scaleX: 1.2,
                scaleY: 1.2,
                ease: "none",
            }, "<");

            gateTL.to(textRef.current, {
                opacity: 0,
                ease: "none",
            }, "<");

            gateTL.to(arrowRef.current, {
                y: 100,
                opacity: 0,
                ease: "none",
            }, "<");

        });

        return () => {
            ctx.revert();
            ScrollTrigger.getAll().forEach((t) => t.kill());
        };
    }, []);

   return (
    <div className="relative w-full h-[200vh] overflow-hidden bg-neutral">
        <section className="hero-section relative h-screen w-full">
        <img
            ref={headerRef}
            src="/headerbg.png"
            alt="Background"
            className="top-0 left-0 w-full h-full object-cover z-0 fixed opacity-30"
        />

        <div className="h-screen w-full absolute flex flex-col z-[25]">
            {/* Logo */}
            <div className="w-full h-1/3">
            <div className="text-sm font-bold items-center flex right-4 sm:right-8 top-4 sm:top-6 md:top-10 fixed">
                <img src="/Terranest.png" className="h-10 sm:h-12 md:h-14 mr-2" alt="Logo" />
                <img src="/Terranest-brown.png" className="h-8 sm:h-10" alt="Logo" />
            </div>
            </div>

            {/* Center Text */}
            <div className="h-1/2 flex justify-center items-center font-poppins">
            <div
                ref={textRef}
                className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20"
            >
                <h1 className="absolute top-1 left-1 w-[90vw] sm:w-[600px] text-center text-accent text-3xl sm:text-5xl md:text-6xl font-bold gentle-bounce">
                Welcome to where you belong!!
                </h1>
                <h1 className="w-[90vw] sm:w-[600px] text-secondary text-center text-3xl sm:text-5xl md:text-6xl font-bold gentle-bounce delay-2000">
                Welcome to where you belong!!
                </h1>
            </div>
            </div>

            {/* Arrow Down */}
            <div className="w-full h-1/3">
            <div
                ref={arrowRef}
                className="w-full mt-6 sm:mt-10 text-white flex flex-col justify-center items-center fixed"
            >
                <div className="gentle-bounce">
                <h2 className="font-semibold text-base sm:text-lg">Scroll Down</h2>
                </div>
                <div className="gentle-bounce">
                <TbArrowNarrowDownDashed className="w-12 h-12 sm:w-16 sm:h-16 md:w-24 md:h-24" />
                </div>
            </div>
            </div>
        </div>

        {/* Gate Images */}
        <img
        ref={leftGateRef}
        src="/gate.png"
        alt="Left Gate"
        className="absolute h-[20vh] sm:h-[22vh] md:h-[35vh] lg:h-[45vh] bottom-[-3%] 
                    left-[-25%] sm:left-[-14%] md:left-[-8%] lg:left-[-8%] 
                    z-10 fixed"
        />


        {/* Right Gate */}
        <img
        ref={rightGateRef}
        src="/gate.png"
        alt="Right Gate"
        className="absolute h-[20vh] sm:h-[22vh] md:h-[35vh] lg:h-[45vh] bottom-[-3%] 
                    right-[-20%] sm:right-[-14%] md:right-[-8%] lg:right-[-8%] 
                    z-10 fixed"
        />


        <img
            ref={grassRef}
            src="/grass.png"
            alt="Grass"
            className="absolute bottom-[-1px] left-0 w-full h-auto z-[15] fixed"
        />
        </section>
    </div>
    );

};

export default Header;
