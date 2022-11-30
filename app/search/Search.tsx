"use client";

import React from "react";
import { useRouter } from "next/navigation";
import { FormEvent, useState } from "react";

export default function Search() {
    const [search, setSearch] = useState("");
    const router = useRouter();

    const handleSearch = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setSearch("");
        router.push(`/search/${search}`);
    };

    return (
        <form onSubmit={handleSearch}>
            <input
                type="text"
                value={search}
                placeholder="Enter the Search term"
                onChange={(e) => setSearch(e.target.value)}
                className="mr-16"
            />
            <button
                type="submit"
                className="bg-blue-500 text-white font-bold py-2 px-4 rounded-lg"
            >
                Search
            </button>
        </form>
    );
}
