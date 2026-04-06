import { useEffect, useState } from "react";

interface User {
  id: number;
  name: string;
  email: string;
  event?: React.FormEvent<HTMLFormElement>;
}

export function Welcome() {
  const [users, setUsers] = useState<User[]>([]);

  useEffect(() => {
    fetch("http://localhost:3000/users")
      .then((res) => res.json())
      .then((data) => setUsers(data));
  }, []);

  const handleFormSubmit = event => {
    event.preventDefault();
    const formData = event.target; 
    const name= formData.name.value; 
    const email= formData.email.value; 
    const userData = { name, email };

    console.log(userData); 
    fetch("http://localhost:3000/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userData),
    })
    .then((res) => res.json())
    .then((newUser) => {
      formData.reset();
      setUsers([...users, newUser]);
    });


  }

  return (
    <>
      users Authentication System
      <h3>Numbers of Users: {users.length}</h3>

      <h1>displying form </h1>

      <form onSubmit={handleFormSubmit}>
        Name:
        <input type="text" name="name" id="" placeholder="Name" className="border-2 border-gray-300 rounded-md p-2" />
        <br />
        Email:
        <input type="email" name="email" id="" placeholder="Email" className="border-2 border-gray-300 rounded-md p-2" />
        <br />
        <button type="submit">submit User</button>
      </form>

      <div>
        {users.map((user) => (
          <div key={user.id}>
            <p>User Information</p>
            <p>ID: {user.id} - Name: {user.name} - Email: {user.email}</p>
          </div>
        ))}
      </div>
    </>
  );
}


