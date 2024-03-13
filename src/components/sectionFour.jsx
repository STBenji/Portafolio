import { FaGithub, FaLinkedin, FaMailBulk } from 'react-icons/fa'

export const SectionFour = () => {
  return (
    <footer className="flex flex-col items-center w-full gap-8 py-16 mt-14 bg-fourth">
      <h2 className="text-3xl font-bold md:text-4xl text-lighter">Contáctame</h2>
      <section className="grid grid-cols-1 gap-8 md:grid-cols-3 ">
        <div className="flex items-center justify-center gap-2">
          <FaMailBulk />
          stevenbenjumea9@gmail.com
        </div>
        <div className="flex items-center justify-center gap-2">
          <FaGithub />
          <a href="https://github.com/STBenji" target="_blank" className="underline hover:text-lighter">
            STBenji
          </a>
        </div>
        <div className="flex items-center justify-center gap-2">
          <FaLinkedin />
          <a href="https://www.linkedin.com/in/stivenbm/" target="_blank" className="underline hover:text-lighter">
            Stiven Benjumea Morales
          </a>
        </div>
      </section>
    </footer>
  )
}
