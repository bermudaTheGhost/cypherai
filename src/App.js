import "./App.css";
import logo from "./logo.svg";

function App() {
  return (
    <div className="w-full px-4 bg-black h-screen text-white">
      <header className="bg-transparent text-white w-full border-b border-gray-500">
        <img src={logo} className="w-56 h-20" alt="logo" />
      </header>

      <section className="relative pt-0 text-white md:pb-8 sm:py-10 sm:h-3/4 ">
        <div className="container grid md:grid-cols-3 mx-auto">
          <div className="relative z-10 col-span-2">
            <h1 className="pt-8 text-6xl font-light leading-none md:pt-16 lg:text-8xl font-aeonik">
              <span className="text-transform-gradient">Better Data.</span>

              <div className="h-24 mt-6 md:mt-4 md:h-32">
                <div className="cubespinner">
                  <div class="face1">Better Model.</div>
                  <div class="face2">Faster Deployment.</div>
                  <div class="face3">Faster AI.</div>
                </div>
              </div>
            </h1>

            <p className="mb-10 text-base leading-normal lg:pr-12 lg:mt-12 lg:text-lg md:w-11/12 lg:mb-14">
              Cypher's mission is to accelerate the development of AI
              applications by developing the highest-quality datasets because
              better data → better AI. Our annotation service includes audio,
              text, 2D image and 3D sensor data
            </p>

            <div className="w-full md:flex-row">
              <div className="relative lg:flex w-full items-center block">
                <div
                  className="simple-form_will__change__3oMEj absolute inset-0"
                  style={{
                    opacity: 0,
                    transform:
                      "perspective(600px) rotateX(0deg) rotateX(180deg)",
                  }}
                ></div>

                <div
                  className="simple-form_will__change__3oMEj w-full"
                  style={{
                    opacity: 1,
                    transform: "perspective(600px) rotateX(0deg)",
                  }}
                >
                  <div className="flex flex-row flex-wrap items-center w-3/4">
                    <div className="w-full mb-4 lg:w-2/3 lg:mb-0">
                      <form class="w-full max-w-sm">
                        <div class="md:flex md:items-center">
                          <div class="w-full">
                            <input
                              className="bg-gray-700 border border-gray-700 appearance-none rounded-full w-full py-3 px-4 text-white leading-tight focus:outline-none focus:border-white hover:border-white"
                              id="inline-full-name"
                              type="text"
                              placeholder="Enter your work email"
                            />
                          </div>
                        </div>
                      </form>
                    </div>

                    <div className="w-full lg:w-1/3 flex justify-center">
                      <button className="bg-gradient-x hover:bg-gradient-to-r from-white to-white inline-block rounded-full p-px group cursor-pointer">
                        <span className="text-white bg-black group-hover:text-black group-hover:bg-white text-base font-medium tracking-wide px-6 py-4 leading-4 inline-block rounded-full whitespace-nowrap transition-color duration-200">
                          Get in Touch
                        </span>
                      </button>
                    </div>
                  </div>

                  <p></p>
                </div>
              </div>
            </div>
          </div>

          <div className="absolute inset-0 transform -translate-x-12 md:relative md:col-span-1 md:translate-x-0">
            <div className="absolute z-0 transform -translate-y-40 left-1/2 md:left-0 -translate-x-2/4 md:-translate-x-96 w-full mt-[200px] 2xl:w-[1000px] 2xl:h-[800px] md:mt-[150px] md:w-[645px] md:h-[580px] lg:w-[730px] lg:h-[675px] xl:w-[890px] xl:h-[745px]">
              <img
                className="w-full h-full max-w-[1000px]"
                src="https://cdn.dribbble.com/users/2208826/screenshots/6801166/__8.gif"
                alt="background-gif"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;
