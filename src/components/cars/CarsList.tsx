import {CarItem} from "@/src/components/cars/CarItem";
import {getCars} from "@/src/lib/api/cars.service";
import Link from "next/dist/client/link";

export const CarsList = async () => {
    const cars = await getCars();

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
