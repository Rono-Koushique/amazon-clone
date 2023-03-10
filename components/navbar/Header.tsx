import React from "react";
import BrandLogo from "public/assets/image/brand-logo.png";
import { Icon } from "@iconify/react";
import NavItem from "../button/NavItem";
import Image from "next/image";
import { signIn, signOut, useSession } from "next-auth/react";
import { useRouter } from "next/router";

import { useAppSelector } from "@/redux/app/store";

type Props = {};

export default function Header({}: Props) {
    const router = useRouter();
    const { data: session, status } = useSession();
    const items = useAppSelector((state) => state.basket.items);
    const itemsCount = items
        .map((item) => item.quantity)
        .reduce((a, b) => a + b, 0);

    const firstname = session?.user?.name?.split(" ")[0];
    const lastname = session?.user?.name?.split(" ")[1];

    return (
        <header className="sticky top-0 left-0 z-50">
            {/* top nav */}
            <div className="flex items-center bg-slate-900 px-2 py-1 h-[3.8rem]">
                {/* brand logo */}
                <div className="navbar-link" onClick={() => router.push("/")}>
                    <div className="w-24 img-container">
                        <Image
                            className="img"
                            src={BrandLogo}
                            height={1000}
                            width={600}
                            alt=""
                        />
                    </div>
                </div>

                {/* search box */}
                <form className="bg-white rounded-md flex overflow-hidden flex-grow h-fit mx-4">
                    <input
                        className="p-2 px-3 w-full outline-none"
                        placeholder="Search Amazon 2.0"
                        type="text"
                    />
                    <button
                        className="flex items-center justify-center w-11 bg-orange-300 cursor-pointer 
                                    hover:bg-orange-400/80 transition duration-300 ease-in-out"
                    >
                        <Icon
                            className="text-3xl text-slate-900/80"
                            icon="material-symbols:search"
                        />
                    </button>
                </form>

                {/* account */}
                <div className="navbar-link">
                    <div
                        onClick={(e) => {
                            e.preventDefault();
                            !session ? signIn() : signOut();
                        }}
                        className="text-white flex flex-col gap-1"
                    >
                        <p className="text-xs leading-none">
                            {session
                                ? `Hello, ${firstname} ${
                                      lastname && lastname[0]
                                  }.`
                                : "Sign In"}
                        </p>
                        <p className="font-semibold leading-none">
                            Account & Lists
                        </p>
                    </div>
                </div>

                {/* orders */}
                <div className="navbar-link">
                    <div className="text-white flex flex-col gap-1">
                        <p className="text-xs leading-none">Returns</p>
                        <p className="font-semibold leading-none">& orders</p>
                    </div>
                </div>

                {/* cart */}
                <div
                    className="navbar-link"
                    onClick={() => router.push("/checkout")}
                >
                    <div className="text-white flex items-end gap-1">
                        <div className="relative">
                            <div
                                className="absolute bg-yellow-500 h-5 text-sm aspect-square leading-none 
                                        flex items-center justify-center rounded-full font-semibold right-0"
                            >
                                {itemsCount}
                            </div>
                            <Icon
                                className="text-4xl leading-none"
                                icon="material-symbols:garden-cart-outline"
                            />
                        </div>
                        <p className="font-semibold leading-none">Cart</p>
                    </div>
                </div>
            </div>

            {/* bottom nav */}
            <div className="flex bg-slate-800 px-2 text-white h-[2.4rem]">
                <div className="navbar-item gap-1">
                    <Icon className="text-2xl" icon="material-symbols:menu" />
                    <p className="font-bold text-sm">All</p>
                </div>
                <NavItem text="Amazon Business" />
                <NavItem text="Today's Deals" />
                <NavItem text="Electronics" />
                <NavItem text="Food & Grocery" />
                <NavItem text="Prime" />
                <NavItem text="Buy Again" />
                <NavItem text="Shopper Toolkit" />
                <NavItem text="Health & Personal Care" />
            </div>
        </header>
    );
}
