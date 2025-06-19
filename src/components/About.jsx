const About = () => {
  return (
    <section id="about" className="bg-[#0a0a0a] text-gray-100 py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto space-y-12">
        {/* Heading */}
        <div className="text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-blue-500">About Me</h2>
        </div>

        {/* Card Container */}
        <div className="bg-[#111] rounded-2xl shadow-lg p-6 sm:p-10 space-y-8">
          {/* Introduction */}
          <div className="space-y-4 text-gray-300 text-base sm:text-lg leading-relaxed">
            <p>
              Hi, I'm <span className="text-white font-semibold">Jafar Sadiq</span>, a self-taught <span className="text-white font-semibold">MERN Stack Developer</span> with a passion for creating modern, responsive, and high-performance web applications.
            </p>
            <p className="text-gray-400">
              I specialize in full-stack development using technologies like React.js, Node.js, Express, and MongoDB. I enjoy turning complex problems into clean, functional solutions with a focus on user experience and scalability.
            </p>
            <p className="text-gray-400">
              I’m currently available for freelance work and open to full-time opportunities where I can contribute to impactful projects and collaborate with like-minded teams.
            </p>
          </div>

          {/* Tech Stack */}
          <div>
            <h3 className="text-2xl font-bold text-white mb-4">Tech Stack</h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
              {[
                "JavaScript", "React.js", "Node.js", "Express.js",
                "MongoDB", "MySQL", "Bootstrap", "HTML5",
                "CSS3", "Git & GitHub"
              ].map((tech) => (
                <div
                  key={tech}
                  className="bg-[#1a1a1a] text-center text-sm sm:text-base py-3 px-4 rounded-xl shadow-md hover:bg-blue-600 hover:text-white transition duration-300"
                >
                  {tech}
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
