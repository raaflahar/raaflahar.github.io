export default function Blog() {
  return (
    <section id="blog" className="pt-36 pb-32 bg-white">
      <div className="container">
        <div className="w-full px-4 ">
          <div className="max-w-xl mx-auto text-center mb-6">
            <h4 className="font-semibold text-lg uppercase text-secondary mb-2">
              Blog
            </h4>
            <h2 className="font-bold text-black text-2xl mb-4">Latest Post</h2>
            <p className="font-medium text-md text-black">
              This section mentioned latest content I created on Medium.
            </p>
          </div>
          <div className="flex flex-wrap">
            <div className="w-full px-4 lg:w-1/2 xl:w-1/3">
              <a
                href="https://raaflahar.medium.com/richest-customer-wealth-leetcode-1672-js-php-solution-dc7d64ff0b13"
                target="_blank"
              >
                <div className="bg-grey rounded-xl shadow-lg overflow-hidden mb-10 hover:scale-110 transition ease-in-out duration-150">
                  <img
                    src="https://miro.medium.com/v2/resize:fit:828/format:webp/0*vBqQB5i_SjZmJg7G.png"
                    alt="Richest Customer Wealth"
                  />
                  <div className="py-8 px-6">
                    <h3 className="font-bold text-xl mb-2 truncate">
                      Richest Customer Wealth
                    </h3>
                    <p className="text-medium mb-3">
                      Richest Customer Wealth is one of “easy” problem to deal
                      with if you want to start learning Data & Structure
                      Algorithm.
                    </p>
                    <a
                      href="https://medium.com/@raaflahar/richest-customer-wealth-leetcode-1672-js-php-solution-dc7d64ff0b13"
                      target="_blank"
                      className="underline"
                    >
                      Read more ...
                    </a>
                  </div>
                </div>
              </a>
            </div>
            <div className="w-full px-4 lg:w-1/2 xl:w-1/3">
              <a
                href="https://medium.com/@raaflahar/ph-4502c-sensor-diymore-how-to-use-and-calibrate-using-arduino-uno-r3-3afc2b96631"
                target="_blank"
              >
                <div className="bg-grey rounded-xl shadow-lg overflow-hidden mb-10 hover:scale-110 transition ease-in-out duration-150">
                  <img
                    src="https://miro.medium.com/v2/resize:fit:828/format:webp/1*p5vGoZ0XDH9lQ0Qbg23XRA.png"
                    alt="Richest Customer Wealth"
                  />
                  <div className="py-8 px-6">
                    <h3 className="font-bold text-xl mb-2 truncate">
                      PH-4502C Sensor
                    </h3>
                    <p className="text-medium mb-3">
                      Lately, I made a college project, which is to make a pH
                      sensor that used to measure the amount of pH in a
                      solution.
                    </p>
                    <a
                      href="https://medium.com/@raaflahar/ph-4502c-sensor-diymore-how-to-use-and-calibrate-using-arduino-uno-r3-3afc2b96631"
                      target="_blank"
                      className="underline"
                    >
                      Read more ...
                    </a>
                  </div>
                </div>
              </a>
            </div>
            <div className="w-full px-4 lg:w-1/2 xl:w-1/3">
              <a
                href="https://medium.com/@raaflahar/registration-form-cf8c94c2fa74"
                target="_blank"
              >
                <div className="bg-grey rounded-xl shadow-lg overflow-hidden mb-10 hover:scale-110 transition ease-in-out duration-150">
                  <img
                    src="https://miro.medium.com/v2/resize:fit:828/format:webp/0*4Sc2pTEfdIBWWwdI.png"
                    alt="Richest Customer Wealth"
                  />
                  <div className="py-8 px-6">
                    <h3 className="font-bold text-xl mb-2 truncate">
                      Registration Form
                    </h3>
                    <p className="text-medium mb-3">
                      Creating projects is one of the real ways to learn. Even
                      better, it's train us just like doing gym.
                    </p>
                    <a
                      href="https://medium.com/@raaflahar/registration-form-cf8c94c2fa74"
                      target="_blank"
                      className="underline"
                    >
                      Read more ...
                    </a>
                  </div>
                </div>
              </a>
            </div>
            <div className="w-full flex justify-center items-center mt-6">
              <a
                href="https://medium.com/@raaflahar"
                target="_blank"
                className="text-base font-semibold text-black bg-primary py-3 px-3 rounded-full hover:shadow-lg hover:bg-secondary hover:text-primary transition duration-500 ease-in-out"
              >
                More Article
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
