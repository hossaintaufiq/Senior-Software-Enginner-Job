import {Router} from 'express';

const router = Router() 

router.get('/', (req,res)=>{
    res.status(202).send('Hello Backend!')
})

export default router ; 