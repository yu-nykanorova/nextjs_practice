import type { Metadata } from 'next';
import {FC} from 'react';
import {SearchParams} from "next/dist/server/request/search-params";
import {capitalize, parseData} from "@/src/helpers/utils";
import {IPost} from "@/src/models/IPost";

type Props = {
    params: Promise<{id: string}>;
    searchParams: Promise<SearchParams>;
}

export const generateMetadata = async ({params}: Props): Promise<Metadata> => {
    const {id} = await params;
    return {
        title: `Post page title ${id}`,
    }
}

const PostPage: FC<Props> = async ({searchParams}) => {
    const {data} = await searchParams;
    let post = null;
    if (typeof data === "string") {
        post = parseData<IPost>(data)
    }

    return (
        <>
            {
                post &&
                <div className="p-10">
                    <p className="w-full p-2 text-[20px] text-center text-slate-700">Post {post.id} (user #{post.userId})</p>
                    <h2 className="w-full py-2 text-[20px] text-pink-800 font-semibold">{capitalize(post.title)}</h2>
                    <p className="w-full pb-4 text-slate-700 text-[18px] text-justify">{post.body}</p>
                </div>
            }
        </>
    );
};

export default PostPage;