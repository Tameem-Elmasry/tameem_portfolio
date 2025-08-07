import React from "react";
import ProjectCard from "./ProjectCard";


const works = [
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
    return (
        <section id="work" className="section">
            <div className="container">
                <h2 className={`headline-2 mb-8 reveal-up`}>
                    My Portfolio highlights
                </h2>
                <div className="grid gap-x-4 gap-y-5 grid-cols-[repeat(auto-fill,_minmax(280px,_1fr))]">
                    {works.map(({ imgSrc, title, tags, projectLink }, key) => (
                        <ProjectCard
                            imgSrc={imgSrc}
                            title={title}
                            tags={tags}
                            projectLink={projectLink}
                            key={key}
                            classes={`reveal-up`}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Work;
