import React from "react";
import appImg from "../assets/app.png";

export function Instrucoes() {
  return (
    <div className="min-h-screen bg-[#B3A4D8] flex flex-col text-[#451A5D] dark:bg-[#451A5D] dark:text-white pt-24 md:pt-32 transition-colors duration-500">
      <div className="max-w-6xl mx-auto">
        <section className="px-4 md:px-8 py-10 flex justify-center">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold mb-6 text-[#B2009A] dark:text-[#FF73EC] mt-20">
            INSTRUÇÕES
          </h2>
        </section>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <section className="px-4 md:px-8">
            <img src={appImg} alt="App screenshot" className="rounded-lg shadow-lg" />
          </section>
          <section className="px-4 md:px-8">
            <h3 className="text-2xl font-bold mb-4">Como funciona?</h3>
            <p className="text-base leading-relaxed text-justify">
            No aplicativo você poderá inserir as tarefas necessárias para o dia a dia da criança, clicando no botão e escrevendo o que quer que a criança faça, além de poder colocar o horário em que a criança deverá realizar a tarefa dela, tudo isso de uma maneira fácil, rápido e lúdica.
            <br/><br/>
            O Mini Semáforo Bluetooth é um relógio inteligente físico que utiliza um Arduino com três LEDs coloridos: verde, amarelo e vermelho. Ele é controlado por um aplicativo no celular que se conecta ao relógio por Bluetooth. Quando o responsável toca em um botão no app, o comando é enviado ao relógio, que acende o LED correspondente. A luz verde indica que a criança está em tempo livre, a amarela que é hora de se preparar, e a vermelha que é momento de fazer uma tarefa. Dessa forma, a criança acompanha sua rotina de forma visual e simples, apenas observando as luzes acesas no relógio.
            </p>
          </section>
        </div>


        <section className="roxo-transparente px-4 md:px-8 py-10 flex flex-wrap justify-center gap-6 text-center">
          <div className="dark:bg-white bg-gray-400 dark:text-purple-900  text-white rounded-lg shadow-lg p-6 size-50">
            <p className="font-bold">1</p>
            <p className="text-sm mt-2">
              Protótipo do relógio montado com Arduino, LEDs e HC-05
            </p>
          </div>
          <div className="dark:bg-white bg-gray-400 dark:text-purple-900  text-white rounded-lg shadow-lg p-6 size-50">
            <p className="font-bold">2</p>
            <p className="text-sm mt-2">Celular Android com Bluetooth ativado</p>
          </div>
          <div className="dark:bg-white bg-gray-400 dark:text-purple-900  text-white rounded-lg shadow-lg p-6 size-50">
            <p className="font-bold">3</p>
            <p className="text-sm mt-2">App instalado no celular</p>
          </div>
          <div className="dark:bg-white bg-gray-400 dark:text-purple-900 text-white rounded-lg shadow-lg p-6 size-50">
            <p className="font-bold">4</p>
            <p className="text-sm mt-2">
              Código carregado no Arduino para interpretar os comandos recebidos
            </p>
          </div>
        </section>
      </div>
    </div>
  );
}
