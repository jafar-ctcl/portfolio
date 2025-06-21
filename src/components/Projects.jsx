import React from "react";
import { motion } from "framer-motion";
import dms from "../assets/dms.jpg";
import netflix from "../assets/netflix.png";
import receipe from "../assets/receipe.png";
import youtube from "../assets/youtube.png";

const projects = [
  {
    title: "Netflix Clone",
    description:
      "A responsive Netflix-inspired web interface featuring dynamic movie browsing using the TMDB API. Includes movie thumbnails, trailers, banner, and category sections.",
    stack: ["React", "Bootstrap", "TMDB API"],
    image: netflix,
    demo: "https://movie-app-clone-iota.vercel.app/",
    code: "https://github.com/jafar-ctcl/movie-app-clone",
  },
  {
    title: "Department Management System",
    description:
      "Academic system with dashboards for Admins, Teachers, and Students. Manage timetables, attendance, marks, notices, and events.",
    stack: ["Handlebars", "Bootstrap", "jQuery", "Node.js", "Express.js", "MySQL"],
    image: dms,
    demo: "https://github.com/jafar-ctcl",
    code: "https://github.com/jafar-ctcl/department-management-system",
  },
  {
    title: "Recipe App",
    description:
      "Responsive app showcasing recipes with images, ingredients, steps, and categories. Includes search and filtering.",
    stack: ["React", "Node.js", "Express", "MongoDB", "Bootstrap"],
    image: receipe,
    demo: "https://github.com/jafar-ctcl",
    code: "https://github.com/jafar-ctcl",
  },
  {
    title: "YouTube Clone",
    description:
      "YouTube UI replica featuring video browsing, channels, search, and player using RapidAPI.",
    stack: ["React", "Bootstrap", "RapidAPI", "React Router"],
    image: youtube,
    demo: "https://github.com/jafar-ctcl",
    code: "https://github.com/jafar-ctcl/Youtube-clone",
  },
];

// New fast and directional animation
const fastFlyIn = {
  hidden: (index) => ({
    opacity: 0,
    y: index % 2 === 0 ? -100 : 100,
    scale: 0.95,
  }),
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.4, ease: "easeOut" },
  },
};

const Projects = () => {
  return (
    <section
      id="projects"
      className="bg-[#0a0a0a] py-24 px-4 sm:px-6 lg:px-8 text-white"
    >
      <div className="max-w-7xl mx-auto">
        <motion.h2
          className="text-4xl md:text-5xl font-bold text-center text-blue-500 mb-16"
          initial={{ opacity: 0, y: -40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          My Projects
        </motion.h2>

        <div className="space-y-16">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className={`flex flex-col lg:flex-row ${
                index % 2 === 1 ? "lg:flex-row-reverse" : ""
              } items-center gap-10 bg-[#111] p-6 sm:p-10 rounded-3xl shadow-lg hover:shadow-2xl transition-all`}
              variants={fastFlyIn}
              initial="hidden"
              whileInView="visible"
              custom={index}
              viewport={{ once: true, amount: 0.3 }}
            >
              <motion.div
                className="w-full lg:w-1/2"
                whileHover={{ scale: 1.03 }}
                transition={{ duration: 0.3 }}
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-auto max-h-80 sm:max-h-[22rem] object-contain rounded-xl"
                />
              </motion.div>

              <motion.div
                className="w-full lg:w-1/2 text-center lg:text-left"
                initial={{ opacity: 0, x: 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, delay: 0.1 }}
              >
                <h3 className="text-2xl md:text-3xl font-semibold mb-4 text-white">
                  {project.title}
                </h3>
                <p className="text-gray-300 text-sm sm:text-base mb-6">
                  {project.description}
                </p>

                <div className="flex flex-wrap justify-center lg:justify-start gap-2 mb-6">
                  {project.stack.map((tech, i) => (
                    <span
                      key={i}
                      className="text-xs bg-gradient-to-r from-blue-700 to-blue-400 text-white px-3 py-1 rounded-full font-medium shadow-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex justify-center lg:justify-start gap-6">
                  <a
                    href={project.code}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-400 hover:text-blue-300 text-sm transition-colors duration-300"
                  >
                    GitHub
                  </a>
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-green-400 hover:text-green-300 text-sm transition-colors duration-300"
                  >
                    Live Demo
                  </a>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
