import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import {
  SiJavascript,
  SiReact,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiMysql,
  SiBootstrap,
  SiHtml5,
  SiCss3,
  SiGithub,
  SiTailwindcss,
  SiJquery,
} from "react-icons/si";

// Tech stack data
const techStack = [
  { name: "JavaScript", icon: <SiJavascript className="text-yellow-400" /> },
  { name: "React.js", icon: <SiReact className="text-cyan-400" /> },
  { name: "Node.js", icon: <SiNodedotjs className="text-green-500" /> },
  { name: "Express.js", icon: <SiExpress className="text-gray-400" /> },
  { name: "MongoDB", icon: <SiMongodb className="text-green-600" /> },
  { name: "MySQL", icon: <SiMysql className="text-blue-400" /> },
  { name: "Bootstrap", icon: <SiBootstrap className="text-purple-500" /> },
  { name: "HTML5", icon: <SiHtml5 className="text-orange-500" /> },
  { name: "CSS3", icon: <SiCss3 className="text-blue-500" /> },
  { name: "Git & GitHub", icon: <SiGithub className="text-gray-200" /> },
  { name: "Tailwind CSS", icon: <SiTailwindcss className="text-sky-400" /> },
  { name: "jQuery", icon: <SiJquery className="text-blue-300" /> },
];
const About = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <section id="about" className="bg-[#0a0a0a] text-gray-100 py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto space-y-12">
        {/* Heading */}
        <div className="text-center" data-aos="fade-up">
          <h2 className="text-4xl md:text-5xl font-bold text-blue-500">About Me</h2>
        </div>

        {/* Card Container */}
        <div
          className="bg-[#111] rounded-2xl shadow-lg p-6 sm:p-10 space-y-8"
          data-aos="fade-up"
        >
          {/* Introduction */}
          <div
            className="space-y-4 text-gray-300 text-base sm:text-lg leading-relaxed"
            data-aos="fade-right"
            data-aos-delay="200"
          >
            <p>
              Hi, I'm <span className="text-white font-semibold">Jafar Sadiq</span>, a self-taught{" "}
              <span className="text-white font-semibold">MERN Stack Developer</span> with a passion
              for creating modern, responsive, and high-performance web applications.
            </p>
            <p className="text-gray-400">
              I specialize in full-stack development using technologies like React.js, Node.js,
              Express, and MongoDB. I enjoy turning complex problems into clean, functional
              solutions with a focus on user experience and scalability.
            </p>
            <p className="text-gray-400">
              I’m currently available for freelance work and open to full-time opportunities where I
              can contribute to impactful projects and collaborate with like-minded teams.
            </p>
          </div>

          {/* Tech Stack */}
          <div data-aos="fade-up" data-aos-delay="400">
            <h3 className="text-2xl font-bold text-white mb-4">Tech Stack</h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
              {techStack.map((tech, index) => (
                <div
                  key={tech.name}
                  className="flex flex-col items-center justify-center bg-[#1a1a1a] text-center text-sm sm:text-base py-3 px-4 rounded-xl shadow-md hover:bg-blue-600 hover:text-white transition duration-300 space-y-2"
                  data-aos="zoom-in"
                  data-aos-delay={index * 100}
                >
                  <div className="text-2xl">{tech.icon}</div>
                  <div>{tech.name}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
