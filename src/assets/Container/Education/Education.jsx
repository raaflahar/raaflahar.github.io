import "../Education/Education.css";

export default function Experience() {
  return (
    <section id="education" className="pt-36 pb-32 bg-tertiary">
      <div className="container">
        <div className="w-full px-4">
          <div className="max-w-xl mx-auto text-center mb-16">
            <h4 className="font-semibold text-lg uppercase text-secondary mb-2">
              Education
            </h4>
            <p className="font-medium text-md text-white">
              This section shows my education before.
            </p>
          </div>
        </div>
        <div className="flex justify-center items-center">
          <div className="flex flex-wrap sm:justify-center sm:text-center md:justify-normal md:text-start">
            <img
              src="src\assets\img\education\logo-unnes.png"
              alt="Universitas Negeri Semarang"
              className="w-[125px] rounded-md lg:w-[150px] lg:mx-3"
            />
            <div className="mt-2">
              <h3 className="text-bold text-white text-xl">
                Universitas Negeri Semarang (UNNES)
              </h3>
              <h4 className="text-semibold text-white text-md lg:text-lg mb-6">
                Aug 2020 - Sept 2024
              </h4>
              <p className="text-base text-white">
                Honors: Cumlaude (3.57/4.00)
              </p>
              <p className="text-base text-white">
                Experiences: Research Assistance at Physics Laboratory UNNES,
                Internship at Badan Riset dan Inovasi Nasional (BRIN)
              </p>
              <p className="text-base text-white">
                Achievement: 3rd Position at Essay Championship PIF XXXIII UNNES
              </p>
              <p className="text-base text-white">
                Certification:{" "}
                <a
                  href="https://drive.google.com/file/d/183JzDBixU9kyHUAMroBQn8ULcb_jccZi/view"
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
