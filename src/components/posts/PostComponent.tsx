import {IPost} from "@/src/models/IPost";
import {FC} from "react";
import {capitalize} from "@/src/helpers/utils";
import Link from "next/dist/client/link";

type PostProps = {
    post: IPost;
}

export const PostComponent: FC<PostProps> = ({post}) => {

    return (
        <li className="group bg-gray-50 rounded-xl shadow-md transition hover:bg-slate-300">
            <Link href={{pathname: `/posts/${post.id.toString()}`, query: {data: JSON.stringify(post)}}} className="flex flex-col items-start gap-2">
                <p className="w-full p-2 text-[20px] text-right font-semibold bg-slate-300 border-b-2 border-b-slate-300 rounded-t-xl group-hover:border-b-white">Post {post.id}</p>
                <p className="w-full p-2 text-[20px] font-semibold">User #{post.userId}</p>
                <h2 className="w-full p-4 text-center font-semibold">{capitalize(post.title)}</h2>
            </Link>
        </li>
    );
};
