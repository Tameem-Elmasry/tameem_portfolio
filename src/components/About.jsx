import React, { useEffect, useRef, useState } from "react";
import Who from "./Who";
import Resume from "./Resume";
import ScrollTrigger from "gsap/ScrollTrigger";
import gsap from "gsap";

gsap.registerPlugin(ScrollTrigger);

function animateRevealUp() {
    ScrollTrigger.getAll().forEach((t) => t.kill());
    const elements = gsap.utils.toArray(".reveal-up");
    elements.forEach((element) => {
        gsap.to(element, {
            scrollTrigger: {
                trigger: element,
                start: "-100 bottom",
                end: "bottom 50%",
                scrub: true,
            },
            y: 0,
            opacity: 1,
            duration: 1,
            ease: "power2.out",
        });
    });
}

const About = () => {
    const [who, setWho] = useState(true);

    // Refs for GSAP animations
    const whoRef = useRef(null);
    const resumeRef = useRef(null);

    // Animate entrance/exit
    useEffect(() => {
        if (who) {
            // Who enters from left
            gsap.fromTo(whoRef.current,
                { x: -50, opacity: 0, display: "block" },
                { x: 0, opacity: 1, duration: 0.6, ease: "power2.out" }
            );
            // Resume exits to right
            gsap.to(resumeRef.current, {
                x: 50, opacity: 0, duration: 0.4, ease: "power2.in", onComplete: () => {
                    resumeRef.current.style.display = "none";
                }
            });
        } else {
            // Resume enters from right
            gsap.fromTo(resumeRef.current,
                { x: 50, opacity: 0, display: "block" },
                { x: 0, opacity: 1, duration: 0.6, ease: "power2.out" }
            );
            // Who exits to left
            gsap.to(whoRef.current, {
                x: -50, opacity: 0, duration: 0.4, ease: "power2.in", onComplete: () => {
                    whoRef.current.style.display = "none";
                }
            });
        }

        animateRevealUp();
    }, [who]);

    return (
        <section id="about" className="section">
            <div className="container relative">
                <div
                    className="absolute flex items-center justify-center py-2 px-2 ring-2 ring-inset dark:ring-white/30 ring-slate-600 rounded-2xl gap-2 -top-16 left-[50%] translate-x-[-50%] reveal-up dark:bg-zinc-200/30 bg-black/15"
                >
                    <button
                        className={`${
                            who
                                ? "dark:bg-white/90 bg-black/70 text-white dark:text-zinc-900 sm:text-lg text-md"
                                : "bg-transparent text-slate-700 dark:text-white/80 sm:text-md text-sm"
                        } px-3 py-1 rounded-lg transition-all duration-300`}
                        onClick={() => setWho(true)}
                    >
                        Who I am
                    </button>
                    <button
                        className={`${
                            !who
                                ? "dark:bg-white/90 bg-black/70 text-white dark:text-zinc-900 sm:text-lg text-md"
                                : "bg-transparent text-slate-700 dark:text-white/80 sm:text-md text-sm"
                        } px-3 py-1 rounded-lg transition-all duration-300`}
                        onClick={() => setWho(false)}
                    >
                        Resume
                    </button>
                </div>

                <div ref={whoRef} style={{ display: who ? "block" : "none" }}>
                    <Who classes="mt-20" />
                </div>

                <div ref={resumeRef} style={{ display: !who ? "block" : "none" }}>
                    <Resume classes="mt-20" />
                </div>
            </div>
        </section>
    );
};

export default About;
