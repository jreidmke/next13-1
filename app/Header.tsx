import React from "react";
import Link from "next/link";

export default function Header() {
    return (
        <div className="sticky top-0">
            <div className="p-5 bg-blue-500 flex justify-between">
                <p className="font-bold text-white">This is the header</p>
                <Link
                    href="/"
                    className="px-2 py-1 bg-white text-blue-500 rounded-lg"
                >
                    Home
                </Link>
            </div>
        </div>
    );
}
