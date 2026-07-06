import Link from "next/link";
export default function Home() {
  return (
    <div className="p-4">
      <h1 className="text-center p-2 bg-amber-300">Day 04 starting</h1>
      <p className="flex justify-center items-center flex-col py-2">
        Goals Today
      </p>
      <ul className="flex flex-col gap-4 justify-center items-center">
        <li > 
          <button className="border border-amber-500 bg-amber-300 p-2 rounded-2xl " >
            <Link href="/Hooks">Hooks</Link>
          </button>
          
        </li>

        <li > 
          <button className="border border-amber-500 bg-amber-300 p-2 rounded-2xl " >
            <Link href="/NextAuth">NextAuth</Link>
          </button>
          
        </li>
        <li > 
          <button className="border border-amber-500 bg-amber-300 p-2 rounded-2xl " >
            <Link href="/Firebase">Firebase</Link>
          </button>
          
        </li>
        <li > 
          <button className="border border-amber-500 bg-amber-300 p-2 rounded-2xl " >
            <Link href="/JWT">JWT</Link>
          </button>
          
        </li>
        
       
        
      </ul>
    </div>
  );
}
