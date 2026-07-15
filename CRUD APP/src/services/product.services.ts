import products from '../data/products.json'  with {type: 'json'}
import { Product } from '../types/types.product.js'


// get all the product at a time 
export const getAllProducts = async (): Promise<Product[]> => {
    return products.products
}

// get Single product Searched by the id of the product 
export const getProductsById = async (id:number):Promise<Product|undefined> =>{
    return products.products.find((product)=>product.id===id);
}

// get single product search by the name of the product 
// returing an array of the same name at them same time . user build in functions filter and includes 

export const SearchProducts = async (title: string ): Promise<Product[]> =>{
    return products.products.filter(product=>product.title.toLowerCase().includes(title.toLowerCase())) 
}

export const createProduct= async(payload:Omit<Product,'id'>):Promise<Product>=>{
    const newProduct : Product = {
        id:products.products.length+1, 
        ...payload
    }
    products.products.push(newProduct)
    return newProduct
}


// patch or updating a product 
export const updateProduct = async (id:number, payload:Partial<Product>):Promise<Product|null> =>{
    const index= products.products.findIndex((product)=>product.id===id)

    if(index ===-1){
        return null
    }

    products.products[index]= {
        ...products.products[index], 
        ...payload,
    }

    return products.products[index]
}

// delete product using the delete http method 

export const deleteProduct=async(id:number):Promise <Product|null>=>{
    const index = products.products.findIndex((product)=>product.id===id)

    if(index===-1){
        return null 
    }
    const deletedProduct = products.products.splice(index,1)[0]

    return deletedProduct
}