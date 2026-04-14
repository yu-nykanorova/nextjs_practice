"use server";

import sql from "better-sqlite3";
import {revalidatePath} from "next/cache";
import {redirect} from "next/dist/client/components/redirect";

const db = sql("meals.db");

type Meal = {
    id: number;
    title: string;
}

export const saveMeal = async (formData: FormData) => {
    // console.log("Save action");
    // console.log(formData);
    // fetch post
    // do some stuff
    // add data to db

    const titleValue = formData.get("title");

    db.prepare("insert into meals(title) values(?)") // знак питання заповниться titleValue
        .run(titleValue);

    // redirect("/");
    revalidatePath("/");
};

export const getMeals = async (): Promise<Meal[]> => {
    return db.prepare<Meal[]>("select * from meals").all() as Meal[];
}