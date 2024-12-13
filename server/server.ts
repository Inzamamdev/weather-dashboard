import dotenv from "dotenv";
dotenv.config({ path: "./.env" });
import express from "express";
import { connectDb, queryDb } from "./config/db.js"; // Import the functions from db.ts

const app = express();

connectDb(); // Connect to the database

// Example route to query the database
app.get("/", async (req, res) => {
  try {
    const users = await queryDb("SELECT * FROM users");
    res.json(users);
  } catch (error) {
    res.status(500).json({ error: "Failed to retrieve users" });
  }
});

const PORT = process.env.APP_PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
