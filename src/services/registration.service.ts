import * as registrationRepository from "@/repositories/registration.repository";

export async function registerForEvent(
  userId: string,
  eventId: string
) {
  const existing =
    await registrationRepository.getRegistration(
      userId,
      eventId
    );

  if (existing) {
    throw new Error("Already registered");
  }

  return registrationRepository.createRegistration(
    userId,
    eventId
  );
}