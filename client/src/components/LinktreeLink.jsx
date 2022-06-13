import React from "react";

function LinktreeLink({ username }) {
    return (
        <div className="w-full h-14 flex justify-center bg-white drop-shadow-xl rounded-xl lg:mt-20 mt-16 items-center">
            <h1 className=" lg:text-lg text-sm">
                Your linktree's link :{" "}
                <a href={`https://mylinktree.com/${username ? username : "edric"}`} className="underline">
                    {`https://mylinktree.com/${username ? username : "edric"}`}
                </a>
            </h1>
        </div>
    );
}

export default LinktreeLink;
