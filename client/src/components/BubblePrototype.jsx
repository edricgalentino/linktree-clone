import React from "react";

function BubblePrototype({ link, title }) {
    return (
        <div className={`bg-white w-full rounded-full p-1 relative hover:ml-2 hover:drop-shadow-xl transition-all ${link.length === 8 && link.startsWith("https://") ? "cursor-not-allowed" : ""}`}>
            <a target="_blank" href={link} rel="noreferrer" className={`${link.length === 8 && link.startsWith("https://") ? "cursor-not-allowed pointer-events-none" : ""}`}>
                <h6 className={`${title === "" ? "text-slate-500 text-sm" : "text-sm"} `}>{title === "" ? "enter your title..." : title}</h6>
            </a>
        </div>
    );
}

export default BubblePrototype;
