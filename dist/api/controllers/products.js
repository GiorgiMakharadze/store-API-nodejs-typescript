"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getAllProducts = exports.getAllProductsStatic = void 0;
const product_1 = __importDefault(require("../models/product"));
const getAllProductsStatic = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const products = yield product_1.default.find({}).sort("-name price");
    res.status(200).json({ products, nbHits: products.length });
});
exports.getAllProductsStatic = getAllProductsStatic;
const getAllProducts = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { featured, company, name, sort } = req.query;
    const queryObject = {};
    if (featured) {
        queryObject.featured = featured === "true" ? true : false;
    }
    if (company) {
        queryObject.company = company;
    }
    if (name) {
        queryObject.name = { $regex: name, $options: "i" };
    }
    let result = product_1.default.find(queryObject);
    if (sort) {
        const sortList = sort.split(",").join(" ");
        result = result.sort(sortList);
    }
    else {
        result = result.sort("createdAt");
    }
    //console.log(queryObject);
    const products = yield result;
    res.status(200).json({ nbHits: products.length, products });
});
exports.getAllProducts = getAllProducts;
