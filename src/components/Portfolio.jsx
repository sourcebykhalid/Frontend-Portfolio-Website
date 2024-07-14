import React from "react";
import KeyMason from "../assets/KeyMason.png";
import DevFolio from "../assets/devfolio.png";
import TaskTrek from "../assets/tasktrek.png";
import Weather from "../assets/weather.png";
import Reveal from "./Reveal";

function Portfolio() {
  return (
    <div
      id="portfolio"
      className={`container m-auto sm:w-3/4 mt-12 sm:mt-16 sm:mb-16  transition-transform duration-800 ease-in-out`}
    >
      <Reveal>
        <div className="flex justify-center items-center w-full mb-3">
          <hr className=" w-full border border-neutral-300  ml-8" />
          <h2 className="md:text-7xl text-3xl font-bold  mr-8  w-fit mb-9 ">
            Projects
            <span className=" text-7xl font-extrabold text-lime-400">.</span>
          </h2>
        </div>
      </Reveal>

      <div className="grid sm:grid-cols-2 px-5 gap-10 ">
        <Reveal>
          <div className=" hover:shadow-md duration-500 hover:cursor-pointer    p-5">
            <div className=" p-12 pb-0 rounded-md bg-neutral-800 overflow-hidden">
              <img
                src={KeyMason}
                alt=""
                className=" hover:cursor-pointer hover:rotate-6  "
              />
            </div>
            <h3 className="text-lg font-semibold mt-5">
              KeyMason: A Password Generator App
            </h3>
            <p className="text-gray-400 text-sm mt-2">
              A random password generator app to secure your data, accounts etc
            </p>
            <div className="flex justify-evenly mt-8">
              <button className="px-3 sm:px-6 py-2 bg-gradient-to-t from-lime-400 to-cyan-400 hover:text-black duration-200 hover:opacity-50  rounded-full">
                <a href="https://keymason.netlify.app/" target="blank">
                  Live Preview
                </a>
              </button>
              <button className="sm:px-6 px-3 py-2 border rounded-full hover:border-red-500">
                <a
                  href="https://github.com/sourcebykhalid/KeyMason-A-Password-Generator-App"
                  target="blank"
                >
                  Checkout Github
                </a>
              </button>
            </div>
          </div>
          <div className="hover:shadow-md duration-500 hover:cursor-pointer    p-5">
            <div className=" p-12 pb-0 rounded-md bg-neutral-800 overflow-hidden">
              {" "}
              <img
                src={DevFolio}
                alt=""
                className=" hover:cursor-pointer hover:rotate-6  "
              />
            </div>
            <h3 className="text-lg font-semibold mt-5">
              DevFolio: A Personal Portfolio Website
            </h3>
            <p className="text-gray-400 text-sm mt-2">
              A Personal portfolio website giving my introduction. Embarking on
              a journey of continuous improvement, this React-powered portfolio
              serves as my canvas for honing web development skills. Stay tuned
              as I refine and enhance its design and functionality.
            </p>
            <div className="flex justify-evenly mt-3">
              <button className="px-3 sm:px-6 py-2 bg-gradient-to-t from-lime-400 to-cyan-400 hover:text-black duration-200 hover:opacity-50 rounded-full">
                <a href="https://devfoliobykhalid.netlify.app/" target="blank">
                  Live Preview
                </a>
              </button>
              <button className="sm:px-6 px-3 py-2 border rounded-full hover:border-red-500">
                <a
                  href="https://github.com/sourcebykhalid/KeyMason-A-Password-Generator-App"
                  target="blank"
                >
                  Checkout Github
                </a>
              </button>
            </div>
          </div>
        </Reveal>
        <Reveal>
          <div className="hover:shadow-md duration-500 hover:cursor-pointer    p-5">
            <div className=" p-12 pb-0 rounded-md bg-neutral-800 overflow-hidden">
              {" "}
              <img
                src={TaskTrek}
                alt=""
                className=" hover:cursor-pointer hover:rotate-6  "
              />
            </div>
            <h3 className="text-lg font-semibold mt-5">
              TaskTrek: A basic Task tracking app
            </h3>
            <p className="text-gray-400 text-sm mt-2">
              A Personal portfolio website giving my introduction to people,
              showcasing my skills, and presenting my endeavours which i have
              achieved so far.
            </p>
            <div className="flex justify-evenly mt-3">
              <button className="px-3 sm:px-6 py-2 bg-gradient-to-t from-lime-400 to-cyan-400 hover:text-black duration-200 hover:opacity-50 rounded-full">
                <a href="https://tasktrekk.netlify.app/" target="blank">
                  Live Preview
                </a>
              </button>
              <button className="sm:px-6 px-3 py-2 border rounded-full hover:border-red-500">
                <a
                  href="https://github.com/sourcebykhalid/OIBSIP/tree/main/TaskTrek"
                  target="blank"
                >
                  Checkout Github
                </a>
              </button>
            </div>
          </div>
          <div className="hover:shadow-md duration-500 hover:cursor-pointer    p-5">
            <div className=" p-12 pb-0 rounded-md bg-neutral-800 overflow-hidden">
              <img
                src={Weather}
                alt=""
                className=" hover:cursor-pointer hover:rotate-6  "
              />
            </div>
            <h3 className="text-lg font-semibold mt-5">
              Weather Sphere: A Weather forcasting app.
            </h3>
            <p className="text-gray-400 text-sm mt-2">
              Stay informed with real-time weather updates and forecasts with
              our intuitive weather app
            </p>
            <div className="flex justify-evenly mt-8">
              <button className="px-3 sm:px-6 py-2 bg-gradient-to-t from-lime-400 to-cyan-400 hover:text-black duration-200 hover:opacity-50 rounded-full">
                <a href="https://weather-sphere-two.vercel.app/" target="blank">
                  Live Preview
                </a>
              </button>
              <button className="sm:px-6 px-3 py-2 border rounded-full hover:border-red-500">
                <a
                  href="https://github.com/sourcebykhalid/weather-sphere/tree/master"
                  target="blank"
                >
                  Checkout Github
                </a>
              </button>
            </div>
          </div>
        </Reveal>
      </div>
    </div>
  );
}

export default Portfolio;
