import { Request,Response } from "express";
import { counter } from "../services/product.services.js";
// import { getAllProducts,getProductsById, SearchProducts } from "../services/product.services.js";


// export const getProduct = async (req:Request, res:Response): Promise <void>=>{
//     const products = await getAllProducts(); 

//     res.status(200).json({
//         success:200, 
//         message: 'Products fetched Successfully', 
//         total: products.length, 
//         data: products
//     })

// }

// export const getSingleProduct = async (req:Request, res:Response):Promise<void> =>{
//     const id = Number(req.params.id)
//     const product = await getProductsById(id)

//     if(!product){
//         res.status(404).json({
//             success: false , 
//             message: 'Product not found'
//         })
//         return
//     }

//     res.status(200).json({
//         success: true, 
//         data: product 
//     })

    
// }

// export const searchProductByName= async (req:Request, res:Response) : Promise <void> =>{
//     const title = req.query.title  as string ; 

//     const result = await SearchProducts(title); 

//     res.status(200).json({
//         success: true ,
//         total: result.length , 
//         data: result
//     })
// }

export const routeTest = async(req:Request,res:Response)=>{

    const numbers= counter()
    res.status(202).json({
        success:true, 
        message: "running from the controllers",
        data:numbers
    })
}

