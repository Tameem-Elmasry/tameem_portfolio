// @ imports
import React, { useContext, useEffect, useState } from "react";
import { ButtonPrimary, ButtonOutline } from "./Button";
import TypewriterTitles from "./TypewritterTitles";
import { ThemeContext } from "../context/ThemeContext";

const Hero = () => {
    const [style_theme, setStyle_Theme] = useState("");

    // @ constants
    const { theme } = useContext(ThemeContext);

    // @ effects
    useEffect(() => {
        setStyle_Theme(theme);
    }, [theme]);

    return (
        <section id="home" className="pt-28 lg:pt-36">
            <div
                className={`container lg:grid lg:grid-cols-2 lg:gap-10 items-center`}
            >
                <div className={`flex flex-row`}>
                    <div className="">
                        <div className={`flex items-center gap-3`}>
                            <figure className={`img-box size-9 rounded-lg`}>
                                <img
                                    src={`/images/TE-${
                                        style_theme === "dark"
                                            ? "white"
                                            : "black"
                                    }.png`}
                                    alt="Tameem Muhammad Portrait"
                                    width={40}
                                    height={40}
                                    className={`img-cover`}
                                />
                            </figure>
                            <div className="flex items-center gap-1.5 text-zinc-950 dark:text-zinc-400 text-sm tracking-wide">
                                <span className="relative size-2 bg-emerald-400 rounded-full">
                                    <span className="absolute inset-0 bg-emerald-400 rounded-full animate-ping"></span>
                                </span>
                                Available for hire
                            </div>
                        </div>
                        <h2
                            className={`${
                                style_theme === "dark"
                                    ? "headline-1_dark"
                                    : "headline-1_white"
                            } mt-5 mb-8 lg:mb-10 max-w-[15ch] sm:max-w-[20ch] lg:max-w-[15ch] `}
                        >
                            Crafting Modern, Scalable Websites with MERN Stack
                            Excellence
                        </h2>
                        <div className="mb-10 block md:hidden  text-xl">
                            <TypewriterTitles />
                        </div>
                        <div className="flex items-center gap-3 ">
                            <a href="/cv.pdf" download>
                                <ButtonPrimary
                                    label="Download CV"
                                    icon="download"
                                />
                            </a>
                            <ButtonOutline
                                href="#about"
                                label="Scroll Down"
                                icon="arrow_downward"
                            />
                        </div>
                    </div>
                    <div className="lg:hidden md:flex hidden justify-center flex-col items-center mb-1 ">
                        <img
                            src="/images/arabic_name.png"
                            alt="tameem logo"
                            className="max-w-[200px] mb-12 mt-3"
                        />
                        <TypewriterTitles />
                    </div>
                </div>
                <div className="hidden lg:block">
                    <figure className="w-full h-[450px] items-center gap-10 max-w-[480px] ml-auto flex flex-col justify-center pb-5 bg-gradient-to-t from-slate-500  via-35% via-gray-400/40 to-70% dark:from-sky-400 dark:via-32% dark:via-sky-400/40 dark:to-60%  rounded-[60px] overflow-hidden ">
                        <img
                            src="/images/arabic_name.png"
                            alt="Tameem Muhammad"
                            className={`w-[250px]`}
                        />
                        <div className="text-3xl titles">
                            <TypewriterTitles />
                        </div>
                    </figure>
                </div>
            </div>
        </section>
    );
};

export default Hero;
