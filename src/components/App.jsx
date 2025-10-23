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
    <div className="min-h-screen flex flex-col bg-[#B3A4D8] dark:bg-[#451A5D] transition-colors duration-500">
      <Header />
      <div className="flex-1">
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
      </div>
      <Footer />
    </div>
  );
}
