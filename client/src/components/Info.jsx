import React, { useState, useEffect } from "react";
import Swal from "sweetalert2";
import { BsTrash } from "react-icons/bs";
import { RiCheckboxBlankLine } from "react-icons/ri";
import axios from "axios";
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
                axios
                    .post("http://localhost:5000/edric/delete-link", {
                        newLinksValue,
                    })
                    .then((res) => {
                        setLinksValue(res.data.links);
                        Swal.fire("Deleted!", "Your file has been deleted.", "success");
                    })
                    .catch((err) => {
                        console.log(err);
                        Swal.fire("Failed!", "Oops, looks like there's an error.", "error");
                    });
                setShowInfo(false);
            }
        });
    };
    return (
        <div className={` ${showInfo ? "flex" : "hidden"} info bg-black w-48 text-white font-semibold py-2 absolute lg:ml-96 lg:left-72 left-48 bottom-0 rounded-md flex justify-start items-start`}>
            <ul className=" decoration-transparent w-full z-10 ">
                <span className=" absolute bg-black w-5 h-5 rotate-45 lg:-left-2 bottom-9 -z-10 -right-2"></span>
                <li>
                    <button className="hover:bg-white flex items-center hover:text-black px-3 py-2 w-full text-start hover:cursor-pointer">
                        <RiCheckboxBlankLine size={"20px"} className="mr-2" />
                        Rounded Border
                    </button>
                </li>
                <li>
                    <button
                        onClick={() => {
                            handleDelete();
                        }}
                        className="hover:bg-white flex items-center hover:text-black px-3 py-2 w-full text-start hover:cursor-pointer"
                    >
                        <BsTrash size={"20px"} className="mr-2" />
                        Delete
                    </button>
                </li>
            </ul>
        </div>
    );
}

export default Info;
