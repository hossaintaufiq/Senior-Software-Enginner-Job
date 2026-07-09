import products from '../data/products.json' with {type:'json'}; 
import  {Product } from '../types/types.product.js' 

export const getAllProducts = async(): Promise<Product[]>=>{
    return products.products
}
