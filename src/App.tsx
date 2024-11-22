import React, { useState, useEffect } from 'react';
import { Menu, X, Github, Mail, Twitter, Linkedin, ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const projects = [
  {
    title: "タスク管理アプリ",
    description: "チームメンバー間のタスク共有と進捗管理が簡単に行えるアプリケーション",
    github: "#",
    live: "#",
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=80&w=2072"
  },
  {
    title: "IoTホームセキュリティシステム",
    description: "IoTデバイスを使用してホームセキュリティを強化するシステム",
    github: "#",
    live: "#",
    image: "https://images.unsplash.com/photo-1558346490-a72e53ae2d4f?auto=format&fit=crop&q=80&w=2070"
  }
];

const skills = {
  backend: ["Python"],
  other: ["AWS"]
};

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll('section');
      const scrollPosition = window.scrollY + window.innerHeight / 2;

      sections.forEach(section => {
        const top = section.offsetTop;
        const height = section.offsetHeight;

        if (scrollPosition >= top && scrollPosition < top + height) {
          setActiveSection(section.id);
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="bg-black text-white min-h-screen">
      {/* Navigation */}
      <nav className="fixed w-full z-50 bg-black/90 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="text-2xl font-bold"
            >
              小川光貴
            </motion.div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-8">
              {['about', 'projects', 'skills', 'contact'].map((item) => (
                <a
                  key={item}
                  href={`#${item}`}
                  className={`${
                    activeSection === item
                      ? 'text-white'
                      : 'text-gray-400 hover:text-white'
                  } transition-colors duration-200`}
                >
                  {item.charAt(0).toUpperCase() + item.slice(1)}
                </a>
              ))}
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-gray-400 hover:text-white"
              >
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden bg-black"
            >
              <div className="px-2 pt-2 pb-3 space-y-1">
                {['about', 'projects', 'skills', 'contact'].map((item) => (
                  <a
                    key={item}
                    href={`#${item}`}
                    className="block px-3 py-2 text-gray-400 hover:text-white"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.charAt(0).toUpperCase() + item.slice(1)}
                  </a>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center justify-center relative">
        <div className="text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-8xl font-bold mb-4"
          >
            OGAWA
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-gray-400 text-xl"
          >
            大学院生 / Deep Learning Engineer
          </motion.p>
        </div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
        >
          <ChevronDown className="animate-bounce" size={32} />
        </motion.div>
      </section>

      {/* About Section */}
      <section id="about" className="min-h-screen flex items-center justify-center py-20">
        <div className="max-w-4xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <h2 className="text-4xl font-bold mb-8">About Me</h2>
            <p className="text-gray-400 text-lg leading-relaxed">
              深層学習を専門とする大学院生です。画像生成の研究に取り組んでおり、
              最新の技術動向にも常にアンテナを張っています。
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
              <div className="bg-gray-900 p-6 rounded-lg">
                <h3 className="text-xl font-bold mb-4">専門性</h3>
                <p className="text-gray-400">深層学習、特に画像生成分野</p>
              </div>
              <div className="bg-gray-900 p-6 rounded-lg">
                <h3 className="text-xl font-bold mb-4">興味分野</h3>
                <p className="text-gray-400">画像生成AI、機械学習応用</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="min-h-screen py-20">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-4xl font-bold mb-12">Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="bg-gray-900 rounded-lg overflow-hidden"
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                  <p className="text-gray-400 mb-4">{project.description}</p>
                  <div className="flex space-x-4">
                    <a
                      href={project.github}
                      className="text-white hover:text-gray-300"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Github size={20} />
                    </a>
                    <a
                      href={project.live}
                      className="text-white hover:text-gray-300"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      View Live
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="min-h-screen py-20">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-4xl font-bold mb-12">Skills</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-gray-900 p-6 rounded-lg"
            >
              <h3 className="text-xl font-bold mb-4">Backend</h3>
              <div className="flex flex-wrap gap-2">
                {skills.backend.map((skill, index) => (
                  <span
                    key={index}
                    className="bg-gray-800 px-3 py-1 rounded-full text-sm"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-gray-900 p-6 rounded-lg"
            >
              <h3 className="text-xl font-bold mb-4">Cloud & Tools</h3>
              <div className="flex flex-wrap gap-2">
                {skills.other.map((skill, index) => (
                  <span
                    key={index}
                    className="bg-gray-800 px-3 py-1 rounded-full text-sm"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="min-h-screen py-20">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-4xl font-bold mb-12">Contact</h2>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-gray-900 p-8 rounded-lg"
          >
            <div className="flex flex-col space-y-6">
              <a
                href="mailto:yourname@example.com"
                className="flex items-center space-x-4 text-gray-400 hover:text-white transition-colors"
              >
                <Mail size={24} />
                <span>yourname@example.com</span>
              </a>
              <a
                href="#"
                className="flex items-center space-x-4 text-gray-400 hover:text-white transition-colors"
              >
                <Github size={24} />
                <span>GitHub</span>
              </a>
              <a
                href="#"
                className="flex items-center space-x-4 text-gray-400 hover:text-white transition-colors"
              >
                <Twitter size={24} />
                <span>Twitter</span>
              </a>
              <a
                href="#"
                className="flex items-center space-x-4 text-gray-400 hover:text-white transition-colors"
              >
                <Linkedin size={24} />
                <span>LinkedIn</span>
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

export default App;