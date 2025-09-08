import DenyseImage from '../assets/foto-denyse.png';
import JoannaImage from '../assets/foto-joanna.png';
import LauraImage from '../assets/foto-laura.png';
import MariaImage from '../assets/foto-maria.png';

export function SobreNos() {
  const teamMembers = [
    { name: 'Denyse', image: DenyseImage, role: 'Gerente do projeto' },
    { name: 'Joanna', image: JoannaImage, role: 'Designer' },
    { name: 'Laura', image: LauraImage, role: 'Desenvolvedora' },
    { name: 'Maria C.', image: MariaImage, role: 'Desenvolvedora' },
  ];

  return (
    <main className="bg-[#7F67BC] pt-24 md:pt-32 flex flex-col justify-center min-h-screen p-4 md:p-6 text-center dark:bg-[#451A5D] text-[#451A5D] dark:text-white transition-colors duration-500">
      <div className="max-w-5xl mx-auto">
        <h1 className="font-semibold mb-6 text-[#B2009A] dark:text-[#FF73EC] text-3xl sm:text-4xl md:text-5xl">
          SOBRE NÓS
        </h1>

        <p className="max-w-4xl mx-auto mb-12 text-sm sm:text-base md:text-lg leading-relaxed text-justify">
          Somos quatro garotas cheias de ideias, criatividade e vontade de transformar o que aprendemos em algo útil e inovador. Estudantes do ensino médio, unimos nossos conhecimentos, sonhos e muito esforço para criar um projeto que fizesse a diferença. Cada uma com seu talento, mas com o mesmo objetivo: aprender, crescer e mostrar que juventude também é sinônimo de competência. Esse é só o começo da nossa jornada!
        </p>

        <div className="flex justify-center gap-6 sm:gap-10 flex-wrap">
          {teamMembers.map((member, index) => (
            <div key={index} className="text-center w-28 sm:w-32 md:w-40">
              <img
                src={member.image}
                alt={`Foto de ${member.name}`}
                className="w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32 object-cover rounded-full border-4 border-white mx-auto mb-4 transition-transform duration-300 hover:scale-110"
              />
              <p className="font-bold text-sm sm:text-base md:text-lg text-[#B2009A] dark:text-[#FF73EC]">{member.name}</p>
              <p className="text-xs sm:text-sm text-gray-200 dark:text-gray-400">{member.role}</p>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
