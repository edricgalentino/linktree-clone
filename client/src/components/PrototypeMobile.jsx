import React from "react";
import BubblePrototype from "./BubblePrototype";

function PrototypeMobile({ titleProfile, descriptionProfile, linksValue }) {
    return (
        <div className="resizable w-72 bg-slate-200 font-poppins h-120 overflow-y-auto flex py-7 flex-col justify-between gap-4 items-center border-8 rounded-3xl border-black">
            <section class="profile relative flex justify-center flex-col">
                <div class="container w-1/3  bg-black border-4 border-black rounded-full mx-auto">
                    <img class=" bg-slate-200 rounded-full" src="profile.png" alt="user" />
                </div>
                <div class="name mt-3">
                    <h5 className="text-lg font-semibold">{titleProfile === "" ? "<Your Title>" : titleProfile}</h5>
                </div>
                <div class="desc">
                    <p className="text-sm">{descriptionProfile === "" ? "<Your Description>" : descriptionProfile}</p>
                </div>
            </section>
            <section class="main-content flex justify-center items-center flex-col w-52 gap-3 my-7">
                {linksValue.map((link, index) => (
                    <BubblePrototype key={index} link={link.link.link} title={link.link.title} />
                ))}
            </section>
            <footer>
                <h1 className="text-sm font-semibold">myLinktree</h1>
            </footer>
        </div>
    );
}

export default PrototypeMobile;
