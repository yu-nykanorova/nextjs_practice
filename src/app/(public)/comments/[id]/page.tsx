import {FC} from 'react';
import {Metadata} from "next";
import {SearchParams} from "next/dist/server/request/search-params";
import {capitalize, parseData} from "@/src/helpers/utils";
import {IComment} from "@/src/models/IComment";

type Props = {
    params : Promise<{id: string}>;
    searchParams: Promise<SearchParams>;
}

export const generateMetadata = async ({params}: Props): Promise<Metadata> => {
    const {id} = await params;

    return {
        title: `Comment page title ${id}`,
    }
}

const CommentPage: FC<Props> = async ({searchParams}) => {
    const {data} = await searchParams;
    let comment = null;
    if (typeof data === "string") {
        comment = parseData<IComment>(data);
    }

    return (
        <>
            {
                comment &&
                <div className="p-10">
                    <p className="w-full py-2 text-[22px]">Comment: {comment.id} (post #{comment.postId})</p>
                    <p className="py-1 text-[18px] text-pink-800 font-semibold">Author: {comment.email}</p>
                    <h3 className="w-full mt-1 py-2 text-left text-[22px] font-semibold border-b border-b-slate-700">{capitalize(comment.name)}</h3>
                    <p className="w-full py-2 text-slate-700 text-[18px] text-left">{capitalize(comment.body)}</p>
                </div>
            }
        </>
    );
};

export default CommentPage;