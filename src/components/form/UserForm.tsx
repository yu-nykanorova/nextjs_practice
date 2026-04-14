"use client";

import {UserFormData, userSchema} from "@/src/lib/schema";
import {useForm} from "react-hook-form";
import {zodResolver} from "@hookform/resolvers/zod";

export const UserForm = () => {
    const {
        register,
        handleSubmit,
        formState: {errors}
    } = useForm<UserFormData>({
        resolver: zodResolver(userSchema)
    });

    const onSubmit = async (data: UserFormData) => {
        const res = await fetch ("/api/users", {
            method: "POST",
            body: JSON.stringify(data)
        })

        const json = await res.json();
        console.log(json);
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)} className="w-70 mx-auto flex flex-col justify-between items-center gap-2">
            <div className="w-full">
                <input {...register("name")} placeholder="Name" className="w-full px-2 py-1 bg-white mr-2 rounded-sm"/>
                {errors.name && <p className="text-red-500">{errors.name.message}</p>}
            </div>
            <div className="w-full">
                <input {...register("email")} placeholder="email" className="w-full px-2 py-1 bg-white mr-2 rounded-sm"/>
                {errors.email && <p className="text-red-500">{errors.email.message}</p>}
            </div>
            <div className="w-full">
                <input {...register("password")} placeholder="password" className="w-full px-2 py-1 bg-white mr-2 rounded-sm"/>
                {errors.password && <p className="text-red-500">{errors.password.message}</p>}
            </div>
            <button type="submit" className="w-1/2 px-4 py-1 text-white bg-indigo-500 rounded-sm">Submit</button>
        </form>
    );
};
