"use server";
import { eq, not } from "drizzle-orm";
import { revalidatePath } from "next/cache";

import { db } from "@/db/drizzle";
import { todos } from "@/db/schema";

export const getData = async (userId: number) => {
  // const data = await db.select().from(todos);
  const data = await db.select().from(todos).where(eq(todos?.userId, userId));
  return data;
};

export const addTodo = async (id: string, text: string, userId: number) => {
  await db.insert(todos).values({
    id,
    text: text,
    userId,
  });
  revalidatePath("/");
};

export const deleteTodo = async (id: string) => {
  await db.delete(todos).where(eq(todos.id, id));

  revalidatePath("/");
};

export const toggleTodo = async (id: string) => {
  await db
    .update(todos)
    .set({
      done: not(todos.done),
    })
    .where(eq(todos.id, id));

  revalidatePath("/todos");
};

export const editTodo = async (id: string, text: string) => {
  await db
    .update(todos)
    .set({
      text: text,
    })
    .where(eq(todos.id, id));

  revalidatePath("/");
};