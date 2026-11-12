
import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import pool from "./config/db";

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 3000;

// Testimi i serverit
app.get("/", (req, res) => {
  res.send("Backend i klinikes eshte duke funksionuar!");
});

// Testimi i lidhjes me PostgreSQL
app.get("/test-db", async (req, res) => {
  try {
    const result = await pool.query("SELECT NOW()");

    res.status(200).json({
      message: "Lidhja me PostgreSQL u realizua me sukses!",
      time: result.rows[0].now
    });
  } catch (error) {
    console.error("Gabim ne databaze:", error);

    res.status(500).json({
      message: "Lidhja me databazen deshtoi!"
    });
  }
});

app.listen(PORT, () => {
  console.log(`Serveri eshte aktiv ne portin ${PORT}`);
});
