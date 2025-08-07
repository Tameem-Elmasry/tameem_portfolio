import React from "react";

const aboutItems = [
    {
        label: "Project done",
        number: 15,
    },
    {
        label: "Years of experience",
        number: 5,
    },
];

const About = () => {
    return (
        <section id="about" className={`section`}>
            <div className="container">
                <div className="bg-zinc-800/50 p-7 rounded-2xl md:p-12 reveal-up ">
                    <p className="text-zinc-300 mb-4 md:mb-8 reveal-up md:text-xl md:max-w-[60ch]">
                        I'm Tameem Elmasry, a 16-year-old MERN Stack developer
                        from Egypt. I started my coding journey at age 10 and
                        have been passionate about web development ever since. I
                        specialize in creating responsive and user-friendly web
                        applications using modern technologies like React,
                        Node.js, Express, and MongoDB. I'm constantly improving
                        my skills, contributing to real projects, and working
                        toward becoming a professional full-stack developer. I
                        believe in learning by doing, and I’m always open to new
                        challenges and opportunities to grow.
                    </p>
                    <div className="reveal-up flex flex-wrap items-center gap-4 md:gap-7">
                        {aboutItems.map(({ label, number }, key) => (
                            <div key={key} className="">
                                <div className="flex items-center md:gap-1">
                                    <span className="text-2xl font-bold md:text-4xl">
                                        {number}
                                    </span>
                                    <span className="text-sky-400 font-bold md:text-3xl">
                                        +
                                    </span>
                                </div>
                                <p className={`text-sm text-zinc-400`}>
                                    {label}
                                </p>
                            </div>
                        ))}

                        <img
                            src="/images/TE-white.png"
                            alt="tameem logo"
                            width={30}
                            height={30}
                            className="ml-auto md:size-[70px]"
                        />
                    </div>
                    <p className="reveal-up text-zinc-300 mt-8 mb-2 md:mb-4 md:text-xl md:max-w-[60ch]">
                        Outside of coding, I enjoy solving problems, helping
                        others learn, and building tech communities. I’ve led
                        tech initiatives like the Computer Science Show to share
                        knowledge and support learners. I believe that code can
                        change lives, and I want to be part of that change.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default About;
