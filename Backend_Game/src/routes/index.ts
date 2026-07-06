import {Router} from 'express';

const router = Router() 

router.get('/', (req,res)=>{
    res.status(202).json('products.json')
})

export default router ; 