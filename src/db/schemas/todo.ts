// More information can be found in the Drizzle docs
// https://orm.drizzle.team/docs/overview

import { pgTable, serial } from "drizzle-orm/pg-core";

export const todo = pgTable("todo", {
  id: serial().primaryKey(),
  // add columns here
});
