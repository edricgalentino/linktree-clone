import React, { useEffect, useState } from "react";
// component
import NavCreate from "../components/NavCreate";
import LinktreeLink from "../components/LinktreeLink";
import DragContainer from "../components/DragContainer";
import SortableComponent from "../components/SortableComponent";

const Home = () => {
    return (
        <React.Fragment>
            <main className="flex justify-end">
                <NavCreate />
                <section className="editor lg:w-11/12 w-full bg-slate-200 flex lg:flex-row flex-col justify-around">
                    <div className="draggable lg:w-2/3 w-full lg:border-r-2 lg:border-b-0 border-b-2 border-black min-h-screen flex justify-center bg-slate-200 items-center">
                        <div className="container lg:w-2/3 w-11/12 min-h-screen bg-slate-200 flex flex-col gap-4 lg:pb-12 pb-10">
                            <LinktreeLink />
                            <SortableComponent />
                        </div>
                    </div>
                    <div className="lg:w-1/3 w-full min-h-screen flex justify-center py-7 flex-col bg-slate-200 items-center">
                        <div className="resizable w-72 bg-slate-200 font-poppins h-120 overflow-y-auto flex py-7 flex-col justify-between gap-4 items-center border-8 rounded-3xl border-black">
                            <section class="profile relative flex justify-center flex-col">
                                <div class="container w-1/3  bg-black border-4 border-black rounded-full mx-auto">
                                    <img class=" bg-slate-200 rounded-full" src="profile.png" alt="user" />
                                </div>
                                <div class="name mt-3">
                                    <h5 className="text-lg font-semibold">Edric Galentino</h5>
                                </div>
                                <div class="desc">
                                    <p className="text-sm">Front-end Developer</p>
                                </div>
                            </section>
                            <section class="main-content flex justify-center items-center flex-col w-52 gap-3 my-7">
                                <div class=" bg-white w-full rounded-full p-1 relative hover:ml-2 hover:drop-shadow-xl transition-all">
                                    <i class="fas fa-globe"></i>
                                    <a target="_blank" href="https://edricgalentino.github.io" rel="noreferrer">
                                        <h6 className="text-sm">Portofolio</h6>
                                    </a>
                                </div>
                                <div class=" bg-white w-full rounded-full p-1 relative hover:ml-2 hover:drop-shadow-xl transition-all">
                                    <i class="fab fa-linkedin"></i>
                                    <a target="_blank" href="https://linkedin.com/in/edricgalentino" rel="noreferrer">
                                        <h6 className="text-sm">LinkedIn</h6>
                                    </a>
                                </div>
                                <div class=" bg-white w-full rounded-full p-1 relative hover:ml-2 hover:drop-shadow-xl transition-all">
                                    <i class="fab fa-github"></i>
                                    <a target="_blank" href="https://github.com/edricgalentino" rel="noreferrer">
                                        <h6 className="text-sm">Github</h6>
                                    </a>
                                </div>
                                <div class=" bg-white w-full rounded-full p-1 relative hover:ml-2 hover:drop-shadow-xl transition-all">
                                    <i class="fab fa-instagram"></i>
                                    <a target="_blank" href="https://instagram.com/edricgalentino" rel="noreferrer">
                                        <h6 className="text-sm">Instagram</h6>
                                    </a>
                                </div>
                                <div class=" bg-white w-full rounded-full p-1 relative hover:ml-2 hover:drop-shadow-xl transition-all">
                                    <i class="fab fa-twitter"></i>
                                    <a target="_blank" href="https://twitter.com/edricgalentino" rel="noreferrer">
                                        <h6 className="text-sm">Twitter</h6>
                                    </a>
                                </div>
                                <div class=" bg-white w-full rounded-full p-1 relative hover:ml-2 hover:drop-shadow-xl transition-all">
                                    <i class="fas fa-coffee"></i>
                                    <a target="_blank" href="https://ko-fi.com/edricgalentino" rel="noreferrer">
                                        <h6 className="text-sm">Buy me a coffee!</h6>
                                    </a>
                                </div>
                            </section>
                            <footer>
                                <h1 className="text-sm font-semibold">myLinktree</h1>
                            </footer>
                        </div>
                    </div>
                </section>
            </main>
        </React.Fragment>
    );
};

export default Home;
