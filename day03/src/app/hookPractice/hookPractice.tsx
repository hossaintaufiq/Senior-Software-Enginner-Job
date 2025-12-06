"use client"
import { useState } from "react"

export default function HookPractice() {
    const [count,setCount]=useState(0)
    return(
        <>

        <h1>lets do counting ={count}</h1>
        <button onClick={()=>setCount(count+1)} className="border border-amber-400 rounded-2xl bg-amber-300 p-2">count</button>
        <button className="border border-amber-600 bg-amber-600 text-white rounded-2xl p-2" onClick={()=>setCount(0)}>Reset</button>
        </>
    )
}