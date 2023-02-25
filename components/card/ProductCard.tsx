import React from "react";
import { Product } from "@/types";
import Image from "next/image";
import { Icon } from "@iconify/react";
import { useDispatch } from "react-redux";
import { addToBasket } from "@/redux/slices/basketSlice";

type Props = Product;

const max_rating = 5;
const min_rating = 1;

function getRandomNumber(min: number, max: number) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function getRandomBoolean() {
    return Math.random() < 0.5;
}

export default function ProductCard({
    id,
    title,
    price,
    description,
    category,
    image,
}: Props) {
    const dispatch = useDispatch();
    const [rating] = React.useState<number>(
        getRandomNumber(min_rating, max_rating)
    );
    const [hasPrime] = React.useState<Boolean>(getRandomBoolean());
    function addItemToBasket() {
        const product = {
            id,
            title,
            price,
            image,
        };
        dispatch(addToBasket(product));
    }

    return (
        <div className="relative flex flex-col itemscen bg-white z-30 p-8 h-full">
            <p className="absolute top-1 right-2 text-xs italic text-gray-400 leading-none">
                {category}
            </p>
            <div className="mx-auto">
                <Image
                    className="object-contain w-[200px] h-[200px]"
                    src={image}
                    width={200}
                    height={200}
                    alt={title}
                />
            </div>
            <h4 className="my-3">{title}</h4>
            <div className="flex">
                {Array(rating)
                    .fill("")
                    .map((_, i) => {
                        return (
                            <Icon
                                key={i}
                                className="text-yellow-500 text-lg"
                                icon="material-symbols:star"
                            />
                        );
                    })}
            </div>
            <p className="text-xs my-2 line-clamp-2">{description}</p>
            <div>{`$${price}`}</div>
            {hasPrime && (
                <div className="flex items-center gap-2">
                    <Image
                        className="object-cover w-12 h-8"
                        src="https://links.papareact.com/fdw"
                        width={100}
                        height={100}
                        alt=""
                    />
                    <p className="text-xs text-gray-500">
                        Free Next-day Delivery
                    </p>
                </div>
            )}
            <div className="flex flex-col pt-5 mt-auto">
                <button onClick={()=> addItemToBasket()} className="button">
                    Add to Basket
                </button>
            </div>
        </div>
    );
}
