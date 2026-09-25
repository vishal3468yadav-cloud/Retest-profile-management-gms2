import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import profileRoutes from "./routes/profileRoutes.js";

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api", profileRoutes);

app.listen(5000, () => {
    console.log("server is running on port 5000");
});