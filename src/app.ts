import express from "express";
import "dotenv/config";
const app = express();

app.get("/", (req, res) => {
  res.send("Hellossdf world");
});

export default app;
