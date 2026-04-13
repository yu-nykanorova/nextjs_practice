import {FC} from "react";
import {Metadata} from "next";
import {SearchParams} from "next/dist/server/request/search-params";
import {parseData} from "@/src/helpers/utils";
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
        user = parseData<IUser>(data);
    }

    return (
        <>
            {
                user &&
                <div className="w-1/2 mx-auto">
                    <div className="mb-4 text-center">
                        <h2 className="w-full text-2xl font-semibold text-pink-800">{user.name}</h2>
                        <p className="w-full text-black">USER #{user.id}</p>
                        <h3 className="text-[20px]">username: {user.username}</h3>
                    </div>
                    <div className="w-full flex justify-between">
                        <div className="px-4 flex-[0_0_50%] border border-slate-700 rounded-l-md">
                            <p className="w-full my-1 py-1 text-left text-[20px] font-semibold">Contacts:</p>
                            <p className="w-full">Email: <a href={`mailto:${user.email}`}>{user.email}</a></p>
                            <p className="w-full">Phone: <a href={`tel:${user.phone}`}>{user.phone}</a></p>
                            <p className="w-full">Website: {user.website}</p>
                            <p className="font-semibold">Address:</p>
                            <p className="w-full">{user.address.suite}, {user.address.street}</p>
                            <p className="w-full">{user.address.zipcode} {user.address.city}</p>
                            <p className="font-semibold">Location:</p>
                            <p className="w-full">latitude: {user.address.geo.lat}</p>
                            <p className="w-full">longitude: {user.address.geo.lng}</p>
                        </div>
                        <div className="px-4 flex-[0_0_50%] border-l border-l-teal-950  bg-slate-700 rounded-r-md">
                            <p className="w-full my-1 py-1 text-left text-[20px] text-white font-semibold">Company:</p>
                            <h3 className="text-teal-100 text-[18px] font-semibold">{user.company.name}</h3>
                            <p className="w-full px-2 py-2 text-[18px] text-white">&quot;{user.company.catchPhrase}&quot;</p>
                            <p className="w-full pb-2 text-white font-semibold">{user.company.bs}</p>
                        </div>
                    </div>
                </div>
            }
        </>
    );
};

export default UserPage;
