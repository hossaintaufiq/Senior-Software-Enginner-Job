// import { Router } from "express";
// import { getProduct, getSingleProduct, searchProductByName } from "../controllers/product.controllers.js";




// const router = Router(); 

// router.get('/', getProduct) 
// router.get('/search',searchProductByName)
// router.get('/:id',getSingleProduct)

// export default router;

import { Router } from "express";
import { routeTest } from "../controllers/product.controllers.js";

const router= Router()

router.get('/route',routeTest)

export default router