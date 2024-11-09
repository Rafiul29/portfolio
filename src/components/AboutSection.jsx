import TabButton from "./TabButton";
import { useState } from "react";
import { motion } from "framer-motion";

const TAB_DATA = [
  {
    title: "Skills",
    id: "skills",
    content: (
      <ul className="list-disc pl-2 grid grid-cols-2 md:grid-cols-3 gap-x-4">
        <li>Html e Css</li>
        <li>Tailwind</li>
        <li>Javascript</li>
        <li>Node.js</li>
        <li>React</li>
        <li>SQL</li>
        <li>TypeScript</li>
        <li>Responsive design</li>
        <li>Basi di UI/UX design</li>
      </ul>
    ),
  },
  {
    title: "Formazione",
    id: "education",
    content: (
      <ul className="list-disc pl-2">
        <li>Master in Front-End Development - Start2Impact University</li>
        <li>Master di I livello in Digital Humanities</li>
      </ul>
    ),
  },
  {
    title: "Hobbies",
    id: "hobbies",
    content: (
      <ul className="list-disc pl-2 grid grid-cols-2 gap-x-4">
        <li>Viaggiare</li>
        <li>Candele artigianali</li>
        <li>Serie TV e film</li>
        <li>Yoga e passeggiate</li>
      </ul>
    ),
  },
];

export default function AboutSection() {
  const [tab, setTab] = useState("skills");

  // If you want underlined animation, use useTransition() and modify handleTabChange
  /*const [isPending, startTransition] = useTransition();
    
    const handleTabChange = (id) => {
      startTransition(() => {
        setTab(id);
      })
    }
    */

  const handleTabChange = (id) => {
    setTab(id);
  };

  return (
    <section className="text-zinc-300" id="about-me">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <img
            src="/images/b.png"
            alt="image"
            className="h-full object-cover"
          ></img>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
            <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-zinc-300">
              About Me
            </h2>

            <div className='space-y-2'>
            <p className="text-base lg:text-lg">
              Hello! I'm a Python Developer with a strong foundation in Django
              and Django REST Framework, dedicated to crafting powerful,
              user-centered backend solutions. My work revolves around creating
              APIs and backend architectures that are not only robust but also
              scalable and secure, ensuring they meet the dynamic needs of
              modern web applications.
            </p>
            <p className="text-base lg:text-lg">
              In my projects, I prioritize clean, maintainable code and enjoy
              optimizing database interactions to boost application performance.
              I’m skilled in designing RESTful APIs that integrate smoothly with
              front-end systems, providing users with fast and seamless
              experiences. Whether it's building a new feature or refining
              existing functionality, I approach every challenge with a
              problem-solving mindset and a commitment to excellence.
            </p>
            <p className="text-base lg:text-lg">
              I'm passionate about staying updated with the latest industry
              trends, tools, and best practices, always aiming to improve my
              craft. My goal is to create backends that not only serve today’s
              requirements but are ready for tomorrow’s challenges.
            </p>
            </div>

            {/* <div className="flex flex-row justify-start mt-8">
              <TabButton
                selectTab={() => handleTabChange("skills")}
                active={tab === "skills"}
              >
                Skills
              </TabButton>
              <TabButton
                selectTab={() => handleTabChange("education")}
                active={tab === "education"}
              >
                Formazione
              </TabButton>
              <TabButton
                selectTab={() => handleTabChange("hobbies")}
                active={tab === "hobbies"}
              >
                Hobbies
              </TabButton>
            </div> */}

            {/* <div className="mt-4">
              {TAB_DATA.find((t) => t.id === tab).content}
            </div> */}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
