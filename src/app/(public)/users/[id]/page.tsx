import {FC} from "react";
import {Metadata} from "next";
import {SearchParams} from "next/dist/server/request/search-params";
import {IUser} from "@/src/models/IUser";

type Props = {
    params: Promise<{id:string}>;
    searchParams: Promise<SearchParams>;
}

export const generateMetadata = async ({params}: Props):Promise<Metadata> => {
    const {id} = await params;

    return {
        title: `User Page title ${id}`,
    }
}

const UserPage:FC<Props> = async ({searchParams}) => {
    const {data} = await searchParams;
    let user = null;
    if (typeof  data === 'string') {
        user = JSON.parse(data) as IUser;
        console.log(user);
    } // винести окремо у helper

    return (
        <div>
            {user && <p>User page content of {user.name}</p>}
        </div>
    );
};

export default UserPage;
