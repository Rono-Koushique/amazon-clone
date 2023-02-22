import Link from "next/link";
import React from "react";

type Props = {
    className?: string;
    href?: string;
    text: string;
};

export default function NavItem({ className, href='/', text }: Props) {
    return <div className={`navbar-item ${className ? className : ""}`}>
        <Link className="font-semibold text-sm" href={href}>{text}</Link>
    </div>;
}
