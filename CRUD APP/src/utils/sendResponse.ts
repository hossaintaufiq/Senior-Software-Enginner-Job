import { response, Response } from "express"

// declearing the type of the response 
type TResponse<T> = {
    statusCode : number ; 
    success: boolean; 
    message: string ; 
    data?:T; 
    meta?:object;
}

// send response function  using generics to take any kind of object or anything 
export const sendResponse = <T>(res:Response, payload:TResponse<T>)=>{
    return res.status(payload.statusCode).json({
        success:payload.success, 
        message: payload.message, 
        data:payload.data, 
        meta: payload.meta
    })
}