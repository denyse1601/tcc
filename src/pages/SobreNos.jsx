import { InstagramLogo, LinkedinLogo } from '@phosphor-icons/react';
import DenyseImage from '../assets/foto-denyse.png';
import JoannaImage from '../assets/foto-joanna.png';
import LauraImage from '../assets/foto-laura.png';
import MariaImage from '../assets/foto-maria.png';

export function SobreNos() {
  const teamMembers = [
    { name: 'Denyse', image: DenyseImage, role: 'Gerente do projeto', linkedin: 'https://www.linkedin.com/in/denyse-dos-santos-lima-a98420339?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app', instagram: 'https://www.instagram.com/denyselima_br?igsh=MW9kZnMwbXR0aWN1eA==' },
    { name: 'Joanna', image: JoannaImage, role: 'Designer', linkedin: 'https://www.linkedin.com/in/joanna-barros-07ab79335/', instagram: 'https://www.instagram.com/_jooh_18/' },
    { name: 'Laura', image: LauraImage, role: 'Desenvolvedora', linkedin: 'https://www.linkedin.com/in/laura-s-001015313?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app', instagram: 'https://www.instagram.com/lar_ssweet.pv?igsh=ZG0yMDRsanFpY2Jy&utm_source=qr' },
    { name: 'Maria C.', image: MariaImage, role: 'Desenvolvedora', linkedin: 'https://www.linkedin.com/in/maria-clara-gama-a90748337', instagram: 'https://www.instagram.com/maria_09118?utm_source=qr&igsh=bnNzeTM2ZHpsa2Rs' },
  ];

  return (
    <main className="bg-[#B3A4D8] relative flex flex-col min-h-screen text-center dark:bg-[#451A5D] text-[#451A5D] dark:text-white transition-colors duration-500 pt-24 md:pt-32 px-4 md:px-6">
      <div className="max-w-5xl mx-auto z-10">
        <h1 className="font-semibold mt-20 mb-6 text-[#B2009A] dark:text-[#FF73EC] text-3xl sm:text-4xl md:text-5xl">
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
                className="w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32 object-cover rounded-full border-4 border-white mx-auto mb-4 transition-transform duration-300 hover:scale-110 mt-10 mb-6"
              />
              <p className="font-bold text-sm sm:text-base md:text-lg text-[#B2009A] dark:text-[#FF73EC]">{member.name}</p>
              <p className="text-xs sm:text-sm text-gray-200 dark:text-gray-400">{member.role}</p>
              <div className="flex justify-center gap-4 mt-2">
                <a href={member.linkedin} target="_blank" rel="noopener noreferrer">
                  <LinkedinLogo size={24} className="text-white  hover:text-[#B7009F] dark:hover:text-[#FF73EC]" />
                </a>
                <a href={member.instagram} target="_blank" rel="noopener noreferrer">
                  <InstagramLogo size={24} className="text-white  hover:text-[#B7009F] dark:hover:text-[#FF73EC]" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
