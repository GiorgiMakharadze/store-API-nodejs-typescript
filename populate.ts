import "dotenv/config";
import { connectDB } from "./api/db/connect";
import Product from "./api/models/product";
import jsonProducts from "./products.json";

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI!);
    await Product.deleteMany();
    await Product.create(jsonProducts);
    console.log("Success");
    process.exit(0);
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};

start();
