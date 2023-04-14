import { Request, Response } from "express";
import { FilterQuery } from "mongoose";
import Product from "../models/product";
import { IProduct } from "../../types/productsMongoDbType";
import { QueryObject } from "../../types/queryObjectTypes";

export const getAllProductsStatic = async (req: Request, res: Response) => {
  const search = "a";
  const products = await Product.find({
    name: { $regex: search, $options: "i" },
  });
  res.status(200).json({ products, nbHits: products.length });
};
export const getAllProducts = async (req: Request, res: Response) => {
  const { featured, company, name } = req.query;
  const queryObject: QueryObject = {};

  if (featured) {
    queryObject.featured = featured === "true" ? true : false;
  }
  if (company) {
    queryObject.company = company;
  }
  if (name) {
    queryObject.name = { $regex: name, $options: "i" };
  }

  console.log(queryObject);

  const products = await Product.find(queryObject as FilterQuery<IProduct>);
  res.status(200).json({ products, nbHits: products.length });
};
