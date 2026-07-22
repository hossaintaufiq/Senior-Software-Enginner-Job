// import express from 'express'
// import Express = require("express")
import express, { json, Router } from 'express'
import type { Request,Response } from 'express'
import { healthRouter } from './routes/health.js'
import { calculatorRouter } from './routes/calculator.js'

const app = express() 
const PORT = 5000 


app.get('/', (req:Request, res:Response)=>{
    res.send("ok")
})


app.use(healthRouter)
app.use(calculatorRouter)




app.listen(PORT, ()=>{
    console.log(`Example app runing app listening at http://localhost:${PORT}`)
})