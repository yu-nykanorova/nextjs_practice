"use server";

import {createCar} from "@/src/lib/api/cars.service";

import {carSchema} from "@/src/lib/schema";
import {redirect} from "next/navigation";

export async function createCarAction(formData: FormData) {
    const data = {
        brand: formData.get("brand")?.toString() || "",
        price: Number(formData.get("price")) || 0,
        year: Number(formData.get("year")) || 0,
    };

    const result = carSchema.safeParse(data);

    if(!result.success) {
        console.log(result.error.flatten());
        return;
    }

    await createCar(result.data);
    redirect("/cars");
}