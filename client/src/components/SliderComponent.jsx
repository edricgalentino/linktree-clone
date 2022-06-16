import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { AiFillCheckCircle } from "react-icons/ai";
import { GrFormNext, GrFormPrevious } from "react-icons/gr";

function SliderComponent({ dark, setChoosenTheme }) {
    function NextArrow(props) {
        const { onClick } = props;
        return <GrFormNext onClick={onClick} className="z-30 relative left-96 ml-48 bottom-28 hover:cursor-pointer" />;
    }

    function PrevArrow(props) {
        const { onClick } = props;
        return <GrFormPrevious onClick={onClick} className="z-30 relative right-6 top-28 hover:cursor-pointer" />;
    }
    let settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 4,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true,
                },
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2,
                },
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
        ],
    };
    const [data, setData] = React.useState([
        {
            bgBubble: "bg-emerald-400",
            isChoosen: true,
            textColor: "text-slate-700",
        },
        {
            bgBubble: "bg-blue-400",
            isChoosen: false,
            textColor: "text-slate-700",
        },
        {
            bgBubble: "bg-indigo-400",
            isChoosen: false,
            textColor: "text-slate-700",
        },
        {
            bgBubble: "bg-red-400",
            isChoosen: false,
            textColor: "text-slate-700",
        },
        {
            bgBubble: "bg-slate-400",
            isChoosen: false,
            textColor: "text-slate-700",
        },
        {
            bgBubble: "bg-amber-400",
            isChoosen: false,
            textColor: "text-slate-700",
        },
        {
            bgBubble: "bg-orange-400",
            isChoosen: false,
            textColor: "text-slate-700",
        },
        {
            bgBubble: "bg-fuchsia-400",
            isChoosen: false,
            textColor: "text-slate-700",
        },
        {
            bgBubble: "bg-pink-400",
            isChoosen: false,
            textColor: "text-slate-700",
        },
    ]);
    return (
        <>
            <Slider {...settings}>
                {data.map((item, index) => {
                    return (
                        <div
                            key={index}
                            onClick={() => {
                                setData(
                                    data.map((item, i) => {
                                        if (i === index) {
                                            return {
                                                bgBubble: item.bgBubble,
                                                isChoosen: true,
                                                textColor: "text-slate-700",
                                            };
                                        } else {
                                            return {
                                                bgBubble: item.bgBubble,
                                                isChoosen: false,
                                                textColor: "text-slate-700",
                                            };
                                        }
                                    })
                                );
                                setChoosenTheme(data[index]);
                            }}
                            className={`theme w-28 border-8 py-3 border-slate-100 h-52 relative transition-all rounded-2xl ${dark ? "bg-gray-800" : "bg-white"}`}
                        >
                            <section className="profile relative flex justify-center flex-col">
                                <div className="container w-1/4  bg-black  rounded-full mx-auto">
                                    <img className=" bg-slate-200 rounded-full" src="defaultPict.jpeg" alt="user" />
                                </div>
                            </section>
                            {item.isChoosen ? <AiFillCheckCircle className={` absolute text-emerald-400 w-6 h-6 top-1.5 right-1.5`} /> : ""}
                            <section className="main-content flex justify-center items-center flex-col w-full px-3 gap-2 my-7">
                                <div className={`bubble w-full h-3 ${item.bgBubble} rounded-lg`}>
                                    <p className={`text-xs ${item.textColor}`}>-----</p>
                                </div>
                                <div className={`bubble w-full h-3 ${item.bgBubble} rounded-lg`}>
                                    <p className={`text-xs ${item.textColor}`}>-----</p>
                                </div>
                                <div className={`bubble w-full h-3 ${item.bgBubble} rounded-lg`}>
                                    <p className={`text-xs ${item.textColor}`}>-----</p>
                                </div>
                            </section>
                            <footer>
                                <h1 className={`text-xs font-semibold ${dark ? "text-white" : "text-slate-700"}`}>myLinktree</h1>
                            </footer>
                        </div>
                    );
                })}
            </Slider>
        </>
    );
}

export default SliderComponent;
