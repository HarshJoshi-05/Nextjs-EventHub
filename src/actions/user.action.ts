"use server";

import { redirect } from "next/navigation";
import { revalidatePath } from "next/cache";


import * as userService from "@/services/user.service";

export async function createUser(formData: FormData) {
  const name = formData.get("name") as string;
  const email = formData.get("email") as string;
  const password = formData.get("password") as string;

  await userService.createUser({
    name,
    email,
    password,
  });

  revalidatePath("/users");

  redirect("/users");
}