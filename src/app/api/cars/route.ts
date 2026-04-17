import {carValidator} from "@/src/lib/validators/car.validator";
import {NextResponse} from "next/dist/server/web/spec-extension/response";
import {createCar, getCars} from "@/src/lib/api/cars.service";

export const GET = async () => {
    const cars = await getCars();
    return NextResponse.json(cars);
}

export const POST = async (req: Request) => {
    const body = await req.json();

    const {error, value} = carValidator.validate(body);

    if (error) {
        return NextResponse.json({error: error.message});
    }

    const result = await createCar(value);
    console.log(result);
    return NextResponse.json(result);
}