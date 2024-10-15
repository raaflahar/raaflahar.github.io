import "./Hero.css";

export default function Hero() {
  return (
    <section id="hero" className="pt-36 scroll-smooth">
      <div className="container">
        {/* Introduction */}
        <div className="flex flex-wrap items-center">
          <div className="w-full self-center px-4 lg:w-1/2">
            <h1 className="text-black text-base font-semibold md:text-xl lg:text-2xl">
              Hi there! I'm{" "}
              <span className="block font-block text-secondary text-3xl mt-1 lg:text-4xl">
                Aflah Agus Rizkika
              </span>
            </h1>
            <h2 className="font-medium text-secondary text-lg mb-5 lg:text-xl">
              Web Developer
            </h2>
            <p className="font-medium text-black mb-10">
              Whether it's crafting clean code or designing elegant solutions, I
              thrive on turning ideas into reality.
            </p>

            <a
              href="https://wa.me/+6282143957521"
              className="text-base font-semibold text-black bg-primary py-3 px-3 rounded-full hover:shadow-lg hover:bg-secondary hover:text-primary transition duration-500 ease-in-out"
            >
              Contact Me
            </a>
          </div>
          {/* Picture */}
          <div className="w-full self-end px-4 lg:w-1/2 lg:flex lg:justify-center">
            <div className="mt-10">
              <img
                src="public\img\aflah.png"
                alt="Aflah Agus Rizkika"
                className="max-w-[150px] mx-auto rounded-full shadow-lg border-4 border-primary hover:scale-110 transition-transform duration-500 ease-in-out hover:shadow-xl lg:max-w-[200px] hover:bg-secondary"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
