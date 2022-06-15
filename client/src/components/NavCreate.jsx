import React from "react";
import { BsFillPersonFill } from "react-icons/bs";
import { GrAdd } from "react-icons/gr";
import { IoMdColorPalette } from "react-icons/io";
import { AiFillFormatPainter } from "react-icons/ai";

function NavCreate() {
    return (
        <nav className=" lg:w-20 lg:h-80 w-full h-20 rounded-full flex lg:flex-col lg:gap-3 z-50 fixed lg:left-6 lg:top-24 lg:mt-0 mt-96 top-80 lg:justify-center justify-evenly items-center p-5 drop-shadow-lg bg-white">
            <button className="icon hover:bg-emerald-400 relative lg:hover:ml-2 transition-all p-3 rounded-full drop-shadow-lg">
                <BsFillPersonFill size={"34px"} />
            </button>
            <button className="icon hover:bg-emerald-400 relative lg:hover:ml-2 transition-all p-3 rounded-full drop-shadow-lg">
                <AiFillFormatPainter size={"34px"} />
            </button>
            <button className="icon hover:bg-emerald-400 relative lg:hover:ml-2 transition-all p-3 rounded-full drop-shadow-lg">
                <IoMdColorPalette size={"34px"} />
            </button>
            <button className="icon bg-emerald-400 relative lg:hover:ml-2 transition-all p-3 rounded-full  hover:drop-shadow-xl" onClick={() => {}}>
                <GrAdd size={"34px"} color="white" />
            </button>
        </nav>
    );
}

export default NavCreate;
