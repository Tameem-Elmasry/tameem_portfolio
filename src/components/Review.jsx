import React, { useContext, useEffect, useState } from "react";
import ReviewCard from "./ReviewCard";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { ThemeContext } from "../context/ThemeContext";

gsap.registerPlugin(ScrollTrigger);

const reviews = [
    {
        content:
            "Professional work! Delivered on time, with a polished design and smooth user experience. Top-notch developer.",
        name: "Ava Thompson",
        imgSrc: "/images/people-5.jpg",
        company: "TechMosaic",
    },
    {
        content:
            "Creative and skilled! Produced a modern, user-friendly site that exceeded expectations. Great communication.",
        name: "Noah Williams",
        imgSrc: "/images/people-4.jpg",
        company: "BrightWeb",
    },
    {
        content:
            "Excellent project execution! High-quality code, responsive design, and exceptional problem-solving skills.",
        name: "Jonathan",
        imgSrc: "/images/people-6.jpg",
        company: "Skyline Digital",
    },
    {
        content:
            "Impressive work! Fast loading times, intuitive design, and flawless backend integration. Highly recommend.",
        name: "Ethan Caldwell",
        imgSrc: "/images/people-2.jpg",
        company: "NexaWave",
    },
    {
        content:
            "Outstanding developer! Built a robust site with perfect functionality. Efficient and detail-oriented.",
        name: "Liam Bennett",
        imgSrc: "/images/people-3.jpg",
        company: "CodeCraft",
    },
    {
        content:
            "Exceptional web development! Delivered a seamless, responsive site with clean code and great UX.",
        name: "Sophia Ramirez",
        imgSrc: "/images/people-1.jpg",
        company: "PixelForge",
    },
];

const Review = () => {
    const [style_theme, setStyle_Theme] = useState("");

    // @ constants
    const { theme } = useContext(ThemeContext);

    // @ effects
    useEffect(() => {
        setStyle_Theme(theme);
    }, [theme]);

    useGSAP(() => {
        gsap.to(".scrub-slide", {
            scrollTrigger: {
                trigger: ".scrub-slide",
                start: "-100% 80%",
                end: "400% 80%",
                scrub: true,
            },
            x: "-1000",
        });
    });

    return (
        <section className="section overflow-hidden" id="reviews">
            <div className="container">
                <h2
                    className={`${
                        style_theme === "dark"
                            ? "headline-2_dark"
                            : "headline-2_white"
                    } mb-8 reveal-up`}
                >
                    What our customers say
                </h2>
                <div className=" scrub-slide flex items-stretch gap-3 w-fit">
                    {reviews.map(({ content, name, imgSrc, company }, key) => (
                        <ReviewCard
                            content={content}
                            name={name}
                            imgSrc={imgSrc}
                            company={company}
                            key={key}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Review;
