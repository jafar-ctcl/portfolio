const About = () => {
  return (
    <section id="about" className="bg-[#0a0a0a] text-gray-100 py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center text-blue-500 mb-12">
          About Me
        </h2>

        <div className="bg-[#111] p-8 md:p-12 rounded-2xl shadow-xl transition hover:shadow-2xl">
          <p className="text-lg md:text-xl leading-relaxed tracking-wide text-gray-300">
            Hi! I'm <span className="text-white font-semibold">Jafar Sadiq</span>, a passionate and
            self-taught <span className="text-white">MERN Stack Developer</span> with a love for crafting interactive, fast, and accessible web experiences.
          </p>

          <p className="mt-6 text-lg md:text-xl leading-relaxed text-gray-400">
            With a solid foundation in <span className="text-white">React.js</span>, <span className="text-white">Node.js</span>,
            <span className="text-white">MongoDB</span>, and <span className="text-white">Express</span>, I bring full-stack ideas to life—from concept to
            deployment. I value clean code, good UI/UX, and continuous learning.
          </p>

          <p className="mt-6 text-lg md:text-xl leading-relaxed text-gray-400">
            I'm currently open to opportunities where I can grow, build meaningful
            software, and collaborate with great teams.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
