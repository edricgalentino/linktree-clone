import React, { useEffect, useState } from "react";
import { HiDotsVertical } from "react-icons/hi";
import { MdOutlineDragIndicator } from "react-icons/md";
// drag react
import Draggable from "react-draggable";

function DragComponent() {
    const [link, setLink] = useState("https://");
    return (
        <Draggable axis="y" handle=".handle" defaultPosition={{ x: 0, y: 0 }} scale={1}>
            <div className="content w-full py-3 drop-shadow-xl rounded-xl bg-white items-center flex justify-between">
                <button className="drag-button handle p-3 cursor-grab active:cursor-grabbing">
                    <MdOutlineDragIndicator size={"24px"} />
                </button>
                <div className="text-link">
                    <form action="post" className="flex gap-3 justify-start items-start text-start">
                        <label>
                            Title
                            <input placeholder="Title" type="text" className="form-input mt-1 bg-white p-1 text-black focus:border-black border-b-2 mb-2 border-white drop-shadow-lg outline-none w-full" />
                        </label>
                        <label>
                            Link
                            <input value={link} onChange={(e) => setLink(e.target.value)} type="text" className="form-input mt-1 bg-white p-1 text-black focus:border-black border-b-2 mb-2 border-white drop-shadow-lg outline-none w-full" />
                        </label>
                    </form>
                </div>
                <button className="info hover:bg-gray-200 drop-shadow-lg p-3 mx-3 rounded-full">
                    <HiDotsVertical size={"20px"} />
                </button>
            </div>
        </Draggable>
    );
}

export default DragComponent;
