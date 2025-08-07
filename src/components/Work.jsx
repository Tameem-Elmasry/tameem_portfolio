import React, { useContext, useEffect, useRef, useState } from "react";
import ProjectCard from "./ProjectCard";
import { ThemeContext } from "../context/ThemeContext";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const works = [
    // Your projects (unchanged)
    {
        imgSrc: "/images/css.png",
        title: "Computer Science Show",
        tags: ["Designer", "UI/UX", "Developer"],
        projectLink: "https://computer-sc-show.netlify.app",
    },
    {
        imgSrc: "/images/thinkboard.png",
        title: "Thinkboard Notes",
        tags: ["Full-stack", "UI/UX", "Developer"],
        projectLink: "https://mern-thinkboard.netlify.app",
    },
    {
        imgSrc: "/images/quraan.png",
        title: "Quraan online website",
        tags: ["developer", "creator", "designer"],
        projectLink: "https://quraan-online.netlify.app",
    },
    {
        imgSrc: "/images/company.png",
        title: "Company Review",
        tags: ["development", "Design", "front-end"],
        projectLink: "/",
    },
    {
        imgSrc: "/images/kasper.png",
        title: "Kasper Dashboard",
        tags: ["Landing page", "front-end"],
        projectLink: "/",
    },
    {
        imgSrc: "/images/leon.png",
        title: "Leon website",
        tags: ["landing page", "front-end"],
        projectLink: "/",
    },
    {
        imgSrc: "/images/bloggy.png",
        title: "Bloggy blog website",
        tags: ["front-end", "developer", "landing"],
        projectLink: "/",
    },
    {
        imgSrc: "/images/giftcard.png",
        title: "Giftcard landing page",
        tags: ["landing page", "developer"],
        projectLink: "/",
    },
    {
        imgSrc: "/images/nebras.png",
        title: "Nebras nersury website",
        tags: ["Landing page", "front-end"],
        projectLink: "/",
    },
    {
        imgSrc: "/images/hoobank.png",
        title: "Hoobank dashboard website",
        tags: ["developer", "front-end"],
        projectLink: "/",
    },
];

const Work = () => {
    const [style_theme, setStyle_Theme] = useState("");
    const [showAll, setShowAll] = useState(false);
    const containerRef = useRef(null);

    const { theme } = useContext(ThemeContext);

    useEffect(() => {
        setStyle_Theme(theme);
    }, [theme]);

    const visibleProjects = showAll ? works : works.slice(0, 6);

    useEffect(() => {
        const elements = gsap.utils.toArray(".reveal-up");

        gsap.fromTo(
            elements,
            { opacity: 0, y: 100 },
            {
                opacity: 1,
                y: 0,
                duration: 0.6,
                ease: "power2.out",
                stagger: 0.1,
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: "top 80%",
                },
            }
        );
    }, [visibleProjects]);

    const handleToggle = () => {
        if (showAll && containerRef.current) {
            containerRef.current.scrollIntoView({ behavior: "smooth" });
        }
        setShowAll(!showAll);
    };

    return (
        <section id="work" className="section">
            <div className="container">
                <h2
                    className={`${
                        style_theme === "dark"
                            ? "headline-2_dark"
                            : "headline-2_white"
                    } mb-8 reveal-up`}
                >
                    My Portfolio highlights
                </h2>

                <div
                    ref={containerRef}
                    className="grid gap-x-4 gap-y-5 grid-cols-[repeat(auto-fill,_minmax(280px,_1fr))]"
                >
                    {visibleProjects.map(
                        ({ imgSrc, title, tags, projectLink }, key) => (
                            <ProjectCard
                                imgSrc={imgSrc}
                                title={title}
                                tags={tags}
                                projectLink={projectLink}
                                key={key}
                                classes={`reveal-up transition-all duration-700 ease-out`}
                            />
                        )
                    )}
                </div>

                {works.length > 6 && (
                    <div className="flex justify-center mt-10">
                        <button
                            className="px-6 py-2 rounded-xl bg-sky-500 text-white hover:bg-sky-400 transition"
                            onClick={handleToggle}
                        >
                            {showAll ? "See Less" : "See More"}
                        </button>
                    </div>
                )}
            </div>
        </section>
    );
};

export default Work;
