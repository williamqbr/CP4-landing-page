import { motion } from "framer-motion";
import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";
import avatar from "./assets/avatar.jpeg";

function App() {
  return (
    <div className="bg-gradient-to-br from-black via-[#0a0a1a] to-black text-white font-sans scroll-smooth">
      {/* ===== HEADER ===== */}
      <header className="fixed top-0 left-0 w-full bg-black/70 backdrop-blur-md z-50 shadow-md">
        <nav className="container mx-auto flex justify-between items-center p-4 px-6">
          <h1 className="text-2xl font-extrabold text-cyan-400 drop-shadow-[0_0_10px_#22d3ee]">
            Projeto<span className="text-purple-400">Tailwind</span>
          </h1>
          <ul className="hidden md:flex gap-6">
            <li><a href="#hero" className="hover:text-cyan-400 transition">Início</a></li>
            <li><a href="#projects" className="hover:text-cyan-400 transition">Projetos</a></li>
            <li><a href="#layout" className="hover:text-cyan-400 transition">Layout</a></li>
            <li><a href="#about" className="hover:text-cyan-400 transition">Sobre</a></li>
            <li><a href="#contact" className="hover:text-cyan-400 transition">Contato</a></li>
          </ul>
        </nav>
      </header>

      {/* ===== HERO ===== */}
      <section
        id="hero"
        className="min-h-screen flex items-center justify-center relative text-center"
      >
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 via-purple-500/20 to-pink-500/20 blur-3xl animate-pulse"></div>

        <motion.div
          className="relative z-10 mt-20 px-6"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <h2 className="text-5xl md:text-6xl font-extrabold drop-shadow-[0_0_15px_#22d3ee]">
            Explorando o{" "}
            <span className="text-purple-400 drop-shadow-[0_0_20px_#a855f7]">
              Poder
            </span>{" "}
            do design digital
          </h2>
          <p className="mt-6 text-xl text-gray-300">Front-end Design</p>
          <a
            href="#projects"
            className="mt-8 inline-block px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-xl font-bold text-white shadow-lg hover:shadow-cyan-400/50 transition"
          >
            Explorar
          </a>
        </motion.div>
      </section>

      {/* ===== PROJETOS ===== */}
      <section
        id="projects"
        className="min-h-screen flex flex-col justify-center items-center px-6 text-center"
      >
        <h3 className="text-5xl font-bold mb-12 text-purple-400 drop-shadow-[0_0_15px_#a855f7]">
          Projetos
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl">
          {[
            {
              titulo: "Projetos em Web Dev",
              descricao:
                "Desenvolvimento web em JavaScript, tratando front e backend.",
            },
            {
              titulo: "Arquitetura em Backend",
              descricao: "Integração em Python com APIs e banco de dados.",
            },
            {
              titulo: "Sistemas com Arduino",
              descricao:
                "Criação de sistemas e soluções com Arduino, desenvolvido em C++.",
            },
          ].map((proj, i) => (
            <motion.div
              key={i}
              className="bg-black/40 border border-cyan-400/30 rounded-xl p-8 shadow-lg hover:shadow-cyan-400/50 transition transform hover:-translate-y-2"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.2 }}
              viewport={{ once: true }}
            >
              <h4 className="text-2xl font-bold text-cyan-400 mb-4">
                {proj.titulo}
              </h4>
              <p className="text-gray-400">{proj.descricao}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ===== LAYOUT E RESPONSIVIDADE ===== */}
      <section
        id="layout"
        className="min-h-screen flex flex-col justify-center items-center bg-black/30 mt-16 px-6 text-center"
      >
        <h3 className="text-5xl font-bold mb-12 text-cyan-400 drop-shadow-[0_0_15px_#22d3ee]">
          Layout e Responsividade
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl">
          {[
            {
              titulo: "Explorando o poder do design digital",
              descricao:
                "Trabalhos desenvolvidos com atenção à harmonia visual e fluidez na navegação. Cada detalhe reflete evolução e cuidado na criação de interfaces.",
            },
            {
              titulo: "Experiência Visual",
              descricao:
                "Busco unir estética e funcionalidade, equilibrando tipografia, cores e movimento para criar experiências envolventes.",
            },
            {
              titulo: "Design Adaptável",
              descricao:
                "Projetos pensados para se ajustar a diferentes telas e dispositivos, mantendo imersão e clareza em qualquer resolução.",
            },
          ].map((item, i) => (
            <motion.div
              key={i}
              className="bg-black/40 border border-cyan-400/30 rounded-xl p-8 shadow-lg hover:shadow-cyan-400/50 transition transform hover:-translate-y-2"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.2 }}
              viewport={{ once: true }}
            >
              <h4 className="text-2xl font-bold text-cyan-400 mb-4">
                {item.titulo}
              </h4>
              <p className="text-gray-400">{item.descricao}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ===== SOBRE ===== */}
      <section
        id="about"
        className="min-h-screen flex flex-col justify-center items-center text-center px-6"
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="flex flex-col items-center"
        >
          <div className="relative w-40 h-40 mb-6">
            <img
              src={avatar}
              alt="Avatar"
              className="w-full h-full object-cover rounded-full border-4 border-cyan-400 shadow-[0_0_20px_#22d3ee]"
            />
            <div className="absolute inset-0 rounded-full border-4 border-purple-500 animate-ping opacity-50"></div>
          </div>

          <h3 className="text-5xl font-bold mb-6 text-cyan-400 drop-shadow-[0_0_15px_#22d3ee]">
            Sobre Mim
          </h3>
          <p className="max-w-2xl text-gray-300 text-lg leading-relaxed">
            Sou um desenvolvedor apaixonado por criar experiências visuais
            únicas e futuristas.  
            Esta landing page mostra como React, Vite e Tailwind podem ser usados
            para construir interfaces modernas e envolventes.
          </p>
        </motion.div>
      </section>

      {/* ===== CONTATO ===== */}
      <section
        id="contact"
        className="min-h-screen flex flex-col justify-center items-center text-center px-6"
      >
        <h3 className="text-5xl font-bold mb-6 text-purple-400 drop-shadow-[0_0_15px_#a855f7]">
          Contato
        </h3>
        <p className="text-gray-300">Me encontre nas redes sociais:</p>
        <div className="flex gap-8 mt-6 text-3xl">
          <a
            href="https://linkedin.com/in/williamqbr"
            target="_blank"
            className="hover:text-cyan-400 transition"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://github.com/williamqbr"
            target="_blank"
            className="hover:text-cyan-400 transition"
          >
            <FaGithub />
          </a>
          <a
            href="https://instagram.com/williamqbr"
            target="_blank"
            className="hover:text-cyan-400 transition"
          >
            <FaInstagram />
          </a>
        </div>
      </section>

      {/* ===== FOOTER ===== */}
      <footer className="bg-black text-center py-6 text-gray-500">
        © {new Date().getFullYear()} Williamqbr. Todos os direitos reservados.
      </footer>
    </div>
  );
}

export default App;
