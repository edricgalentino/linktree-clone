import React from "react";
import SliderComponent from "./SliderComponent";
import { BsFillMoonStarsFill, BsSun } from "react-icons/bs";
function Theme({ setChoosenTheme, isDark, setIsDark }) {
    return (
        <>
            <h1 className=" text-lg text-left font-semibold">Available Themes</h1>
            <div className="content w-full drop-shadow-xl rounded-xl bg-slate-100 items-center text-slate-700 flex flex-col gap-3 p-5 py-6 justify-start">
                <div className="free flex justify-start items-start gap-4 flex-col">
                    <div className="flex w-full gap-3 items-center justify-between">
                        <span className=" text-lg text-left font-semibold">Free</span>
                        <span
                            className=" text-lg text-left flex items-center cursor-pointer font-semibold"
                            onClick={() => {
                                setIsDark(!isDark);
                            }}
                        >
                            Mode : {!isDark ? <BsSun className="ml-3" /> : <BsFillMoonStarsFill className="ml-3" />}
                        </span>
                    </div>
                    <div className="slider mb-8" style={{ maxWidth: "36rem" }}>
                        <SliderComponent dark={isDark} setChoosenTheme={(e) => setChoosenTheme(e)} />
                    </div>
                </div>
                <div className="paid flex justify-start items-start gap-4 flex-col">
                    <div className="flex w-full gap-3 items-center justify-between">
                        <span className=" text-lg text-left font-semibold">Paid</span>
                        <span
                            className=" text-lg text-left flex items-center cursor-pointer font-semibold"
                            onClick={() => {
                                setIsDark(!isDark);
                            }}
                        >
                            Mode : {!isDark ? <BsSun className="ml-3" /> : <BsFillMoonStarsFill className="ml-3" />}
                        </span>
                    </div>
                    <div className="slider mb-8" style={{ maxWidth: "36rem" }}>
                        <SliderComponent dark={isDark} setChoosenTheme={(e) => setChoosenTheme(e)} />
                    </div>
                </div>
            </div>
        </>
    );
}

export default Theme;
