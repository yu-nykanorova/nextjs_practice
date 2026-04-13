import {IComment} from "@/src/models/IComment";
import {FC} from "react";
import Link from "next/dist/client/link";
import {capitalize} from "@/src/helpers/utils";

type CommentProps = {
    comment: IComment;
}

export const CommentComponent: FC<CommentProps> = ({comment}) => {
    return (
        <li className="flex bg-gray-50 rounded-xl shadow-md">
            <Link href={{pathname: `/comments/${comment.id.toString()}`, query:{data: JSON.stringify(comment)}}} className="flex flex-col gap-2">
                <p className="w-full px-2 text-[16px] text-right font-semibold bg-indigo-200 rounded-t-xl">Comment: {comment.id}</p>
                <p className="w-full px-2 text-[16px] font-semibold text-right">Post {comment.postId}</p>
                <p className="px-2 text-[14px]">{comment.email}</p>
                <h3 className="w-full mt-auto px-2 py-2 text-left text-[16px] font-semibold">{capitalize(comment.name)}</h3>
            </Link>
        </li>
    );
};
