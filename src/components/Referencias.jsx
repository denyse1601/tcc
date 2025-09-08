import React from "react";

export function Referencias() {
  return (
    <main className="flex flex-col min-h-screen p-4 md:p-6 pt-24 md:pt-32 text-[#451A5D] dark:text-white bg-[#7F67BC] dark:bg-[#451A5D] transition-colors duration-500">
      <h1 className="text-3xl sm:text-4xl md:text-5xl font-semibold mb-6 text-center text-[#B2009A] dark:text-[#FF73EC]">
        REFERÊNCIAS
      </h1>

      <p className="text-base leading-relaxed max-w-4xl mx-auto text-justify">
        Esta página reúne todas as fontes de informação utilizadas na elaboração dos conteúdos presentes neste site. As referências aqui listadas foram cuidadosamente selecionadas para garantir a precisão, a confiabilidade e a qualidade das informações disponibilizadas aos visitantes. Nosso compromisso com a transparência e o rigor intelectual nos motiva a citar adequadamente livros, artigos, sites e outros materiais consultados durante a produção dos textos. Esperamos que esta bibliografia também possa servir como ponto de partida para quem deseja se aprofundar nos temas abordados.
      </p>

      <ul className="mt-8 max-w-4xl mx-auto space-y-4">
        <li>
          <a
            href="https://pepsic.bvsalud.org/scielo.php?pid=S1679-494X2019000200007&script=sci_arttext"
            target="_blank"
            rel="noopener noreferrer"
            className="block bg-purple-300 dark:bg-purple-700 text-[#451A5D] dark:text-white p-4 rounded-lg hover:bg-purple-400 dark:hover:bg-purple-600 transition-colors"
          >
            Família digital: a influência da tecnologia nas relações entre pais e filhos adolescentes
          </a>
        </li>
        <li>
          <a
            href="https://www.scielo.br/j/qn/a/sRHh7PYkvBfzDffJKPkgzdG/?format=pdf&lang=pt"
            target="_blank"
            rel="noopener noreferrer"
            className="block bg-purple-300 dark:bg-purple-700 text-[#451A5D] dark:text-white p-4 rounded-lg hover:bg-purple-400 dark:hover:bg-purple-600 transition-colors"
          >
            As tecnologias interativas no ensino
          </a>
        </li>
        <li>
          <a
            href="https://periodicos.ufsc.br/index.php/zeroseis/article/view/79007"
            target="_blank"
            rel="noopener noreferrer"
            className="block bg-purple-300 dark:bg-purple-700 text-[#451A5D] dark:text-white p-4 rounded-lg hover:bg-purple-400 dark:hover:bg-purple-600 transition-colors"
          >
            Educação infantil e tecnologias digitais
          </a>
        </li>
        <li>
          <a
            href="https://revistas.ufg.br/interacao/article/view/35869"
            className="block bg-purple-300 dark:bg-purple-700 text-[#451A5D] dark:text-white p-4 rounded-lg hover:bg-purple-400 dark:hover:bg-purple-600 transition-colors"
          >
            A tecnologia e o relacionamento familiar
          </a>
        </li>
      </ul>
    </main>
  );
}
