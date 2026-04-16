import Link from "next/dist/client/link";

export default function Home() {
  return (
    <div className="w-full max-w-4xl mx-auto p-10 flex flex-col flex-1 items-center bg-zinc-50 dark:bg-black">
        <h1 className="mb-6 text-2xl">Welcome to homepage!</h1>
        <Link href={"/cars"} className="text-blue-700 text-xl hover:underline">Visit all cars list &#8594;</Link>
    </div>
  );
}
