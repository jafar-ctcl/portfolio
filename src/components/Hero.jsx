import { motion } from "framer-motion";
import { Download } from "lucide-react"; // ✅ import the icon

const Hero = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center bg-[#0a0a0a] text-gray-100 px-6"
    >
      <div className="max-w-4xl text-center">
        <motion.h1
          className="text-5xl md:text-7xl font-extrabold leading-tight mb-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Crafting <span className="text-blue-500">Web Experiences</span> That Matter
        </motion.h1>

        <motion.p
          className="text-lg md:text-xl text-gray-400 mb-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
        >
          I'm Jafar Sadiq — a self-taught MERN stack developer passionate about clean code,
          intuitive interfaces, and fast-performing apps.
        </motion.p>

        <motion.div
          className="flex flex-col sm:flex-row justify-center items-center gap-5"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.8 }}
        >
          <a
            href="#contact"
            className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-lg transition-all duration-300"
          >
            Get In Touch
          </a>

          <a
            href="resume.pdf"
            download
            className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-lg transition-all duration-300"
          >
            <Download className="w-5 h-5" />
            Download Resume
          </a>

        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
