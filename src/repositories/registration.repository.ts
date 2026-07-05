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

export async function isRegistered(
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
    select: {
      id: true,
    },
  });
}

export async function getRegisteredEvents(userId: string) {
  return prisma.registration.findMany({
    where: {
      userId,
    },
    include: {
      event: {
        include: {
          organizer: true,
        },
      },
    },
    orderBy: {
      createdAt: "desc",
    },
  });
}