import "dotenv/config";
import express from "express";
import "express-async-errors";
import { connectDB } from "./api/db/connect";
import { errorHandlerMiddleware } from "./api/middleware/error-handler";
import { notFound } from "./api/middleware/not-found";
import productsRouter from "./api/routes/products";

const port = process.env.PORT || 3000;
const app = express();

//middleware
app.use(express.json());

//routes
app.get("/", (req, res) => {
  res.send('<h1>Store api</h1><a href="/api/v1/products">products route</a>');
});

//prodcuts route
app.use("/api/v1/products", productsRouter);

//error handling
app.use(notFound);
app.use(errorHandlerMiddleware);

const start = async () => {
  try {
    //connectDb
    await connectDB(process.env.MONGO_URI!);
    app.listen(port, () => {
      console.log(`Server is listening port ${port}`);
    });
  } catch (error) {
    console.log(error);
  }
};

start();
