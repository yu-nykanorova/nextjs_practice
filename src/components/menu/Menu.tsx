import Link from "next/dist/client/link";

export const Menu = () => {
    return (
        <div>
            <ul>
                <li>
                    <Link href="/">Home</Link>
                </li>
                <li>
                    <Link href="/posts">Posts</Link>
                </li>
                <li>
                    <Link href="/comments">Comments</Link>
                </li>
                <li>
                    <Link href="/users">Users</Link>
                </li>
            </ul>
            <hr/>
        </div>
    );
};
