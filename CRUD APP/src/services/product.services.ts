import products from '../data/products.json' with {type:'json'}; 
import  {Product } from '../types/types.product.js' 

export const getAllProducts = (): Product[]=>{
    return products as Product[] 
}
