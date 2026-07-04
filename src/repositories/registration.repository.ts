import { prisma } from "@/lib/prisma";

export async function createRegistration(
  userId: string,
  eventId: string
) {
  return prisma.registration.create({
    data: {
      userId,
      eventId,
    },
  });
}

export async function getRegistration(
  userId: string,
  eventId: string
) {
  return prisma.registration.findUnique({
    where: {
      userId_eventId: {
        userId,
        eventId,
      },
    },
  });
}