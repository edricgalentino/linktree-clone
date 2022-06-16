import React from "react";

function BubblePrototype({ link, title, choosenTheme }) {
    return (
        <div
            className={`${choosenTheme.bgBubble === undefined ? "bg-emerald-400" : choosenTheme.bgBubble} w-full rounded-full p-1 relative hover:ml-2 hover:drop-shadow-xl transition-all ${
                link.length === 8 && link.startsWith("https://") ? "cursor-not-allowed" : ""
            }`}
        >
            <a target="_blank" href={link} rel="noreferrer" className={`${link.length === 8 && link.startsWith("https://") ? "cursor-not-allowed pointer-events-none" : ""}`}>
                <h6 className={`${choosenTheme.textColor} text-sm font-semibold`}>{title === "" ? "enter your title..." : title}</h6>
            </a>
        </div>
    );
}

export default BubblePrototype;
