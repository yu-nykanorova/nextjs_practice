"use client";

import {createUser} from "@/src/app/actions/user";

export const UserForm = () => {

    return (
        <form action={createUser} className="w-70 mx-auto flex flex-col justify-between items-center gap-2">
            <div className="w-full">
                <input type="text" name="name" placeholder="Name" className="w-full px-2 py-1 bg-white mr-2 rounded-sm"/>
            </div>
            <div className="w-full">
                <input type="text" name="email" placeholder="Email" className="w-full px-2 py-1 bg-white mr-2 rounded-sm"/>
            </div>
            <button type="submit" className="w-1/2 px-4 py-1 text-white bg-indigo-500 rounded-sm">Submit</button>
        </form>
    );
};
