import React, { useRef } from "react";
import Header from "@/components/navbar/Header";
import Head from "next/head";
import Image from "next/image";
import { useAppSelector } from "@/redux/app/store";
import CkoProductCard from "@/components/card/CkoProductCard";
import { signIn, signOut, useSession } from "next-auth/react";

type Props = {};

export default function Checkout({}: Props) {
    const { data: session, status } = useSession();
    const { items, itemsCount, totalPrice } = useAppSelector(
        (state) => state.basket
    );

    return (
        <>
            <Head>
                <title>Amazon 2.0 | Checkout</title>
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1"
                />
                <meta
                    name="description"
                    content="Enter your shipping and payment information to complete your purchase on My E-commerce Website."
                />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <main className="min-h-screen flex flex-col w-full bg-gray-100">
                <Header />
                <div className="max-w-screen-2xl w-full mx-auto px-6 my-4 gap-4 flex flex-col lg:flex-row">
                    {/* left */}
                    <div className="flex flex-col gap-4 w-[1020px]">
                        <div className="rounded overflow-hidden">
                            <Image
                                className="w-[1020px] object-contain"
                                src="https://links.papareact.com/ikj"
                                width={1020}
                                height={250}
                                alt=""
                            />
                        </div>
                        <div className="bg-white rounded overflow-hidden p-5 flex flex-col">
                            <h1 className="text-3xl font-semibold text-gray-700 border-b pb-4">
                                {itemsCount === 0
                                    ? "Your Basket is empty"
                                    : "Shopping Basket"}
                            </h1>
                            <div className="flex flex-col">
                                {items.map((item, i) => {
                                    return (
                                        <CkoProductCard
                                            key={item.id}
                                            item={item}
                                        />
                                    );
                                })}
                            </div>
                        </div>
                    </div>

                    {/* right */}
                    <div className="flex-grow">
                        <div className="bg-white rounded overflow-hidden p-5 flex flex-col gap-2">
                            {itemsCount > 0 && (
                                <div className="flex justify-between">
                                    <p className="">
                                        Subtotal ({itemsCount} items):
                                    </p>
                                    <p className="texxt-lg font-bold">{`$${totalPrice.toFixed(
                                        2
                                    )}`}</p>
                                </div>
                            )}
                            <button
                                disabled={!session}
                                className={`button ${
                                    !session
                                        ? "from-gray-300 to-gray-500 border-gray-200 text-gray-300"
                                        : ""
                                }`}
                            >
                                {!session
                                    ? "Sign in to checkout"
                                    : "Proceed to checkout"}
                            </button>
                        </div>
                    </div>
                </div>
            </main>
        </>
    );
}
