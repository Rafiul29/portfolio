"use client";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faCheck } from "@fortawesome/free-solid-svg-icons";
import {
  faFacebook,
  faLinkedinIn,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";
import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export default function ContactSection({ isHomepage }) {
  const form = useRef();
  const [emailSubmitted, setEmailSubmitted] = useState(false);

  const serviceID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
  const templateID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
  const userID = import.meta.env.VITE_EMAILJS_USER_ID;

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(serviceID, templateID, form.current, { publicKey: userID })
      .then(
        () => {
          setEmailSubmitted(true);
          e.target.reset();
        },
        (error) => {
          console.log("Some error occurred:", error.text);
          alert("Oh no! Failed... ❌");
        }
      );
  };

  return (
    <section
      id="contact"
      className={` py-10 relative  justify-items-center ${
        !isHomepage && "min-h-[calc(100vh-15rem)] place-content-center "
      }`}
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-20  p-6 rounded-lg  w-4/5">
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="w-full"
        >
          <h2 className="text-2xl sm:text-3xl font-bold text-zinc-300 mb-4">
            Contact Me
          </h2>
          <form
            className="flex flex-col space-y-4"
            ref={form}
            onSubmit={sendEmail}
          >
            <div>
              <label
                htmlFor="name"
                className="text-zinc-300 text-sm md:text-base font-medium"
              >
                Name
              </label>
              <input
                name="user_name"
                type="text"
                id="name"
                required
                className="w-full bg-zinc-900 border border-zinc-700 placeholder-zinc-500 text-zinc-300 rounded-lg p-2.5"
                placeholder="Name"
              />
            </div>

            <div>
              <label
                htmlFor="email"
                className="text-zinc-300 text-sm md:text-base font-medium"
              >
                Email
              </label>
              <input
                name="user_email"
                type="email"
                id="email"
                required
                className="w-full bg-zinc-900 border border-zinc-700 placeholder-zinc-500 text-zinc-300 rounded-lg p-2.5"
                placeholder="mail@example.com"
              />
            </div>

            <div>
              <label
                htmlFor="message"
                className="text-zinc-300 text-sm md:text-base font-medium"
              >
                Message
              </label>
              <textarea
                name="message"
                id="message"
                required
                className="w-full bg-zinc-900 border border-zinc-700 placeholder-zinc-500 text-zinc-300 rounded-lg p-2.5"
                placeholder="Your message here"
                rows="4"
              />
            </div>

            {emailSubmitted ? (
              <p className="text-green-600 text-center mt-4 font-semibold">
                Email sent successfully!
                <FontAwesomeIcon icon={faCheck} className="ml-2" />
              </p>
            ) : (
              <button
                type="submit"
                className="w-full md:w-auto px-6 py-3 border-2 rounded-full font-semibold border-zinc-500 text-zinc-500 hover:border-zinc-300 hover:text-zinc-300 text-center"
              >
                Send
                <FontAwesomeIcon icon={faEnvelope} className="ml-2" />
              </button>
            )}
          </form>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="w-full text-center md:text-left"
        >
          <h2 className="text-2xl sm:text-3xl font-bold text-zinc-300 mb-6">
            Personal Information
          </h2>
          <p className="text-zinc-500 mb-2">Md Rafiul Islam</p>
          <p className="text-zinc-500 mb-2">rafiulislamcse29@gmail.com</p>
          <p className="text-zinc-500 mb-2">+01571257567</p>
          <p className="text-zinc-500 mb-6">Pabna, Dhaka, Bangladesh</p>
          <div className="flex space-x-5 justify-center md:justify-start">
            <Link
              to="https://www.facebook.com/rafiulislam.rafi.1234/"
              target="_blank"
            >
              <FontAwesomeIcon
                icon={faFacebook}
                className="text-2xl text-zinc-300 hover:text-zinc-500 transition-colors"
              />
            </Link>
            <Link
              to="https://www.linkedin.com/in/rafiul-islam-cse/"
              target="_blank"
            >
              <FontAwesomeIcon
                icon={faLinkedinIn}
                className="text-2xl text-zinc-300 hover:text-zinc-500 transition-colors"
              />
            </Link>
            <Link to="https://github.com/Rafiul29" target="_blank">
              <FontAwesomeIcon
                icon={faGithub}
                className="text-2xl text-zinc-300 hover:text-zinc-500 transition-colors"
              />
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
