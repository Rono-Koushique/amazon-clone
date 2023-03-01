import React from "react";
import { BasketProduct } from "@/types";
import Image from "next/image";
import { Icon } from "@iconify/react";
import { useAppDispatch } from "@/redux/app/store";
import {
    addToBasket,
    removeFromBasket,
    removeCompletelyFromBasket,
} from "@/redux/slices/basketSlice";

type Props = {
    item: BasketProduct;
};

export default function CkoProductCard({ item }: Props) {
    const { id, title, image, price, quantity, rating, description, hasPrime } =
        item;
    const dispatch = useAppDispatch();
    return (
        <div className="grid grid-cols-5 w-full py-7 border-b">
            <Image
                className="object-contain w-[200px] h-[200px] bg-white"
                src={image}
                width={200}
                height={200}
                alt={title}
            />
            <div className="col-span-3 mx-5 flex flex-col gap-2 py-2 px-2">
                <p className="text-xl text-slate-700 font-bold leading-tight">
                    {title}
                </p>
                <div className="flex items-center">
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
                    {Array(5 - rating)
                        .fill("")
                        .map((_, i) => {
                            return (
                                <Icon
                                    key={i}
                                    className="text-yellow-500 text-lg"
                                    icon="material-symbols:star-outline"
                                />
                            );
                        })}
                </div>
                <p className="text-xs line-clamp-3 leading-relaxed">{description}</p>
                {hasPrime && (
                    <div className="flex items-center gap-2">
                        <Image
                            className="object-cover w-12 h-6"
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
                <div className="flex items-center gap-1 mt-2">
                    <div className="mr-2">{`Price: $${price}`}</div>
                    <input
                        value={quantity}
                        readOnly={true}
                        className="w-7 h-7 text-center border border-gray-300 rounded-sm leading-none text-sm"
                    />
                    <button
                        onClick={() => {
                            dispatch(addToBasket(item));
                        }}
                        className="bg-green-500 leading-none w-7 h-7 rounded-sm flex items-center justify-center
                                text-gray-900 font-semibold hover:bg-green-600 active:bg-green-400 
                                transition duration-150 ease-in-out"
                    >
                        <Icon
                            className="text-white text-lg"
                            icon="tabler:chevron-up"
                        />
                    </button>
                    <button
                        onClick={() => {
                            dispatch(removeFromBasket(item));
                        }}
                        className="bg-yellow-500 leading-none w-7 h-7 rounded-sm flex items-center justify-center
                                text-gray-900 font-semibold hover:bg-yellow-600 active:bg-yellow-400 
                                transition duration-150 ease-in-out"
                    >
                        <Icon
                            className="text-white text-lg"
                            icon="tabler:chevron-down"
                        />
                    </button>
                    <button
                        onClick={() => {
                            dispatch(removeCompletelyFromBasket(item));
                        }}
                        className="bg-red-500 leading-none w-7 h-7 rounded-sm flex items-center justify-center
                                text-gray-900 font-semibold hover:bg-red-600 active:bg-red-400 
                                transition duration-150 ease-in-out"
                    >
                        <Icon className="text-white text-lg" icon="mdi:bin" />
                    </button>
                </div>
            </div>
            <div className="justify-self-end text-red-700 text-lg font-bold py-2 px-2">{`$${
                parseFloat(price) * quantity
            }`}</div>
        </div>
    );
}
