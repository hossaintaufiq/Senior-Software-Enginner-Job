const express = require('express')
const app = express()
const port = 3000

// app.get('/', (req, res) => {
//   res.send('Hello World!')
// })

const products=[
    {
        id:1,
        name:'laptop',
        price: 50000,
        description:'Asus',
        location:'Dhaka'
    }, 
    {id:2,
        name:'mobile',
        price: 20000,
        description:'Samsung',
        location:'Dhaka'
    },
    {
        id:3,   
        name:'watch',
        price: 10000,
        description:'Rolex',
        location:'Dhaka'
    }
]

app.get('/hello',(req,res)=>{
    res.send('Hello from device laptop and others')
})

app.get('/hello2',(req,res)=>{
    res.send('Hello from device laptop and others')
})

app.get('/productList',(req,res)=>{
    const newProduct=req.body;
    products.push(newProduct); 
    res.status(201).json({
        message:'Product added successfully',
        product:newProduct
    });
    
})

app.get('/products',(req,res)=>{
    res.json(products);
})


// Dynamic route to get a product by id : 
app.get('/products/:id',(req,res)=>{    
    const id=parseInt(req.params.id);
    const product=products.find(p=>p.id===id);      
    if(product){
        res.json(product);
    }
    else{
        res.status(404).json({message:'Product not found'});
    }               
})


app.post('/products',(req,res)=>{
    const newProduct=req.body;


    products.push(newProduct);  

    res.status(201).json({
        message:'Product added successfully',
        product:newProduct
    });
})


app.put('/products/:id',(req,res)=>{
    const id = parseInt(req.params.id);
    const index= products.findIndex(p=>p.id===id); 

    if(index === -1){
        return res.status(404).json({message:'product not found in the list'}); 
    }

    products[index]=req.body; 

    res.json({
        message:'product updated successfully', 
        data: products[index]
    })
}
)


// app.delete('/products/:id', (req, res) => {
//   const id = req.params.id;

//   const index = products.findIndex(p => p.id == id);

//   if (index === -1) {
//     return res.status(404).json({ message: "Product not found" });
//   }

//   const deleted = products.splice(index, 1);

//   res.json({
//     message: "Deleted successfully",
//     data: deleted
//   });
// });

app.delete('/products/:id',(req,res)=>{
    const id = parseInt(req.params.id); 

    const index = products.findIndex(p=>p.id===id); 
    
    if(index===-1){
        return res.status(404).json({message: 'product not found in the list'}); 
    }

    const deleted = products.splice(index,1); 

    res.json({
        message: "deleted successfully ", 
        data : deleted 
    }); 

})



app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
