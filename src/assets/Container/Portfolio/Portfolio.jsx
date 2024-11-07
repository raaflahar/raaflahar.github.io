import "./Portfolio.css";

export default function Portfolio() {
  return (
    <section id="portfolio" className="pt-36 pb-32 bg-tertiary">
      <div className="container">
        <div className="w-full px-4">
          <div className="max-w-xl mx-auto text-center mb-16">
            <h4 className="font-semibold text-lg uppercase text-secondary mb-2">
              Portfolio
            </h4>
            <h2 className="font-bold text-white text-2xl mb-4">
              Latest Project
            </h2>
            <p className="font-medium text-md text-white">
              This section describes latest project I created using Tech Stack
              mentioned before.
            </p>
          </div>
          <div className="w-full px-4 flex flex-wrap justify-center xl:w-10/12 xl:mx-auto">
            <div id="portfolio-section" className="flex flex-col">
              <div id="container" className="flex mx-4">
                <div className="mb-12 p-4 md:w-1/2">
                  <div className="rounded-md shadow-md overflow-hidden hover:scale-90 transition ease-in-out duration-300">
                    <a
                      href="https://todolist-app-swart-seven.vercel.app/"
                      target="_blank"
                      className=""
                    >
                      <img
                        src="https://github.com/raaflahar/raaflahar.github.io/blob/main/src/assets/img/portfolio/1-todo-list-app.png?raw=true"
                        alt="To Do List"
                        className="w-full"
                      />
                    </a>
                  </div>
                  <h3 className="font-semibold text-xl text-black mt-5 mb-3 hover:text-primary transition ease-in-out duration-100">
                    <a
                      href="https://todolist-app-swart-seven.vercel.app/"
                      target="_blank"
                      className="bg-primary rounded-full px-2 py-1 hover:bg-secondary transition ease-in-out duration-200"
                    >
                      To-Do List
                    </a>
                  </h3>
                  <p className="font-base text-white text-md">
                    This project is a simple and intuitive To-Do List
                    application built using React.js. Users can add tasks with
                    due dates, mark tasks as complete or incomplete, and delete
                    tasks. The app also includes spam prevention by limiting
                    excessive repeated characters in task inputs.
                  </p>
                </div>
                <div className="mb-12 p-4 md:w-1/2">
                  <div className="rounded-md shadow-md overflow-hidden hover:scale-90 transition ease-in-out duration-300">
                    <a
                      href="https://orwellian.vercel.app/"
                      target="_blank"
                      className=""
                    >
                      <img
                        src="https://github.com/raaflahar/raaflahar.github.io/blob/main/src/assets/img/portfolio/3-orwellian.png?raw=true"
                        alt="Orwellian"
                        className="w-full"
                      />
                    </a>
                  </div>
                  <h3 className="font-semibold text-xl text-black mt-5 mb-3 hover:text-primary transition ease-in-out duration-100">
                    <a
                      href="https://orwellian.vercel.app/"
                      target="_blank"
                      className="bg-primary rounded-full px-2 py-1 hover:bg-secondary transition ease-in-out duration-200"
                    >
                      Orwellian
                    </a>
                  </h3>
                  <p className="font-base text-white text-md">
                    Orwellian is an e-commerce platform that offers a wide range
                    of classic literature books from renowned authors. The
                    project was built using modern technologies, such as React
                    and Tailwind CSS, to provide a responsive, interactive and
                    aesthetically pleasing interface.
                  </p>
                </div>
              </div>
              <div
                id="container"
                className="flex mx-4 justify-center items-center"
              >
                <div className="mb-12 p-4 md:w-1/2">
                  <div className="rounded-md shadow-md overflow-hidden hover:scale-90 transition ease-in-out duration-300">
                    <a
                      href="https://random-quote-generator-six-roan.vercel.app/"
                      target="_blank"
                      className=""
                    >
                      <img
                        src="https://github.com/raaflahar/raaflahar.github.io/blob/main/src/assets/img/portfolio/2-random-quote-generator.png?raw=true"
                        alt="Random Quote Generator"
                        className="w-full"
                      />
                    </a>
                  </div>
                  <h3 className="font-semibold text-xl text-black mt-5 mb-3 hover:text-primary transition ease-in-out duration-100">
                    <a
                      href="https://random-quote-generator-six-roan.vercel.app/"
                      target="_blank"
                      className="bg-primary rounded-full px-2 py-1 hover:bg-secondary transition ease-in-out duration-200"
                    >
                      Random Quote Generator
                    </a>
                  </h3>
                  <p className="font-base text-white text-md">
                    This project is a implementation of Restful API. Users may
                    generate random quote from many famous person in the world
                    using{" "}
                    <a
                      href="https://github.com/lukePeavey/quotable"
                      target="_blank"
                      className="hover:text-primary"
                    >
                      Quotable API
                    </a>{" "}
                    created by Luke Pavey.
                  </p>
                </div>
              </div>
              <div
                id="button-more-portfolio"
                className="flex justify-center items-center"
              >
                <a
                  href="https://github.com/raaflahar"
                  target="_blank"
                  className="text-base font-semibold text-black bg-primary py-3 px-3 rounded-full hover:shadow-lg hover:bg-secondary hover:text-primary transition duration-500 ease-in-out"
                >
                  More Portfolio
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
