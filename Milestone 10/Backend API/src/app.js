// const express = require('express');
// const app = express();

// app.use(express.json());

// const productRoutes = require('./routes/product.routes');

// app.use('/products', productRoutes);

// module.exports = app;


const express = require('express '); 

const app = express(); 

app.use(express.json()); 

const productRoutes = require('./routes/product.route'); 
app.use('/products',productsRoutes); 
module.exports= app; 