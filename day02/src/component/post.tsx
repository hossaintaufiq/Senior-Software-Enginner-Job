type post={
  id:number; 
  name:string;
  email:string; 
  body:string; 
}
export default async function Posts() {
const res=await fetch('https://jsonplaceholder.typicode.com/comments'); 
const posts :post[]= await res.json(); 
// const posts:post[]=data;
  return <>
    <h2>Site posts</h2>
    <div>
        {posts.map((post)=>(
            <div key={post.id} className="border p-4 my-4 rounded shadow">
                <h3 className="font-bold text-lg text-amber-300">{post.name}</h3>
                <p className="text-sm text-gray-600">Email:{post.email}</p>
                <p className="mt-2">{post.body}</p>
            </div>
        ))}
    </div>
  </>
}
