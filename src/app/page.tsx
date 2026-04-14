import Form from "next/dist/client/form";
import {getMeals, saveMeal} from "@/src/server-actions/serverActions";

export default async function Home() {

    const mealsArr = await getMeals();

    return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex flex-1 w-full max-w-3xl flex-col items-center justify-between py-32 px-16 bg-indigo-50 dark:bg-black sm:items-start">
          <p className="mb-2">Add new meal:</p>
          <Form action={saveMeal} className="flex justify-between gap-2">
              <input type="text" name={"title"} className="bg-white mr-2 rounded-md"/>
              <button className="px-4 py-1 text-white bg-indigo-500 rounded-md">Add</button>
          </Form>
          <div className="mt-4">
              {
                  mealsArr.map((meal) => (
                      <div key={meal.id}>{meal.title}</div>
                  ))
              }
          </div>
      </main>
    </div>
  );
}
