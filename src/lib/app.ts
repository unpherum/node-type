import express from "express";
import helmet from "helmet";
import cors from "cors";

export const app = express();

export const corsOptions = {
  origin: ["http://localhost:8080"],
  credentials: true,
};

app.use(helmet());
app.use(cors(corsOptions));

app.get("/", (req, res) => res.send("Express + TypeScript Server"));
