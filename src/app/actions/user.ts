"use server";

import {userSchema} from "@/src/lib/schema";

export async function createUser(formData: FormData): Promise<void> {
    const data = {
        name: formData.get("name")?.toString(),
        email: formData.get("email")?.toString(),
    }

    const result = userSchema.safeParse(data);

    if(!result.success) {
        console.log(result.error.flatten());
        return;
    }

    console.log("success", result.data);
}