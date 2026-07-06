"use client";
import Image from "next/image";
import { useState } from "react";

export default function FirebasePage() {
  const [count, setCount] = useState(0);
  return (
    <div>
      <h1 className="text-center p-2">Hooks Integration Page</h1>
      <p className="flex justify-center items-center flex-col py-2">
        This page is dedicated to hooks functionalities.
      </p>
      <div className="flex justify-center items-center mt-4">
        <Image
          src="/ReactHooks.png"
          alt="Hooks Image"
          width={500}
          height={300}
        />
      </div>

      <div className="flex justify-center items-center mt-4 gap-2">
        Counter:
        <button
          onClick={() => setCount(count + 1)}
          className="border bg-blue-400 p-2  rounded-2xl"
        >
          Click
        </button>
         <button
          onClick={() => setCount(0)}
          className="border bg-blue-400 p-2  rounded-2xl"
        >
          reset
        </button>
      </div>
      <div className=" items-center flex justify-center mt-4 ">
        <p className="
        border p-2 rounded
         bg-slate-400 w-30 h-30 
         flex justify-center 
         items-center
         font-2xl font-bold ">
          {count}
        </p>
      </div>
    </div>
  );
}
