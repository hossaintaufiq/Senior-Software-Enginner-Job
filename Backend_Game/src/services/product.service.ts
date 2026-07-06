import productsData from '../data/products.json'

import { Product } from '../interfaces/product.types'

export const getAllProducts = async():Promise<Product[]> =>{
    return productsData.products
}