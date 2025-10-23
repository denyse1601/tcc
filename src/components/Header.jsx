import { Link } from "react-router-dom";
import logo from "../assets/logo.png";
import { ToggleLeft, ToggleRight, List, X } from "@phosphor-icons/react";
import { useState, useEffect } from "react";

export function Header() {
  const [theme, setTheme] = useState(() => localStorage.getItem("theme") || "light");
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    if (theme) {
      localStorage.setItem("theme", theme);
      const tagHTML = document.documentElement;
      tagHTML.classList.remove("dark");
      if (theme === "dark") {
        tagHTML.classList.add("dark");
      }
    }
  }, [theme]);

  const handleScroll = (e, targetId) => {
    e.preventDefault();
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 w-full p-6 flex items-center justify-between bg-purple-700/90 text-white z-50 dark:bg-purple-900/90 backdrop-blur-sm">
 
      <a href="#inicio" onClick={(e) => handleScroll(e, 'inicio')}>
        <div className="cursor-pointer md:mr-12">
          <img src={logo} alt="Logo Megan" className="h-12 w-12 md:h-16 md:w-16" />
        </div>
      </a>

      <nav className="hidden md:flex items-center gap-6 text-xl cursor-pointer">
        <a href="#inicio" onClick={(e) => handleScroll(e, 'inicio' )}><p>Início</p></a>
        <a href="#instrucoes" onClick={(e) => handleScroll(e, 'instrucoes' )}><p>Instruções</p></a>
        <a href="#produto" onClick={(e) => handleScroll(e, 'produto' )}><p>Produto</p></a>
        <a href="#sobre-nos" onClick={(e) => handleScroll(e, 'sobre-nos' )}><p>Sobre Nós</p></a>
        <a href="#referencias" onClick={(e) => handleScroll(e, 'referencias' )}><p>Referências</p></a>
        <a href="#sobre-o-jogo" onClick={(e) => handleScroll(e, 'sobre-o-jogo' )}><p>Jogo</p></a>
      </nav>

      <div className="flex items-center">
        <button
          className="cursor-pointer text-4xl"
          onClick={() => setTheme(prev => prev === "dark" ? "light" : "dark")}
        >
          {theme === "dark" ? (
            <ToggleLeft size={48} weight="fill" />
          ) : (
            <ToggleRight size={48} weight="duotone" />
          )}
        </button>

        <div className="md:hidden ml-4">
          <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X size={32} /> : <List size={32} />}
          </button>
        </div>
      </div>

      {isMenuOpen && (
        <nav className="absolute top-24 left-0 w-full bg-black bg-opacity-90 md:hidden flex flex-col items-center gap-6 text-xl cursor-pointer p-6">
          <a href="#inicio" onClick={(e) => handleScroll(e, 'inicio' )}><p>Início</p></a>
          <a href="#instrucoes" onClick={(e) => handleScroll(e, 'instrucoes' )}><p>Instruções</p></a>
          <a href="#produto" onClick={(e) => handleScroll(e, 'produto' )}><p>Produto</p></a>
          <a href="#sobre-nos" onClick={(e) => handleScroll(e, 'sobre-nos' )}><p>Sobre Nós</p></a>
          <a href="#referencias" onClick={(e) => handleScroll(e, 'referencias' )}><p>Referências</p></a>
          <a href="#sobre-o-jogo" onClick={(e) => handleScroll(e, 'sobre-o-jogo' )}><p>Jogo</p></a>
        </nav>
      )}
    </header>
  );
}
