import { Document } from "mongoose";

export interface IProduct extends Document {
  name: string;
  prince: number;
  featured: boolean;
  rating: number;
  createdAt: Date;
  company: string;
}
