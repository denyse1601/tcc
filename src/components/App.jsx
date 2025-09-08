import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Header } from './Header';
import { Home } from '../pages/Home';
import { Footer } from './Footer';
import { SobreNos }  from '../pages/SobreNos';
import { SobreOJogo } from "../pages/SobreOJogo";
import { Referencias } from "../pages/Referencias";
import { Produto } from "../pages/Produto";
import { Instrucoes } from "../pages/Instrucoes";

export function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen flex flex-col bg-[#7F67BC] dark:bg-[#451A5D] transition-colors duration-500">
        <Header />
        <div className="flex-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/sobre-nos" element={<SobreNos />} />
            <Route path="/sobre-o-jogo" element={<SobreOJogo />} />
            <Route path="/referencias" element={<Referencias />} />
            <Route path="/produto" element={<Produto />} />
            <Route path="/instrucoes" element={<Instrucoes />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </BrowserRouter>
  );
}
