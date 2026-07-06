import {Router} from 'express';
import productRouter from './product.route'

const router = Router() 

router.get('/', (req,res)=>{
   res.status(200).json ({
  "success": true,
  "message": "Welcome to the Product Management API 🚀",
  "version": "1.0.0",
  "availableRoutes": [
    {
      "method": "GET",
      "endpoint": "/products",
      "description": "Get all products"
    },
    {
      "method": "GET",
      "endpoint": "/products/:id",
      "description": "Get product by ID"
    },
    {
      "method": "GET",
      "endpoint": "/products/search?q=phone",
      "description": "Search products"
    }
  ]
})
})

router.use('/products',productRouter)

export default router ; 