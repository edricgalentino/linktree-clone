import React, { useEffect, useState } from "react";
import { SortableContainer, SortableElement, arrayMove } from "react-sortable-hoc";
import { HiDotsVertical } from "react-icons/hi";
import { MdOutlineDragIndicator } from "react-icons/md";

const SortableItem = SortableElement(({ I, array, linksValue, setLinksValue, showInfo, setShowInfo }) => {
    console.log(showInfo);
    return (
        <div className="content w-full py-3 drop-shadow-xl rounded-xl bg-white items-center flex justify-between">
            <button className="drag-button handle p-3 hover:cursor-default">
                <MdOutlineDragIndicator size={"24px"} />
            </button>
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
            <button
                className="info hover:bg-gray-200 drop-shadow-lg p-3 mx-3 z-20 rounded-full"
                onClick={() => {
                    setShowInfo(!showInfo);
                }}
            >
                <HiDotsVertical size={"20px"} />
            </button>
            <div className={` ${showInfo ? "flex" : "hidden"} info bg-black w-40 text-white font-semibold py-2 absolute ml-96 left-72 bottom-0 rounded-md flex justify-start items-start`}>
                <ul className=" decoration-transparent w-full ">
                    <li className="hover:bg-white hover:text-black px-3 py-2 w-full text-start hover:cursor-pointer">Border</li>
                    <li
                        className="hover:bg-white hover:text-black px-3 py-2 w-full text-start hover:cursor-pointer"
                        onClick={() => {
                            const newLinksValue = [...array];
                            newLinksValue.splice(I, 1);
                            setLinksValue(newLinksValue);
                        }}
                    >
                        Delete
                    </li>
                </ul>
            </div>
        </div>
    );
});
const SortableList = SortableContainer(({ linksValue, setLinksValue, showInfo, setShowInfo }) => {
    return (
        <div className="bg-slate-200 w-full min-h-screen flex flex-col gap-3">
            {linksValue.map((value, index) => (
                <SortableItem
                    key={`item-${index}`}
                    I={index}
                    index={index}
                    showInfo={showInfo}
                    setShowInfo={(info) => setShowInfo(info)}
                    array={linksValue}
                    setLinksValue={(newLinksValue) => setLinksValue(newLinksValue)}
                    linksValue={value}
                />
            ))}
        </div>
    );
});
function SortableComponent({ linksValue, setLinksValue, showInfo, setShowInfo }) {
    const onSortEnd = ({ oldIndex, newIndex }) => {
        setLinksValue(arrayMove(linksValue, oldIndex, newIndex));
    };
    return (
        <div>
            <SortableList linksValue={linksValue} showInfo={showInfo} setShowInfo={(info) => setShowInfo(info)} setLinksValue={(newLinksValue) => setLinksValue(newLinksValue)} onSortEnd={onSortEnd} />
        </div>
    );
}

export default SortableComponent;
