import { Button, Link } from '@nextui-org/react'
import { FaGithub } from 'react-icons/fa6'
import { CiLinkedin } from 'react-icons/ci'
import { IoIosArrowDown } from 'react-icons/io'

export const SectionOne = () => {
  return (
    <section className="flex justify-center h-screen px-4">
      <header className="mt-[7rem] flex flex-col items-center gap-[16px] text-center relative">
        <img src="imagePersonal.jpg" alt="" className="object-cover w-32 h-32 rounded-full" loading='lazy'/>
        <h1 className="text-2xl font-bold md:text-5xl">¡¡Hola👋!! Mi nombre es Stiven.</h1>
        <h2 className="text-xl font-semibold tracking-wide md:text-3xl">
          Desarrollador web <strong className="text-lighter"> Full Stack </strong>
        </h2>
        <p className="md:w-[75ch] text-[#999]">Cuento con las habilidades para liderar equipos de desarrollo. Me distingo por mi actitud positiva, trabajo excelente en equipo y pasión por el aprendizaje. Poseo una capacidad sobresaliente para crear interfaces amigables para el usuario y me adapto fácilmente a diversos entornos de trabajo.</p>
        
        <div className="flex gap-3">
          <Button className="bg-secondary hover:bg-lighter text-[2.4ch] text-white" href="https://github.com/STBenji" target="_blank" isIconOnly as={Link}>
            <FaGithub />
          </Button>
          <Button className="text-white bg-secondary hover:bg-lighter text-[2.5ch]" isIconOnly href="https://www.linkedin.com/in/stiven-benjumea-morales-53639823a/" target="_blank" as={Link}>
            <CiLinkedin />
          </Button>

          <Button className="text-white bg-transparent hover:bg-lighter" variant="bordered">
            Descargar HV
          </Button>
        </div>
      </header>
      <div className="absolute text-3xl bottom-6 animate-bounce">
        <IoIosArrowDown />
      </div>
    </section>
  )
}
