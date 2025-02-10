import { useRef } from "react";
import emailjs from "@emailjs/browser";

export default function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_oyyvlzs", "template_shrpt7z", form.current, {
        publicKey: "mD8yZnql9K9nCczGG",
      })
      .then(
        () => {
          alert("Message sent successfully!");
        },
        (error) => {
          alert("Failed to sent message", error.text);
        }
      );
  };
  return (
    <section id="contact" className="pt-20 pb-20">
      <div className="container">
        <div className="w-full px-4">
          <div className="max-w-xl mx-auto text-center mb-10">
            <h4 className="section-title">
              Contact
            </h4>
            <h2 className="font-bold text-black text-lg mb-4 sm:text-xl lg:text-xl">
              Social Media
            </h2>
          </div>
          <div className="flex flex-col justify-center items-center">
            <div className="flex flex-row sm:flex-none">
              <div className="mb-3">
                <a href="https://wa.me/6282143957521" target="_blank">
                  <div className="flex flex-wrap justify-center items-center shadow-md rounded-full mx- px-3 hover:scale-110 lg:py-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      fill="currentColor"
                      className="bi bi-whatsapp"
                      viewBox="0 0 16 16"
                    >
                      <title>Whatsapp</title>
                      <path d="M13.601 2.326A7.85 7.85 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.9 7.9 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.9 7.9 0 0 0 13.6 2.326zM7.994 14.521a6.6 6.6 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.56 6.56 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592m3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.73.73 0 0 0-.529.247c-.182.198-.691.677-.691 1.654s.71 1.916.81 2.049c.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232" />
                    </svg>

                    <h3 className="font-semibold text-black text-xs mx-2 sm:text-sm lg:text-base">
                      Whatsapp
                    </h3>
                  </div>
                </a>
              </div>
              <div className="mb-3">
                <a href="https://www.linkedin.com/in/raaflahar/" target="_blank">
                  <div className="flex flex-wrap justify-center items-center shadow-md rounded-full mx-2 px-3 hover:scale-110 lg:py-2">
                    <svg
                      role="img"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                      width={20}
                    >
                      <title>LinkedIn</title>
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                    </svg>
                    <h3 className="font-semibold text-black text-xs mx-2 sm:text-sm lg:text-base">
                      LinkedIn
                    </h3>
                  </div>
                </a>
              </div>
            </div>
            <div className="flex flex-row sm:flex-none">
              <div className="mb-3">
                <a href="https://medium.com/@raaflahar" target="_blank">
                  <div className="flex flex-wrap justify-center items-center shadow-md rounded-full mx-2 px-3 hover:scale-110 lg:py-2">
                    <svg
                      role="img"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                      width={20}
                    >
                      <title>Medium</title>
                      <path d="M13.54 12a6.8 6.8 0 01-6.77 6.82A6.8 6.8 0 010 12a6.8 6.8 0 016.77-6.82A6.8 6.8 0 0113.54 12zM20.96 12c0 3.54-1.51 6.42-3.38 6.42-1.87 0-3.39-2.88-3.39-6.42s1.52-6.42 3.39-6.42 3.38 2.88 3.38 6.42M24 12c0 3.17-.53 5.75-1.19 5.75-.66 0-1.19-2.58-1.19-5.75s.53-5.75 1.19-5.75C23.47 6.25 24 8.83 24 12z" />
                    </svg>
                    <h3 className="font-semibold text-black text-xs mx-2 sm:text-sm lg:text-base">
                      Medium
                    </h3>
                  </div>
                </a>
              </div>
              <div className="mb-3">
                <a href="https://leetcode.com/u/raaflahar/" target="_blank">
                  <div className="flex flex-wrap justify-center items-center shadow-md rounded-full mx-2 px-3 hover:scale-110 lg:py-2">
                    <svg
                      role="img"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                      width={20}
                    >
                      <title>LeetCode</title>
                      <path d="M13.483 0a1.374 1.374 0 0 0-.961.438L7.116 6.226l-3.854 4.126a5.266 5.266 0 0 0-1.209 2.104 5.35 5.35 0 0 0-.125.513 5.527 5.527 0 0 0 .062 2.362 5.83 5.83 0 0 0 .349 1.017 5.938 5.938 0 0 0 1.271 1.818l4.277 4.193.039.038c2.248 2.165 5.852 2.133 8.063-.074l2.396-2.392c.54-.54.54-1.414.003-1.955a1.378 1.378 0 0 0-1.951-.003l-2.396 2.392a3.021 3.021 0 0 1-4.205.038l-.02-.019-4.276-4.193c-.652-.64-.972-1.469-.948-2.263a2.68 2.68 0 0 1 .066-.523 2.545 2.545 0 0 1 .619-1.164L9.13 8.114c1.058-1.134 3.204-1.27 4.43-.278l3.501 2.831c.593.48 1.461.387 1.94-.207a1.384 1.384 0 0 0-.207-1.943l-3.5-2.831c-.8-.647-1.766-1.045-2.774-1.202l2.015-2.158A1.384 1.384 0 0 0 13.483 0zm-2.866 12.815a1.38 1.38 0 0 0-1.38 1.382 1.38 1.38 0 0 0 1.38 1.382H20.79a1.38 1.38 0 0 0 1.38-1.382 1.38 1.38 0 0 0-1.38-1.382z" />
                    </svg>
                    <h3 className="font-semibold text-black text-xs mx-2 sm:text-sm lg:text-base">
                      LeetCode
                    </h3>
                  </div>
                </a>
              </div>
            </div>
            
          </div>
          <div className="flex flex-col items-center justify-center mt-10 shadow-xl max-w-screen rounded-xl py-3">
            <h4 className="font-bold text-lg sm:text-xl lg:text-2xl mb-3">Send Me an Email</h4>
            <form ref={form} onSubmit={sendEmail} className="max-w-full">
              <div className="mb-4 flex flex-col">
                <label
                  htmlFor="user_name"
                  className="font-semibold text-sm sm:text-base lg:text-lg mt-2"
                >
                  Your Name:
                </label>
                <input
                  type="text"
                  name="user_name"
                  className="bg-black font-base text-sm sm:text-base lg:text-lg text-white rounded-full p-1 focus:outline-hidden focus:ring-3"
                  required
                  placeholder="Aflah Agus Rizkika"
                />
              </div>
              <div className="mb-4 flex flex-col">
                <label htmlFor="user_email" className="font-semibold text-sm sm:text-base lg:text-lg">
                  Your Email:
                </label>
                <input
                  type="email"
                  name="user_email"
                  className="bg-black font-base text-sm sm:text-base lg:text-lg text-white rounded-full p-1 focus:outline-hidden focus:ring-3"
                  required
                  placeholder="test@mail.com"
                />
              </div>
              <div className="mb-4 flex flex-col">
                <label htmlFor="message" className="font-semibold text-sm sm:text-base lg:text-lg">
                  Your Message:
                </label>
                <textarea
                  name="message"
                  rows={4}
                  className="bg-black font-base text-sm sm:text-base lg:text-lg text-white rounded-lg p-1 focus:outline-hidden focus:ring-3"
                  required
                />
              </div>
              <button
                type="submit"
                className="text-xs font-semibold text-black bg-primary py-2 px-2 rounded-full hover:shadow-lg hover:bg-secondary hover:text-primary transition duration-500 ease-in-out sm:text-sm lg:text-base lg:py-3 lg:px-3 flex justify-center items-center mx-auto"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
