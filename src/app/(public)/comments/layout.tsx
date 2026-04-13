import React from 'react';
import {Metadata} from "next";

export const metadata: Metadata = {
    title: "CommentsLayout metadata"
}

type Props = {children: React.ReactNode};

const CommentsLayout = ({children}: Props) => {
    return (
        <div className="w-full">
            {children}
        </div>
    );
};

export default CommentsLayout;