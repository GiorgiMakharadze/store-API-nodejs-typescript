import { Request, Response } from "express";
import { FilterQuery } from "mongoose";
import Product from "../models/product";
import { IProduct } from "../../types/productsMongoDbType";
import { QueryObject } from "../../types/queryObjectTypes";

export const getAllProductsStatic = async (req: Request, res: Response) => {
  const products = await Product.find({}).sort("name").select("name price");

  res.status(200).json({ products, nbHits: products.length });
};

export const getAllProducts = async (req: Request, res: Response) => {
  const { featured, company, name, sort, fields } = req.query;
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

  //sort
  if (sort) {
    const sortList = (sort as string).split(",").join(" ");
    result = result.sort(sortList);
  } else {
    result = result.sort("createdAt");
  }

  if (fields) {
    const fieldsList = (fields as string).split(",").join(" ");
    result = result.select(fieldsList);
  }

  const page = Number(req.query.page) || 1;
  const limit = Number(req.query.limit) || 10;
  const skip = (page - 1) * limit;

  result = result.skip(skip).limit(limit);

  const products = await result;
  res.status(200).json({ nbHits: products.length, products });
};
