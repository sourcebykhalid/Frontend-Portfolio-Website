import React from "react";
import Reveal from "./Reveal";

function Tech() {
  return (
    <div id="technologies" className=" m-auto sm:w-2/3 w-4/5 sm:mt-24 pb-44 ">
      <Reveal>
        <div className="flex justify-center items-center w-full">
          <h2 className="text-3xl md:text-6xl text-neutral-300 font-bold w-fit ">
            TechStack
            <span className=" text-7xl font-extrabold text-lime-400">.</span>
          </h2>
          <hr className=" w-full border border-neutral-300 mr-8 mt-9" />
        </div>
      </Reveal>

      <div className="mt-10 w-full ">
        <Reveal>
          <div className=" flex justify-between font-bold mt-4">
            <h2 className=" font-bold text-sm text-neutral-300">
              FRONTEND DEVELOPMENT
            </h2>
            <p className="text-gray-500 mr-16 sm:mr-[20%]">Intermediate</p>
          </div>
          <span className="h-2 rounded-full w-4/5 bg-lime-400 block "></span>
          <div className=" flex justify-between font-bold mt-4">
            <h2 className=" font-bold text-sm text-neutral-300">REACT</h2>
            <p className="text-gray-500 mr-16 sm:mr-[20%]">Intermediate</p>
          </div>
        </Reveal>
        <span className="h-2 rounded-full w-4/5 bg-lime-400 block "></span>
        <Reveal>
          <div className=" flex justify-between font-bold mt-4">
            <h2 className=" font-bold text-sm text-neutral-300">JAVASCRIPT</h2>
            <p className="text-gray-500 mr-16  sm:mr-[20%]">Intermediate</p>
          </div>
          <span className="h-2 rounded-full w-4/5 bg-lime-400 block "></span>
          <div className=" flex justify-between font-bold mt-4">
            <h2 className=" font-bold text-sm ">REDUX</h2>
            <p className="text-gray-500 mr-[50%] sm:mr-[50%]">Beginner</p>
          </div>
        </Reveal>
        <span className="h-2 rounded-full w-[50%]  bg-lime-400 block"></span>
        <Reveal>
          <div className=" flex justify-between font-bold mt-4">
            <h2 className=" font-bold text-sm text-neutral-300">TAILWIND</h2>
            <p className="text-gray-500 mr-16 sm:mr-[20%]">Intermediate</p>
          </div>
          <span className="h-2 rounded-full w-4/5 bg-lime-400 block "></span>
          <div className=" flex justify-between font-bold mt-4">
            <h2 className=" font-bold text-sm text-neutral-300">CSS3</h2>
            <p className="text-gray-500 mr-16 sm:mr-[20%]">Intermediate</p>
          </div>
        </Reveal>
        <span className="h-2 rounded-full w-4/5 bg-lime-400 block "></span>
        <Reveal>
          <div className=" flex justify-between font-bold mt-4">
            <h2 className=" font-bold text-sm text-neutral-300">HTML5</h2>
            <p className="text-gray-500">Advanced</p>
          </div>
          <span className="h-2 rounded-full w-full bg-lime-400 block "></span>

          <div className=" flex justify-between font-bold mt-4">
            <h2 className=" font-bold text-sm text-neutral-300">
              RESPONSIVE DESIGN
            </h2>
            <p className="text-gray-500 mr-16 sm:mr-[20%]">Intermediate</p>
          </div>
        </Reveal>
        <span className="h-2 rounded-full w-4/5 bg-lime-400 block "></span>
        <Reveal>
          <div className=" flex justify-between font-bold mt-4">
            <h2 className=" font-bold text-sm ">MONGODB</h2>
            <p className="text-gray-500 mr-[50%] sm:mr-[50%]">Beginner</p>
          </div>
          <span className="h-2 rounded-full w-[50%]  bg-lime-400 block"></span>
          <div className=" flex justify-between font-bold mt-4">
            <h2 className=" font-bold text-sm text-neutral-300">
              GIT & GITHUB
            </h2>
            <p className="text-gray-500 mr-16 sm:mr-[20%]">Intermediate</p>
          </div>
        </Reveal>
        <span className="h-2 rounded-full w-4/5 bg-lime-400 block "></span>
      </div>
      <div className="flex flex-col justify-start mt-24">
        <div className="">
          <h1 className="text-2xl sm:text-3xl font-bold bg-gray-400 w-fit px-2 py-1 rounded-sm ml-2 sm:ml-8 shadow-md shadow-lime-500 text-gray-600">
            Additional Skills
          </h1>
        </div>

        <div className="grid sm:grid-cols-3  gap-6 mt-3">
          <Reveal>
            <div className="flex flex-row justify-start items-center">
              <span className=" bg-lime-400 rounded-full h-4 w-4 block mx-2"></span>
              <h3 className=" text-xl font-bold ">DSA</h3>
            </div>
            <div className="flex flex-row justify-start items-center">
              <span className=" bg-lime-400 rounded-full h-4 w-4 block mx-2"></span>
              <h3 className=" text-xl font-bold ">Debugging</h3>
            </div>
            <div className="flex flex-row justify-start items-center">
              <span className=" bg-lime-400 rounded-full h-4 w-4 block mx-2"></span>
              <h3 className=" text-xl font-bold ">Problem Solving</h3>
            </div>
          </Reveal>
          <Reveal>
            <div className="flex flex-row justify-start items-center">
              <span className=" bg-lime-400 rounded-full h-4 w-4 block mx-2"></span>
              <h3 className=" text-xl font-bold ">Communication</h3>
            </div>
            <div className="flex flex-row justify-start items-center">
              <span className=" bg-lime-400 rounded-full h-4 w-4 block mx-2"></span>
              <h3 className=" text-xl font-bold ">Team Work</h3>
            </div>
            <div className="flex flex-row justify-start items-center">
              <span className=" bg-lime-400 rounded-full h-4 w-4 block mx-2"></span>
              <h3 className=" text-xl font-bold ">Adaptability</h3>
            </div>
          </Reveal>
        </div>
      </div>
    </div>
  );
}

export default Tech;
