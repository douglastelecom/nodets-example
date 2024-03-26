import { boolean, pgTable, text, timestamp, uuid, varchar } from "drizzle-orm/pg-core";

export const todos = pgTable("todos",{
    id: uuid("id").defaultRandom().primaryKey(),
    task: varchar("task", {length: 255}).notNull(),
    description: text("description"),
    dueDate: timestamp("due_date"),
    isDone: boolean("is_done").default(false),
    doneAt: timestamp("done_at"),
    createdAt: timestamp("create_at").defaultNow(),
    updateAt: timestamp("update_at").defaultNow()
});