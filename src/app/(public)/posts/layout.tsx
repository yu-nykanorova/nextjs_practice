import React from 'react';
import {Metadata} from "next";

export const metadata: Metadata = {
    title: "PostsLayout metadata"
}

type Props = {children: React.ReactNode};

const PostsLayout = ({children}: Props) => {
    return (
        <div className="w-full">
            {children}
        </div>
    );
};

export default PostsLayout;