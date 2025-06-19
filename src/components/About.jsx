const About = () => {
  return (
   <section id="about" className="bg-[#0a0a0a] text-gray-100 py-24 px-6">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

    <h2 className="text-4xl md:text-5xl font-bold text-center text-blue-500 mb-12">
      About Me
    </h2>

    <div className="bg-[#111] p-8 md:p-12 rounded-2xl shadow-xl transition hover:shadow-2xl">
      <p className="text-lg md:text-xl leading-relaxed tracking-wide text-gray-300">
        I'm <span className="text-white font-semibold">Jafar Sadiq</span>, a dedicated and self-taught <span className="text-white">MERN Stack Developer</span> with a passion for building dynamic, scalable, and user-focused web applications. I specialize in turning complex ideas into seamless digital experiences, focusing on both functionality and design.
      </p>

      <p className="mt-6 text-lg md:text-xl leading-relaxed text-gray-400">
        My experience lies in full-stack development using modern JavaScript technologies. I’m proficient in developing RESTful APIs, managing databases, and creating performant front-end interfaces. I strongly value clean architecture, responsive design, and continuous learning to stay ahead in tech.
      </p>

      <p className="mt-6 text-lg md:text-xl leading-relaxed text-gray-400">
        Currently, I'm seeking opportunities where I can contribute my skills to real-world projects, grow alongside experienced teams, and make meaningful impact through code.
      </p>

      <h3 className="text-2xl font-bold text-white mt-10 mb-6">Tech Stack</h3>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
        {[
          "JavaScript",
          "React.js",
          "Node.js",
          "Express.js",
          "MongoDB",
          "MySQL",
          "Bootstrap",
          "HTML5",
          "CSS3",
          "Git & GitHub"
        ].map((skill) => (
          <div
            key={skill}
            className="bg-[#1a1a1a] hover:bg-blue-600 hover:text-white transition-all duration-300 text-center py-4 px-6 rounded-xl text-lg font-medium shadow-md"
          >
            {skill}
          </div>
        ))}
      </div>
    </div>
  </div>
</section>

  );
};

export default About;
