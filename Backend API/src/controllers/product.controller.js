let products = [
  { id:1, name:'laptop', price:50000 },
  { id:2, name:'mobile', price:20000 }
];


// Get all products 
// exports.getProducts = (req,res)=>{
//   res.json(products);
// };

exports.getProducts = ()=>{
  res.json(products); 
}




// get product by id 
// exports.getProductById = (req,res)=>{
//   const id = parseInt(req.params.id);
//   const product = products.find(p=>p.id===id);

//   if(!product){
//     return res.status(404).json({message:'Not found'});
//   }

//   res.json(product);
// };


exports.getProductsById= (req,res)=>{
  const id = parseInt(req.params.id); 

  const product = products.find(p=>p.id ===id); //find product by the search id 

  if(!product){
    return res.status(404).json({message: 'Product not found '})
  }

  res.json(product)
}

// create new product 
exports.createProduct = (req,res)=>{
  const newProduct = {
    id: products.length + 1,
    ...req.body
  };

  products.push(newProduct);

  res.status(201).json(newProduct);
};


// Update product by id 
exports.updateProduct = (req,res)=>{
  const id = parseInt(req.params.id);
  const index = products.findIndex(p=>p.id===id);

  if(index === -1){
    return res.status(404).json({message:'Not found'});
  }

  products[index] = {
    ...products[index],
    ...req.body
  };

  res.json(products[index]);
};


// Delete product by id  
exports.deleteProduct = (req,res)=>{
  const id = parseInt(req.params.id);
  const index = products.findIndex(p=>p.id===id);

  if(index === -1){
    return res.status(404).json({message:'Not found'});
  }

  const deleted = products.splice(index,1);

  res.json(deleted);
};