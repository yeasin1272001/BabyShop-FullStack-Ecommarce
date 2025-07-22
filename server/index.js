import express from "express";
import dotenv from "dotenv";

import authRoutes from "./routes/authRoutes.js";
import connectDB from "./config/db.js";

// Load env Server
dotenv.config();

const app = express();
const PORT = process.env.PORT || 8000;

app.use(express.json());

// db conncet

connectDB();

// routes

app.use("/api/auth", authRoutes);

app.get("/", (req, res) => {
  res.send("Hello from Baby Mart Server");
});

app.listen(PORT, () => {
  console.log(`Server is running on ${PORT}`);
  console.log(`Client URL: ${process.env.CLIENT_URL}`);
  console.log(`Client URL: ${process.env.ADMIN_URL}`);
  console.log(`API docs available at: http://localhost:${PORT}/api/docs`);
});
