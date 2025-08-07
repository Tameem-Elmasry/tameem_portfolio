import { Moon, Sun } from "lucide-react";
import React, { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext.js";

const ToggleThemeBtn = () => {
    const { theme, toggleTheme } = useContext(ThemeContext);

    return (
        <button
            className={`toggle-theme-btn`}
            aria-label="toggle theme"
            onClick={toggleTheme}
        >
            {theme === "dark" ? <Sun /> : <Moon />}
        </button>
    );
};

export default ToggleThemeBtn;
