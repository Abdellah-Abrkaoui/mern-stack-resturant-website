// eslint-disable-next-line no-unused-vars
import React from "react";

function Hero() {
  return (
    <div className="px-5 xl:px-10 md:w-1/2 mb-10 flex flex-col gap-5 items-center justify-center text-center">
      <h1 className="font-bold text-6xl xl:text-5xl mt-6">
        REAL FOOD FOR REAL <span className="text-orange-400">LIFE</span>
      </h1>
      <p className="font-medium capitalize text-[17px] mb-10">
        Feel free to choose the one that best aligns with the mission and style
        of Veggify!
      </p>
      <form action="/search">
        <div className="mt-6 flex w-full gap-x-4">
          <label htmlFor="email-address" className="sr-only">
            Email address
          </label>
          <input
            id="search"
            name="query"
            type="search"
            placeholder="Search for a recepie"
            className="min-w-0 w-96 flex-auto rounded-md border bg-white/5 px-3.5 py-2 text-secondary shadow-sm ring-1 ring-inset ring-white/10 sm:text-sm sm:leading-6 outline-none"
          />
        </div>
      </form>
    </div>
  );
}

export default Hero;
