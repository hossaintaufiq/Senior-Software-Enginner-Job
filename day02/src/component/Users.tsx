
type user = {
  id: number;
  name: string;
  email: string;
  phone: string;
  website: string;
  address: {
    street: string;
    city: string;
  };
  company: {
    name: string;
    catchPhrase: string;
  };
};

export default async function Users() {
    const res = await fetch('https://jsonplaceholder.typicode.com/users');
    const data: user[] = await res.json(); 
    // console.log(data);
    
    
    return <>
    <h1 className="flex justify-center items-center font-bold mt-4">Users</h1>
    {
        data.map((user)=>(
            <div key={user.id} className="border border-amber-600 p-2 ">
                <h2 className="font-bold">Name: {user.name}</h2>
                <p>Email:{user.email}</p>
                <p>Phone: {user.phone}</p>
                <p>Website: {user.website}</p>
                <p>Address: {user.address.street}, {user.address.city}</p>
                <p>Company: {user.company.name} <span>Company Type:{user.company.catchPhrase}</span></p>

            </div>
        ))
    }
    </>
}