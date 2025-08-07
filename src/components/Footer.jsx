import React from "react";
import { ButtonPrimary } from "./Button";

const sitemap = [
    {
        label: "Home",
        href: "#home",
    },
    {
        label: "About",
        href: "#about",
    },
    {
        label: "Technologies",
        href: "#tech",
    },
    {
        label: "Work",
        href: "#work",
    },
    {
        label: "Reviews",
        href: "#reviews",
    },
    {
        label: "Contact me",
        href: "#contact",
    },
];

const socials = [
    {
        label: "GitHub",
        href: "https://github.com/Tameem-Elmasry",
    },
    {
        label: "LinkedIn",
        href: "https://www.linkedin.com/in/tameem-muhamed-elmasry-3929752a5",
    },
    {
        label: "Twitter X",
        href: "https://x.com/TameemMo4629",
    },
    {
        label: "Instagram",
        href: "https://www.instagram.com/tameemmo4629/?next=%2F",
    },
    {
        label: "LinkTree",
        href: "https://linktr.ee/TameemElmasry",
    },
];

const Footer = () => {
    return (
        <footer className="section pb-1">
            <div className="container">
                <div className="lg:grid lg:grid-cols-2 ">
                    <div className="mb-10">
                        <h2 className="headline-1 mb-8 lg:max-w-[12ch]">
                            {`Let's work together today`}
                        </h2>
                        <ButtonPrimary
                            href="mailto:tameeemelmasry@gmail.com"
                            label="Start a Project"
                            icon="chevron_right"
                        />
                    </div>

                    <div className="grid grid-cols-2 gap-4 lg:pl-20 ">
                        <div>
                            <p className="mb-2">Sitemap</p>
                            <ul>
                                {sitemap.map(({ label, href }, key) => (
                                    <li key={key}>
                                        <a
                                            href={href}
                                            className="block text-sm text-zinc-400 py-1 transitions-colors hover:text-zinc-200"
                                        >
                                            {label}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div>
                            <p className="mb-2">Socials</p>
                            <ul>
                                {socials.map(({ label, href }, key) => (
                                    <li key={key}>
                                        <a
                                            href={href}
                                            target="_blank"
                                            className="block text-sm text-zinc-400 py-1 transition-colors hover:text-zinc-200"
                                        >
                                            {label}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="flex items-center justify-between pt-10 mb-8">
                    <a href="/">
                        <img
                            src="/images/TE-white.png"
                            width={40}
                            height={40}
                            alt="logo"
                        />
                    </a>
                    <p className={`text-zinc-500 text-sm`}>
                        &copy; 2025{" "}
                        <span className="text-zinc-200">Tameem muhammad</span>
                    </p>{" "}
                </div>
            </div>
        </footer>
    );
};

export default Footer;
