import React, { useEffect, useState } from "react";
// component
import LinktreeLink from "../components/LinktreeLink";
import SortableComponent from "../components/SortableComponent";

import { BsFillPersonFill } from "react-icons/bs";
import { GrAdd } from "react-icons/gr";
import { IoMdColorPalette } from "react-icons/io";
import { AiFillFormatPainter } from "react-icons/ai";
import { ImHome3 } from "react-icons/im";
import Appearrance from "../components/Appearrance";
import PrototypeMobile from "../components/PrototypeMobile";
import Background from "../components/Background";
import Theme from "../components/Theme";

const Home = () => {
    const [linksValue, setLinksValue] = useState([
        {
            link: {
                title: "",
                link: "https://",
            },
        },
    ]);
    const [active, setActive] = useState("home");
    const [titleProfile, setTitleProfile] = useState("");
    const [descriptionProfile, setDescriptionProfile] = useState("");
    const [avatarProfile, setAvatarProfile] = useState("");

    const [choosenTheme, setChoosenTheme] = useState({});
    const [isDark, setIsDark] = useState(false);


    return (
        <>
            <main className="flex justify-end bg-slate-100">
                <nav className=" lg:w-20 lg:h-80 w-full h-20 rounded-full flex lg:flex-col lg:gap-3 z-40 fixed lg:left-6 lg:top-24 lg:mt-0 mt-96 top-80 lg:justify-center justify-evenly items-center p-5 drop-shadow-lg bg-white">
                    <button
                        onClick={() => {
                            setActive("home");
                        }}
                        className={`${active === "home" ? "bg-emerald-200" : ""} icon hover:bg-emerald-400 relative lg:hover:ml-2 transition-all p-3 rounded-full drop-shadow-lg`}
                    >
                        <ImHome3 size={"34px"} />
                    </button>
                    <button
                        onClick={() => {
                            setActive("appearrance");
                        }}
                        className={`${active === "appearrance" ? "bg-emerald-200" : ""} icon hover:bg-emerald-400 relative lg:hover:ml-2 transition-all p-3 rounded-full drop-shadow-lg`}
                    >
                        <BsFillPersonFill size={"34px"} />
                    </button>
                    <button
                        onClick={() => {
                            setActive("theme");
                        }}
                        className={`${active === "theme" ? "bg-emerald-200" : ""} icon hover:bg-emerald-400 relative lg:hover:ml-2 transition-all p-3 rounded-full drop-shadow-lg`}
                    >
                        <IoMdColorPalette size={"34px"} />
                    </button>
                    <button
                        className={`${active === "home" ? "" : "cursor-not-allowed"} icon bg-emerald-400 relative lg:hover:ml-2 transition-all p-3 rounded-full  hover:drop-shadow-xl`}
                        onClick={() => {
                            setLinksValue([
                                ...linksValue,
                                {
                                    link: {
                                        title: "",
                                        link: "https://",
                                    },
                                },
                            ]);
                        }}
                    >
                        <GrAdd size={"34px"} color="white" />
                    </button>
                </nav>
                <section className="editor lg:w-11/12 w-full bg-slate-100 flex lg:flex-row flex-col justify-around">
                    <div className="draggable lg:w-2/3 w-full lg:border-r-2 lg:border-b-0 border-b-2 border-black min-h-screen flex justify-center bg-slate-100 items-center">
                        <div className={`${active === "home" ? "" : "hidden"} container home lg:w-2/3 w-11/12 min-h-screen bg-slate-100 flex flex-col gap-4 lg:pb-12 pb-10`}>
                            <LinktreeLink />
                            <SortableComponent linksValue={linksValue} setLinksValue={(newLinksValue) => setLinksValue(newLinksValue)} />
                        </div>
                        <div className={`${active === "appearrance" ? "" : "hidden"} container appearrance lg:w-2/3 w-11/12 min-h-screen bg-slate-100 flex flex-col gap-4 lg:pb-12 pb-10`}>
                            <LinktreeLink />
                            <Appearrance setTitleProfile={(value) => setTitleProfile(value)} setDescriptionProfile={(value) => setDescriptionProfile(value)} />
                        </div>{" "}
                        <div className={`${active === "theme" ? "" : "hidden"} container background lg:w-2/3 w-11/12 min-h-screen bg-slate-100 flex flex-col gap-4 lg:pb-12 pb-10`}>
                            <LinktreeLink />
                            <Theme setChoosenTheme={(value) => setChoosenTheme(value)} isDark={isDark} setIsDark={(e) => setIsDark(e)} />
                        </div>
                    </div>
                    <div className="lg:w-1/3 w-full min-h-screen flex justify-start lg:pt-44 py-8 flex-col bg-slate-100 items-center">
                        <PrototypeMobile dark={isDark} choosenTheme={choosenTheme} titleProfile={titleProfile} descriptionProfile={descriptionProfile} linksValue={linksValue} />
                    </div>
                </section>
            </main>
        </>
    );
};

export default Home;
