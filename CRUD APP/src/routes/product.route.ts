import { Router } from "express";
import { deleteSingleProduct, getProduct, getSingleProduct, insertProduct, searchProductByName, updateSingleProduct } from "../controllers/product.controllers.js";





const router = Router(); 

router.get('/', getProduct) 
router.get('/search',searchProductByName)
router.get('/:id',getSingleProduct)

router.post('/',insertProduct)
router.patch('/:id',updateSingleProduct)
router.delete('/:id', deleteSingleProduct)

export default router;

