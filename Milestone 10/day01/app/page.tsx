import Hero from "./components/hero";
import WhatWeDo from "./components/whatWeDo";


export default function Home() {
  return (
    <>
    <Hero/>
    <WhatWeDo/>
    <h1 className="p-4">This is the home page</h1>
    </>
  );
}
