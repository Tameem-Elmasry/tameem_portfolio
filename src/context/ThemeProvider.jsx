import { useEffect, useState } from "react";
import { ThemeContext } from "./ThemeContext";

export const ThemeProvider = ({ children }) => {
    // @ states
    const [theme, setTheme] = useState(() => {
        return localStorage.getItem("theme") || "dark";
    });

    // @ effects
    useEffect(() => {
        if (theme === "dark") {
            document.documentElement.classList.add("dark");
            document.documentElement.classList.remove("light");
        } else {
            document.documentElement.classList.add("light");
            document.documentElement.classList.remove("dark");
        }
        localStorage.setItem("theme", theme);
    }, [theme]);

    const toggleTheme = () => {
        setTheme((prev) => (prev === "light" ? "dark" : "light"));
    };

    const values = { theme, toggleTheme };

    return (
        <ThemeContext.Provider value={values}>{children}</ThemeContext.Provider>
    );
};
