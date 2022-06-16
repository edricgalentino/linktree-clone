import React, { useState } from "react";

function Appearrance({ setTitleProfile, setDescriptionProfile }) {
    const [letter, setLetter] = useState(0);
    return (
        <>
            <h1 className=" text-lg text-left font-semibold">Profile Appearrance</h1>
            <div className="content w-full drop-shadow-xl rounded-xl bg-white items-start text-slate-700 flex justify-center">
                <form action="post" className="flex flex-col justify-start text-start items-start w-full p-6 gap-5">
                    <label className="w-full">
                        <p className=" text-lg mb-1 font-semibold">Avatar / Picture</p>
                        <input type="file" name="" id="" />
                    </label>{" "}
                    <label className="w-full">
                        <p className=" text-lg mb-1 font-semibold">Title</p>
                        <input
                            type="text"
                            placeholder="@username / Your name"
                            onChange={(e) => {
                                setTitleProfile(e.target.value);
                            }}
                            className="form-input text-lg mt-1 bg-white p-2 text-slate-700 border-b-2 mb-2 border-white drop-shadow-lg outline-none w-full"
                        />
                    </label>
                    <label className="w-full">
                        <p className=" text-lg mb-1 font-semibold">Description</p>
                        <input
                            type="text"
                            placeholder="Tell us about yourself"
                            onChange={(e) => {
                                setDescriptionProfile(e.target.value);
                                setLetter(e.target.value.length);
                            }}
                            maxLength="50"
                            className="form-input text-lg mt-1 bg-white p-2 text-slate-700 border-b-2 mb-2 border-white drop-shadow-lg outline-none w-full"
                        />
                    </label>
                    <span className="flex justify-end items-end text-end">{letter} / 50</span>
                </form>
            </div>
        </>
    );
}

export default Appearrance;
