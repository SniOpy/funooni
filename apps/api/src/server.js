import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import leadRoutes from "./routes/lead.routes.js";

dotenv.config();

const app = express();

const allowedOrigins = [
  "http://localhost:5173",
  "https://tadara.funooni.fr",
  "https://funooni.fr"
];

app.use(
  cors({
    origin: allowedOrigins,
    methods: ["GET", "POST"],
    allowedHeaders: ["Content-Type"]
  })
);

app.use(express.json());

app.get("/api/health", (req, res) => {
  res.status(200).json({
    success: true,
    message: "Funooni API is running"
  });
});

app.use("/api/leads", leadRoutes);

const PORT = process.env.PORT || 10000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});