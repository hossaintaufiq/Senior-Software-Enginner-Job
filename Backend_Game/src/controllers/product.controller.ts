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

    // if the product is not avaiable 
    if(!product){
        return res.status(404).json({
            success:false, 
            message: "Product not found",
        })
    }
    // if the product is found 
    return res.status(200).json({
        success:true, 
        data:product, 
    })
}

export const searchProducts = async (req:Request, res:Response)=> {
    const searchTerm = req.query.q as string 

    if(!searchTerm){
        return res.status(400).json({
            success:false, 
            message: 'Search query is required'
        })
    }
    const products = await productServices.searchProducts(searchTerm); 

    return res.status(200).json({
        success: true, 
        count: products.length, 
        data: products, 
    })
}
