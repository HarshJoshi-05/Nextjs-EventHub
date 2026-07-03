import * as userRepository from "@/repositories/user.repository";

export async function createUser(data: {
  name: string;
  email: string;
  password: string;
}) {
  return userRepository.createUser(data);
}

export async function getUsers() {
  return userRepository.getUsers();
}