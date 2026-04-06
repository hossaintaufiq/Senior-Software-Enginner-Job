
// const { useState, useEffect } = require("react")
import { useState, useEffect } from "react"


function App() {
  const [user,setUser]=useState([])

useEffect(()=>{
  fetch('http://localhost:3000/users')
  .then((res)=>res.json())
  .then((data)=>setUser(data))
  .catch((err)=>console.log(err))
},[])

const haddleFormOnSubmit=(e)=>{
  e.preventDefault()
  const name= e.target[0].value
  const email= e.target[1].value

  const userData={
    name:name,
    email:email
  }

  // Here you would typically send the userData to your backend API
  // For example, using fetch or axios to make a POST request
  console.log(userData)
  // upto this is to show that the form data is being captured correctly

  // now sending the data to the backend API 
  fetch("http://localhost:3000/users",{
    method:"POST",
    headers:{
      "Content-Type":"application/json"
    },
    body:JSON.stringify(userData)
  })
  .then((res)=>res.json())
  .then((data)=>{
    console.log(data)
    // Optionally, you can update the user state to include the new user
    setUser([...user, data])
    e.target.reset() // Reset the form after submission
  })
  .catch((err)=>console.log(err))
}
  return (
    <>
  <div>User Data collection</div>
    <form onSubmit={haddleFormOnSubmit}>
      <input type="text" placeholder="Enter your name" />
      <input type="email" placeholder="Enter your email" />
      <button type="submit">Submit</button>
    </form>
      
      {
        user.map( (user)=>(
          <div key={user.id}>
              <h4>Id: {user.id}: {user.name}  &  Email: {user.email}</h4>
          </div>
        ))
      }
    </>
  )
}

export default App
