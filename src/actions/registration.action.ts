"use server";

import { cookies } from "next/headers";
import jwt from "jsonwebtoken";
import { redirect } from "next/navigation";

import * as registrationService from "@/services/registration.service";

type TokenPayload = {
  userId: string;
};

export async function registerForEvent(formData: FormData) {
  const eventId = formData.get("eventId") as string;

  const token = (await cookies()).get("token")?.value;

  if (!token) {
    throw new Error("Unauthorized");
  }

  const payload = jwt.verify(
    token,
    process.env.JWT_SECRET!
  ) as TokenPayload;

  await registrationService.registerForEvent(
    payload.userId,
    eventId
  );

  redirect(`/events/${eventId}`);
}