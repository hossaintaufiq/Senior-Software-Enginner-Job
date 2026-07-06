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
    <h2 className="flex justify-center items-center font-bold mt-4">Site Comments</h2>
    <div>
        {posts.slice(0,5).map((post)=>(
            <div key={post.id} className="border p-4 m-2 rounded-2xl shadow bg-amber-200">
                <h3 className="font-bold text-lg ">{post.name}</h3>
                <p className="text-sm text-gray-600">Email:{post.email}</p>
                <p className="mt-2">{post.body}</p>
            </div>
        ))}
    </div>
  </>
}
