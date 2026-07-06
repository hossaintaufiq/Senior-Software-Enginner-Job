import express from "express";
import router from './routes'

const app = express();

// Route 
// app.get("/",(req,res)=>{
//     res.status(404).send('Hello Backend!')
//     // res.json({
//     //     name:"Hossain Ahmmed Taufiq"
//     // })
// })

app.use(router)

export default app;