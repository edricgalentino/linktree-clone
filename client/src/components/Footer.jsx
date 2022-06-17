import React from "react";
import { BsLinkedin, BsInstagram, BsGithub, BsTwitter } from "react-icons/bs";
import { AiOutlineGlobal } from "react-icons/ai";

function Link({ className, text, href }) {
    return (
        <a className={className} target="_self" href={href} rel="noreferrer">
            {text}
        </a>
    );
}

function Footer() {
    return (
        <React.Fragment>
            <footer className="footer bg-slate-100">
                <div className="font-poppins footer">
                    <footer className="pt-20 mx-auto w-full">
                        <div className="grid gap-16 lg:mx-12 text-center lg:text-left lg:grid-cols-12">
                            <div className="md:col-span-12 lg:col-span-6">
                                <div className="flex text-center justify-center lg:justify-start p-0">
                                    <Link className="text-4xl md:text-5xl animate-pulse font-poppins font-semibold text-emerald-400" text="myLinktree" href="/" />
                                </div>
                                <p className="text-base font-normal mt-8 my-4 text-black">Creator's Social Media :</p>
                                <div className="flex flex-row justify-center lg:justify-start items-center gap-4">
                                    <Link href="https://www.linkedin.com/in/edricgalentino" text={<BsLinkedin size={"32px"} />} className=" text-slate-800  hover:text-emerald-600" />
                                    <Link href="https://www.instagram.com/edricgalentino" text={<BsInstagram size={"32px"} />} className=" text-slate-800   hover:text-emerald-600" />
                                    <Link href="https://www.github.com/edricgalentino" text={<BsGithub size={"32px"} />} className=" text-slate-800   hover:text-emerald-600" />
                                    <Link href="https://www.twitter.com/edricgalentino" text={<BsTwitter size={"32px"} />} className=" text-slate-800   hover:text-emerald-600" />
                                    <Link href="https://edricgalentino.github.io" text={<AiOutlineGlobal size={"32px"} />} className=" text-slate-800   hover:text-emerald-600" />
                                </div>
                            </div>
                            <div className="md:col-span-4 lg:col-span-2">
                                <div className="mb-5 text-base font-bold text-emerald-400">Features</div>
                                <div className="mb-3">
                                    <Link text="Secure" className="text-base font-normal text-slate-800" />
                                </div>
                                <div className="mb-3">
                                    <Link text="Fast" className="text-base font-normal text-slate-800" />
                                </div>
                                <div className="mb-3">
                                    <Link text="Easy" className="text-base font-normal text-slate-800" />
                                </div>
                            </div>
                            <div className="md:col-span-4 lg:col-span-2">
                                <div className="mb-5 text-base font-bold text-emerald-400">About Creator</div>
                                <div className="mb-3">
                                    <Link href="mailto:erdrikpertama@gmail.com" text="Email" className="text-base font-normal text-slate-800 hover:underline" />
                                </div>
                                <div className="mb-3">
                                    <Link href="https://edricgalentino.github.io" text="Website" className="text-base font-normal text-slate-800 hover:underline" />
                                </div>
                                <div className="mb-3">
                                    <Link href="mailto:erdrikpertama@gmail.com" text="Collaboration" className="text-base font-normal text-slate-800 hover:underline" />
                                </div>
                            </div>
                            <div className="md:col-span-4 lg:col-span-2">
                                <div className="mb-5 text-base font-bold text-emerald-400">Help</div>
                                <div className="mb-3">
                                    <Link href="/help" text="Feedback" className="text-base font-normal text-slate-800 hover:underline" />
                                </div>
                                <div className="mb-3">
                                    <Link href="/help" text="Report Problem" className="text-base font-normal text-slate-800 hover:underline" />
                                </div>
                            </div>
                        </div>
                    </footer>
                    <div className="mx-auto mt-4 max-w-screen-2xl py-9">
                        <p className="text-base font-normal text-center text-slate-800">
                            Personal Project by{" "}
                            <a className="hover:underline" href="https://www.linkedin.com/in/edricgalentino">
                                Edric Galentino
                            </a>
                        </p>
                        <p className="text-base font-normal text-center text-slate-800"> 2022 myLinktree | All rights reserved</p>
                    </div>
                </div>
            </footer>
        </React.Fragment>
    );
}

export default Footer;
