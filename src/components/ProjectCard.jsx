import React from "react";
import PropTypes from "prop-types";

const ProjectCard = ({ imgSrc, title, tags, projectLink, classes }) => {
    return (
        <div
            className={`relative p-4 rounded-2xl dark:bg-zinc-800 bg-gray-200 dark:hover:bg-zinc-700/50 hover:bg-zinc-300 dark:active:bg-zinc-700/60 active:bg-slate-300 ring-1 ring-inset dark:ring-zinc-50/5 ring-slate-500/80 transition-colors group ${classes}`}
        >
            <figure className="img-box aspect-square mb-4 rounded-lg shadow-lg mx-auto group-hover:shadow-xl w-[230px] sm:w-full ">
                <img
                    src={imgSrc}
                    alt={title}
                    loading="lazy"
                    className="img-cover"
                />
            </figure>
            <div className="flex items-center gap-4 justify-between">
                <div>
                    <h3 className="title-1 mb-3">{title}</h3>
                    <div className="flex flex-wrap items-center gap-2">
                        {tags.map((label, key) => (
                            <span
                                className="sm:h-8 h-6 sm:text-sm dark:text-zinc-400 text-gray-100 dark:bg-zinc-50/5 bg-slate-900 flex justify-center items-center px-2 sm:px-3 sm:rounded-lg rounded-md"
                                key={key}
                            >
                                {label}
                            </span>
                        ))}
                    </div>
                </div>
                <div className="size-11 rounded-lg grid place-items-center bg-slate-600 text-white/70 dark:bg-sky-400 dark:text-zinc-950 shrink-0">
                    <span
                        className="material-symbols-rounded"
                        aria-hidden="true"
                    >
                        arrow_outward
                    </span>
                </div>
            </div>
            <a
                href={projectLink}
                target="_blank"
                className="absolute inset-0"
            ></a>
        </div>
    );
};

ProjectCard.PropTypes = {
    imgSrc: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    tags: PropTypes.array.isRequired,
    projectLink: PropTypes.string,
    classes: PropTypes.string,
};

export default ProjectCard;
