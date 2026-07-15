// import products from '../data/products.json'  with {type: 'json'}
// import { Product } from '../types/types.product.js'


// // get all the product at a time 
// export const getAllProducts = async (): Promise<Product[]> => {
//     return products.products
// }

// // get Single product Searched by the id of the product 
// export const getProductsById = async (id:number):Promise<Product|undefined> =>{
//     return products.products.find((product)=>product.id===id);
// }

// // get single product search by the name of the product 
// // returing an array of the same name at them same time . user build in functions filter and includes 

// export const SearchProducts = async (title: string ): Promise<Product[]> =>{
//     return products.products.filter(product=>product.title.toLowerCase().includes(title.toLowerCase())) 
// }