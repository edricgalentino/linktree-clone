import React from "react";
import { useState, useEffect } from "react";
import { FaBars } from "react-icons/fa";
import { GrClose } from "react-icons/gr";
function Link({ className, text, href }) {
    return (
        <a className={className} href={href}>
            {text}
        </a>
    );
}

function Navbar() {
    const [isNavbarMobileOpen, setIsNavbarMobileOpen] = useState(false);
    const [mobile, setMobile] = useState(false);

    useEffect(() => {}, []);

    return (
        <React.Fragment>
            <nav className="nav">
                <div className="fixed w-full bg-emerald-300 font-poppins py-5 px-6 lg:px-12 z-30 flex justify-between items-center">
                    <div className="title">
                        <h1 className="text-xl font-semibold">myLinktree</h1>
                    </div>
                    <div className="nav-links hidden lg:flex text-center gap-3 transition-all">
                        <Link className="nav-link bg-white bg-opacity-0 hover:bg-opacity-100 transition-all rounded-full font-semibold drop-shadow-xl px-6 py-2" text="Home" href="/" />
                        <Link className="nav-link bg-white bg-opacity-0 hover:bg-opacity-100 transition-all rounded-full font-semibold drop-shadow-xl px-6 py-2" text="About" href="/about" />
                        <Link className="nav-link bg-white bg-opacity-0 hover:bg-opacity-100 transition-all rounded-full font-semibold drop-shadow-xl px-6 py-2" text="Contact" href="/contact" />
                        <Link className="nav-link bg-white bg-opacity-100 transition-all rounded-full font-semibold hover:drop-shadow-xl px-6 py-2" text="Get Started" href="/create" />
                    </div>
                    <div className="flex items-center lg:hidden">
                        <button onClick={() => setIsNavbarMobileOpen(true)}>
                            <FaBars size={"24px"} />
                        </button>
                    </div>
                </div>
                <div className={`${isNavbarMobileOpen ? "  transition-all" : " ml-96 left-32 opacity-0 z-0 transition-all"} lg:hidden z-50 transition-all mobile-nav fixed w-full h-screen bg-emerald-300 font-poppins py-5 px-6  `}>
                    <div className="flex justify-between items-center">
                        <div className="title">
                            <h1 className="text-xl font-semibold">myLinktree</h1>
                        </div>
                        <div className="flex items-start">
                            <button onClick={() => setIsNavbarMobileOpen(false)}>
                                <GrClose size={"24px"} />
                            </button>
                        </div>
                    </div>
                    <div className="nav-links flex flex-col text-start w-full h-5/6 gap-4 mt-10 transition-all">
                        <Link className="nav-link hover:bg-white rounded-full font-semibold drop-shadow-xl p-3 pl-6 " text="Home" href="/" />
                        <Link className="nav-link hover:bg-white rounded-full font-semibold drop-shadow-xl p-3 pl-6 " text="About" href="/about" />
                        <Link className="nav-link hover:bg-white rounded-full font-semibold drop-shadow-xl p-3 pl-6 " text="Contact" href="/contact" />
                        <Link className="nav-link bg-white rounded-full font-semibold hover:drop-shadow-xl p-3 pl-6 " text="Get Started" href="/create" />
                        {/* <div className="auth flex justify-around gap-4">
                            <Link className="nav-link text-center hover:bg-white w-full border-black border-2 hover:border-white rounded-full font-semibold drop-shadow-xl p-3 " text="Login" href="/contact" />
                            <Link className="nav-link text-center bg-white w-full  border-2 rounded-full font-semibold hover:drop-shadow-xl  hover:bottom-2  p-3 " text="Sign In" href="/contact" />
                        </div> */}
                    </div>
                    <div className="brand">
                        <div className="title">
                            <h1 className="text-xl font-semibold">myLinktree</h1>
                        </div>
                    </div>
                </div>
            </nav>
        </React.Fragment>
    );
}

export default Navbar;
