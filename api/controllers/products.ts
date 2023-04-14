import { NextFunction, Request, Response } from "express";

export const getAllProductsStatic = async (req: Request, res: Response) => {
  throw new Error("Testins async errors");
  res.status(200).json({ message: "Product testing route" });
};
export const getAllProducts = async (req: Request, res: Response) => {
  res.status(200).json({ message: "Product route" });
};
