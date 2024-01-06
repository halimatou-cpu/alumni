import Link from "next/link";

export default function NotFound() {
    return (
        <div className="flex flex-col items-center justify-center">
            <h2>Not Found</h2>
            <p className=" bg-green-400 m-5">Could not find requested resource</p>
            <Link href="/">
                <button className="my-5">Return Home</button>
            </Link>
        </div>
    );
}