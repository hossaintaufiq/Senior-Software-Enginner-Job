let user= [
    { id:1, name:'John Doe', email:'john.doe@example.com' }, 
    { id:2, name:'Jane Smith', email:'janesmith@gmail.com' }, 
    { id:3, name:'Bob Johnson', email:'bobjohnson@yahoo.com' }, 
    { id:4, name:'Alice Williams', email:'alicewilliams@hotmail.com' }, 
    { id:5, name:'Michael Brown', email:'michael.brown@outlook.com' },
]; 

exports.getUsers=(req,res)=>{
    res.json(user); 
}
exports.getUserById=(req,res)=>{
    const id = parseInt(req.params.id);
    const userData = user.find(u => u.id === id);
    if (!userData) {
        return res.status(404).json({ message: 'User not found' });
    }
    res.json(userData);
}
exports.createUser=(req,res)=>{
    const {name,email}= req.body
    const newUser={
        id:user.length+1,
        name:name,  
        email:email
    }
    user.push(newUser)
    res.status(201).json(newUser)
}