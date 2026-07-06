import productsData from '../data/products.json'

import { Product } from '../interfaces/product.types'

export const getAllProducts = async():Promise<Product[]> =>{
    return productsData.products
}

export const getProductById = async(id:number):Promise<Product|undefined> =>{
    return productsData.products.find((product)=>product.id===id)
}

// this function is returning an array by the name of the search term 
export const searchProducts = async(searchTerm:string):Promise <Product[]> =>{
    return productsData.products.filter((product)=>product.title.toLowerCase().includes(searchTerm.toLowerCase()))
}