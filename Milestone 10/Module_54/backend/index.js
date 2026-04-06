const express = require('express'); 
const cors = require('cors');
const app= express(); 
const port = process.env.PORT || 3000; 

app.use(cors()); // Enable CORS for all routes
app.use(express.json()); // Middleware to parse JSON bodies


const users= [
    {id:1, name:'Alice', email:'alice@example.com'}, 
    {id:2, name:'Bob', email:'bob@gmail.com'},
    {id:3, name:'Charlie', email:'charlie@example.com'}, 

]

app.get('/', (req, res) => {
    res.send('User Management Server is running');
    
});

app.get('/users', (req,res)=>{
    res.json(users); 
})
app.post('/users', (req,res)=>{
    res.json({message: 'Post api is working fine'})
    console.log('Request body:', req.body);

    const newUser= {
        id: users.length + 1, 
        name: req.body.name,
        email: req.body.email
    }
    users.push(newUser);
    res.status(201).json(newUser);
})

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});