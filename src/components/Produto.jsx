import BluetoothImage from '../assets/bluetooth-hc05.png';
import LedsImage from '../assets/leds.png';
import ResistoresImage from '../assets/Resistores-para-LEDs.png';
import ProtoboardImage from '../assets/Protoboard.png';
import JumpersImage from '../assets/Jumpers.png';
import CaboUsbImage from '../assets/cabo-usb.png';
import LcdImage from '../assets/lcd.png';

export function Produto() {
  const produtos = [
    { nome: "Placa Arduino Uno", preco: "R$ 50,00", imagem: "https://upload.wikimedia.org/wikipedia/commons/3/38/Arduino_Uno_-_R3.jpg" },
    { nome: "Módulo Bluetooth HC-05", preco: "R$ 30,00", imagem: BluetoothImage },
    { nome: "LEDs", preco: "R$ 2,50 (cada)", imagem: LedsImage },
    { nome: "Resistores para LEDs", preco: "R$ 5,00", imagem: ResistoresImage },
    { nome: "Protoboard", preco: "R$ 15,00", imagem: ProtoboardImage },
    { nome: "Jumpers", preco: "R$ 15,00", imagem: JumpersImage },
    { nome: "Lcd", preco: "R$ 150,00", imagem: LcdImage },
    { nome: "Cabo USB", preco: "R$ 8,00", imagem: CaboUsbImage },
  ];

  return (
    <main className="bg-[#7F67BC] dark:bg-[#451A5D] flex flex-col justify-center min-h-screen p-4 md:p-6 dark:text-white text-[#451A5D] pt-24 md:pt-32">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-semibold mb-6 text-[#B2009A] dark:text-[#FF73EC]">PRODUTO</h1>
        <p className="max-w-2xl mx-auto mb-12 text-sm sm:text-base md:text-lg leading-relaxed text-justify">
          Apresentamos os materiais usados para construir nosso protótipo, seus custos e o resultado final. Veja como a tecnologia pode ser aplicada de forma criativa e eficiente para dar vida a um projeto inovador.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 mb-12">
          {produtos.map((produto, index) => (
            <div
              key={index}
              className="bg-white/10 backdrop-blur-sm p-4 rounded-lg border border-white/20 flex flex-col justify-between h-full transition-colors duration-500"
            >
              <div className="flex-grow flex items-center justify-center mb-3">
                <img
                  src={produto.imagem}
                  alt={produto.nome}
                  className="max-h-28 max-w-full object-contain rounded-md"
                />
              </div>
              <div className="text-center">
                <p className="font-bold text-sm sm:text-base">{produto.nome}</p>
                <p className="text-[#B2009A] dark:text-[#FF73EC] text-xs sm:text-sm">{produto.preco}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-white/10 backdrop-blur-sm p-4 sm:p-8 rounded-lg border border-white/20 max-w-4xl mx-auto">
          <h2 className="font-bold text-2xl sm:text-3xl text-[#B2009A] dark:text-[#FF73EC] mb-4">Resultado Final</h2>
          <p className="text-sm sm:text-base md:text-lg leading-relaxed mb-6 text-center">
            O protótipo final é um sistema inteligente funcional, composto por uma caixa com LEDs coloridos controlados por um aplicativo de celular via conexão Bluetooth. O funcionamento e a montagem foram cuidadosamente pensados para demonstrar a viabilidade prática do projeto, mostrando como a tecnologia pode ser aplicada de maneira criativa e eficiente.
          </p>
          <p className="font-semibold text-sm sm:text-base md:text-lg text-center">
            Valor total estimado do protótipo: <span className="text-[#B2009A] dark:text-[#FF73EC]">R$ 163,00</span>
          </p>
          <p className="text-gray-200 dark:text-gray-400 text-xs sm:text-sm mt-2 text-center">
            (Valores de estimativa média com base em lojas online.)
          </p>
        </div>
      </div>
    </main>
  );
}
