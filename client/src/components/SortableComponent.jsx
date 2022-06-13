import React, { useEffect, useState } from "react";
import { SortableContainer, SortableElement, arrayMove } from "react-sortable-hoc";
import { HiDotsVertical } from "react-icons/hi";
import { MdOutlineDragIndicator } from "react-icons/md";

function SortableComponent() {
    const [linksValue, setLinksValue] = useState([
        {
            link: {
                title: "",
                link: "https://",
            },
        },
        {
            link: {
                title: "",
                link: "https://",
            },
        },
        {
            link: {
                title: "",
                link: "https://",
            },
        },
        {
            link: {
                title: "",
                link: "https://",
            },
        },
    ]);
    const SortableItem = SortableElement(({ I }) => {
        return (
            <div key={I} className="content w-full py-3 drop-shadow-xl rounded-xl bg-white items-center flex justify-between">
                <button className="drag-button handle p-3 cursor-grab active:cursor-grabbing">
                    <MdOutlineDragIndicator size={"24px"} />
                </button>
                <div className="text-link">
                    <form action="post" className="flex gap-3 justify-start items-start text-start">
                        <label>
                            Title
                            <input
                                key={I}
                                value={linksValue[I].link.title === undefined ? "" : linksValue[I].link.title}
                                onChange={(e) =>
                                    setLinksValue(
                                        linksValue.map((item, index) => {
                                            if (index === I) {
                                                return {
                                                    link: {
                                                        title: e.target.value,
                                                        link: linksValue[I].link.link,
                                                    },
                                                };
                                            }
                                            return item;
                                        })
                                    )
                                }
                                placeholder="Title"
                                type="text"
                                className="form-input mt-1 bg-white p-1 text-black focus:border-black border-b-2 mb-2 border-white drop-shadow-lg outline-none w-full"
                            />
                        </label>
                        <label>
                            Link
                            <input
                                key={I}
                                value={linksValue[I].link.link === undefined ? "" : linksValue[I].link.link}
                                onChange={(e) =>
                                    setLinksValue(
                                        linksValue.map((item, index) => {
                                            if (index === I) {
                                                return {
                                                    link: {
                                                        title: linksValue[I].link.title,
                                                        link: e.target.value,
                                                    },
                                                };
                                            }
                                            return item;
                                        })
                                    )
                                }
                                type="text"
                                className="form-input mt-1 bg-white p-1 text-black focus:border-black border-b-2 mb-2 border-white drop-shadow-lg outline-none w-full"
                            />
                        </label>
                    </form>
                </div>
                <button className="info hover:bg-gray-200 drop-shadow-lg p-3 mx-3 rounded-full">
                    <HiDotsVertical size={"20px"} />
                </button>
            </div>
        );
    });
    const SortableList = SortableContainer(({ items }) => {
        return (
            <div className="bg-slate-200 w-full min-h-screen flex flex-col gap-3">
                {items.map((value, index) => (
                    <SortableItem key={`item-${value}`} I={index} index={index} value={value} />
                ))}
            </div>
        );
    });
    const [items, setItems] = useState(["Item 1", "Item 2", "Item 3", "Item 4"]);
    const onSortEnd = ({ oldIndex, newIndex }) => {
        setItems(arrayMove(items, oldIndex, newIndex));
    };
    return (
        <div>
            <SortableList items={items} onSortEnd={onSortEnd} />
        </div>
    );
}

export default SortableComponent;
