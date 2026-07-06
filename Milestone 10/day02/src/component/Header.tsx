"use client";

export default function Header({
  name,
  age,
  profession,
}: {
  name: string;
  age: number;
  profession: string;
}) {
 
  return (
    <header className="w-full bg-blue-600 text-white p-4 flex justify-between items-center ">
    
      {name} - {age}[age] - {profession}
      <h1 className="text-2xl font-bold">Day02 Header</h1>
    </header>
  );
}
