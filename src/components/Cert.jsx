import { TicketCheck } from "lucide-react";
import React from "react";

const certs = [
    {
        imgSrc: "/images/cert1.png",
        date: "Oct 20, 2023",
        label: "DECI - year 1",
        desc: "Completed Level Two Nanodegree from the Digital Egypt Cubs Initiative, gaining advanced digital and web development skills.",
    },
    {
        imgSrc: "/images/cert2.png",
        date: "March 21, 2023",
        label: "Digital Egypt Cubs Initiative",
        desc: "Completed Sololearn's Introduction to HTML course, gaining foundational knowledge of HTML structure and elements.",
    },
    {
        imgSrc: "/images/cert3.png",
        date: "Oct 16, 2024",
        label: "DECI - year 2",
        desc: "Completed Level Three Nanodegree from the Digital Egypt Cubs Initiative, gaining advanced web development skills",
    },
];

const Cert = ({ classes }) => {
    return (
        <div
            className={`${classes} resume dark:bg-zinc-800/50 bg-gray-300 sm:p-7 p-4 rounded-2xl md:p-12 flex justify-between gap-2 flex-col`}
        >
            <h2
                className={`headline-2_dark md:!text-2xl sm:!text-xl !text-lg reveal-up mb-7 flex items-center gap-2`}
            >
                <TicketCheck />
                Achievements That Reflect My Continuous Development
            </h2>
            <div className="cert-container w-full grid sm:grid-cols-[repeat(auto-fill,_minmax(250px,_1fr))] grid-cols-[repeat(auto-fill,_minmax(220px,_1fr))] gap-6">
                {certs.map(({ imgSrc, date, label, desc }, key) => (
                    <div
                        key={key}
                        className="card dark:bg-slate-200/20 bg-slate-400 rounded-md flex flex-col justify-start items-center p-4"
                    >
                        <div className="img-box rounded-md overflow-hidden w-full aspect-[4/3]">
                            <img
                                src={imgSrc}
                                alt="certification"
                                className="w-full h-full object-cover"
                            />
                        </div>
                        <span className="mt-3 dark:text-gray-200 text-slate-800 text-sm">
                            {date}
                        </span>
                        <h3 className="dark:text-sky-200 text-black/80 text-lg font-semibold mt-2 mb-1 text-center">
                            {label}
                        </h3>
                        <p className="text-center text-sm dark:text-gray-300 text-gray-600">
                            {desc}
                        </p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Cert;
