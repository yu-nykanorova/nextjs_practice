import type { Metadata } from 'next';
import {FC} from 'react';

type Props = {
    params: {id: string};
}

export const generateMetadata = async ({params}: Props): Promise<Metadata> => {
    const {id} = await params;
    return {
        title: `Post page title ${id}`,
    }
}

const PostPage: FC<Props> = async ({params}) => {
    const {id} = await params;

    return (
        <div>
            Post page content {id}
        </div>
    );
};

export default PostPage;