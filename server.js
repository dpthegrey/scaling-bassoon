import dotenv from "dotenv";
import express from "express";
import errorHandlerMiddleware from "./middleware/error-handler.js";
import notFoundMiddleware from "./middleware/not-found.js";
const app = express();

dotenv.config();

app.get("/", (req, res) => {
  throw new Error("Something went wrong when hitting the server");
  res.send("Hello World");
});

// middelware
app.use(notFoundMiddleware);
app.use(errorHandlerMiddleware);
const port = process.env.PORT || 5000;

app.listen(port, () => {
  console.log(`server is running on port ${port}`);
});
