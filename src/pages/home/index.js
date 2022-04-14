import React from "react";
import "../../styles/home.css";

export default function Home() {
  return (
    <section className="home">
      <div className="relative pt-20 text-white sm:py-10">
        <div className="container grid px-4 pb-8 mx-auto md:grid-cols-3 md:px-10">
          <div className="relative z-10 col-span-2">
            <h1 className="pt-8 text-4xl font-light leading-none md:pt-16 md:text-6xl lg:text-7.25xl">
              <span className="text-transform-gradient">Better Data.</span>

              <div className="h-24 mt-6 md:mt-4 md:h-32">
                <div className="cubespinner">
                  <div className="face1">Better Model.</div>
                  <div className="face2">Faster Deployment.</div>
                  <div className="face3">Faster AI.</div>
                </div>
              </div>
            </h1>

            <p className="mb-10 text-sm leading-normal lg:pr-12 lg:mt-12 lg:text-lg lg:mb-14 md:text-base">
              Cypher's mission is to accelerate the development of AI
              applications by developing the highest-quality datasets because
              better data → better AI. Our annotation service includes audio,
              text, 2D image and 3D sensor data
            </p>

            <div className="flex flex-row flex-wrap items-center w-full">
              <div className="w-full mb-4 md:w-2/3 md:mb-0 md:pr-4">
                <form className="w-full">
                  <div className="md:flex md:items-center">
                    <div className="w-full text-sm lg:text-lg">
                      <input
                        className="w-full px-4 py-3 leading-tight text-white bg-gray-700 border border-gray-700 rounded-full appearance-none input-email focus:outline-none focus:border-white hover:border-white"
                        type="text"
                        placeholder="Join our community of 10,000+ taskers!"
                      />
                    </div>
                  </div>
                </form>
              </div>

              <div className="w-full text-center md:w-1/3 md:pl-4">
                <button className="inline-block p-px rounded-full cursor-pointer bg-gradient-x hover:bg-gradient-to-r from-white to-white group">
                  <span className="inline-block px-4 py-4 text-sm font-medium leading-3 tracking-wide text-white duration-200 bg-black rounded-full group-hover:text-black group-hover:bg-white lg:py-2 whitespace-nowrap transition-color lg:text-lg">
                    <a href="https://docs.google.com/forms/d/e/1FAIpQLSdoWWWm6WnBVnAvLOmNyv3Me-VgMayS_ifelXMUOmuKechEcA/viewform">
                      Get in Touch
                    </a>
                  </span>
                </button>
              </div>
            </div>
          </div>

          <div className="absolute inset-0 transform -translate-x-12 md:relative md:col-span-1 md:translate-x-0">
            <div className="gif absolute z-0 transform -translate-y-40 left-1/2 md:left-0 -translate-x-1/4  md:-translate-x-1/3 lg:-translate-x-96 w-full mt-[250px] md:mt-[150px] 2xl:w-[1000px] 2xl:h-[800px]  md:w-[540px] md:h-[480px] lg:w-[830px] lg:h-[610px] xl:w-[890px] xl:h-[745px]">
              <img
                className="w-full h-full max-w-[1000px] scale-160 md:scale-110"
                src="https://cdn.dribbble.com/users/2208826/screenshots/6801166/__8.gif"
                alt="background-gif"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
