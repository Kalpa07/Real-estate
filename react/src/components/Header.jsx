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

            // gsap.to([headerRef.current, grassRef.current, leftGateRef.current, rightGateRef.current], {
            //     opacity: 0,
            //     ease: "none",
            //     scrollTrigger: {
            //         trigger: "#next-section",
            //         start: "top bottom", 
            //         end: "top center", 
            //         scrub: true,
            //         pin: true,
            //         snap: 1,
            //         pinSpacing: true,
            //     },
            // });

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
                    className="top-0 left-0 w-full h-full object-cover z-0"
                    style={{ position: "fixed", opacity: 0.3 }}
                />
                <div className="h-screen w-full absolute flex flex-col z-[25]">
                    <div className="w-full h-1/3">
                        <div className="text-sm font-bold items-center flex right-12 top-10 fixed">
                            <img src="/Terranest.png" className="h-14 mr-2" alt="Logo" />
                            <img src="/Terranest-brown.png" className="h-10" alt="Logo" />
                        </div>
                    </div>
                    <div className="h-1/2 flex justify-center items-center font-poppins">
                        <div ref={textRef} className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20">
                            <h1 className="absolute top-1 left-1 w-[620px] text-center text-accent text-6xl font-bold gentle-bounce">
                                Welcome to where you belong!!
                            </h1>
                            <h1 className="w-[620px] text-secondary text-center text-6xl font-bold gentle-bounce delay-2000">
                                Welcome to where you belong!!
                            </h1>
                        </div>
                    </div>
                    <div className="w-full h-1/3">
                        <div ref={arrowRef} className="w-full mt-10 text-white flex flex-col justify-center items-center fixed ">
                            <div className="gentle-bounce">
                                <h2 className="font-semibold">Scroll Down</h2>
                            </div>
                            <div className="gentle-bounce">
                                <TbArrowNarrowDownDashed className="w-24 h-24" />
                            </div>
                        </div>
                    </div>
                </div>

                <img
                    ref={leftGateRef}
                    src="/gate.png"
                    alt="Left Gate"
                    className="absolute h-[50vh] bottom-[-3%] left-[-8%] z-10"
                    style={{ position: "fixed" }}
                />

                <img
                    ref={rightGateRef}
                    src="/gate.png"
                    alt="Right Gate"
                    className="absolute h-[50vh] bottom-[-3%] right-[-8%] z-10"
                    style={{ position: "fixed" }}
                />

                <img
                    ref={grassRef}
                    src="/grass.png"
                    alt="Grass"
                    className="absolute bottom-[-1px] left-0 w-full h-auto z-[15]"
                    style={{ position: "fixed" }}
                />
            </section>
        </div>
    );
};

export default Header;
