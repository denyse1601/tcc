import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import DarkBackground from '../assets/fundo.png';
import LightBackground from '../assets/fundo_claro.png';

export function Home() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const observer = new MutationObserver(() => {
      setIsDarkMode(document.documentElement.classList.contains('dark'));
    });

    observer.observe(document.documentElement, { attributes: true, attributeFilter: ['class'] });

    setIsDarkMode(document.documentElement.classList.contains('dark'));

    return () => observer.disconnect();
  }, []);

  return (
    <main
      className="w-full p-6 md:p-12 pt-32 md:pt-40 text-gray-800 dark:text-white transition-colors duration-500"
      style={{
        backgroundImage: `url(${isDarkMode ? DarkBackground : LightBackground})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundAttachment: 'fixed',
      }}
    >
      <div className="max-w-6xl mx-auto">

        <h1
          className="text-4xl md:text-5xl font-semibold text-[#e1c8f7] dark:text-[#be7eff] mt-20 mb-6"
          style={{ textShadow: '2px 2px 8px rgba(0,0,0,0.3)' }}
        >
          Sua nova experiência começa aqui
        </h1>
        <p className="text-lg md:text-xl font-medium max-w-full md:max-w-5xl text-[#e1c8f7] " style={{ textShadow: '1px 1px 4px rgba(0,0,0,0.3)' }}>
          Megan organiza o dia das crianças com lembretes e comandos de voz,
          promovendo autonomia e disciplina. Pelo site, os pais acompanham e
          personalizam cada etapa da rotina de forma prática e eficaz.
        </p>

        <div className="mt-10 flex flex-wrap gap-4">
          <Link to="/instrucoes">
            <button className="cursor-pointer bg-purple-600 dark:bg-[#7F67BC] dark:hover:bg-purple-200 hover:bg-purple-700 text-white font-bold py-3 px-8 rounded-lg text-lg transition-transform transform hover:scale-105">
              Explore o Projeto
            </button>
          </Link>
          <Link to="/sobre-nos">
            <button className="cursor-pointer bg-transparent border-2 border-purple-600 dark:border-white hover:bg-purple-900 dark:hover:bg-white hover:text-white dark:hover:text-black text-[#e1c8f7] dark:text-white font-bold py-3 px-8 rounded-lg text-lg transition-colors">
              Conheça os Criadores
            </button>
          </Link>
        </div>

     
        <div className="mt-24 md:mt-32 text-left">
          <h2 
            className="text-3xl md:text-4xl font-semibold text-[#e1c8f7] dark:text-[#be7eff] mb-10 mt-20"
            style={{ textShadow: '2px 2px 8px rgba(0,0,0,0.3)' }}
          >
            Explore um Mundo de Possibilidades
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
    
            <div className="bg-black/10 dark:bg-black/40 p-6 rounded-lg border border-purple-300 dark:border-purple-500/50 backdrop-blur-sm">
              <h3 className="text-xl font-bold text-black dark:text-[#be7eff] mb-2">Rotina Inteligente</h3>
              <p className="text-gray-300 dark:text-gray-200">
                Megan transforma tarefas diárias em uma jornada, usando lembretes e comandos de voz para promover disciplina e autonomia de um jeito divertido.
              </p>
            </div>
 
            <div className="bg-black/10 dark:bg-black/40 p-6 rounded-lg border border-purple-300 dark:border-purple-500/50 backdrop-blur-sm">
              <h3 className="text-xl font-bold text-black dark:text-[#be7eff] mb-2">Acompanhamento e Personalização</h3>
              <p className="text-[#e1c8f7] dark:text-gray-200">
                Pais podem acompanhar o progresso, personalizar tarefas e participar ativamente do desenvolvimento de seus filhos de forma prática e eficaz.
              </p>
            </div>

            <div className="bg-black/10 dark:bg-black/40 p-6 rounded-lg border border-purple-300 dark:border-purple-500/50 backdrop-blur-sm">
              <h3 className="text-xl font-bold text-black dark:text-[#be7eff] mb-2">Narrativa Interativa</h3>
              <p className="text-[#e1c8f7] dark:text-gray-200">
                Mergulhe em uma história sobre amizade e tecnologia. Suas escolhas definem o futuro de Daphne e Megan, explorando o que nos torna humanos.
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
