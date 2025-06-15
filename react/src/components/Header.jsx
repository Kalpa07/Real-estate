import { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { CgArrowLongDownC } from "react-icons/cg";

gsap.registerPlugin(ScrollTrigger);

const Header = () => {
    const leftGateRef = useRef(null);
    const rightGateRef = useRef(null);
    const headerRef = useRef(null);
    const grassRef = useRef(null);

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

            const gateTL = gsap.timeline({
                scrollTrigger: {
                    trigger: ".hero-section",
                    start: "top top",
                    end: "bottom top",
                    scrub: true,
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
                y: 50,
                scaleX: 1,
                scaleY: 1,
                ease: "none",
            },
                "<"
            );


            gateTL.to(leftGateRef.current, {
                x: 0,
                scaleX: 1.2,
                scaleY: 1.2,
                ease: "none",
            },
                "<"
            );

            gateTL.to(
                rightGateRef.current,
                {
                    x: 0,
                    scaleX: 1.2,
                    scaleY: 1.2,
                    ease: "none",
                },
                "<"
            );
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
                    {/* <div className="flex flex-row items-center gap-10 h-20 top-20 ">
                        <img
                            src="/Terranest.png"
                            alt="Logo"
                            className="h-12 pointer-events-none "
                            style={{ position: "fixed" }}
                        />
                        <img
                            src="/Terranest-brown.png"
                            alt="Logo"
                            className="h-4 pointer-events-none ml-2"
                            style={{ position: "fixed" }}
                        />
                    </div> */}
                    <div className="text-sm font-bold items-center flex right-12 top-10 fixed">
                        <img src="/Terranest.png" className="h-14 mr-2" alt="Logo" />
                        <img src="/Terranest-brown.png" className="h-10" alt="Logo" />
                    </div>
                    <div className="relative h-screen flex justify-center items-center font-poppins">
                        <div className="relative bottom-20">
                            <h1 className="absolute top-1 left-1 w-[620px] text-center text-accent text-6xl font-bold gentle-bounce">
                                Your Place is waiting for you!!
                            </h1>
                            <h1 className="w-[620px] text-secondary text-center text-6xl font-bold gentle-bounce delay-2000">
                                Your Place is waiting for you!!
                            </h1>
                        </div>
                    </div>
                    <div>
                        <CgArrowLongDownC className="h-20"/>
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
