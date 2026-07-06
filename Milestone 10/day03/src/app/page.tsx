// import Image from "next/image";

import HookPractice from "./hookPractice/hookPractice";

// 'use client';
type post={
  userId:number;
  id:number;
  title:string;
  body:string;
}

export default async function Home() {

  const res= await fetch('http://localhost:3000/api/posts',{cache:'no-store'});
  const posts:post[]= await res.json(); 


  return (
    <div >
      <h1 className="flex justify-center items-center p4">This is day-03</h1>
      {
        posts.slice(0,2).map((post)=>(
          <div key={post.id} className="m-4 p-4 border-2 rounded-lg">
            <h2 className="font-bold text-xl">{post.title}</h2>
            <p>{post.body}</p>
          </div>
        ))
      }
      <div className="m-4 p-4 border-2 rounded-lg">
        <HookPractice/>
      </div>

      
    </div>
  );
}
