import { pgTable, serial, text, date, timestamp, uuid, pgEnum } from 'drizzle-orm/pg-core';

export const appointments = pgTable('appointments', {
  id: uuid('id').defaultRandom().primaryKey(),
  name: text('name').notNull(),
  contactInfo: text('contact_info').notNull(), // For email or phone
  appointmentDate: date('appointment_date').notNull(), // Stored as YYYY-MM-DD string
  appointmentTime: text('appointment_time').notNull(), // e.g., "09:30"
  notes: text('notes'),
  createdAt: timestamp('created_at').defaultNow().notNull(),
  updatedAt: timestamp('updated_at').defaultNow().notNull().$onUpdate(() => new Date()),
});

export const waitlist = pgTable('waitlist', {
  id: uuid('id').defaultRandom().primaryKey(),
  email: text('email').notNull().unique(),
  createdAt: timestamp('created_at').defaultNow().notNull(),
});

// Define and export the select type
export type SelectAppointment = typeof appointments.$inferSelect;
export type SelectWaitlist = typeof waitlist.$inferSelect;
// Optionally, define and export the insert type if needed elsewhere
// export type InsertAppointment = typeof appointments.$inferInsert;

// If you plan to have more tables or enums, you can define them here.
// For example, if you wanted to have predefined statuses for appointments:
// export const appointmentStatusEnum = pgEnum('appointment_status', ['pending', 'confirmed', 'cancelled', 'completed']);
// And then use it in your table:
// status: appointmentStatusEnum('status').default('pending').notNull(), 