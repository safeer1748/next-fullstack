"use server";
import { db } from "@/db/drizzle";
import { users } from "@/db/schema";
import { eq } from "drizzle-orm";

interface UserProps {
  clerkId: string;
  email: string;
  firstName: string;
  lastName: string;
  name: string;
  photo: string;
}

export const getAllUsers = async () => {
  return await db.select().from(users);
};

export const getUser = async (userId: string) => {
  return await db.query.users.findMany({
    where: eq(users.clerkId, userId), // Corrected where clause
    with: {
      todos: true,
    },
  });
};

export const addUser = async (user: UserProps) => {
  return await db
    .insert(users)
    .values({
      clerkId: user.clerkId, // Removed unnecessary optional chaining
      email: user.email,
      name: user.name,
      firstName: user.firstName,
      lastName: user.lastName,
      photo: user.photo,
    })
    .returning({ clerkClientId: users.clerkId }); // Removed optional chaining
};
