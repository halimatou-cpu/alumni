import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex-col z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
      <h2 className="bg-slate-100">Not Found</h2>
      <p className=" bg-green-400 m-5">Could not find requested resource</p>
      <Link href="/">
        <button className="my-5">Return Home</button>
      </Link>
    </div>
  );
}
