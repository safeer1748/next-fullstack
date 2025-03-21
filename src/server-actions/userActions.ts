"use server";
import { db } from "@/db/drizzle";
import { users } from "@/db/schema";
import { userProps } from "@/types/userType";
export const getAllUsers = async () => {
  const data = await db.select().from(users);
  return data;
};

export const getUser = async (userId: string) => {
  const user = await db.query.users.findMany({
    where: (users, { eq }) => eq(users.clerkId, userId),
    with: {
      todos: true,
    },
  });

  return user;
};

export const addUser = async (user: userProps) => {
  if (!user) {
    throw new Error("User object is required");
  }

  await db
    .insert(users)
    .values({
      clerkId: user.clerkId!,
      email: user.email!,
      name: user.name!,
      firstName: user.firstName,
      lastName: user.lastName,
      photo: user.photo!,
    })
    .returning({ clerkClientId: users.clerkId });

  // revalidatePath("/");
};
