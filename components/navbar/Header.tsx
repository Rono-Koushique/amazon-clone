import React from "react";
import Img from "../extra/Img";
import BrandLogo from "public/assets/image/brand-logo.png";
import { Icon } from "@iconify/react";
import NavItem from "../button/NavItem";

type Props = {};

export default function Header({}: Props) {
    return (
        <header>
            {/* top nav */}
            <div className="flex items-center bg-slate-900 px-2 py-1 h-[3.8rem]">
                {/* brand logo */}
                <div className="navbar-link">
                    <Img className="w-24" src={BrandLogo} />
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
                    <div className="text-white flex flex-col gap-1">
                        <p className="text-xs leading-none">Hello, Rono K.</p>
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
                <div className="navbar-link">
                    <div className="text-white flex items-end gap-1">
                        <div className="relative">
                            <span className="absolute bg-yellow-500 h-5 text-sm aspect-square leading-none 
                                        flex items-center justify-center rounded-full font-semibold right-0">
                                0
                            </span>
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
                <NavItem text="Today&apos;s Deals" />
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
