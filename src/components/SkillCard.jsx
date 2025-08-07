import React from "react";
import PropTypes from "prop-types";

const SkillCard = ({ imgSrc, label, desc, classes }) => {
    return (
        <div
            className={`flex items-center gap-3 ring-2 ring-inset hover:ring-slate-600 dark:ring-zinc-50/10 ring-slate-700/40 hover:bg-zinc-300 rounded-2xl p-3 dark:hover:bg-zinc-800 transition-colors group ${classes}`}
        >
            <figure className="dark:bg-zinc-700/50 bg-slate-600 rounded-lg overflow-hidden size-12 p-2 group-hover:bg-zinc-900 transition-colors">
                <img src={imgSrc} alt={label} width={32} height={32} />
            </figure>
            <div className="">
                <h3 className={`font-medium`}>{label}</h3>
                <p className={`dark:text-zinc-400 text-zinc-700 text-sm`}>
                    {desc}
                </p>
            </div>
        </div>
    );
};

SkillCard.PropTypes = {
    imgSrc: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    desc: PropTypes.string.isRequired,
    classes: PropTypes.string,
};

export default SkillCard;
