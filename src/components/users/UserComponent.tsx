import {FC} from "react";
import {IUser} from "@/src/models/IUser";
import Link from "next/dist/client/link";

type UserProps = {
    user: IUser;
}

export const UserComponent: FC<UserProps> = ({user}) => {
    return (
        <li className="flex flex-col items-start gap-2 bg-gray-50 rounded-xl shadow-md">
            <Link href={{pathname: `/users/${user.id.toString()}`, query: {data: JSON.stringify(user)}}} >
                <p className="w-full px-6 py-2 text-white text-[22px] text-right bg-teal-600 rounded-t-xl">USER #{user.id}</p>
                <h2 className="font-semibold self-center">{user.name}</h2>
            </Link>
            <h3 className="text-[24px]">({user.username})</h3>
            <p className="header-medium">Contacts:</p>
            <p className="text-common">Email: <a href={`mailto:${user.email}`}>{user.email}</a></p>
            <p className="text-common">Phone: <a href={`tel:${user.phone}`}>{user.phone}</a></p>
            <p className="text-common">Website: {user.website}</p>
            <p className="header-medium">Address:</p>
            <p className="text-common">{user.address.suite}, {user.address.street}</p>
            <p className="text-common">{user.address.zipcode} {user.address.city}</p>
            <p className="header-medium">Location:</p>
            <p className="text-common">latitude: {user.address.geo.lat}</p>
            <p className="text-common">longitude: {user.address.geo.lng}</p>
            <p className="header-medium">Company:</p>
            <h3 className="px-6 py-2 text-teal-700 font-semibold">{user.company.name}</h3>
            <p className="w-full px-6 py-2 text-[26px]">&quot;{user.company.catchPhrase}&quot;</p>
            <p className="pb-2 text-common font-semibold">{user.company.bs}</p>
        </li>
    );
};
