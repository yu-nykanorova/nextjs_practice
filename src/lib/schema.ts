import {z} from "zod";

export const carSchema = z.object({
    brand: z.string().max(20).trim().regex(/^[A-Za-zА-Яа-яёЁіІїЇєЄҐґ]+$/),
    price: z.number().max(1000000).min(0),
    year: z.number().max(2026).min(1990),
})