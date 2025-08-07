import React, { useContext, useEffect, useState } from "react";
import SkillCard from "./SkillCard";
import { ThemeContext } from "../context/ThemeContext";

const skillItem = [
    {
        imgSrc: "/images/html.svg",
        label: "HTML",
        desc: "Page structure",
    },
    {
        imgSrc: "/images/css3.svg",
        label: "CSS",
        desc: "User Interface",
    },
    {
        imgSrc: "/images/javascript.svg",
        label: "JavaScript",
        desc: "Interaction",
    },
    {
        imgSrc: "/images/ts.svg",
        label: "Typescript",
        desc: "Interaction",
    },
    {
        imgSrc: "/images/tailwindcss.svg",
        label: "TailwindCSS",
        desc: "User Interface",
    },
    {
        imgSrc: "/images/react.svg",
        label: "React",
        desc: "Framework",
    },
    {
        imgSrc: "/images/expressjs.svg",
        label: "ExpressJS",
        desc: "Node Framework",
    },
    {
        imgSrc: "/images/mongodb.svg",
        label: "MongoDB",
        desc: "Database",
    },
    {
        imgSrc: "/images/nodejs.svg",
        label: "NodeJS",
        desc: "Web Server",
    },
];

const Skills = () => {
    const [style_theme, setStyle_Theme] = useState("");

    // @ constants
    const { theme } = useContext(ThemeContext);

    // @ effects
    useEffect(() => {
        setStyle_Theme(theme);
    }, [theme]);

    return (
        <section id="tech" className="section">
            <div className="container">
                <h2
                    className={`${
                        style_theme === "dark"
                            ? "headline-2_dark"
                            : "headline-2_white"
                    } reveal-up`}
                >
                    Essentials Tools that I use
                </h2>
                <p className="dark:text-zinc-400 text-slate-600 mt-3 mb-8 max-w-[50ch] reveal-up">
                    Discover the powerful tools and technologies I use to create
                    exceptional, high-performing websites & applications
                </p>
                <div className="grid gap-3 grid-cols-[repeat(auto-fill,_minmax(250px,_1fr))]">
                    {skillItem.map(({ imgSrc, label, desc }, key) => (
                        <SkillCard
                            imgSrc={imgSrc}
                            label={label}
                            desc={desc}
                            key={key}
                            classes={"reveal-up"}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skills;
