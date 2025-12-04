"use client";

export default function Header({name, age, profession}: {name: string; age: number; profession: string}) {
    // const name= "Hossain Ahmmed Taufiq"
  return (
    <header className="w-full bg-blue-600 text-white p-4" >
        {/* {name} */}
        {name} - {age} - {profession}
      <h1 className="text-2xl font-bold">My Application Header</h1>
    </header>
  );
}