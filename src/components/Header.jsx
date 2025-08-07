// @ imports
// $ modules
import React, { useContext, useEffect, useState } from "react";
// $ components
import Navbar from "./Navbar";
import ToggleThemeBtn from "./ToggleThemeBtn";
import { ThemeContext } from "../context/ThemeContext";

const Header = () => {
    // @ states
    const [navOpen, setNavOpen] = useState(false);
    const [style_theme, setStyle_Theme] = useState("");

    // @ constants
    const { theme } = useContext(ThemeContext);

    // @ effects
    useEffect(() => {
        setStyle_Theme(theme);
    }, [theme]);

    return (
        <header
            className={`fixed top-0 left-0 w-full h-16 flex items-center z-40 bg-gradient-to-b dark:from-zinc-900 dark:to-zinc-900/0 from-[#b0b0b7] to-gray-50/0`}
        >
            <div className="max-w-screen-2xl w-full mx-auto px-4 flex justify-between items-center md:px-6 md:grid md:grid-cols-[1fr,3fr,1fr]">
                <h1>
                    <a href="/" className="logo">
                        <img
                            src={`/images/TE-${
                                style_theme === "dark" ? "white" : "black"
                            }.png`}
                            alt="logo"
                            width={40}
                            height={40}
                        />
                    </a>
                </h1>
                <h1 className={`md:hidden sm:text-xl text-sm`}>
                    Tameem Muhammad <span className={`px-2`}>-</span> تميم محمد
                </h1>
                <div className="flex flex-row items-center justify-center gap-4">
                    <ToggleThemeBtn />
                    <div className={`relative md:justify-self-center`}>
                        <button
                            className={`menu-btn md:hidden`}
                            onClick={() => setNavOpen((prev) => !prev)}
                        >
                            <span className="material-symbols-rounded">
                                {navOpen ? "close" : "menu"}
                            </span>
                        </button>
                        <Navbar navOpen={navOpen} />
                    </div>
                </div>
                <a
                    href="#contact"
                    className="btn btn-secondary max-md:hidden md:justify-self-end"
                >
                    Contact me
                </a>
            </div>
        </header>
    );
};

export default Header;
