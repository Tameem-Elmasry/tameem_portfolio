import React, { useEffect, useRef, useState } from "react";
import Who from "./Who";
import Resume from "./Resume";
import Cert from "./Cert"; // new component
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
    const [activeTab, setActiveTab] = useState("who");

    // Refs
    const whoRef = useRef(null);
    const resumeRef = useRef(null);
    const certRef = useRef(null);

    // Direction config for each tab

    useEffect(() => {
        const directions = {
            who: { in: { x: -150 }, out: { x: -150 } }, // farther left
            resume: { in: { y: 150 }, out: { y: 150 } }, // slide from bottom
            cert: { in: { x: 150 }, out: { x: 150 } }, // farther right
        };

        const refs = {
            who: whoRef,
            resume: resumeRef,
            cert: certRef,
        };

        Object.keys(refs).forEach((key) => {
            const el = refs[key].current;
            gsap.killTweensOf(el);

            if (key === activeTab) {
                // Show before animating
                el.style.display = "block";
                gsap.fromTo(
                    el,
                    { ...directions[key].in, opacity: 0 },
                    {
                        x: 0,
                        y: 0,
                        opacity: 1,
                        duration: 0.8,
                        ease: "power3.out",
                    }
                );
            } else {
                // Animate out then hide
                gsap.to(el, {
                    ...directions[key].out,
                    opacity: 0,
                    duration: 0.6,
                    ease: "power3.in",
                    onComplete: () => {
                        el.style.display = "none";
                    },
                });
            }
        });

        animateRevealUp();
    }, [activeTab]);

    return (
        <section id="about" className="section overflow-hidden">
            <div className="container relative">
                <div className="absolute flex items-center justify-center sm:p-2 p-1 sm:ring-2 ring-1 ring-inset dark:ring-white/30 ring-slate-600 sm:rounded-2xl rounded-xl gap sm:gap-2 sm:-top-16 -top-10 left-[50%] translate-x-[-50%] reveal-up dark:bg-zinc-200/30 bg-black/15">
                    <button
                        className={`${
                            activeTab === "who"
                                ? "dark:bg-white/90 bg-black/70 text-white dark:text-zinc-900 sm:text-lg text-sm"
                                : "bg-transparent text-slate-700 dark:text-white/80 sm:text-base text-xs"
                        } sm:px-3 px-1 sm:py-1 sm:rounded-lg rounded-md transition-all duration-300`}
                        onClick={() => setActiveTab("who")}
                    >
                        Who I am
                    </button>
                    <button
                        className={`${
                            activeTab === "resume"
                                ? "dark:bg-white/90 bg-black/70 text-white dark:text-zinc-900 sm:text-lg text-sm"
                                : "bg-transparent text-slate-700 dark:text-white/80 sm:text-base text-xs"
                        } sm:px-3 px-1 sm:py-1 sm:rounded-lg rounded-md transition-all duration-300`}
                        onClick={() => setActiveTab("resume")}
                    >
                        Resume
                    </button>
                    <button
                        className={`${
                            activeTab === "cert"
                                ? "dark:bg-white/90 bg-black/70 text-white dark:text-zinc-900 sm:text-lg text-sm"
                                : "bg-transparent text-slate-700 dark:text-white/80 sm:text-base text-xs"
                        } sm:px-3 px-1 sm:py-1 sm:rounded-lg rounded-md transition-all duration-300`}
                        onClick={() => setActiveTab("cert")}
                    >
                        Certificates
                    </button>
                </div>

                {/* Sections */}
                <div
                    ref={whoRef}
                    style={{ display: activeTab === "who" ? "block" : "none" }}
                >
                    <Who classes="mt-20" />
                </div>

                <div
                    ref={resumeRef}
                    style={{
                        display: activeTab === "resume" ? "block" : "none",
                    }}
                >
                    <Resume classes="mt-20" />
                </div>

                <div
                    ref={certRef}
                    style={{ display: activeTab === "cert" ? "block" : "none" }}
                >
                    <Cert classes="mt-20" />
                </div>
            </div>
        </section>
    );
};

export default About;
