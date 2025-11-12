import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Header } from "./Header";
import { Footer } from "./Footer";

import { Home } from "../pages/Home";
import { SobreNos } from "../pages/SobreNos";
import { SobreOJogo } from "../pages/SobreOJogo";
import { Referencias } from "../pages/Referencias";
import { Produto } from "../pages/Produto";
import { Instrucoes } from "../pages/Instrucoes";

export function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col bg-[#B3A4D8] dark:bg-[#451A5D] transition-colors duration-500">
        <Header />
        <div className="flex-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/instrucoes" element={<Instrucoes />} />
            <Route path="/produto" element={<Produto />} />
            <Route path="/sobre-nos" element={<SobreNos />} />
            <Route path="/referencias" element={<Referencias />} />
            <Route path="/sobre-o-jogo" element={<SobreOJogo />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
}
