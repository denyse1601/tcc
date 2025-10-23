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
        <div id="inicio">
          <Home />
        </div>
        <div id="instrucoes">
          <Instrucoes />
        </div>
        <div id="produto">
          <Produto />
        </div>
        <div id="sobre-nos">
          <SobreNos />
        </div>
        <div id="referencias">
          <Referencias />
        </div>
        <div id="sobre-o-jogo">
          <SobreOJogo />
        </div>
      </main>
      <Footer />
    </div>
  );
}
