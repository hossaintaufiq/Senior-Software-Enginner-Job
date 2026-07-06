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
