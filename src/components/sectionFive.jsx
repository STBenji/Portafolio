export const SectionFive = () => {
  return (
    <section className="flex flex-col items-center justify-center min-h-screen gap-6 px-12 py-12">
      <h2 className="text-3xl font-bold md:text-4xl text-lighter">Estudios y Experiencia</h2>
      <section className="flex gap-28 mt-[5rem] flex-col md:flex-row">
        <div>
          <ol className="relative border-gray-200 border-s dark:border-gray-700">
            <li className="mb-10 ms-6">
              <span className="absolute flex items-center justify-center w-4 h-4 bg-green-100 rounded-full -start-2 ring-4 ring-white dark:ring-gray-900 dark:bg-green-900"></span>
              <h3 className="flex items-center mb-1 text-lg font-semibold text-gray-900 dark:text-white">Técnico en Desarrollo de Software</h3>
              <time className="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">ene 2020 - dic 2021</time>
              <p className="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">Servicio Nacional De Aprendizaje - SENA</p>
            </li>
            <li className="mb-10 ms-6">
              <span className="absolute flex items-center justify-center w-4 h-4 bg-green-100 rounded-full -start-2 ring-4 ring-white dark:ring-gray-900 dark:bg-green-900"></span>
              <h3 className="flex items-center mb-1 text-lg font-semibold text-gray-900 dark:text-white">Tecnólogo en Análisis y Desarrollo de Software</h3>
              <time className="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">feb 2022 - nov 2023</time>
              <p className="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">Servicio Nacional De Aprendizaje - SENA</p>
            </li>
            <li className="mb-10 ms-6">
              <span className="absolute flex items-center justify-center w-4 h-4 bg-green-100 rounded-full -start-2 ring-4 ring-white dark:ring-gray-900 dark:bg-green-900"></span>
              <h3 className="flex items-center mb-1 text-lg font-semibold text-gray-900 dark:text-white">Curso de programación C#</h3>
              <time className="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">may 2021</time>
            </li>
          </ol>
        </div>

        <div>
          <ol className="relative border-gray-200 border-s dark:border-gray-700">
            <li className="mb-10 ms-6">
              <span className="absolute flex items-center justify-center w-4 h-4 bg-green-100 rounded-full -start-2 ring-4 ring-white dark:ring-gray-900 dark:bg-green-900"></span>
              <h3 className="flex items-center mb-1 text-lg font-semibold text-gray-900 dark:text-white">Desarrollador web full stack</h3>
              <time className="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">may 2023 - nov 2023</time>
              <p className="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">Teleperformance</p>
            </li>
            <li className="mb-10 ms-6">
              <span className="absolute flex items-center justify-center w-4 h-4 bg-green-100 rounded-full -start-2 ring-4 ring-white dark:ring-gray-900 dark:bg-green-900"></span>
              <h3 className="flex items-center mb-1 text-lg font-semibold text-gray-900 dark:text-white">Aprendiz en Desarrollo de software</h3>
              <time className="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">nov 2022 - abr 2023</time>
              <p className="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">Servicio Nacional De Aprendizaje - SENA</p>
            </li>
            <li className="mb-10 ms-6">
              <span className="absolute flex items-center justify-center w-4 h-4 bg-green-100 rounded-full -start-2 ring-4 ring-white dark:ring-gray-900 dark:bg-green-900"></span>
              <h3 className="flex items-center mb-1 text-lg font-semibold text-gray-900 dark:text-white">Desarrollador Front end</h3>
              <time className="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">nov 2023 - ene 2024</time>
              <p className="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">Aguas de Sincé</p>
            </li>
          </ol>
        </div>
      </section>
    </section>
  )
}
