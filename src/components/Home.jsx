import Background from '../assets/fundo.png';
import { Link } from 'react-router-dom';

export function Home() {
  return (
    <main
      className="min-h-screen w-full p-6 md:p-12 pt-32 md:pt-40 text-white transition-colors duration-500"
      style={{
        backgroundImage: `url(${Background})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundAttachment: 'fixed',
      }}
    >
      <div className="max-w-6xl mx-auto">

        <h1
          className="text-4xl md:text-5xl font-semibold text-[#dbbdff] dark:text-[#be7eff] mb-6"
          style={{ textShadow: '2px 2px 8px rgba(0,0,0,0.7)' }}
        >
          Sua nova experiência começa aqui
        </h1>
        <p className="text-lg md:text-xl font-medium max-w-full md:max-w-5xl" style={{ textShadow: '1px 1px 4px rgba(0,0,0,0.7)' }}>
          Megan organiza o dia das crianças com lembretes e comandos de voz,
          promovendo autonomia e disciplina. Pelo site, os pais acompanham e
          personalizam cada etapa da rotina de forma prática e eficaz.
        </p>

        <div className="mt-10 flex flex-wrap gap-4">
          <Link to="/sobre-o-jogo">
            <button className="cursor-pointer bg-purple-600 dark:bg-[#7F67BC] dark:hover:bg-purple-200 hover:bg-purple-700 text-white font-bold py-3 px-8 rounded-lg text-lg transition-transform transform hover:scale-105">
              Explore o Projeto
            </button>
          </Link>
          <Link to="/sobre-nos">
            <button className="cursor-pointer bg-transparent border-2 border-white hover:bg-white hover:text-black text-white font-bold py-3 px-8 rounded-lg text-lg transition-colors">
              Conheça os Criadores
            </button>
          </Link>
        </div>

     
        <div className="mt-24 md:mt-32 text-left">
          <h2 
            className="text-3xl md:text-4xl font-semibold text-[#dbbdff] dark:text-[#be7eff] mb-10 text-center"
            style={{ textShadow: '2px 2px 8px rgba(0,0,0,0.7)' }}
          >
            Explore um Mundo de Possibilidades
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
    
            <div className="bg-black bg-opacity-40 p-6 rounded-lg border border-purple-500/50 backdrop-blur-sm">
              <h3 className="text-xl font-bold text-[#dbbdff] dark:text-[#be7eff] mb-2">Rotina Inteligente</h3>
              <p className="text-gray-200">
                Megan transforma tarefas diárias em uma jornada, usando lembretes e comandos de voz para promover disciplina e autonomia de um jeito divertido.
              </p>
            </div>
 
            <div className="bg-black bg-opacity-40 p-6 rounded-lg border border-purple-500/50 backdrop-blur-sm">
              <h3 className="text-xl font-bold text-[#dbbdff] dark:text-[#be7eff] mb-2">Acompanhamento e Personalização</h3>
              <p className="text-gray-200">
                Pais podem acompanhar o progresso, personalizar tarefas e participar ativamente do desenvolvimento de seus filhos de forma prática e eficaz.
              </p>
            </div>

            <div className="bg-black bg-opacity-40 p-6 rounded-lg border border-purple-500/50 backdrop-blur-sm">
              <h3 className="text-xl font-bold text-[#dbbdff] dark:text-[#be7eff] mb-2">Narrativa Interativa</h3>
              <p className="text-gray-200">
                Mergulhe em uma história sobre amizade e tecnologia. Suas escolhas definem o futuro de Daphne e Megan, explorando o que nos torna humanos.
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
