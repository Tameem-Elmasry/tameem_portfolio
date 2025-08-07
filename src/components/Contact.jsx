import {
    Github,
    Instagram,
    Link,
    LinkedinIcon,
    Phone,
    Twitter,
    X,
} from "lucide-react";
import React, { useContext, useEffect, useState } from "react";
import { ThemeContext } from "../context/ThemeContext";

const Contact = () => {
    const [style_theme, setStyle_Theme] = useState("");

    // @ constants
    const { theme } = useContext(ThemeContext);

    // @ effects
    useEffect(() => {
        setStyle_Theme(theme);
    }, [theme]);

    const icons_classes = `w-12 h-12 grid place-items-center ring-2 ring-inset dark:ring-zinc-50/5 ring-gray-400/70 rounded-lg transition-[background-color,color] dark:hover:bg-zinc-50 hover:bg-zinc-800 dark:hover:text-zinc-950 hover:text-white/70 dark:active:bg-zinc-50/80 active:bg-zinc-500 reveal-up hover:ring-zinc-800`;
    return (
        <section className="section" id="contact">
            <div className="container lg:grid lg:grid-cols-2 lg:items-stretch">
                <div className="mb-12 lg:mb-0 lg:flex lg:flex-col">
                    <h2
                        className={`${
                            style_theme === "dark"
                                ? "headline-2_dark"
                                : "headline-2_white"
                        } reveal-up lg:max-w-[12ch]`}
                    >
                        Contact me for collaboration
                    </h2>
                    <p className="reveal-up dark:text-zinc-400 text-gray-600 mt-3 mb-8 max-w-[50ch] lg:max-w-[30ch]">
                        Reach out today to discuss your project needs and start
                        collaborating on something amazing!
                    </p>
                    <div className="flex items-center gap-2 mt-auto">
                        <a
                            href="https://github.com/Tameem-Elmasry"
                            className={icons_classes}
                            target="_blank"
                            title="Github"
                        >
                            <Github />
                        </a>
                        <a
                            href="https://www.linkedin.com/in/tameem-muhamed-elmasry-3929752a5"
                            className={icons_classes}
                            target="_blank"
                            title="LinkedIn"
                        >
                            <LinkedinIcon />
                        </a>
                        <a
                            href="https://x.com/TameemMo4629"
                            className={icons_classes}
                            target="_blank"
                            title="Twitter X"
                        >
                            <Twitter />
                        </a>
                        <a
                            href="https://www.instagram.com/tameemmo4629/?next=%2F"
                            className={icons_classes}
                            target="_blank"
                            title="Instagram"
                        >
                            <Instagram />
                        </a>
                        <a
                            href="https://linktr.ee/TameemElmasry"
                            className={icons_classes}
                            target="_blank"
                            title="LinkTree"
                        >
                            <Link />
                        </a>
                        <a
                            href="https://linktr.ee/TameemElmasry"
                            className={icons_classes}
                            target="_blank"
                            title="Whatsapp"
                        >
                            <Phone />
                        </a>
                    </div>
                </div>
                <form
                    method="POST"
                    action="https://getform.io/f/ajjoklea"
                    className="xl:pl-10 2xl:pl-20"
                >
                    <div className="md:grid md:items-center md:grid-cols-2 md:gap-2">
                        <div className="mb-4 reveal-up">
                            <label htmlFor="name" className="label">
                                Name
                            </label>
                            <input
                                type="text"
                                name="name"
                                id="name"
                                autoComplete="name"
                                required
                                placeholder="ex. Tameem Muhammad"
                                className="text-field"
                            />
                        </div>
                        <div className="mb-4 reveal-up">
                            <label htmlFor="email" className="label">
                                Email
                            </label>
                            <input
                                type="email"
                                name="email"
                                id="email"
                                autoComplete="email"
                                required
                                placeholder="ex. tameem@example.com"
                                className="text-field"
                            />
                        </div>
                    </div>
                    <div className="mb-4 reveal-up">
                        <label htmlFor="message" className="label">
                            Message
                        </label>
                        <textarea
                            name="message"
                            id="message"
                            required
                            placeholder="ex. Hi!"
                            className="text-field resize-y min-h-32 max-h-80"
                        ></textarea>
                    </div>
                    <button
                        type="submit"
                        className="btn btn-primary reveal-up [&]:max-w-full w-full justify-center important"
                    >
                        Submit
                    </button>
                </form>
            </div>
        </section>
    );
};

export default Contact;
