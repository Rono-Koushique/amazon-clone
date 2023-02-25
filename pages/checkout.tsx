import React from "react";
import Header from "@/components/navbar/Header";
import Head from "next/head";
import Image from "next/image";

type Props = {};

export default function checkout({}: Props) {
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
                <div className="max-w-screen-2xl w-full mx-auto p-6 gap-6 flex flex-col lg:flex-row">
                    {/* left */}
                    <div className="flex flex-col gap-6">
                        <div className="rounded-lg overflow-hidden">
                            <Image
                                className="w-[1020px] object-contain"
                                src="https://links.papareact.com/ikj"
                                width={1020}
                                height={250}
                                alt=""
                            />
                        </div>
                        <div className="bg-white rounded-lg overflow-hidden p-5 flex flex-col">
                            <h1 className="text-3xl font-semibold text-gray-700 border-b pb-4">Your Basket is empty</h1>
                        </div>
                    </div>

                    {/* right */}
                    <div></div>
                </div>
            </main>
        </>
    );
}