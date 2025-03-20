import { config } from "dotenv";
import { drizzle } from "drizzle-orm/neon-http";
import * as schema from "./schema"; // Ensure schema is imported

config({ path: ".env" }); // or .env.local

// Initialize Drizzle with the schema
export const db = drizzle(process.env.NEON_DATABASE_URL!, { schema });
