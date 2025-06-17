import type { Config } from 'drizzle-kit';
import * as dotenv from 'dotenv';

dotenv.config({ path: '.env.local' }); // Or your preferred .env file

const connectionString = process.env.POSTGRES_URL || process.env.DATABASE_URL;

if (!connectionString) {
  throw new Error('DATABASE_URL or POSTGRES_URL is not set in environment variables.');
}

export default {
  schema: './src/db/schema.ts', // Path to your schema file
  out: './drizzle/migrations',   // Directory for migrations
  dialect: 'postgresql',
  dbCredentials: {
    url: connectionString,
    // Or provide individual parameters:
    // host: process.env.DB_HOST!,
    // port: Number(process.env.DB_PORT!),
    // user: process.env.DB_USER!,
    // password: process.env.DB_PASSWORD!,
    // database: process.env.DB_NAME!,
  },
  verbose: true, // Optional: for more detailed Drizzle Kit output
  strict: true,  // Optional: for stricter type checking
} satisfies Config;
