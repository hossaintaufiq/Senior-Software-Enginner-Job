import { NextFunction, Request, Response } from "express";

export const notFound = (req:Request, res:Response, next:NextFunction):void => {
    res.status(404).json({
        success: false , 
        statuscode: 404, 
        message: "Route not Found", 
        path: req.originalUrl, 
        method: req.method, 
        timestamp: new Date().toISOString
    })
}