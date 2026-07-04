import { prisma } from "@/lib/prisma";

type CreateEventData = {
  title: string;
  description: string;
  location: string;
  date: Date;
  imageUrl?: string;
  organizerId: string;
};

export async function createEvent(data: CreateEventData) {
  return prisma.event.create({
    data,
  });
}

export async function getEvents() {
  return prisma.event.findMany({
    include: {
      organizer: true,
    },
    orderBy: {
      createdAt: "desc",
    },
  });
}

export async function getEventById(id: string) {
  return prisma.event.findUnique({
    where: {
      id,
    },
    include: {
      organizer: true,
      registrations: true,
    },
  });
}
export async function getEventsByOrganizerId(organizerId: string) {
  return prisma.event.findMany({
    where: {
      organizerId,
    },
    include: {
      organizer: true,
    },
    orderBy: {
      createdAt: "desc",
    },
  });
}

export async function deleteEvent(id: string) {
  return prisma.event.delete({
    where: {
      id,
    },
  });
}

export async function updateEvent(
  id: string,
  data: {
    title: string;
    description: string;
    location: string;
    date: Date;
    imageUrl?: string;
  }
) {
  return prisma.event.update({
    where: {
      id,
    },
    data,
  });
}