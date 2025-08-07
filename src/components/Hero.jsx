// @ imports
import React from "react";
import { ButtonPrimary, ButtonOutline } from "./Button";
import TypewriterTitles from "./TypewritterTitles";

const Hero = () => {
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
                                    src="/images/TE-white.png"
                                    alt="Tameem Muhammad Portrait"
                                    width={40}
                                    height={40}
                                    className={`img-cover`}
                                />
                            </figure>
                            <div className="flex items-center gap-1.5 text-zinc-400 text-sm tracking-wide">
                                <span className="relative size-2 bg-emerald-400 rounded-full">
                                    <span className="absolute inset-0 bg-emerald-400 rounded-full animate-ping"></span>
                                </span>
                                Available for hire
                            </div>
                        </div>
                        <h2
                            className={`headline-1 mt-5 mb-8 lg:mb-10 max-w-[15ch] sm:max-w-[20ch] lg:max-w-[15ch] `}
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
                    <div className="lg:hidden md:flex hidden justify-center flex-col items-center mb-10 ">
                        <img
                            src="/images/hero-banner.png"
                            alt="tameem logo"
                            className="max-w-[200px] -my-[50px]"
                        />
                        <TypewriterTitles />
                    </div>
                </div>
                <div className="hidden lg:block">
                    <figure className="w-full h-[400px] items-center max-w-[480px] ml-auto flex flex-col justify-start bg-gradient-to-t  from-sky-400 via-25% via-sky-400/40 to-65% rounded-[60px] overflow-hidden ">
                        <img
                            src="/images/hero-banner.png"
                            alt="Tameem Muhammad"
                            className={`w-[400px] -mt-[70px]  -mb-[130px]`}
                        />
                        <img
                            src="/images/TE-white.png"
                            alt="tameem logo"
                            width={30}
                            height={30}
                            className="md:size-[70px]"
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
