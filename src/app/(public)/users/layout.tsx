import {Metadata} from "next";

export const metadata: Metadata = {
    title: "UsersLayout metadata"
}

type Props = {children: React.ReactNode};
const UsersLayout = ({children}: Props) => {
    return (
        <div className="w-full">
            {children}
        </div>
    );
};

export default UsersLayout;