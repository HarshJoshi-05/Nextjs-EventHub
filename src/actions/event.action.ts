"use server";

import { cookies } from "next/headers";
import jwt from "jsonwebtoken";
import { redirect } from "next/navigation";
import { revalidatePath } from "next/cache";

import * as eventService from "@/services/event.service";

type TokenPayload = {
  userId: string;
  role: string;
};

export async function createEvent(formData: FormData) {
  const title = formData.get("title") as string;
  const description = formData.get("description") as string;
  const location = formData.get("location") as string;
  const date = new Date(formData.get("date") as string);
  const imageUrl = formData.get("imageUrl") as string;

  const cookieStore = await cookies();
  const token = cookieStore.get("token")?.value;

  if (!token) {
    throw new Error("Unauthorized");
  }

  const payload = jwt.verify(
    token,
    process.env.JWT_SECRET!
  ) as TokenPayload;

  await eventService.createEvent({
    title,
    description,
    location,
    date,
    imageUrl,
    organizerId: payload.userId,
  });

  revalidatePath("/events");

  redirect("/events");
}

export async function deleteEvent(formData: FormData) {
  const id = formData.get("id") as string;

  await eventService.deleteEvent(id);

  revalidatePath("/dashboard");

  redirect("/dashboard");
}

export async function updateEvent(formData: FormData) {
  const id = formData.get("id") as string;

  await eventService.updateEvent(id, {
    title: formData.get("title") as string,
    description: formData.get("description") as string,
    location: formData.get("location") as string,
    date: new Date(formData.get("date") as string),
    imageUrl: formData.get("imageUrl") as string,
  });

  revalidatePath("/dashboard");

  redirect("/dashboard");
}