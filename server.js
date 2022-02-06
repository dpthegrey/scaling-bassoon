import cors from "cors";
import express from "express";
const app = express();

import dotenv from "dotenv";
dotenv.config();

import "express-async-errors";
// db and authenticateUser
import connectDB from "./db/connect.js";

// routers
import authRouter from "./routes/authRoutes.js";
import jobsRouter from "./routes/jobsRoutes.js";

// middelware
import errorHandlerMiddleware from "./middleware/error-handler.js";
import notFoundMiddleware from "./middleware/not-found.js";

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.json({ msg: "Hello World" });
});

app.use("/api/v1/auth", authRouter);
app.use("/api/v1/jobs", jobsRouter);

app.use(notFoundMiddleware);
app.use(errorHandlerMiddleware);
const port = process.env.PORT || 5000;

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URL);
    app.listen(port, () => {
      console.log(`server is running on port ${port}`);
    });
  } catch (error) {
    console.log(error);
  }
};

start();
