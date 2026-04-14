import {z} from 'zod';

export const userSchema = z.object({
    name: z.string().min(2, "Min char length is 2"),
    email: z.string().email("Invalid email"),
    password: z.string().min(6, "Password must be at least 6 characters"),
});

export type UserFormData = z.infer<typeof userSchema>;