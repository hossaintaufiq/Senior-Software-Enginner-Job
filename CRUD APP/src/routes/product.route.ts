import { Router } from "express";
import { getProduct } from "../controllers/product.controllers.js";



const router = Router(); 

router.get('/', getProduct) 

export default router;