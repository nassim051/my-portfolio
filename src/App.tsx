import React, { useState, useEffect, FormEvent } from "react";
import {
  Menu,
  X,
  ChevronDown,
  Mail,
  Phone,
  MapPin,
  Github,
  Linkedin,
  Calendar,
  Award,
} from "lucide-react";
import { useRef } from "react";

import emailjs from "@emailjs/browser";
import ProjectCard from "./components/ProjectCard";
import SkillCard from "./components/SkillCard";
import ExperienceCard from "./components/ExperienceCard";
import { fullStackProjects, dataScienceProjects } from "./data/projects";
import { skills } from "./data/skills";
import { experiences } from "./data/experiences";

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [activeProjectType, setActiveProjectType] = useState<
    "fullstack" | "datascience"
  >("fullstack");
  const [formStatus, setFormStatus] = useState<null | {
    type: "success" | "error";
    message: string;
  }>(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const sections = [
        "home",
        "about",
        "skills",
        "projects",
        "experience",
        "contact",
      ];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const height = element.offsetHeight;

          if (
            scrollPosition >= offsetTop &&
            scrollPosition < offsetTop + height
          ) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (formStatus) {
      const timer = setTimeout(() => setFormStatus(null), 5000);
      return () => clearTimeout(timer);
    }
  }, [formStatus]);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setIsLoading(true);

    emailjs
      .sendForm(
        "service_9tzf87k",
        "template_kom4bci",
        e.currentTarget,
        "BtoVl15ife5XAhbLf"
      )
      .then(() => {
        setFormStatus({
          type: "success",
          message: "Message sent successfully! I'll get back to you soon.",
        });
        e.currentTarget.reset();
      })
      .catch(() => {})
      .finally(() => {
        setIsLoading(false);
      });
  }

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsMenuOpen(false);
  };

  const currentProjects =
    activeProjectType === "fullstack" ? fullStackProjects : dataScienceProjects;

  return (
    <div className="bg-gray-900 text-white min-h-screen">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-gray-900/95 backdrop-blur-sm border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
              Portfolio
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-8">
              {[
                "Home",
                "About",
                "Skills",
                "Projects",
                "Experience",
                "Contact",
              ].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className={`transition-colors duration-200 hover:text-purple-400 font-medium ${
                    activeSection === item.toLowerCase()
                      ? "text-purple-400"
                      : "text-gray-300"
                  }`}
                >
                  {item}
                </button>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden p-2 rounded-lg hover:bg-gray-800 transition-colors duration-200"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden bg-gray-800 border-t border-gray-700">
            <div className="px-4 py-2 space-y-2">
              {[
                "Home",
                "About",
                "Skills",
                "Projects",
                "Experience",
                "Contact",
              ].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className="block w-full text-left py-3 px-3 rounded-lg hover:bg-gray-700 transition-colors duration-200 font-medium"
                >
                  {item}
                </button>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section
        id="home"
        className="min-h-screen flex items-center justify-center relative overflow-hidden"
      >
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 to-blue-900/20"></div>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-purple-900/10 via-transparent to-transparent"></div>

        <div className="relative z-10 text-center max-w-4xl mx-auto px-4">
          <div className="animate-fade-in-up">
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent">
                Nassim Amar ROUAG
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 font-medium">
              Full Stack Developer & Data Science Enthusiast
            </p>
            <p className="text-lg text-gray-400 mb-12 max-w-2xl mx-auto leading-relaxed">
              Crafting exceptional digital experiences with modern technologies.
              Passionate about clean code, beautiful design, and data-driven
              solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => scrollToSection("projects")}
                className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 px-8 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-purple-500/25"
              >
                View My Work
              </button>
              <button
                onClick={() => scrollToSection("contact")}
                className="border border-gray-600 hover:border-purple-400 px-8 py-3 rounded-full font-semibold transition-all duration-300 hover:bg-purple-400/10 hover:shadow-lg"
              >
                Get In Touch
              </button>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronDown size={32} className="text-gray-400" />
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-gray-800/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
              About Me
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Passionate developer with 2+ years of experience creating digital
              solutions
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="w-80 h-80 mx-auto bg-gradient-to-br from-purple-400 to-blue-400 rounded-2xl flex items-center justify-center">
                <div className="w-72 h-72 bg-gray-800 rounded-xl flex items-center justify-center">
                  <img
                    src="/profil.jpeg"
                    alt="Profile"
                    className="w-full h-full object-cover"
                  />{" "}
                </div>
              </div>
            </div>

            <div className="space-y-6 order-1 md:order-2">
              <h3 className="text-2xl font-bold mb-4 text-white">
                Hello! I'm Nassim Amar ROUAG
              </h3>
              <p className="text-gray-300 leading-relaxed">
                I'm a passionate full-stack developer with over 2 years of
                experience creating exceptional digital experiences. My journey
                began with a curiosity about how websites work and has evolved
                into a deep love for crafting elegant solutions to complex
                problems.
              </p>
              <p className="text-gray-300 leading-relaxed">
                Alongside web development, I'm passionate about data analysis
                and visualization. I enjoy working with data to uncover insights
                and tell stories that help make better decisions. Exploring data
                science tools and techniques complements my development skills
                and fuels my continuous learning.
              </p>
              <p className="text-gray-300 leading-relaxed">
                I specialize in React, TypeScript, and modern web technologies,
                but I'm always eager to learn new tools and frameworks. When I'm
                not coding, you'll find me exploring design trends or
                contributing to open-source projects.
              </p>

              <div className="grid grid-cols-2 gap-4 pt-6">
                <div className="text-center p-4 bg-gray-800 rounded-lg hover:bg-gray-700 transition-colors duration-300">
                  <div className="text-2xl font-bold text-purple-400">5+</div>
                  <div className="text-gray-400">Projects Completed</div>
                </div>
                <div className="text-center p-4 bg-gray-800 rounded-lg hover:bg-gray-700 transition-colors duration-300">
                  <div className="text-2xl font-bold text-blue-400">2+</div>
                  <div className="text-gray-400">Years Experience</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
              Skills & Expertise
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Technologies and tools I use to bring ideas to life
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {skills.map((skill, index) => (
              <SkillCard key={skill.name} {...skill} />
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 bg-gray-800/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
              Featured Projects
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Explore my Full Stack and Data Science work
            </p>
          </div>

          {/* Project Type Toggle */}
          <div className="flex justify-center mb-12">
            <div className="bg-gray-800 p-1 rounded-full">
              <button
                onClick={() => setActiveProjectType("fullstack")}
                className={`px-6 py-2 rounded-full transition-all duration-300 font-medium ${
                  activeProjectType === "fullstack"
                    ? "bg-purple-600 text-white shadow-lg"
                    : "text-gray-300 hover:text-white"
                }`}
              >
                Full Stack
              </button>
              <button
                onClick={() => setActiveProjectType("datascience")}
                className={`px-6 py-2 rounded-full transition-all duration-300 font-medium ${
                  activeProjectType === "datascience"
                    ? "bg-purple-600 text-white shadow-lg"
                    : "text-gray-300 hover:text-white"
                }`}
              >
                Data Science
              </button>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {currentProjects.map((project, index) => (
              <div>
                <ProjectCard project={project} index={index} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
              Professional Experience
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              My professional journey and key achievements
            </p>
          </div>

          <div className="space-y-8">
            {experiences.map((experience, index) => (
              <ExperienceCard
                key={index}
                experience={experience}
                index={index}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gray-800/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
              Let's Work Together
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Ready to bring your ideas to life? Let's discuss your next project
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-bold mb-6 text-white">
                Get In Touch
              </h3>
              <div className="space-y-4">
                <div className="flex items-center group">
                  <Mail
                    className="text-purple-400 mr-4 group-hover:scale-110 transition-transform duration-300"
                    size={20}
                  />
                  <span className="text-gray-300">
                    rouagnassimamar@gmail.com
                  </span>
                </div>
                <div className="flex items-center group">
                  <Phone
                    className="text-purple-400 mr-4 group-hover:scale-110 transition-transform duration-300"
                    size={20}
                  />
                  <span className="text-gray-300">+33 6 99 66 13 64</span>
                </div>
                <div className="flex items-center group">
                  <MapPin
                    className="text-purple-400 mr-4 group-hover:scale-110 transition-transform duration-300"
                    size={20}
                  />
                  <span className="text-gray-300">Nancy, FRANCE</span>
                </div>
              </div>

              <div className="flex space-x-4 mt-8">
                <a
                  href="https://github.com/nassim051"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gray-700 p-3 rounded-full hover:bg-purple-600 transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-purple-500/25"
                >
                  <Github size={20} />
                </a>
                <a
                  href="https://www.linkedin.com/in/nassim-amar-rouag-40b405227"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gray-700 p-3 rounded-full hover:bg-purple-600 transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-purple-500/25"
                >
                  <Linkedin size={20} />
                </a>
              </div>
            </div>

            <div className="relative">
              {formStatus && (
                <div
                  className={`absolute -top-16 left-0 right-0 z-10 px-4 py-3 rounded-lg shadow-lg text-white flex items-center gap-2 transition-all duration-300 ${
                    formStatus.type === "success"
                      ? "bg-green-500"
                      : "bg-red-500"
                  }`}
                >
                  {formStatus.type === "success" ? (
                    <svg
                      className="w-5 h-5"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  ) : (
                    <svg
                      className="w-5 h-5"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                  )}
                  <span className="text-sm font-medium">
                    {formStatus.message}
                  </span>
                </div>
              )}

              <form className="space-y-6" onSubmit={handleSubmit}>
                <div>
                  <label className="block text-sm font-medium mb-2 text-gray-300">
                    Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    className="w-full px-4 py-3 bg-gray-700 rounded-lg focus:ring-2 focus:ring-purple-400 focus:outline-none transition-all duration-300 text-white placeholder-gray-400"
                    placeholder="Your Name"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2 text-gray-300">
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    className="w-full px-4 py-3 bg-gray-700 rounded-lg focus:ring-2 focus:ring-purple-400 focus:outline-none transition-all duration-300 text-white placeholder-gray-400"
                    placeholder="your.email@example.com"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2 text-gray-300">
                    Message
                  </label>
                  <textarea
                    name="message"
                    rows={5}
                    className="w-full px-4 py-3 bg-gray-700 rounded-lg focus:ring-2 focus:ring-purple-400 focus:outline-none transition-all duration-300 resize-none text-white placeholder-gray-400"
                    placeholder="Tell me about your project..."
                    required
                  ></textarea>
                </div>
                <button
                  type="submit"
                  disabled={isLoading}
                  className="w-full bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none shadow-lg hover:shadow-purple-500/25"
                >
                  {isLoading ? (
                    <div className="flex items-center gap-2">
                      <div className="h-4 w-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                      Sending...
                    </div>
                  ) : (
                    "Send Message"
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-gray-400">
            © 2024 Nassim Amar ROUAG. Built with React, TypeScript, and Tailwind
            CSS.
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;
