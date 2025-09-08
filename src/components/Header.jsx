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
    <header className="absolute top-0 left-0 w-full p-6 flex items-center justify-between bg-transparent text-white z-50 dark:bg-transparent">
 
      <Link to="/">
        <div className="cursor-pointer md:mr-12">
          <img src={logo} alt="Logo Megan" className="h-12 w-12 md:h-16 md:w-16" />
        </div>
      </Link>

      <nav className="hidden md:flex items-center gap-6 text-xl cursor-pointer">
        <Link to="/"><p>Início</p></Link>
        <Link to="/instrucoes"><p>Instruções</p></Link>
        <Link to="/produto"><p>Produto</p></Link>
        <Link to="/sobre-nos"><p>Sobre Nós</p></Link>
        <Link to="/referencias"><p>Referências</p></Link>
        <Link to="/sobre-o-jogo"><p>Jogo</p></Link>
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
          <Link to="/" onClick={() => setIsMenuOpen(false)}><p>Início</p></Link>
          <Link to="/instrucoes" onClick={() => setIsMenuOpen(false)}><p>Instruções</p></Link>
          <Link to="/produto" onClick={() => setIsMenuOpen(false)}><p>Produto</p></Link>
          <Link to="/sobre-nos" onClick={() => setIsMenuOpen(false)}><p>Sobre Nós</p></Link>
          <Link to="/referencias" onClick={() => setIsMenuOpen(false)}><p>Referências</p></Link>
          <Link to="/sobre-o-jogo" onClick={() => setIsMenuOpen(false)}><p>Jogo</p></Link>
        </nav>
      )}
    </header>
  );
}
