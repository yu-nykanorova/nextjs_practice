import {ICar, ICarCreate} from "@/src/models/ICar";

const BASE_URL = "http://owu.linkpc.net/carsAPI/v1";

export const getCars = async (): Promise<ICar[]> => {
    const cars = await fetch(`${BASE_URL}/cars`);
    return cars.json();
};

export const createCar = async (data: ICarCreate): Promise<ICarCreate> => {
    const car = await fetch(`${BASE_URL}/cars`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
    });
    return car.json();
}