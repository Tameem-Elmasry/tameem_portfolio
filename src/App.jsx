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
import Review from "./components/Review";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

// TODO Tasks:
// MO ADD - dark and light mode
// MO ADD - see more in the projects
// MO SECTION - Add section for the certificates
// MO REVISE - all the tailwind classes that i don't know so i can learn them
// MO UPDATE the instagram account
// MO FINALLY - add the website to all my social media and cv and LinkTree

// @ GSAP REGISTER
gsap.registerPlugin(useGSAP, ScrollTrigger);

// @ component
const App = () => {
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

    const styles = [
        "fixed top-0 z-[-2] w-full h-screen bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,#1b1930,transparent)]",
        "fixed top-0 z-[-3] h-screen w-screen bg-[#000000] bg-[radial-gradient(#ffffff11_1px,#000000_1px)] bg-[size:20px_20px]",
    ];

    return (
        <>
            <ReactLenis root>
                <div
                    className={
                        styles[Math.floor(Math.random() * styles.length)]
                    }
                ></div>
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
