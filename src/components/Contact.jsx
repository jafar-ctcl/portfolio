import { Mail, Linkedin, Github, Instagram } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-white dark:bg-gray-950">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-blue-500 mb-8">
          Get In Touch
        </h2>
        <p className="text-gray-700 dark:text-gray-300 mb-12 max-w-2xl mx-auto text-base sm:text-lg">
          I'm always open to discussing new opportunities, collaborations, or freelance work. Feel free to reach out through any of the platforms below.
        </p>

        <div className="flex flex-col sm:flex-row sm:flex-wrap items-center justify-center gap-6 text-base sm:text-lg">
          <a
            href="mailto:jafarputhiry@gmail.com"
            className="flex items-center gap-2 text-blue-600 hover:text-blue-800 transition"
          >
            <Mail size={20} /> jafarputhiry@gmail.com
          </a>
          <a
            href="https://www.linkedin.com/in/jafar-sadiq-35b599262"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-blue-600 hover:text-blue-800 transition"
          >
            <Linkedin size={20} /> LinkedIn
          </a>
          <a
            href="https://github.com/jafar-ctcl"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-blue-600 hover:text-blue-800 transition"
          >
            <Github size={20} /> GitHub
          </a>
          <a
            href="https://instagram.com/jafar_ctcl"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-blue-600 hover:text-blue-800 transition"
          >
            <Instagram size={20} /> Instagram
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
