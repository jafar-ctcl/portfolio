import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import dms from "../assets/dms.jpg";
import netflix from "../assets/netflix.png";
import receipe from "../assets/receipe.png";
import youtube from "../assets/youtube.png";

const projects = [
  {
    title: "Netflix Clone",
    description:
      "A responsive Netflix-inspired web interface featuring dynamic movie browsing using the TMDB API. Includes movie thumbnails, trailers, banner, and category sections with an interactive UI closely mimicking the original platform.",
    stack: ["React", "Bootstrap", "TMDB API"],
    image: netflix,
    demo: "https://github.com/jafar-ctcl",
    code: "https://github.com/jafar-ctcl/netflix-clone",
  }
  ,
  {
    title: "Department Management System",
    description:
      "A full-featured academic department system with dashboards for Admins, Teachers, and Students. Manages class timetables, attendance, student performance, notice board updates, and events. Admins assign teachers and classes, teachers update marks and attendance, and students view their records and announcements.",
    stack: ["Handlebars", "Bootstrap", "jQuery", "Node.js", "Express.js", "MySQL"],
    image: dms,
    demo: "https://github.com/jafar-ctcl",
    code: "https://github.com/jafar-ctcl/department-management-system",
  },
  {
    title: "Recipe App",
    description:
      "A responsive web application that showcases a collection of recipes with images, ingredients, and preparation steps. Users can browse and explore dishes by category, view detailed cooking instructions, and search for specific recipes.",
    stack: ["React", "Node.js", "Express", "MongoDB", "Bootstrap"],
    image: receipe,
    demo: "https://github.com/jafar-ctcl",
    code: "https://github.com/jafar-ctcl",
  }
  , {
    title: "YouTube Clone",
    description:
      "A YouTube UI replica featuring video browsing, channel pages, search filtering, and video player experience using RapidAPI.",
    stack: ["React", "Bootstrap", "RapidAPI", "React Router"],
    image: youtube,
    demo: "https://github.com/jafar-ctcl",
    code: "https://github.com/jafar-ctcl/Youtube-clone",
  },
];

const Projects = () => {
  return (
    <section id="projects" className="bg-[#0a0a0a] py-24 px-4 sm:px-6 lg:px-8 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl md:text-5xl font-bold text-center text-blue-500 mb-16">
          My Projects
        </h2>

        <div className="space-y-20">
          {projects.map((project, index) => (
            <div
              key={index}
              className={`flex flex-col lg:flex-row ${index % 2 === 1 ? "lg:flex-row-reverse" : ""
                } items-center gap-10 bg-[#111] p-6 sm:p-10 rounded-3xl shadow-lg hover:shadow-2xl transition-all`}
            >
              {/* Project Image */}
              <div className="w-full lg:w-1/2">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-auto max-h-80 sm:max-h-[22rem] object-contain rounded-xl transition-transform duration-500 hover:scale-105"
                />

              </div>

              {/* Project Content */}
              <div className="w-full lg:w-1/2 text-center lg:text-left">
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

              </div>
            </div>
          ))}
        </div>
      </div>
    </section>


  );
};

export default Projects;
