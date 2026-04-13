import {getAllPosts} from "@/src/services/api.service";
import {PostComponent} from "@/src/components/posts/PostComponent";

export const PostsComponent = async () => {
    const posts = await getAllPosts();

    console.log(posts);

    return (
        <ul className="p-4 grid grid-cols-4 gap-6">
            {
                posts.map((post) => (
                    <PostComponent key={post.id} post={post}/>
                ))
            }
        </ul>
    );
};
