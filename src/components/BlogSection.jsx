/* eslint-disable react/prop-types */
"use client";
import { useRef } from "react";
import { Link } from "react-router-dom";
import ProjectCard from "./ProjectCard";
import { motion, useInView } from "framer-motion";
import BlogCard from "./BlogCard";


const blogsData = [
    {
        id: 1,
        title: "Key Features of React.js",
        description: "Component-Based Architecture: React applications are built using reusable components, making UI development faster and more efficient. Virtual DOM: React uses a Virtual DOM to improve performance by updating only the parts of the UI that have changed. One-Way Data Binding: React’s data flow is unidirectional, which provides more control over the application state. JSX Syntax: JSX, a syntax extension, allows developers to write HTML-like code directly in JavaScript, making the code more readable.",
        image: "/images/blogs/1.png",
        date: ""
       
    },
    
];



export default function BlogSection( {isHomepage} ) {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });

    const cardVariants = {
        initial: { opacity: 0,  y: 50 },
        animate: { opacity: 1, y: 0 },
    };

    const blogsDataToDisplay = isHomepage ? blogsData.slice(0, 3) : blogsData;


    return (
        <section id="blogs" className="py-10">
            <h2 className="text-center text-2xl sm:text-3xl font-bold text-zinc-300 mt-8 mb-8 md:mb-12">Blogs</h2>

            <ul ref={ref} className="grid  justify-items-center md:grid-cols-2  gap-8 md:gap-12">
                {blogsDataToDisplay.map((project, index) => (
                <motion.li
                    key={index}
                    variants={cardVariants}
                    initial="initial"
                    animate={isInView ? "animate" : "initial"}
                    transition={{ duration: 0.3, delay: index * 0.4 }}
                >
                    <BlogCard
                    key={project.id}
                    title={project.title}
                    description={project.description}
                    imgUrl={project.image}
                    />
                </motion.li>
                ))}
            </ul>

        </section>
    )
}
