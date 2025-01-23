import Image from "next/image";
import styles from './page.module.css';

export default function Home() {
  return (
    <div className="flex flex-col md:flex-row w-full h-screen">
      <div className="flex flex-col justify-center items-center bg-gradient-to-r from-teal-400 via-cyan-500 to-sky-400  text-white w-full md:w-1/2 h-full p-8 gap-4">
        <h1 className="text-6xl font-bold mb-4">Bem vindo à pokedex</h1>
        <p className="text-lg mb-4 text-center max-w-2xl">
          Mergulhe no mundo dos Pokémons e descubra uma variedade incrível de criaturas com habilidades únicas. Explore suas características, evoluções e histórias para se tornar um verdadeiro mestre Pokémon!
        </p>

        <a
          href="/home"
          className="relative inline-flex items-center justify-center px-8 py-2.5 overflow-hidden font-medium text-cyan-600 transition duration-300 ease-out border-2 border-cyan-600 rounded shadow-md group w-full sm:w-auto">
          <span
            className="absolute inset-0 flex items-center justify-center w-full h-full text-white duration-300 -translate-x-full bg-cyan-600 group-hover:translate-x-0 ease">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
            </svg>
          </span>
          <span
            className="absolute flex items-center text-base font-semibold justify-center w-full h-full text-white transition-all duration-300 transform group-hover:translate-x-full ease">Comece a explorar</span>
          <span className="relative text-base font-semibold invisible">Comece a explorar</span>
        </a>
      </div>

      <div className="hidden md:flex justify-center items-center bg-black w-full md:w-1/2 h-full">
        <Image
          className={`object-contain ${styles.img}`}
          src="/assets/squirtle.png"
          alt="Squirtle"
          width={500}
          height={180}
          priority
        />
      </div>
    </div>
  );
}
