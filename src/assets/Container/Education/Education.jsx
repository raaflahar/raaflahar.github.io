import "./Education.css";

export default function Experience() {
  return (
    <section id="education" className="pt-36 pb-32 bg-tertiary">
      <div className="container">
        <div className="w-full px-4">
          <div className="max-w-xl mx-auto text-center mb-16">
            <h4 className="section-title">
              Education
            </h4>
            <p className="font-medium text-xs sm:text-sm lg:text-base text-white">
              This section shows my educational background before.
            </p>
          </div>
        </div>
        <div className="flex justify-center items-center">
          <div className="flex flex-wrap justify-center text-center lg:justify-normal lg:text-start">
            <img
              src="https://github.com/raaflahar/raaflahar.github.io/blob/main/src/assets/img/education/logo-unnes.png?raw=true"
              alt="Universitas Negeri Semarang"
              className="w-[100px] rounded-md sm:w-[125px] lg:w-[180px] lg:mx-3"
            />
            <div className="mt-2">
              <h3 className="font-bold text-white text-base sm:text-lg lg:text-xl">
                Universitas Negeri Semarang (UNNES)
              </h3>
              <h4 className="font-semibold text-white text-sm sm:text-base lg:text-lg mb-6">
                Aug 2020 - Sept 2024
              </h4>
              <p className="text-xs sm:text-sm lg:text-base text-white">
                Honors: Cumlaude (3.58/4.00)
              </p>
              <p className="text-xs sm:text-sm lg:text-base text-white">
                Experiences: Research Assistance at Physics Laboratory UNNES, Internship at Badan Riset dan Inovasi Nasional (BRIN)
              </p>
              <p className="text-xs sm:text-sm lg:text-base text-white">
                Achievement: 3rd Position at Essay Championship PIF XXXIII UNNES
              </p>
              <p className="text-xs sm:text-sm lg:text-base text-white">
                Certification:{" "}
                <a
                  href="https://drive.google.com/file/d/1Hi19ua6yI1rkh6xbA8p_-5Dpmky_9Cun/view?usp=sharing"
                  className="hover:text-primary"
                  target="_blank"
                >
                  TOEFL
                </a>{" "}
                (473)
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
