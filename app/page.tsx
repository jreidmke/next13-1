import Link from "next/link";

export default function Home() {
    return (
        <div>
            This is the home page
            <br />
            <Link href="/todos">Todos</Link>
            <br />
            <Link href="/search">Search</Link>
        </div>
    );
}
