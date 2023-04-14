import { Request, Response } from "express";
import { FilterQuery } from "mongoose";
import Product from "../models/product";
import { IProduct } from "../../types/productsMongoDbType";
import { QueryObject } from "../../types/queryObjectTypes";

export const getAllProductsStatic = async (req: Request, res: Response) => {
  const products = await Product.find({}).sort("-name price");
  res.status(200).json({ products, nbHits: products.length });
};

export const getAllProducts = async (req: Request, res: Response) => {
  const { featured, company, name, sort } = req.query;
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

  let result = Product.find(queryObject as FilterQuery<IProduct>);

  if (sort) {
    const sortList = (sort as string).split(",").join(" ");
    result = result.sort(sortList);
  } else {
    result = result.sort("createdAt");
  }
  //console.log(queryObject);

  const products = await result;
  res.status(200).json({ nbHits: products.length, products });
};
