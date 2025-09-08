import Background from '../assets/fundo.png';

export function Home() {
  return (
    <main
      className="flex flex-col justify-center h-screen w-screen p-6 md:p-12 pt-32 md:pt-25 transition-colors duration-500"
      style={{
        backgroundImage: `url(${Background})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundAttachment: 'fixed',
      }}
    >
      <h2
        className="text-[#dbbdff] dark:text-[#be7eff] text-4xl md:text-5xl font-semibold mb-6"
        style={{ textShadow: '2px 2px 8px rgba(0,0,0,0.7)' }}
      >
        Sua nova experiência começa aqui
      </h2>
      <p className="text-white text-lg md:text-xl font-medium max-w-full md:max-w-5xl">
        Megan organiza o dia das crianças com lembretes e comandos de voz,
        promovendo autonomia e disciplina. Pelo site, os pais acompanham e
        personalizam cada etapa da rotina de forma prática e eficaz.
      </p>
    </main>
  );
}
