import "./Portfolio.css";

export default function Portfolio() {
  return (
    <section id="portfolio" className="pt-36 pb-32 bg-tertiary">
      <div className="container">
        <div className="w-full px-4">
          <div className="max-w-xl mx-auto text-center mb-16">
            <h4 className="section-title">
              Portfolio
            </h4>
            <h2 className="font-bold text-white text-lg mb-4 sm:text-xl lg:text-xl">
              Latest Project
            </h2>
            <p className="font-medium text-xs sm:text-sm lg:text-base text-white">
              This section describes latest project I created using Tech Stack
              mentioned before.
            </p>
          </div>
          <div className="w-full px-4 flex flex-wrap justify-center">
            <div id="portfolio-section" className="flex flex-col">
              <div className="flex flex-col sm:flex-col lg:flex-row mx-6 px-2">
                <div id="container" className="flex mx-4">
                  <div className="mb-12 p-4">
                    <div className="picture-container">
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
                    <h3 className="button-container">
                      <a
                        href="https://orwellian.vercel.app/"
                        target="_blank"
                        className="bg-primary rounded-full px-2 py-1 hover:bg-secondary transition ease-in-out duration-200"
                      >
                        Orwellian
                      </a>
                    </h3>
                    <p className="text-container">
                      Orwellian is an e-commerce platform that offers a wide range of classic literature books from renowned authors. The project was built using modern technologies, such as React and Tailwind CSS, to provide a responsive, interactive and aesthetically pleasing interface.
                    </p>
                  </div>
                </div>
                <div id="container" className="flex mx-4">
                  <div className="mb-12 p-4">
                    <div className="picture-container">
                      <a
                        href="https://masjid-al-hidayah-puri.vercel.app/"
                        target="_blank"
                        className=""
                      >
                        <img
                          src="./masjidalhidayah.png"
                          alt="Masjid Al-Hidayah"
                          className="w-full"
                        />
                      </a>
                    </div>
                    <h3 className="button-container">
                      <a
                        href="https://masjid-al-hidayah-puri.vercel.app/"
                        target="_blank"
                        className="bg-primary rounded-full px-2 py-1 hover:bg-secondary transition ease-in-out duration-200"
                      >
                        Masjid Al-Hidayah
                      </a>
                    </h3>
                    <p className="text-container">
                      Masjid Al-Hidayah is a mosque at Taman Puri Sartika, Sukorejo, Gunungpati. 
                      This website purpose is for infaq and event updates for village residents of Puri Sartika. The project was built using React and Tailwind CSS, additional features of this website is consume API for knowing nearest praying time.
                    </p>
                  </div>
                </div>
              </div>   
              <div
                id="button-more-portfolio"
                className="flex justify-center items-center"
              >
                <a
                  href="https://github.com/raaflahar"
                  target="_blank"
                  className="text-xs font-semibold text-black bg-primary py-2 px-2 rounded-full hover:shadow-lg hover:bg-secondary hover:text-primary transition duration-500 ease-in-out sm:text-sm lg:text-base lg:py-3 lg:px-3"
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
