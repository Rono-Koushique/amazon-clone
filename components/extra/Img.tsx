import React from "react";
import Image, { StaticImageData } from "next/image";

type Props = {
    src: string | StaticImageData;
    alt?: string;
    priority?: boolean;
    className?: string;
};

export default function Img({ src, alt="", priority = false, className="" }: Props) {
    return (
        <div className={`${className} img-container`}>
            <Image
                className="img"
                src={src}
                width={1000}
                height={600}
                priority={priority}
                alt={alt}
            />
        </div>
    );
}
