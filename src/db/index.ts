import { type NodePgClient, drizzle } from "drizzle-orm/node-postgres";
import pg from "pg";
import * as schema from "./schema";

/**
 * Cache the database connection in development. This avoids creating a new connection on every HMR
 * update.
 */
const globalForDb = globalThis as unknown as {
  pool: NodePgClient;
};

const conn =
  globalForDb.pool ??
  new pg.Pool({ connectionString: process.env.DATABASE_URL });

if (process.env.NODE_ENV !== "production") {
  globalForDb.pool = conn;
}

export const db = drizzle({
  client: conn,
  schema,
  logger: process.env.NODE_ENV === "development",
  casing: "snake_case",
});
