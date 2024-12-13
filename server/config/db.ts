import dotenv from "dotenv";
dotenv.config({ path: "./.env" });

import pkg from "pg";
const { Pool } = pkg;

const pool = new Pool({
  user: process.env.POSTGRES_USER,
  host: process.env.POSTGRES_HOST,
  port: Number(process.env.POSTGRES_PORT),
  database: process.env.POSTGRES_DB,
  password: process.env.POSTGRES_PASSWORD,
});

// Function to connect to the database
export const connectDb = async () => {
  try {
    await pool.connect();
    console.log("PostgreSQL database connected");
  } catch (err) {
    console.error("Failed to connect to PostgreSQL", err);
    process.exit(1);
  }
};

// Function to query the database
export const queryDb = async (text: string, params?: any[]) => {
  try {
    const res = await pool.query(text, params);
    return res.rows;
  } catch (err) {
    console.error("Database query error", err);
    throw err;
  }
};
export default pool;
