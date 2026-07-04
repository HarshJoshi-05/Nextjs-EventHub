import * as eventRepository from "@/repositories/event.repository";

type CreateEventData = {
  title: string;
  description: string;
  location: string;
  date: Date;
  imageUrl?: string;
  organizerId: string;
 
};

export async function createEvent(data: CreateEventData) {
  return eventRepository.createEvent(data);
}

export async function getEvents() {
  return eventRepository.getEvents();
}

export async function getEventById(id: string) {
  return eventRepository.getEventById(id);
}
export async function getEventsByOrganizerId(organizerId: string) {
  return eventRepository.getEventsByOrganizerId(organizerId);
}

export async function deleteEvent(id: string) {
  return eventRepository.deleteEvent(id);
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
  return eventRepository.updateEvent(id, data);
}