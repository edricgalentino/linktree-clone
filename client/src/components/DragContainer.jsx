import React, { useEffect, useState } from "react";
import { HiDotsVertical } from "react-icons/hi";
import { MdOutlineDragIndicator } from "react-icons/md";
// drag react
import Draggable from "react-draggable";
import DragComponent from "./DragComponent";

function DragContainer({ component }) {
    const [link, setLink] = useState("https://");
    return (
        <div className="bg-slate-200 w-full min-h-screen flex flex-col gap-3">
            <DragComponent />
            <DragComponent />
        </div>
    );
}

export default DragContainer;
