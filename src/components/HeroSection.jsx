"use client";
import { TypeAnimation } from "react-type-animation";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export default function HeroSection() {
  return (
    <section className="lg:py-16">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="grid grid-cols-1 items-center md:grid-cols-2 lg:grid-cols-3 "
      >
        <div className="col-span-1 lg:col-span-2 w-full text-center md:text-left md:place-self-start my-auto sm:pl-4 xl:pl-16 ">
          <h1 className="text-zinc-300 text-3xl sm:text-5xl lg:text-6xl mt-12 mb-3">
            <span className="gradient-text bg-gradient-to-r">
              Hi, I&apos;m{" "}
            </span>

            <br></br>
            <TypeAnimation
              sequence={["Rafiul", 1000, "Python Developer", 1000]}
              wrapper="span"
              speed={10}
              repeat={Infinity}
            />
          </h1>

          <p className="text-zinc-300 text-base sm:text-lg lg:text-xl mb-6">
            I&apos;m Skilled in Python, Django, and Django REST Framework, I
            build scalable APIs and backend solutions focused on performance and
            reliability for modern web applications. Passionate about clean code
            and seamless user experience, I create efficient, maintainable
            backend architectures..
          </p>

          <div>
            <Link
              to="https://drive.google.com/file/d/10vCnJHnpDHLEjGR0rXNp3oJ9Br1ExA85/view?usp=sharing"
              target="_blank"
            >
              <button
                className="sm:w-fit px-6 py-2 border-2 rounded-full font-semibold border-zinc-950
                        text-zinc-300 button-contact bg-gradient-to-br from-cyan-600 via-indigo-600 to-pink-600"
              >
                Resume
              </button>
            </Link>
          </div>
        </div>

        <div className="col-span-1 place-self-center md:m-0 mt-6 mb-12">
          <div className="rounded-full w-[250px] h-[250px] relative">
            <img
              src="/images/pic.jpg"
              alt="picture"
              className="absolute transform -translate-x-1/2
                    -translate-y-1/2 top-1/2 left-1/2 lg:w-fit w-[180px]"
            ></img>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
