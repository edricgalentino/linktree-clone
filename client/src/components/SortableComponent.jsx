import React, { useEffect, useState } from "react";
import { SortableContainer, SortableElement, arrayMove } from "react-sortable-hoc";
import { HiDotsVertical } from "react-icons/hi";
import { MdOutlineDragIndicator } from "react-icons/md";
import Info from "./Info";

const SortableItem = SortableElement(({ I, array, linksValue, setLinksValue }) => {
    const [showInfo, setShowInfo] = useState(false);

    return (
        <div className="content w-full py-3 hover:cursor-grab active:cursor-grabbing focus:cursor-grabbing drop-shadow-xl rounded-xl bg-white items-center flex justify-between">
            <span className="drag-button p-3">
                <MdOutlineDragIndicator size={"24px"} />
            </span>
            <div className="text-link">
                <form action="post" className="flex gap-3 justify-start items-start text-start">
                    <label>
                        Title
                        <input
                            value={linksValue.link.title === undefined ? "" : linksValue.link.title}
                            onChange={(e) => {
                                const newLinksValue = [...array];
                                newLinksValue[I].link.title = e.target.value;
                                setLinksValue(newLinksValue);
                            }}
                            placeholder="Title"
                            type="text"
                            className="form-input mt-1 bg-white p-1 text-black focus:border-black border-b-2 mb-2 border-white drop-shadow-lg outline-none w-full"
                        />
                    </label>
                    <label>
                        Link
                        <input
                            value={linksValue.link.link === undefined ? "" : linksValue.link.link}
                            onChange={(e) => {
                                const newLinksValue = [...array];
                                newLinksValue[I].link.link = e.target.value;
                                setLinksValue(newLinksValue);
                            }}
                            type="text"
                            className="form-input mt-1 bg-white p-1 text-black focus:border-black border-b-2 mb-2 border-white drop-shadow-lg outline-none w-full"
                        />
                    </label>
                </form>
            </div>
            <button onClick={() => setShowInfo(!showInfo)} className={` relative hover:bg-gray-200 transition-all p-3 mx-3 rounded-full drop-shadow-lg`}>
                <HiDotsVertical size={"20px"} onClick={() => setShowInfo(!showInfo)} />
            </button>
            <Info index={I} linksValue={linksValue} showInfo={showInfo} setShowInfo={(value) => setShowInfo(value)} setLinksValue={(newLinksValue) => setLinksValue(newLinksValue)} array={array} />
        </div>
    );
});
const SortableList = SortableContainer(({ linksValue, setLinksValue }) => {
    return (
        <div className="bg-slate-200 w-full min-h-screen flex flex-col gap-3 active:cursor-grabbing">
            {linksValue.map((value, index) => (
                <SortableItem key={`item-${index}`} I={index} index={index} array={linksValue} setLinksValue={(newLinksValue) => setLinksValue(newLinksValue)} linksValue={value} />
            ))}
        </div>
    );
});
function SortableComponent({ linksValue, setLinksValue }) {
    const onSortEnd = ({ oldIndex, newIndex }) => {
        setLinksValue(arrayMove(linksValue, oldIndex, newIndex));
    };
    return (
        <div>
            <SortableList linksValue={linksValue} setLinksValue={(newLinksValue) => setLinksValue(newLinksValue)} onSortEnd={onSortEnd} />
        </div>
    );
}

export default SortableComponent;
