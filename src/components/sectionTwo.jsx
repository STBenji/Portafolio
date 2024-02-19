import React from 'react'
import { FaReact, FaGithub, FaGitSquare, FaNodeJs } from 'react-icons/fa'
import { SiTailwindcss, SiTypescript, SiMysql } from 'react-icons/si'
import { IoLogoJavascript } from 'react-icons/io'
import { TbBrandReactNative } from 'react-icons/tb'

export const SectionTwo = () => {
  return (
    <section className="flex flex-col items-center h-auto p-14 md:justify-center">
      <h2 className="text-3xl font-bold md:text-4xl text-lighter" data-aos="fade-down">
        Tecnologías
      </h2>
      <article className="flex flex-wrap justify-center gap-8 mt-20">
        <div className="flex flex-col items-center space-y-4 hover:text-[#61DAFB]" data-aos="fade-up">
          <FaReact className="text-6xl" />
          <p className="text-xl">ReactJs</p>
        </div>
        <div className="flex flex-col items-center space-y-4 hover:text-[#333333]" data-aos="fade-up" data-aos-delay="50">
          <FaGithub className="text-6xl" />
          <p className="text-xl">GitHub</p>
        </div>
        <div className="flex flex-col items-center space-y-4 hover:text-[#38B2AC]" data-aos="fade-up" data-aos-delay="100">
          <SiTailwindcss className="text-6xl" />
          <p className="text-xl">Tailwind</p>
        </div>
        <div className="flex flex-col items-center space-y-4 hover:text-[#F7DF1E]" data-aos="fade-up" data-aos-delay="150">
          <IoLogoJavascript className="text-6xl" />
          <p className="text-xl">JavaScript</p>
        </div>
        <div className="flex flex-col items-center space-y-4 hover:text-[#68A063]" data-aos="fade-up" data-aos-delay="200">
          <FaNodeJs className="text-6xl" />
          <p className="text-xl">NodeJs</p>
        </div>
        <div className="flex flex-col items-center space-y-4 hover:text-[#007ACC]" data-aos="fade-up" data-aos-delay="250">
          <SiTypescript className="text-6xl" />
          <p className="text-xl">TypeScript</p>
        </div>
        <div className="flex flex-col items-center space-y-4 hover:text-[#F05032]" data-aos="fade-up" data-aos-delay="300">
          <FaGitSquare className="text-6xl" />
          <p className="text-xl">Git</p>
        </div>
        <div className="flex flex-col items-center space-y-4 hover:text-[#00758F]" data-aos="fade-up" data-aos-delay="350">
          <SiMysql className="text-6xl" />
          <p className="text-xl">MySQL</p>
        </div>
        <div className="flex flex-col items-center space-y-4 hover:text-[#61DAFB]" data-aos="fade-up" data-aos-delay="400">
          <TbBrandReactNative className="text-6xl" />
          <p className="text-xl">React Native</p>
        </div>
      </article>
    </section>
  )
}
