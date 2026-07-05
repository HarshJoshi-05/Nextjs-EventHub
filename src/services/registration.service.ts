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
    return {
      success: false,
      message: "Already registered",
    };
  }

  await registrationRepository.createRegistration(
    userId,
    eventId
  );

  return {
    success: true,
  };
}

export async function isRegistered(
  userId: string,
  eventId: string
) {
  return registrationRepository.isRegistered(
    userId,
    eventId
  );
}

export async function getRegisteredEvents(userId: string) {
  return registrationRepository.getRegisteredEvents(userId);
}