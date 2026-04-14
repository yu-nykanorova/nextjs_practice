import Link from "next/dist/client/link";

export const Menu = () => {
    return (
        <div>
            <ul className="max-w-3xl mx-auto px-10 py-2 flex items-center justify-between">
                <li>
                    <Link href="/">Home</Link>
                </li>
                <li>
                    <Link href="/about">About</Link>
                </li>
                <li>
                    <Link href="/contacts">Contacts</Link>
                </li>
                <li>
                    <Link href="/users">Users</Link>
                </li>
            </ul>
            <hr/>
        </div>
    );
};
