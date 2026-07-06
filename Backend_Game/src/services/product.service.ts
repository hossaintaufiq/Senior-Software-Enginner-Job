import productsData from '../data/products.json'

import { Product } from '../interfaces/product.types'

export const getAllProducts = async():Promise<Product[]> =>{
    return productsData.products
}

export const getProductById = async(id:number):Promise<Product|undefined> =>{
    return productsData.products.find((product)=>product.id===id)
}