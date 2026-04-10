import React from 'react';
import {Metadata} from "next";

export const metadata: Metadata = {
    title: "AboutLayout metadata"
}

type Props = {children: React.ReactNode};

const AboutLayout = ({children}: Props) => {
    return (
        <div>
            about layout
            {children}
        </div>
    );
};

export default AboutLayout;