import React from "react";
import BubblePrototype from "./BubblePrototype";

function PrototypeMobile({ titleProfile, descriptionProfile, linksValue, choosenTheme, avatarProfile, dark }) {
    return (
        <div className={`resizable w-72 ${dark ? "bg-gray-800" : "bg-white"} font-poppins h-120 overflow-y-auto flex py-7 flex-col justify-between gap-4 items-center border-8 rounded-3xl ${dark ? "border-gray-500" : "border-gray-500"}`}>
            <section className="profile relative flex justify-center flex-col">
                <div className={`container w-1/3  ${!dark ? "bg-gray-800" : "bg-white"} border-4 border-black rounded-full mx-auto`}>
                    <img className=" bg-slate-200 rounded-full" src="defaultPict.jpeg" alt="user" />
                </div>
                <div className="name mt-3">
                    <h5 className={`text-lg font-semibold ${dark ? "text-white" : "text-slate-700"}`}>{titleProfile === "" ? "<Your Title>" : titleProfile}</h5>
                </div>
                <div className="desc block">
                    <p className={`text-sm block ${dark ? "text-white" : "text-slate-700"}`}>{descriptionProfile === "" ? "<Your Description>" : descriptionProfile}</p>
                </div>
            </section>
            <section className="main-content flex justify-center items-center flex-col w-52 gap-3 my-7">
                {linksValue.map((link, index) => (
                    <BubblePrototype choosenTheme={choosenTheme} key={index} link={link.link.link} title={link.link.title} />
                ))}
            </section>
            <footer>
                <h1 className={`text-sm font-semibold ${dark ? "text-white" : "text-slate-700"}`}>myLinktree</h1>
            </footer>
        </div>
    );
}

export default PrototypeMobile;
