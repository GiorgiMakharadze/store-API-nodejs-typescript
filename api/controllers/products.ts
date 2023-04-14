import { NextFunction, Request, Response } from "express";

export const getAllProductsStatic = async (req: Request, res: Response) => {
  res.status(200).json({ message: "Product testin route" });
};
export const getAllProducts = async (req: Request, res: Response) => {
  res.status(200).json({ message: "Product route" });
};
