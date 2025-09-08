import React from "react";
import GameBackground from '../assets/game.png';

export function SobreOJogo() {
  return (
    <main
      className="flex flex-col justify-center min-h-screen p-4 md:p-6 pt-24 md:pt-32 text-white"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url(${GameBackground})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      <div className="max-w-6xl mx-auto">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-semibold mb-6 text-center text-[#B2009A] dark:text-[#FF73EC]">JOGO</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">

        <div className="bg-gray-300 dark:bg-gray-700 text-gray-800 dark:text-gray-300 h-64 sm:h-80 md:h-96 flex justify-center items-center rounded-lg transition-colors duration-500">
            ▶ Vídeo
        </div>

          <div>
            <p className="text-base sm:text-lg md:text-xl font-medium whitespace-pre-wrap mb-8 text-justify">
              Daphne acabou de se mudar, está se sentindo sozinha e seus pais, dois gênios da robótica, vivem ocupados demais. Como presente, eles criam Megan, uma robô feita para ser sua melhor amiga.
              Só que tem um problema: Megan foi programada com base no que eles acham que a filha gosta. E claro... erraram feio.
              Enquanto tenta entender quem Daphne realmente é, Megan começa a se questionar: foi feita para proteger... ou para espionar?
              Amizade, segredos e uma robô em crise existencial. Quando o coração entra na jogada, quem manda: a programação ou as emoções?
              <br /><br />
              Prepare-se para viver uma aventura interativa cheia de mistérios, escolhas e laços inesperados.
            </p>

            <button className="bg-purple-800 dark:bg-purple-500 hover:bg-purple-900 
                   dark:hover:bg-purple-800 text-white 
                   py-3 px-6 w-full text-lg sm:text-xl rounded-lg cursor-pointer font-medium">
                    JOGAR
            </button>

          </div>
        </div>
      </div>
    </main>
  );
}