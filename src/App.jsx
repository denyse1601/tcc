import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { Home } from './pages/Home';
import { Instrucoes } from './pages/Instrucoes';
import { Produto } from './pages/Produto';
import { SobreNos } from './pages/SobreNos';
import { Referencias } from './pages/Referencias';
import { SobreOJogo } from './pages/SobreOJogo';
import BackgroundBolas from './assets/bolas.png';

export function App() {
  return (
    <Router>
      <div 
        className="flex flex-col min-h-screen transition-colors duration-500"
        style={{
          backgroundImage: `url(${BackgroundBolas})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          backgroundAttachment: 'fixed',
        }}
      >
        <Header />

        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/instrucoes" element={<Instrucoes />} />
            <Route path="/produto" element={<Produto />} />
            <Route path="/sobre-nos" element={<SobreNos />} />
            <Route path="/referencias" element={<Referencias />} />
            <Route path="/sobre-o-jogo" element={<SobreOJogo />} />
          </Routes>
        </main>

        <Footer />
      </div>
    </Router>
  );
}
