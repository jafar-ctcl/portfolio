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
    demo: "https://netflix-clone-demo.vercel.app",
    code: "https://github.com/jafar-ctcl",
  }
  ,
  {
    title: "Department Management System",
    description:
      "A full-featured academic department system with dashboards for Admins, Teachers, and Students. Manages class timetables, attendance, student performance, notice board updates, and events. Admins assign teachers and classes, teachers update marks and attendance, and students view their records and announcements.",
    stack: ["Handlebars", "Bootstrap", "jQuery", "Node.js", "Express.js", "MySQL"],
    image: dms,
    demo: "https://your-department-system-demo-link.com",
    code: "https://github.com/jafar-ctcl/department-management-system",
  },
  {
    title: "Recipe App",
    description:
      "A responsive web application that showcases a collection of recipes with images, ingredients, and preparation steps. Users can browse and explore dishes by category, view detailed cooking instructions, and search for specific recipes.",
    stack: ["React", "Node.js", "Express", "MongoDB", "Bootstrap"],
    image: receipe,
    demo: "https://your-foodapp-demo.vercel.app",
    code: "https://github.com/jafar-ctcl",
  }
  , {
    title: "YouTube Clone",
    description:
      "A YouTube UI replica featuring video browsing, channel pages, search filtering, and video player experience using RapidAPI.",
    stack: ["React", "Bootstrap", "RapidAPI", "React Router"],
    image: youtube,
    demo: "https://youtube-clone-demo.vercel.app",
    code: "https://github.com/jafar-ctcl",
  },
];

const Projects = () => {
  return (
    <section id="projects" className="bg-[#0a0a0a] py-24 px-6 text-white">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold mb-12 text-center">Projects</h2>

        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={30}
          slidesPerView={1}
          loop={true}
          navigation
          pagination={{ clickable: true }}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
        >
          {projects.map((project, index) => (
            <SwiperSlide key={index}>
              <div className="bg-[#111] rounded-3xl overflow-hidden shadow-lg">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-64 object-cover"
                />
                <div className="p-6 text-center">
                  <h3 className="text-2xl font-semibold mb-2">{project.title}</h3>
                  <p className="text-sm text-gray-300 mb-4">{project.description}</p>

                  <div className="flex flex-wrap justify-center gap-2 text-xs mb-4">
                    {project.stack.map((tech, i) => (
                      <span
                        key={i}
                        className="bg-blue-800 text-white px-2 py-1 rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="flex justify-center gap-6 text-sm">
                    <a
                      href={project.code}
                      className="text-blue-400 hover:underline"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      GitHub
                    </a>
                    <a
                      href={project.demo}
                      className="text-green-400 hover:underline"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Live Demo
                    </a>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Projects;
