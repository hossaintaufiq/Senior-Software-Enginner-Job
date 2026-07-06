import {Request, Response} from 'express'
import *as productServices from '../services/product.service'

export const getAllProducts = async ( req:Request, res:Response)=>{
    const products = await productServices.getAllProducts()

    return res.status(200).json({
        success:true, 
        count: products.length, 
        data:products
    })
}

export const getProductById = async (req:Request, res:Response)=>{
    const id= Number(req.params.id) //type casting 
    const product= await productServices.getProductById(id)

    if(!product){
        return res.status(404).json({
            success:false, 
            message: "Product not found",
        })
    }
    return res.status(200).json({
        success:true, 
        data:product, 
    })
}
