import React from "react";
//logo
import logo from '../../photos/logo.png'
function Hero() {
  return (<>

    



    <main className="h-screen w-screen bg-cover bg-no-repeat bg-center bg-hero flex items-center justify-center">
      <div className="bg-black/50 absolute top-0 w-screen h-screen"></div>
      <div className="hero--text  flex flex-col items-center text-center z-10">
        <p className="text-white lg:text-4xl font-second">
          {" "}
          welcome to our delicious Burger
        </p>
        <h1 className="text-white text-6xl font-primer uppercase font-bold mt-6">
          behind the dishes
        </h1>
        <p className="text-[#E8EFCF] text-xl font-primer w-3/5 mt-6 opacity-75">
        In order to live a long life, you must first fill your stomach
        </p>
        <button
  class="overflow-hidden relative w-32 p-2 h-12 bg-black text-white border-none rounded-md text-xl font-bold cursor-pointer relative z-10 group mt-10"
>
  click to info
  <span
    class="absolute w-36 h-32 -top-8 -left-2 bg-green-200 rounded-full transform scale-x-0 group-hover:scale-x-100 transition-transform group-hover:duration-500 duration-1000 origin-bottom"
  ></span>
  <span
    class="absolute w-36 h-32 -top-8 -left-2 bg-green-400 rounded-full transform scale-x-0 group-hover:scale-x-100 transition-transform group-hover:duration-700 duration-700 origin-bottom"
  ></span>
  <span
    class="absolute w-36 h-32 -top-8 -left-2 bg-green-600 rounded-full transform scale-x-0 group-hover:scale-x-100 transition-transform group-hover:duration-1000 duration-500 origin-bottom"
  ></span>
  <span
    class="group-hover:opacity-100 group-hover:duration-1000 duration-100 opacity-0 absolute top-2.5 left-6 z-10"
    >Visit US!</span
  >
</button>

      </div>
    </main>
  </>);
}

export default Hero;
