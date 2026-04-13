import {getAllComments} from "@/src/services/api.service";
import {CommentComponent} from "@/src/components/comments/CommentComponent";

export const CommentsComponent = async () => {
    const comments = await getAllComments();

    console.log(comments);

    return (
        <ul className="max-w-300 p-4 mx-auto grid grid-cols-5 gap-4">
            {
                comments.map((comment) => (
                    <CommentComponent key={comment.id} comment={comment}/>
                ))
            }
        </ul>
    );
};
