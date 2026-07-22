import  { Router} from "express";
import type { Request, Response} from "express";

export const calculatorRouter = Router(); 



calculatorRouter.get('/calculator', (req:Request,res:Response)=>{
    res.status(200).json({
        success: true, 
        message: "Server is running"
    })
})

calculatorRouter.get('/calculator/:id', (req:Request, res:Response)=>{
    console.log(`Query parameter : ${JSON.stringify(req.query)}`)
    console.log(`Headers : ${JSON.stringify(req.headers)}`)
    console.log(`Method: ${req.method}`)
    res.status(202).header('x-custom-header').send(`Hello ${req.params.id}`)
})