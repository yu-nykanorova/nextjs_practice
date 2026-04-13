import Link from "next/dist/client/link";

export const Menu = () => {
    return (
        <div className="w-full fixed bg-teal-50">
            <ul className="max-w-300 mx-auto p-6 flex items-center justify-evenly">
                <li>
                    <Link href="/" className="text-xl text-slate-700">Home</Link>
                </li>
                <li>
                    <Link href="/users" className="text-xl text-slate-700">Users</Link>
                </li>
                <li>
                    <Link href="/posts" className="text-xl text-slate-700">Posts</Link>
                </li>
                <li>
                    <Link href="/comments" className="text-xl text-slate-700">Comments</Link>
                </li>
            </ul>
            <hr/>
        </div>
    );
};
