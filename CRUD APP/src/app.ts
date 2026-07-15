
// import express, {Request,Response} from 'express'
// import productRoutes from './routes/product.route.js'

// const app = express(); 

// app.use(express.json()) 

// app.get('/', (req:Request, res:Response)=>{
//     res.status(200).json({
//         success: true, 
//         message: 'Backend is running Perfectly'
//     })
// })


// app.use('/products', productRoutes)

// export default app 


import express,{Request, Response} from 'express'
import router from './routes/product.route.js'


const app= express() 

// middleware
app.use(express.json())

app.get('/',(req:Request, res:Response)=>{
    res.status(200).json({
        success: true, 
        message: "running from the app "
    })
})
app.use(router)


export default app 