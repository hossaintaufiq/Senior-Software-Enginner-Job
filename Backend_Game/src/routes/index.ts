import {Router} from 'express';

const router = Router() 

router.get('/', (req,res)=>{
    res.status(404).send('Hello backend!')
})

export default router ; 