import express , {Request,Response} from 'express' 

const app = express()

//  middleware 
app.use(express.json())


app.use('/',(req:Request, res:Response)=>{
    res.status(200).json({
        success:true, 
        message: `welcome to backend Server `

    })
})

export default app 