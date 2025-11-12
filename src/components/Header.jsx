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

  return (
    <header className="relative w-full p-6 flex items-center justify-between bg-purple-700/90 text-white dark:bg-purple-900/90 backdrop-blur-sm">
      {/* Logo */}
      <Link to="/" onClick={() => setIsMenuOpen(false)}>
        <div className="cursor-pointer md:mr-12">
          <img src={logo} alt="Logo Megan" className="h-12 w-12 md:h-16 md:w-16" />
        </div>
      </Link>

      {/* Menu desktop */}
      <nav className="hidden md:flex items-center gap-6 text-xl cursor-pointer">
        <Link to="/" onClick={() => setIsMenuOpen(false)}>Início</Link>
        <Link to="/instrucoes" onClick={() => setIsMenuOpen(false)}>Instruções</Link>
        <Link to="/produto" onClick={() => setIsMenuOpen(false)}>Produto</Link>
        <Link to="/sobre-nos" onClick={() => setIsMenuOpen(false)}>Sobre Nós</Link>
        <Link to="/referencias" onClick={() => setIsMenuOpen(false)}>Referências</Link>
        <Link to="/sobre-o-jogo" onClick={() => setIsMenuOpen(false)}>Jogo</Link>
      </nav>

      {/* Botões de tema e menu mobile */}
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

        {/* Botão menu mobile */}
        <div className="md:hidden ml-4">
          <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X size={32} /> : <List size={32} />}
          </button>
        </div>
      </div>

      {/* Menu mobile (abre quando clica no ícone) */}
      {isMenuOpen && (
        <nav className="absolute top-full left-0 w-full bg-black bg-opacity-90 md:hidden flex flex-col items-center gap-6 text-xl cursor-pointer p-6">
          <Link to="/" onClick={() => setIsMenuOpen(false)}>Início</Link>
          <Link to="/instrucoes" onClick={() => setIsMenuOpen(false)}>Instruções</Link>
          <Link to="/produto" onClick={() => setIsMenuOpen(false)}>Produto</Link>
          <Link to="/sobre-nos" onClick={() => setIsMenuOpen(false)}>Sobre Nós</Link>
          <Link to="/referencias" onClick={() => setIsMenuOpen(false)}>Referências</Link>
          <Link to="/sobre-o-jogo" onClick={() => setIsMenuOpen(false)}>Jogo</Link>
        </nav>
      )}
    </header>
  );
}
