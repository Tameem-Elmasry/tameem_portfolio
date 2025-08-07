import React, { useEffect, useState } from "react";

const TypewriterTitles = () => {
    const titles = [
        "Web Developer",
        "Graphic Designer",
        "Frontend dev",
        "backend dev",
        "mern stack dev",
    ];
    const [currentTitleIndex, setCurrentTitleIndex] = useState(0);
    const [displayText, setDisplayText] = useState("");
    const [isDeleting, setIsDeleting] = useState(false);
    const [cursorVisible, setCursorVisible] = useState(true);

    useEffect(() => {
        const currentTitle = titles[currentTitleIndex];
        let typingSpeed = 50;

        if (isDeleting) typingSpeed = 40;

        const timeout = setTimeout(() => {
            if (isDeleting) {
                setDisplayText((prev) => prev.slice(0, -1));
            } else {
                setDisplayText((prev) =>
                    currentTitle.slice(0, prev.length + 1)
                );
            }

            // When done typing
            if (!isDeleting && displayText === currentTitle) {
                setTimeout(() => setIsDeleting(true), 1000); // pause before deleting
            }

            // When done deleting
            if (isDeleting && displayText === "") {
                setIsDeleting(false);
                setCurrentTitleIndex((prev) => (prev + 1) % titles.length);
            }
        }, typingSpeed);

        return () => clearTimeout(timeout);
    }, [displayText, isDeleting, currentTitleIndex]);

    // Flickering cursor
    useEffect(() => {
        const cursorInterval = setInterval(() => {
            setCursorVisible((prev) => !prev);
        }, 500);
        return () => clearInterval(cursorInterval);
    }, []);

    return (
        <h1 style={{ fontFamily: "monospace", whiteSpace: "pre" }}>
            {displayText}
            <span style={{ opacity: cursorVisible ? 1 : 0 }}>|</span>
        </h1>
    );
};

export default TypewriterTitles;
