"use server";

import { cookies } from "next/headers";
import jwt from "jsonwebtoken";
import { redirect } from "next/navigation";
import { revalidatePath } from "next/cache";

import cloudinary from "@/lib/cloudinary";
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

  const image = formData.get("image") as File;

  let imageUrl = "";

  if (image && image.size > 0) {
  console.log("Image name:", image.name);
  console.log("Image size:", image.size);
  console.log("Cloud Name:", process.env.CLOUDINARY_CLOUD_NAME);

  const bytes = await image.arrayBuffer();
  const buffer = Buffer.from(bytes);

  try {
    const result: any = await new Promise((resolve, reject) => {
      cloudinary.uploader
        .upload_stream(
          {
            folder: "eventhub",
          },
          (error, result) => {
            if (error) {
              console.error("Cloudinary Upload Error:", error);
              reject(error);
            } else {
              resolve(result);
            }
          }
        )
        .end(buffer);
    });

    console.log("Upload Success:", result);

    imageUrl = result.secure_url;
  } catch (err) {
    console.error("Upload Failed:", err);
    throw err;
  }
}

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
  try {
    const id = formData.get("id") as string;

    const image = formData.get("image") as File;

    let imageUrl: string | undefined;

    if (image && image.size > 0) {
      const bytes = await image.arrayBuffer();

      const base64 = `data:${image.type};base64,${Buffer.from(bytes).toString(
        "base64"
      )}`;

      console.log("Cloudinary config:", cloudinary.config());

      const result = await cloudinary.uploader.upload(base64, {
        folder: "eventhub",
      });

      console.log("Upload Success:", result.secure_url);

      imageUrl = result.secure_url;
    }

    await eventService.updateEvent(id, {
      title: formData.get("title") as string,
      description: formData.get("description") as string,
      location: formData.get("location") as string,
      date: new Date(formData.get("date") as string),
      imageUrl,
    });

    revalidatePath("/dashboard");
    revalidatePath("/events");
    revalidatePath(`/events/${id}`);

    redirect("/dashboard");
  } catch (error) {
    console.error("UPDATE EVENT ERROR:");
    console.error(error);
    throw error;
  }
}
