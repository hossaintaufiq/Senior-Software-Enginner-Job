
import express, {Request,Response} from 'express'
import productRoutes from './routes/product.route.js'
import { globalErrorHandler } from './middlewares/globalErrorHandler.js';
import { notFound } from './middlewares/notFound.js';

const app = express(); 

app.use(express.json()) 

app.get('/', (req:Request, res:Response)=>{
    res.status(200).json({
        success: true, 
        message: 'Backend is running Perfectly'
    })
})


app.use('/products', productRoutes)

// 404 middleware 
app.use(notFound)

// global Error middleware should be always in the last 
// middleware order matters in express ts  
app.use(globalErrorHandler)

export default app 

