export const SectionFive = () => {
  return (
    <section className="flex flex-col items-center justify-center min-h-screen gap-6 px-12 py-12">
      <h2 className="text-3xl font-bold md:text-4xl text-lighter" data-aos="fade-down">
        Estudios y Experiencia
      </h2>
      <section className="flex gap-28 mt-[5rem] flex-col md:flex-row">
        <div>
          <ol className="relative border-gray-200 border-s">
            <li className="mb-10 ms-6" data-aos="fade-right">
              <span className="absolute flex items-center justify-center w-4 h-4 bg-green-800 rounded-full ring-gray-900 -start-8 ring-4"></span>
              <h3 className="flex items-center mb-1 text-lg font-semibold text-white ">Técnico en Desarrollo de Software</h3>
              <time className="block mb-2 text-sm font-normal leading-none text-gray-400 ">ene 2020 - dic 2021</time>
              <p className="mb-4 text-base font-normal text-gray-400 ">Servicio Nacional De Aprendizaje - SENA</p>
            </li>
            <li className="mb-10 ms-6" data-aos="fade-right">
              <span className="absolute flex items-center justify-center w-4 h-4 bg-green-800 rounded-full -start-8 ring-4 ring-gray-900"></span>
              <h3 className="flex items-center mb-1 text-lg font-semibold text-white ">Tecnólogo en Análisis y Desarrollo de Software</h3>
              <time className="block mb-2 text-sm font-normal leading-none text-gray-400 ">feb 2022 - nov 2023</time>
              <p className="mb-4 text-base font-normal text-gray-400 ">Servicio Nacional De Aprendizaje - SENA</p>
            </li>
            <li className="mb-10 ms-6" data-aos="fade-right">
              <span className="absolute flex items-center justify-center w-4 h-4 bg-green-800 rounded-full -start-8 ring-4 ring-gray-900"></span>
              <h3 className="flex items-center mb-1 text-lg font-semibold text-white ">Curso de programación C#</h3>
              <time className="block mb-2 text-sm font-normal leading-none text-gray-400 ">may 2021</time>
            </li>
          </ol>
        </div>

        <div>
          <ol className="relative border-gray-200 border-s">
            <li className="mb-10 ms-6" data-aos="fade-left">
              <span className="absolute flex items-center justify-center w-4 h-4 bg-green-800 rounded-full -start-8 ring-4 ring-gray-900"></span>
              <h3 className="flex items-center mb-1 text-lg font-semibold text-white ">Desarrollador web full stack</h3>
              <time className="block mb-2 text-sm font-normal leading-none text-gray-400 ">may 2023 - nov 2023</time>
              <p className="mb-4 text-base font-normal text-gray-400 ">Teleperformance</p>
            </li>
            <li className="mb-10 ms-6" data-aos="fade-left">
              <span className="absolute flex items-center justify-center w-4 h-4 bg-green-800 rounded-full -start-8 ring-4 ring-gray-900"></span>
              <h3 className="flex items-center mb-1 text-lg font-semibold text-white ">Aprendiz en Desarrollo de software</h3>
              <time className="block mb-2 text-sm font-normal leading-none text-gray-400 ">nov 2022 - abr 2023</time>
              <p className="mb-4 text-base font-normal text-gray-400 ">Servicio Nacional De Aprendizaje - SENA</p>
            </li>
            <li className="mb-10 ms-6" data-aos="fade-left">
              <span className="absolute flex items-center justify-center w-4 h-4 bg-green-800 rounded-full -start-8 ring-4 ring-gray-900"></span>
              <h3 className="flex items-center mb-1 text-lg font-semibold text-white ">Desarrollador Front end</h3>
              <time className="block mb-2 text-sm font-normal leading-none text-gray-400 ">nov 2023 - ene 2024</time>
              <p className="mb-4 text-base font-normal text-gray-400 ">Aguas de Sincé</p>
            </li>
          </ol>
        </div>
      </section>
    </section>
  )
}
