/* eslint-disable react/prop-types */
"use client";
import { useRef } from "react";
import { Link } from "react-router-dom";
import ProjectCard from "./ProjectCard";
import { motion, useInView } from "framer-motion";


const projectsData = [
    {
        id: 1,
        title: "Tasty Trails: Food Delivery App.",
        description: "A seamless food delivery platform where users can browse menus, place orders, and track deliveries in real-time, with efficient tools for both customers and restaurant admins.",
        image: "/images/projects/1.png",
        gitUrl: "https://github.com/Rafiul29/tasty-trails-client.git",
        previewUrl: "https://tasty-trails-client.vercel.app/",
    },
    {
        id: 2,
        title: "RentVista: Rental Made Easy",
        description: "RentVista: Rental Made Easy Discover, rent, and manage properties seamlessly with RentVista, your go-to platform for connecting renters and property owners.",
        image: "/images/projects/2.png",
        gitUrl: "https://github.com/Rafiul29/rent-vista-client.git",
        previewUrl: "https://rent-vista-client-eta.vercel.app/",
    },
    {
        id: 3,
        title: "CourseDemy: Empowering Learning with Technology",
        description: "Built with Next.js, React, Prisma, Tailwind CSS, NextAuth, and Stripe for a fast, secure, and responsive platform.",
        image: "/images/projects/3.png",
        gitUrl: "https://github.com/Rafiul29/cordemy.git",
        previewUrl: "https://cordemy-beta.vercel.app/",
    },
];



export default function ProjectSection( {isHomepage} ) {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });

    const cardVariants = {
        initial: { opacity: 0,  y: 50 },
        animate: { opacity: 1, y: 0 },
    };

    const projectsToDisplay = isHomepage ? projectsData.slice(0, 3) : projectsData;


    return (
        <section id="projects" className="py-10">
            <h2 className="text-center text-2xl sm:text-3xl font-bold text-zinc-300 mt-8 md:mb-12">My Projects</h2>

            <ul ref={ref} className="grid  md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
                {projectsToDisplay.map((project, index) => (
                <motion.li
                    key={index}
                    variants={cardVariants}
                    initial="initial"
                    animate={isInView ? "animate" : "initial"}
                    transition={{ duration: 0.3, delay: index * 0.4 }}
                >
                    <ProjectCard
                    key={project.id}
                    title={project.title}
                    description={project.description}
                    imgUrl={project.image}
                    gitUrl={project.gitUrl}
                    previewUrl={project.previewUrl}
                    />
                </motion.li>
                ))}
            </ul>

            {/* {isHomepage && (
            <div className="flex justify-center mt-12">
                <Link to="/projects">
                    <button className="sm:w-fit px-6 py-3 border-2 rounded-full font-semibold
                     border-zinc-500 text-zinc-500 hover:border-zinc-300 hover:text-zinc-300">All</button>
                </Link>
            </div>
            )} */}
        </section>
    )
}
