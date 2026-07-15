// custom asyncHandler 

import { NextFunction, Request, Response } from "express";

type AsyncController = (req:Request, res:Response, next: NextFunction)=>Promise<void> 


export const asyncHandler = (fn:AsyncController)=>{
    return (req:Request, res:Response, next:NextFunction):void => {
        Promise.resolve (fn(req, res, next)).catch(next)
    }
}
