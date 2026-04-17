import {CarItem} from "@/src/components/cars/CarItem";
import Link from "next/dist/client/link";
import {ICar} from "@/src/models/ICar";

export const CarsList = async () => {
    const res = await fetch("http://localhost:3000/api/cars");
    const cars: ICar[] = await res.json();

    if (!cars.length) {
        console.log("ooops");
    }

    return (
        <div className="p-4">
            <div className="mb-6 flex items-end justify-between gap-4">
                <h1 className="text-2xl text-center">Cars List</h1>
                <Link href={"/cars/create"} className="px-6 py-3 bg-zinc-900 text-white text-lg font-semibold rounded-xl transition cursor-pointer hover:bg-orange-500 hover:shadow-lg">
                    Create New Car
                </Link>
            </div>
            <ul className="grid grid-cols-3 gap-8 items-center">
                {
                    cars.map((car) => (
                        <CarItem key={car.id} car={car}/>
                    ))
                }
            </ul>
        </div>
    );
};
