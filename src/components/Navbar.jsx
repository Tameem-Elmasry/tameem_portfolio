import React, { useEffect, useRef, useState } from "react";
import PropTypes from "prop-types";

const SECTION_IDS = ["home", "about", "tech", "work", "contact"];

const Navbar = ({ navOpen }) => {
    const [activeSection, setActiveSection] = useState("home");
    const [isClickScrolling, setIsClickScrolling] = useState(false);
    const activeBox = useRef();
    const linkRefs = useRef({});

    // Track current active section smoothly
    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                if (isClickScrolling) return; // ❗ Prevent updates during click scroll

                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setActiveSection(entry.target.id);
                    }
                });
            },
            {
                rootMargin: "-50% 0px -50% 0px",
                threshold: 0,
            }
        );

        SECTION_IDS.forEach((id) => {
            const section = document.getElementById(id);
            if (section) observer.observe(section);
        });

        return () => observer.disconnect();
    }, [isClickScrolling]);

    // Move the active box
    useEffect(() => {
        const activeLink = linkRefs.current[activeSection];
        if (!activeLink || !activeBox.current) return;

        activeLink.classList.add("active");

        activeBox.current.style.top = `${activeLink.offsetTop}px`;
        activeBox.current.style.left = `${activeLink.offsetLeft}px`;
        activeBox.current.style.width = `${activeLink.offsetWidth}px`;
        activeBox.current.style.height = `${activeLink.offsetHeight}px`;

        Object.values(linkRefs.current).forEach((link) => {
            if (link !== activeLink) link.classList.remove("active");
        });
    }, [activeSection]);

    // Handle click scroll
    const handleClick = (e, sectionId) => {
        e.preventDefault();
        const target = document.getElementById(sectionId);
        if (!target) return;

        setIsClickScrolling(true); // ❗Disable intersection updates

        target.scrollIntoView({ behavior: "smooth" });
        setActiveSection(sectionId); // Manually update the section now

        // Re-enable observer after scroll ends (duration ~ 1s)
        setTimeout(() => {
            setIsClickScrolling(false);
        }, 1000); // You can tweak this if your scroll animation is longer/shorter
    };

    return (
        <nav className={`navbar ${navOpen ? "active" : ""}`}>
            {SECTION_IDS.filter((id) => id !== "contact").map((id) => (
                <a
                    key={id}
                    href={`#${id}`}
                    className="nav-link"
                    ref={(el) => (linkRefs.current[id] = el)}
                    onClick={(e) => handleClick(e, id)}
                >
                    {id.charAt(0).toUpperCase() + id.slice(1)}
                </a>
            ))}

            {/* Contact link for mobile only */}
            <a
                href="#contact"
                className="nav-link md:hidden"
                ref={(el) => (linkRefs.current["contact"] = el)}
                onClick={(e) => handleClick(e, "contact")}
            >
                Contact
            </a>

            <div className="active-box" ref={activeBox}></div>
        </nav>
    );
};

Navbar.propTypes = {
    navOpen: PropTypes.bool.isRequired,
};

export default Navbar;
