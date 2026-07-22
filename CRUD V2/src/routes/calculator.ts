import  { Router} from "express";
import type { Request, Response} from "express";

export const calculatorRouter = Router(); 



calculatorRouter.get('/calculator', (req:Request,res:Response)=>{
    res.status(200).json({
        success: true, 
        message: "Server is running", 
        data: [{id: 1, result:1},
            {id:2, result: 2}, 
        ]
    })
})

calculatorRouter.get('/calculator/:id', (req:Request, res:Response)=>{
    // console.log(`Query parameter : ${JSON.stringify(req.query)}`)
    // console.log(`Headers : ${JSON.stringify(req.headers)}`)
    // console.log(`Method: ${req.method}`)
    res.status(202).header('x-custom-header').send(
        {message: `Get calculator by id `,
          id: req.params.id, 
          result: 1,  
            
        }, 

    )
})