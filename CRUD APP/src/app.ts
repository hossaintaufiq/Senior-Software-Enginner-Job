
import express, {Request,Response} from 'express'
import productRoutes from './routes/product.route.js'

const app = express(); 

app.use(express.json()) 

app.get('/', (req:Request, res:Response)=>{
    res.status(200).json({
        success: true, 
        message: 'Backend is running Perfectly'
    })
})


app.use('/products', productRoutes)

export default app 