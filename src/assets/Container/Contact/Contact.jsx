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
            <h4 className="font-semibold text-lg uppercase text-secondary mb-2">
              Contact
            </h4>
            <h2 className="font-bold text-black text-2xl mb-4 mx-2">
              Social Media
            </h2>
          </div>
          <div className="flex justify-center items-center">
            <div className="mb-3">
              <a href="https://github.com/raaflahar" target="_blank">
                <div className="flex flex-wrap justify-center items-center shadow-md rounded-full mx-2 px-3 hover:scale-110 ">
                  <svg
                    role="img"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                    width={20}
                  >
                    <title>GitHub</title>
                    <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
                  </svg>
                  <h3 className="font-semibold text-black text-lg mx-2 ">
                    GitHub
                  </h3>
                </div>
              </a>
            </div>
            <div className="mb-3">
              <a href="https://www.linkedin.com/in/raaflahar/" target="_blank">
                <div className="flex flex-wrap justify-center items-center shadow-md rounded-full mx-2 px-3 hover:scale-110">
                  <svg
                    role="img"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                    width={20}
                  >
                    <title>LinkedIn</title>
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                  </svg>
                  <h3 className="font-semibold text-black text-lg mx-2">
                    LinkedIn
                  </h3>
                </div>
              </a>
            </div>
            <div className="mb-3">
              <a href="https://medium.com/@raaflahar" target="_blank">
                <div className="flex flex-wrap justify-center items-center shadow-md rounded-full mx-2 px-3 hover:scale-110">
                  <svg
                    role="img"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                    width={20}
                  >
                    <title>Medium</title>
                    <path d="M13.54 12a6.8 6.8 0 01-6.77 6.82A6.8 6.8 0 010 12a6.8 6.8 0 016.77-6.82A6.8 6.8 0 0113.54 12zM20.96 12c0 3.54-1.51 6.42-3.38 6.42-1.87 0-3.39-2.88-3.39-6.42s1.52-6.42 3.39-6.42 3.38 2.88 3.38 6.42M24 12c0 3.17-.53 5.75-1.19 5.75-.66 0-1.19-2.58-1.19-5.75s.53-5.75 1.19-5.75C23.47 6.25 24 8.83 24 12z" />
                  </svg>
                  <h3 className="font-semibold text-black text-lg mx-2">
                    Medium
                  </h3>
                </div>
              </a>
            </div>
            <div className="mb-3">
              <a href="https://leetcode.com/u/raaflahar/" target="_blank">
                <div className="flex flex-wrap justify-center items-center shadow-md rounded-full mx-2 px-3 hover:scale-110">
                  <svg
                    role="img"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                    width={20}
                  >
                    <title>LeetCode</title>
                    <path d="M13.483 0a1.374 1.374 0 0 0-.961.438L7.116 6.226l-3.854 4.126a5.266 5.266 0 0 0-1.209 2.104 5.35 5.35 0 0 0-.125.513 5.527 5.527 0 0 0 .062 2.362 5.83 5.83 0 0 0 .349 1.017 5.938 5.938 0 0 0 1.271 1.818l4.277 4.193.039.038c2.248 2.165 5.852 2.133 8.063-.074l2.396-2.392c.54-.54.54-1.414.003-1.955a1.378 1.378 0 0 0-1.951-.003l-2.396 2.392a3.021 3.021 0 0 1-4.205.038l-.02-.019-4.276-4.193c-.652-.64-.972-1.469-.948-2.263a2.68 2.68 0 0 1 .066-.523 2.545 2.545 0 0 1 .619-1.164L9.13 8.114c1.058-1.134 3.204-1.27 4.43-.278l3.501 2.831c.593.48 1.461.387 1.94-.207a1.384 1.384 0 0 0-.207-1.943l-3.5-2.831c-.8-.647-1.766-1.045-2.774-1.202l2.015-2.158A1.384 1.384 0 0 0 13.483 0zm-2.866 12.815a1.38 1.38 0 0 0-1.38 1.382 1.38 1.38 0 0 0 1.38 1.382H20.79a1.38 1.38 0 0 0 1.38-1.382 1.38 1.38 0 0 0-1.38-1.382z" />
                  </svg>
                  <h3 className="font-semibold text-black text-lg mx-2">
                    LeetCode
                  </h3>
                </div>
              </a>
            </div>
          </div>
          <div className="flex flex-col items-center justify-center mt-10 shadow-xl max-w-md mx-auto rounded-xl py-3">
            <h4 className="font-bold text-2xl mb-3">Send Me an Email</h4>
            <form ref={form} onSubmit={sendEmail}>
              <div className="mb-4 flex flex-col">
                <label
                  htmlFor="user_name"
                  className="font-semibold text-lg mt-2"
                >
                  Your Name:
                </label>
                <input
                  type="text"
                  name="user_name"
                  className="bg-black font-base text-medium text-white rounded-full p-1 focus:outline-none focus:ring"
                  required
                  placeholder="Aflah Agus Rizkika"
                />
              </div>
              <div className="mb-4 flex flex-col">
                <label htmlFor="user_email" className="font-semibold text-lg">
                  Your Email:
                </label>
                <input
                  type="email"
                  name="user_email"
                  className="bg-black font-base text-medium text-white rounded-full p-1 focus:outline-none focus:ring"
                  required
                  placeholder="test@mail.com"
                />
              </div>
              <div className="mb-4 flex flex-col">
                <label htmlFor="message" className="font-semibold text-lg">
                  Your Message:
                </label>
                <textarea
                  name="message"
                  rows={4}
                  className="bg-black font-base text-medium text-white rounded-lg p-1 focus:outline-none focus:ring"
                  required
                />
              </div>
              <button
                type="submit"
                className="bg-primary text-black font-bold py-3 px-6 rounded-full hover:bg-secondary hover:text-primary flex justify-center items-center mx-auto"
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
