// @ imports
import { ReactLenis } from "lenis/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

import Hero from "./components/Hero";
import Header from "./components/Header";
import About from "./components/About";
import Skills from "./components/Skills";
import Work from "./components/Work";
// import Review from "./components/Review";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import { ThemeContext } from "./context/ThemeContext";
import { useContext, useEffect, useState } from "react";

// TODO Tasks:
// MO SECTION - Add section for the certificates
// MO REVISE - all the tailwind classes that i don't know so i can learn them
// MO UPDATE the instagram account
// MO FINALLY - add the website to all my social media and cv and LinkTree

// @ GSAP REGISTER
gsap.registerPlugin(useGSAP, ScrollTrigger);

// @ component
const App = () => {
    // @ states
    const [backgroundClass, setBackgroundClass] = useState("");

    // @ constants
    const { theme } = useContext(ThemeContext);

    useEffect(() => {
        const styles_white = [
            // "fixed inset-0 -z-10 h-full w-full bg-[#FDFDFD] bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px]",
            "fixed top-0 z-[-2] w-full h-screen bg-slate-50 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,#cccccc,transparent)]",
            "fixed top-0 z-[-3] h-screen w-screen bg-[#ffffff] bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] bg-[size:20px_20px]",
        ];

        const styles_dark = [
            "fixed top-0 z-[-2] w-full h-screen bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,#1b1930,transparent)]",
            "fixed top-0 z-[-3] h-screen w-screen bg-[#000000] bg-[radial-gradient(#ffffff11_1px,#000000_1px)] bg-[size:20px_20px]",
        ];
        const newClass =
            theme === "dark"
                ? styles_dark[Math.floor(Math.random() * styles_dark.length)]
                : styles_white[Math.floor(Math.random() * styles_white.length)];
        setBackgroundClass(newClass);
    }, [theme]);

    useGSAP(() => {
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
    });

    return (
        <>
            <ReactLenis root>
                <div className={`${backgroundClass} transition-[background-color,colors] duration-300`}></div>

                <Header />
                <main>
                    <Hero />
                    <About />
                    <Skills />
                    <Work />
                    {/* <Review /> */}
                    <Contact />
                </main>
                <Footer />
            </ReactLenis>
        </>
    );
};

export default App;
