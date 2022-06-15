import React from "react";
import SliderComponent from "./SliderComponent";
function Theme() {
    return (
        <>
            <h1 className=" text-lg text-left font-semibold">Available Themes</h1>
            <div className="content w-full h-96 drop-shadow-xl rounded-xl bg-red-200 items-start text-slate-700 flex flex-col gap-3 p-5 justify-start">
                <div className="free">
                    <h1 className=" text-lg text-left font-semibold">Free</h1>
                    <div className="slider w-96 m-auto">
                        <SliderComponent />
                    </div>
                </div>
                <div className="paid">
                    <h1 className=" text-lg text-left font-semibold">Paid</h1>
                </div>
            </div>
        </>
    );
}

export default Theme;
