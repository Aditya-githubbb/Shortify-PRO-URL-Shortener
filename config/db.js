import mysql from "mysql2/promise";
import { drizzle } from "drizzle-orm/mysql2";

const isProduction = process.env.NODE_ENV === "production";

const pool = mysql.createPool({
  uri: process.env.DATABASE_URL,

  ...(isProduction && {
    ssl: {
      rejectUnauthorized: true,
    },
  }),
});

export const db = drizzle(pool);
