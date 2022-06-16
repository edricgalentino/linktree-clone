import React, { useState, useEffect } from "react";
import Swal from "sweetalert2";

function Info({ index, showInfo, setShowInfo, linksValue, setLinksValue, array }) {
    const handleDelete = () => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!",
        }).then((result) => {
            if (result.value) {
                const newLinksValue = [...array];
                newLinksValue.splice(index, 1);
                setLinksValue(newLinksValue);
                setShowInfo(false);
                Swal.fire("Deleted!", "Your file has been deleted.", "success");
            }
        });
    };
    return (
        <div className={` ${showInfo ? "flex" : "hidden"} info bg-black w-40 text-white font-semibold py-2 absolute lg:ml-96 lg:left-72 left-52 bottom-0 rounded-md flex justify-start items-start`}>
            <ul className=" decoration-transparent w-full z-10 ">
                <span className=" absolute bg-black w-5 h-5 rotate-45 lg:-left-2 bottom-9 -z-10 -right-2"></span>
                <li className="hover:bg-white hover:text-black px-3 py-2 w-full text-start hover:cursor-pointer">Border</li>
                <li>
                    <button
                        onClick={() => {
                            handleDelete();
                        }}
                        className="hover:bg-white hover:text-black px-3 py-2 w-full text-start hover:cursor-pointer"
                    >
                        Delete
                    </button>
                </li>
            </ul>
        </div>
    );
}

export default Info;
