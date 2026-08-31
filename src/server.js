require("dotenv").config();

const express = require("express");
const { Pool } = require("pg");

const app = express();
app.use(express.json());

const PORT = process.env.PORT || 3000;

// DATABASE_URL will be supplied locally through .env
// and on Render through Render Environment Variables.
const pool = process.env.DATABASE_URL
  ? new Pool({
      connectionString: process.env.DATABASE_URL,
      ssl: { rejectUnauthorized: false }
    })
  : null;

app.get("/", (req, res) => {
  res.json({
    service: "Crypto AIOS",
    status: "running",
    mode: "paper-trading-only"
  });
});

app.get("/health", async (req, res) => {
  const result = {
    application: "ok",
    database: "not-configured"
  };

  if (pool) {
    try {
      await pool.query("SELECT NOW()");
      result.database = "connected";
    } catch (error) {
      result.database = "error";
      result.databaseError = error.message;
    }
  }

  res.json(result);
});

app.get("/api/market/example", (req, res) => {
  // Placeholder only. This is NOT a live trading signal.
  res.json({
    symbol: "BTCUSDT",
    price: null,
    signal: "HOLD",
    confidence: 0,
    message: "Market-data module will be added next."
  });
});

app.listen(PORT, () => {
  console.log(`AIOS server running on port ${PORT}`);
});
