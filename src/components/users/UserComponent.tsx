import {FC} from "react";
import {IUser} from "@/src/models/IUser";
import Link from "next/dist/client/link";

type UserProps = {
    user: IUser;
}

export const UserComponent: FC<UserProps> = ({user}) => {
    return (
        <li className="group bg-gray-50 rounded-xl shadow-md transition hover:bg-teal-600 hover:text-white">
            <Link href={{pathname: `/users/${user.id.toString()}`, query: {data: JSON.stringify(user)}}} className="w-full flex flex-col items-start">
                <p className="w-full px-6 py-2 text-white text-xl text-right bg-teal-600 rounded-t-xl border-b border-b-teal-600 group-hover:border-b-white">USER #{user.id}</p>
                <h2 className="w-full px-6 pt-2 text-pink-800 text-2xl font-semibold self-center transition group-hover:text-white">{user.name}</h2>
                <h3 className="px-6 text-[20px]">username: {user.username}</h3>
                <p className="w-full my-1 px-6 py-1 text-left text-[20px] font-semibold border-b border-b-teal-950">Company:</p>
                <h3 className="px-6 pb-2 text-teal-600 text-[18px] font-semibold group-hover:text-white">{user.company.name}</h3>
            </Link>
        </li>
    );
};
