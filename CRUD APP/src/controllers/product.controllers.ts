import { Request,Response } from "express";
import { getAllProducts } from "../services/product.services.js";


export const getProduct = async (req:Request, res:Response): Promise <void>=>{
    const products = await getAllProducts(); 

    res.status(200).json({
        success:200, 
        message: 'Products fetched Successfully', 
        total: products.length, 
        data: products
    })

}