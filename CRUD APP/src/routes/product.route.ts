// import { Router } from "express";
// import { getProduct, getSingleProduct, searchProductByName } from "../controllers/product.controllers.js";




// const router = Router(); 

// router.get('/', getProduct) 
// router.get('/search',searchProductByName)
// router.get('/:id',getSingleProduct)

// export default router;

import { Router ,Request,Response} from "express";

const router= Router()

router.get('/route',(req:Request,res:Response)=>{
    res.status(202).json({
        success: true, 
        message: 'running form the route path'
    })
})

export default router