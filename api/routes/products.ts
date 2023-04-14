import { Router } from "express";
import { getAllProducts } from "../controllers/products";

const router = Router();

router.route("/").get(getAllProducts);

export default router;
