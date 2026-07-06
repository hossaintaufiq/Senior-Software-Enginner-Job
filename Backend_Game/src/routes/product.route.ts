import {Router} from 'express'
import *as productController from '../controllers/product.controller'

const router= Router()

router.get('/', productController.getAllProducts)

export default router; 