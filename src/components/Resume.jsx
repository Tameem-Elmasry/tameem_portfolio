import {
    Blinds,
    GraduationCap,
    Languages,
    User,
} from "lucide-react";
import React from "react";

const personalData = [
    {
        title: "Full Name",
        content: "Tameem Muhammad Elmasry - تميم محمد المصري",
    },
    {
        title: "Birth Day",
        content: "July 14, 2009",
    },
    {
        title: "Location",
        content: "Faisl / Giza / Egypt - فيصل / الجيزه / مصر",
    },
    {
        title: "Email",
        content: "tameeemelmasry@gmail.com",
    },
    {
        title: "Phone",
        content: "+20 1031693766",
    },
    {
        title: "LinkTree",
        content: "https://linktr.ee/TameemElmasry",
    },
];

const Resume = ({ classes }) => {
    return (
        <div
            className={`${classes} resume dark:bg-zinc-800/50 bg-gray-300 p-7 rounded-2xl md:p-12 flex justify-between gap-2 flex-col`}
        >
            <div className="resume-div">
                <div className="resume-div-title">
                    <h3>
                        <User className="icon-img" />
                        Personal Information:
                    </h3>
                </div>
                <div className="resume-div-info">
                    <ul className={`flex flex-col gap-1`}>
                        {personalData.map(({ title, content }, key) => (
                            <li
                                className={`border-l-[3px] border-slate-700 pl-2 rounded-md`}
                                key={key}
                            >
                                <span
                                    className={`sm:text-lg text-base sm:inline block mr-2 dark:text-slate-200 text-slate-900/80`}
                                >
                                    {title}:
                                </span>
                                <span className={`sm:text-sm text-xs`}>
                                    {content}
                                </span>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
            <hr />
            <div className="resume-div">
                <div className="resume-div-title">
                    <h3>
                        <Blinds className="icon-img" />
                        Summary:
                    </h3>
                </div>
                <div className="resume-div-info">
                    <p className="sm:text-base text-sm">
                        Self-taught MERN Stack Developer with experience in
                        building responsive, user-friendly web applications.
                        Skilled in HTML, CSS, JavaScript, TypeScript, React,
                        Tailwind CSS, Node.js, Express.js, and MongoDB.
                        Passionate about solving problems, designing creative
                        solutions, and contributing to impactful projects.
                    </p>
                </div>
            </div>
            <hr />
            <div className="resume-div">
                <div className="resume-div-title">
                    <h3>
                        <GraduationCap className="icon-img" />
                        Education:
                    </h3>
                </div>
                <div className="resume-div-info">
                    <p className="sm:text-base text-sm">
                        Qurtoba Azhar Language School - Grade 11 (Ongoing)
                    </p>
                </div>
            </div>
            <hr />
            <div className="resume-div">
                <div className="resume-div-title">
                    <h3>
                        <Languages className="icon-img" />
                        Languages:
                    </h3>
                </div>
                <div className="resume-div-info">
                    <ul className={`flex sm:flex-col gap-1`}>
                        <li
                            className={`border-l-[3px] border-slate-700 pl-2 rounded-md`}
                        >
                            <span
                                className={`sm:text-lg text-base sm:inline block mr-2 dark:text-slate-200 text-slate-900/80`}
                            >
                                Arabic:
                            </span>
                            <span className={`sm:text-sm text-xs`}>Native</span>
                        </li>
                        <li
                            className={`border-l-[3px] border-slate-700 pl-2 rounded-md sm:ml-0 ml-[25%]`}
                        >
                            <span
                                className={`sm:text-lg text-base sm:inline block mr-2 dark:text-slate-200 text-slate-900/80`}
                            >
                                English:
                            </span>
                            <span className={`sm:text-sm text-xs`}>
                                Intermediate
                            </span>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Resume;
