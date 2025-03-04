// More information can be found in the tRPC docs
// https://trpc.io/docs

import { createTRPCRouter } from '~/server/api/trpc';
import { z } from "zod";
import { publicProcedure } from "../trpc";
import { db } from "../../db";
import { todos } from "../../db/schema";
import { eq } from "drizzle-orm";

export const todoRouter = createTRPCRouter({
  getAll: publicProcedure.query(async () => {
    return await db.select().from(todos);
}),

create: publicProcedure.input(z.object({ text: z.string() })).mutation(async ({ input }) => {
  const [newTodo] = await db.insert(todos).values({ text: input.text }).returning();
  return newTodo;
}),

update: publicProcedure.input(z.object({ id: z.number(), completed: z.boolean() })).mutation(async ({ input }) => {
  const [updatedTodo] = await db.update(todos).set({ completed: input.completed }).where(eq(todos.id, input.id)).returning();
  return updatedTodo;
}),

delete: publicProcedure.input(z.object({ id: z.number() })).mutation(async ({ input }) => {
  const [deletedTodo] = await db.delete(todos).where(eq(todos.id, input.id)).returning();
  return deletedTodo;
})})
