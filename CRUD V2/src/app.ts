// import express from 'express'
// import Express = require("express")
import express, { json } from 'express'
import type { Request,Response } from 'express'

const app = express() 
const PORT = 5000 

app.get('/', (req:Request,res:Response)=>{
    res.status(200).json({
        success: true, 
        message: "Server is running"
    })
})

app.get('/:id', (req:Request, res:Response)=>{
    console.log(`Query parameter : ${JSON.stringify(req.query)}`)
    console.log(`Headers : ${JSON.stringify(req.headers)}`)
    console.log(`Method: ${req.method}`)
    res.status(202).header('x-custom-header').send(`Hello ${req.params.id}`)
})

app.listen(PORT, ()=>{
    console.log(`Example app runing app listening at http://localhost:${PORT}`)
})