import React from "react";

type PageProps = {
    params: {
        searchTerm: string;
    };
};

type SearchResults = {
    organic_results: [
        {
            position: number;
            title: string;
            link: string;
            thumbnail: string;
            snippet: string;
        }
    ];
};

const search = async (searchTerm: string) => {
    const res = await fetch(
        `https://serpapi.com/search.json?q=${searchTerm}&api_key=${process.env.API_KEY}`
    );
    const data: SearchResults = await res.json();

    // throw new Error("Something went wrong");

    return data;
};

export default async function SearchResults({
    params: { searchTerm },
}: PageProps) {
    const searchResults = await search(searchTerm);
    return (
        <div>
            <p className="text-gray-500 text-sm">
                You searched for {searchTerm}
            </p>

            <ol className="space-y-5 p-5">
                {searchResults.organic_results.map((r) => (
                    <li key={r.position} className="list-decimal">
                        <p className="font-bold">{r.title}</p>
                        <p>{r.snippet}</p>
                    </li>
                ))}
            </ol>
        </div>
    );
}
