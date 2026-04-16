"use client";

import Link from "next/dist/client/link";
import {usePathname} from "next/dist/client/components/navigation";

export const Menu = () => {

    const pathName = usePathname();
    const activeClass = "font-semibold text-orange-500 border-b border-b-orange-400";

    return (
        <nav className="w-screen h-20 fixed flex bg-zinc-300 shadow-lg z-10">
            <ul className="w-full max-w-4xl mx-auto p-4 flex justify-evenly items-center gap-6">
                <li>
                    <Link href="/" className={`p-1 text-lg ${pathName === "/" ? activeClass : ""}`}>Home</Link>
                </li>
                <li>
                    <Link href="/cars" className={`p-1 text-lg ${pathName.startsWith("/cars")  ? activeClass : ""}`}>Cars</Link>
                </li>
            </ul>
        </nav>
    );
};
