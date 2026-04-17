"use client";

import {createCar} from "@/src/lib/api/cars.service";
import {ICarCreate} from "@/src/models/ICar";
import {useForm} from "react-hook-form";
import {joiResolver} from "@hookform/resolvers/joi";
import {carValidator} from "@/src/lib/validators/car.validator";
import {useState} from "react";

type IsSuccessProps = {
    state: "success" | "error" | null;
    message: string;
}

export const CreateCarForm = () => {
    const [isSuccess, setIsSuccess] = useState<IsSuccessProps>({
        state: null,
        message: "",
    });

    const {
        handleSubmit,
        register,
        reset,
        formState: {errors, isValid},
    } = useForm<ICarCreate>({
        mode: "all",
        resolver: joiResolver(carValidator)
    });

    const submitForm = async (data: ICarCreate) => {
        const res = await fetch("http://localhost:3000/api/cars", {
            method: "POST",
            body: JSON.stringify(data),
        });

        if(!res.ok) {
            setIsSuccess({
                state: "error",
                message: "Car was not created!"
            });
            return;
        }

        setIsSuccess({
            state: "success",
            message: "Car was successfully created!"
        });

        reset();
    };

    return (
        <div className='pt-10 px-6 pb-6 flex flex-col items-center justify-center'>
            <h1 className="mb-8 text-gray-700 text-[30px]">Add new car</h1>
            <form className="w-1/2 p-8 flex flex-col gap-4 bg-slate-300 rounded-md shadow-xl" onSubmit={handleSubmit(submitForm)}>
                <label className="block text-[20px]">
                    <span className="text-red-600">*</span>Brand:
                    <input className="w-full px-2 py-1 block text-[18px] bg-white rounded-md outline-orange-500" type="text" {...register("brand")}/>
                    {
                        errors.brand &&
                        <div className="text-[18px] text-red-600">{errors.brand?.message}</div>
                    }
                </label>
                <label className="text-[20px]">
                    <span className="text-red-600">*</span>Price:
                    <input className="w-full px-2 py-1 block text-[18px] bg-white rounded-md outline-orange-500" type="number" {...register("price", {valueAsNumber: true})}/>
                    {
                        errors.price &&
                        <div className="text-[18px] text-red-600">{errors.price?.message}</div>
                    }
                </label>
                <label className="text-[20px]">
                    <span className="text-red-600">*</span>Year:
                    <input className="w-full px-2 py-1 block text-[18px] bg-white rounded-md outline-orange-500" type="number" {...register("year", {valueAsNumber: true})}/>
                    {
                        errors.year &&
                        <div className="text-[18px] text-red-600">{errors.year?.message}</div>
                    }
                </label>
                <button className="w-1/3 mt-8 px-4 py-1 self-center text-[20px] bg-white border-2 border-orange-500 rounded-md shadow-xl transition-all duration-200 ease-in-out hover:bg-orange-500 hover:text-white disabled:bg-slate-100 disabled:border-none disabled:text-slate-300" disabled={!isValid}>Save</button>
            </form>
            {
                isSuccess.state && (
                    <div className={`mt-6 text-[18px] ${isSuccess.state === "error" ? "text-orange-500" : "text-green-600"}`}>
                        {isSuccess.message}
                    </div>
                )
            }
        </div>
    );
};
