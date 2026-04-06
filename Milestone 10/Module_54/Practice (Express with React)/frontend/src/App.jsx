
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

  return (
    <>
      <div>User Data</div>
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
