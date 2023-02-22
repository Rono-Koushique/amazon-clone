import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Image from "next/image";
import { Icon } from "@iconify/react";

type Props = {};

const bannerImgs = [
    { url: "https://links.papareact.com/gi1" },
    { url: "https://links.papareact.com/6ff" },
    { url: "https://links.papareact.com/7ma" },
];

export default function Banner({}: Props) {
    return (
        <div className="relative">
            <div className="absolute bottom-0 w-full h-32 bg-gradient-to-t from-gray-100 to-transparent z-20" />
            <Carousel
                autoPlay={true}
                infiniteLoop={true}
                showStatus={false}
                showIndicators={false}
                showArrows={false}
                showThumbs={false}
                interval={5000}
                renderArrowPrev={(clickHandler, hasPrev) => {
                    return (
                        <button
                            className="absolute top-0 bottom-0 left-0 flex justify-center items-center 
                                    p-3 opacity-30 hover:opacity-100 cursor-pointer z-20"
                            onClick={clickHandler}
                        >
                            <Icon className="text-5xl" icon="bi:chevron-left" />
                        </button>
                    );
                }}
                renderArrowNext={(clickHandler, hasNext) => {
                    return (
                        <button
                            className="absolute top-0 bottom-0 right-0 flex justify-center items-center 
                                    p-3 opacity-30 hover:opacity-100 cursor-pointer z-20"
                            onClick={clickHandler}
                        >
                            <Icon
                                className="text-5xl"
                                icon="bi:chevron-right"
                            />
                        </button>
                    );
                }}
            >
                {bannerImgs.map((data, idx) => {
                    return (
                        <div
                            key={`banner-${idx}`}
                            className="w-full h-fit relative"
                        >
                            <Image
                                className="w-full h-[560px] object-cover"
                                src={data.url}
                                width={1000}
                                height={560}
                                priority={false}
                                alt=""
                            />
                        </div>
                    );
                })}
            </Carousel>
        </div>
    );
}
