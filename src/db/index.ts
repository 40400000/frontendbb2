import { drizzle } from 'drizzle-orm/node-postgres';
import { Pool } from 'pg';
import * as dotenv from 'dotenv';
import * as schema from './schema';

dotenv.config({ path: '.env.local' }); // Ensure environment variables are loaded

if (!process.env.DATABASE_URL) {
  throw new Error('DATABASE_URL environment variable is not set.');
}

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  // ssl: {
  //   rejectUnauthorized: false, // Required for some cloud providers like Supabase if not using the pooler
  // },
});

export const db = drizzle(pool, { schema });
export { schema }; // Exporting the schema for convenience, e.g. for relations

// Optional: Test connection (you might want to remove this in production)
// async function testConnection() {
//   try {
//     await pool.query('SELECT NOW()');
//     console.log('Database connected successfully');
//   } catch (error) {
//     console.error('Failed to connect to the database:', error);
//   }
// }
// testConnection(); 