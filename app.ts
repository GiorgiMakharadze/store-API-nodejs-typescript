import "dotenv/config";
import express from "express";
import { errorHandlerMiddleware } from "./api/middleware/error-handler";
import { notFound } from "./api/middleware/not-found";

const port = process.env.PORT || 3000;
const app = express();

//middleware
app.use(express.json());

//routes
app.get("/", (req, res) => {
  res.send('<h1>Store api</h1><a href="/api/v1/products">products route</a>');
});

//prodcuts route

app.use(notFound);
app.use(errorHandlerMiddleware);

const start = async () => {
  try {
    //connectDb
    app.listen(port, () => {
      `Server is listening port ${port}`;
    });
  } catch (error) {
    console.log(error);
  }
};

start();
