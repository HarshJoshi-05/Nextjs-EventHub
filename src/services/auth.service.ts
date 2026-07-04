import bcrypt from "bcryptjs";
import * as userRepository from "@/repositories/user.repository";
import jwt from "jsonwebtoken";

type RegisterData = {
  name: string;
  email: string;
  password: string;
};

export async function register(data: RegisterData) {
  const existingUser = await userRepository.getUserByEmail(data.email);

  if (existingUser) {
    throw new Error("User already exists");
  }

  const hashedPassword = await bcrypt.hash(data.password, 10);

  return userRepository.createUser({
    ...data,
    password: hashedPassword,
  });
}

export async function getUsers() {
  return userRepository.getUsers();
}


export async function login(data: {
  email: string;
  password: string;
}) {
  const user = await userRepository.getUserByEmail(data.email);

  if (!user) {
    throw new Error("Invalid credentials");
  }

  const isPasswordCorrect = await bcrypt.compare(
    data.password,
    user.password
  );

  if (!isPasswordCorrect) {
    throw new Error("Invalid credentials");
  }

  const token = jwt.sign(
    {
      userId: user.id,
      role: user.role,
    },
    process.env.JWT_SECRET!,
    {
      expiresIn: "7d",
    }
  );

  return token;
}