import { db } from "@/db";
import { initTRPC } from "@trpc/server";
import { cache } from "react";
import superjson from "superjson";
import { ZodError } from "zod";

export const createTRPCContext = cache(async () => {
  return { db };
});

const t = initTRPC.context<typeof createTRPCContext>().create({
  transformer: superjson,
  errorFormatter({ shape, error }) {
    return {
      ...shape,
      data: {
        ...shape.data,
        zodError:
          error.cause instanceof ZodError ? error.cause.flatten() : null,
      },
    };
  },
});

export const createTRPCRouter = t.router;

export const createCallerFactory = t.createCallerFactory;

export const publicProcedure = t.procedure;
